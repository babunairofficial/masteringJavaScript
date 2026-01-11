// array

const myArr= [0, 1, 2, 3, 4, 5, true, "batman"]; // arrays can be mix

console.log(myArr[0]); // Indexing starts from `0`

// read mdn docs for array

const myHeroes = ["shaktimaan", "Junior G"];

console.log(myHeroes[1]);


// Array methods

myArr.push(6);
myArr.push(7);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9); // adds to the front of the array
console.log(myArr);

myArr.shift();
console.log(myArr);


console.log(myArr.includes(9)); // includes() method checks for a value in the array for validation checks

const newArr = myArr.join() // `join()` returns a string, while the original array remains unchanged

console.log(myArr);
console.log(typeof myArr);

console.log(newArr);
console.log(typeof newArr);


// slice, splice

console.log("A", myArr);

const myNewArr = myArr.slice(1, 3); // Returns a shallow copy of part of an array  
console.log(myNewArr);
console.log("B", myArr);

const myNewArr2 = myArr.splice(1, 3); // Removes elements from the array
console.log("C", myArr);
console.log(myNewArr2);
