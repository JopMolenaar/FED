// JavaScript Document
console.log("hi");


const toggleButton = document.querySelector('nav a:nth-of-type(1)');
const section = document.querySelector('nav');
// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const section = document.getElementsByClassName('navigatie')[0]

toggleButton.addEventListener('click', () => {
    section.classList.toggle('active')
})