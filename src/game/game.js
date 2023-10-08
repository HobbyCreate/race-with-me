// define variable
let clicks = 0;
let startTime = 0;
let intervalId;
let timeLeft = 30;
let Currspeed = 0;
// let startSpeed = 0;
let readyTime = 3;
let deg = -133;
let scale = 1;
const currentTime = Date.now();
const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds
const clickSpeed = clicks / elapsedTime;

// define variable from html id
const speedBtn = document.getElementById('spd-btn');
const score = document.getElementById('score');
const speedy = document.getElementById('speed');
const gear = document.getElementById('gear-controll');
const consoleCar = document.getElementById('console');
const roadSign = document.getElementById('roadSign');
const mountain = document.getElementById('mountain');
const roadStrip = document.getElementById('road-strip')
const time = document.getElementById('time');
const readyTimeShow = document.getElementById('readyTime');
const readyGame = document.getElementById('ready-game');
const rotateElement = document.getElementById('mile-rotate');
const end = document.getElementById('end-game');
const road = document.getElementById('road-spin');
const leftRoad = document.getElementById('left-road')
const leftRoad1 = document.getElementById('left-road-1')

consoleCar.classList.add('start');

const interval = setInterval(updateCountdown, 1000);
const speed = setInterval(updateSpeed, 500);

gear.innerHTML = 'P';



// TIME COUNTDOWN
function updateCountdown() {
    if (readyTime >= 0) {
        readyTimeShow.classList.remove('play');
        readyTimeShow.textContent = `${readyTime}`;
        readyTime--;
        readyTimeShow.classList.add('play');

        if (readyTime < 0) {
            readyTimeShow.textContent = `Go !!`;
            setTimeout(() => {
                readyTimeShow.style.display = 'none';
                readyGame.style.display = 'none';
            }, 950)
        }
    } else {
        if (timeLeft >= 0) {
            const formattedTime = timeLeft >= 10 ? `00:${timeLeft}` : `00:0${timeLeft}`;
            time.textContent = formattedTime;
            timeLeft--;

            if (timeLeft < 5) {
                time.style.color = 'red';
                time.classList.add('play');
            }
        }

        if (timeLeft < 0) {
            end.classList.remove('invisible');
            end.classList.add('visible');
            let d = new Date();
            let u = JSON.parse(localStorage.getItem("LIFF_STORE:1657401064-qwoNORxB:accessToken"));
            let i = JSON.parse(localStorage.getItem("LIFF_STORE:1657401064-qwoNORxB:clientId"));
            let e = JSON.parse(localStorage.getItem("startTime"));
            let car = JSON.parse(localStorage.getItem("selectedCarData"));
            localStorage.setItem("endTime", JSON.stringify(d));
            setTimeout(() => {
                setScore();
                // window.location.replace("../resultPage.html");
            }, 2000);
            clearInterval(interval);
        }
    }
}

// SCALE UP MOUNTAIN WHEN CLICK
let bottom = 0;
function scaleMountain() {
    scale += 0.001;

    if (clicks > 30) {
        bottom += 0.03; // Increase bottom position more quickly if clicks > 30
    } else {
        bottom += 0.015; // Increase bottom position if clicks <= 30
    }

    // Update the scale
    mountain.style.transform = `scale(${scale})`;

    // Update the bottom position
    mountain.style.bottom = `${bottom}%`;

    // Apply transitions for smooth animation
    mountain.style.transition = 'transform 0.3s ease, bottom 0.3s ease';
}

