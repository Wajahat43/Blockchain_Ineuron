//Author Wajahat Islam Gul
//Date 28/8/2022
//This program checks if sum of factorial of digtis of a number is equal to the number itself
"use strict"


//Calculates and returns factorial of a number
function getFactorial(num){
    let factorial = 1;
    for(let i = 1; i <= num;i++){
        factorial *= i;
    }
    return factorial;
}

//Checks if sum of factorial of digits of a number is equal to number itself.
function isSpecial(num){
    let numCopy = num
    let sumFactorial = 0
    while(numCopy > 0){
        let digit = numCopy %10;
        sumFactorial += getFactorial(digit)
        numCopy = parseInt(numCopy / 10)
    }

    if(sumFactorial === num){
        console.log(num + " is a special number.")
    }
    else{
        console.log(num + " is not a special number.")
    }

}

isSpecial(145)