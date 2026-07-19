const el = document.querySelector('.firstMobileC');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      el.classList.add('translate-up');
    }
  });
}, { threshold: 0.5 });

observer.observe(el);