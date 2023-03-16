const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;
  const category = document.querySelector('#category').value;
  // Send data to backend server using fetch or XMLHttpRequest
});
