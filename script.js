// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── NAV SCROLL EFFECT ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 30px rgba(45,106,79,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ── SMOOTH SCROLL NAV ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

// ── TYPING EFFECT ──
const roles = ['AI/ML Enthusiast', 'Python Developer', 'Freelancer', 'Lifelong Learner'];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const roleEl = document.querySelector('.typing-text');

function typeRole() {
  if (!roleEl) return;
  const current = roles[roleIndex];
  if (isDeleting) {
    roleEl.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(typeRole, 400); return; }
  } else {
    roleEl.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) { isDeleting = true; setTimeout(typeRole, 1800); return; }
  }
  setTimeout(typeRole, isDeleting ? 60 : 100);
}
typeRole();

// ── PLATFORM TOOLTIP CLICK (mobile) ──
document.querySelectorAll('.platform-item').forEach(item => {
  item.addEventListener('click', () => {
    const link = item.getAttribute('data-url');
    if (link) window.open(link, '_blank');
  });
});
