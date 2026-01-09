import { module } from 'modujs';
import { whenReady } from "../utils/fonts";
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FONT } from '../config.js';
gsap.registerPlugin(SplitText) 
gsap.registerPlugin(ScrollTrigger)

export default class extends module {
    constructor(m) {
        super(m);

        // Binding
        this.onResizeBind = this.onResize.bind(this);
        this.onProgressBind = this.onProgress.bind(this);

        // Options
        this.delay = parseFloat(this.getData('delay')) || 0.0;          
        this.stagger = parseFloat(this.getData('stagger')) || 0.1;     
    }

    ///////////////
    // Lifecycle
    ///////////////
    init() {
        this.bindEvents()
        whenReady(FONT.EAGER).then((fonts) => {
            this.onFontsLoaded(fonts)
        });
    }

    destroy() {
        super.destroy();
        this.unbindEvents()
    }

    ///////////////
    // Events
    ///////////////
    unbindEvents() {
        window.removeEventListener("resize", this.onResizeBind)
        window.removeEventListener('progressEvent', this.onProgressBind);
    }

    bindEvents() {
        window.addEventListener("resize", this.onResizeBind)
        window.addEventListener('progressEvent', this.onProgressBind);
    }
    
    ///////////////
    // Callbacks
    ///////////////
    onResize() {
        this.reSplit()
    }

    onFontsLoaded(fonts) {
        this.reSplit()
    }

    onProgress(e) {
        // const clampedProgress = gsap.utils.clamp(0, 1, gsap.utils.mapRange(from, to, 0, 1, progress))
        // console.log("on progress", e.detail.progress, this.splitObject.lines)
        const { progress } = e.detail;
        this.splitObject.lines.forEach((line, i) => {
            const { from, to } = this.metrics[i];
            const x = gsap.utils.clamp(-25, 0, gsap.utils.mapRange(from, to, -25, 0, progress))
            const opacity = gsap.utils.clamp(0, 1, gsap.utils.mapRange(from, to, 0, 1, progress))
            gsap.set(line, {x, opacity})
        })
    }

    ///////////////
    // Methods
    ///////////////s
    split() {
        this.splitObject = new SplitText(this.el, {
            type: "lines", 
            tag: "span"
        });

        this.metrics = this.splitObject.lines.map((line, i, array) => {
            const from = i / array.length;
            const to = from + (1 / array.length)
            return {
                from,
                to
            }
        })
    }

    reSplit() {
        this.splitObject?.revert?.();

        requestAnimationFrame(() => {
            this.split();
        })
    }
}
