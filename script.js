/* ═══════════════════════════════════════════════
   ISMAIL RAFAQUAT — PORTFOLIO SCRIPTS
   script.js
═══════════════════════════════════════════════ */

/* ── Mobile nav toggle ─────────────────────── */
const menuIcon = document.getElementById('menu-icon');
const navbar   = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('open');
  menuIcon.classList.toggle('bx-x');
});

// Close menu on link click
document.querySelectorAll('.navbar a').forEach(a => {
  a.addEventListener('click', () => {
    navbar.classList.remove('open');
    menuIcon.classList.remove('bx-x');
  });
});

/* ── Active nav highlight on scroll ─────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) {
      current = s.getAttribute('id');
    }
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
});

/* ── Header shrink on scroll ─────────────────── */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  header.style.padding = window.scrollY > 50 ? '1.2rem 6%' : '1.8rem 6%';
});

/* ── Animate skill bars on scroll ───────────── */
const bars        = document.querySelectorAll('.skill-bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const targetWidth = e.target.dataset.width;
      e.target.style.width = targetWidth;
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

bars.forEach(b => {
  // Store target width, reset to 0 for animation
  b.dataset.width = b.style.width;
  b.style.width   = '0%';
  barObserver.observe(b);
});

/* ── Fade-in cards / items on scroll ────────── */
const fadeEls = document.querySelectorAll(
  '.project-card, .service-card, .skill-category, .timeline-content, .skill-bar-item'
);

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity   = '1';
      e.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(el);
});

/* ── Contact form feedback ───────────────────── */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');

  btn.innerHTML   = '<i class="bx bx-check"></i>Message Sent!';
  btn.style.background  = '#00ffee';
  btn.style.color       = '#080808';
  btn.style.boxShadow   = '0 0 30px rgba(0,255,238,0.4)';

  setTimeout(() => {
    btn.innerHTML         = '<i class="bx bx-send"></i>Send Message';
    btn.style.background  = '';
    btn.style.color       = '';
    btn.style.boxShadow   = '';
    e.target.reset();
  }, 3000);
});