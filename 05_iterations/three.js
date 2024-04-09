// for of
const arr = [1,3,4]
for (const iterator of arr) {
    // console.log(iterator)
}

const str = "rishabh singh"
for (const iterator of str) {
    // console.log(iterator)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set(1,3)
// console.log(map)

for (const [key,value] of map) {
    // console.log(`For ${key} the value is : ${value}`)
}

const myObj = {
    name : "rishabh",
    age : 23,
    blood : "O+"
}


// for (const iterator of myObj) {
//     console.log(iterator);  //TypeError: myObj is not iterable
// }

const arr2 = [
    {name : "rishabh"},
    {name : "aditya"}
]

// for (const iterator of arr2) {
//     console.log(iterator["name"]);  // for of will work for array of objects.
// }

