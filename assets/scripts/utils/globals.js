import SmoothScroll from '../modules/SmoothScroll';
import Scroll from '../modules/Scroll';

export default function() {

    /*const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if (iOS || window.matchMedia("(max-width: 1199px)").matches) {
        // Scroll
    } else {
        // smoothScroll
    }*/

    let wheelReversed = (typeof $('body').data('wheel-reversed') === 'string');
    const smoothScroll = new SmoothScroll({
        container: '.o-scroll',
        selector: '.js-scroll',
        reversed: wheelReversed
    });



    // const scroll = new Scroll({
    //     container: document,
    //     selector: '.js-scroll',
    // });
}
