import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);

        this.$progress = this.$('progress')[0]
    }

    init() {
    }

    onScrollProgress(progress) {
        this.$progress.textContent = `${Math.round((progress + Number.EPSILON) * 100)}%`
    }
}
