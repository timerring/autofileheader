// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// acquire the date and the convert into ISO (2024-10-26T12:34:56.789Z)
// then split it by T and reserve the first part.
const currentDate = new Date().toISOString().split('T')[0];
// difine some infomation.
const author = 'Your Name';
const description = 'File description goes here.';
const fileTypeHeaders: Record<string, string> = {
    'cpp': `/**
* @author ${author}
* @description ${description}
* @date ${currentDate}
*/`,
    'csharp': `/// <summary>
/// Author: ${author}
/// Description: ${description}
/// Date: ${currentDate}
/// </summary>`,
    'css': `/**
* @author ${author}
* @description ${description}
* @date ${currentDate}
*/`,
    'dart': `/// Author: ${author}
/// Description: ${description}
/// Date: ${currentDate}`,
    'Dockerfile': `# Author: ${author}
# Description: ${description}
# Date: ${currentDate}`,
    'fsharp': `(*
Author: ${author}
Description: ${description}
Date: ${currentDate}
*)`,
    'go': `// Author: ${author}
// Description: ${description}
// Date: ${currentDate}`,
    'html': `<!--
Author: ${author}
Description: ${description}
Date: ${currentDate}
-->`,
    'java': `/**
 * Author: ${author}
 * Description: ${description}
 * Date: ${currentDate}
 */`,
    'javascript': `/**
 * @author ${author}
 * @description ${description}
 * @date ${currentDate}
 */`,
    'julia': `# Author: ${author}
# Description: ${description}
# Date: ${currentDate}`,
    'less': `/**
* @author ${author}
* @description ${description}
* @date ${currentDate}
*/`,
    'markdown': `<!--
Author: ${author}
Description: ${description}
Date: ${currentDate}
-->`,
    'php': `<?php
/**
 * Author: ${author}
 * Description: ${description}
 * Date: ${currentDate}
 */`,
    'shell': `<#
.Author: ${author}
.Description: ${description}
.Date: ${currentDate}
#>`,
    'python': `"""
Author: ${author}
Description: ${description}
Date: ${currentDate}
"""`,
    'r': `# Author: ${author}
# Description: ${description}
# Date: ${currentDate}`,
    'ruby': `=begin
Author: ${author}
Description: ${description}
Date: ${currentDate}
=end`,
    'rust': `//! Author: ${author}
//! Description: ${description}
//! Date: ${currentDate}`,
    'scss': `/**
* @author ${author}
* @description ${description}
* @date ${currentDate}
*/`,
    'sql': `-- Author: ${author}
-- Description: ${description}
-- Date: ${currentDate}`,
    'typescript': `/**
 * @author ${author}
 * @description ${description}
 * @date ${currentDate}
 */`
};

function generateHeader() {
    // obtain the editor entity.
    const editor = vscode.window.activeTextEditor;
    // if there is no editor opened, then return null.
    if (!editor) {
        return;
    }
    // read the languageId from editor
    const languageId = editor.document.languageId;
    // query the fileTypeHeaders by languageId
    let header = fileTypeHeaders[languageId];
    // insert the header to the file.
    editor.edit(editBuilder => {
        editBuilder.insert(new vscode.Position(0, 0), header + '\n\n');
    });
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('autofileheader.generateHeader', generateHeader);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
