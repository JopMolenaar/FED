// JavaScript Document
console.log("hi");


const openButton = document.querySelector('header div > button');
const deHeader = document.querySelector('header');
const ul = document.querySelector('body header nav ul');
const loetjeimg = document.querySelector("body header img");





openButton.addEventListener("click", () => {
    deHeader.classList.toggle("active")
    console.log("hamburger menu");
});



const carousel = document.querySelector('main a');

if (carousel === document.activeElement) {
    console.log('Element has focus!');
} else {
    console.log(`Element is not focused.`);
}











