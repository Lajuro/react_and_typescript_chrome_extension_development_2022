# **Section 2: Chrome Extension Basics**

## Manifest file

### 📚 Introduction to the manifest file

The manifest file is the most important file in a Chrome extension. It contains all the information about the extension, including the name, version, description, and permissions. The manifest file is a JSON file named `manifest.json` and it must be in the root directory of the extension.

#### 🔹 Creating a manifest file

First, go to the root directory of the extension folder and create a file named `manifest.json`.

In the `manifest.json` file, let's first set the manifest version, the latest version is 3. The manifest version is the version of the manifest file format, not the version of the extension.

```json
{
  "manifest_version": 3
}
```

Next, let's add the name, version, and description of the extension.

```json
{
  "manifest_version": 3,
  "name": "Timer Extension",
  "version": "1.0.0",
  "description": "This is a timer extension"
}
```

> **Note**: The name, version, and description are required fields in the manifest file.
> The version field must be in the format of `major.minor.patch`. For example, `1.0.0` or `1.0.1`.

### ◽ Adding the extension to Chrome

Now that we have created the manifest file, let's add the extension to Chrome.

1. Open Chrome and go to `chrome://extensions`.
2. Turn on the **Developer mode** switch.
3. Click the **Load unpacked** button.
4. Select the root directory of the extension.
5. The extension will be added to Chrome.

### ◽ Adding an icon to the extension

Let's add an icon to the extension. The icon is displayed in the Chrome toolbar and in the Chrome extension list.

1. Create a folder named `icons` in the root directory of the extension.
2. Add an icon named `icon.png` to the `icons` folder.
3. Add the `icons` folder to the `manifest.json` file.

```json
{
  "manifest_version": 3,
  "name": "Timer Extension",
  "version": "1.0.0",
  "description": "This is a timer extension",
  "icons": {
    "16": "icons/icon.png",
    "48": "icons/icon.png",
    "128": "icons/icon.png"
  }
}
```

> **Note**: The `icons` field is an object that contains the icon sizes and paths. The icon sizes are 16, 48, and 128 pixels. The icon path is relative to the root directory of the extension.

#### 🔹 Checking the icon in Chrome

1. Open Chrome and go to `chrome://extensions`.
2. In the extension list, click the **Reload** button next to the extension.
3. The icon will be displayed in the Chrome toolbar and in the Chrome extension list.

### ◽ Setting the extension action

The extension action is the button that is displayed in the Chrome toolbar. When the user clicks the extension action, the extension will be activated.

#### 🔹 Adding to the manifest file

Let's add the extension action to the `manifest.json` file.

```json
{
  // [...] Other fields
  "action": {
    "default_icon": {
      "16": "icons/icon.png",
      "48": "icons/icon.png",
      "128": "icons/icon.png"
    }
  }
}
```

> **Note**: The `action` field is an object that contains the default icon. The default icon is the icon that is displayed in the Chrome toolbar when the extension is not activated. The icon sizes are 16, 48, and 128 pixels. The icon path is relative to the root directory of the extension.

#### 🔹 Adding a default title and popup

Let's add a default title and popup to the `manifest.json` file.

```json
{
  // [...] Other fields
  "action": {
    // [...] Other fields
    "default_title": "Timer Extension",
    "default_popup": "popup.html"
  }
}
```

> **Note**: The `default_title` field is the title that is displayed when the user hovers over the extension action. The `default_popup` field is the path to the popup page that is displayed when the user clicks the extension action. The popup path is relative to the root directory of the extension.

### ◽ Adding a popup page

The popup page is the page that is displayed when the user clicks the extension action. The popup page is a web page that is displayed in a popup window.

#### 🔹 Creating a popup page

Let's create a popup page. The popup page is an HTML file named `popup.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timer Extension</title>
    <link rel="stylesheet" href="css/popup.css">
  </head>
  <body>
    <h1>Timer Extension</h1>
    <h2 id="time"></h2>
    <script src="js/popup.js"></script>
  </body>
</html>
```

##### 🔹 Adding a popup CSS file

Let's add a popup CSS file. The popup CSS file is a CSS file named `popup.css`, you can create it inside the `css` folder.

```css
body {
  width: 400px;
  height: 400px;
  font-family: sans-serif;
}

