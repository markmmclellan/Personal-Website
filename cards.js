const cards = document.querySelectorAll('.project-card');

const REVEAL_STAGGER = 120;

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries.filter((e) => e.isIntersecting);
            visible.forEach((entry, i) => {
                observer.unobserve(entry.target);
                setTimeout(() => entry.target.classList.add('in'), i * REVEAL_STAGGER);
            });
        },
        { threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
} else {
    cards.forEach((card) => card.classList.add('in'));
}

cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
});
