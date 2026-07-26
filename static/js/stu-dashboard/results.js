/**
 * EXAMPREP STUDENT DASHBOARD — dashboard.js
 * Modular vanilla JavaScript (ES6). No globals leaked; everything is
 * scoped inside the IIFE and individual modules below.
 */
(function () {
    'use strict';

    /* =====================================================
       MODULE: Header scroll shadow
       ===================================================== */
    function initHeaderScrollShadow() {
        const header = document.querySelector('.app-header');
        if (!header) return;

        const onScroll = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 8);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* =====================================================
       MODULE: Dark mode toggle (UI only)
       ===================================================== */
    function initDarkModeToggle() {
        const toggleBtn = document.getElementById('darkModeToggle');
        if (!toggleBtn) return;

        const root = document.documentElement;
        const icon = toggleBtn.querySelector('i');

        toggleBtn.addEventListener('click', () => {
            const isDark = root.getAttribute('data-theme') === 'dark';
            root.setAttribute('data-theme', isDark ? 'light' : 'dark');
            if (icon) {
                icon.classList.toggle('bi-moon-stars', isDark);
                icon.classList.toggle('bi-sun', !isDark);
            }
            toggleBtn.setAttribute('aria-pressed', String(!isDark));
        });
    }

    /* =====================================================
       MODULE: Toast notifications
       ===================================================== */
    function createToast(message) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'app-toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.innerHTML = `
      <i class="bi bi-info-circle-fill" aria-hidden="true"></i>
      <span class="msg"></span>
    `;
        toast.querySelector('.msg').textContent = message;
        container.appendChild(toast);

        requestAnimationFrame(() => toast.classList.add('show'));

        window.setTimeout(() => {
            toast.classList.remove('show');
            window.setTimeout(() => toast.remove(), 350);
        }, 3200);
    }

    /* =====================================================
       MODULE: Results table row interactions
       ===================================================== */
    function initResultsTable() {
        const rows = document.querySelectorAll('.results-table tbody tr');

        rows.forEach((row) => {
            const openDetails = () => {
                const nameEl = row.querySelector('.exam-name');
                const name = nameEl ? nameEl.textContent.trim() : 'this test';
                createToast(`Opening details for ${name}...`);
            };

            row.addEventListener('click', (event) => {
                // Avoid double-trigger when the explicit button is clicked
                if (event.target.closest('.btn-view-details')) return;
                openDetails();
            });

            const detailsBtn = row.querySelector('.btn-view-details');
            if (detailsBtn) {
                detailsBtn.addEventListener('click', (event) => {
                    event.stopPropagation();
                    openDetails();
                });
            }
        });
    }

    /* =====================================================
       MODULE: Table search filter
       ===================================================== */
    function initTableSearch() {
        const input = document.getElementById('submissionSearch');
        const rows = document.querySelectorAll('.results-table tbody tr');
        const emptyState = document.getElementById('tableEmptyState');
        if (!input) return;

        input.addEventListener('input', () => {
            const query = input.value.trim().toLowerCase();
            let visibleCount = 0;

            rows.forEach((row) => {
                const name = row.querySelector('.exam-name')?.textContent.toLowerCase() || '';
                const sub = row.querySelector('.exam-sub')?.textContent.toLowerCase() || '';
                const matches = name.includes(query) || sub.includes(query);
                row.style.display = matches ? '' : 'none';
                if (matches) visibleCount += 1;
            });

            if (emptyState) {
                emptyState.classList.toggle('d-none', visibleCount !== 0);
            }
        });
    }

    /* =====================================================
       MODULE: Table sort (Newest / Score High-Low / Score Low-High)
       ===================================================== */
    function initTableSort() {
        const sortSelect = document.getElementById('submissionSort');
        const tbody = document.querySelector('.results-table tbody');
        if (!sortSelect || !tbody) return;

        sortSelect.addEventListener('change', () => {
            const rows = Array.from(tbody.querySelectorAll('tr'));
            const mode = sortSelect.value;

            const getScorePercent = (row) => {
                const pill = row.querySelector('.score-pill small');
                if (!pill) return 0;
                const match = pill.textContent.match(/(\d+)%/);
                return match ? parseInt(match[1], 10) : 0;
            };

            if (mode === 'score-desc') {
                rows.sort((a, b) => getScorePercent(b) - getScorePercent(a));
            } else if (mode === 'score-asc') {
                rows.sort((a, b) => getScorePercent(a) - getScorePercent(b));
            } else {
                rows.sort((a, b) => (a.dataset.rowIndex || 0) - (b.dataset.rowIndex || 0));
            }

            rows.forEach((row) => tbody.appendChild(row));
        });
    }

    /* =====================================================
       MODULE: Pagination (demo — static dataset)
       ===================================================== */
    function initPagination() {
        const buttons = document.querySelectorAll('.page-btn[data-page]');
        const prevBtn = document.querySelector('.page-btn.nav-btn[data-nav="prev"]');
        const nextBtn = document.querySelector('.page-btn.nav-btn[data-nav="next"]');

        if (!buttons.length) return;

        const setActivePage = (pageNum) => {
            buttons.forEach((btn) => {
                btn.classList.toggle('active', Number(btn.dataset.page) === pageNum);
            });
        };

        buttons.forEach((btn) => {
            btn.addEventListener('click', () => setActivePage(Number(btn.dataset.page)));
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const active = document.querySelector('.page-btn.active');
                const current = active ? Number(active.dataset.page) : 1;
                if (current > 1) setActivePage(current - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const active = document.querySelector('.page-btn.active');
                const current = active ? Number(active.dataset.page) : 1;
                const max = Math.max(...Array.from(buttons).map((b) => Number(b.dataset.page)));
                if (current < max) setActivePage(current + 1);
            });
        }
    }

    /* =====================================================
       MODULE: Animate progress bars & subject strengths on load
       ===================================================== */
    function initAnimatedBars() {
        const fills = document.querySelectorAll('[data-fill-width]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        el.style.width = el.dataset.fillWidth;
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.2 }
        );

        fills.forEach((el) => observer.observe(el));
    }

    /* =====================================================
       MODULE: Sidebar active-state keyboard/hover polish
       ===================================================== */
    function initSidebarKeyboardSupport() {
        const links = document.querySelectorAll('.sidebar-nav-link, .mobile-bottom-nav a');
        links.forEach((link) => {
            link.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    link.click();
                }
            });
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

    /* =====================================================
       INIT
       ===================================================== */
    document.addEventListener('DOMContentLoaded', () => {
        initHeaderScrollShadow();
        initDarkModeToggle();
        initResultsTable();
        initTableSearch();
        initTableSort();
        initPagination();
        initAnimatedBars();
        initSidebarKeyboardSupport();
        initDesktopSidebarToggle();
    });
})();
