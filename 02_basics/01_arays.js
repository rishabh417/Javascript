const myArr = [1,2,3,4,5,true,"rishabh"] 
// console.log(myArr)

const myArr2 = new Array(1,2,3,true,"rishabh")
// console.log(myArr2)
// console.log(myArr2[3]);

// Array Mehtods
// myArr.push(6) // adds element at last of the array
// myArr.push(7) 
// myArr.pop() // removes the last element of the array
// myArr.unshift(0) // adds element at the begining of the array
// myArr.unshift(-1) 
// myArr.shift() // removes an element from the begining
// console.log(myArr);

// console.log(myArr.includes("rishabh"))
// console.log(myArr.indexOf("rishabh"))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(newArr.charAt(1))
// console.log(typeof newArr)


//  slice , splice
console.log(` myArr : ${myArr}` )
const myArrSlice = myArr.slice(1,3)
console.log(` A  : ${myArrSlice}`)
console.log(` myArr ${myArr}`)
const myArrSplice = myArr.splice(1,3)
console.log(` B  : ${myArrSplice}`)
console.log(` myArr  : ${myArr}`)




