/**
 * ExamPrep Student Dashboard — My Exams
 * Vanilla JS (ES6). No globals leak — everything lives inside one IIFE.
 */
(function () {
    'use strict';

    function initSidebarDrawer() {
        const sidebar = document.getElementById('sidebar');
        const backdrop = document.getElementById('sidebarBackdrop');
        const openBtn = document.getElementById('menuToggle');
        const closeBtn = document.getElementById('sidebarClose');

        if (!sidebar || !openBtn) return;

        function openDrawer() {
            sidebar.classList.add('is-open');
            backdrop.classList.add('is-visible');
            openBtn.setAttribute('aria-expanded', 'true');
            const firstLink = sidebar.querySelector('.nav-link');
            if (firstLink) firstLink.focus();
        }

        function closeDrawer() {
            sidebar.classList.remove('is-open');
            backdrop.classList.remove('is-visible');
            openBtn.setAttribute('aria-expanded', 'false');
            openBtn.focus();
        }

        openBtn.addEventListener('click', openDrawer);
        if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
        backdrop.addEventListener('click', closeDrawer);

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
                closeDrawer();
            }
        });
    }

    function initHeaderScrollShadow() {
        const header = document.getElementById('appHeader');
        if (!header) return;

        function handleScroll() {
            header.classList.toggle('is-scrolled', window.scrollY > 8);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

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

    function initDismissibleToggle(buttonId) {
        const button = document.getElementById(buttonId);
        if (!button) return;

        button.addEventListener('click', function (event) {
            event.stopPropagation();
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!isOpen));
        });

        document.addEventListener('click', function () {
            button.setAttribute('aria-expanded', 'false');
        });
    }

    function initFilterTabs() {
        const tabs = document.querySelectorAll('.filter-tab');
        const cards = document.querySelectorAll('.exam-card');
        if (!tabs.length) return;

        function applyFilter(filter) {
            cards.forEach(function (card) {
                const status = card.getAttribute('data-status');
                const shouldShow = filter === 'all' || status === filter;
                card.style.display = shouldShow ? '' : 'none';
            });
        }

        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                tabs.forEach(function (t) {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');
                applyFilter(tab.getAttribute('data-filter'));
            });
        });
    }

    function initSearchSubmitGuard() {
        const form = document.querySelector('.header-search');
        if (!form) return;

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const input = form.querySelector('input[type="search"]');
            const query = input ? input.value.trim() : '';
            if (query.length === 0) return;
            // Hook point: wire this up to the real search endpoint.
            form.dispatchEvent(new CustomEvent('examSearch', { detail: { query: query } }));
        });
     }

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

    document.addEventListener('DOMContentLoaded', function () {
        initSidebarDrawer();
        initHeaderScrollShadow();
        initDarkMode();
        initDismissibleToggle('notifToggle');
        initDismissibleToggle('userMenuToggle');
        initFilterTabs();
        initSearchSubmitGuard();
        initDesktopSidebarToggle();
    });
})();
