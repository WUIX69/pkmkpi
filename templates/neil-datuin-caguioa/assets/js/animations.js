// assets/js/animations.js
document.addEventListener('DOMContentLoaded', () => {
    // TIER 1: 3D Perspective Tilt Parallax
    const tiltElements = document.querySelectorAll('.tilt-card, [data-disability-card], .img-overlay-card');
    
    tiltElements.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (document.body.classList.contains('animations-paused')) return;
            card.style.transition = 'transform 0.08s ease-out, box-shadow 0.25s ease';
            card.style.zIndex = '20';
        });

        card.addEventListener('mousemove', (e) => {
            if (document.body.classList.contains('animations-paused')) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.zIndex = '';
            card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0px)';
        });
    });

    // TIER 3: Zero-Dependency Hybrid Scroll Reveal
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate(0, 0) scale(1)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.sr-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
        
        if (el.classList.contains('sr-left')) {
            el.style.transform = 'translateX(-60px)';
        } else if (el.classList.contains('sr-right')) {
            el.style.transform = 'translateX(60px)';
        } else if (el.classList.contains('sr-scale')) {
            el.style.transform = 'scale(0.92) translateY(50px)';
        } else {
            el.style.transform = 'translateY(50px)';
        }
        
        revealObserver.observe(el);
    });
});