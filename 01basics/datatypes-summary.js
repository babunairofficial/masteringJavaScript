// primitive and non-primitive datatypes


// primitive datatypes:
// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 95;
const scoreValue = 23.6;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //value is undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 2342380298538502340823042n; //bigInt datatype

// Reference Type (Non primitive):
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "sachin",
    age: 40,
}

const myFunction = function () {
    console.log("Hello World");
    
};


//find the datatype of a variable using typeof
console.table([
  typeof score,
  typeof scoreValue,
  typeof isLoggedIn,
  typeof outsideTemp,
  typeof userEmail,
  typeof id,
  typeof bigNumber,
  typeof heroes,
  typeof myObj,
  typeof myFunction
]);

