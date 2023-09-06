const footerLinks = {
    handleClickBtnToggleItem(){
        if (window.innerWidth < 767) {
            $(document).on('click', '.footer-links .footer-links-item-title', event => {
                $(event.target).parents('.footer-links-item').toggleClass('active');
                utils.slideToggle($(event.target).parents('.footer-links-item').find('> .footer-links-item-content')[0], 500);
            });
        }
    },

    init() {
        this.handleClickBtnToggleItem();
    }
}

footerLinks.init();