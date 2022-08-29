console.log("veikia")

//Pratimas 1
function myName(name) {
    alert(name)
}
myName('Emma')

//Pratimas 2
function randomNumebr() {
    return Math.floor(Math.random()*5) +1
}
alert(randomNumebr())

//Pratimas 3
function sumaVP(vardas, pavarde) {
return vardas.length + pavarde.length
}
console.log(sumaVP('Emma', 'Stoune'))

//Pratimas 4
function myLetter(i) {
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N"]
return letters[i]
}
console.log(myLetter(3))

//Pratimas 5
function penkta(n1, n2, operator) {
    if (operator === "sum") {
        return n1 + n2
    } if (operator === "sub") {
        return n1 - n2
    } if (operator === "div") {
        return n1 / n2
    } if (operator === "multi") {
        return n1 * n2
    }
}
console.log(penkta(10, 5, "div"))

//Pratimas 6 NEVEIKIA
function random2 () {
    return Math.floor(Math.random() * 10) + 1
}
function squareNumber(number) {
    return Math.pow(number, 2)
}
// squareNum(random2())

