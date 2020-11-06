//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter (fName,fStrength,fGender,fCountry) {
    this.name = fName
    this.strength = fStrength
    this.gender = fGender
    this.country = fCountry
    this.fight = function () {
        alert("This is a fight move!")
    }
    this.block = function () {
        alert("Block the attack!")
    }
    this.eat = function () {
        alert("Get Power!")
    }
}
let f1 = new MakeFighter("Franz","100","m","austria")
