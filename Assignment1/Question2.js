"use strict"

let tempCelcuisus = 60
let tempFarenheit = 45

let convertedFarenheit
let convertedCelcius

convertedCelcius = (tempFarenheit - 32) * 5 / 9
convertedFarenheit = 9*tempCelcuisus/5 + 32

console.log(tempCelcuisus + " C is " + convertedFarenheit + " F")
console.log(tempFarenheit + " F is " + convertedCelcius + " C")