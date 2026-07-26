/**
 * ExamPrep - Home Page
 * Vanilla JS (ES6) - modular functions, no jQuery, no inline JS.
 */

/**
 * Wires up the Monthly / Annual pricing billing toggle switch.
 */
function initBillingToggle() {
  const billingBtn = document.getElementById('billing-toggle');
  if (!billingBtn) return;

  const knob = billingBtn.querySelector('.toggle-knob');
  const labelMonthly = document.getElementById('label-monthly');
  const labelAnnual = document.getElementById('label-annual');
  const basicPrice = document.getElementById('basic-price');
  const proPrice = document.getElementById('pro-price');

  let isAnnual = true;

  billingBtn.addEventListener('click', () => {
    isAnnual = !isAnnual;

    if (isAnnual) {
      knob.style.transform = 'translateX(28px)';
      billingBtn.style.backgroundColor = 'var(--color-primary)';
      
      // Update label typography styles
      if (labelMonthly) {
        labelMonthly.className = 'text-on-surface-variant fw-medium';
      }
      if (labelAnnual) {
        labelAnnual.className = 'text-on-surface fw-bold';
      }

      // Set annual prices
      if (basicPrice) basicPrice.textContent = '$14';
      if (proPrice) proPrice.textContent = '$36';
    } else {
      knob.style.transform = 'translateX(0px)';
      billingBtn.style.backgroundColor = 'var(--color-outline)';
      
      // Update label typography styles
      if (labelMonthly) {
        labelMonthly.className = 'text-on-surface fw-bold';
      }
      if (labelAnnual) {
        labelAnnual.className = 'text-on-surface-variant fw-medium';
      }

      // Set monthly prices
      if (basicPrice) basicPrice.textContent = '$19';
      if (proPrice) proPrice.textContent = '$49';
    }

    billingBtn.setAttribute('aria-checked', String(isAnnual));
  });
}

/**
 * Duplicates the testimonial track content so the CSS marquee animation
 * can loop seamlessly, matching the source design's infinite scroll effect.
 */
function initTestimonialMarquee() {
  const marquee = document.querySelector('.marquee-track');
  if (!marquee) return;

  const clone = marquee.innerHTML;
  marquee.innerHTML += clone;
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
 * Entry point - runs once the DOM is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
  initBillingToggle();
  initTestimonialMarquee();
  initSearchFocusStates();
});
