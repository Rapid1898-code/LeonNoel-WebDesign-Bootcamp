// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let v = true
alert(v)

// Declare a variable, reassign it to your favorite color, and console log the value
let c = green;
console.log(c)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function f(n1,n2,n3,n4) {
    return(n1+n2+n3)/n4
}
f (4,3,2,1)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function f1(n1,n2) {
    console.log(n1**n2)
}
f2 (2,2)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function f2(bool,str) {
    if (bool == true) {
        alert(str)
    } else {
        console.log(str)
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number,
// if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function f3(n1) {
    for (let i=1; i<=n1; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            print ("fizzbuzz")
        } else if (i % 3 == 0) {
            print ("fizz")
        } else if (i % 5 == 0) {
            print ("buzz")
        } else
            print (n1)
    }
}
