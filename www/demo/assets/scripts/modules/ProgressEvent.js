import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);

        // Binding
        this.onProgressBind = this.onProgress.bind(this);

        // Data
        this.$progress = this.$('progress')[0];
    }

    ///////////////
    // Lifecyle
    ///////////////
    init() {
        this.bindEvents();
    }

    destroy() {
        this.unbindEvents();
    }

    ///////////////
    // Events
    ///////////////
    bindEvents() {
        window.addEventListener('progressEvent', this.onProgressBind);
    }

    unbindEvents() {
        window.removeEventListener('progressEvent', this.onProgressBind);
    }

    ///////////////
    // Callbacks
    ///////////////
    onProgress(e) {
        const { target, progress } = e.detail;
        this.$progress.textContent = `${Math.round(
            (progress + Number.EPSILON) * 100
        )}%`;
    }
}
