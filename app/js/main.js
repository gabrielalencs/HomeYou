const containerMenuMobile = document.querySelector(".header__menu-mobile");
const buttonMenuMobile = document.querySelector(".header__btn-menu");

buttonMenuMobile.addEventListener("click", toggleMenuMobile);

function toggleMenuMobile() {
    containerMenuMobile.classList.toggle("active");
    updateContainerTopStyle();

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("resize", handleWindowResize);
}

function updateContainerTopStyle() {
    const topStyle = containerMenuMobile.classList.contains("active") ? "6.5rem" : "3rem";
    containerMenuMobile.style.top = topStyle;
}

// handle clicks outside the menu to close the menu
function handleDocumentClick(event) {
    const isClickInsideMenu = containerMenuMobile.contains(event.target);
    const isClickOnMenuButton = buttonMenuMobile.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuButton) {
        containerMenuMobile.classList.remove("active");
        containerMenuMobile.style.top = "3rem";

        document.removeEventListener("click", handleDocumentClick);
    }
}

// handle window resizing to close mobile menu
function handleWindowResize() {
    if (window.innerWidth > 922) {
        toggleMenuMobile();

        window.removeEventListener("resize", handleWindowResize);
    } else {
        updateContainerTopStyle();
    }
}


// Swiper JS

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 3,
        }
    }
});