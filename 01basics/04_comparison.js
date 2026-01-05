// easy comparisons
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true. a pitfall
//null converts to different values. sometimes to zero, sometimes to NaN

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false
console.log(undefined < 0); // false

// === => Strict Equality
console.log("2" === 2); //false. different datatypes

//focus on writing clean code.
