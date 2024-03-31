//  for loop 

// for(let i = 1;i<=5;i++){
//     console.log(`${i}`)
// }

// for(let i=1;i<=10;i++){
//     console.log(`Mathematical table for ${i}`)
//     for(let j=1;j<=10;j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
// }


let myArr = ["first","second","third","fourth","fifth","sixth","seventh","eight","ninth","tenth"]
// for(let index = 0 ; index<myArr.length ; index++){
//     console.log(myArr[index])
// }

// for(let index = 0 ; index<myArr.length ; index++){
//     if(index == 5) break;
//     console.log(myArr[index])
// }

for(let index = 0 ; index<myArr.length ; index++){
    if(index == 5) continue;
    console.log(myArr[index])
}

