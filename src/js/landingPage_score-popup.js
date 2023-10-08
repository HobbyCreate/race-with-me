// dataA = [
//     {
//         "name": "bas",
//         "score": 790,
//         "date": "2023-10-06"
//     },
//     {
//         "name": "1051",
//         "score": 210,
//         "date": "2023-10-05"
//     },
//     {
//         "name": "1052",
//         "score": 200,
//         "date": "2023-10-05"
//     },
//     {
//         "name": "1037",
//         "score": 108,
//         "date": "2023-10-03"
//     },
//     {
//         "name": "1036",
//         "score": 107,
//         "date": "2023-10-03"
//     },
//     {
//         "name": "1035",
//         "score": 106,
//         "date": "2023-10-03"
//     },
//     {
//         "name": "1034",
//         "score": 105,
//         "date": "2023-10-03"
//     },
//     {
//         "name": "1033",
//         "score": 104,
//         "date": "2023-10-03"
//     },
//     {
//         "name": "1038",
//         "score": 104,
//         "date": "2023-10-03"
//     },
//     {
//         "name": "1032",
//         "score": 103,
//         "date": "2023-10-03"
//     },
//     {
//         "name": "1031",
//         "score": 101,
//         "date": "2023-10-03"
//     },
//     {
//         "name": "1041",
//         "score": 190,
//         "date": "2023-10-03"
//     },
//     {
//         "name": "1028",
//         "score": 108,
//         "date": "2023-10-02"
//     },
//     {
//         "name": "1027",
//         "score": 107,
//         "date": "2023-10-02"
//     },
//     {
//         "name": "1026",
//         "score": 106,
//         "date": "2023-10-02"
//     },
//     {
//         "name": "1025",
//         "score": 105,
//         "date": "2023-10-02"
//     },
//     {
//         "name": "1024",
//         "score": 104,
//         "date": "2023-10-02"
//     },
//     {
//         "name": "1023",
//         "score": 103,
//         "date": "2023-10-02"
//     },
//     {
//         "name": "1022",
//         "score": 102,
//         "date": "2023-10-02"
//     },
//     {
//         "name": "1021",
//         "score": 101,
//         "date": "2023-10-02"
//     },
//     {
//         "name": "1018",
//         "score": 108,
//         "date": "2023-10-01"
//     },
//     {
//         "name": "1017",
//         "score": 107,
//         "date": "2023-10-01"
//     },
//     {
//         "name": "1016",
//         "score": 106,
//         "date": "2023-10-01"
//     },
//     {
//         "name": "1015",
//         "score": 105,
//         "date": "2023-10-01"
//     },
//     {
//         "name": "1014",
//         "score": 104,
//         "date": "2023-10-01"
//     },
//     {
//         "name": "1013",
//         "score": 103,
//         "date": "2023-10-01"
//     },
//     {
//         "name": "1012",
//         "score": 102,
//         "date": "2023-10-01"
//     },
//     {
//         "name": "1011",
//         "score": 101,
//         "date": "2023-10-01"
//     }
// ]
// let coundown = 0;

// const showPopup = () => {
//     const popup = document.getElementById("popup");
//     popup.classList.remove("invisible");
//     popup.classList.remove("opacity-0");
//     popup.classList.add("opacity-100");
//     popup.classList.add("visible");
// }

// // Function to hide the popup
// const hidePopup = () => {
//     const popup = document.getElementById("popup");
//     popup.classList.remove("visible");
//     popup.classList.remove("opacity-100");
//     popup.classList.add("opacity-0");
//     popup.classList.add("invisible");
// }


// const fetchData = (url) => {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .catch(error => {
//             console.error("Fetch error:", error);
//             throw error;
//         });
// }

// const setData = () => {
//     // 
//     let url = `https://api2dev.fordprospect.com/api/campaign-race-scoreboard/`;
//     fetchData(url)
//         .then(data => {
//             console.log(data);
//             processData(data);
//         })
//         .catch(error => {

//             console.error(error);
//         });

// }

// let counter = 0;

// // const processData = (data) => {
// //     showPopup();

// //     const thaiDate = document.getElementById('score-date');

// //     const monthNames = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
// //         'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];


