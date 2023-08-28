window.utils = {
    swiperSlide(){
        let target = $('.swiper');

        if (target.length == 0) return;

        target.each(function(){
            const startOnlyDevice = $(this).attr('data-start-only-device');

            if (startOnlyDevice) {
                if (startOnlyDevice == 'desktop' && window.innerWidth < 767) {
                    return;
                }

                if (startOnlyDevice == 'mobile' && window.innerWidth > 767) {
                    return;
                }
            }

            const slideOptions = $(this).data().slideOptions;
            const slideHasThumbs = $(this).data().targetSwiperThumbs;

            if (!slideOptions) return;

            if (slideOptions.navigation == 'default') {
                slideOptions.navigation = {
                    nextEl: $(this).find('.swiper-button-next')[0],
                    prevEl: $(this).find('.swiper-button-prev')[0],
                }
            }

            if (slideHasThumbs) {
                const targetThumbs = $(`.${slideHasThumbs}`);
                const slideThumbsOptions = $(targetThumbs).data().slideOptions;

                if (slideThumbsOptions.navigation == 'default') {
                    slideThumbsOptions.navigation = {
                        nextEl: targetThumbs.find('.swiper-button-next')[0],
                        prevEl: targetThumbs.find('.swiper-button-prev')[0],
                    }
                }

                const swiperThumbs = new Swiper(targetThumbs[0], slideThumbsOptions);

                slideOptions.thumbs = {
                    swiper: swiperThumbs
                }
            }

            new Swiper($(this)[0], slideOptions);
        });
    },

    yuukCountdown(){
        let target = $('.countdown');
    
        if (target.length == 0) return;

        target.each(function(){
            const startOnlyDevice = $(this).attr('data-start-only-device');

            if (startOnlyDevice) {
                if (startOnlyDevice == 'desktop' && window.innerWidth < 767) {
                    return;
                }

                if (startOnlyDevice == 'mobile' && window.innerWidth > 767) {
                        return;
                }
            }

            $(this).yuukCountdown({
                starttime: '2016/11/11 00:00:00',
                endtime: '2030/12/30 00:00:00'
            });
        })
    },

    scrollLock(){
        if (window.innerWidth > 767) {
            $('.scroll-lock').scrollLock();
        }
    },

    initPlugins(){
        this.yuukCountdown();
        this.swiperSlide();
        this.scrollLock();
    },

    init(){
        this.initPlugins();
    },
}

utils.init();
