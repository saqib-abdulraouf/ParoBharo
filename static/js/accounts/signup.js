/* ==========================================================================
   ExamPrep — Sign Up page behaviour
   Vanilla JS only (no jQuery / frameworks)
   ========================================================================== */

/**
 * Toggles a password field between masked and plain text,
 * and swaps the associated Bootstrap Icon.
 * @param {string} inputId - id of the password input to toggle
 */
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;

    const button = input.parentElement.querySelector('.field-icon-btn');
    const icon = button ? button.querySelector('i') : null;

    if (input.type === 'password') {
        input.type = 'text';
        if (icon) {
            icon.classList.remove('bi-eye');
            icon.classList.add('bi-eye-slash');
        }
    } else {
        input.type = 'password';
        if (icon) {
            icon.classList.remove('bi-eye-slash');
            icon.classList.add('bi-eye');
        }
    }
}

/**
 * Evaluates password strength and updates the 4-bar meter + label.
 * @param {string} value - current password field value
 */
function updatePasswordStrength(value) {
    const bars = [
        document.getElementById('strength-1'),
        document.getElementById('strength-2'),
        document.getElementById('strength-3'),
        document.getElementById('strength-4')
    ];
    const text = document.getElementById('strength-text');
    if (!text || bars.some((b) => !b)) return;

    const levelClasses = ['level-weak', 'level-fair', 'level-strong', 'level-excellent'];

    // Reset all bars
    bars.forEach((bar) => {
        bar.classList.remove(...levelClasses);
    });

    if (value.length === 0) {
        text.textContent = 'Strength: Empty';
        return;
    }

    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    const labels = ['Weak', 'Weak', 'Fair', 'Strong', 'Excellent'];
    const classByScore = ['level-weak', 'level-weak', 'level-fair', 'level-strong', 'level-excellent'];

    for (let i = 0; i < score; i++) {
        bars[i].classList.add(classByScore[score]);
    }

    text.textContent = 'Strength: ' + labels[score];
}

/**
 * Basic client-side handling for the registration form submit.
 * Prevents the default navigation since there is no backend wired up yet.
 */
function initSignupForm() {
    const form = document.getElementById('signupForm');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Integration point: hook up to Django view / API endpoint here.
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initSignupForm();

    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', (e) => updatePasswordStrength(e.target.value));
    }
});
