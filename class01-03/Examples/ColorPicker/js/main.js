document.querySelector('#red').addEventListener('click', funcRed)

function funcRed() {
    document.querySelector("body").style.backgroundColor = "lightsalmon";
}

document.querySelector('#blue').addEventListener('click', funcBlue)

function funcBlue() {
    document.querySelector("body").style.backgroundColor = "lightblue";
}

document.querySelector('#green').addEventListener('click', funcGreen)

function funcGreen() {
    document.querySelector("body").style.backgroundColor = "lightgreen";
}
