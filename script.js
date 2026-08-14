// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-reveal for sheets
const sheets = document.querySelectorAll('.sheet');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  sheets.forEach(s => s.classList.add('in-view'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sheets.forEach(s => observer.observe(s));
}
