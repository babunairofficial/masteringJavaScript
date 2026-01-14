// const tinderUser = new Object(); //singleton object
const tinderUser = {} //non-singleton object

tinderUser.id = "123";
tinderUser.name = "sandy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

// Objects can contain other objects as values.
const regularUser = {
    email: "some@somewhere.com",
    fullname: {
        userfullname: {
            firstname: "barry",
            lastname: "allen"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// combine objects
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}
// combine objects - method 1
const obj3 = {obj1, obj2};
console.log(obj3);

// combine objects - method 2
const obj4 = Object.assign({}, obj1, obj2); //read mdn docs
console.log(obj4);

// combine objects - method 3
const obj5 = {...obj1, ...obj2};
console.log(obj5);


// when objects come from databases or APIs, they usually do so as array of objects
const users = [
    {
        id: 1, 
        email: "ba@dcc.com"
    },
    {
        id: 2,
        email: "vs@dcc.com"
    },
    {
    
    },
    {

    },
]

console.log(users[1].email);

// some object methods
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));

//check out other object methods using console