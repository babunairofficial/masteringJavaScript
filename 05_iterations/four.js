// loops in objects using for in loop

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// keys
for (const key in myObject) {
    console.log(key);   
}

// keys and values
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);   
}


// for in loop in arrays

const programming = ["js", "cpp", "java", "rb", "py"];

// keys in arrays = numbers from 0 (zero)
for (const key in programming) {
    console.log(key);
}

// display values of array instead of keys
for (const key in programming) {
    console.log(programming[key]);

}

