const formControl = document.querySelectorAll('.form-control');

formControl.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('focus');
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      input.parentElement.classList.remove('focus');
    }
  });
});
