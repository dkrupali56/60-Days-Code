// Change the background color when the user clicks a button
const button = document.querySelector('#change-color-button');
button.addEventListener('click', function() {
  document.body.style.backgroundColor = '#008080';
});

// Get the form element and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  const nameInput = document.querySelector('#name');
  const name = nameInput.value;
  alert(`Hello, ${name}! Thanks for submitting the form.`);
});
