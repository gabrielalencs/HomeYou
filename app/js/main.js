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
        toggleMenuMobile();
        
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