h1 {
  color: blue;
}
```

##### 🔹 Adding a popup JavaScript file

Let's add a popup JavaScript file. The popup JavaScript file is a JavaScript file named `popup.js`, you can create it inside the `js` folder.

```js
const timeElement = document.getElementById('time');
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The current time is: ${ currentTime }`;
```

##### 🔹 Adding a badge text

In order to add a badge text, you can go to the `js/popup.js` file and add the following code.

```js
// [...] Other code
chrome.action.setBadgeText({
  text: 'TIME'
},
  () => {
    console.log('Finished setting badge text');
  });
```

> **Note**: The `chrome.action.setBadgeText` method is used to set the badge text. The `text` field is the text that is displayed in the badge. The `setBadgeText` method takes a callback function that is called when the badge text is set.

### 📚 Conclusion to the manifest file class

In this class, you learned how to create a Chrome extension. You learned how to create a manifest file, add the extension to Chrome, add an icon to the extension, set the extension action, and add a popup page.

## Options Page

### 📚 Introduction to the options page

In this class, you will learn how to create an options page for a Chrome extension.

### ◽ Adding options page in the manifest file

Let's add the options page to the `manifest.json` file.

```json
{
  // [...] Other fields
  "options_page": "options.html"
}
```

### ◽ Creating an options page

Let's create an options page. The options page is an HTML file named `options.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timer Extension - Options</title>
    <link rel="stylesheet" href="css/options.css">
  </head>
  <body>
    <h1>Timer Extension - Options</h1>
    
    <input type="text" id="name-input" placeholder="Name">
    <button id="save-btn">Save Options</button>

    <script src="js/options.js"></script>
  </body>
</html>
```

### ◽ Adding an options page CSS file

Let's add an options page CSS file. The options page CSS file is a CSS file named `options.css`, you can create it inside the `css` folder.

```css
h1 {
color: green;
}
```

### ◽ Adding an options page JavaScript file

Let's add an options page JavaScript file. The options page JavaScript file is a JavaScript file named `options.js`, you can create it inside the `js` folder.

```js
let nameInput = document.getElementById('name-input');
let saveButton = document.getElementById('save-btn');

saveButton.addEventListener('click', function () {
  let name = nameInput.value;
  console.log(name);
});
```

> **Note**<br>
> This script will log the name that is entered in the input field when the user clicks the save button.

### 📚 Conclusion to the options page class

In this class, you learned how to create an options page for a Chrome extension. You learned how to add the options page to the manifest file, create an options page, and add an options page CSS file and JavaScript file.

## Chrome Storage API

### 📚 Introduction to the Chrome Storage API

In this class, you will learn how to use the Chrome Storage API to store data in the Chrome browser.

### ◽ Adding the storage permission

Let's add the storage permission to the `manifest.json` file.

```json
{
  // [...] Other fields
  "permissions": [
    "storage"
  ]
}
```

### ◽ Adding storage to the options page

Let's add storage to the options page. You can go to the `js/options.js` file and add the following code.

```js
let nameInput = document.getElementById('name-input');
let saveButton = document.getElementById('save-btn');

// Save the name to storage
saveButton.addEventListener('click', function () {
  let name = nameInput.value;
  chrome.storage.sync.set({
    name
  }, () => {
    console.log(`Name set to ${ name }`);
  });
});

// Recover the name from storage and display it in the input field
chrome.storage.sync.get(['name'], ({ name }) => {
  nameInput.value = name || '';
});
```

> **Note**<br>
> In the event listener for the save button, the `chrome.storage.sync.set` method is used to save the name to storage.
> By the end of the script, was added a line of code that recovers the name from storage and displays it in the input field.

### ◽ Adding name heading to the popup html

Let's add a name heading to the popup HTML file. You can go to the `popup.html` file and add the following code.

```html
<!-- Other Elements -->
  <!-- Below this element: <h2 id="time"></h2> -->
  <h2 id="name"></h2>
  <!-- Above this element: <script src="js/popup.js"></script> -->
