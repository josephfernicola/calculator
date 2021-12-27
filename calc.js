function add(a,b) {
return parseFloat(a) + parseFloat(b);
};
    
function subtract(a,b) {
    return a - b;
};
    
function multiply(a,b) {
    return a * b;
};
    
function divide (a,b) {
    return a / b;
};

function sum(numbers) {
    let answer = 0;
    for (let value of numbers) {
    answer += value;
    }
    return answer;
};
    
function operate (operator, a, b) {
    if (operator === "+") {
        return add(a, b)
    }
    else if (operator === "-") {
        return subtract(a,b)
    }
    else if (operator === "*") {
       return multiply(a,b)
    }
    else if (operator === "/") {
        return divide(a,b)
    } 
}

let displayValue = document.getElementById("display-value");


const clear = document.getElementById("clear");

clear.addEventListener('click' , () => {
    //Reset all operations
    currentNumber = ""
    firstNumber = 0;
    displayValue.textContent = 0;
    firstNumberDMInitial  = true;
    operator = ""
});

let currentNumber = ""; //Starting point for number concatenation
let firstNumber = 0;
let firstNumberDMInitial  = true;
let operator = ""

document.getElementById("add").addEventListener('click' , () => {
    console.log('firstNumber',firstNumber);
    console.log('currentNumber',currentNumber);
    console.log('operator' , operator);
    let breakAdd = false;

    if(operator === "*"){
        let answer = operate(operator, firstNumber, currentNumber);
        firstNumber = parseFloat(firstNumber) * parseFloat(currentNumber);
        displayValue.textContent = answer;
        breakAdd = true;
        currentNumber = "";
    }
    if (operator === "-") {
        let answer = operate(operator, firstNumber, currentNumber);
        firstNumber = parseFloat(firstNumber) - parseFloat(currentNumber);
        displayValue.textContent = answer;
        breakAdd = true;
        currentNumber = "";
    }
   
    if (operator == "/" && currentNumber == "0") {
        displayValue.textContent = "LMAO Try Again"
    }
    else if (operator === "/") {
        let answer = operate(operator, firstNumber, currentNumber);
        firstNumber = parseFloat(firstNumber) / parseFloat(currentNumber);
        displayValue.textContent = Math.round(answer);
        breakAdd = true;
        currentNumber = "";
    }
    else {
    
    operator = "+";
    //break out
    if(breakAdd || !currentNumber){
        return;
    }
    console.log('firstNumber',firstNumber);
    console.log('currentNumber',currentNumber);
    firstNumber = parseFloat(firstNumber) + parseFloat(currentNumber);
    displayValue.textContent = Math.round(firstNumber);
    currentNumber = "" //reset current number
    }
});

    document.getElementById("subtract").addEventListener('click' , () => {
        console.log('firstNumber',firstNumber);
        console.log('currentNumber',currentNumber);
        console.log('operator' , operator);
        let breakAdd = false
       
        if(operator === "*"){
            let answer = operate(operator, firstNumber, currentNumber);
            firstNumber = parseFloat(firstNumber) * parseFloat(currentNumber);
            displayValue.textContent = answer;
            breakAdd = true;
            currentNumber = "";
        }
        if (operator === "+") {
            let answer = operate(operator, firstNumber, currentNumber);
            firstNumber = parseFloat(firstNumber) + parseFloat(currentNumber);
            displayValue.textContent = answer;
            breakAdd = true;
            currentNumber = "";
            console.log("answer" , answer)
        }
        if (operator === "/" && currentNumber === "0") {
            displayValue.textContent = "LMAO Try Again"
        }
        else if (operator === "/") {
            let answer = operate(operator, firstNumber, currentNumber);
            firstNumber = parseFloat(firstNumber) / parseFloat(currentNumber);
            displayValue.textContent = Math.round(answer);
            breakAdd = true;
            currentNumber = "";
        }
        else {

        operator = "-";
        //break out
        if(breakAdd || !currentNumber){
            return;
        }
        console.log('firstNumber',firstNumber);
        console.log('currentNumber',currentNumber);
        if (firstNumber === 0) {
            firstNumber = parseFloat(currentNumber) - parseFloat(firstNumber);
        }
        else {
            firstNumber = parseFloat(firstNumber) - parseFloat(currentNumber);
        }
        displayValue.textContent = Math.round(firstNumber);
        currentNumber = "" //reset current number
    }
    
    });

    document.getElementById("multiply").addEventListener('click' , () => {
        console.log('firstNumber',firstNumber);
        console.log('currentNumber',currentNumber);
        console.log('operator' , operator);
        let breakAdd = false
        
        if(operator === "-"){
            let answer = operate(operator, firstNumber, currentNumber);
            firstNumber = parseFloat(firstNumber) - parseFloat(currentNumber);
            displayValue.textContent = answer;
            breakAdd = true;
            currentNumber = "";
            console.log("answer" , answer)
        }
        if (operator === "+") {
            let answer = operate(operator, firstNumber, currentNumber);
            firstNumber = parseFloat(firstNumber) + parseFloat(currentNumber);
            displayValue.textContent = answer;
            breakAdd = true;
            currentNumber = "";
            console.log("answer" , answer)
        }
        if (operator === "/" && currentNumber === "0") {
            displayValue.textContent = "LMAO Try Again"
        }
        else if (operator === "/") {
            let answer = operate(operator, firstNumber, currentNumber);
            firstNumber = parseFloat(firstNumber) / parseFloat(currentNumber);
            displayValue.textContent = Math.round(answer);
            breakAdd = true;
            currentNumber = "";
            console.log("answer" , answer)
        }
        else {
 
        operator = "*"
        if(breakAdd || !currentNumber){
            return;
        }
        if(firstNumberDMInitial){
            firstNumber = parseFloat(currentNumber);
            firstNumberDMInitial = false;
        }else{
            firstNumber = parseFloat(firstNumber) *  parseFloat(currentNumber);
        }
    
        displayValue.textContent = Math.round(firstNumber);
        currentNumber = "" //reset current number
    }
    });
    document.getElementById("divide").addEventListener('click' , () => {
        console.log('firstNumber',firstNumber);
        console.log('currentNumber',currentNumber);
        let breakAdd = false

        if(operator === "*"){
            let answer = operate(operator, firstNumber, currentNumber);
            firstNumber = parseFloat(firstNumber) * parseFloat(currentNumber);
            displayValue.textContent = answer;
            currentNumber = "";
            console.log("answer" , answer)
        }
        if (operator === "-") {
            let answer = operate(operator, firstNumber, currentNumber);
            firstNumber = parseFloat(firstNumber) - parseFloat(currentNumber);
            displayValue.textContent = answer;
            currentNumber = "";
            console.log("answer" , answer)
        }
        if (operator === "+") {
            let answer = operate(operator, firstNumber, currentNumber);
            firstNumber = parseFloat(firstNumber) + parseFloat(currentNumber);
            //console.log("firstNumberInside" , firstNumber)
            //console.log("answer" , answer)
            displayValue.textContent = answer;
            currentNumber = "";
            //console.log('operator' , operator);
        }
        if (operator == "/" && currentNumber == "0") {
            displayValue.textContent = "LMAO Try Again"
        }
        else {
        operator = "/"
        if(breakAdd || !currentNumber){
            return;
        }
        
        if(firstNumberDMInitial){
            firstNumber =  parseFloat(currentNumber);
            firstNumberDMInitial = false;
        }
        else
        {
            firstNumber = parseFloat(firstNumber) / parseFloat(currentNumber);
        }
        displayValue.textContent = Math.round(firstNumber);
        currentNumber = "";
        } 
    });

    document.getElementById("equal").addEventListener('click' , () => {
        console.log("Current Number" , currentNumber);
        console.log("First Number" , firstNumber);
        console.log("operator", operator);
        console.log("DM initial" , firstNumberDMInitial);
        
        if (operator == "" && firstNumber == 0) {
            displayValue.textContent = parseFloat(currentNumber)
        }
        else if (operator == "/" && currentNumber == "0") {
            displayValue.textContent = "LMAO Try Again"
        }
        else {
        currentNumber = parseFloat(currentNumber);
        let answer = operate(operator, firstNumber, currentNumber);
        displayValue.textContent = Math.round(answer);
        currentNumber = "";
        operator = ""
        firstNumberDMInitial = true
        firstNumber = answer;
        }
//Fix the bug if a user hits enter before entering an operation
   
    })
    document.getElementById("deletes").addEventListener('click' , () => {
        currentNumber = currentNumber.slice(0, -1);
        displayValue.textContent = currentNumber;
    });

    document.getElementById("decimal").addEventListener('click' , () => {
        if (!currentNumber.includes(".")) {
            currentNumber+=".";
            displayValue.textContent = currentNumber;
        }
    
    });

