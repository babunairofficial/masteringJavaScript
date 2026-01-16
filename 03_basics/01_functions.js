
// A function is a reusable block of code designed to perform a specific task.

function welcomeAll() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// welcomeAll; // reference = just the function name
// welcomeAll(); //execution

function addTwoNumbers(number1, number2) { // function and its parameters
    console.log(number1 + number2);   // no strict data types needed for function parameters
}

addTwoNumbers(4, 7);
addTwoNumbers(3, "a");

const result = addTwoNumbers(3, 5);

// function without a return statement return 'undefined' by default
console.log("Result : ", result); // undefined 

function addTwoNumbersAgain(num1, num2) {
    // let result = num1 + num2;
    // return result;
    
    console.log("Hello"); // not executed if after any early return
    return num1 + num2;
}

const resultAgain = addTwoNumbersAgain(6, 9); // returned value stored
console.log("ResultAgain : ", resultAgain);


function loginUserMessage(username) {
    return `${username} just logged in`;
}

console.log(loginUserMessage("batman"));
console.log(loginUserMessage(""));

// function called without required parameters
console.log(loginUserMessage()); // undefined displayed as value

// logical checks to handle empty or missing values
function loginUserMessage2(username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return;
        
    }
    return `${username} just logged in to the pc`;
}
console.log(loginUserMessage2());


function loginUserMessage3(username) {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in again`;
}

console.log(loginUserMessage3());


// default parameter values to prevent 'undefined' values
function loginUserMessage4(username = "sam") { // default value in case there is no argument is passed
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in again and again`;
}

console.log(loginUserMessage4());
console.log(loginUserMessage4("superman")); // arguments passed over-rides default value
