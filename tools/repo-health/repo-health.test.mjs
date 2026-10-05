import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractRepos, classify, renderMarkdown } from './repo-health.mjs';

const SAMPLE = `# Title [![Lint](https://github.com/me/list/actions/workflows/lint.yml/badge.svg)](https://github.com/me/list/actions)

- [Docusaurus](https://github.com/facebook/docusaurus) - Site builder.
- [Pyguide](https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38) - Python comments.
- [Style Guide](https://github.com/Google/StyleGuide) - Same repo, different case.
- [Structurizr](https://github.com/structurizr) - An org page, not a repo.
- [Topic](https://github.com/topics/documentation) - Not a repo either.
- [Repo.git](https://www.github.com/owner/thing.git) - Trailing .git.
- [Elsewhere](https://example.com) - Not GitHub.
`;

test('extractRepos keeps list-item repo links, dedupes case-insensitively', () => {
  const { repos, skipped } = extractRepos(SAMPLE);
  assert.deepEqual(repos.map((r) => r.slug), ['facebook/docusaurus', 'google/styleguide', 'owner/thing']);
  assert.deepEqual(repos[1].lines, [4, 5]);
  assert.equal(repos[1].name, 'Pyguide');
  assert.deepEqual(skipped.map((s) => s.name), ['Structurizr', 'Topic']);
});

test('extractRepos ignores links outside list items (badges, prose)', () => {
  const { repos } = extractRepos(SAMPLE);
  assert.ok(!repos.some((r) => r.slug === 'me/list'));
});

const now = new Date('2026-10-05T00:00:00Z');
const entry = { slug: 'facebook/docusaurus', name: 'Docusaurus', url: '', lines: [3] };
const info = (over = {}) => ({
  nameWithOwner: 'facebook/docusaurus',
  stargazerCount: 60000,
  isArchived: false,
  pushedAt: '2026-10-01T00:00:00Z',
  defaultBranchRef: { target: { committedDate: '2026-09-30T00:00:00Z' } },
  ...over,
});

test('classify: ok, stale, archived, missing, moved', () => {
  assert.equal(classify(entry, info(), { now }).status, 'ok');
  assert.equal(classify(entry, null, { now }).status, 'missing');
  assert.equal(classify(entry, info({ isArchived: true }), { now }).status, 'archived');
  const old = info({ defaultBranchRef: { target: { committedDate: '2023-01-01T00:00:00Z' } } });
  assert.equal(classify(entry, old, { now, months: 24 }).status, 'stale');
  assert.equal(classify(entry, old, { now, months: 48 }).status, 'ok');
  assert.equal(classify(entry, info({ nameWithOwner: 'Facebook/Docusaurus' }), { now }).moved, false);
  assert.equal(classify(entry, info({ nameWithOwner: 'meta/docusaurus' }), { now }).moved, true);
});

test('classify falls back to pushedAt when there is no default branch', () => {
  const r = classify(entry, info({ defaultBranchRef: null, pushedAt: '2020-01-01T00:00:00Z' }), { now });
  assert.equal(r.lastCommit, '2020-01-01T00:00:00Z');
  assert.equal(r.status, 'stale');
});

test('renderMarkdown lists only problem sections unless --all', () => {
  const results = [
    classify(entry, info(), { now }),
    classify({ ...entry, slug: 'a/b', name: 'Gone' }, null, { now }),
  ];
  const md = renderMarkdown(results, { file: 'README.md', months: 24, all: false, skipped: [], today: '2026-10-05' });
  assert.match(md, /Checked 2 GitHub repos on 2026-10-05: 0 archived · 0 stale .* 1 missing\./);
  assert.match(md, /## Missing — link is dead \(1\)/);
  assert.doesNotMatch(md, /All repos by stars/);
  const full = renderMarkdown(results, { file: 'README.md', months: 24, all: true, skipped: [], today: '2026-10-05' });
  assert.match(full, /\| Docusaurus \| facebook\/docusaurus \| 60\.0k \| 2026-09-30 \| ok \|/);
});

test('renderMarkdown escapes pipes in item names so tables stay intact', () => {
  const r = classify({ ...entry, name: 'Test Plan | VS Code' }, null, { now });
  const md = renderMarkdown([r], { file: 'README.md', months: 24, all: false, skipped: [], today: '2026-10-05' });
  assert.match(md, /\| Test Plan \\\| VS Code \|/);
});
