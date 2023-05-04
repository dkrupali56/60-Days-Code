const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});

