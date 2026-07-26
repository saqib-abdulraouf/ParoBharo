/* ==========================================================================
   ExamPrep — Sign Up page behaviour
   Vanilla JS only — Native Django Form Submit Support
   ========================================================================== */

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

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', (e) => updatePasswordStrength(e.target.value));
    }
});
