const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (item) => {
    console.log(item);
    // return item; // forEach does not return any value
});

console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num > 5);
console.log(newNums);



const newNums2 = myNums.filter( (num) => {
    return num > 4; // need to return when within a scope                                                           
});
console.log(newNums2);


const newNums3 = [];
myNums.forEach( (num) => {
    if (num > 6) {
        newNums3.push(num);
    }
});
console.log(newNums3);


const books = [
    {title: 'Book one', genre: 'Fantasy', publish: 1945, edition: 2004},
    {title: 'Book two', genre: 'Fiction', publish: 1967, edition: 2008},
    {title: 'Book three', genre: 'History', publish: 1981, edition: 2007},
    {title: 'Book four', genre: 'Science', publish: 1992, edition: 2010},
    {title: 'Book five', genre: 'Fiction', publish: 1915, edition: 2014},
    {title: 'Book six', genre: 'Science', publish: 2009, edition: 2010},
    {title: 'Book seveb', genre: 'Fantasy', publish: 1986, edition: 1996},
    {title: 'Book eight', genre: 'History', publish: 1928, edition: 1989},
    {title: 'Book nine', genre: 'Fiction', publish: 1973, edition: 2005},
    {title: 'Book ten', genre: 'Science', publish: 1996, edition: 2011},
];

let userBooks = books.filter( (bk) => bk.genre === 'History');
console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.publish >= 1980 && bk.genre === "History"
});
console.log(userBooks);

