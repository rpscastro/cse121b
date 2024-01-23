/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){

    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;


const multiplyNumbers = () => {

    let factorNumber1 = Number(document.querySelector('#factor1').value);
    let factorNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;


const divideNumbers = () => {

    let dividendNumber = Number(document.querySelector('#dividend').value);
    let divisorNumber = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividendNumber, divisorNumber);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function storesSubtotal() {

    let subtotalNumber = Number(document.querySelector('#subtotal').value);

    if(document.querySelector('#member').checked === true){

        subtotalNumber = subtotalNumber * 0.85;
    }

    document.querySelector('#total').innerHTML = subtotalNumber;
}

document.querySelector('#getTotal').addEventListener('click', storesSubtotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
let oddsArray = numbersArray.filter(number => number % 2 === 1)
document.querySelector('#odds').innerHTML = oddsArray;

/* Output Evens Only Array */
let evensArray = numbersArray.filter(number => number % 2 === 0)
document.querySelector('#evens').innerHTML = evensArray;

/* Output Sum of Org. Array */
let sumArray = numbersArray.reduce((sum,number)=>sum + number)
document.querySelector('#sumOfArray').innerHTML = sumArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number=>number*2)
document.querySelector('#multiplied').innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
let sumMultipliedArray = multipliedArray.reduce((sum,number)=>sum + number)
document.querySelector('#sumOfMultiplied').innerHTML = sumMultipliedArray;