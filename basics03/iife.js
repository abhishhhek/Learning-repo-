//Immediately invoked function expression (IIFE)
// IIFE is a function that is executed right after it is created

//To avoid polluting the global scope, you can use IIFE

(function iife(){
    //named IIFE
    console.log(`DB connected`);
})();

( (name) =>  { //unnamed iife
    console.log(`DB connected Mr ${name}`);
})('Abhishek')