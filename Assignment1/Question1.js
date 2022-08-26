"use strict"
let year = 1996;
//Leap years are divisible by 4 if they are not century years
//or leap years are divisible by 400
if ((year % 4 === 0 && year%100 != 0) || (year % 400 === 0)){
    console.log(year + " is a leap year!");
}
else {
    console.log(year +" is not a leap year!");
}