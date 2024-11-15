import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const outputChannel = vscode.window.createOutputChannel("My Extension");

  const disposable = vscode.commands.registerCommand(
    "hello-output.helloWorld",
    () => {
      outputChannel.appendLine("Hello form My Extension!");
      outputChannel.show();
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
