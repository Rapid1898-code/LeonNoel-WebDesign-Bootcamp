// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let v = "food";
v = "newFood"
alert(v);


//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let v = "test";
alert(v.charAt(1));


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function f(n1,n2,n3) {
    alert(n1 / n2 * n3);
}
f(1,2,3)


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function f1(n1) {
    console.log(Math.cbrt(n1));
}
f1 (9)


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function f2(m) {
    if (m === "july" || m === "august") {
        alert ("YAY")
    } else {
        alert ("BOO")
    }
}


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function f3(n1) {
    for (let i=1; i<=n1; i++) {
        if (i%5 !== 0) {
            console.log(i)
        }
    }
}
