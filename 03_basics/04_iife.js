// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named iife
    console.log(`DB connected`);
})();

// ()()
// We use iife to reduce pollution in global

((name) => {
    //simple / unnamed iife
    console.log(`DB connected Two ${name}`);
})("hitesh");