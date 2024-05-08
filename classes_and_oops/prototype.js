let myName = "rishabh     "

String.prototype.trueLength = function(){
    console.log(this.trim().length)
}

// myName.trueLength()
// "chai   ".trueLength()

let user = {
    name : "rishabh",
    age : 22,

    money: function(){
        console.log("will he earn")
    }
}
Object.prototype.rishabh = function(){
    console.log("rishabh is playing with prototype")
}
// user.rishabh()
// myName.rishabh() //since i added rishabh in Object using prototype 


// Inheritance

const tUser  = {
    name : "rishabh",
    email : "rishusingh@google.com"
}
const teaching = {
    makeVideo : true
}
const tASupport = {
    makeJournals : true,
    __proto__ : teaching
}

// console.log(tASupport.makeVideo)

// teaching.__proto__ = tUser
// console.log(teaching.email)

// Modern Syntax 

Object.setPrototypeOf(teaching,tUser)
console.log(teaching.email)
