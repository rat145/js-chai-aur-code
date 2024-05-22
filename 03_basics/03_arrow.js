const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);    
// }
// chai()

// ARROW FUNCTION

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);    
// }
// chai()

// const addTwo = (n1, n2) => {
//     return n1+n2
// }

// IMPLICIT ARROW FUNCTION

// const addTwo = (n1, n2) => n1+n2
// const addTwo = (n1, n2) => (n1+n2)
const addTwo = (n1, n2) => ({username: "hitesh"})

console.log(addTwo(3,4))


// const myArr = [2,3,4,5,6]
// myArr.forEach()