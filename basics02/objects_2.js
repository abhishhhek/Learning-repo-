
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
// const obj3 = Object.assign({},obj1,obj2) //{} acts as an empty container for the arrays afterwards and ensures smooth object combinations into a single array

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email: "abhishek@gmail.com"
    },
    {
        id:1,
        email: "abhishek@gmail.com"
    },
    {
        id:1,
        email: "abhishek@gmail.com"
    },
    {
        id:1,
        email: "abhishek@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//++++++++++++++Object Destructure++++++++++

const course ={
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor)

// const {courseInstructor} = course;
// console.log(courseInstructor);

const {courseInstructor:instructor} = course;
console.log(instructor);



