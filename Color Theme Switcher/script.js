const darkModeBtn = document.getElementById('dark-mode-btn');
const lightModeBtn = document.getElementById('light-mode-btn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
	body.classList.add('dark-mode');
	body.classList.remove('light-mode');
});

lightModeBtn.addEventListener('click', () => {
	body.classList.add('light-mode');
	body.classList.remove('dark-mode');
});
