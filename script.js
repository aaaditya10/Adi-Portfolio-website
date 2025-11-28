// Sticky Navbar Background on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 80);
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Active Navbar Link Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.education-card, .experience-card, .skills-card, .project-card');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial trigger

// Show More Projects
const showMoreBtn = document.getElementById('showMoreBtn');
const allProjects = document.querySelectorAll('.project-card');

// Hide extra projects initially (all except first 2)
allProjects.forEach((card, index) => {
  if (index >= 2) card.classList.add('hidden');
});

showMoreBtn.addEventListener('click', () => {
  allProjects.forEach((card, index) => {
    if (index >= 2) card.classList.toggle('hidden');
  });
  showMoreBtn.textContent =
    showMoreBtn.textContent === 'Show More' ? 'Show Less' : 'Show More';
});
