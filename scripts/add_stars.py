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
