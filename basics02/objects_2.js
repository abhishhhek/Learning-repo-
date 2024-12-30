
//++++++++++++++++singleton object using constructor++++++++++++++++++++++++++

// const tinderUser = new Object() //singleton object
const tinderUser = {}         // Though its a non singleton object .....same thing, just another way

// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "abhishek",
            lastname: "rajoriya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);