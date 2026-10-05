#!/usr/bin/env node
// Check the health of every GitHub repo linked from an awesome-list README:
// stars, archived, last commit on the default branch, and moved/missing repos.
//
// Usage: node tools/repo-health/repo-health.mjs [README.md] [--months 24] [--all] [--json]
// Auth:  GITHUB_TOKEN / GH_TOKEN, or falls back to `gh auth token`.

import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

// First path segments on github.com that are not user/org names.
const RESERVED_OWNERS = new Set([
  'about', 'apps', 'collections', 'customer-stories', 'enterprise', 'events', 'explore',
  'features', 'issues', 'login', 'marketplace', 'notifications', 'orgs', 'pricing', 'pulls',
  'readme', 'search', 'security', 'settings', 'site', 'sponsors', 'topics', 'trending',
]);

const LINK_RE = /\[([^\]]+)\]\((https?:\/\/(?:www\.)?github\.com\/[^)\s]+)\)/g;
const BATCH_SIZE = 50;

/**
 * Pull GitHub repos out of the list items of an awesome-list markdown file.
 * Returns one entry per repo (deduped, case-insensitive) plus the links that
 * don't point at a repo (org pages etc.).
 */
export function extractRepos(markdown) {
  const repos = new Map();
  const skipped = [];
  markdown.split('\n').forEach((line, i) => {
    if (!/^\s*[-*] \[/.test(line)) return;
    for (const [, name, url] of line.matchAll(LINK_RE)) {
      const path = new URL(url).pathname.split('/').filter(Boolean);
      const [owner, rawRepo] = path;
      if (!owner || !rawRepo || RESERVED_OWNERS.has(owner.toLowerCase())) {
        skipped.push({ name, url, line: i + 1 });
        continue;
      }
      const repo = rawRepo.replace(/\.git$/, '');
      const key = `${owner}/${repo}`.toLowerCase();
      const entry = repos.get(key) ?? { slug: `${owner}/${repo}`, name, url, lines: [] };
      entry.lines.push(i + 1);
      repos.set(key, entry);
    }
  });
  return { repos: [...repos.values()], skipped };
}

/** Decide what (if anything) is wrong with one repo. */
export function classify(entry, info, { now = new Date(), months = 24 } = {}) {
  if (!info) return { ...entry, status: 'missing' };
  const lastCommit = info.defaultBranchRef?.target?.committedDate ?? info.pushedAt;
  const ageMonths = lastCommit ? (now - new Date(lastCommit)) / (1000 * 60 * 60 * 24 * 30.44) : Infinity;
  const result = {
    ...entry,
    canonical: info.nameWithOwner,
    stars: info.stargazerCount,
    lastCommit,
    ageMonths,
    archived: info.isArchived,
    moved: info.nameWithOwner.toLowerCase() !== entry.slug.toLowerCase(),
  };
  result.status = info.isArchived ? 'archived' : ageMonths > months ? 'stale' : 'ok';
  return result;
}

function githubToken() {
  const fromEnv = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (fromEnv) return fromEnv;
  try {
    return execFileSync('gh', ['auth', 'token'], { encoding: 'utf8' }).trim();
  } catch {
    throw new Error('No GitHub token: set GITHUB_TOKEN or log in with `gh auth login`.');
  }
}

async function fetchRepoInfo(slugs, token) {
  const infos = [];
  for (let start = 0; start < slugs.length; start += BATCH_SIZE) {
    const batch = slugs.slice(start, start + BATCH_SIZE);
    const fields = batch.map((slug, i) => {
      const [owner, name] = slug.split('/');
      return `r${i}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) {
        nameWithOwner stargazerCount isArchived pushedAt
        defaultBranchRef { target { ... on Commit { committedDate } } }
      }`;
    });
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{ ${fields.join('\n')} }` }),
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
    const { data, errors = [] } = await res.json();
    // NOT_FOUND comes back as a null field plus an error; anything else is fatal.
    const fatal = errors.filter((e) => e.type !== 'NOT_FOUND');
    if (!data || fatal.length) throw new Error(`GitHub API: ${JSON.stringify(fatal.length ? fatal : errors)}`);
    batch.forEach((_, i) => infos.push(data[`r${i}`]));
  }
  return infos;
}

const fmtStars = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n));
const fmtDate = (iso) => (iso ? iso.slice(0, 10) : '—');
const fmtAge = (m) => (m === Infinity ? 'never' : m >= 12 ? `${(m / 12).toFixed(1)}y` : `${Math.round(m)}mo`);
const fmtLines = (lines) => lines.map((l) => `L${l}`).join(', ');

export function renderMarkdown(results, { file, months, all, skipped, today }) {
  const by = (status) => results.filter((r) => r.status === status);
  const moved = results.filter((r) => r.moved);
  const out = [
    `# Repo health: ${file}`,
    '',
    `Checked ${results.length} GitHub repos on ${today}: ` +
      `${by('archived').length} archived · ${by('stale').length} stale (no commit in ${months}+ months) · ` +
      `${moved.length} moved · ${by('missing').length} missing.`,
  ];
  if (skipped.length) out.push('', `Skipped ${skipped.length} non-repo GitHub links (org pages etc.).`);

  const table = (title, rows, header, row) => {
    if (!rows.length) return;
    out.push('', `## ${title} (${rows.length})`, '', `| ${header.join(' | ')} |`, `|${header.map(() => ' --- ').join('|')}|`);
    rows.forEach((r) => out.push(`| ${row(r).map((cell) => String(cell).replaceAll('|', '\\|')).join(' | ')} |`));
  };
  const oldestFirst = (rows) => [...rows].sort((a, b) => b.ageMonths - a.ageMonths);

  table('Missing — link is dead', by('missing'), ['Item', 'Link', 'Line'],
    (r) => [r.name, r.url, fmtLines(r.lines)]);
  table('Archived — consider removing', oldestFirst(by('archived')), ['Item', 'Repo', '★', 'Last commit', 'Line'],
    (r) => [r.name, r.canonical, fmtStars(r.stars), `${fmtDate(r.lastCommit)} (${fmtAge(r.ageMonths)})`, fmtLines(r.lines)]);
  table('Stale — check if still maintained', oldestFirst(by('stale')), ['Item', 'Repo', '★', 'Last commit', 'Line'],
    (r) => [r.name, r.canonical, fmtStars(r.stars), `${fmtDate(r.lastCommit)} (${fmtAge(r.ageMonths)})`, fmtLines(r.lines)]);
  table('Moved — update the link', moved, ['Item', 'Linked as', 'Now at', 'Line'],
    (r) => [r.name, r.slug, r.canonical, fmtLines(r.lines)]);
  if (all) {
    const found = results.filter((r) => r.status !== 'missing').sort((a, b) => b.stars - a.stars);
    table('All repos by stars', found, ['Item', 'Repo', '★', 'Last commit', 'Status'],
      (r) => [r.name, r.canonical, fmtStars(r.stars), fmtDate(r.lastCommit), r.status]);
  }
  return out.join('\n') + '\n';
}

function parseArgs(argv) {
  const opts = { file: 'README.md', months: 24, all: false, json: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--all') opts.all = true;
    else if (arg === '--json') opts.json = true;
    else if (arg === '--months') opts.months = Number(argv[++i]);
    else if (arg === '-h' || arg === '--help') opts.help = true;
    else if (!arg.startsWith('-')) opts.file = arg;
    else throw new Error(`Unknown option: ${arg}`);
  }
  if (!(opts.months > 0)) throw new Error('--months must be a positive number');
  return opts;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    console.log('Usage: repo-health.mjs [README.md] [--months 24] [--all] [--json]');
    return;
  }
  const { repos, skipped } = extractRepos(readFileSync(opts.file, 'utf8'));
  const infos = await fetchRepoInfo(repos.map((r) => r.slug), githubToken());
  const now = new Date();
  const results = repos.map((r, i) => classify(r, infos[i], { now, months: opts.months }));
  if (opts.json) console.log(JSON.stringify({ file: opts.file, results, skipped }, null, 2));
  else process.stdout.write(renderMarkdown(results, { ...opts, skipped, today: now.toISOString().slice(0, 10) }));
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
