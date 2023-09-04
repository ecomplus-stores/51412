const sideNavigation = {
    handleClickBtnToggleItem(){
        $(document).on('click', '.side-navigation .side-navigation-item-icon', event => {
            event.preventDefault();

            $(event.target).parents('.side-navigation-item').toggleClass('active');
            utils.slideToggle($(event.target).parents('.side-navigation-item').find('> .side-navigation-item-dropdown')[0], 500);
        });
    },

    init() {
        this.handleClickBtnToggleItem();
    }
}

sideNavigation.init();