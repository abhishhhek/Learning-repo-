let myDate = new Date()
// console.log(myDate.toUTCString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());


// let mynewDate = new Date(2003,0,14,5,4);
// console.log(mynewDate.toLocaleString());


let bday = new Date("2003-01-14")
// console.log(bday.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(bday.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);

console.log(newDate.getMonth() +1);
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday : "long"
})