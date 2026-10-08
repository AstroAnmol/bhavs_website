// ================================================
// main.js — Shared JavaScript for all pages
// ================================================

document.addEventListener('DOMContentLoaded', () => {

  // ─── Navbar scroll effect ───
  const nav = document.getElementById('main-nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ─── Mobile nav toggle ───
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      // Animate hamburger → X
      const spans = navToggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  // ─── Active nav link on scroll ───
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');
  if (sections.length && navAnchors.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { threshold: 0.35 });
    sections.forEach(s => observer.observe(s));
  }

  // ─── Scroll-reveal animations ───
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  // ─── Publications filter (publications.html) ───
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubEntries = document.querySelectorAll('.pub-entry');
  if (filterBtns.length && pubEntries.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        pubEntries.forEach(entry => {
          if (filter === 'all' || entry.dataset.type === filter) {
            entry.classList.remove('hidden');
          } else {
            entry.classList.add('hidden');
          }
        });

        // Hide empty year groups
        document.querySelectorAll('.pub-year-group').forEach(group => {
          const visible = group.querySelectorAll('.pub-entry:not(.hidden)');
          group.style.display = visible.length ? '' : 'none';
        });
      });
    });
  }

  // ─── Abstract toggles (publications.html) ───
  const abstractToggles = document.querySelectorAll('.pub-abstract-toggle');
  abstractToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.classList.toggle('open');
      const abstract = toggle.closest('.pub-entry').querySelector('.pub-entry__abstract');
      if (abstract) {
        abstract.classList.toggle('open', isOpen);
      }
      toggle.textContent = '';
      toggle.innerHTML = isOpen
        ? 'Hide abstract <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m18 15-6-6-6 6"/></svg>'
        : 'Show abstract <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>';
    });
  });

});