if (firstNumber == 0) {
    document.getElementById("one").addEventListener('click' , () => {
        currentNumber+="1"    
        displayValue.textContent = currentNumber 
        
    });
    document.getElementById("two").addEventListener('click' , () => {
        currentNumber+="2" 
        displayValue.textContent = currentNumber
        
    });
    document.getElementById("three").addEventListener('click' , () => {
        currentNumber+="3" 
        displayValue.textContent = currentNumber
        
    });
    document.getElementById("four").addEventListener('click' , () => {
        currentNumber+="4" 
        displayValue.textContent = currentNumber
       
    });
    document.getElementById("five").addEventListener('click' , () => {
        currentNumber+="5" 
        displayValue.textContent = currentNumber
         
    });
    document.getElementById("six").addEventListener('click' , () => {
        currentNumber+="6" 
        displayValue.textContent = currentNumber
        
    });
    document.getElementById("seven").addEventListener('click' , () => {
        currentNumber+="7" 
        displayValue.textContent = currentNumber
        
    });
    document.getElementById("eight").addEventListener('click' , () => {
        currentNumber+="8" 
        displayValue.textContent = currentNumber
        
    });
    document.getElementById("nine").addEventListener('click' , () => {
        currentNumber+="9" 
        displayValue.textContent = currentNumber
        
    });
    document.getElementById("zero").addEventListener('click' , () => {
        currentNumber+="0" 
        displayValue.textContent = currentNumber
        
    });
}

