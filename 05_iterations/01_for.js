// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i=1; i<=10; i++) {
    for (let j=1; j<=10; j++) {
        // console.log(`${i} x ${j} = ${i*j}`);
    }
}

let myArr = ["flash", "batman", "superman"]

for (let i=0; i<myArr.length; i++) {
    console.log(myArr[i]);
}

// break and continue

// for (let i=0; i<=20; i++) {
//     if (i==5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }
for (let i=0; i<=20; i++) {
    if (i==5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);
}