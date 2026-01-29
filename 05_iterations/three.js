// for of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "HELLO WORLD!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);    
}


// Maps = unique key-value pairs

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

console.log(map);


for (const key of map) {
    console.log(key);    
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

// objects are not iterable using for of loop
/*
const myObject = {
    'game1': "NFS",
    'game2': "Spiderman"
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}
*/

// maps are not iterable using for in loop
/*
for (const key in map) {
    console.log(key);    
}
*/
