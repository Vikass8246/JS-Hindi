const accountId = 144553
let accountEmail = "vikasyadav826853073@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// acoountId = 2  Not Allowed

accountEmail = "hc@hc.com"
accountPassword = "245678"
accountCity = "Mumbai"

let accountState;

/*
Prefer not to user var
beacuse of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])