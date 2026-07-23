// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Intersection Observer: fade-up reveal =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});

// ===== Stagger hero elements on load =====
window.addEventListener('DOMContentLoaded', () => {
  const heroPhoto = document.querySelector('.hero-photo-wrap');
  const heroText  = document.querySelector('.hero-text');

  if (heroPhoto) {
    setTimeout(() => heroPhoto.classList.add('show'), 100);
  }
  if (heroText) {
    setTimeout(() => heroText.classList.add('show'), 300);
  }
});

// ===== Fill selected package into the service request modal =====
const serviceModal = document.getElementById('serviceModal');
if (serviceModal) {
  serviceModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;
    const packageName = button.getAttribute('data-package');
    const input = serviceModal.querySelector('#selectedPackage');
    if (input) input.value = packageName;
  });
}
