// ===========================
// COUNTER ANIMATION
// ===========================

function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card h3');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const element = entry.target;
                const targetValue = parseInt(element.textContent);
                element.classList.add('animated');

                const duration = 2000; // 2 seconds
                const start = Date.now();

                const animate = () => {
                    const elapsed = Date.now() - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const currentValue = Math.floor(targetValue * progress);

                    element.textContent = currentValue + '+';

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };

                animate();
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.3 });

    statCards.forEach(card => observer.observe(card));
}

function initCountdown() {
    // Set launch date to 60 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 60);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;

        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===========================
// EMAIL SUBSCRIPTION
// ===========================

function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show' + (isError ? ' error' : '');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function subscribeEmail() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();

    if (!email) {
        showToast('Please enter your email address', true);
        return;
    }

    if (!validateEmail(email)) {
        showToast('Please enter a valid email address', true);
        return;
    }

    // Simulate API call
    console.log('Email submitted:', email);
    
    // Save to localStorage (in production, this would be sent to backend)
    saveEmailToLocalStorage(email);
    
    showToast('🎉 Thanks! We\'ll notify you when we launch.');
    emailInput.value = '';
}

function subscribeEmail2() {
    const emailInput = document.getElementById('emailInput2');
    const email = emailInput.value.trim();

    if (!email) {
        showToast('Please enter your email address', true);
        return;
    }

    if (!validateEmail(email)) {
        showToast('Please enter a valid email address', true);
        return;
    }

    // Simulate API call
    console.log('Email submitted:', email);
    
    // Save to localStorage
    saveEmailToLocalStorage(email);
    
    showToast('🎉 Thanks! You\'re on the list for early access.');
    emailInput.value = '';
}

function saveEmailToLocalStorage(email) {
    try {
        let emails = JSON.parse(localStorage.getItem('buzzcraft_emails')) || [];
        
        // Avoid duplicates
        if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem('buzzcraft_emails', JSON.stringify(emails));
        }
    } catch (e) {
        console.error('Error saving email:', e);
    }
}

// ===========================
// KEYBOARD SUPPORT
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize countdown
    initCountdown();

    // Initialize counter animations
    animateCounters();

    // Email input Enter key support
    const emailInputs = document.querySelectorAll('.email-input');
    emailInputs.forEach((input) => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                if (input.id === 'emailInput') {
                    subscribeEmail();
                } else if (input.id === 'emailInput2') {
                    subscribeEmail2();
                }
            }
        });
    });

    // Smooth scroll link handling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .stat-card, .nav-links a'
    );
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===========================
// PERFORMANCE: LAZY LOAD FONTS
// ===========================

if (document.fonts) {
    document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
    });
}

// ===========================
// ANALYTICS TRACKING (OPTIONAL)
// ===========================

function trackEvent(eventName, eventData = {}) {
    console.log('Event:', eventName, eventData);
    // In production, send to analytics service
}

// Track page view
window.addEventListener('load', () => {
    trackEvent('page_view', {
        page: 'coming-soon',
        timestamp: new Date().toISOString()
    });
});

// Track CTA clicks
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('cta_click', {
                text: btn.textContent,
                timestamp: new Date().toISOString()
            });
        });
    });
});
