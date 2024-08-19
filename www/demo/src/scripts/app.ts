import { Scroll } from '@scripts/classes/Scroll';
import { $screenDebounce } from "../stores/screen";
import { setViewportSize } from './utils/setViewportSize';

// Initialize the Scroll class
Scroll.init();

$screenDebounce.subscribe(() => {
    setViewportSize();
});

// Progress event
const $progressEventLabel = document.querySelector('[data-custom-event="progress"]')
const onProgressEventCall = (e) => {
    const { target, progress } = e.detail;
    $progressEventLabel.textContent = `${Math.round(
        (progress + Number.EPSILON) * 100
    )}%`;
}
window.addEventListener('progressEvent', onProgressEventCall);

// Progress position
const $positionProgresses = Array.from(document.querySelectorAll('[data-position-progress]'))
const onProgressPositionCall = (e) => {
    const { target, progress } = e.detail;
    const $positionProgress = $positionProgresses.find(($el) => $el.parentElement === target)
    $positionProgress.textContent = `${Math.round(
        (progress + Number.EPSILON) * 100
    )}%`;
}
window.addEventListener('progressPositionEvent', onProgressPositionCall);

// Custom event
const $customEventLabel = document.querySelector('[data-custom-event="event"]')
const onCustomEventCall = (e) => {
    const { target, way, from } = e.detail;
    $customEventLabel.textContent = `scrollEvent ${way}`;
}
window.addEventListener('scrollEvent', onCustomEventCall);
