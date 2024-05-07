const pro1 = new Promise( (resolve,reject) =>{
    setTimeout(()=>{
        resolve()
        console.log("First Promise")        
    },0)
} )

console.log("checking will it execute before promise one or after it")

// pro1.then(()=>{
//     console.log("promise one is executed")
// })

console.log(new Date().toLocaleTimeString())

const pro2 = new Promise( (resolve,reject) =>{
    setTimeout(()=>{
        console.log("Second Promise")
    },0)
} )



console.log(new Date().toLocaleTimeString())

pro1.then(()=>{
    console.log("promise one is executed")
})

