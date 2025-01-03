
const display = document.getElementById('display');

function appendValue(value) {
    const display = document.getElementById("display");
    const currentValue = display.value;
    display.value = 
        currentValue.slice(0, cursorPosition) + 
        value + 
        currentValue.slice(cursorPosition);
    cursorPosition++; 
}

function deleteLast() {
    const display = document.getElementById("display");
    if (cursorPosition > 0) {
        display.value = 
            display.value.slice(0, cursorPosition - 1) + 
            display.value.slice(cursorPosition);
        cursorPosition--; 
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value); 
    } catch (error) {
        display.value = 'Error'; 
    }
}

function clearDisplay(value){
    const display = document.getElementById("display");
    display.value = '';
}

let cursorPosition = 0;

function moveCursorLeft() {
    const display = document.getElementById("display");
    if (cursorPosition > 0) {
        cursorPosition--; 
    }
    updateCursor(display);
}

function moveCursorRight() {
    const display = document.getElementById("display");
    if (cursorPosition < display.value.length) {
        cursorPosition++; 
    }
    updateCursor(display);
}

function updateCursor(display) {
    display.setSelectionRange(cursorPosition, cursorPosition);
    display.focus();
}
