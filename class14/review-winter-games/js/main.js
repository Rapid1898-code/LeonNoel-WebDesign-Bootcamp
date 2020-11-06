//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map)
function f(arr) {
    let newArray = []
    for (let i=1; i<arr.length; i++) {
        if (arr[i]%2 === 0){
            newArray.push(arr[i])
        }
    }
}
