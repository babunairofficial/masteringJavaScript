const marvel_heroes = ["ironman", "thor", "hulk"];
const dc_heroes = ["batman", "superman", "wonderwoman", "flash"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);


// spread operator - merges arrays cleanly
const all_new_heroes = [... marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

const another_array =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); //flatten nested arrays

console.log(real_another_array);

console.log(Array.isArray("shaktimaan")); // check if it is an array
console.log(Array.from("shaktimaan")); // creates an array from iterable
console.log(Array.from({name: "shaktimaan"})); // returns an empty array until there is keys specifications

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // creates an array from a set of individual values
