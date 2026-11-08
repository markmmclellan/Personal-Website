const LANG_KEY = 'site-lang';
const DOORS_MS = 650;
const HOLD_MS = 220;
const rootEl = document.documentElement;

const textEls = [...document.querySelectorAll('[data-i18n]')];
const placeholderEls = [...document.querySelectorAll('[data-i18n-placeholder]')];
const ariaEls = [...document.querySelectorAll('[data-i18n-aria]')];
const langButtons = [...document.querySelectorAll('.lang-toggle button')];

textEls.forEach((el) => { el.dataset.en = el.innerHTML; });
placeholderEls.forEach((el) => { el.dataset.enPlaceholder = el.getAttribute('placeholder'); });
ariaEls.forEach((el) => { el.dataset.enAria = el.getAttribute('aria-label'); });

const shoji = document.createElement('div');
shoji.className = 'shoji';
shoji.setAttribute('aria-hidden', 'true');
shoji.style.setProperty('--shoji-ms', `${DOORS_MS}ms`);
shoji.innerHTML = '<div class="shoji-panel shoji-left"></div><div class="shoji-panel shoji-right"></div>';
document.body.appendChild(shoji);

let transitioning = false;

function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

function setLanguage(lang, remember) {
    const ja = lang === 'ja';
    const dict = TRANSLATIONS.ja;

    textEls.forEach((el) => {
        el.innerHTML = ja && dict[el.dataset.i18n] !== undefined ? dict[el.dataset.i18n] : el.dataset.en;
    });
    placeholderEls.forEach((el) => {
        const t = dict[el.dataset.i18nPlaceholder];
        el.setAttribute('placeholder', ja && t !== undefined ? t : el.dataset.enPlaceholder);
    });
    ariaEls.forEach((el) => {
        const t = dict[el.dataset.i18nAria];
        el.setAttribute('aria-label', ja && t !== undefined ? t : el.dataset.enAria);
    });

    rootEl.lang = ja ? 'ja' : 'en';
    langButtons.forEach((btn) => {
        const on = btn.dataset.lang === (ja ? 'ja' : 'en');
        btn.classList.toggle('on', on);
        btn.setAttribute('aria-pressed', String(on));
    });

    if (remember) {
        try { localStorage.setItem(LANG_KEY, ja ? 'ja' : 'en'); } catch (e) { /* storage unavailable */ }
    }
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: ja ? 'ja' : 'en' } }));
}

// Doors slide shut, the text swaps while the page is hidden, then the doors slide open.
function switchLanguage(lang) {
    if (transitioning || lang === (rootEl.lang === 'ja' ? 'ja' : 'en')) return;

    if (prefersReducedMotion()) {
        setLanguage(lang, true);
        return;
    }

    transitioning = true;
    shoji.classList.add('active', 'closed');

    setTimeout(() => {
        setLanguage(lang, true);
        setTimeout(() => {
            shoji.classList.remove('closed');
            setTimeout(() => {
                shoji.classList.remove('active');
                transitioning = false;
            }, DOORS_MS);
        }, HOLD_MS);
    }, DOORS_MS);
}

function initialLanguage() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl === 'ja' || fromUrl === 'en') return fromUrl;

    let saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) { /* storage unavailable */ }
    if (saved === 'ja' || saved === 'en') return saved;

    return (navigator.language || '').toLowerCase().startsWith('ja') ? 'ja' : 'en';
}

langButtons.forEach((btn) => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

setLanguage(initialLanguage(), false);
