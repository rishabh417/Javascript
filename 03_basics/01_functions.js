function sayMyName(){
    console.log("r")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("b")
    console.log("h")
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     return num1+num2
// }

// const addResult = addTwoNumbers(5,6)
// console.log(addResult)

const addingResult = function(num1,num2){
    return num1+num2
}

// console.log(addingResult(5,6))


function cartAdding(...num1){
    return num1
}

const cartItem1 = {
    itemname : "first"
}
const cartItem2 = {
    itemname : "second"
}
const cartItem3 = {
    itemname : "third"
}

function cartAddingObject(...anyObject){
    return anyObject
}
console.log(cartAddingObject(cartItem1,cartItem2,cartItem3))

// console.log(cartAdding(5,6,78,98))

function loginUserMessage(userName){
    if(!userName){ 
        console("Please enter the username")
    }
    console.log(`Greetings ${userName}`)
}

// loginUserMessage("rishabh")


const user = {
    userName : "rishabh",
    course : "js"
}
// handleObject(user)
handleObject({
    userName : "rishabh singh", course : "js"
})
function handleObject(anyObject){
    console.log(`Hello ${anyObject.userName} welcome to ${anyObject.course}`)
}

const myArr = [100,200,300]

function getSecondElement(myArr){
    return myArr[1]
}

console.log(getSecondElement(myArr))

// function one(){
//     console.log("one")
// }
// function two(){
//     console.log("two")
// }
// function three(){
//     console.log("three")
// }

// one()
// two()
// three()

