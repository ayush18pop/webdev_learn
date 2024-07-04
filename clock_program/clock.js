let clockInterval;

function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  const mins = now.getMinutes().toString().padStart(2, "0");
  const sec = now.getSeconds().toString().padStart(2, "0");
  const meridiem = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || 12;
  document.getElementById(
    "time"
  ).textContent = `${hours}:${mins}:${sec} ${meridiem}`;
}

function updateClock24h() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const mins = now.getMinutes().toString().padStart(2, "0");
  const sec = now.getSeconds().toString().padStart(2, "0");
  document.getElementById("time").textContent = `${hours}:${mins}:${sec}`;
}

function startClock(updateFunction) {
  if (clockInterval) {
    clearInterval(clockInterval);
  }
  updateFunction();
  clockInterval = setInterval(updateFunction, 1000);
}

document
  .getElementById("h12")
  .addEventListener("click", () => startClock(updateClock));
document
  .getElementById("h24")
  .addEventListener("click", () => startClock(updateClock24h));

startClock(updateClock);
