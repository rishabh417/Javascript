const promiseOne = new Promise((resolve,reject) =>{
    setTimeout(function(){
        console.log("Promise One")
        resolve()
    },1000)

})

const promiseOneConsumed = promiseOne.then(function(){
    console.log("promise one consumed")
})

new Promise((resolve,reject) => {
    setTimeout(function(){
        console.log("Promise")
        resolve()
    })
},1000).then(function(){
    console.log("just promise consumed")
})


const promiseThree = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve({user:"rishabh",age:22})
    },1000)
})

const promiseThreeConsumed = promiseThree.then((user) =>{
    console.log(user)
})


const promiseFour = new Promise((resolve,reject) => {
    setTimeout(() =>{
        let error = true
        if(!error) {
            resolve({user:'rishabh',age:22})
        }else{
            reject('Error : Something went wrong')
        }
        
    },1000)
})

const promiseFourConsumed = promiseFour.then((user) => {
    console.log("first then")
    return user.user
}).then((username) =>{
    console.log(username)
}).catch((errorMessage) =>{
    console.log(errorMessage)
}).finally(() =>{
    console.log("finally executes when the promise is settled (either resolved or rejected)")
})


const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() =>{
        let error = true
        if(!error) {
            resolve({user:'async-await',age:22})
        }else{
            reject('Error : Something went wrong')
        }
        
    },1000)
})

async function promiseFiveAsyncFunction() {
    try {
        const response = await promiseFive
        console.log(response.user)
    } catch (error) {
        console.log(error)
    }
    
}

promiseFiveAsyncFunction()


async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()

    console.log(data)
    // console.log(Array.from(data)[1])

}

getAllUsers()

fetch('https://api.github.com/users/rishabh417')
    .then((response) => {
        return response.json()
    })
    .then((data) =>{
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })