// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const weekday = "SUNDAY"

switch(weekday.toLocaleLowerCase()){
    case "tuesday" : console.log(`Today is ${weekday.toUpperCase()}`)
    break;
    case "monday" : console.log(`Today is ${weekday.toUpperCase()}`)
    break;
    case "wednesdy" : console.log(`Today is ${weekday.toUpperCase()}`)
    break;
    case "thursday" : console.log(`Today is ${weekday.toUpperCase()}`)
    break;
    case "friday" : console.log(`Today is ${weekday.toUpperCase()}`)
    break;
    case "saturday" : console.log(`Today is ${weekday.toUpperCase()}`)
    // break;
    case "sunday" : console.log(`Today is ${weekday.toUpperCase()}`)
    
    default : console.log("Enter a valid weekday")
}