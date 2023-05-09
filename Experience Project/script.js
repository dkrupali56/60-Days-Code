//Add event listener to nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert(`You clicked on ${link.textContent}`);
  });
});

//Add event listener to footer
const footer = document.querySelector('footer p');

footer.addEventListener('click', () => {
  alert(`You clicked on the footer`);
});
