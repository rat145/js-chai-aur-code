const myNums = [1,2,3]

// const myTotal = myNums.reduce((accumlator, current_value) => {
//     console.log(`Accumulator value: ${accumlator}   Current value: ${current_value}`);
//     return accumlator + current_value
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, curr) => (acc + curr.price),0)

console.log(priceToPay);