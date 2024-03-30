// Immediately Invoked Function Expressions (IIFE)

// iife is used to secure function from polluting through global variables i.e. making function not effectd by the global variables


(function () {
    console.log("named iife")
})();

(function(name){
    console.log(`named iife for ${name}`)
} )();

( () => console.log("unnamed iife") )();
