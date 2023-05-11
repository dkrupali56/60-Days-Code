const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
	if (!isDrawing) return;

	context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	context.beginPath();
	context.moveTo(lastX, lastY);
	context.lineTo(e.offsetX, e.offsetY);
	context.stroke();

	[lastX, lastY] = [e.offsetX, e.offsetY];

	hue++;
	if (hue >= 360) {
		hue = 0;
	}

	if (context.lineWidth >= 50 || context.lineWidth <= 1) {
		direction = !direction;
	}

	if (direction) {
		context.lineWidth++;
	} else {
		context.lineWidth--;
	}
}

canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", () => {
	context.strokeStyle = colorPicker.value;
});

const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
	context.strokeStyle = "white";
});

const brushSize = document.getElementById("brush-size");
brushSize.addEventListener("change", () => {
	context.lineWidth = brushSize.value;
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
	context.clearRect(0, 0, canvas.width, canvas.height);
});
