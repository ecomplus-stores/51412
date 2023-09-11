window.utils = {
    setCookie(name, value, hours){
        if (hours) {
            var date = new Date();
            date.setTime(date.getTime()+(hours*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        } else {
            var expires = "";
        }

        document.cookie = name+"="+value+expires+"; path=/";
    },
 
    getCookie(name){
        const match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
    
        if (match) {
            return match[1] == '' ? 'empty' : match[1];
        } else {
            return null
        }
    },
    
    removeCookie(name) {
        document.cookie = name +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },

    slideToggle(target, duration = 500){
        let slideUp = (target, duration=500) => {
            target.style.transitionProperty = 'height, margin, padding';
            target.style.transitionDuration = duration + 'ms';
            target.style.boxSizing = 'border-box';
            target.style.height = target.offsetHeight + 'px';
            target.offsetHeight;
            target.style.overflow = 'hidden';
            target.style.height = 0;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout( () => {
                target.style.display = 'none';
                target.style.removeProperty('height');
                target.style.removeProperty('padding-top');
                target.style.removeProperty('padding-bottom');
                target.style.removeProperty('margin-top');
                target.style.removeProperty('margin-bottom');
                target.style.removeProperty('overflow');
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
                //alert("!");
            }, duration);
        }

        let slideDown = (target, duration=500) => {
            target.style.removeProperty('display');
            let display = window.getComputedStyle(target).display;

            if (display === 'none')
            display = 'block';

            target.style.display = display;
            let height = target.offsetHeight;
            target.style.overflow = 'hidden';
            target.style.height = 0;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.boxSizing = 'border-box';
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + 'ms';
            target.style.height = height + 'px';
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');

            window.setTimeout( () => {
                target.style.removeProperty('height');
                target.style.removeProperty('overflow');
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
            }, duration);
        }

        if (window.getComputedStyle(target).display === 'none') {
            return slideDown(target, duration);
        } else {
            return slideUp(target, duration);
        }
    },

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
        $(window).on('load', () => {
            setTimeout(() => {
                const target = $('.countdown');
            
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
                });
            }, 200);
        });
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
