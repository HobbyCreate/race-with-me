
document.addEventListener("DOMContentLoaded", function () {
    // Check if the <div> element has finished loading
    const loadPage = document.getElementById("loadPage");
    if (loadPage) {
        let car = JSON.parse(localStorage.getItem("selectedCarData"));
        let showCar = document.getElementById("selectedCar");
        let score = JSON.parse(localStorage.getItem("score"));
        let playedScore = document.getElementById('playedScore');
        let playedDate = document.getElementById('playedDate');
        showCar.innerHTML = ''; 
        playedDate.innerHTML = '';
        playedScore.innerHTML = score;

        // CREATE DATE TO GET DATE DATA
        let d = new Date();
        let date = d.getDate();
        let month = d.getMonth();
        let year = d.getFullYear();
        year += 543;

        const monthNames = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
            'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];

        playedDate.innerHTML = `ร่วมแข่งเมื่อ ${date} ${monthNames[month]} ${year}`

        const other = document.createElement('img');
        other.classList.add("relative", "z-30", "-mt-8", "mx-auto", "md:w-4/6", "md:h-full");

        if (car === "Everest") { 
            other.src = "../../assets/images/Model_Everest.png"; 
            // other.src = "{{'assets/images/race-your-ford/Model_Everest.png'|theme}}"; 
        } else if (car === "Ranger") { 
            other.src = "../../assets/images/Model_Ranger.png"; 
            // other.src = "{{'assets/images/race-your-ford/Model_Ranger.png'|theme}}"; 
        } else if (car === "Ranger Raptor") { 
            other.src = "../../assets/images/Model_Ranger-Raptor.png"; 
            // other.src = "{{'assets/images/race-your-ford/Model_Ranger-Raptor.png'|theme}}"; 
        } else {
            other.src = "../../assets/images/Model_mustang.png"; 
            // other.src = "{{'assets/images/race-your-ford/Model_mustang.png'|theme}}"; 
        }

        showCar.appendChild(other);
    }
});



