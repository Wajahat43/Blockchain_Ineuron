<<<<<<< HEAD
//Author Wajahat Islam Gul
//Date 28/8/2022
//This program finds factorial of all prime numbers in a given range
"use strict"

//Checks if a number is prime
function isPrime(num){
    //check if number is divisible by any other number less than it
    //if it is divisible, it is not prime
    for(let i=2;i<num/2;i++){
        if(num % i === 0)
            return false;
    }
    return true;
}

//Calculates and returns factorial of a number
function getFactorial(num){
    let factorial = 1;
    for(let i = 1; i <= num;i++){
        factorial *= i;
    }
    return factorial;
}

//factorial of all prime numbers in range low to high
function prime(low, high){
    for(let i=low;i<=high;i++){
        if(isPrime(i)){
            console.log(`${i} is a prime and its factorial is: ${getFactorial(i)}`)
        }
    }
}

=======
//Author Wajahat Islam Gul
//Date 28/8/2022
//This program finds factorial of all prime numbers in a given range
"use strict"

//Checks if a number is prime
function isPrime(num){
    //check if number is divisible by any other number less than it
    //if it is divisible, it is not prime
    for(let i=2;i<num/2;i++){
        if(num % i === 0)
            return false;
    }
    return true;
}

//Calculates and returns factorial of a number
function getFactorial(num){
    let factorial = 1;
    for(let i = 1; i <= num;i++){
        factorial *= i;
    }
    return factorial;
}

//factorial of all prime numbers in range low to high
function prime(low, high){
    for(let i=low;i<=high;i++){
        if(isPrime(i)){
            console.log(`${i} is a prime and its factorial is: ${getFactorial(i)}`)
        }
    }
}

>>>>>>> 472ecd06249bf31fb6e969126430e25194d8c29e
prime(10,100)