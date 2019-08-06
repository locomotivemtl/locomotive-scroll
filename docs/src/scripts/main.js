import LocomotiveScroll from '../../../src/locomotive-scroll';

(function() {

    document.documentElement.classList.add('is-loaded');
    document.documentElement.classList.remove('is-loading');

    setTimeout(() => {
        document.documentElement.classList.add('is-ready');
    },300)

    setTimeout(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#js-scroll'),
            smooth: true,
            getSpeed: true,
            getDirection: true
        });

        let dynamicBackgrounds = [];
        let dynamicColorElements = [];

        scroll.on('scroll', (instance) => {
            const progress = 360 * instance.scroll.y / instance.limit;

            scroll.el.style.backgroundColor = `hsl(${progress}, 11%, 81%)`;

            dynamicBackgrounds.forEach(obj => {
                obj.el.style.backgroundColor = `hsl(${progress}, 11%, 81%)`;
            });
            dynamicColorElements.forEach(obj => {
                obj.el.style.color = `hsl(${progress}, 11%, 81%)`;
            });

            document.documentElement.setAttribute('data-direction', instance.direction)

            // if(instance.scroll.y >= instance.limit - 10) {
            //     document.documentElement.classList.remove('is-ready');
            //     scroll.stop();
            //     scroll.setScroll(0,0);

            //     setTimeout(() => {
            //         scroll.update();
            //         document.documentElement.classList.add('is-ready');
            //     },100)

            //     setTimeout(() => {
            //         scroll.start();
            //     },1000);
            // }

        });

        scroll.on('call', (value, way, obj) => {
            if (value === 'dynamicBackground') {
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
            } else if (value === 'dynamicColor') {
                if(way === 'enter') {
                    dynamicColorElements.push({
                        id: obj.id,
                        el: obj.el
                    });
                } else {
                    for (var i = 0; i < dynamicColorElements.length; i++) {
                        if(obj.id === dynamicColorElements[i].id) {
                            dynamicColorElements.splice(i,1);
                        }
                    }
                }
            }
        });

    }, 1000)

})();
