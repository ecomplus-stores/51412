const footerLinks = {
    handleClickBtnToggleItem(){
        if (window.innerWidth < 767) {
            $(document).on('click', '.footer-links .footer-links-item-title', event => {
                $(event.target).parents('.footer-links-item').toggleClass('active');
            });
        }
    },

    init() {
        this.handleClickBtnToggleItem();
    }
}

footerLinks.init();