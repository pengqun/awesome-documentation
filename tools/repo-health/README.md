# repo-health

Checks every GitHub repo linked from the list and reports the ones that need attention:

- **Missing**: the link 404s (typo, deleted repo).
- **Archived**: the repo has been archived, so consider removing or replacing the item.
- **Stale**: no commit on the default branch in the last N months (default 24).
- **Moved**: the repo was renamed or transferred, so the link should be updated.

It only looks at list items (`- [Name](https://github.com/owner/repo...)`); badges and org pages are skipped. Deep links (`.../blob/...`, `.../wiki/...`) are checked against their repo.

## Usage

Requires Node.js 18+ and a GitHub token (`GITHUB_TOKEN` / `GH_TOKEN`, or a logged-in `gh` CLI). One GraphQL request per 50 repos, no dependencies.

```bash
node tools/repo-health/repo-health.mjs                    # README.md, problems only
node tools/repo-health/repo-health.mjs README_zh.md --all # plus every repo sorted by stars
node tools/repo-health/repo-health.mjs --months 36        # stricter definition of "stale"
node tools/repo-health/repo-health.mjs --json > health.json
```

Tests:

```bash
node --test tools/repo-health/repo-health.test.mjs
```
