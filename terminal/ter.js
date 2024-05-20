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
            addParagraphAnimation(whoami);
            break;
        case 'help':
            addParagraphAnimation(help);
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
}

function toNextCommand(){
    inputTextarea.value = "";
    removeCursor();
    addNewCommandBlock();
}

function createOutputLine(text){
    const outputLine = document.createElement('div');
    outputLine.textContent = text;
    return outputLine;
}

async function addParagraphAnimation(text) {
    for (const line of text) {
      await addLineAnimation(line);
    }
    toNextCommand();
}

async function addLineAnimation(text){
    for (let i=0; i < text.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 10));
        if(text.charAt(i) == " " && text.charAt(i + 1) == " "){
            t += "&nbsp;&nbsp;";
            i++;
        }else{
            newOutput.innerHTML += text.charAt(i);
        }
    }
    newOutput.innerHTML += "<br>";
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
