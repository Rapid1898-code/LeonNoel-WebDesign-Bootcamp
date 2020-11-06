//Create an array of movie titles. Loop through the array and each element to the h2.
let arr = ["A","B","C"]
arr.forEach((x,i) => document.querySelector("h2").innerText += x)

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let arr = [1,2,3]
arr.forEach((x,i) => arr[i] = arr[i] + 3)

//Find the average of all the numbers from question three
let avg = 0
arr.forEach((x,i) => avg += x)
avg = avg / arr.length
