// ES6

class User{
    constructor(userName,email,password){
        this.userName=userName
        this.email=email
        this.password=password
    }

    encryptUserName(){
        return `${this.userName.toUpperCase()}`
    }
    encryptPassword(){
        return `${this.password + 'abc'}`
    }
    static userId(){ // static keyword makes it inacessible to the user.
        return '123'
    }
}

const chai = new User("rishabh","ri@gmail.com","password")
console.log(chai.encryptUserName())
console.log(chai.encryptPassword())
// console.log(chai.userId()) // can't access since static keyword is attached

// Behind the Scene

// function User(userName,email,password){
//     this.userName=userName
//     this.email=email
//     this.password=password

// }

// User.prototype.encryptUserName = function(){
//     return `${this.userName.toUpperCase()}`
// }
// User.prototype.encryptPassword = function(){
//     return `${this.password + 'abc'}`
// }


// const tea = new User("rishu","gmail@gmail.com","eena-meena-deeka")
// console.log(tea.encryptUserName())
// console.log(tea.encryptPassword())