
function updateClock() {
const now = new Date();
const s = now.getSeconds();
const m = now.getMinutes();
const h = now.getHours();

const sDeg = (s / 60) * 360;
const mDeg = (m / 60) * 360 + (s / 60) * 6;
const hDeg = (h % 12 / 12) * 360 + (m / 60) * 30;

document.getElementById('sec').style.transform = `translateX(-50%) rotate(${sDeg}deg)`;
document.getElementById('min').style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
