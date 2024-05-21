// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 4, 21, 10, 52);
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-21-2004");
console.log(myCreatedDate.toDateString());

let timestamp = Date.now();
console.log(timestamp);

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
})