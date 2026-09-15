// assets/js/accessibility.js
window.pkmkpiA11y = {
    fontScale: localStorage.getItem('pkmkpi_font_scale') || 1.0,
    animationsPaused: localStorage.getItem('pkmkpi_animations_paused') === 'true',

    init: function() {
        this.applySettings();
        this.bindEvents();
    },

    applySettings: function() {
        document.documentElement.style.setProperty('--font-scale', this.fontScale);
        if (this.animationsPaused) {
            document.body.classList.add('animations-paused');
        } else {
            document.body.classList.remove('animations-paused');
        }
    },

    toggleAnimations: function() {
        this.animationsPaused = !this.animationsPaused;
        localStorage.setItem('pkmkpi_animations_paused', this.animationsPaused);
        this.applySettings();
        alert(this.animationsPaused ? 'Animations Disabled (Reduced Motion Active)' : 'Animations Enabled');
    },

    setFontScale: function(scale) {
        this.fontScale = scale;
        localStorage.setItem('pkmkpi_font_scale', scale);
        this.applySettings();
    },

    bindEvents: function() {
        // Alt + A Shortcut
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key.toLowerCase() === 'a') {
                e.preventDefault();
                // Simple toggle for now, pwede nating gawan ng Bootstrap modal UI maya-maya
                this.toggleAnimations(); 
            }
        });

        // Floating Action Button
        const fab = document.getElementById('a11y-fab');
        if (fab) {
            fab.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleAnimations();
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.pkmkpiA11y.init();
});