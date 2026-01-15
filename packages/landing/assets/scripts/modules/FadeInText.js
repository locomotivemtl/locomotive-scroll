import { module } from 'modujs';
import gsap from "gsap";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText);

export default class extends module {
    constructor(m) {
        super(m);

        // Binding
        this.onFadeinTextProgressBind = this.onFadeinTextProgress.bind(this);

        // UI
        this.$texts = this.el;

        // Data
        this.progress = 0;
        this.metrics = [];
        this.baseColor = getComputedStyle(this.el).getPropertyValue('--color-cta-fadein');
        this.targetColor = getComputedStyle(this.el).getPropertyValue('--color');
    }

    ///////////////
    // Lifecycle
    ///////////////
    init() {
        // Bind
        this.bindEvents();

        // Split with autoSplit for automatic resize handling
        this.splitText();
    }

    destroy() {
        // Unbind
        this.unbindEvents();

        // Clean up split
        if (this.split) {
            this.split.revert();
        }
    }

    ///////////////
    // Events
    ///////////////
    bindEvents() {
        window.addEventListener("fadeinTextProgress", this.onFadeinTextProgressBind);
    }

    unbindEvents() {
        window.removeEventListener("fadeinTextProgress", this.onFadeinTextProgressBind);
    }

    ///////////////
    // Callback
    ///////////////
    onFadeinTextProgress(e) {
        const {target, progress} = e.detail;
        if (!this.el.contains(target) || !this.split) return;
        this.progress = progress;
        this.computeProgress();
    }

    ///////////////
    // Methods
    ///////////////
    splitText() {
        // Use SplitText.create with autoSplit for automatic resize handling
        this.split = SplitText.create(this.$texts, {
            type: "lines",
            linesClass: "c-fadein-text_line",
            autoSplit: true,
            onSplit: (self) => {
                // This callback is called every time the text is split, including on resize
                this.computeMetrics(self);

                requestAnimationFrame(() => {
                    this.computeProgress();
                });
            }
        });

        // Initial metrics computation
        this.computeMetrics(this.split);
    }

    computeMetrics(split) {
        // Reset metrics
        this.metrics = [];

        const widths = split.lines.map(line => line.getBoundingClientRect().width);
        const totalWidth = widths.reduce((total, width) => total + width, 0);
        let widthIncrementor = 0;

        for (let index = 0; index < split.lines.length; index++) {
            // Compute metrics
            const from = widthIncrementor / totalWidth;
            const ratio = widths[index] / totalWidth;
            widthIncrementor += widths[index];
            this.metrics.push({
                from: from,
                to: from + ratio
            });
        }
    }

    computeProgress() {
        for (let index = 0; index < this.split.lines.length; index++) {
            const $line = this.split.lines[index];
            const { from, to } =  this.metrics[index];
            const clampedProgress = gsap.utils.clamp(0, 1, gsap.utils.mapRange(from, to, 0, 1, this.progress))
            $line.style.setProperty('--progress', `${clampedProgress}`)

            this.updateGradient($line, clampedProgress)
        }
    }

    updateGradient($item, progress) {
        const offset = 100;
        const x = progress;
        const g1 = 0
        const g5 = 100

        const g3 = gsap.utils.mapRange(0, 1, -offset, 100 + offset, x)

        const g2 = Math.max(g3 - offset, 0)
        const g4 = Math.min(g3 + offset, 100)

        const background = `linear-gradient(to right, ${this.targetColor} ${g1}%, ${this.targetColor} ${g2}%, ${this.targetColor} ${g3}%, ${this.baseColor} ${g4}%, ${this.baseColor} ${g5}%)`
        $item.style.setProperty('--background', `${background}`)
    }
}
