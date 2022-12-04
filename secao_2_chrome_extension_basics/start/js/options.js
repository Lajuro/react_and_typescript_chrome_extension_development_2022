let nameInput = document.getElementById('name-input');
let saveButton = document.getElementById('save-btn');

saveButton.addEventListener('click', function () {
  let name = nameInput.value;
  console.log(name);
});