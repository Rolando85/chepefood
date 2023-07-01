// Carrusel de imágenes
const carouselItems = document.querySelectorAll('.carousel-item');
let currentCarouselItem = 0;

function showCarouselItem(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function nextCarouselItem() {
  currentCarouselItem++;
  if (currentCarouselItem >= carouselItems.length) {
    currentCarouselItem = 0;
  }
  showCarouselItem(currentCarouselItem);
}

setInterval(nextCarouselItem, 5000);
