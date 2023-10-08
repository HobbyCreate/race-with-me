
const showPopupRule  = () => {
    const popup = document.getElementById("popup-rule");
    const logo = document.getElementById("logo");
    popup.classList.remove("invisible");
    popup.classList.remove("opacity-0");
    popup.classList.add("opacity-100");
    popup.classList.add("visible");
    logo.focus({ preventScroll: false })
}

// Function to hide the popup
const hidePopupRule = () => {
    const popup = document.getElementById("popup-rule");
    popup.classList.remove("visible");
    popup.classList.remove("opacity-100");
    popup.classList.add("opacity-0");
    popup.classList.add("invisible");
}

const showRule = () => {

    showPopupRule();
}

const swiper = new Swiper('.swiper', {
    loop: true,                         //loop
    autoplay: {                         //autoplay
        delay: 2000,
    },
    pagination: {                       //pagination(dots)
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {                       //navigation(arrows)
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})
