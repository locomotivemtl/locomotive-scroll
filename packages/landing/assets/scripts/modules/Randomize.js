import { module } from 'modujs';
import gsap from "gsap";
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin) 

export default class Ramdomize extends module {
    constructor(m) {
        super(m);
    }

    inView({target}) {
        const words = [...target.querySelectorAll("p")]
        words.forEach((word, i) => {
            gsap.to(word, {opacity: 1, duration: 0, delay: 0.1 * i})
            gsap.to(word, {scrambleText: word.innerHTML, duration: 1.5, delay: 0.1 * i})
        })
    }
}
