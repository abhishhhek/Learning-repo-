const accountId = 93082
let accountMail = "abhi@google.com"
var accountPass = "12345" /* Prefer not to use var, due to block scope and functionality scope*/
accountCity = "aligarh"
 
// accountId = 2 //Not allowed
accountMail = "new@gmail.com"
accountPass = "121321"
accountCity = "agra"
let accountState;

console.table([accountId,accountMail,accountPass,accountCity,accountState])
console.log(accountId)