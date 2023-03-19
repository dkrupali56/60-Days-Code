const stars = document.querySelectorAll(".fas");
const rating = document.querySelector(".stars").getAttribute("data-rating");
const ratingText = document.querySelector(".rating-text");

stars.forEach(function(star) {
  star.addEventListener("click", function() {
    const value = this.getAttribute("data-star");

    if (value === rating) {
      this.classList.remove("active");
      document.querySelector(".stars").setAttribute("data-rating", 0);
      ratingText.innerHTML = "0 out of 5 stars";
    } else {
      stars.forEach(function(star) {
        star.classList.remove("active");
      });

      this.classList.add("active");
      document.querySelector(".stars").setAttribute("data-rating", value);
      ratingText.innerHTML = `${value} out of 5 stars`;
    }
  });
});