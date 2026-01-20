const user = {
    username: "bruce wayne",
    price: 1099,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`); // current context
        console.log(this);
        
        
    }

}

// user.welcomeMessage();
// user.username = "sam"; // context changed
// user.welcomeMessage();

console.log(this); // nothing in global scope so empty object

// function one() {
//     let username = "clark kent"
//     console.log(this.username); // undedefined
    
// }

// one();

// const two = function () {
//     let username = "hal jordan";
//     console.log(this.username);
    
// }
// two();

// arrow function
const two = () => {
    let username = "hal jordan";
    console.log(this);
    
}
two();

// basic arrow function
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));

// implicit return
const addTwoAgain = (num1, num2) => num1 + num2; // return is written only when curly braces is there.
console.log(addTwoAgain(5, 6));

const addTwoYetAgain = (num1, num2) =>({username: "barry"}); // include parenthesis when returning an object
console.log(addTwoYetAgain(5, 6));
