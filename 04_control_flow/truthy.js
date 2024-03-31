const arr = [] 
// if(arr) {
//     console.log("this arr checking whether an empty array is treated as true or not. answer is treated as true")
// }
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if(arr.length == 0) {
//     console.log(`length of array given is ${arr.length}`)
// }

const emptyObject = {}

// if(Object.entries(emptyObject).length == 0){
//     console.log("given object is empty")
// }

// Nullish Coalescing Operator (??): null undefined
let val
val = 5 ?? 10
// console.log(val)
val = null ?? 10
// console.log(val);
val = null ?? undefined ?? 89
// console.log(val)


// Terniary Operator

// condition ? true : false
const age = 17
const underAge =  age>=18 ? false : true
if(underAge) console.log("user is underage")
else console.log("user is not underage")