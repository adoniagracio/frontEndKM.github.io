let currentIndex = 0;
const reviewsContainer = document.getElementById('reviews-container');
const totalReviews = document.querySelectorAll('.review-card').length;
const maxIndex = totalReviews+4; 
const reviewCarousel = document.getElementById('reviewCarousel');

let isDragging = false;
let startX;
let currentPosition = 0;


function slideReviews(direction) {
  currentIndex += direction;

  currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

  const translateValue = -currentIndex * 8 + '%';
  reviewsContainer.style.transform = 'translateX(' + translateValue + ')';
}

reviewCarousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

reviewCarousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const walk = (e.clientX - startX) * 2; 
  
  currentPosition += walk;

  const maxSlide = 0;

  currentPosition = Math.max(-800, Math.min(maxSlide, currentPosition));

  reviewsContainer.style.transform = `translateX(${currentPosition}px)`;
});

reviewCarousel.addEventListener('mouseup', () => {
  isDragging = false;
});

reviewCarousel.addEventListener('mouseleave', () => {
  isDragging = false;
});