import { module } from 'modujs';
export default class extends module {
    constructor(m) {
        super(m);

        // Binding
        this.onScrollCallBind = this.onScrollCall.bind(this);

        // Data
        this.$event = this.$('event')[0];
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
        window.addEventListener('scrollEvent', this.onScrollCallBind);
    }

    unbindEvents() {
        window.removeEventListener('scrollEvent', this.onScrollCallBind);
    }

    ///////////////
    // Callbacks
    ///////////////
    onScrollCall(e) {
        const { target, way, from } = e.detail;
        this.$event.textContent = `scrollEvent ${way}`;
    }
}
