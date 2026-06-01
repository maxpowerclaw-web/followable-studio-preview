const toggle = document.querySelector('[data-nav-toggle]');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
