import { module as Module } from "modujs";
import { whenReady } from "../utils/fonts";
import gsap from "gsap";
import { CUSTOM_EVENT, FONT } from "../config";

export default class extends Module {
    constructor(m) {
        super(m);

        // Binding
        this.onUpdateBind = this.onUpdate.bind(this);
        this.onResizeBind = this.onResize.bind(this);
        this.onFontsLoadedBind = this.onFontsLoaded.bind(this);

        // UI
        this.$container = this.$("container")[0];
        this.$pattern = this.$("pattern")[0];
        this.prevCount = null;

        // Data
        this.currentTranslate = 0;
        this.maxTranslate = this.$container.offsetWidth;
        this.idleVelocity = 1;
        this.scrollVelocity = 0.1;
        this.scrollLerp = 0.8;
        this.scrollDirection = 1;
        this.railDirection = this.getData("direction");
        this.showFrom = parseInt(this.getData("from")) || false;
        this.showTo = parseInt(this.getData("to")) || false;

        this.data = [];
        this.$items = [];
        this.glyphs = ["🛑", "🔝", "🍸", "⛺", "😖"]
    }

    ///////////////
    // Lifecyle
    ///////////////
    init() {
        this.bindEvents();

        whenReady(FONT.EAGER).then((fonts) => this.onFontsLoaded(fonts));
    }

    destroy() {
        super.destroy();
        this.unbindEvents();
        this.stop();
    }

    ///////////////
    // Events
    ///////////////
    bindEvents() {
        window.addEventListener(CUSTOM_EVENT.RESIZE_END, this.onResizeBind);
    }

    unbindEvents() {
        window.removeEventListener(CUSTOM_EVENT.RESIZE_END, this.onResizeBind);
    }

    ///////////////
    // Callbacks
    ///////////////
    onResize() {
        this.repeatPattern();
    }

    onFontsLoaded() {
        this.repeatPattern();
    }

    onUpdate() {
        this.currentTranslate =
            (this.currentTranslate +
                this.idleVelocity * this.scrollDirection * this.railDirection +
                this.scrollVelocity *
                    this.scrollDirection *
                    this.railDirection) %
            this.maxTranslate;

        for (const [index, $items] of this.$items.entries()) {
            let translate;
            const right = this.data[index].left + this.data[index].width;

            if (this.currentTranslate < right * -1) {
                translate = this.maxTranslate;
            } else if (this.currentTranslate > this.maxTranslate - right) {
                translate = -this.maxTranslate;
            } else {
                translate = 0;
            }

            this.data[index].translate = translate;
            $items.style.transform = `translate3d(${translate}px,0,0)`;
        }

        this.$container.style.transform = `translate3d(${this.currentTranslate}px,0,0)`;
    }

    onScroll(scrollData) {
        const { velocity, direction } = scrollData;
        this.scrollDirection =
            direction != 0 ? direction : this.scrollDirection;
        this.scrollDirection = this.scrollDirection * -1
        this.scrollVelocity = Math.round(Math.abs(velocity)) * this.scrollLerp;
    }

    ///////////////
    // Methods
    ///////////////
    start() {
        if (this.isPlaying) return;
        this.isPlaying = true;
        gsap.ticker.add(this.onUpdateBind);
    }

    stop() {
        if (!this.isPlaying) return;
        this.isPlaying = false;
        gsap.ticker.remove(this.onUpdateBind);
    }

    toggle(e) {
        const { way } = e;
        way === "enter" ? this.start() : this.stop();
    }

    computeMetrics(reset = false) {
        if (reset) {
            this.$items = this.el.querySelectorAll("[data-rail-item]");
            this.data = [];
            this.currentTranslate = 0;
            for (const [index, $items] of this.$items.entries()) {
                const { left, width } = $items.getBoundingClientRect();
                this.data[index] = {
                    left,
                    width,
                    translate: 0,
                };
            }
        } else {
            for (const [index, $items] of this.$items.entries()) {
                const { left, width } = $items.getBoundingClientRect();
                this.data[index].left =
                    left - this.currentTranslate - this.data[index].translate;
                this.data[index].width = width;
            }
        }
    }

    repeatPattern() {
        if (
            (this.showFrom && window.innerWidth < this.showFrom) ||
            (this.showTo && window.innerWidth > this.showTo)
        ) {
            return;
        }

        const patternWidth = this.$pattern.offsetWidth;
        const repeatCount = Math.ceil(window.innerWidth / patternWidth) + 1; // Add one more for security

        this.maxTranslate = repeatCount * patternWidth;

        if (repeatCount === this.prevCount) return this.computeMetrics();

        this.prevCount = repeatCount;

        const $currentClones = this.$container.querySelectorAll("[data-clone]");

        for (const $currentClone of $currentClones) {
            $currentClone.remove();
        }

        for (let index = 0; index < repeatCount - 1; index++) {
            const $clone = this.$pattern.cloneNode(true);
            // $clone.querySelector("p").appendChild(this.createGlyph(0))
            $clone.querySelector(".c-rail_glyph").innerHTML = this.glyphs[index]
            $clone.setAttribute("data-clone", "");
            $clone.setAttribute("aria-hidden", "true");
            this.$container.appendChild($clone);
        }

        requestAnimationFrame(() => {
            this.computeMetrics(true);
        });
    }
}