<!-- Other Elements -->
```

### ◽ Adding name heading to the popup JavaScript file

Let's add a name heading to the popup JavaScript file. You can go to the `js/popup.js` file and add the following code.

```js
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
```

### 📚 Conclusion to the Chrome Storage API class

In this class, you learned how to use the Chrome Storage API to store data in the Chrome browser. You learned how to add the storage permission to the manifest file, add storage to the options page, and add name heading to the popup HTML and JavaScript files.

## Background Script

### 📚 Introduction to the background script

In this class, you will learn how to create a background script for a Chrome extension.

### ◽ Adding background script to the manifest file

Let's add the background script to the `manifest.json` file.

```json
{
  // [...] Other fields
  "background": {
    "service_worker": "js/background.js"
  }
}
```

### ◽ Creating a background script

Let's create a background script. The background script is a JavaScript file named `background.js`, you can create it inside the `js` folder.

```js
let time = 0;

setInterval(() => {
  time += 1;
  console.clear();
  console.log(time);
}, 1000);
```

> **Note**<br>
> The background script only runs while the Chrome browser is open. This script will log the time in seconds that the browser has been open. To see the log you have to go to the `Extensions` page in the Chrome browser and click on `service worker` link.

### 📚 Conclusion to the background script class

In this class, you learned how to create a background script for a Chrome extension. You learned how to add the background script to the manifest file and create a background script.

## Chrome Alarm API

### 📚 Introduction to the Chrome Alarm API

In this class, you will learn how to use the Chrome Alarm API to create an alarm. It's used to schedule a task to be executed at a specific time or periodically.

### ◽ Adding the alarms permission

Let's add the alarms permission to the `manifest.json` file.

```json
{
  // [...] Other fields
  "permissions": [
    // [...] Other permissions
    "alarms"
  ]
}
```

### ◽ Adding alarm to the background script

Let's add alarm to the background script. You can go to the `js/background.js` file, clear the code, and add the following code.

```js
chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    chrome.storage.local.set({ timer: time + 1 });
    chrome.action.setBadgeText({ text: `${ time + 1 }` });
  });
});
```

> **Note**<br>
> You first create an alarm that will be executed every minute. Then you add an event listener to the alarm. When the alarm is executed, the event listener will be called. In the event listener, you get the time from storage, add 1 to it, and save it back to storage. You also set the badge text to the new time.

### ◽ Adding element to the popup HTML file

Let's add an element to the popup HTML file. You can go to the `popup.html` file and add the following code.

```html
<!-- Other Elements -->
  <!-- Below this element: <h2 id="name"></h2> -->
  <h2 id="timer"></h2>
  <!-- Above this element: <script src="js/popup.js"></script> -->
<!-- Other Elements -->
```

### ◽ Adding timer to the popup JavaScript file

Let's add timer to the popup JavaScript file. You can go to the `js/popup.js` file and add the following code.

```js
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
```

> **Note**<br>
> In the `updateTimeElements` function, you get the time from storage and display it in the timer element. You also update the time element every second.

### 📚 Conclusion to the Chrome Alarm API class

In this class, you learned how to use the Chrome Alarm API to create an alarm. You learned how to add the alarms permission, add alarm to the background script, add element to the popup HTML file, and add timer to the popup JavaScript file.

## Chrome Notifications API

### 📚 Introduction to the Chrome Notifications API

In this class, you will learn how to use the Chrome Notifications API to create a notification. It's used to display a notification to the user.

### ◽ Adding the notifications permission

Let's add the notifications permission to the `manifest.json` file.

```json
{
  // [...] Other fields
  "permissions": [
    // [...] Other permissions
    "notifications"
  ]
}
```

### ◽ Adding notification to the background script

Let's add notification to the background script. You can go to the `js/background.js` file, clear the code, and add the following code.

```js
chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    chrome.storage.local.set({ timer: time + 1 });
    chrome.action.setBadgeText({ text: `${ time + 1 }` });
    if (time >= 10 && time % 10 === 0) {
      this.registration.showNotification("Chrome Timer Extension", {
        body: `10 seconds have passed`,
        icon: "icons/icon.png",
      });
    }
  });
});
```

> **Note**<br>
> You first create an alarm that will be executed every minute. Then you add an event listener to the alarm. When the alarm is executed, the event listener will be called. In the event listener, you get the time from storage, add 1 to it, and save it back to storage. You also set the badge text to the new time. If the time is greater than or equal to 10 and the time is divisible by 10, you show a notification that says `10 seconds have passed`.

### 📚 Conclusion to the Chrome Notifications API class

In this class, you learned how to use the Chrome Notifications API to create a notification. You learned how to add the notifications permission and add notification to the background script.
