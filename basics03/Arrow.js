const user = {
    username : "abhishek",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , Welcome to website`);
        console.log(this)
    }

}

// user.welcomeMessage();
// user.username = "Aman"

// user.welcomeMessage();

// console.log(this); //gives empty object in node

// function chai(){
//     let username = "abhishek"
//     console.log(this.username); //Not valid
// }
// chai()

// const chai = function(){
//     let username = "abhishek"
//     console.log(this.username); //Not valid
// }

// Arrow function
const chai = () => {
    let username = "abhishek"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }   

// const addTwo = (num1, num2) => num1 + num2 

// const addTwo = (num1, num2) => (num1 + num2 ) //Implicit return

const addTwo = (num1, num2) => ({username : "abhishek"})   //Object return
console.log(addTwo(2,3))