// // let currentDate = new Date(data.date);
// // let nextDate = new Date(data.next_day);
// // let lastDate = new Date(data.yesterday);

// // let lastDateButton = document.getElementById('date-back');
// // let nextDateButton = document.getElementById('date-go');

// // lastDateButton.addEventListener('click', () => {
// //     console.log('back clicked');
// //     if (currentDate.getDate() === nextDate.getDate() &&
// //         currentDate.getMonth() === nextDate.getMonth() &&
// //         currentDate.getFullYear() === nextDate.getFullYear()) {
// //         nextDateButton.disabled = true;
// //     } else {
// //         fetchData(lastDateUrl)
// //             .then(dataLast => {
// //                 console.log(dataLast);
// //                 data = dataLast;
// //             })
// //             .catch(error => {
// //                 console.error(error);
// //             });
// //     }

// // });

// // nextDateButton.addEventListener('click', () => {
// //     console.log('next clicked');
// //     if (currentDate.getDate() === lastDate.getDate() &&
// //         currentDate.getMonth() === lastDate.getMonth() &&
// //         currentDate.getFullYear() === lastDate.getFullYear()) {
// //         lastDateButton.disabled = true;
// //     } else {
// //         fetchData(nextDateUrl)
// //             .then(dataNext => {
// //                 console.log(dataNext);
// //                 data = dataNext;
// //             })
// //             .catch(error => {
// //                 console.error(error);
// //             });
// //     }
// // });

// // Create an object to store classified data
// const processData = (data) => {
//     showPopup();
//     const monthNames = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
//         'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];

//     let curD = new Date();
//     let currentDate = formatDate(curD);

//     console.log(currentDate)

//     const classifiedData = {};
//     for (let i = 0; i < data.length; i++) {
//         const entry = data[i];
//         const date = entry.date;

//         if (classifiedData[date]) {
//             classifiedData[date].push(entry);
//         } else {
//             classifiedData[date] = [entry];
//         }
//     }
//     // classifiedData  ---> object[]

//     const currentData = classifiedData[currentDate]
//     console.log()
//     let dateBuffer = currentDate.split("-");
//     let showDay = dateBuffer[2];
//     let showMonth = dateBuffer[1];
//     let showYear = dateBuffer[0];
//     const thaiDate = document.getElementById('score-date');
//     thaiDate.innerHTML = `${showDay} ${monthNames[showMonth]} ${showYear}`;

//     // Show 1st - 3rd rewards Section

//     let firstName = document.getElementById('first-name');
//     let firstScore = document.getElementById('first-score');
//     let secondName = document.getElementById('second-name');
//     let secondScore = document.getElementById('second-score');
//     let thirdName = document.getElementById('third-name');
//     let thirdScore = document.getElementById('third-score');

//     firstName.textContent = currentData[0]?.name; 
//     // currentData[0].name;
//     firstScore.textContent = currentData[0]?.score; 
//     // currentData[0].score;
//     secondName.textContent = currentData[1]?.name;
//     secondScore.textContent = currentData[1]?.score;
//     thirdName.textContent = currentData[2]?.name;
//     thirdScore.textContent = currentData[2]?.score;


//     // Show 4th - last order rewards Section

//     const otherReward = document.getElementById('other-reward-list');
//     otherReward.innerHTML = '';

//     if (currentData.length > 3) {
//         for (let i = 3; i < currentData.length; i++) {
//             const entry = currentData[i];
//             const other = document.createElement('div');

//             if (i < (currentData.length - 1)) {
//                 other.classList.add('w-full', 'py-2', 'h-auto', 'flex', 'justify-between', 'border-b-[1px]', 'border-[#989CB3]');
//             } else {
//                 other.classList.add('w-full', 'py-2', 'h-auto', 'flex', 'justify-between');
//             }
//             other.innerHTML =
//                 `
//                     <div class="other-reward w-2/3">
//                         <span class="order text-[#68D9FD] text-2xl mr-2">${i + 1}</span>
//                         <span class="text-white text-2xl">${entry.name}</span>
//                     </div>
//                     <div class="1/3">
//                         <span class="text-white text-2xl font-bold eng-font">${entry.score}</span>
//                     </div>
//                 `;

