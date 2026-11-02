// Shared navigation for the home, curriculum and legal pages.
(() => {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const close = () => {
    const wasOpen = menu.classList.contains('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    document.body.style.overflow = '';
    document.querySelector('main')?.removeAttribute('inert');
    document.querySelector('.site-footer')?.removeAttribute('inert');
    if (wasOpen) toggle.focus({ preventScroll: true });
  };

  toggle.setAttribute('aria-controls', 'mobile-menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    if (menu.classList.contains('open')) return close();
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.querySelector('main')?.setAttribute('inert', '');
    document.querySelector('.site-footer')?.setAttribute('inert', '');
    requestAnimationFrame(() => {
      if (menu.classList.contains('open')) menu.querySelector('a')?.focus({ preventScroll: true });
    });
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
    if (event.key !== 'Tab' || !menu.classList.contains('open')) return;
    const controls = [toggle, ...menu.querySelectorAll('a[href], button:not([disabled])')];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || !controls.includes(document.activeElement))) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !controls.includes(document.activeElement))) {
      event.preventDefault(); first.focus();
    }
  });
  const compact = matchMedia('(max-width:1180px)');
  compact.addEventListener('change', () => { if (!compact.matches) close(); });

  const sections = ['home', 'about', 'lights-out', 'books', 'contact'].map(id => document.getElementById(id));
  if (sections.some(section => !section)) return;
  const links = [...document.querySelectorAll('.main-nav a, .mobile-nav a')];
  let scheduled = false;
  const update = () => {
    scheduled = false;
    let active = 'home';
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 160) active = section.id;
    }
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 2) active = 'contact';
    for (const link of links) {
      if (new URL(link.href).hash === '#' + active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };
  const schedule = () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  update();
})();
