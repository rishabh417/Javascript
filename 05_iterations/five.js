// for each
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item)
// } )

// coding.forEach( (item) => {console.log(item)} )

// coding.forEach( (item,index,arr) => {console.log(index,item,arr)} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) =>{
    // console.log(item.languageName)
    console.log(item["languageName"])
} )




