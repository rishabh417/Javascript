// const tinderUser = new Object()
// tinderUser.id = "123abs"
// console.log(tinderUser)

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.email = "rishusingh417@gmail.com"
tinderUser.contact = 78994984984
// console.log(tinderUser)
// console.log(tinderUser["id"])

const regularUser = {
    id : "1123abs", 
    name : "rishabh",
    email : "rishusingh417@gmail.com",
    contact : 87686868787,
    fullname : {
        userfullname : {
            firstname : "rishabh",
            last : "singh"
        }
    }
}

// console.log(regularUser["fullname"]["userfullname"]["firstname"])

const obj1 = {1:"a",2:"b",3:"b"}
const obj2 = {4:"a",5:"b",6:"b"}
const obj3 = {1:"a",7:"b",8:"b"}

// const objFinal = Object.assign({},obj1,obj2,obj3) // combining obj1,obj2,obj3 into objFinal throgh assign
// console.log(objFinal)

const objFinal = {...obj1,...obj2,...obj3} // combining objects using separator
// console.log(objFinal)

// console.log(tinderUser)
// console.log(Array.isArray(Object.keys(tinderUser)))
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


//  destructuring of an object
// const {email} = tinderUser
const {email : em} = tinderUser
console.log(em)


// JSON 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

