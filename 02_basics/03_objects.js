// singleton
// Object.create

// Symbol
const mySym = Symbol("key1")

// object literals
// key is automatically stored as string
const JSuser = {
    name: "hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);

JSuser.email = "hitesh@chatgpt.com"
// Object.freeze(JSuser)
JSuser.email = "hitesh@microsoft.com"
// console.log(JSuser);

JSuser.greeting = function() {
    console.log("Hello JS user");
}
JSuser.greetingTwo = function() {
    console.log(`Hello JS user ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greeting);
console.log(JSuser.greetingTwo());