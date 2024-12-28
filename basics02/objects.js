//object literal

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhishek",
    "full name " : "Abhishek Rajoriya",
    [mySym] : "mykey1",  //to denote a symbol , use square brackets else it acts as a string
    age : 21,
    location : "aligarh",
    email : "abhishek@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.age);
// console.log(JsUser["name"]);
// console.log(JsUser["full name "]);
// console.log(JsUser[mySym]);

JsUser.email = "abhishekkk@gmail.com"

// Object.freeze(JsUser) //stops updation
JsUser.email="new@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, Mr ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());





