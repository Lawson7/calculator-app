function add (a, b){
    return Number(a) + Number(b); 
}

function subtract (a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function operate (a, operator, b){
    if (operator == '+'){
        return add(a, b);
    } else if (operator == '-'){
        return subtract(a, b);
    } else if (operator == '*'){
        return multiply(a, b)
    } else if (operator == '/'){
        return divide(a, b);
    } else {
        return console.log('something went horribly wrong!');
    }
};


let num1 = '';
let num2 = '';
let numTemp = '';
let thing = '';
let ans = '';

//creating responsive display
const screen = document.querySelector('#screen');

const numDisplay = document.createElement('p');
screen.appendChild(numDisplay);
numDisplay.textContent = num1;



//populating calculator buttons
const btnText = ['AC','<','7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];

const btnDiv = document.querySelector('#keys');

//creates top two buttons
for (i = 0; i < 2; i++){
    const btn = document.createElement('button');
    btn.textContent = btnText[i];
    btnDiv.appendChild(btn);
    btn.classList.add('topBtn');
    btn.setAttribute('value',`${btnText[i]}`);
};

//creates bottom buttons
for (i = 2; i < btnText.length; i++){
    const btn = document.createElement('button');
    btn.textContent = btnText[i];
    btnDiv.appendChild(btn);
    btn.classList.add('bottomBtn');
    btn.setAttribute('value',`${btnText[i]}`);
};



const buttons = document.querySelectorAll('.bottomBtn');

    buttons.forEach((button) =>{
        button.addEventListener('click', ()  =>{
            const inputValue = button.textContent;
    if (inputValue === '+'){
        if (num1){
            thing = inputValue;
            numDisplay.textContent =num1 + thing;
        }

        } else if (inputValue === '-'){
            if(num1){
                thing = inputValue;
                numDisplay.textContent =num1 + thing;
            }

        } else if (inputValue === '/'){
            if(num1){
                thing = inputValue;
                numDisplay.textContent =num1 + thing;
            }

        } else if (inputValue === '*'){
            if(num1)
                thing = inputValue;
                numDisplay.textContent =num1 + thing;

        } else if (inputValue === '='){
            ans = Number(operate(num1,thing,numTemp));
            ans = Math.round(ans * 1000000) / 1000000;
            num1 = ans
            console.log(num1);
            numDisplay.textContent = num1;

        } else if (num1 && thing) {
        num2 += inputValue;
        ans = Number(operate(num1,thing,num2));
            ans = Math.round(ans * 1000000) / 1000000;
            num1 = ans;
            numTemp = num2;
            console.log(num1);
            numDisplay.textContent = num1;
            num2 = '';

        } else {
        num1 += inputValue;
        numDisplay.textContent = num1;
        }; 
    console.log(`num1: ${num1} | num2: ${num2} | thing: ${thing} | numTemp ${numTemp} | ans ${ans}`)
        });
    });



const clearAll = document.querySelector('.topBtn');

clearAll.addEventListener('click', clearCalc);


function clearCalc () {
    num1 = '';
    num2 = '';
    numTemp = '';
    thing = '';
    ans = '';
    numDisplay.textContent = num1;
}
