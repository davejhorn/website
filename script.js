// Mobile navigation ---------------------------------------------------------
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  if (!links) return;
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    links?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

// Footer year ---------------------------------------------------------------
// Null-guarded: if this element is ever renamed, the script must not throw and
// take the reveal observer below down with it (every .reveal starts at opacity 0).
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Obfuscated contact --------------------------------------------------------
// The address is assembled at click time from reversed parts, so it never sits
// in the markup as scrapable plain text.
const EMAIL_PARTS = ['moc.liamg', 'nroH.haisoJ.divaD'];
function buildEmail() {
  const rev = s => s.split('').reverse().join('');
  return rev(EMAIL_PARTS[1]) + '@' + rev(EMAIL_PARTS[0]);
}

document.querySelectorAll('[data-contact-email]').forEach(btn => {
  btn.addEventListener('click', () => {
    const address = buildEmail();
    const note = document.querySelector('[data-contact-note]');
    if (note) {
      note.textContent = address;
      note.hidden = false;
    }
    window.location.href =
      'mailto:' + address + '?subject=' + encodeURIComponent('Hello from your site');
  });
});

// Reveal on scroll ----------------------------------------------------------
const revealables = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealables.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealables.forEach(element => observer.observe(element));
} else {
  revealables.forEach(element => element.classList.add('visible'));
}

// Lightweight, privacy-friendly analytics -----------------------------------
// GoatCounter: no cookies, no personal data, free for personal sites.
// Create a free account at goatcounter.com, then replace YOURCODE below with
// the code you chose. Until then this block does nothing.
(function loadAnalytics() {
  const SITE_CODE = 'YOURCODE';
  if (SITE_CODE === 'YOURCODE') return; // not configured yet — stay silent
  const s = document.createElement('script');
  s.async = true;
  s.dataset.goatcounter = 'https://' + SITE_CODE + '.goatcounter.com/count';
  s.src = '//gc.zgo.at/count.js';
  document.head.appendChild(s);
})();
