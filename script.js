// AOS Evidence Repository - Production JavaScript
// Mobile-first, security-hardened, analytics-enabled

// =============================================================================
// MATOMO ANALYTICS INTEGRATION
// =============================================================================

// Matomo configuration from Cathedral Network
const MATOMO_URL = 'https://analytics.git-cathedral.com/';
const MATOMO_SITE_ID = '16'; // aos-evidence.com site ID

(function () {
    var _paq = window._paq = window._paq || [];

    // Track page view
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);

    // Track downloads
    _paq.push(['setDownloadExtensions', 'md|pdf|zip|tar|gz']);
    _paq.push(['trackAllContentImpressions']);

    // SPA-ready tracking
    _paq.push(['enableHeartBeatTimer']);

    (function () {
        var u = MATOMO_URL;
        _paq.push(['setTrackerUrl', u + 'matomo.php']);
        _paq.push(['setSiteId', MATOMO_SITE_ID]);
        var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
        g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
    })();
})();

// Track custom events
function trackEvent(category, action, name, value) {
    if (window._paq) {
        window._paq.push(['trackEvent', category, action, name, value]);
    }
}

// =============================================================================
// COOKIE CONSENT (GDPR Compliant)
// =============================================================================

class CookieConsent {
    constructor() {
        this.STORAGE_KEY = 'aos_evidence_consent';
        this.COOKIE_NAME = 'aos_evidence_consent';
        this.COOKIE_EXPIRY = 365; // days

        this.init();
    }

    init() {
        // Check if consent already given (localStorage or cookie)
        const consent = this.getConsent();
        if (consent === null) {
            // No decision made yet
            this.showBanner();
        } else if (consent === true) {
            // User accepted
            this.enableAnalytics();
        } else {
            // User declined
            this.disableAnalytics();
        }
    }

    getConsent() {
        // Try localStorage first (more reliable)
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored !== null) {
            return stored === 'true';
        }

        // Fallback to cookie
        const cookie = this.getCookie(this.COOKIE_NAME);
        if (cookie !== null) {
            return cookie === 'true';
        }

        return null; // No decision made
    }

    showBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <div class="cookie-text">
                    <h4>Privacy & Analytics</h4>
                    <p>We use Matomo analytics (self-hosted, privacy-respecting) to understand how our evidence is accessed. No third-party tracking. <a href="PRIVACY.html">Privacy Policy</a></p>
                </div>
                <div class="cookie-buttons">
                    <button class="btn-accept" onclick="cookieConsent.accept()">Accept Analytics</button>
                    <button class="btn-decline" onclick="cookieConsent.decline()">Decline</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        // Fade in
        setTimeout(() => banner.classList.add('visible'), 100);
    }

    accept() {
        this.saveConsent(true);
        this.enableAnalytics();
        this.hideBanner();
        trackEvent('Cookie Consent', 'Accept', 'User accepted analytics');
    }

    decline() {
        this.saveConsent(false);
        this.disableAnalytics();
        this.hideBanner();
    }

    saveConsent(accepted) {
        const value = accepted ? 'true' : 'false';

        // Save to localStorage (primary)
        try {
            localStorage.setItem(this.STORAGE_KEY, value);
        } catch (e) {
            console.warn('localStorage not available:', e);
        }

        // Save to cookie (fallback)
        this.setCookie(this.COOKIE_NAME, value, this.COOKIE_EXPIRY);
    }

    hideBanner() {
        const banner = document.querySelector('.cookie-banner');
        if (banner) {
            banner.classList.remove('visible');
            setTimeout(() => banner.remove(), 300);
        }
    }

    enableAnalytics() {
        // Matomo is already loaded, just ensure tracking is enabled
        if (window._paq) {
            window._paq.push(['setConsentGiven']);
            window._paq.push(['setCookieConsentGiven']);
        }
    }

    disableAnalytics() {
        if (window._paq) {
            window._paq.push(['forgetConsentGiven']);
            window._paq.push(['deleteCookies']);
        }
    }

    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}

// Initialize cookie consent
const cookieConsent = new CookieConsent();

// =============================================================================
// SMOOTH SCROLL NAVIGATION
// =============================================================================

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without jumping
                history.pushState(null, null, targetId);

                // Track navigation
                trackEvent('Navigation', 'Scroll', targetId);
            }
        });
    });

    // Active nav link highlighting on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section[id]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// =============================================================================
// DOCUMENT TRACKING
// =============================================================================

// Track document downloads/views
document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');

    // Track document views
    if (href && href.endsWith('.html')) {
        const docName = href.split('/').pop().replace('.html', '');
        trackEvent('Document', 'View', docName);
    }

    // Track external links
    if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
        if (!href.includes(window.location.hostname)) {
            trackEvent('External Link', 'Click', href);
        }
    }

    // Track GitHub clones
    if (href && href.includes('github.com')) {
        trackEvent('GitHub', 'Click', 'Repository Link');
    }
});

