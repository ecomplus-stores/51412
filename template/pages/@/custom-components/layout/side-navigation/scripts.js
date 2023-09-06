const sideNavigation = {
    handleClickBtnToggleMenuItem(){
        if (window.innerWidth > 767) {
            $(document).on('click', '.side-navigation .side-navigation-item-icon', event => {
                event.preventDefault();

                $(event.target).parents('.side-navigation-item').toggleClass('active');
                utils.slideToggle($(event.target).parents('.side-navigation-item').find('> .side-navigation-item-dropdown')[0], 500);
            });
        }

        if (window.innerWidth < 767) {
            $(document).on('click', '.side-navigation .side-navigation-item:not(.without-children) .side-navigation-item-content-wrapper', event => {
                event.preventDefault();

                $(event.target).parents('.side-navigation-categories').scrollTop(0);
                $(event.target).parents('.side-navigation-item').toggleClass('active');
            });
        }
    },
    
    handleClickCloseSideNavigation(){
        if (window.innerWidth < 767) {
            $(document).on('click', '.side-navigation .side-navigation-backdrop, .side-navigation .side-navigation-close', event => {
                $('body').removeClass('menu-mobile-active');
            });
        }
    },

    handleClickReturnSideNavigation(){
        if (window.innerWidth < 767) {
            $(document).on('click', '.side-navigation-categories-header-return', event => {
                $(event.target).closest('.side-navigation-item').removeClass('active');
            });
        }
    },

    init() {
        this.handleClickBtnToggleMenuItem();
        this.handleClickCloseSideNavigation();
        this.handleClickReturnSideNavigation();
    }
}

sideNavigation.init();