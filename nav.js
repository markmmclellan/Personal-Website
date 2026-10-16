const navLinks = [...document.querySelectorAll('.navbar-right a[href^="#"]')];
const navSections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

const SPY_OFFSET = 140;

function updateActiveLink() {
    const y = window.scrollY + SPY_OFFSET;
    let current = navSections[0];

    navSections.forEach((section) => {
        if (section.offsetTop <= y) current = section;
    });

    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) current = navSections[navSections.length - 1];

    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`);
    });
}

if (navSections.length) {
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);
    updateActiveLink();
}
