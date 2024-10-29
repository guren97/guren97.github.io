function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeString = now.toLocaleTimeString([], options);
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately
 