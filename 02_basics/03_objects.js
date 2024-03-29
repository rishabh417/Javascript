//  object literals

const mySym = "key1"
const JsUser = {
    name : "rishabh",
    age : 22,
    [mySym] : "mykey1",
    isEmployed : false,
    vegDays : ["Tuesday","Thursday","Saturday"],
    "email id" : "rishusingh417@gmail.com"

}

// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser[mySym])
// console.log(JsUser["email id"])

// JsUser.name = "rishu"
// console.log(JsUser["name"])
// // Object.freeze(JsUser)
// JsUser.name = "rishu singh"
// console.log(JsUser["name"])

JsUser.greetings = function () {
    console.log("Hello JS users.")
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS user : ${this.name}`)
}

console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())
