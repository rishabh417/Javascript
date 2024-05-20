function setUserName(userName){
    
    this.userName = userName
    console.log("called")
}

function createUser(userName,age,email){

    setUserName.call(this,userName) // iss scenario mein mujhe uska reference hold karke rakhna hai isliye call use hua hai.
    this.age = age
    this.email = email
}

const chai = new createUser("rishabh",22,"rishu@gmail.com")
console.log(chai)