document.getElementById('command-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const command = this.value;
        executeCommand(command);
        this.value = '';
    }
});
function executeCommand(command) {
    const outputDiv = document.getElementById('output');
    const newLine = document.createElement('div');
    newLine.textContent = '$ ' + command;
    outputDiv.appendChild(newLine);

    // Example commands (you can replace them with your own logic)
    switch (command.trim()) {
        case 'help':
            outputDiv.appendChild(createOutputLine('Available commands: help, about, contact'));
            break;
        case 'about':
            outputDiv.appendChild(createOutputLine('This is a terminal-like website example.'));
            break;
        case 'contact':
            outputDiv.appendChild(createOutputLine('Contact us at example@example.com'));
            break;
        default:
            outputDiv.appendChild(createOutputLine('Command not found'));
    }
}

function createOutputLine(text) {
    const outputLine = document.createElement('div');
    outputLine.textContent = text;
    return outputLine;
}

const inputTextarea = document.getElementById('command-input');
const outputDiv = document.getElementById('output-text');

inputTextarea.addEventListener('input', function() {
    const text = this.value;
    const paragraphs = text.split('\n').map(line => `<p>${line}</p>`).join('');
    outputDiv.innerHTML = paragraphs;
});

window.onload = function() {
    inputTextarea.value = presetText;
};

inputTextarea.addEventListener('blur', function(){
    inputTextarea.focus();
});
