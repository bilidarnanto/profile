/**
 * Bili Darnanto Susilo - Portfolio Scripts
 * Version: 2.0 | Modular & Maintainable
 */

document.addEventListener("DOMContentLoaded", () => {
    initLanguageToggle();
    initNavbarScroll();
});

/**
 * Multi-Language Toggle System
 * Detects browser language, toggles between ID/EN
 */
function initLanguageToggle() {
    const htmlElement = document.documentElement;
    const toggleBtn = document.getElementById('langToggle');
    const langLabel = document.getElementById('langLabel');

    if (!toggleBtn || !langLabel) return;

    // Auto-detect language
    const userLang = navigator.language || navigator.userLanguage;
    let currentLang = userLang.toLowerCase().includes('id') ? 'id' : 'en';
    
    htmlElement.setAttribute('lang', currentLang);
    langLabel.textContent = currentLang.toUpperCase();

    toggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        htmlElement.setAttribute('lang', currentLang);
        langLabel.textContent = currentLang.toUpperCase();
        
        // Save preference
        localStorage.setItem('preferred-lang', currentLang);
    });

    // Load saved preference (override auto-detect)
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
        htmlElement.setAttribute('lang', savedLang);
        langLabel.textContent = savedLang.toUpperCase();
    }
}

/**
 * Navbar Shadow on Scroll
 * Adds shadow class when user scrolls past threshold
 */
function initNavbarScroll() {
    const topNav = document.getElementById('topNav');
    if (!topNav) return;

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        // Debounce for performance
        if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
        scrollTimeout = requestAnimationFrame(() => {
            if (window.scrollY > 20) {
                topNav.classList.add('scrolled');
            } else {
                topNav.classList.remove('scrolled');
            }
        });
    });
}
