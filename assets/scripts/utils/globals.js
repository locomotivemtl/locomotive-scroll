import SmoothScroll from '../modules/SmoothScroll';
import Scroll from '../modules/Scroll';

export default function() {

    /*const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if (iOS || window.matchMedia("(max-width: 1199px)").matches) {
        // Scroll
    } else {
        // smoothScroll
    }*/

    // const smoothScroll = new SmoothScroll({
    //     container: '.o-scroll',
    //     selector: '.js-scroll',
    // });
    const scroll = new Scroll({
        container: document,
        selector: '.js-scroll',
    });
}
