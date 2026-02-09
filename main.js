// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
document.querySelectorAll('section').forEach(el => observer.observe(el)); // Also observe sections

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate progress bars on scroll
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.progress-fill');
            fills.forEach(fill => {
                // Get target width from data attribute if available, or assume style width is set inline
                // For now, demo.css set style="width:XX%" inline, so we need to reset it to 0 then animate
                const fillStyle = fill.style.width;
                if (fillStyle && fillStyle !== '0px') {
                    // It's already set. We want to animate FROM 0.
                    // But if we reset to 0, we lose the target. 
                    // So we should store it.
                    if (!fill.dataset.width) {
                        fill.dataset.width = fillStyle;
                    }
                    fill.style.width = '0';
                    setTimeout(() => {
                        fill.style.width = fill.dataset.width;
                    }, 100);
                }
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress-container').forEach(el => progressObserver.observe(el));

// Parallax/Hero effects
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
            heroContent.style.opacity = 1 - (scrolled / 700);
        }
    });
}
