const ICONS = {
  sparkles: '<path d="m12 3-1.4 3.6L7 8l3.6 1.4L12 13l1.4-3.6L17 8l-3.6-1.4L12 3Z"/><path d="m5 13-.8 2.2L2 16l2.2.8L5 19l.8-2.2L8 16l-2.2-.8L5 13Z"/><path d="m19 14-1 2.7L15.3 18l2.7 1 1 2.7 1-2.7 2.7-1-2.7-1-1-2.7Z"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  workflow: '<circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h5a4 4 0 0 1 4 4v1"/><path d="m13 8 3 3 3-3"/><path d="M17 18h-5a4 4 0 0 1-4-4v-1"/><path d="m11 16-3-3-3 3"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  chart: '<path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19V2"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
  kanban: '<rect x="3" y="3" width="7" height="18" rx="2"/><rect x="14" y="3" width="7" height="11" rx="2"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  bot: '<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M12 3v4M8 12h.01M16 12h.01M8 17h8"/>',
  activity: '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
  roadmap: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M8.5 17.5 15.5 6.5"/><path d="M9 5h6M6 8v7"/>',
  upload: '<path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M4 20h16"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  external: '<path d="M15 3h6v6"/><path d="m10 14 11-11"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  command: '<path d="M18 9a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12Z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21H9.6v-.09A1.7 1.7 0 0 0 8.5 19.3a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.1 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H2V9.6h.09A1.7 1.7 0 0 0 3.7 8.5a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 8 4.1a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V2h4v.09A1.7 1.7 0 0 0 14.5 3.7a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.9 8c.2.4.5.8.9 1 .3.2.7.4 1.1.4H22v4h-.09A1.7 1.7 0 0 0 20.3 14.5c-.2.2-.5.3-.9.5Z"/>',
  refresh: '<path d="M20 7v5h-5"/><path d="M4 17v-5h5"/><path d="M6.1 9a7 7 0 0 1 11.6-2.6L20 9M4 15l2.3 2.6A7 7 0 0 0 18 15"/>',
  download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  play: '<path d="m8 5 11 7-11 7V5Z"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  userCheck: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="m17 11 2 2 4-4"/>',
  alert: '<path d="M10.3 2.8 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.8a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
  brain: '<path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.5A3.5 3.5 0 0 0 3.5 12 3.5 3.5 0 0 0 7 15.5V16a3.5 3.5 0 0 0 3.5 3.5H12v-15H9.5Z"/><path d="M14.5 4.5A3.5 3.5 0 0 1 18 8v.5a3.5 3.5 0 0 1 2.5 3.5 3.5 3.5 0 0 1-3.5 3.5V16a3.5 3.5 0 0 1-3.5 3.5H12v-15h2.5Z"/><path d="M8 9.5h4M12 14.5h4"/>',
  git: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.6S18 0 15 1.5a13 13 0 0 0-7 0C5 0 3.8.6 3.8.6A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'
};

function svgIcon(name, className = '') {
  const paths = ICONS[name] || ICONS.sparkles;
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    if (!el.dataset.hydrated) {
      el.innerHTML = svgIcon(name);
      el.dataset.hydrated = 'true';
    }
  });
}

function showToast(title, text = '', type = 'success', duration = 3200) {
  let wrap = document.querySelector('.toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  const iconName = type === 'error' ? 'alert' : type === 'info' ? 'info' : 'checkCircle';
  toast.innerHTML = `<div class="toast-icon">${svgIcon(iconName)}</div><div><div class="toast-title">${title}</div>${text ? `<div class="toast-text">${text}</div>` : ''}</div>`;
  wrap.appendChild(toast);
  const remove = () => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 260);
  };
  setTimeout(remove, duration);
  return toast;
}

function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('open');
  document.body.classList.add('no-scroll');
  const focusable = el.querySelector('input, textarea, select, button');
  setTimeout(() => focusable?.focus(), 30);
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  if (!document.querySelector('.modal-backdrop.open, .command-palette.open')) document.body.classList.remove('no-scroll');
}

function initCommonUI() {
  hydrateIcons();
  const nav = document.querySelector('.site-nav');
  const updateNav = () => nav?.classList.toggle('scrolled', window.scrollY > 20);
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('[data-modal-open]').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.modalOpen)));
  document.querySelectorAll('[data-modal-close]').forEach(btn => btn.addEventListener('click', () => closeModal(btn.dataset.modalClose)));
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('mousedown', e => {
    if (e.target === backdrop) closeModal(backdrop.id);
  }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(el => closeModal(el.id));
      const palette = document.querySelector('.command-palette.open');
      if (palette) {
        palette.classList.remove('open');
        document.body.classList.remove('no-scroll');
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initCommonUI);
window.AppUI = { ICONS, svgIcon, hydrateIcons, showToast, openModal, closeModal };
