/**
 * ExamPrep - Books Page JavaScript
 * Handles category filtering, view toggling (grid vs list), search filtering, 
 * animated stats counter, and search input focus states.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCategoryFiltering();
  initViewToggle();
  initSearchFiltering();
  initStatsCounter();
  initSearchFocusStates();
  initPopularTags();
  initReadNowButtons();
});

/**
 * Read Now button handler
 */
function initReadNowButtons() {
  const readBtns = document.querySelectorAll('button.btn-read-now');
  readBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.book-card-body');
      const title = card ? card.querySelector('.book-card-title')?.textContent : 'Book';
      alert(`Opening preview for "${title}"...`);
    });
  });
}

/**
 * Category Filtering logic
 */
function initCategoryFiltering() {
  const categoryTabs = document.querySelectorAll('.category-tab');
  const bookCards = document.querySelectorAll('.book-card-col');
  const noResults = document.getElementById('noResults');

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedCategory = tab.dataset.category;
      let visibleCount = 0;

      bookCards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.classList.remove('d-none');
          visibleCount++;
        } else {
          card.classList.add('d-none');
        }
      });

      // Show/hide no results message
      if (noResults) {
        if (visibleCount === 0) {
          noResults.classList.remove('d-none');
        } else {
          noResults.classList.add('d-none');
        }
      }
    });
  });
}

/**
 * View Toggle (Grid vs List View)
 */
function initViewToggle() {
  const viewBtns = document.querySelectorAll('.btn-view-toggle');
  const booksGrid = document.getElementById('booksGrid');

  if (!booksGrid) return;

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const viewMode = btn.dataset.view;
      if (viewMode === 'list') {
        booksGrid.classList.add('list-view');
      } else {
        booksGrid.classList.remove('list-view');
      }
    });
  });
}

/**
 * Search Filtering across Hero and Navbar inputs
 */
function initSearchFiltering() {
  const heroSearchInput = document.getElementById('booksHeroSearch');
  const bookCards = document.querySelectorAll('.book-card-col');
  const noResults = document.getElementById('noResults');

  if (!heroSearchInput) return;

  heroSearchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    bookCards.forEach(card => {
      const title = card.dataset.title ? card.dataset.title.toLowerCase() : '';
      const category = card.dataset.category ? card.dataset.category.toLowerCase() : '';

      if (title.includes(query) || category.includes(query)) {
        card.classList.remove('d-none');
        visibleCount++;
      } else {
        card.classList.add('d-none');
      }
    });

    if (noResults) {
      if (visibleCount === 0) {
        noResults.classList.remove('d-none');
      } else {
        noResults.classList.add('d-none');
      }
    }
  });
}

/**
 * Popular Search Tags click handler
 */
function initPopularTags() {
  const popularTags = document.querySelectorAll('.books-popular-tag');
  const heroSearchInput = document.getElementById('booksHeroSearch');

  popularTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const filterValue = tag.dataset.filter;
      if (heroSearchInput) {
        heroSearchInput.value = filterValue;
        heroSearchInput.dispatchEvent(new Event('input'));
      }
    });
  });
}

/**
 * Animated Stats Counter
 */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stats-number');
  if (statNumbers.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target, 10);
        animateValue(entry.target, 0, target, 1500);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    element.textContent = currentValue.toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

/**
 * Search Input Focus States
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
