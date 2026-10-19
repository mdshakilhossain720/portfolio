//=============== footer =================//
const footer = document.querySelector('.site-footer');

if (footer) {
  // current year
  const year = footer.querySelector('#footerYear');
  if (year) year.textContent = new Date().getFullYear();

  // back to top
  const backToTop = footer.querySelector('#footerBackToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // reveal on scroll
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add('is-visible');
          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(footer);
  } else {
    footer.classList.add('is-visible');
  }
}
