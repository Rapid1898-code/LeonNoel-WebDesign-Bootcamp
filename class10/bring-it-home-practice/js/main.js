// *Variables*
// Create a variable and console log the value
let num = 25
console.log(num)

// Create a variable, add 10 to it, and alert the value
let number
number += 10
alert(number)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(init, a, b, c, d) {
    initNew = init - a
    initNew = initNew - b
    initNew = initNew - c
    initNew = initNew - d
    alert(init - initNew)
}

// Create a function that divides one number by another and returns the remainder
function  divide(a,b) {
    return(a%b)
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function  addIf(a,b) {
    sum = a + b
    if (sum > 50) {
        alert("Jumanji!")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function  multiply(a,b,c) {
    mult = a * b * c;
    if (mult % 3 == 0) {
        alert("Zebra!")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function (word, number) {
    for (leti=1; i<=number; i++) {
        console.log(word)
    }
}











