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
// console.log(logInUserMessage());



function calculateCartPrice(val1,val2,...num1){ // ... is rest operator
    return num1;
}

// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "abhishek",
    prices: "1999"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`)
}

// handleObject(user);

// handleObject({
//     username:"abhishek",
//     prices:199
// })

const myArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArray));

console.log(returnSecondValue([200,500,700]));
