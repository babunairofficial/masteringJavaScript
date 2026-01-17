
// // A function is a reusable block of code designed to perform a specific task.

// function welcomeAll() {
//     console.log("H");
//     console.log("E");
//     console.log("L");
//     console.log("L");
//     console.log("O");
// }

// // welcomeAll; // reference = just the function name
// // welcomeAll(); //execution

// function addTwoNumbers(number1, number2) { // function and its parameters
//     console.log(number1 + number2);   // no strict data types needed for function parameters
// }

// addTwoNumbers(4, 7);
// addTwoNumbers(3, "a");

// const result = addTwoNumbers(3, 5);

// // function without a return statement return 'undefined' by default
// console.log("Result : ", result); // undefined 

// function addTwoNumbersAgain(num1, num2) {
//     // let result = num1 + num2;
//     // return result;
    
//     console.log("Hello"); // not executed if after any early return
//     return num1 + num2;
// }

// const resultAgain = addTwoNumbersAgain(6, 9); // returned value stored
// console.log("ResultAgain : ", resultAgain);


// function loginUserMessage(username) {
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("batman"));
// console.log(loginUserMessage(""));

// // function called without required parameters
// console.log(loginUserMessage()); // undefined displayed as value

// // logical checks to handle empty or missing values
// function loginUserMessage2(username) {
//     if(username === undefined) {
//         console.log("Please enter a username");
//         return;
        
//     }
//     return `${username} just logged in to the pc`;
// }
// console.log(loginUserMessage2());


// function loginUserMessage3(username) {
//     if(!username) {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in again`;
// }

// console.log(loginUserMessage3());


// // default parameter values to prevent 'undefined' values
// function loginUserMessage4(username = "sam") { // default value in case there is no argument is passed
//     if(!username) {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in again and again`;
// }

// console.log(loginUserMessage4());
// console.log(loginUserMessage4("superman")); // arguments passed over-rides default value


/* ------------- Function with Objects and Arrays ------------------ */


function calculateCartPrice(...num1) { // rest operator used to accept any number of arguments
    return num1; 
}

console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice2(val1, val2, ...num1) { 
    return num1; 
}

console.log(calculateCartPrice2(200, 400, 500, 2000, 50000)); // val1 = 200, val2 = 400, rest num1 values
// This pattern is commonly used in e-commerce carts, aggregations, and utility functions.


const user = {
    username: "flash",
    price: 1099
}

function handleObject(anyobject) { // function can accept entire objects as arguments.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    prie: 399
})


const myNewArray = [400, 800, 500, 1200];

function returnSecondValue(getArray) { // arrays can be passed directly into functions
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // 800

console.log(returnSecondValue([300, 100, 700, 6000])); // pass the arrays directly as value
