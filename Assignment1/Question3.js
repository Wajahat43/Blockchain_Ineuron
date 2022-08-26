"use strict"

let number = 10;
let factorial = 1

if(number < 0){
    console.log("Negative numbers don't have factorial")
}
else{
    for(let i=1;i <= number;i++){
        factorial = factorial*i
    }
    console.log("Factorial of " + number + " is: " + factorial)
}
    

    