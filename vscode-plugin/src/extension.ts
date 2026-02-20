import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('awesome-docs-stars.addStars', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const document = editor.document;

        editor.edit(editBuilder => {
            const text = document.getText();
            // Regex to find GitHub repo links: [Title](https://github.com/owner/repo)
            // It captures:
            // 1. Title
            // 2. Full URL
            // 3. Owner
            // 4. Repo
            // We use a simplified regex that expects strict format https://github.com/Owner/Repo without trailing path
            const regex = /\[([^\]]+)\]\((https:\/\/github\.com\/([^/]+)\/([^/)]+))\)/g;
            let match;

            while ((match = regex.exec(text)) !== null) {
                // check for preceding '!' (image)
                if (match.index > 0 && text[match.index - 1] === '!') {
                    continue;
                }

                const matchEndIndex = match.index + match[0].length;
                const nextText = text.substring(matchEndIndex);

                // Check if already followed by a badge or similar image
                // We look for optional whitespace then ![
                // This prevents double insertion
                if (/^\s*!\[/.test(nextText)) {
                   continue;
                }

                const owner = match[3];
                const repo = match[4];

                // Construct badge
                // Badge format: ![GitHub Repo stars](https://img.shields.io/github/stars/Owner/Repo)
                const badge = ` ![GitHub Repo stars](https://img.shields.io/github/stars/${owner}/${repo})`;

                // Insert at the end of the match
                const position = document.positionAt(matchEndIndex);
                editBuilder.insert(position, badge);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
