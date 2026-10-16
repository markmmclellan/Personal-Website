const typedEl = document.getElementById('typed-text');

const TYPE_SPEED = 90;
const DELETE_SPEED = 45;
const HOLD_TIME = 1500;
const GAP_TIME = 300;

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
let timer = null;

function currentPhrases() {
    return TYPED_PHRASES[document.documentElement.lang === 'ja' ? 'ja' : 'en'];
}

function tick() {
    const phrases = currentPhrases();
    const phrase = phrases[phraseIndex];

    if (!deleting) {
        charIndex++;
        typedEl.textContent = phrase.slice(0, charIndex);

        if (charIndex === phrase.length) {
            deleting = true;
            timer = setTimeout(tick, HOLD_TIME);
            return;
        }
        timer = setTimeout(tick, TYPE_SPEED);
        return;
    }

    charIndex--;
    typedEl.textContent = phrase.slice(0, charIndex);

    if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timer = setTimeout(tick, GAP_TIME);
        return;
    }
    timer = setTimeout(tick, DELETE_SPEED);
}

function restart() {
    clearTimeout(timer);
    phraseIndex = 0;
    charIndex = 0;
    deleting = false;
    typedEl.textContent = '';
    tick();
}

if (typedEl) {
    document.addEventListener('langchange', restart);
    restart();
}
