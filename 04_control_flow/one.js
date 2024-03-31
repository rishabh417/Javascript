const temperature = 40
const isLogin = false

// if(temperature<60) console.log("temperature is less than 60")

// if(temperature<=60){
//     console.log(`temperature is less than 60. current temperature is ${temperature}`)
// }else if(temperature>=61 && temperature<80){
//     console.log(`temperature is more than 60. current temperature is ${temperature}`)
// }else{
//     console.log(`temperature is : ${temperature}`)
// }

const loginFromGoogle = true
const loginFromEmail = true
const loginFromYahoo = false
const age = 12

if(loginFromGoogle && loginFromEmail) console.log("user is login from email as well as google")
if(loginFromGoogle || loginFromYahoo) console.log("user is login")
if(loginFromGoogle && loginFromEmail && age<18) console.log("user is underage")
if(age === "12") console.log("age is 12 triple equal to")
if(age == "12") console.log("age is 12")
