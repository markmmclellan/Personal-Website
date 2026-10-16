const LANG_KEY = 'site-lang';
const rootEl = document.documentElement;

const textEls = [...document.querySelectorAll('[data-i18n]')];
const placeholderEls = [...document.querySelectorAll('[data-i18n-placeholder]')];
const ariaEls = [...document.querySelectorAll('[data-i18n-aria]')];
const langButtons = [...document.querySelectorAll('.lang-toggle button')];

textEls.forEach((el) => { el.dataset.en = el.innerHTML; });
placeholderEls.forEach((el) => { el.dataset.enPlaceholder = el.getAttribute('placeholder'); });
ariaEls.forEach((el) => { el.dataset.enAria = el.getAttribute('aria-label'); });

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

function initialLanguage() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl === 'ja' || fromUrl === 'en') return fromUrl;

    let saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) { /* storage unavailable */ }
    if (saved === 'ja' || saved === 'en') return saved;

    return (navigator.language || '').toLowerCase().startsWith('ja') ? 'ja' : 'en';
}

langButtons.forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang, true));
});

setLanguage(initialLanguage(), false);
