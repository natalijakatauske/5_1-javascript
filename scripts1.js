//Pratimas 2
// document.querySelector("button").addEventListener("click", () => alert('Emma'))

//Pratimas 3
// document.querySelector('button').addEventListener('click', aboutMe)
// function aboutMe() {
//     document.querySelector('p').innerText = 'Labas, esu Emma Stoune'
// }

//Pratimas 4
// let counter = 2
// document.querySelector('button').addEventListener('click', () => {
//     counter++
//     document.querySelector('h1').innerText = counter
// })

//Pratimas 5
// document.querySelector('p').addEventListener('copy', () => {
//     event.preventDefault ()
//     alert("Cannot copy this")
// })

//Pratimas 6
// document.querySelector('button').addEventListener('click', () => {
//     const random = Math.floor(Math.random()*100)+1
//     document.querySelector('h1').innerText = random
// })

//Pratimas 7 Neveikia kazkodel
// document.getElementById('adult').addEvenListener('click', () => {
//     document.getElementById('output').innerText = 'Alus'
// })
// document.getElementById('child').addEvenListener('click', () => {
//     alert('Nepilnametis! Nieko neturime.')
// })

// document.getElementById('adult').addEventListener('click', () => document.getElementById('output').innerText = 'Alus');
// document.getElementById('child').addEventListener('click', () => alert('nepilnametis - nieko neturim'));

//Pratimas 8
// const randomNumber = Math.floor(Math.random()*3)+1
// console.log(randomNumber)
// document.getElementById('first').addEventListener('click', () => randomNumber === 1 ? alert('Yay'): alert('Nay'))
// document.getElementById('second').addEventListener('click', () => randomNumber === 2 ? alert('Yay') : alert('Nay'))
// document.getElementById('third').addEventListener('click', () => randomNumber === 3 ? alert('Yay') : alert('Nay'))

//Pratimas 9 NEVEIKIA
// document.querySelectorAll('button').addEventListener('click', sayNo)
// function sayNo() {
//     document.querySelector('h2').innerText = "Neklausote manęs"
// }

//Pratimas 10
document.body.addEventListener('mousemove', () => document.querySelector('h1').innerText = 'Kiek galima neklausyti?!')