// This code assumes you have included Font Awesome as a dependency

// Initialize Font Awesome
FontAwesomeConfig = { autoReplaceSvg: "nest" };

// Get all icon elements
const icons = document.querySelectorAll(".icon");

// Add click listener to each icon
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const socialMedia = icon.classList[1];
    window.open(`https://${socialMedia}.com`, "_blank");
  });
});
