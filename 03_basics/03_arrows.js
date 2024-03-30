const user = {
    name : "rishabh",
    age : 22,

    welcomeMessage : function(){
        console.log(`Wellcome Mr.${this.name} now you were ${this.age} old`)
        console.log(this) // prints the current context
    }

}

// console.log(user.welcomeMessage())

// function chai(){
//     let userName = "rishabh"
//     console.log(this.userName) // gives undefined
// }

// chai()

const chaiArrow = () => {
    let userName = "rishabh singh"
    console.log(userName)
}

// console.log(chaiArrow())

const additionOfTwo = (num1,num2) => (num1+num2)
// const additionOfTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(additionOfTwo(4,5))

const returningAnObjectInArrowFunction = () => ({username : "rishabh singh in arrow function"})
console.log(returningAnObjectInArrowFunction())

