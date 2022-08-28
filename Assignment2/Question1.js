//Author Wajahat Islam Gul
//Date 28/8/2022
"use strict"

function checkTriangle( side1, side2, side3){
    //If all three sides are equal
    if(side1 === side2 && side2 === side3){
        console.log(`Triangle with sides ${side1}, ${side2} and ${side3} is equilateral`)
    }
    //if any  two sides are equal
    else if(side1 === side2 || side1 === side3 || side2 === side3){
        console.log(`Triangle with sides ${side1}, ${side2} and ${side3} is isosceles`)
    }
    else{
        console.log(`Triangle with sides ${side1}, ${side2} and ${side3} is scalene`)
    }
    
        
}

checkTriangle(10,10,10)