/**
 * ExamPrep - Find Your Exam Page
 * Vanilla JS (ES6) - modular functions, no jQuery, no inline JS.
 */

/**
 * Simulates applying a filter when a sidebar checkbox is toggled.
 * Logs the applied filter label (placeholder for real filtering logic).
 */
function initFilterCheckboxes() {
    const checkboxes = document.querySelectorAll('.filter-checkbox');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                const label = e.target.nextElementSibling
                    ? e.target.nextElementSibling.textContent
                    : '';
                console.log('Filter applied: ' + label);
            }
        });
    });
}

/**
 * Adds a visible focus ring to search inputs on focus, removes it on blur.
 */
function initSearchFocusStates() {
    const searchInputs = document.querySelectorAll('.js-search-input');

    searchInputs.forEach((input) => {
        input.addEventListener('focus', () => {
            const wrapper = input.closest('.js-search-wrapper');
            if (wrapper) wrapper.classList.add('search-focus-ring');
        });

        input.addEventListener('blur', () => {
            const wrapper = input.closest('.js-search-wrapper');
            if (wrapper) wrapper.classList.remove('search-focus-ring');
        });
    });
}

/**
 * Toggles the active state on category filter pill buttons.
 */
function initCategoryPills() {
    const pills = document.querySelectorAll('.filter-pill');

    pills.forEach((pill) => {
        pill.addEventListener('click', () => {
            pills.forEach((p) => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });
}

/**
 * Toggles the active state on pagination number buttons and filters card layouts dynamically.
 */
function initPagination() {
    const pageButtons = document.querySelectorAll('.exam-pagination .page-btn[data-page]');
    const cards = document.querySelectorAll('.row.g-4 > [data-page]');
    const prevBtn = document.querySelector('.exam-pagination .page-btn[aria-label="Previous page"]');
    const nextBtn = document.querySelector('.exam-pagination .page-btn[aria-label="Next page"]');
    
    let currentPage = 1;

    function showPage(pageNum) {
        currentPage = pageNum;
        
        // Update active class on page buttons
        pageButtons.forEach((btn) => {
            const btnPage = parseInt(btn.getAttribute('data-page'), 10);
            if (btnPage === pageNum) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Show/hide cards
        cards.forEach((card) => {
            const cardPage = parseInt(card.getAttribute('data-page'), 10);
            if (cardPage === pageNum) {
                card.style.setProperty('display', 'block', 'important');
            } else {
                card.style.setProperty('display', 'none', 'important');
            }
        });

        // Enable/disable prev/next buttons
        if (prevBtn) {
            if (currentPage === 1) {
                prevBtn.style.opacity = '0.5';
                prevBtn.style.pointerEvents = 'none';
            } else {
                prevBtn.style.opacity = '1';
                prevBtn.style.pointerEvents = 'auto';
            }
        }

        if (nextBtn) {
            const maxPage = 3;
            if (currentPage === maxPage) {
                nextBtn.style.opacity = '0.5';
                nextBtn.style.pointerEvents = 'none';
            } else {
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'auto';
            }
        }
    }

    // Add click listeners to page buttons
    pageButtons.forEach((btn) => {
        const pageNum = parseInt(btn.getAttribute('data-page'), 10);
        btn.addEventListener('click', () => {
            showPage(pageNum);
        });
    });

    // Add click listeners to prev/next buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                showPage(currentPage - 1);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const maxPage = 3;
            if (currentPage < maxPage) {
                showPage(currentPage + 1);
            }
        });
    }

    // Initialize Page 1 as visible
    showPage(1);
}

/**
 * Entry point - runs once the DOM is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
    initFilterCheckboxes();
    initSearchFocusStates();
    initCategoryPills();
    initPagination();
});
