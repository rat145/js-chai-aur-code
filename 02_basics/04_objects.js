// const tinderUser = new Object()   // Singleton object
const tinderUser = {}      // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 123,
        name: "hi"
    },
    {
        id: 123,
        name: "hi"
    },
    {
        id: 123,
        name: "hi"
    },
    {
        id: 123,
        name: "hi"
    },
    {
        id: 123,
        name: "hi"
    },
    {
        id: 123,
        name: "hi"
    },
]

// console.log(users[1].name);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}

// DE-STRUCTURING
// course.courseinstructor
const {courseinstructor: instructor} = course

// console.log(courseinstructor)
console.log(instructor)

//JSON
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

