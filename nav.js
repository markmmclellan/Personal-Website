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

    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`);
    });
}

if (navSections.length) {
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);
    updateActiveLink();
}
