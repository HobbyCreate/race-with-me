const setStorageTimeStart = () => {
    let d = new Date();
    localStorage.setItem("startTime", JSON.stringify(d));
    setTimeout(()=>{
        window.location.replace('../select-car.html');
        // window.location.replace('../select-car.html');
    }, 500);
}

const setStorageRegister = () => {
    localStorage.setItem("register", 1);
    setTimeout(()=>{
        window.location.replace('../landingPage.html');
    }, 500);
}