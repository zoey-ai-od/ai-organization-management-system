(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;

  function createAmbientUI() {
    const progress = document.createElement('div');
    progress.className = 'page-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progress);

    if (!reduced && !coarse) {
      const glow = document.createElement('div');
      glow.className = 'cursor-glow';
      glow.setAttribute('aria-hidden', 'true');
      document.body.appendChild(glow);

      for (let i = 0; i < 24; i += 1) {
        const p = document.createElement('i');
        p.className = 'ambient-particle';
        p.setAttribute('aria-hidden', 'true');
        p.style.setProperty('--x', `${Math.random() * 100}vw`);
        p.style.setProperty('--s', `${1 + Math.random() * 1.6}px`);
        p.style.setProperty('--d', `${9 + Math.random() * 13}s`);
        p.style.setProperty('--delay', `${-Math.random() * 18}s`);
        document.body.appendChild(p);
      }

      let raf = 0;
      window.addEventListener('pointermove', (event) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
          document.documentElement.style.setProperty('--my', `${event.clientY}px`);
          raf = 0;
        });
      }, { passive: true });
    }

    const updateProgress = () => {
      const scrollRoot = document.querySelector('.workspace');
      const useWorkspace = scrollRoot && getComputedStyle(scrollRoot).overflowY !== 'visible';
      const top = useWorkspace ? scrollRoot.scrollTop : window.scrollY;
      const max = useWorkspace ? scrollRoot.scrollHeight - scrollRoot.clientHeight : document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? Math.min(1, top / max) : 0})`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    document.querySelector('.workspace')?.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  function decorateNavigation() {
    const navActions = document.querySelector('.site-nav .nav-actions');
    if (navActions && !navActions.querySelector('.system-status')) {
      const status = document.createElement('span');
      status.className = 'system-status desktop-only';
      status.innerHTML = '<i></i>SYSTEM ONLINE';
      navActions.prepend(status);
    }

    const topActions = document.querySelector('.app-topbar .top-actions');
    if (topActions && !topActions.querySelector('.system-time')) {
      const time = document.createElement('span');
      time.className = 'system-time';
      topActions.prepend(time);
      const tick = () => {
        const now = new Date();
        time.textContent = `LOCAL ${now.toLocaleTimeString('zh-CN', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
      };
      tick();
      setInterval(tick, 1000);
    }

    const footer = document.querySelector('.footer-inner');
    if (footer && !footer.querySelector('.demo-watermark')) {
      const mark = document.createElement('span');
      mark.className = 'demo-watermark';
      mark.textContent = 'Fictional demo data';
      footer.appendChild(mark);
    }
  }

  function initStagger() {
    document.querySelectorAll('section, .view').forEach(section => {
      section.querySelectorAll(':scope .reveal').forEach((el, index) => {
        el.style.setProperty('--reveal-delay', `${Math.min(index * 65, 320)}ms`);
      });
    });
  }

  function initTilt() {
    if (reduced || coarse) return;
    const selectors = '.card-hover, .demo-card, .orbit-card, .role-node, .layer-card';
    document.querySelectorAll(selectors).forEach(card => {
      card.classList.add('tilt-card');
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rx = ((y / rect.height) - .5) * -4.8;
        const ry = ((x / rect.width) - .5) * 5.4;
        card.style.setProperty('--card-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--card-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  }

  function initMagneticButtons() {
    if (reduced || coarse) return;
    document.querySelectorAll('.btn-primary').forEach(button => {
      button.addEventListener('pointermove', event => {
        const rect = button.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * .08;
        const y = (event.clientY - rect.top - rect.height / 2) * .12;
        button.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
      button.addEventListener('pointerleave', () => { button.style.transform = ''; });
    });
  }

  function initRipples() {
    document.addEventListener('click', event => {
      const button = event.target.closest('.btn, .top-btn, .side-link, .tab-btn');
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  }

  function animateNumber(el) {
    if (el.dataset.counted) return;
    const raw = el.textContent.trim();
    const match = raw.match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match) return;
    el.dataset.counted = 'true';
    const target = Number(match[1]);
    const suffix = match[2];
    const started = performance.now();
    const duration = 900 + Math.min(target * 18, 650);
    const step = now => {
      const t = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target % 1 ? (target * eased).toFixed(1) : Math.round(target * eased);
      el.textContent = `${value}${suffix}`;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function initCounters() {
    const targets = document.querySelectorAll('.stat-number, .status-metric strong, .trust-item strong');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .55 });
    targets.forEach(el => observer.observe(el));
  }

  function initSectionSpy() {
    const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    if (!links.length) return;
    const map = new Map(links.map(link => [link.getAttribute('href').slice(1), link]));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => link.classList.remove('active'));
        map.get(entry.target.id)?.classList.add('active');
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    map.forEach((_, id) => document.getElementById(id) && observer.observe(document.getElementById(id)));
  }

  function initViewRefresh() {
    const refresh = () => {
      requestAnimationFrame(() => {
        initTilt();
        document.querySelectorAll('.view.active .stat-number').forEach(el => {
          delete el.dataset.counted;
          animateNumber(el);
        });
      });
    };
    document.querySelectorAll('[data-view], [data-view-jump]').forEach(btn => btn.addEventListener('click', refresh));
  }

  document.addEventListener('DOMContentLoaded', () => {
    createAmbientUI();
    decorateNavigation();
    initStagger();
    initTilt();
    initMagneticButtons();
    initRipples();
    initCounters();
    initSectionSpy();
    initViewRefresh();
  });
})();
