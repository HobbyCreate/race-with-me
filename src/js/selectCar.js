const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

if (!localStorage.getItem("selectedCarData") || localStorage.getItem("selectedCarData") !== "Everest") {
    const initialCarData = "Everest"; 
    localStorage.setItem("selectedCarData", JSON.stringify(initialCarData));
}

let previousSlideIndex = 0;
let carName;

swiper.on('slideChange', function () {
    var activeSlideIndex = swiper.realIndex;

    removeActiveClass(previousSlideIndex);

    var activeSlideData = swiper.slides[activeSlideIndex+1].dataset; 

    console.log("Active Slide Index:", activeSlideIndex);
    console.log("Active Slide Data:", activeSlideData);

    activeCard(activeSlideIndex);
    localStorage.setItem("selectedCarData", JSON.stringify(activeSlideData.car));
    previousSlideIndex = activeSlideIndex;
});

const activeCard = (activeSlideIndex) => {
    const carCard = document.getElementsByClassName('car-card');
    carCard[activeSlideIndex].classList.add('active');
}

const removeActiveClass = (slideIndex) => {
    const carCard = document.getElementsByClassName('car-card');
    carCard[slideIndex].classList.remove('active');
}

activeCard(previousSlideIndex);
const carCards = document.getElementsByClassName('car-card');

for (let i = 0; i < carCards.length; i++) {
    carCards[i].addEventListener('click', function () {
        const selectedCar = carCards[i].dataset.car;
        swiper.slideTo(i + 1);
        setStorage(selectedCar);
        // SetDataClick();
    });
}

const setStorage = (data) => {
    carName = data;
}

const SetDataClick = () => {
    localStorage.setItem("selectedCarData", JSON.stringify(carName));
}

