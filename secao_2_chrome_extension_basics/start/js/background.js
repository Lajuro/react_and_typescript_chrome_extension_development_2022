chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    chrome.storage.local.set({ timer: time + 1 });
    if (time >= 10 && time % 10 === 0) {
      // this.registration.showNotification("Chrome Timer Extension", {
      //   body: `10 seconds have passed`,
      //   icon: "icons/icon.png",
      // });
      chrome.storage.local.set({ timer: 0 });
      chrome.action.setBadgeText({ text: `DONE` });
    } else {
      chrome.action.setBadgeText({ text: `${ time + 1 }` });
    }
  });
});