const score = 100;
console.log(score); // 100

const balance = new Number(2500);
console.log(balance); // [Number: 2500]

console.log(balance.toString());
console.log(balance.toFixed(2)); //using precision values

const otherNumber = 453.7543;

console.log(otherNumber.toPrecision(3)); 

const hundreds = 1000000;
console.log(hundreds.toLocaleString('eb-IN'));


// ------------------------ Maths -------------------- //

console.log(Math); // an object

//some functions in Math object
console.log(Math.abs(-5)); // 5

console.log(Math.round(6.8)); // 7

console.log(Math.ceil(6.2)); // upper value
console.log(Math.floor(6.2)); // lower value

console.log(Math.min(2, 1, 5, 9)); // 1
console.log(Math.max(2, 1, 6, 9)); // 9

console.log(Math.random());
console.log((Math.random() * 10) + 1);

//finding random number between two values.
const min = 10;
const max = 20;
console.log(Math.floor((Math.random() * (max - min + 1)) + min));
