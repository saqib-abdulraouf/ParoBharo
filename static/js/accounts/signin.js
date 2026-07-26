/* =========================================================================
   ExamPrep — Sign In Page
   Vanilla JS (ES6) — Django Native Post Support
   ========================================================================= */

(function () {
    'use strict';

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

    function initLoginForm() {
        const form = document.getElementById('loginForm');
        if (!form) return;

        const submitBtn = document.getElementById('submitBtn');
        const loader = document.getElementById('loader');
        const btnText = document.getElementById('submitBtnText');

        form.addEventListener('submit', () => {
            if (submitBtn && loader && btnText) {
                submitBtn.disabled = true;
                btnText.classList.add('opacity-0');
                loader.classList.remove('d-none');
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        initPasswordToggle();
        initFocusEffects();
        initLoginForm();
    });
})();
