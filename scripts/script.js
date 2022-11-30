// JavaScript Document
console.log("hi");


const openButton = document.querySelector('header div > button');
const deHeader = document.querySelector('header');


openButton.addEventListener("click", () => {
    deHeader.classList.toggle("active")
    console.log("hamburger menu");
});









