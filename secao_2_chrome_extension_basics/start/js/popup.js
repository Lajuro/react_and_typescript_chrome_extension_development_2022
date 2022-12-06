const timeElement = document.getElementById('time');
const nameElement = document.getElementById('name');
const timerElement = document.getElementById('timer');

function updateTimeElements() {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    timerElement.textContent = `Timer: ${ time }`;
  });

  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `The current time is: ${ currentTime }`;

}

updateTimeElements();
setInterval(updateTimeElements, 1000);

chrome.storage.sync.get(['name'], ({ name }) => {
  nameElement.textContent = name || '';
});