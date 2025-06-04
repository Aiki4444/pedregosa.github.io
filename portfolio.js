const classes = ['essay1', 'essay2', 'essay3'];

classes.forEach(cls => {
  document.querySelectorAll(`.${cls} a`).forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const container = this.closest(`.${cls}`);
      if (!container) return;

      container.style.opacity = '0';

      setTimeout(() => {
        window.location.href = this.href;
      }, 500);
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(elem => {
    elem.classList.add('visible');
  });
});
