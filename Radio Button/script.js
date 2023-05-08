const options = document.getElementsByName('option');

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener('click', function() {
    console.log(`Option ${i+1} selected.`);
  });
}
