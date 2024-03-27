const sampleNumber = 90
// console.log(sampleNumber)

const sampleNumber2 = new Number(90)

// console.log(sampleNumber2)
// console.log(sampleNumber2.toString());
// console.log(sampleNumber2.toString().length);

const otherNumber = 123.498
// console.log(otherNumber.toFixed(2));
// console.log(otherNumber.toPrecision(2))

const numberForRepresentation = 10000000000
// console.log(numberForRepresentation.toLocaleString())
// console.log(numberForRepresentation.toLocaleString("en-IN")) // or even 'en-IN' will work.

// ++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.max(2,34,-9,90));
// console.log(Math.min(2,34,-9,90));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.round(4.2));
// console.log(Math.round(4.6));

console.log(Math.random())
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const max = 20
const min = 10
console.log(Math.floor((Math.random()) * (max - min + 1)) + min) // gives random value in between 10 to 20

