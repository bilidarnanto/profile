/**
 * Bili Darnanto Susilo - Portfolio Scripts
 * Version: 2.0 | Modular & Maintainable
 */

document.addEventListener("DOMContentLoaded", () => {
    initLanguageToggle();
    initNavbarScroll();
    initExpandableSections();
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


/**
 * Expandable Sections System
 * Allows collapsing/expanding all sections
 */
function initExpandableSections() {
    const sectionWrappers = document.querySelectorAll('.section-wrapper');
    if (sectionWrappers.length === 0) return;

    // Buat tombol global
    const firstSection = document.querySelector('.section-wrapper');
    const globalToggleDiv = document.createElement('div');
    globalToggleDiv.className = 'global-toggle-wrapper';
    globalToggleDiv.innerHTML = `
        <button class="btn-toggle-all" id="expandAllBtn" title="Expand All Sections">
            <i class="fa-solid fa-chevron-down"></i> <span class="lang-id">Buka Semua</span><span class="lang-en">Expand All</span>
        </button>
        <button class="btn-toggle-all" id="collapseAllBtn" title="Collapse All Sections">
            <i class="fa-solid fa-chevron-up"></i> <span class="lang-id">Tutup Semua</span><span class="lang-en">Collapse All</span>
        </button>
    `;
    firstSection.parentNode.insertBefore(globalToggleDiv, firstSection);

    // Setup setiap section
    sectionWrappers.forEach((wrapper, index) => {
        const header = wrapper.querySelector('.section-header');
        const content = wrapper.querySelector('.section-content');
        
        if (!header || !content) return;

        // Bungkus header agar clickable
        const headerWrapper = document.createElement('div');
        headerWrapper.className = 'section-header-clickable';
        header.parentNode.insertBefore(headerWrapper, header);
        headerWrapper.appendChild(header);

        // Tambahkan toggle indicator
        const indicator = document.createElement('span');
        indicator.className = 'toggle-indicator';
        indicator.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
        header.appendChild(indicator);

        // Default: semua terbuka, kecuali section terakhir bisa ditutup
        const isOpen = true;
        if (!isOpen) {
            content.classList.add('collapsed');
            indicator.classList.add('collapsed');
        }

        // Click handler
        headerWrapper.addEventListener('click', () => {
            const isCollapsed = content.classList.contains('collapsed');
            
            if (isCollapsed) {
                // Expand
                content.classList.remove('collapsed');
                indicator.classList.remove('collapsed');
            } else {
                // Collapse
                content.classList.add('collapsed');
                indicator.classList.add('collapsed');
            }
        });
    });

    // Tombol Expand All
    document.getElementById('expandAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.section-content').forEach(c => c.classList.remove('collapsed'));
        document.querySelectorAll('.toggle-indicator').forEach(i => i.classList.remove('collapsed'));
    });

    // Tombol Collapse All
    document.getElementById('collapseAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.section-content').forEach(c => c.classList.add('collapsed'));
        document.querySelectorAll('.toggle-indicator').forEach(i => i.classList.add('collapsed'));
    });
}


/**
 * External Link Tracking
 * Logs clicks on ResearchGate, Google Scholar, etc.
 */
function initExternalLinkTracking() {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const url = this.getAttribute('href');
            if (url && url.includes('researchgate.net')) {
                console.log('📊 ResearchGate visit tracked');
            } else if (url && url.includes('scholar.google.com')) {
                console.log('📊 Google Scholar visit tracked');
            }
        });
    });
}
