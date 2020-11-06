//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function f(arr) {
    let mult = 1
    arr.forEach((x,i)=> mult *= x)
    alert(mult)
}
f([3,4,5])
