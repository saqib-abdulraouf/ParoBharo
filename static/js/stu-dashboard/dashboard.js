/* =========================================================
   ExamPrep Student Dashboard — dashboard.js
   Vanilla JS (ES6) — modular, no globals leaked
   ========================================================= */

(function () {
  'use strict';

  /* -------------------------------------------------------
     Sidebar toggle (mobile slide drawer)
     ------------------------------------------------------- */
  function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebarToggle');
    const backdrop = document.getElementById('sidebarBackdrop');
    const closeBtn = document.getElementById('sidebarCloseBtn');

    if (!sidebar || !toggleBtn || !backdrop) return;

    function openSidebar() {
      sidebar.classList.add('show');
      backdrop.classList.add('show');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      const firstLink = sidebar.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function closeSidebar() {
      sidebar.classList.remove('show');
      backdrop.classList.remove('show');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggleBtn.focus();
    }

    function toggleSidebar() {
      const isOpen = sidebar.classList.contains('show');
      isOpen ? closeSidebar() : openSidebar();
    }

    toggleBtn.addEventListener('click', toggleSidebar);
    backdrop.addEventListener('click', closeSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar.classList.contains('show')) {
        closeSidebar();
      }
    });

    // Close drawer automatically if viewport grows to desktop size
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768 && sidebar.classList.contains('show')) {
        closeSidebar();
      }
    });
  }

  /* -------------------------------------------------------
     Dark mode toggle (UI only — persists for the session)
     ------------------------------------------------------- */
  function initDarkMode() {
    const toggleBtn = document.getElementById('darkModeToggle');
    if (!toggleBtn) return;

    const root = document.documentElement;
    const icon = toggleBtn.querySelector('i');

    function setMode(isDark) {
      root.classList.toggle('dark', isDark);
      if (icon) {
        icon.classList.toggle('bi-moon-stars', !isDark);
        icon.classList.toggle('bi-sun', isDark);
      }
      toggleBtn.setAttribute('aria-pressed', String(isDark));
    }

    toggleBtn.addEventListener('click', function () {
      setMode(!root.classList.contains('dark'));
    });
  }

  /* -------------------------------------------------------
     Sticky header shadow on scroll
     ------------------------------------------------------- */
  function initHeaderScrollShadow() {
    const header = document.getElementById('appHeader');
    if (!header) return;

    function updateShadow() {
      header.classList.toggle('is-scrolled', window.scrollY > 4);
    }

    window.addEventListener('scroll', updateShadow, { passive: true });
    updateShadow();
  }

  /* -------------------------------------------------------
     Countdown timer for "Today's Mock Test"
     ------------------------------------------------------- */
  function initCountdownTimer() {
    const timerEl = document.getElementById('timer');
    if (!timerEl) return;

    let timeLeft = 2 * 3600 + 45 * 60 + 8; // 02:45:08

    function formatTime(totalSeconds) {
      const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
      const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
      const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
      return h + ':' + m + ':' + s;
    }

    const intervalId = setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        timerEl.textContent = '00:00:00';
        return;
      }
      timeLeft -= 1;
      timerEl.textContent = formatTime(timeLeft);
    }, 1000);
  }

  /* -------------------------------------------------------
     Scroll reveal animation for sections
     ------------------------------------------------------- */
  function initScrollReveal() {
    const targets = document.querySelectorAll('.reveal-on-scroll');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach(function (el) { observer.observe(el); });
  }

  /* -------------------------------------------------------
     Keyboard-friendly dropdown accessibility helper
     (Bootstrap handles the core behaviour; this adds a
     focus-return on close for better keyboard UX)
     ------------------------------------------------------- */
  function initDropdownFocusHandling() {
    const dropdownToggles = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    dropdownToggles.forEach(function (toggleEl) {
      toggleEl.addEventListener('hidden.bs.dropdown', function () {
        toggleEl.focus();
      });
    });
  }

  /* -------------------------------------------------------
     Desktop Sidebar Toggle (Collapse/Expand)
     ------------------------------------------------------- */
  function initDesktopSidebarToggle() {
    const toggleBtn = document.getElementById('desktopSidebarToggle');
    if (!toggleBtn) return;

    const isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
    if (isCollapsed) {
      document.body.classList.add('sidebar-collapsed');
    }

    toggleBtn.addEventListener('click', function () {
      const currentlyCollapsed = document.body.classList.toggle('sidebar-collapsed');
      localStorage.setItem('sidebar-collapsed', String(currentlyCollapsed));
      window.dispatchEvent(new Event('resize'));
    });

    toggleBtn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleBtn.click();
      }
    });
  }

  /* -------------------------------------------------------
     Init on DOM ready
     ------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initSidebar();
    initDarkMode();
    initHeaderScrollShadow();
    initCountdownTimer();
    initScrollReveal();
    initDropdownFocusHandling();
    initDesktopSidebarToggle();
  });
})();
