import { module } from 'modujs';
import { FONT } from '../config';
import { whenReady } from '../utils/fonts';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        whenReady(FONT.EAGER).then((fonts) => this.onFontsLoaded(fonts));
    }

    onFontsLoaded(fonts) {
        console.log('Example: Eager Fonts Loaded!', fonts)
    }
}
