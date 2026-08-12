document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const links = document.querySelectorAll('[data-nav-link]');
  const sections = Array.from(links)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  const setActive = () => {
    const scrollPos = window.scrollY + 120;
    let current = sections[0];
    for (const section of sections) {
      if (section.offsetTop <= scrollPos) {
        current = section;
      }
    }
    links.forEach((link) => {
      const target = link.getAttribute('href').slice(1);
      link.classList.toggle('is-active', current && current.id === target);
    });
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
});
