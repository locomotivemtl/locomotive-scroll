import { module } from 'modujs';
import { whenReady } from "../utils/fonts";
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FONT } from '../config.js';
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default class extends module {
    constructor(m) {
        super(m);

        // Binding
        this.onProgressBind = this.onProgress.bind(this);

        // Options
        this.delay = parseFloat(this.getData('delay')) || 0.0;
        this.stagger = parseFloat(this.getData('stagger')) || 0.1;

        // Data
        this.metrics = [];
    }

    ///////////////
    // Lifecycle
    ///////////////
    init() {
        this.bindEvents();
        whenReady(FONT.EAGER).then((fonts) => {
            this.onFontsLoaded(fonts);
        });
    }

    destroy() {
        super.destroy();
        this.unbindEvents();

        // Clean up split
        if (this.splitObject) {
            this.splitObject.revert();
        }
    }

    ///////////////
    // Events
    ///////////////
    unbindEvents() {
        window.removeEventListener('progressEvent', this.onProgressBind);
    }

    bindEvents() {
        window.addEventListener('progressEvent', this.onProgressBind);
    }
    
    ///////////////
    // Callbacks
    ///////////////
    onFontsLoaded(fonts) {
        this.split();
    }

    onProgress(e) {
        if (!this.splitObject || !this.splitObject.lines) return;

        const { progress } = e.detail;
        this.splitObject.lines.forEach((line, i) => {
            if (this.metrics[i]) {
                const { from, to } = this.metrics[i];
                const x = gsap.utils.clamp(-25, 0, gsap.utils.mapRange(from, to, -25, 0, progress));
                const opacity = gsap.utils.clamp(0, 1, gsap.utils.mapRange(from, to, 0, 1, progress));
                gsap.set(line, { x, opacity });
            }
        });
    }

    ///////////////
    // Methods
    ///////////////
    split() {
        // Use SplitText.create with autoSplit for automatic resize handling
        this.splitObject = SplitText.create(this.el, {
            type: "lines",
            tag: "span",
            autoSplit: true,
            onSplit: (self) => {
                // This callback is called every time the text is split, including on resize
                this.computeMetrics(self);
            }
        });

        // Initial metrics computation
        this.computeMetrics(this.splitObject);
    }

    computeMetrics(split) {
        this.metrics = split.lines.map((line, i, array) => {
            const from = i / array.length;
            const to = from + (1 / array.length);
            return {
                from,
                to
            };
        });
    }
}
