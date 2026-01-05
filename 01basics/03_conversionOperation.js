/* 
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
*/


// *********************************** Operations ************************************

let value = 3;
let negValue = - value;
console.log(negValue);

console.log();

let str1 = "hello";
let str2 = "batman";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log((3 + 4) * (5 % 3)); // 14

console.log(true); // true
console.log(+true); // 1 => conversion. this approach practically not used

console.log(""); // empty line
console.log(+""); // 0 =>again not used 

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter; //prefix increment
console.log(gameCounter);

//reading materials:
// https://tc39.es/ecma262/#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
