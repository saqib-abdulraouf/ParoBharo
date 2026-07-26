/**
 * ExamPrep Student Dashboard — My Favorites
 * Vanilla JS (ES6), no globals, modular functions.
 */
(function () {
    "use strict";

    /**
     * Adds a box-shadow to the sticky header once the page scrolls.
     */
    function initHeaderScrollShadow() {
        const header = document.getElementById("appHeader");
        if (!header) return;

        const toggleShadow = () => {
            header.classList.toggle("is-scrolled", window.scrollY > 4);
        };

        window.addEventListener("scroll", toggleShadow, { passive: true });
        toggleShadow();
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

    /**
     * Handles the category tab filtering above the favorites grid,
     * including a brief loading-skeleton state and an empty state
     * demo for the "Study Notes" category.
     */
    function initCategoryTabs() {
        const tabs = document.querySelectorAll(".tab-btn");
        const grid = document.getElementById("favoritesGrid");
        const skeleton = document.getElementById("favoritesSkeleton");
        const emptyState = document.getElementById("emptyState");

        if (!tabs.length || !grid || !emptyState) return;

        const setActiveTab = (activeTab) => {
            tabs.forEach((tab) => {
                const isActive = tab === activeTab;
                tab.classList.toggle("active", isActive);
                tab.setAttribute("aria-selected", String(isActive));
            });
        };

        const showLoadingState = () => {
            grid.classList.add("d-none");
            emptyState.classList.add("d-none");
            emptyState.classList.remove("d-flex-visible");
            if (skeleton) skeleton.classList.remove("d-none");
        };

        const showResultsState = () => {
            if (skeleton) skeleton.classList.add("d-none");
            grid.classList.remove("d-none");
            emptyState.classList.add("d-none");
            emptyState.classList.remove("d-flex-visible");
        };

        const showEmptyState = () => {
            if (skeleton) skeleton.classList.add("d-none");
            grid.classList.add("d-none");
            emptyState.classList.remove("d-none");
            emptyState.classList.add("d-flex-visible");
        };

        const handleTabClick = (event) => {
            const tab = event.currentTarget;
            const category = tab.dataset.category;

            setActiveTab(tab);
            showLoadingState();

            window.setTimeout(() => {
                if (category === "study-notes") {
                    showEmptyState();
                } else {
                    showResultsState();
                }
            }, 300);
        };

        tabs.forEach((tab) => tab.addEventListener("click", handleTabClick));
    }

    /**
     * Toggles the filled/outline heart icon on each favorite card
     * and keeps the aria-pressed state in sync for screen readers.
     */
    function initFavoriteToggles() {
        const toggles = document.querySelectorAll(".favorite-toggle");

        const handleToggleClick = (event) => {
            const button = event.currentTarget;
            const icon = button.querySelector("i");
            const isActive = button.classList.toggle("is-active");

            button.setAttribute("aria-pressed", String(isActive));
            icon.classList.toggle("bi-heart-fill", isActive);
            icon.classList.toggle("bi-heart", !isActive);
        };

        toggles.forEach((button) => button.addEventListener("click", handleToggleClick));
    }

    /**
     * Adds a subtle scale animation to the "Filter favorites" search
     * field on focus, matching the design's micro-interaction.
     */
    function initFilterSearchAnimation() {
        const input = document.getElementById("filterFavorites");
        if (!input) return;

        const wrapper = input.closest(".filter-search");
        if (!wrapper) return;

        input.addEventListener("focus", () => wrapper.classList.add("is-focused"));
        input.addEventListener("blur", () => wrapper.classList.remove("is-focused"));
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

    /**
     * Bootstraps all dashboard behaviours once the DOM is ready.
     */
    function initDashboard() {
        initHeaderScrollShadow();
        initDarkMode();
        initCategoryTabs();
        initFavoriteToggles();
        initFilterSearchAnimation();
        initDesktopSidebarToggle();
    }

    document.addEventListener("DOMContentLoaded", initDashboard);
})();
