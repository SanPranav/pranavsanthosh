// particles
const particles = document.getElementById('particles');
if (particles) {
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 15 + 's';
    p.style.animationDuration = Math.random() * 10 + 10 + 's';
    particles.appendChild(p);
  }
}

// navbar scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  
  if (navbar) {
    navbar.classList.toggle('scrolled', scroll > 100);
    navbar.classList.toggle('hide', scroll > lastScroll && scroll > 200);
  }
  
  lastScroll = scroll;
});

// mobile menu
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('active'));
}

// active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

// scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.animationDelay = i * 0.1 + 's';
  observer.observe(el);
});

// skill bars
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target.querySelector('.skill-progress');
      if (bar) bar.style.width = bar.dataset.width;
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-item').forEach(item => {
  const bar = item.querySelector('.skill-progress');
  if (bar) {
    bar.dataset.width = bar.style.width;
    bar.style.width = '0';
    skillObserver.observe(item);
  }
});

// form validation
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const msg = form.querySelector('.form-message');
    const btn = form.querySelector('button[type="submit"]');
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    let valid = true;
    inputs.forEach(input => {
      const empty = !input.value.trim();
      const invalidEmail = input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
      
      input.style.borderColor = (empty || invalidEmail) ? '#ff6b6b' : '';
      if (empty || invalidEmail) valid = false;
    });
    
    if (!valid) {
      if (msg) {
        msg.textContent = 'Please fill in all required fields correctly.';
        msg.className = 'form-message show error';
      }
      return;
    }
    
    // send form
    btn.disabled = true;
    btn.textContent = 'Sending...';
    
    setTimeout(() => {
      if (msg) {
        msg.textContent = "Message sent! I'll get back to you soon.";
        msg.className = 'form-message show success';
      }
      form.reset();
      btn.disabled = false;
      btn.textContent = 'Send Message';
      
      setTimeout(() => msg && (msg.className = 'form-message'), 5000);
    }, 1500);
  });
});

// smooth scroll
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (a) {
    const el = document.querySelector(a.getAttribute('href'));
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
