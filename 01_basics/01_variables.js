const accountId = 12345;
let accountEmail = "ratan@gmail.com";
var accountPassword = 765423123;
accountCity = "Mumbai";

// accountId = 11345;  // not allowed

accountEmail = "rat@gmail.com";
accountPassword = 23456789;
accountCity = "Bengaluru";

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);