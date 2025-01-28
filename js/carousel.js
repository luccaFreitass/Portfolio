let currentIndex = 0;

function updateCarousel() {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
    const items = document.querySelectorAll(".carousel-item");
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
}

function nextSlide() {
    const items = document.querySelectorAll(".carousel-item");
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}
