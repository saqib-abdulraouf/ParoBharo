/* =========================================================================
   ExamPrep — Sign In Page
   Vanilla JS (ES6) — no dependencies beyond Bootstrap
   ========================================================================= */

(function () {
    'use strict';

    /**
     * Toggles the visibility of the password field and swaps the icon.
     */
    function initPasswordToggle() {
        const toggleBtn = document.getElementById('passwordToggle');
        const passwordInput = document.getElementById('password');
        const passwordIcon = document.getElementById('passwordIcon');

        if (!toggleBtn || !passwordInput || !passwordIcon) return;

        toggleBtn.addEventListener('click', () => {
            const isHidden = passwordInput.type === 'password';
            passwordInput.type = isHidden ? 'text' : 'password';
            passwordIcon.classList.toggle('bi-eye', !isHidden);
            passwordIcon.classList.toggle('bi-eye-slash', isHidden);
            toggleBtn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
        });
    }

    /**
     * Adds a focused-state class to labels when their associated input
     * gains/loses focus (mirrors the token-driven label color change).
     */
    function initFocusEffects() {
        const inputs = document.querySelectorAll('.js-field-input');

        inputs.forEach((input) => {
            const group = input.closest('.js-field-group');
            const label = group ? group.querySelector('label') : null;
            if (!label) return;

            input.addEventListener('focus', () => label.classList.add('is-focused'));
            input.addEventListener('blur', () => label.classList.remove('is-focused'));
        });
    }

    /**
     * Basic client-side email validation and simulated submit loading state.
     */
    function initLoginForm() {
        const form = document.getElementById('loginForm');
        if (!form) return;

        const submitBtn = document.getElementById('submitBtn');
        const loader = document.getElementById('loader');
        const btnText = document.getElementById('submitBtnText');
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const isValidEmail = emailInput.value.includes('@') && emailInput.value.includes('.');

            if (!isValidEmail) {
                emailInput.classList.add('is-invalid');
                emailError.classList.remove('d-none');
                emailInput.focus();
                return;
            }

            emailInput.classList.remove('is-invalid');
            emailError.classList.add('d-none');

            setLoadingState(true);

            // Simulate an async authentication request.
            window.setTimeout(() => {
                setLoadingState(false);
                window.location.href = '/dashboard/';
            }, 1500);
        });

        function setLoadingState(isLoading) {
            submitBtn.disabled = isLoading;
            submitBtn.classList.toggle('disabled', isLoading);
            btnText.classList.toggle('opacity-0', isLoading);
            loader.classList.toggle('d-none', !isLoading);
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        initPasswordToggle();
        initFocusEffects();
        initLoginForm();
    });
})();
