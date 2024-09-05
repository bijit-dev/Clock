const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const ampm = document.getElementById('am-pm');

const calendar = document.getElementById('calendar');

function updateClock() {
    const now = new Date();
    // let hours = now.getHours();
    // hours = hours % 12;    
    // hours = hours == 0 ? 12 : hours;
    let hours = (now.getHours() % 12) == 0 ? 12 : now.getHours() % 12;

    hour.innerHTML = hours.toString().padStart(2, '0');
    minute.innerHTML = now.getMinutes().toString().padStart(2, '0');
    second.innerHTML = now.getSeconds().toString().padStart(2, '0');
    ampm.innerHTML = hours < 12 ? 'AM' : 'PM';
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