// menu mobile header
const containerMenuMobile = document.querySelector(".header__menu-mobile");
const buttonMenuMobile = document.querySelector(".header__btn-menu");

buttonMenuMobile.addEventListener("click", toggleMenuMobile);

function toggleMenuMobile() {
    containerMenuMobile.classList.toggle("active");
    containerMenuMobile.style.top = containerMenuMobile.classList.contains("active") ? "6.5rem" : "3rem";

    
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 922) {
        containerMenuMobile.classList.remove("active");
        containerMenuMobile.style.top = "3rem";
    }
});