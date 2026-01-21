// Immediately Invoked Function Expressions (IIFE)
// IIFE is used to escape from the pollution of global scope

(function one() { // named iife
    console.log("DB connected");    
})();

( function two() {
    console.log("DB connected Two");
})();

( (name) => {
    console.log(`DB connected again with ${name}`);
})();