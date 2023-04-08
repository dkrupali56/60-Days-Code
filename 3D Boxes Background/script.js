svar container = document.querySelector('.container');

for (var i = 1; i <= 4; i++) {
	var box = document.createElement('div');
	box.classList.add('box');
	container.appendChild(box);
}
