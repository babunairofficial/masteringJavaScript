// Date

let myDate = new Date();
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate); // object

// let myCreatedDate = new Date(2021,1, 24);
// let myCreatedDate = new Date(2021,1, 24, 6, 36);
// let myCreatedDate = new Date("2025-05-17");
let myCreatedDate = new Date("07-16-2026");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleDateString('default', {
    weekday: "long",
})
