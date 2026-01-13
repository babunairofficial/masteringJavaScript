// singleton
// Object.create

//object literals

const mySym = Symbol("key1");


const JsUser = {
    name: "Daredevil", // key-value pair
    "full name": "Matt Murdock",
    [mySym]: "mykey1",
    age: 30,
    location: "Jaipur",
    email: "daredevil@hellskitchen.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Friday"]
};

console.log(JsUser.email);
console.log(JsUser["email"]); //bracket notation
console.log(JsUser["full name"]); // dot notation would not work here
console.log(JsUser[mySym]);

JsUser.email = "mattmurdock@marvel.com";
console.log(JsUser);

// Object.freeze(JsUser); // make an object immutable
// JsUser.email = "blindguy@blindstick.com";
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("hello guys");
}

console.log(JsUser.greeting); // [Function (anonymous)]

console.log(JsUser.greeting()); // hello guys

JsUser.greetingTwo = function() {
    console.log(`Hello user, ${this.name}`); // `this` refers to the current object context
}

console.log(JsUser.greetingTwo());
