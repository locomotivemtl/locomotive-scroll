import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);

        this.events = {
            click: 'toggleScroll'
        }
    }

    init() {
        this.scrollStopped = false
    }

    toggleScroll() {
        if(this.scrollStopped == false) {
            this.call('stop', null, 'Scroll')
            this.scrollStopped = true
        } else if(this.scrollStopped == true) {
            this.call('start', null, 'Scroll')
            this.scrollStopped = false
        }
    }
}
