function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAutoSlide();  // reset auto cycle when arrows are clicked
}

// Display the current slide
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Auto cycle function
function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

// Set interval for auto cycling
let autoCycle = setInterval(autoSlide, 3000); // Change slides every 3 seconds

// Reset the auto cycle when navigating manually
function resetAutoSlide() {
  clearInterval(autoCycle);  // Stop the current cycle
  autoCycle = setInterval(autoSlide, 3000); // Restart the auto cycle
}

// Initialize slideshow display
showSlides(slideIndex);
