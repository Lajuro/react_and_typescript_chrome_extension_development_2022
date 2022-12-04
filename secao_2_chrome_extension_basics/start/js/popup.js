const timeElement = document.getElementById('time');
const nameElement = document.getElementById('name');
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The current time is: ${ currentTime }`;

chrome.action.setBadgeText({
  text: 'TIME'
},
  () => {
    console.log('Finished setting badge text');
  });

chrome.storage.sync.get(['name'], ({ name }) => {
  nameElement.textContent = name || '';
});