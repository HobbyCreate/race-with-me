
const showPopupHowToPlay  = () => {
    const popup = document.getElementById("popup-game");
    popup.classList.remove("invisible");
    popup.classList.remove("opacity-0");
    popup.classList.add("opacity-100");
    popup.classList.add("visible");
}

// Function to hide the popup
const hidePopupHowToPlay = () => {
    const popup = document.getElementById("popup-game");
    popup.classList.remove("visible");
    popup.classList.remove("opacity-100");
    popup.classList.add("opacity-0");
    popup.classList.add("invisible");
}

const showHowToPlay = () => {

    showPopupHowToPlay();
}

