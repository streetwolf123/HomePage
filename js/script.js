console.log("hello World")

let button = document.querySelector(".header__button");
let color = document.querySelector(".header__color");
let web = document.querySelector(".web");


button.addEventListener("click", () => {
    
    web.classList.toggle('web')
    web.classList.toggle('header__buttonOrange')
    color.classList.toggle('header__color');
    color.classList.toggle('header__colorBlue');
})