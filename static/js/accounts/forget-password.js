/**
 * ExamPrep — Forgot Password page
 * Handles the reset-link submit flow and success-state toggle.
 * Vanilla JS only, no dependencies.
 */
(function () {
    'use strict';

    var resetForm = document.getElementById('reset-form');
    var authCard = document.getElementById('auth-card');
    var submitBtn = resetForm ? resetForm.querySelector('button[type="submit"]') : null;

    var SUBMIT_BTN_DEFAULT_HTML = submitBtn ? submitBtn.innerHTML : '';
    var SUBMIT_BTN_LOADING_HTML =
        '<i class="bi bi-arrow-repeat spin" aria-hidden="true"></i> Sending...';

    function setLoadingState() {
        submitBtn.disabled = true;
        submitBtn.innerHTML = SUBMIT_BTN_LOADING_HTML;
    }

    function resetButtonState() {
        submitBtn.disabled = false;
        submitBtn.innerHTML = SUBMIT_BTN_DEFAULT_HTML;
    }

    function toggleSuccess(show) {
        if (show) {
            authCard.classList.add('is-success');
        } else {
            authCard.classList.remove('is-success');
            resetForm.reset();
            resetButtonState();
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoadingState();

        // Simulate API call
        window.setTimeout(function () {
            toggleSuccess(true);
        }, 1500);
    }

    if (resetForm) {
        resetForm.addEventListener('submit', handleSubmit);
    }

    var tryAnotherBtn = document.querySelector('[data-action="try-another"]');
    if (tryAnotherBtn) {
        tryAnotherBtn.addEventListener('click', function () {
            toggleSuccess(false);
        });
    }
})();
