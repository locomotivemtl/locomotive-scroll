import locomotiveScroll from './scroll/vendors/main';

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

        scroll.on('scroll', (obj) => {
            console.log(obj);
        })
    }, 1000)

})();