//             otherReward.appendChild(other);
//         }
//     }
// }


// const formatDate = (date) => {
//     let day = date.getDate();
//     let month = date.getMonth();
//     month += 1;
//     let year = date.getFullYear();
//     if (day < 10) {
//         day = `0${day}`;
//     }
//     if (month < 10){
//         month = `0${month}`
//     }
//     return `${year}-${month}-${day}`;
// }

// const lastDay = (date) => {
//     let yesterday = date.setDate(date.getDate() - 1);
//     let lastDate = formatDate(yesterday);
//     return lastDate;
// }

// const NextDay = (date) => {
//     let tomorrow = date.setDate(date.getDate() + 1)
//     let nextDate = formatDate(tomorrow);
//     return nextDate;
// }

let coundown = 0;

const showPopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.remove("invisible");
    popup.classList.remove("opacity-0");
    popup.classList.add("opacity-100");
    popup.classList.add("visible");
}

// Function to hide the popup
const hidePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.remove("visible");
    popup.classList.remove("opacity-100");
    popup.classList.add("opacity-0");
    popup.classList.add("invisible");
}


// const fetchData = (url) => {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .catch(error => {
//             console.error("Fetch error:", error);
//             throw error;
//         });
// }

// const setData = () => {
//     // 
//     let url = `https://api2dev.fordprospect.com/api/campaign-race-scoreboard/`;
//     fetchData(url)
//         .then(data => {
//             console.log(data);
//             processData(data);
//         })
//         .catch(error => {

//             console.error(error);
//         });

// }

let counter = 0;

