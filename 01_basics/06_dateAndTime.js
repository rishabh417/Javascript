let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

let createMyDate = new Date(2002,0,18)
// console.log(createMyDate.toString())
// console.log(createMyDate.toLocaleString())
// console.log(createMyDate.toLocaleDateString())

let myCreatedDate = new Date("01-02-2002")
// let myTimeStamp = Date.now()
// // console.log(myTimeStamp)
// // console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // converting todays time from miliseconds to seconds

let newDate = new Date()
// console.log(newDate.toString())
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getMonth() + 1) // calculation of month start from 0 i.e. janauary belongs to 0 th place 
// console.log(newDate.getFullYear())


console.log(newDate.toLocaleString("default",{
    weekday : "long",
    month : "long"
}
))


