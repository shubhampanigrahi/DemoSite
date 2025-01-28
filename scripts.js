// Light/Dark Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Set theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark', savedTheme === 'dark');

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

document.querySelector('.slideshow-container').addEventListener('click', (e) => {
  if (e.target.textContent === '❮') {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  } else if (e.target.textContent === '❯') {
    slideIndex = (slideIndex + 1) % slides.length;
  }
  showSlide(slideIndex);
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
});
