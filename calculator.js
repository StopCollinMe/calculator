function add(num1,num2){ 
    return num1 + num2;
 }
function subtract(num1,num2){ 
    return num1 - num2; 
}

function multiply(num1,num2){ 
    return num1 * num2;
 }

function divide(num1,num2){ 
    return num1 / num2; 
}

function operate(sign, num1, num2){
    switch (sign){
    case '+':
        return add(num1,num2);
    case '-':
        return subtract(num1,num2);
    case '*':
        return multiply(num1,num2);
    case '/':
        return divide(num1,num2);
    default:
        return null;
    }
}

let dElem1 = '';
let dElem2 = '';
let operator = null;

function updateDisplay(text){
    const displayElement = document.querySelector('.screen');
    displayElement.textContent = text;
    
}

function handleDigitInput(digit){
    if(!operator){
        dElem1 += digit;
        updateDisplay(dElem1.toString());
    }
    else{
        dElem2 += digit;
        updateDisplay(dElem2.toString());
    }
}

//Understand how to implement this logic...
function handleOperatorInput(newOperator){
    if(dElem1 === ''){
        return;
    }
    if(operator && dElem2 !== ''){
        const num1 = parseFloat(dElem1);
        const num2 = parseFloat(dElem2);
        const result = operate(operator, num1, num2);
        updateDisplay(result.toString());
        dElem1 = result.toString();
        dElem2 = '';
    }
    operator = newOperator;
    updateDisplay(operator);
}

//Understand how to implement this logic...
function handleEqualsInput(){
    if(!operator || dElem2 === ''){
        return;
    }
    const num1 = parseFloat(dElem1);
    const num2 = parseFloat(dElem2);
    const result = operate(operator,num1,num2);
    updateDisplay(result.toString())
    dElem1 = result.toString();
    dElem2 = '';
    operator = null;
}

// Learn to make code less complicated by building functions 
// that do specific things you'll reuse!!!!

function handleClearInput(){
    dElem1 = '';
    dElem2 = '';
    operator = null;
    updateDisplay('');
}

//Build this tomorrow
function handleBackspace(){
    dElem1 = dElem1.slice(0,-1);
    updateDisplay(dElem1);
}

function handleDecimal(decimals){
    if(!operator){
        //Use this to check for if it doesn't exist
        if(dElem1.indexOf('.') === -1){
            dElem1 += decimals;
            updateDisplay(dElem1.toString());
        }
    }
    else{
        if(dElem2.indexOf('.') === -1){
            dElem2 += decimals;
            updateDisplay(dElem2.toString());
        }
    }
}

//Add style elements to all the display.textContents to adjust the size when placed inside the .screen element
    const displayElement = document.querySelector('.screen');
    document.querySelectorAll('.addToScreen').forEach((addToScreen)=>{
        addToScreen.addEventListener('click', ()=>{
        const buttonText = addToScreen.innerText;
            if(/[1-9]/.test(buttonText)){
                handleDigitInput(buttonText);
            }
            else if(/[-*+/]/.test(buttonText)){
                handleOperatorInput(buttonText);
            }
            else if(buttonText === '='){
                handleEqualsInput();
            }
        });
        
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if(/[0-9]/.test(key)){
            handleDigitInput(key);
        }
        else if(/[*\-+\/]/.test(key)){
            handleOperatorInput(key);
            }
        else if(key == '=' || key == 'Enter'){
            handleEqualsInput();
        }
        //Can't figure out how to not have to backspace past '' to reset value...
        else if(key == 'Escape'){
            handleClearInput();
        }
        else if(key == 'Backspace'){
            handleBackspace();
        }
        else if(key == '.'){
            handleDecimal(key);
        }
    });

    const clearElement = document.querySelector('.clear');
    clearElement.addEventListener('click', ()=>{
        displayElement.textContent = '';
        dElem1 = '';
        dElem2 = '';
        operator = '';
    });
//Understand how to make things simpler
document.querySelector('.clear').addEventListener('click', handleClearInput);
// Work on this

// function add(num1, num2) {
//     return num1 + num2;
//   }
  
//   function subtract(num1, num2) {
//     return num1 - num2;
//   }
  
//   function multiply(num1, num2) {
//     return num1 * num2;
//   }
  
//   function divide(num1, num2) {
//     return num1 / num2;
//   }
  
//   function operate(sign, num1, num2) {
//     switch (sign) {
//       case '+':
//         return add(num1, num2);
//       case '-':
//         return subtract(num1, num2);
//       case '*':
//         return multiply(num1, num2);
//       case '/':
//         return divide(num1, num2);
//       default:
//         return null;
//     }
//   }
  
//   let dElem1 = '';
//   let dElem2 = '';
//   let operator = null;
  
//   function updateDisplay(text) {
//     const displayElement = document.querySelector('.screen');
//     displayElement.textContent = text;
//   }
  
//   function handleDigitInput(digit) {
//     if (!operator) {
//       dElem1 += digit;
//       updateDisplay(dElem1);
//     } else {
//       dElem2 += digit;
//       updateDisplay(dElem2);
//     }
//   }
  
//   function handleOperatorInput(newOperator) {
//     if (dElem1 === '') {
//       return;
//     }
//     if (operator && dElem2 !== '') {
//       const num1 = parseFloat(dElem1);
//       const num2 = parseFloat(dElem2);
//       const result = operate(operator, num1, num2);
//       updateDisplay(result.toString());
//       dElem1 = result.toString();
//       dElem2 = '';
//     }
//     operator = newOperator;
//     updateDisplay(operator);
//   }
  
//   function handleEqualsInput() {
//     if (!operator || dElem2 === '') {
//       return;
//     }
//     const num1 = parseFloat(dElem1);
//     const num2 = parseFloat(dElem2);
//     const result = operate(operator, num1, num2);
//     updateDisplay(result.toString());
//     dElem1 = result.toString();
//     dElem2 = '';
//     operator = null;
//   }
  
//   function handleClearInput() {
//     dElem1 = '';
//     dElem2 = '';
//     operator = null;
//     updateDisplay('');
//   }
  
//   document.querySelectorAll('.addToScreen').forEach((addToScreen) => {
//     addToScreen.addEventListener('click', () => {
//       const buttonText = addToScreen.innerText;
//       if (/[0-9]/.test(buttonText)) {
//         handleDigitInput(buttonText);
//       } else if (/[*+/-]/.test(buttonText)) {
//         handleOperatorInput(buttonText);
//       } else if (buttonText === '=') {
//         handleEqualsInput();
//       }
//     });
//   });
  
//   document.addEventListener('keydown', (event) => {
//     const key = event.key;
//     if (/[0-9]/.test(key)) {
//       handleDigitInput(key);
//     } else if (/[*+/-]/.test(key)) {
//       handleOperatorInput(key);
//     } else if (key === '=' || key === 'Enter') {
//       handleEqualsInput();
//     } else if (key === 'Escape') {
//       handleClearInput();
//     }
//   });
  
//   document.querySelector('.clear').addEventListener('click', handleClearInput);
  

// 