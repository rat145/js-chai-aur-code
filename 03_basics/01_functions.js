function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName  //reference
// sayMyName()  //execution

function addTwoNos(n1, n2) {
    // console.log(n1 + n2)
}

addTwoNos(3, null)

// n1 and n2 are parameters (defined while writing function)
// 3, 4 are aruguments passed while calling the function

function add2Nos(n1, n2) {
    return n1+n2
}

const result = add2Nos(1,4)
// console.log(result);

function loginUserMessage(username) {
    if(!username){
        console.log("Please enter username");
        return
    } else {
        return `${username} just logged in`
    }
}

// console.log(loginUserMessage("rat"))

function calculateCartPrice(val1, val2, ...num) {   // rest operator
    return num;
}

console.log(calculateCartPrice(100, 200, 300, 5000));

const user = {
    username: "hitesh",
    prices: 199    
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

const myNewArray = [200, 400, 100, 600]

function return2ndValue(arr) {
    return arr[1]
}

console.log(return2ndValue(myNewArray));