const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const amPmElement = document.getElementById('am-pm');

const calendar = document.getElementById('calendar');

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

    hoursElement.innerHTML = hours.toString().padStart(2, '0');
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
    amPmElement.innerHTML = amPm;
}

function formatDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function updateCalendar() {
    const currentDate = new Date();
    calendar.innerHTML = formatDate(currentDate);
}


setInterval(updateClock, 1000);

setInterval(updateCalendar, 3600000);

updateCalendar();