import { Scroll } from '@scripts/classes/Scroll';
import { $screenDebounce } from "../stores/screen";
import { setViewportSize } from './utils/setViewportSize';

// Initialize the Scroll class
Scroll.init();

$screenDebounce.subscribe(() => {
    setViewportSize();
});

// Progress event
const $progressEventLabel = document.querySelector('[data-custom-event="progress"]') as HTMLElement
const onProgressEventCall = (e: CustomEvent) => {
    const { progress } = e.detail;
    $progressEventLabel.textContent = `${Math.round(
        (progress + Number.EPSILON) * 100
    )}%`;
}
window.addEventListener('progressEvent', onProgressEventCall as EventListener);

// Progress position
const $positionProgresses = Array.from(document.querySelectorAll('[data-position-progress]'))
const onProgressPositionCall = (e: CustomEvent) => {
    const { target, progress } = e.detail;
    const $positionProgress = $positionProgresses.find(($el) => $el.parentElement === target) as HTMLElement;
    $positionProgress.textContent = `${Math.round(
        (progress + Number.EPSILON) * 100
    )}%`;
}
window.addEventListener('progressPositionEvent', onProgressPositionCall as EventListener);

// Custom event
const $customEventLabel = document.querySelector('[data-custom-event="event"]') as HTMLElement
const onCustomEventCall = (e: CustomEvent) => {
    const { way } = e.detail;
    $customEventLabel.textContent = `scrollEvent ${way}`;
}
window.addEventListener('scrollEvent', onCustomEventCall as EventListener);
