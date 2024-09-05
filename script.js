const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const amPmElement = document.getElementById('am-pm');

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Convert to 12-hour format
    const amPm = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }

    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    amPmElement.textContent = amPm;
}

setInterval(updateClock, 1000);

