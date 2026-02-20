import sys
import re

def add_stars(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"File not found: {filepath}")
        return

    # Regex to match [Name](https://github.com/Owner/Repo)
    # Group 1: Name
    # Group 2: Full URL
    # Group 3: Owner
    # Group 4: Repo
    # We use a strict regex that expects no trailing path after repo name
    pattern = r'\[([^\]]+)\]\((https:\/\/github\.com\/([^/]+)\/([^/)]+))\)'

    def replacer(match):
        full_match = match.group(0)
        start = match.start()
        end = match.end()

        # Check if it's an image link (starts with !)
        if start > 0 and content[start - 1] == '!':
            return full_match

        # Check if already followed by a badge or image (starts with ![)
        next_text = content[end:]
        if re.match(r'^\s*!\[', next_text):
            return full_match

        owner = match.group(3)
        repo = match.group(4)

        # Construct badge
        badge = f" ![GitHub Repo stars](https://img.shields.io/github/stars/{owner}/{repo})"

        # Check if followed by " - " or similar and normalize spaces
        # If the text immediately following is a dash, we want to ensure there's exactly one space after the dash?
        # Actually, the problem was double space BEFORE the dash or after the dash.
        # Original: `[Link](url) -  Description`
        # Inserted: `[Link](url) [Badge] -  Description`
        # The badge logic inserts a leading space: " ![...]"
        # So it becomes `[Link](url) ![...](...) -  Description`
        # The linter complained about `List item link and description must be separated with a dash`.
        # This usually means parsing failed.
        # The issue in line 341 was specifically `-  Description`.
        # My script doesn't touch the text AFTER the match insertion point usually.
        # But if I can detect that I am inserting before " - ", I might want to help clean it up?
        # Or simpler: The script just adds the badge. The lint error was pre-existing (latent) or caused by the shift in structure making the linter stricter.
        # Actually, the linter rule `awesome-list-item` checks the structure.
        # If I change `[Link] -  Desc` to `[Link] [Badge] -  Desc`, the linter still parses `[Badge]` as part of the "link" complex or just ignores it?
        # In this specific case, I just fixed the file manually.
        # Making the script robust to fixing existing formatting errors is maybe out of scope for "add stars", but good for "maintenance".
        # Let's keep the script simple but correct.

        return full_match + badge

    new_content = re.sub(pattern, replacer, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes needed for {filepath}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 add_stars.py <filepath>")
        sys.exit(1)

    add_stars(sys.argv[1])
