const containerMenuMobile = document.querySelector(".header__menu-mobile");
const buttonMenuMobile = document.querySelector(".header__btn-menu");
const linksMenuMobile = document.querySelectorAll(".header__menu-mobile .header__menu-mobile-link");

buttonMenuMobile.addEventListener("click", toggleMenuMobile);

function toggleMenuMobile() {
    containerMenuMobile.classList.toggle("active");
    updateContainerTopStyle();
    handleClickLink();

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("resize", handleWindowResize);
}

// handles clicks on mobile menu links
function handleClickLink(event) {
    linksMenuMobile.forEach((link) => {
        link.addEventListener("click", toggleMenuMobile);
    });
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
        updateContainerTopStyle();
    }
}

// handle window resizing to close mobile menu
function handleWindowResize() {
    if (window.innerWidth > 922) {
        containerMenuMobile.classList.remove("active");
        updateContainerTopStyle();
    }
}


// Swiper JS

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        50: {
            slidesPerView: 1,
        },
        481: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        668: {
            slidesPerView: 3,
        }
    }
});