const name = "greenLantern";
const repoCount = 30;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('lantern corp');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0, 4); //slice can have negative values also 
console.log(anotherString);
const anotherString2 = gameName.slice(-10, 4)
console.log(anotherString2);

const newStringOne = "    spiderman    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://lanterncorp.com/green%20lantern";

console.log(url.replace('%20', '-'));

console.log(url.includes('lantern'));
 
console.log(gameName.split(' '));
