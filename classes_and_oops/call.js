function setUserName(userName){
    
    this.userName = userName
    console.log("called")
}

function createUser(userName,age,email){

    setUserName.call(this,userName)
    this.age = age
    this.email = email
}

const chai = new createUser("rishabh",22,"rishu@gmail.com")
console.log(chai)