// ===================================================
// PIZZERIA DESIRÉE – Main JavaScript
// ===================================================

// ---- NAVBAR: Scroll Effect ----
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ---- HAMBURGER MENU ----
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu   = document.getElementById('mobile-menu');
if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  // Close mobile menu on link click
  mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ---- MENU PAGE: Sticky Category Nav highlight ----
const catLinks = document.querySelectorAll('.cat-link');
const sections = document.querySelectorAll('.menu-section');
if (catLinks.length > 0 && sections.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        catLinks.forEach(link => {
          link.classList.toggle('active-cat', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-35% 0px -60% 0px' });

  sections.forEach(sec => observer.observe(sec));
}

// ---- SCROLL REVEAL ANIMATION ----
const revealEls = document.querySelectorAll(
  '.highlight-card, .menu-item, .gallery-item, .contact-item, .welcome-text, .welcome-image-stack, .ribbon-item'
);
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.7s ease-out both';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    revealObserver.observe(el);
  });
}

// ---- PHOTO PLACEHOLDER CLICK Hint ----
document.querySelectorAll('.photo-placeholder').forEach(ph => {
  ph.addEventListener('click', () => {
    ph.style.borderColor = 'var(--gold)';
    const small = ph.querySelector('small');
    const original = small ? small.textContent : '';
    if (small) {
      small.textContent = '← Foto hier einfügen (Datei ersetzen)';
      setTimeout(() => { small.textContent = original; ph.style.borderColor = ''; }, 3000);
    }
  });
});
