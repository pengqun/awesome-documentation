import os
import re
from markdown_it import MarkdownIt
from collections import defaultdict

# Initialize OpenAI if key is present
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
if OPENAI_API_KEY:
    try:
        from openai import OpenAI
        client = OpenAI(api_key=OPENAI_API_KEY)
    except ImportError:
        print("Warning: openai module not found.")
        client = None
else:
    client = None

def translate_text(text, target_lang="Chinese"):
    """
    Translates text to the target language using OpenAI or a mock.
    """
    if not client:
        print(f"Warning: OPENAI_API_KEY not set. Mocking translation for: {text[:30]}...")
        return f"[Translated] {text}"

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": f"You are a helpful assistant that translates English technical documentation to {target_lang}. Preserve markdown formatting and links. Translate the description part only, keep the link and structure intact if provided."},
                {"role": "user", "content": f"Translate the following text to {target_lang}:\n\n{text}"}
            ]
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"Error translating text: {e}")
        return text

def parse_markdown(content):
    """
    Parses markdown content into a structured list of items.
    Returns a list of dicts: {'section': ..., 'subsection': ..., 'link': ..., 'full_text': ..., 'line_index': ...}
    """
    md = MarkdownIt()
    tokens = md.parse(content)

    items = []
    current_section = None
    current_subsection = None

    for i, token in enumerate(tokens):
        if token.type == 'heading_open':
            # Get the heading content from the next inline token
            if i + 1 < len(tokens) and tokens[i+1].type == 'inline':
                heading_content = tokens[i+1].content
                if token.tag == 'h2':
                    current_section = heading_content
                    current_subsection = None
                elif token.tag == 'h3':
                    current_subsection = heading_content

        if token.type == 'inline' and token.children:
            # Check if this is a list item with a link
            link = None
            has_link = False

            for child in token.children:
                if child.type == 'link_open':
                    has_link = True
                    # accessing attrs safely
                    if child.attrs:
                        link = child.attrs.get('href')

            if has_link and link:
                 # Reconstruct the full line text for translation context
                 full_text = token.content

                 # Extract description (after the link)
                 line_index = token.map[0] if token.map else -1

                 items.append({
                     'section': current_section,
                     'subsection': current_subsection,
                     'link': link,
                     'full_text': full_text,
                     'line_index': line_index
                 })

    return items

def get_raw_lines(content):
    return content.splitlines()

def main():
    readme_path = "README.md"
    readme_zh_path = "README_zh.md"

    if not os.path.exists(readme_path) or not os.path.exists(readme_zh_path):
        print("Error: README.md or README_zh.md not found.")
        return

    with open(readme_path, 'r', encoding='utf-8') as f:
        en_content = f.read()

    with open(readme_zh_path, 'r', encoding='utf-8') as f:
        zh_content = f.read()

    en_items = parse_markdown(en_content)
    zh_items = parse_markdown(zh_content)

    # Create a set of links present in Chinese version for fast lookup
    zh_links = {item['link'] for item in zh_items}

    # Find items in English that are missing in Chinese
    missing_items = []
    for item in en_items:
        if item['link'] not in zh_links:
            missing_items.append(item)

    if not missing_items:
        print("No new items found in English version.")
        return

    print(f"Found {len(missing_items)} missing items in Chinese version.")

    zh_lines = get_raw_lines(zh_content)

    # Sort missing items by their position in English README
    missing_items.sort(key=lambda x: x['line_index'])

    # Map of link -> zh_item for finding position
    zh_link_map = {item['link']: item for item in zh_items}

    insertions = defaultdict(list) # line_index_in_zh -> list of strings to insert

    en_lines = get_raw_lines(en_content)

    for item in missing_items:
        # Find the index of this item in English items list.
        idx = -1
        for i, en_item in enumerate(en_items):
            if en_item['link'] == item['link']:
                idx = i
                break

        if idx == -1: continue

        anchor_zh_line = -1
        insert_position = "after"

        # Try to find a preceding item that exists in Chinese
        for i in range(idx - 1, -1, -1):
            prev_en_link = en_items[i]['link']
            if prev_en_link in zh_link_map:
                anchor_zh_line = zh_link_map[prev_en_link]['line_index']
                insert_position = "after"
                break

        # If no preceding item found, try finding a following item
        if anchor_zh_line == -1:
            for i in range(idx + 1, len(en_items)):
                next_en_link = en_items[i]['link']
                if next_en_link in zh_link_map:
                    anchor_zh_line = zh_link_map[next_en_link]['line_index']
                    insert_position = "before"
                    break

        if anchor_zh_line != -1:
            raw_en_line = en_lines[item['line_index']]

            # Simple regex to split link and description
            # Matches: - [Name](Link) - Description OR * [Name](Link) Description
            match = re.match(r'^(\s*[-*]\s*\[.*?\]\(.*?\)\s*-?\s*)(.*)', raw_en_line)
            if match:
                prefix = match.group(1)
                description = match.group(2)
                if description.strip():
                    translated_desc = translate_text(description)
                    new_line = f"{prefix}{translated_desc}"
                else:
                    new_line = raw_en_line # No description to translate
            else:
                # Fallback: translate the whole line
                new_line = translate_text(raw_en_line)

            # Add to insertions
            if insert_position == "after":
                insertions[anchor_zh_line + 1].append(new_line)
            else:
                insertions[anchor_zh_line].append(new_line)
        else:
            print(f"Could not find anchor for item: {item['link']}")
            pass

    # Apply insertions
    sorted_lines = sorted(insertions.keys(), reverse=True)

    new_zh_lines = zh_lines[:]

    for line_idx in sorted_lines:
        lines_to_insert = insertions[line_idx]
        for line_content in reversed(lines_to_insert):
             # Ensure we don't insert out of bounds
             if line_idx > len(new_zh_lines):
                 new_zh_lines.append(line_content)
             else:
                 new_zh_lines.insert(line_idx, line_content)

    # Write back
    with open(readme_zh_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_zh_lines))
        # Add a newline at the end if the original file had one, standard practice is yes.
        f.write('\n')

    print(f"Successfully added {len(missing_items)} items to {readme_zh_path}")

if __name__ == "__main__":
    main()
