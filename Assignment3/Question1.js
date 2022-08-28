//Author Wajahat Islam Gul
//Date 28/8/2022

"use strict"

let num = 1;
let result = ""
for(let i=0;i<4;i++){
    for(let j = 0; j <= i;j++)
        {
            result += num + " "
            num++;
        }
    result += "\n"
}
console.log(result)