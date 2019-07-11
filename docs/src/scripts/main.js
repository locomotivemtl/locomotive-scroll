import { locomotiveScroll } from '../../../src/locomotive-scroll';

(function() {

    document.documentElement.classList.add('is-loaded');
    document.documentElement.classList.remove('is-loading');

    setTimeout(() => {
        const scroll = new locomotiveScroll({
            el: document.querySelector('#js-scroll'),
            smooth: true,
            getSpeed: true,
            getDirection: true
        });

        let dynamicBackgrounds = [];

        scroll.on('scroll', (instance) => {
            const progress = 360 * instance.scroll.y / instance.limit;

            scroll.el.style.backgroundColor = `hsl(${progress}, 11%, 81%)`;

            dynamicBackgrounds.forEach(obj => {
                obj.el.style.backgroundColor = `hsl(${progress}, 11%, 81%)`;
            });

        });

        scroll.on('call', (value, way, obj) => {
            if(value === 'dynamicBackground') {
                if(way === 'enter') {
                    dynamicBackgrounds.push({
                        id: obj.id,
                        el: obj.el
                    });
                } else {
                    for (var i = 0; i < dynamicBackgrounds.length; i++) {
                        if(obj.id === dynamicBackgrounds[i].id) {
                            dynamicBackgrounds.splice(i,1);
                        }
                    }
                }
            }
        });

    }, 1000)

})();
