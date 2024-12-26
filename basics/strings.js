const name = "abhishek"
const CG = 7.78

// console.log(name+CG+"value");  //old method to concatenate

console.log(`Hello my name is ${name} and my CG is ${CG}`)


console.log(name[0]);
console.log(name.__proto__);

console.log(name.length);
console.log(name.toUpperCase());

const newString = name.substring(0,4) //Negative vlaues are not allowed
console.log(newString);

const anotherString = name.slice(-7,4) //Negative vlaues are allowed, starts from back
console.log(anotherString);

const newString1 = "   abhi   ";
console.log(newString1) //with spaces
console.log(newString1.trim()) //without spaces after trimming


