// JavaScript Document
console.log("hi");


const openButton = document.querySelector('header div > button');
const deHeader = document.querySelector('header');
const ul = document.querySelector('body header nav ul');
const loetjeimg = document.querySelector("body header img");

const openToegankelijkheid = document.querySelector("header section button")
const body = document.querySelector("body")

const overScrollUitButton = document.querySelector("header section button:nth-of-type(3)")
const html = document.querySelector("html")

const hoogContrastButton = document.querySelector("header section button:nth-of-type(2)")

openButton.addEventListener("click", () => {
    deHeader.classList.toggle("active")
    console.log("hamburger menu");
});

openToegankelijkheid.addEventListener("click", () => {
    body.classList.toggle("openMenu")
    console.log("toegankelijkheid menu");
});

overScrollUitButton.addEventListener("click", () => {
    html.classList.toggle("overScrollUit")
    console.log("overscroll-x uit ");
    overScrollUitButton.classList.toggle("aan")
});

hoogContrastButton.addEventListener("click", () => {
    html.classList.toggle("highcontrast")
    console.log("hoog contrast aan ");
    hoogContrastButton.classList.toggle("aan")
});







