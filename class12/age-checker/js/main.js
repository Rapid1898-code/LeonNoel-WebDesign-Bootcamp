//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', funcG)

function funcG() {
    let age = parseInt(document.querySelector('#danceDanceRevolution').value)
    document.querySelector('p').innerText = age
    if (age < 16) {
        alert("They can not drive!")
    } else if (age < 18) {
        alert ("Outside the club")
    } else if (age < 21) {
        alert ("Can Not Drink")
    } else if (age < 25) {
        alert ("Can Not Rent Cars")
    } else if (age < 30) {
        alert ("Tell rent fancy cars")
    } else {
        alert ("Nothing to look forward")
    }
}
