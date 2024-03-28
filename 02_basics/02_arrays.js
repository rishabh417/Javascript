const marvelHeros = ["spiderman","ironman","captain america"]
const dcHeros = ["superman","flash","batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// const allHeros = marvelHeros.concat(dcHeros) // it combines two arrays into one
// console.log(allHeros)

// const all_new_heros = [...marvelHeros,...dcHeros] // combining two or more arrays using separator
// console.log(all_new_heros)

// const tempArr = [1,2,3,[4,5,6],[[1,2,3],89,97,78]]
// const newTempArr= tempArr.flat(Infinity)
// console.log(newTempArr)

console.log(Array.isArray("rishabh"))
console.log(Array.from("rishabh"))
console.log(Array.of("rishabh")) // [ 'rishabh' ]
console.log(Array.from({name: "rishabh"}))

let sc1 =100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1,sc2,sc3))
