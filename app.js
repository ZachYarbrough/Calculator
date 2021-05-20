let numbers = document.getElementsByClassName('number');
let operands = document.getElementsByClassName('operand');

let currentOperand = '';
let currentSum = '';

let prevNum = document.getElementById('prevNum');
let currentNum = document.getElementById('currentNum');

let clear = document.getElementById('clear');
let allClear = document.getElementById('allClear');

let equal = document.getElementById('equals');

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', ()=>{
        currentNum.innerHTML.includes('.') && numbers[i].innerHTML.includes('.') ? 
            currentNum.innerHtml = currentNum.innerHTML : currentNum.innerHTML == '0' ? 
                currentNum.innerHTML = `${numbers[i].innerHTML}` : currentNum.innerHTML = `${currentNum.innerHTML}${numbers[i].innerHTML}`;
    })
}

for(let i = 0; i < operands.length; i++){
    operands[i].addEventListener('click', ()=>{
        if(operands[i].innerHTML == '-' && currentNum.innerHTML == '0'){
            currentNum.innerHTML = '-';
        } else {
            prevNum.innerHTML = currentNum.innerHTML;
            currentNum.innerHTML = '0';
            currentOperand = operands[i].innerHTML;
        }
    })
}

clear.addEventListener('click', ()=>{
    if(currentNum == '0'){
        prevNum.innerHTML = '0';
    } else {
        currentNum.innerHTML = '0';
    }
    currentSum = '';
})

allClear.addEventListener('click', ()=>{
    prevNum.innerHTML = '0';
    currentNum.innerHTML = '0';
    currentOperand = '';
    currentSum = '';
})

equals.addEventListener('click', ()=> {
    switch(currentOperand){
        case '+': 
            currentSum = parseFloat(prevNum.innerHTML) + parseFloat(currentNum.innerHTML);
            break;
        case '-': 
            currentSum = parseFloat(prevNum.innerHTML) - parseFloat(currentNum.innerHTML);
            break;
        case 'x': 
            currentSum = parseFloat(prevNum.innerHTML) * parseFloat(currentNum.innerHTML);
            break;
        case '÷':
            currentSum = parseFloat(prevNum.innerHTML) / parseFloat(currentNum.innerHTML);
            break;
        default:
            break;
    }
    if(currentOperand == '')
        currentSum = currentNum.innerHTML;
    prevNum.innerHTML = '0';
    currentNum.innerHTML = currentSum;
})