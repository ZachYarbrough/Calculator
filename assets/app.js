let numbers = document.getElementsByClassName('number');
let operands = document.getElementsByClassName('operand');

let currentOperand = '';
let currentSum = '';

let prevNum = document.getElementById('prevNum');
let currentNum = document.getElementById('currentNum');

let clear = document.getElementById('clear');
let allClear = document.getElementById('allClear');

let equal = document.getElementById('equals');

let justSolved = false;

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', ()=>{
        if(currentNum.innerHTML.includes('.') && numbers[i].innerHTML.includes('.')) {
            currentNum.innerHTML = `${numbers[i].innerHTML}`
        } else if (currentNum.innerHTML == '0') {
            currentNum.innerHTML = `${numbers[i].innerHTML}`
        } else {
            currentNum.innerHTML = `${currentNum.innerHTML}${numbers[i].innerHTML}`
        }
        if(justSolved)
            currentNum.innerHTML = currentNum.innerHTML;
    })
}

for(let i = 0; i < operands.length; i++){
    operands[i].addEventListener('click', ()=>{
        if(operands[i].innerHTML == '-' && currentNum.innerHTML == '0'){
            currentNum.innerHTML = '-';
        } else if(currentOperand != '' && !justSolved){
            useOperand();
            currentOperand = operands[i].innerHTML;
            prevNum.innerHTML = currentSum;
            currentNum.innerHTML = '0';
        } else {
            prevNum.innerHTML = currentNum.innerHTML;
            currentNum.innerHTML = '0';
            currentOperand = operands[i].innerHTML;
        }
        justSolved = false;
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
    if(currentNum.innerHTML == '-') {
        currentNum.innerHTML = '-1';
        currentOperand = 'x';
    }
    useOperand();
    if(currentOperand == '')
        currentSum = currentNum.innerHTML;
    prevNum.innerHTML = '0';
    currentNum.innerHTML = currentSum;
    justSolved = true;
})

let useOperand = () => {
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
}