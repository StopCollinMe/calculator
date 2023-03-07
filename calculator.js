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

function operate(operator, num1,num2){
    if(operator == add){
        console.log(add(num1,num2));
    }
    else if(operator == subtract){
        console.log(subtract(num1,num2));
    }
    else if(operator == multiply){
        console.log(multiply(num1,num2));
    }
    else if(operator == divide){
        console.log(divide(num1,num2));
    }
}

operate(subtract,1000,2);

let total = 0;


//Add style elements to all the display.textContents to adjust the size when placed inside the .screen element
function display(){
    const displayElement = document.querySelector('.screen');
    document.querySelectorAll('.addToScreen').forEach((addToScreen)=>{
        addToScreen.addEventListener('click', ()=>{
            //Don't forget the .text content to add it
            displayElement.textContent += addToScreen.innerText;
            total = displayElement.textContent;
            alert(total);
        });
    });
    const clearElement = document.querySelector('.clear');
    clearElement.addEventListener('click', ()=>{
        displayElement.textContent = '';
    })
}

display();