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
