// Add your custom JavaScript for storefront pages here.
// ALL PAGES

const allPages = {
    actionsScroll(){
        $(window).scroll(function () {
            const scrollTop = $(this).scrollTop();

            if (scrollTop > 20) {
                $('body').addClass('header-fixed');
            } else {
                $('body').removeClass('header-fixed');
            }
        });

        $(window).scroll();
    },

    init(){
        this.actionsScroll();
    }
}

allPages.init();
