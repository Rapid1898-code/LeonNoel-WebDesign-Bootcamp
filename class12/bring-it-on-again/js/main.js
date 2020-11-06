// *Variables*
// Declare a variable, assign it a value, and alert the value
let v = 5
alert(v)

// Create a variable, divide it by 10, and console log the value
let v = 10
console.log(v / 10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function f(n1,n2,n3) {
    alert(n1 * n2 * n3)
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function f1(n1,n2,n3,n4) {
    console.log(n1+n2-n3-n4)
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function f2(n1,n2,n3) {
    let v = 100 + n1
    v = v - n2
    v = v / n3
    if (v > 25) {
        console.log("WE HAVE A WINNER!")
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function f3(day){
    day = day.toLowerCase()
    if (day === "sun" || day === "sat") {
        alert("weekend")
    } else if (day === "mon" || day === "tue" || day === "wed" || day === "thu" || day === "fri") {
        alert("week day")
    } else {
        alert("try again")
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function f4n1(n1) {
    for (let i;i<=n1;i++) {
        console.log(i + 3)
    }
}
