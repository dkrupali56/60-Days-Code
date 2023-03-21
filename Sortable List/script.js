const sortable = document.getElementById('sortable');
let dragging = null;

sortable.addEventListener('dragstart', function(event) {
	dragging = event.target.closest('li');
	event.dataTransfer.setData('text/html', dragging.innerHTML);
});

sortable.addEventListener('dragover', function(event) {
	event.preventDefault();
});

sortable.addEventListener('drop', function(event) {
	const target = event.target.closest('li');
	if (dragging && target) {
		event.preventDefault();
		if (dragging !== target) {
			target.parentNode.insertBefore(dragging, target.nextSibling || target);
		}
	}
});

sortable.addEventListener('dragend', function(event) {
	dragging = null;
});
s