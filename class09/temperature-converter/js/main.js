//Write your pseduo code first! 
document.querySelector('#convert').addEventListener('click', funcCalc)

function funcCalc() {
    let fahrenheit = document.querySelector("#inpFahrenheit").value
    let floatNum = parseFloat(fahrenheit);
    let erg = fahrenheit * 1.8 + 32
    document.querySelector("#result").innerText = erg

}
