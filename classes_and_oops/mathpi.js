// console.log(Math.PI)
// Math.PI = 7
// console.log(Math.PI)

console.log(Object.getOwnPropertyDescriptor(Math,'PI'))

// console.log(Object.defineProperty(Math,'PI',{  //cannot redefine
//     writable:true
// }))

const user = {
    userName : 'rishabh',
    age : 22
}

console.log(Object.getOwnPropertyDescriptor(user,'age'))
Object.defineProperty(user,'age',{
    writable:false,
    enumerable:false,
    configurable:false
})
console.log(Object.getOwnPropertyDescriptors(user,'age','userName'))