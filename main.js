import * as monaco from 'monaco-editor';

import lang_monarch from './lang_monarch.json';
import latex_monarch from './latex_monarch.json';

monaco.languages.register({ id: 'latex' });
monaco.languages.setMonarchTokensProvider('latex', latex_monarch);
monaco.languages.setLanguageConfiguration('latex', lang_monarch);

// 初始化 LaTeX 代码编辑器
const editor = monaco.editor.create(document.getElementById('editor'), {
    value: 
String.raw`\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

\begin{document}

\begin{tikzpicture}
\begin{axis}[colormap/viridis]
\addplot3[
	surf,
	samples=18,
	domain=-3:3
]
{exp(-x^2-y^2)*x};
\end{axis}
\end{tikzpicture}

\end{document}`,
    language: 'latex',
    automaticLayout: true
});

// 初始化日志区域（只读）
const logEditor = monaco.editor.create(document.getElementById('log'), {
    value: "Log output will be displayed here...",
    language: 'plaintext',
    readOnly: true,
    automaticLayout: true
});

// TikZjax 的输出逻辑（示例）
function updateOutput() {
    // Clear log
    logEditor.setValue('');
    const latexCode = editor.getValue();
    const output = document.getElementById('svg-container');
    // Create a <script type="text/tikz"> element
    const tikzScript = document.createElement('script');
    tikzScript.type = 'text/tikz';
    tikzScript.textContent = latexCode;
    // Remove the previous output
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
    // Append the new <script> element
    output.appendChild(tikzScript);
}

// 监听编辑器内容变化
editor.onDidChangeModelContent(() => {
    if (document.getElementById('auto-update').checked) {
        updateOutput();
    }
});

// 处理按钮点击事件
document.getElementById('update-button').addEventListener('click', () => {
    updateOutput();
});

document.getElementById('save-button').addEventListener('click', () => {
    const svg = document.getElementById('svg-container').querySelector('svg');
    if (svg) {
        const svgData = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'output.svg';
        a.click();
        URL.revokeObjectURL(url);
    } else {
        alert('No output to save!');
    }
});

// 初始更新
updateOutput();

// Patch console.log to also write to the log editor
const oldLog = console.log;
console.log = function() {
    oldLog.apply(console, arguments);
    logEditor.setValue(logEditor.getValue() + Array.from(arguments).join(' ') + '\n');
    logEditor.revealLine(logEditor.getModel().getLineCount());
}