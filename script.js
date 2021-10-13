
let result = '';
let numArr = [];
let input = '';
let inputopp = '';
let number ='';
let operation = '';

let buttons = document.querySelectorAll('.buttons');
let operators = document.querySelectorAll('#opp');

let show = document.querySelector('.screen')


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        input = button.textContent ;
        number = number.concat(input);
        showScreen(number);
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(number!= '')numArr.push(number);

        if(operator.textContent != '=' && operator.textContent != '=>' ){
            if (operator.textContent == '%' && numArr.length <2) {
                inputopp = operator.textContent;
                number = '';
                console.log('wait');
            } else {
                inputopp = operator.textContent;
                operate ();
            }
            

        }else if (operator.textContent == '=>'){
            number = number.slice(0, number.length-1)
             showScreen(number);
        }else if (operator.textContent == '=') operate ();

    })
})

function showScreen (value) {
    if (value.length > 8) {
        console.log(value);
        show.textContent = value.toFixed(8);
    }

    show.textContent = value;
}


function operate (){
    number = '';

    switch (inputopp){
    case "+":
       result = numArr.reduce(add,0);
       showScreen (result);
       numArr = [];
       numArr.push(result)
       console.log(numArr);
    break;
    case "-":
        result = numArr.reduce(sub,numArr[0]*2);
        showScreen (result);
        numArr = [];
        numArr.push(result)
    break;
    case "*":
        result = numArr.reduce(multiply,1);
        showScreen (result);
        numArr = [];
        numArr.push(result)
    break;
    case "/":
        result = numArr.reduce(devide,numArr[0]*numArr[0]);
        showScreen (result);
        numArr = [];
        numArr.push(result)
    break;

    case "%":
        //result = numArr[0] % numArr[1]

        result = numArr.reduce(reminder);
        showScreen (result);
        console.log(numArr);
        numArr = [];
        numArr.push(result)
        console.log(numArr);
    break;
    case "AC":
        numArr = [];
        result = '';
        showScreen (result);
    break;


    default :
    
    
}}

const add = (a, b) =>  parseFloat(a) + parseFloat(b);

const sub = (a, b) =>  parseFloat(a) - parseFloat(b);

const multiply = (a, b) =>  parseFloat(a) * parseFloat(b);

const devide = (a, b) =>  parseFloat(a) / parseFloat(b);

const reminder = (a, b) => {
    //a= numArr[0];
    return parseFloat(a) % parseFloat(b);
} 





