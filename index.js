// Your code here
function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`
}
saturdayFun(activity = "bathe my dog");


// function mondayWork() {
//     console.log("This Monday, I will go to the office.")
// }

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
    
// function wrapAdjective(thing = "special") {
//      let result = wrapAdjective(), emphatic = result("a hard worker");
// return `You are ${emphatic}`
// }

// function wrapAdjective(string = '*') {
//     let result = wrapAdjective(), emphatic = result()
//     result("a hard worker");
//     return `You are ${string} + ${result} + ${string}`
// }

// function wrapAdjective(string='*') {
//     const innerFunction = function(adjective='special') {
//         return `You are ${string}${adjective}${string}!`
//     }
//     return innerFunction
// }
function wrapAdjective(string = "*") {
    return function (adj = "special") {
        return `You are ${string}${adj}${string}!`
    }
}