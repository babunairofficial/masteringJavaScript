let score = "45";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);



let score2 = "45ab";

console.log(typeof score2);
console.log(typeof(score2));

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);



let score3 = null;

console.log(typeof score3);
console.log(typeof(score3));

let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);


let score4 = true;

console.log(typeof score4);
console.log(typeof(score4));

let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);


// "45" => 45
// "45ab" => NaN
// true => 1; false => 0


//conversion to boolean
let isLoggedIn = 1;

let booleanisLoogedIn = Boolean(isLoggedIn);
console.log(booleanisLoogedIn);

// 1 => true; 0 => false
// "" => false
// "superman" => true


// conversion to number
let someNumber = 35;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
