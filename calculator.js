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

function operate(sign, num1,num2){
    if(sign == '+'){
        return(add(num1,num2));
    }
    else if(sign == '-'){
        return(subtract(num1,num2));
    }
    else if(sign == '*'){
        return(multiply(num1,num2));
    }
    else if(sign == '/'){
        return(divide(num1,num2));
    }
}

console.log(operate('*',1000,2));

let operator;
let dElem1 = '';
let dElem2 = '';

//Add style elements to all the display.textContents to adjust the size when placed inside the .screen element
async function display(){
    const displayElement = document.querySelector('.screen');
    document.querySelectorAll('.addToScreen').forEach((addToScreen)=>{
        addToScreen.addEventListener('click', ()=>{
            //Don't forget the .text content to add it
            //Makes addToScreen.innerText reusable
            const buttonText = addToScreen.innerText;
            if(/^[1-9]$/.test(buttonText)){
                //If operator isn't set
                if(!operator){
                    //Adds for example 1, 1, 1, 1 to dElem1
                    dElem1 += buttonText;
                    displayElement.textContent += buttonText;
                }
                else{
                    dElem2 += buttonText;
                    displayElement.textContent += buttonText;
                }
            }
            else if(/^[*/+-]$/.test(buttonText)){
                operator = buttonText;
                displayElement.textContent += buttonText;
            }
            else if(buttonText == '='){
                num1 = Number(dElem1);
                num2 = Number(dElem2);
                const answer = operate(operator,num1, num2);
                displayElement.textContent = answer;
        }
        });
    });
    
    const clearElement = document.querySelector('.clear');
    clearElement.addEventListener('click', ()=>{
        displayElement.textContent = '';
        dElem1 = '';
        dElem2 = '';
        operator = '';
    });
}

display();