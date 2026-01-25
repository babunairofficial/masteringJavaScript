// Truthy and Falsy Values 

// conditions do not always evaluate to explicit `true` or `false`.  

// const userEmail = "h@hitesh.ai";
const userEmail = [];

if (userEmail) { // assuming that there is true value
    console.log("Got user email"); // this line will execute due to truthy
} else {
    console.log("Dont have user email");    
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function() {}, 


if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null defined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15;

console.log(val1);


// Ternary Operator is different from nullish coalescing operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");
