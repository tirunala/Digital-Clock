function updateTime() {
    const now = new Date();
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // Convert 24-hour time to 12-hour time, and handle midnight (0)

    document.getElementById('day').textContent = day;
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('month-year').textContent = `${month} ${year}`;
}

setInterval(updateTime, 1000);
updateTime();
