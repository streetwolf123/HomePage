
{
    
    const hello = () => {
        console.log("hello World")
    };
    const toggleButton = () => {
        const section = document.querySelector(".header__colorChange").children[0];
        const body = document.documentElement;

        body.classList.toggle("header__buttonOrange");

        section.classList.toggle("header__colorBlue");
        section.classList.toggle("header__color");       
    };

    const changeColorButton = () => {
        const button = document.querySelector(".header__button");
        button.addEventListener("click", toggleButton);
        hello();
    };
 changeColorButton();
}
