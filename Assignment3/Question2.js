//Author Wajahat Islam Gul
//Date 28/8/2022
//This program checks if a number is armstrong number or not
"use strict"

function isArmstrong(num){
    let numCopy = num
    let cubedDigitsSum = 0
    while(numCopy > 0){
        let digit = numCopy%10
        cubedDigitsSum += (digit*digit*digit)
        numCopy = parseInt(numCopy/10) 
    }
    if(num == cubedDigitsSum)
        console.log(num + " is Armstrong number.")
    else
        console.log(num + " is not an Armstrong number.")
}

isArmstrong(150)