const carousel = document.querySelector(".carousel")
const indexLabel = document.querySelector(".carousel-index")
const leftArrow = document.querySelector(".arrow.left")
const rightArrow = document.querySelector(".arrow.right")

const totalBuilds = 14
let currentIndex = 0
let startX = 0

for (let i = 1; i <= totalBuilds; i++) {
  const img = document.createElement("img")
  img.src = `assets/build${i}.png`
  img.alt = `Build ${i}`
  if (i === 1) img.classList.add("active")
  carousel.appendChild(img)
}

const images = carousel.querySelectorAll("img")

function updateCarousel() {
  images.forEach((img, i) => img.classList.toggle("active", i === currentIndex))
  indexLabel.textContent = `${currentIndex + 1} / ${images.length}`
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length
  updateCarousel()
})

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length
  updateCarousel()
})

carousel.addEventListener("touchstart", e => startX = e.touches[0].clientX)
carousel.addEventListener("touchend", e => {
  const diff = startX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 50) {
    currentIndex = diff > 0
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length
    updateCarousel()
  }
})

updateCarousel()

window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".profile-pic", { duration: 1, scale: 0, ease: "back.out(1.7)" })
  gsap.from("header h1, header h2", {
    duration: 1,
    y: 20,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
  })
})