//  UPDATE SPEED
function updateSpeed() {
    if (clickSpeed > 2) {
        Currspeed = Currspeed;
    } else {
        if (Currspeed > 120) {
            Currspeed -= 15;
        } else if (Currspeed > 65) {
            Currspeed -= 10;
        } else if (Currspeed > 35) {
            Currspeed -= 5;
        } else {
            Currspeed -= 2;
        }
    }

    if (Currspeed < 0) {
        Currspeed = 0;
    }

    let animationDuration;
    if (Currspeed <= 3) {
        animationDuration = '60000ms';
    } else if (Currspeed <= 6) {
        animationDuration = '30000ms';
    } else if (Currspeed <= 10) {
        animationDuration = '20000ms';
    } else if (Currspeed <= 20) {
        animationDuration = '10000ms';
    } else if (Currspeed <= 40) {
        animationDuration = '5000ms';
    } else if (Currspeed <= 60) {
        animationDuration = '4000ms';
    } else if (Currspeed <= 80) {
        animationDuration = '2000ms';
    } else {
        animationDuration = '1000ms';
    }

    if (Currspeed === 0) {
        road.style.animation = 'none';
    } else {
        road.style.animation = `rotateRoad ${animationDuration} linear infinite`;
    }

    const animationDurationTransition = 'animation-duration 1s linear';

    if (Currspeed === 0) {
        leftRoad.style.transition = animationDurationTransition;
        leftRoad.style.animationDuration = '0ms';
        setTimeout(() => {
            leftRoad.style.transition = '';
            leftRoad.style.animation = 'none';
        }, 500);
    } else {
        let leftRoadAnimationDuration;
        if (Currspeed <= 3) {
            leftRoadAnimationDuration = '4000ms';
        } else if (Currspeed <= 6) {
            leftRoadAnimationDuration = '2500ms';
        } else if (Currspeed <= 10) {
            leftRoadAnimationDuration = '2000ms';
        } else if (Currspeed <= 20) {
            leftRoadAnimationDuration = '1500ms';
        } else if (Currspeed <= 40) {
            leftRoadAnimationDuration = '1000ms';
        } else {
            leftRoadAnimationDuration = '500ms';
        }

        leftRoad.style.transition = animationDurationTransition;
        leftRoad.style.animationDuration = leftRoadAnimationDuration;
        leftRoad.style.animation = `leftRoadSlide ${leftRoadAnimationDuration} infinite linear`;
    }

    if (Currspeed === 0) {
        leftRoad1.style.transition = animationDurationTransition;
        leftRoad1.style.animationDuration = '0ms';
        setTimeout(() => {
            leftRoad1.style.transition = '';
            leftRoad1.style.animation = 'none';
        }, 500);
    } else {
        let leftRoad1AnimationDuration;
        if (Currspeed <= 3) {
            leftRoad1AnimationDuration = '4000ms';
        } else if (Currspeed <= 6) {
            leftRoad1AnimationDuration = '2500ms';
        } else if (Currspeed <= 10) {
            leftRoad1AnimationDuration = '2000ms';
        } else if (Currspeed <= 20) {
            leftRoad1AnimationDuration = '1500ms';
        } else if (Currspeed <= 40) {
            leftRoad1AnimationDuration = '1000ms';
        } else {
            leftRoad1AnimationDuration = '500ms';
        }

        leftRoad1.style.transition = animationDurationTransition;
        leftRoad1.style.animationDuration = leftRoad1AnimationDuration;
        leftRoad1.style.animation = `leftRoadSlide1 ${leftRoad1AnimationDuration} infinite linear`;
    }

    // ROTATE THE CONSOLE MILE
    deg = Math.floor(Currspeed - 133);
    deg += 3;
    rotateElement.style.transform = `rotate(${deg}deg)`;
    rotateElement.classList.add('rotate-transition');

    speedy.textContent = Math.floor(Currspeed);
}


speedBtn.addEventListener('mousedown', () => {
    if (clicks === 0) {
        startTime = Date.now();
        intervalId = setInterval(updateClickSpeed, 50);
        // Start the "ready" countdown
        const readyCountdown = setInterval(() => {
            if (readyTime <= 0) {
                clearInterval(readyCountdown);
                return;
            }
            updateCountdown();
        }, 1000);
    }
    consoleCar.classList.remove('start');
    consoleCar.classList.add('run');
    clicks++;
    scaleMountain();
    gear.innerHTML = 'D';


    if (clicks < 15) {
        Currspeed += 2;
    } else if (clicks < 25) {
        Currspeed += 2.5;
    } else if (clicks < 35) {
        Currspeed += 2.75;
    } else if (clicks < 45) {
        Currspeed += 3;
    } else {
        Currspeed += 4;
    }

});

// CLICK SPEED CALCULATE HERE
function updateClickSpeed() {
    score.textContent = clicks;
    let signAnimationRunning = false;
    let StripAnimationRunning = false;

    if (Currspeed < 1) {
        Currspeed = 0;
        roadSign.style.animationPlayState = 'pause';
        consoleCar.classList.remove('run');
        consoleCar.classList.add('start');
    }

    if (clicks % 20 === 0 && !signAnimationRunning) {
        if (Currspeed <= 20) {
            roadSign.style.animationDuration = '3000ms';
            signAnimationDuration = parseFloat(roadSign.style.animationDuration);
        } else if (Currspeed <= 40) {
            roadSign.style.animationDuration = '2500ms';
            signAnimationDuration = parseFloat(roadSign.style.animationDuration);
        } else if (Currspeed <= 60) {
            roadSign.style.animationDuration = '2000ms';
            signAnimationDuration = parseFloat(roadSign.style.animationDuration);
        } else if (Currspeed <= 80) {
            roadSign.style.animationDuration = '1500ms';
            signAnimationDuration = parseFloat(roadSign.style.animationDuration);
        } else {
            roadSign.style.animationDuration = '1000ms';
            signAnimationDuration = parseFloat(roadSign.style.animationDuration);
        }

        signAnimationRunning = true;
        roadSign.classList.add('play');
        setTimeout(() => {
            roadSign.classList.remove('play');
            signAnimationRunning = false;
        }, signAnimationDuration);
    }

    if (clicks % 10 === 0 && !StripAnimationRunning) {
        if (Currspeed <= 20) {
            roadStrip.style.animationDuration = '2500ms';
            stripAnimationDuration = parseFloat(roadStrip.style.animationDuration);
        } else if (Currspeed <= 40) {
            roadStrip.style.animationDuration = '2000ms';
            stripAnimationDuration = parseFloat(roadStrip.style.animationDuration);
        } else if (Currspeed <= 60) {
            roadStrip.style.animationDuration = '1500ms';
            stripAnimationDuration = parseFloat(roadStrip.style.animationDuration);
        } else {
            roadStrip.style.animationDuration = '1000ms';
            stripAnimationDuration = parseFloat(roadStrip.style.animationDuration);
        }

        leftRoadAnimationRunning = true;
        roadStrip.classList.add('play');
        setTimeout(() => {
            roadStrip.classList.remove('play');
            StripAnimationRunning = false;
        }, stripAnimationDuration);


    }
}
function setScore() {
    localStorage.setItem('score', clicks);
}

