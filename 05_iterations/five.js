// High Order Function

const coding =["js", "ruby", "java", "python", "cpp"];

// for each
//syntax 1
/*
coding.forEach(function (item) { // no need to write name of function involving a callbackfunction
    console.log(item);
});
*/

//syntax 2 => using arrow function
/*
coding.forEach((item) => {
    console.log(item);    
});
*/


function printMe(item){
    console.log(item);    
}

coding.forEach(printMe); // reference given for printMe function
// coding.forEach(printMe()); 


coding.forEach((item, index, arr) => { // other parameters
    console.log(item, index, arr);    
});


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    }, 
    {
        languageName: "java",
        languageFileName: "java"
    }, 
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);    
});