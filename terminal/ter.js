const asciiArt =
`<pre>
                     _            _           
     _              (_)          (_)          
 ___| |_ _   _ _ __  _  ___ _ __  _ _   _ ___ 
/ __| __| | | | '_ \| |/ _ \ '_ \| | | | / __|
\__ \ |_| |_| | |_) | |  __/ | | | | |_| \__ \
|___/\__|\__,_| .__/|_|\___|_| |_|_|\__,_|___/
              | |                             
              |_|                             
</pre>
`;


function executeCommand(command,newOutput) {


    switch (command.trim()) {
        case 'help':
            newOutput.appendChild(createOutputLine('Available commands: help, about, contact'));
            break;
        case 'about':
            newOutput.appendChild(createOutputLine('This is a terminal-like website example.'));
            break;
        case 'contact':
            newOutput.appendChild(createOutputLine('Contact us at example@example.com'));
            break;
        default:
            newOutput.appendChild(createOutputLine('Command not found'));
    }

    window.removeEventListener("keydown",function(){
        inputTextarea.focus();
        inputTextarea.addEventListener('input', function () {
            const text = this.value;
            const paragraphs = text.split('\n').map(line => `<p>${line}</p>`).join('');
            newInput.innerHTML = '$ ' + paragraphs;
        });
    
    });
    document.getElementById('text').removeEventListener('keydown',handleKeyDown);

    main();
}

function createOutputLine(text) {
    const outputLine = document.createElement('div');
    outputLine.textContent = text;
    return outputLine;
}


const terminl = document.querySelector('.terminal');
const inputTextarea = document.querySelector('#text');


let newCommand;
let newInput;
let newOutput;
let container;

const handleKeyDown = function(e) {

    if (e.key === 'Enter') {
        e.preventDefault();
        const command = this.value;
        executeCommand(command, newOutput);
        this.value = '';
    }
};

function main(){

    newCommand = null;
    newInput = null;
    newOutput = null;
    container = null;

    newCommand = document.createElement('div');
    newInput = document.createElement('div');
    newOutput = document.createElement('div');

    container = terminl.appendChild(newCommand);
    newCommand.classList.add('container');
    
    container.appendChild(newInput);
    newInput.classList.add('input');
    
    container.appendChild(newOutput);
    newOutput.classList.add('ouput');
    

    newInput.innerHTML = `<div class="promp">visitor@stupienius.Web:~$ </div>`;

    window.addEventListener("keydown",function(){
        inputTextarea.focus();
        inputTextarea.addEventListener('input', function () {
            const text = this.value;
            const paragraphs = text.split('\n').map(line => `<p>${line}</p>`).join('');
            newInput.innerHTML = `<div class="promp">visitor@stupienius.Web:~$ </div>` + paragraphs;
        });
    
    });
    
    
    document.getElementById('text').addEventListener('keydown',handleKeyDown);

}



main();
