import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
    }

    hello() {
        console.log('hello', this.el);
    }
}
