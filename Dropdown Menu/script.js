// Code not needed for basic dropdown functionality
// This is only an example of how to add additional functionality using JavaScript
// In this case, the selected link is displayed in the console when clicked
document.querySelectorAll('.dropdown-content a').forEach(function (element) {
    element.addEventListener('click', function (event) {
      console.log('Selected link:', event.target.textContent);
    });
  });
  