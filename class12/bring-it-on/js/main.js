// *Variables*
// Create a variable and console log the value
let v = 5
console.log(v)

// Create a variable, add 10 to it, and alert the value
let v = 5
v += 10
alert(v)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function f1 (n1,n2,n3,n4) {
    alert(n1 - n2 - n3 - n4)
}

// Create a function that divides one number by another and returns the remainder
function f2 (n1,n2) {
    return(n1 % n2)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function f3 (n1,n2) {
    let sum = n1 + n2
    if (sum > 50) {
        alert ("Jumanji!")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function f4 (n1,n2,n3) {
    let mult = n1 * n2 * n3
    if (sum % 3 == 0) {
        alert ("Jumanji!")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function f5 (word,n1) {
    for (leti=1; i<=n1; i++) {
        console.log(word)
    }
}


