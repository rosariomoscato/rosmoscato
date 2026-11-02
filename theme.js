// Apply the saved or system theme before the page is rendered.
(() => {
  const root = document.documentElement;
  let selected;
  try { selected = new URLSearchParams(location.search).get('theme') || localStorage.getItem('portfolio-theme'); } catch (_) {}
  root.dataset.theme = selected === 'dark' || selected === 'light' ? selected : (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  const mount = () => {
    const control = document.createElement('div');
    control.className = 'theme-control';
    control.setAttribute('role', 'group');
    control.innerHTML = '<button type="button" data-theme-choice="light"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/></svg><span></span></button><button type="button" data-theme-choice="dark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z"/></svg><span></span></button>';
    const update = () => {
      const en = root.lang === 'en';
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', getComputedStyle(root).getPropertyValue('--bg-primary').trim());
      control.setAttribute('aria-label', en ? 'Appearance' : 'Aspetto');
      control.querySelectorAll('button').forEach(button => {
        const light = button.dataset.themeChoice === 'light';
        button.querySelector('span').textContent = light ? (en ? 'Light' : 'Chiaro') : (en ? 'Dark' : 'Scuro');
        button.setAttribute('aria-pressed', String(root.dataset.theme === button.dataset.themeChoice));
      });
    };
    control.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      root.dataset.theme = button.dataset.themeChoice;
      try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch (_) {}
      update();
    }));
    document.body.append(control);
    new MutationObserver(update).observe(root, { attributes:true, attributeFilter:['lang','data-theme'] });
    update();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
