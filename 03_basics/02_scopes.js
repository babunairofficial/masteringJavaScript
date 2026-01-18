// var c = 300; // usually avoided due to scope issues
let c = 300;
let a = 500; // global scope

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("Inner: ", a); // block scope
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
}

console.log(a);
// console.log(b);
console.log(c);
