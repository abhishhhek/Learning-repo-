function saymyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}

// saymyName

// function addTwoNum(num1,num2){
//     console.log(num1 + num2);
// }

function addTwoNum(num1,num2){
    // let result = num1+num2 
    // return result
    return num1+num2;
}

const result = addTwoNum(5,3);
// console.log("Result: ", result);

function logInUserMessage(username = "default"){ //gives default value
    if(!username){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}
console.log(logInUserMessage());
