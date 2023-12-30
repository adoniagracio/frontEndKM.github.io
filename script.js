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
reviewCarousel.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
});

reviewCarousel.addEventListener('touchmove', (e) => {
  if (!isDragging || e.touches.length !== 1) return;

  const walk = (e.touches[0].clientX - startX) * 2; 
  currentPosition += walk;

  const maxSlide = 0;

  currentPosition = Math.max(-1200, Math.min(maxSlide, currentPosition));

  reviewsContainer.style.transform = `translateX(${currentPosition}px)`;
});

reviewCarousel.addEventListener('touchend', () => {
  isDragging = false;
});

reviewCarousel.addEventListener('touchcancel', () => {
  isDragging = false;
});




const mainMenu = document.querySelector('.nav-menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .nav-menu li a');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menu_items.forEach(item => {
	item.addEventListener('click', function() {
		close();
	})
})

function show() {
	mainMenu.style.display = 'flex';
	mainMenu.style.top = '0';
}

function close() {
	mainMenu.style.top = '-100%';
}