// =============================================================================
// COPY CODE BLOCKS
// =============================================================================

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.code-block code').forEach(block => {
        // Add copy button
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.onclick = function () {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.textContent = 'Copied!';
                button.classList.add('copied');
                trackEvent('Code', 'Copy', block.textContent.substring(0, 50));

                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            });
        };

        block.parentElement.style.position = 'relative';
        block.parentElement.appendChild(button);
    });
});

// =============================================================================
// SECURITY HEADERS (CSP Reporting)
// =============================================================================

// Report CSP violations if any
if ('securitypolicyviolation' in document) {
    document.addEventListener('securitypolicyviolation', (e) => {
        // Log CSP violation for security monitoring
        console.warn('CSP Violation:', {
            blockedURI: e.blockedURI,
            violatedDirective: e.violatedDirective,
            originalPolicy: e.originalPolicy
        });

        trackEvent('Security', 'CSP Violation', e.violatedDirective);
    });
}

// =============================================================================
// LAZY LOADING (Performance)
// =============================================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// =============================================================================
// MOBILE MENU (if needed)
// =============================================================================

function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Add mobile toggle if screen is small
    if (window.innerWidth < 768) {
        const toggle = document.createElement('button');
        toggle.className = 'mobile-menu-toggle';
        toggle.innerHTML = '☰';
        toggle.onclick = function () {
            document.querySelector('.nav-links').classList.toggle('mobile-open');
            trackEvent('Navigation', 'Mobile Menu', 'Toggle');
        };

        navbar.querySelector('.container').prepend(toggle);
    }
}

// Initialize on load and resize
window.addEventListener('load', initMobileMenu);
window.addEventListener('resize', debounce(initMobileMenu, 250));

// =============================================================================
// PERFORMANCE TRACKING
// =============================================================================

window.addEventListener('load', function () {
    // Track page load performance
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

        trackEvent('Performance', 'Page Load', 'Load Time', pageLoadTime);

        // Track time to interactive
        if (perfData.domInteractive) {
            const timeToInteractive = perfData.domInteractive - perfData.navigationStart;
            trackEvent('Performance', 'Time to Interactive', 'TTI', timeToInteractive);
        }
    }
});

// =============================================================================
// UTILITIES
// =============================================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =============================================================================
// ERROR TRACKING
// =============================================================================

window.addEventListener('error', function (e) {
    // Track JavaScript errors for debugging
    trackEvent('Error', 'JavaScript', `${e.message} at ${e.filename}:${e.lineno}`);
});

window.addEventListener('unhandledrejection', function (e) {
    // Track unhandled promise rejections
    trackEvent('Error', 'Promise Rejection', e.reason);
});

// =============================================================================
// PRINT TRACKING
// =============================================================================

window.addEventListener('beforeprint', function () {
    trackEvent('Document', 'Print', window.location.pathname);
});

// =============================================================================
// EXIT INTENT (Optional - track when users are about to leave)
// =============================================================================

let exitIntentTriggered = false;

document.addEventListener('mouseout', function (e) {
    if (e.clientY < 0 && !exitIntentTriggered) {
        exitIntentTriggered = true;
        trackEvent('Engagement', 'Exit Intent', 'Mouse left viewport');
    }
});

// =============================================================================
// SCROLL DEPTH TRACKING
// =============================================================================

let scrollDepthMarks = [25, 50, 75, 100];
let scrollDepthTracked = new Set();

window.addEventListener('scroll', debounce(function () {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    scrollDepthMarks.forEach(mark => {
        if (scrollPercent >= mark && !scrollDepthTracked.has(mark)) {
            scrollDepthTracked.add(mark);
            trackEvent('Engagement', 'Scroll Depth', `${mark}%`);
        }
    });
}, 500));

// =============================================================================
// ACCESSIBILITY
// =============================================================================

// Ensure keyboard navigation works
document.addEventListener('keydown', function (e) {
    // ESC closes cookie banner
    if (e.key === 'Escape') {
        const banner = document.querySelector('.cookie-banner');
        if (banner) {
            cookieConsent.decline();
        }
    }
});

// Skip to content link for screen readers
document.addEventListener('DOMContentLoaded', function () {
    const skipLink = document.createElement('a');
    skipLink.href = '#overview';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to main content';
    document.body.prepend(skipLink);
});

// =============================================================================
// MOBILE HAMBURGER MENU
// =============================================================================

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking nav links
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

console.log('AOS Evidence Repository - Loaded');
console.log('Analytics: Matomo (self-hosted)');
console.log('Privacy: GDPR compliant');
console.log('Security: CSP enabled');
