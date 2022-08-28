//Author Wajahat Islam Gul
//Date 28/8/2022
//This program prints sum of multiples of 3 and 5 under 1000
"use strict"

let sum = 0;
for(let i=1;i<1000;i++){
    if(i % 3 === 0 && i %5 === 0)
        sum += i;
}
console.log("Sum of multiples of 3 and 5 under 1000 is: " + sum)