const processData = () => {
    dataA = [
        {
            "name": "bas",
            "score": 790,
            "date": "2023-10-06"
        },
        {
            "name": "1051",
            "score": 210,
            "date": "2023-10-05"
        },
        {
            "name": "1052",
            "score": 200,
            "date": "2023-10-05"
        },
        {
            "name": "1037",
            "score": 108,
            "date": "2023-10-03"
        },
        {
            "name": "1036",
            "score": 107,
            "date": "2023-10-03"
        },
        {
            "name": "1035",
            "score": 106,
            "date": "2023-10-03"
        },
        {
            "name": "1034",
            "score": 105,
            "date": "2023-10-03"
        },
        {
            "name": "1033",
            "score": 104,
            "date": "2023-10-03"
        },
        {
            "name": "1038",
            "score": 104,
            "date": "2023-10-03"
        },
        {
            "name": "1032",
            "score": 103,
            "date": "2023-10-03"
        },
        {
            "name": "1031",
            "score": 101,
            "date": "2023-10-03"
        },
        {
            "name": "1041",
            "score": 190,
            "date": "2023-10-03"
        },
        {
            "name": "1028",
            "score": 108,
            "date": "2023-10-02"
        },
        {
            "name": "1027",
            "score": 107,
            "date": "2023-10-02"
        },
        {
            "name": "1026",
            "score": 106,
            "date": "2023-10-02"
        },
        {
            "name": "1025",
            "score": 105,
            "date": "2023-10-02"
        },
        {
            "name": "1024",
            "score": 104,
            "date": "2023-10-02"
        },
        {
            "name": "1023",
            "score": 103,
            "date": "2023-10-02"
        },
        {
            "name": "1022",
            "score": 102,
            "date": "2023-10-02"
        },
        {
            "name": "1021",
            "score": 101,
            "date": "2023-10-02"
        },
        {
            "name": "1018",
            "score": 108,
            "date": "2023-10-01"
        },
        {
            "name": "1017",
            "score": 107,
            "date": "2023-10-01"
        },
        {
            "name": "1016",
            "score": 106,
            "date": "2023-10-01"
        },
        {
            "name": "1015",
            "score": 105,
            "date": "2023-10-01"
        },
        {
            "name": "1014",
            "score": 104,
            "date": "2023-10-01"
        },
        {
            "name": "1013",
            "score": 103,
            "date": "2023-10-01"
        },
        {
            "name": "1012",
            "score": 102,
            "date": "2023-10-01"
        },
        {
            "name": "1011",
            "score": 101,
            "date": "2023-10-01"
        }
    ]
    let data = dataA;
    showPopup();
    const monthNames = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];

    let curD = new Date();
    let currentDate = formatDate(curD);

    console.log(currentDate)

    let firnat = formatDate('2023-10-05T15:15:47.650Z')
    console.log(firnat)

    const classifiedData = {};
    for (let i = 0; i < data.length; i++) {
        const entry = data[i];
        const date = entry.date;

        if (classifiedData[date]) {
            classifiedData[date].push(entry);
        } else {
            classifiedData[date] = [entry];
        }
    }
    // classifiedData  ---> object[]
    updateDOM()

    let lastDateButton = document.getElementById('date-back');
    let nextDateButton = document.getElementById('date-go');


    lastDateButton.addEventListener('click', () => {
        console.log('back clicked');
        const previousDate = lastDay(currentDate);
        if (previousDate && classifiedData[previousDate]) {
            currentDate = previousDate;
            currentData = classifiedData[currentDate]
            updateDOM();
            counter++;
        } else {
            console.log("something wrong!!");
        }
    });

    nextDateButton.addEventListener('click', () => {
        console.log('next clicked');
        const nextDateValue = nextDay(currentDate);
        if (nextDateValue && counter > 0 && classifiedData[nextDay(currentDate)]) {
            currentDate = nextDateValue;
            currentData = classifiedData[currentDate]
            updateDOM(currentData);
            updateDOM()
            counter--;
        } else {
            console.log("something wrong!!");

        }
    });

    function updateDOM() {
        let currentData = classifiedData[currentDate]


        console.log(currentData)
        let dateBuffer = currentDate.split("-");
        let showDay = dateBuffer[2];
        let showMonth = dateBuffer[1];
        let showYear = dateBuffer[0];
        const thaiDate = document.getElementById('score-date');
        thaiDate.innerHTML = `${showDay} ${monthNames[showMonth - 1]} ${showYear}`;

        // Show 1st - 3rd rewards Section

        let firstName = document.getElementById('first-name');
        let firstScore = document.getElementById('first-score');
        let secondName = document.getElementById('second-name');
        let secondScore = document.getElementById('second-score');
        let thirdName = document.getElementById('third-name');
        let thirdScore = document.getElementById('third-score');

        firstName.textContent = currentData[0]?.name;
        // currentData[0].name;
        firstScore.textContent = currentData[0]?.score;
        // currentData[0].score;
        secondName.textContent = currentData[1]?.name;
        secondScore.textContent = currentData[1]?.score;
        thirdName.textContent = currentData[2]?.name;
        thirdScore.textContent = currentData[2]?.score;


        // Show 4th - last order rewards Section

        const otherReward = document.getElementById('other-reward-list');
        otherReward.innerHTML = '';

        if (currentData.length > 3) {
            for (let i = 3; i < currentData.length; i++) {
                const entry = currentData[i];
                const other = document.createElement('div');

                if (i < (currentData.length - 1)) {
                    other.classList.add('w-full', 'py-2', 'h-auto', 'flex', 'justify-between', 'border-b-[1px]', 'border-[#989CB3]');
                } else {
                    other.classList.add('w-full', 'py-2', 'h-auto', 'flex', 'justify-between');
                }
                other.innerHTML =
                    `
                        <div class="other-reward w-2/3">
                            <span class="order text-[#68D9FD] text-2xl mr-2">${i + 1}</span>
                            <span class="text-white text-2xl">${entry.name}</span>
                        </div>
                        <div class="1/3">
                            <span class="text-white text-2xl font-bold eng-font">${entry.score}</span>
                        </div>
                    `;

                otherReward.appendChild(other);
            }
        }
    }
}

const formatDate = (date) => {
    console.log(date)
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) {
        day = `0${day}`;
    }
    if (month < 10) {
        month = `0${month}`
    }
    return `${year}-${month}-${day}`;
}

const lastDay = (date) => {
    let yesterday = new Date(date);
    yesterday.setDate(yesterday.getDate() - 1);
    let lastDate = formatDate(yesterday);
    return lastDate;
}

const nextDay = (date) => {
    let tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1)
    let nextDate = formatDate(tomorrow);
    return nextDate;
}

function formatDateTime(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}