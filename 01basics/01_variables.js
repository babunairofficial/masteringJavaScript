const accountId = 123456;
let accountEmail = "batmal@gotham.com";
var accountPassword = "12345";
accountCity = "Gotham city";

let accountState;

// accountId = 2; // not allowed

accountEmail = "brucewayne@wayneenterprise.com";
accountPassword = "98765";
accountCity = "metropolis";

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