if (firstNumber > 0) {
    document.getElementById("one").addEventListener('click' , () => {
        currentNumber+="1"    
        displayValue.textContent = currentNumber 
       
    });
    document.getElementById("two").addEventListener('click' , () => {
        currentNumber+="2" 
        displayValue.textContent = currentNumber
       
    });
    document.getElementById("three").addEventListener('click' , () => {
        currentNumber+="3" 
        displayValue.textContent = currentNumber

    });
    document.getElementById("four").addEventListener('click' , () => {
        currentNumber+="4" 
        displayValue.textContent = currentNumber
       
    });
    document.getElementById("five").addEventListener('click' , () => {
        currentNumber+="5" 
        displayValue.textContent = currentNumber
   
        
    });
    document.getElementById("six").addEventListener('click' , () => {
        currentNumber+="6" 
        displayValue.textContent = currentNumber
      
    });
    document.getElementById("seven").addEventListener('click' , () => {
        currentNumber+="7" 
        displayValue.textContent = currentNumber
     
    });
    document.getElementById("eight").addEventListener('click' , () => {
        currentNumber+="8" 
        displayValue.textContent = currentNumber
       
    });
    document.getElementById("nine").addEventListener('click' , () => {
        currentNumber+="9" 
        displayValue.textContent = currentNumber
       
    });
    document.getElementById("zero").addEventListener('click' , () => {
        currentNumber+="0" 
        displayValue.textContent = currentNumber
        
    });
}
