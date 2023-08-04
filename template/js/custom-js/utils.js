window.utils = {
    swiperSlide(){
        if ($('.swiper').length == 0) return;

        $('.swiper').each(function(){
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

    yuukCountdown(target){
        const element = target || $('.countdown');
    
        if (element.length == 0) return;

        element.yuukCountdown({
            starttime: '2016/11/11 00:00:00',
            endtime: '2030/12/30 00:00:00'
        });
    },

    initPlugins(){
        this.yuukCountdown();
        this.swiperSlide();
    },

    init(){
        this.initPlugins();
    },
}

utils.init();