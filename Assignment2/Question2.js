//Author Wajahat Islam Gul
//Date 28/8/2022
"use strict"

function checkGrade(marks){
    switch(true){
        case(marks >= 90 && marks <= 100):
            console.log("Congratulations You Got S grade!")
            break;
        case(marks >= 80 && marks < 90):
            console.log("Congratulations You Got A grade!")
            break;
        case(marks >= 70 && marks < 80):
            console.log("Congratulations You Got B grade!")
            break;
        case(marks >= 60 && marks < 70):
            console.log("Congratulations You Got C grade!")
            break;
        case(marks >= 50 && marks < 60):
            console.log("Congratulations You Got D grade!")
            break;  
        case(marks >= 40 && marks < 50):
            console.log("Congratulations You Got E grade!")
            break;
        case(marks >= 0 && marks < 40):
            console.log("Student has failed")
            break;
        default:
            console.log("Invalid marks")
            break
    }      
}

checkGrade(90)