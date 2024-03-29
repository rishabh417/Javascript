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



