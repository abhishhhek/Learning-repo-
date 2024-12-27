const score = 400
const num = new Number(200.989);

// console.log(num)

// console.log(num.toString().length);
// console.log(typeof(num))

// console.log(num.toFixed(1))

// console.log(num.toPrecision(4));


const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++MATHS+++++++++++++++++++++++++++++

console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(7.53));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(4,6,7,9));
// console.log(Math.max(4,6,7,9));


console.log(Math.random()); //gives values between 0 and 1
console.log((Math.random()*10) + 1); //gives values between 1 and 10, +1 is there to remove the 0 case

console.log(Math.floor((Math.random()*10) + 1)); //gives integral values between 1 and 10


const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

