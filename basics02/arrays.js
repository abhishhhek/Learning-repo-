//array

const myArr = [1,2,3,4,"abhishek",true]

// console.log(myArr[4]);

const myArr2 = new Array(23,24,25,26,27);
// console.log(myArr2[3]);

myArr2.push(28);
// console.log(myArr2);
myArr2.pop();
// console.log(myArr2);

myArr2.unshift(9) //puts in 9 at first position

// console.log(myArr2)

myArr2.shift(); //removes element at first position
// console.log(myArr2)

const newArr = myArr2.join(); //makes the array of string type and join all the elements
// console.log(newArr);

//slice and splice

// console.log("A ", myArr2);

const myn1 = myArr2.slice(1,3); //prints element at index 1 and 2

// console.log(myn1);
// console.log("B ",myArr2)

//splice
 
const myn2  = myArr2.splice(1,3)
// console.log("Cf ",myArr2)
// console.log(myn2);

const marvel_heros = ["ironman","hulk","dr strange"]

const dc_heros = ["batman", "superman","flash"]

const All_heros = marvel_heros.concat(dc_heros);

// console.log(All_heros);

const All_new_heros = [...marvel_heros,...dc_heros]
// console.log(All_new_heros);

const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const arr2 = arr.flat(Infinity);

console.log(arr2);


console.log(Array.isArray("abhishek"));
console.log(Array.from("abhishek"));
console.log(Array.from({name: "abhishek"})); //interesting case




