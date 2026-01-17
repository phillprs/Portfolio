const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

updateCarousel();

// Profile animation with GSAP
window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".profile-pic", { 
    duration: 1, 
    scale: 0, 
    ease: "back.out(1.7)" 
  });
  
  gsap.from("header h1, header h2", {
    duration: 1,
    y: 20,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
  });
});
