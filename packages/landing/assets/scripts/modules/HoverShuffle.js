import { module } from 'modujs';
import { gsap } from 'gsap';
const DURATION = 0.25;
const SHUFFLE_PATTERN = /\p{Extended_Pictographic}|\r|\n|./gu

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        this.onItemEnterBind = this.onItemEnter.bind(this)
        this.onItemLeaveBind = this.onItemLeave.bind(this)

        this.update();
    }

    update() {
        this.reset();
        this.el.addEventListener('mouseenter', this.onItemEnterBind)
        this.el.addEventListener('mouseleave', this.onItemLeaveBind)
        
    }

    reset() {
        this.el.removeEventListener('mouseenter', this.onItemEnterBind)
        this.el.removeEventListener('mouseleave', this.onItemLeaveBind)
    }

    shuffle(input) {
        var a = typeof input == 'string' ? input.split("") : input,
            n = a.length;
    
        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }

    onItemEnter(e) {
        const $el = e.currentTarget;

        let targets = [];
        if($el.dataset.hoverShuffle == 'children') {
            $el.querySelectorAll('[data-hover-shuffle-child]').forEach(child => {
                targets.push(child)
                child.setAttribute('aria-label', child.innerText)
            })
        } else {
            targets = [$el]
            $el.setAttribute('aria-label', $el.innerText)
        }

        this.tw = gsap.timeline({
            onComplete: () => {
                targets.forEach($target => {
                    $target.innerText = $target.getAttribute('aria-label')
                    $target.removeAttribute('aria-label')
                })
            }
        })

        const shufflePerSecond = 4;
        const shuffleDelay = DURATION/shufflePerSecond

        for(let i = 0; i < shufflePerSecond; i++) {
            for(let $target of targets) {
                this.tw.add(() => {
                    this.shuffleElementTexts($target, this.shuffle)
                }, shuffleDelay*i)
            }
        }
    }

    onItemLeave(e) {
        this.tw && this.tw.kill()

        const $el = e.currentTarget;
        let targets = [];
        if($el.dataset.hoverShuffle == 'children') {
            $el.querySelectorAll('[data-hover-shuffle-child]').forEach(child => {
                targets.push(child)
            })
        } else {
            targets = [$el]
        }

        targets.forEach($target => {
            if($target.getAttribute('aria-label')) $target.innerText = $target.getAttribute('aria-label')
            $target.removeAttribute('aria-label')
        })
    }

    shuffleElementTexts(item, shuffleFn) {
        if(!item.children.length && item.innerText) {
            // Wrap line breaks with spaces
            const words = item.innerText.replace('\n', ' \n ').split(' ')
            // Actually shuffle each "word"
            for(let i=0;i<words.length;i++) {
                const chars = [...words[i].matchAll(SHUFFLE_PATTERN)].map(item => item[0])
                // console.log(chars);
                words[i] = shuffleFn(chars)
            }
            // Output result
            item.innerText = words.join(' ')
        }
    }
 
}
