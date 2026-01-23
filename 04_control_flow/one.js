// if

const temperature = 41;


// <, >, <=, >=, ==, !=, ===, !==


if(2 === "2") {
    console.log("executed");    
}

if(temperature < 50) {
    console.log("less than 50");
    
} else {
    console.log("temperature is greater than 50");
}
console.log("Execute");

const score = 200;
if(score > 100) {
    const power = "fly";
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);


const balance = 1000;
if (balance > 500) console.log("test"); // implicit scope

if (balance > 500) {
    console.log("less than");    
} else if (balance < 750) {
    console.log("less than 750");    
} else {
    console.log("less than 750");    
}


const isUserLoggedIn = true;
const debitCard = true;

if (isUserLoggedIn && debitCard) { // checks for both the conditions
    console.log("allowed to buy");    
}

if (isUserLoggedIn && debitCard && 2==3) { // checks for all the three conditions to be true. 
    console.log("buy now");    
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) { // OR statement => checks if any one is true
    console.log("User logged in");    
}