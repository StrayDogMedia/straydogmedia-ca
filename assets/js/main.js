/* ============================================================
   Stray Dog Media — shared site scripts (every page).
   Sibling of strAI.ca/assets/app.js. Guarded so it is safe on
   the homepage and on subpages alike. The stray is watching. 🐾
   ============================================================ */
const HTML = document.documentElement;

/* --- Language toggle (persists across pages) --- */
const langBtn = document.getElementById('lang-btn');
let lang = localStorage.getItem('sdm-lang') || 'fr';

function applyLang(l) {
  lang = l;
  localStorage.setItem('sdm-lang', l);
  HTML.setAttribute('lang', l);
  HTML.setAttribute('data-lang', l);
  if (langBtn) langBtn.textContent = l === 'fr' ? 'EN' : 'FR';

  document.querySelectorAll('[data-fr]').forEach(el => {
    const val = el.getAttribute('data-' + l);
    if (val != null) el.innerHTML = val;
  });

  const title = HTML.getAttribute('data-title-' + l);
  if (title) document.title = title;
  const meta = document.getElementById('meta-desc');
  if (meta) {
    const d = meta.getAttribute('data-desc-' + l);
    if (d) meta.setAttribute('content', d);
  }
  document.querySelectorAll('[data-ph-fr]').forEach(el => {
    const ph = el.getAttribute('data-ph-' + l);
    if (ph != null) el.placeholder = ph;
  });
}
if (langBtn) langBtn.addEventListener('click', () => applyLang(lang === 'fr' ? 'en' : 'fr'));

/* --- Theme toggle (light/dark, persists) --- */
const themeBtn = document.getElementById('theme-toggle');
let theme = localStorage.getItem('sdm-theme') || 'dark';
function applyTheme(t) {
  theme = t;
  localStorage.setItem('sdm-theme', t);
  HTML.setAttribute('data-theme', t);
  if (themeBtn) themeBtn.setAttribute('aria-pressed', String(t === 'light'));
}
if (themeBtn) themeBtn.addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));
applyTheme(theme);

/* --- Nav scroll state --- */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* --- Mobile menu --- */
const mobileBtn = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileBtn.classList.remove('active');
    });
  });
}

/* --- Smooth scroll for on-page anchors --- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const t = document.querySelector(href);
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth' });
      if (mobileMenu) mobileMenu.classList.remove('open');
      if (mobileBtn) mobileBtn.classList.remove('active');
    }
  });
});

/* --- Cursor glow (desktop only) --- */
const glow = document.getElementById('cursor-glow');
if (glow && !('ontouchstart' in window)) {
  let mx = 0, my = 0, gx = 0, gy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function loop() {
    gx += (mx - gx) * 0.08; gy += (my - gy) * 0.08;
    glow.style.left = gx + 'px'; glow.style.top = gy + 'px';
    requestAnimationFrame(loop);
  })();
  glow.style.opacity = '1';
} else if (glow) {
  glow.style.display = 'none';
}

/* --- GSAP scroll reveals (shared). If GSAP is absent or the user
       prefers reduced motion, reveal everything immediately. --- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (window.gsap && !reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);
  if (document.querySelector('#hero .gs-reveal')) {
    gsap.to('#hero .gs-reveal', { y: 0, opacity: 1, duration: 0.9, stagger: 0.14, ease: 'power3.out', delay: 0.15 });
  }
  gsap.utils.toArray('.gs-reveal').forEach(el => {
    if (el.closest('#hero')) return;
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true,
      onEnter: () => gsap.to(el, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }) });
  });
  gsap.utils.toArray('.gs-reveal-left').forEach(el => {
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true,
      onEnter: () => gsap.to(el, { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }) });
  });
  gsap.utils.toArray('.gs-reveal-right').forEach(el => {
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true,
      onEnter: () => gsap.to(el, { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }) });
  });
} else {
  HTML.classList.add('no-gsap'); // CSS fallback keeps content visible
}

/* --- Formspree contact form (AJAX; guarded) --- */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const original = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = lang === 'fr' ? 'Envoi…' : 'Sending…'; }
    try {
      const res = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.style.display = 'none';
        const ok = document.getElementById('form-success');
        if (ok) ok.classList.add('show');
      } else {
        throw new Error('Formspree responded ' + res.status);
      }
    } catch (err) {
      if (btn) { btn.disabled = false; btn.textContent = original; }
      alert(lang === 'fr'
        ? "Une erreur s'est produite. Écrivez-nous directement à straydogmedia.ca@gmail.com."
        : 'Something went wrong. Please email us at straydogmedia.ca@gmail.com.');
    }
  });
}

/* --- Portfolio reels: preview on hover (desktop) / tap (touch) --- */
(function () {
  var reels = document.querySelectorAll('.reel[data-preview]');
  if (!reels.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var touch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

  reels.forEach(function (reel) {
    var vid = reel.querySelector('.reel__vid');
    if (!vid) return;
    // Lazy-load the source only when first needed.
    function ensureSrc() {
      if (vid.dataset.loaded) return;
      var src = reel.getAttribute('data-preview');
      if (src) { vid.src = src; vid.dataset.loaded = '1'; }
    }
    function play() { ensureSrc(); reel.classList.add('is-playing'); var p = vid.play(); if (p && p.catch) p.catch(function(){}); }
    function stop() { reel.classList.remove('is-playing'); vid.pause(); try { vid.currentTime = 0; } catch (e) {} }

    if (reduce) return; // honor reduced motion: posters only

    if (touch) {
      // Tap toggles preview; only one plays at a time.
      reel.addEventListener('click', function (e) {
        // let the "Watch full" link work normally
        if (e.target.closest('.reel__full')) return;
        e.preventDefault();
        if (reel.classList.contains('is-playing')) { stop(); return; }
        reels.forEach(function (r) { if (r !== reel) { r.classList.remove('is-playing'); var v = r.querySelector('.reel__vid'); if (v) v.pause(); } });
        play();
      });
    } else {
      reel.addEventListener('mouseenter', play);
      reel.addEventListener('mouseleave', stop);
    }
  });
})();

/* Apply stored/default language once (script is deferred). */
applyLang(lang);
