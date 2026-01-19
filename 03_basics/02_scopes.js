// var c = 300; // usually avoided due to scope issues
// let c = 300;
// let a = 500; // global scope

// if (true) {
//     let a = 10;
//     const b = 20;
//     // var c = 30;
//     console.log("Inner: ", a); // block scope
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

// console.log(a);
// // console.log(b);
// console.log(c);


function one() {
    const username = "shaktimaan";

    function two() {
        const website = "yahoo!";
        console.log(username);
    }
    // console.log(website);  // cannot access

    two();
}

one();

if (true) {
    const username = "juniorg";
    if (username === "juniorg") {
        const website = "hotmail";
        console.log(website);
        
    }
    // console.log(website); // no scope
}

// console.log(username); // no scope


// Mini hoisting

console.log(addone(5));

function addone(num) {
    return num + 1;
}



// addTwo(5); // cannot execute before initialisation
const addTwo = function(num) {
    return num + 2;
}
addTwo(5);
