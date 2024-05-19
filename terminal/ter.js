const terminl = document.querySelector('.terminal');
const inputTextarea = document.querySelector("#text");


let newCommand;
let newInput;
let newOutput;
let container;

window.addEventListener("keydown",function(){
    inputTextarea.focus();
    inputTextarea.addEventListener('input', function () {
    });
});

addNewCommandBlock();


function inputPrompt(textarea ,e){
    if(/^[a-zA-Z]$/.test(e.key)){
        newInput.innerHTML = 
        `<div class = "prompt_hit">visitor@stupienius.Web:~$ </div>
         <div class = "prompt_input">${textarea.value}${e.key}</div>
         <div class = "cursor"></div>`;
    }else{
        setTimeout(() => {
            newInput.innerHTML = 
            `<div class = "prompt_hit">visitor@stupienius.Web:~$ </div>
             <div class = "prompt_input">${textarea.value}</div>
             <div class = "cursor"></div>`;
        }, 50);
    }
}


function executeCommand(textarea,e){
    if(e.key !== "Enter") return;
    const command = textarea.value;
    switch (command.trim()){
        case 'whoami':
            addLineAnimation(whoami);
            break;
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
            textarea.value = "";
            removeCursor();
            addNewCommandBlock();
    }
}

function createOutputLine(text) {
    const outputLine = document.createElement('div');
    outputLine.textContent = text;
    return outputLine;
}

function addParagraphAnimation(text){

}

function addLineAnimation(text){
    text.forEach( e => {
        for(let i=0;i<e.length;i++){
            setTimeout(() => {
                newOutput.innerHTML += e.charAt(i);
            }, 1000);
        }
    });
    inputTextarea.value = "";
    removeCursor();
    addNewCommandBlock();
}

function addNewCommandBlock(){
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

    newInput.innerHTML =
    `<div class = "prompt_hit">visitor@stupienius.Web:~$ </div>
     <div class = "cursor"></div>`
}

function removeCursor(){
    const cursor = document.querySelectorAll(".cursor");
    cursor.forEach(e => {e.style.display = "none";});
}
