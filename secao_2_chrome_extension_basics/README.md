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