const footerLinks = {
    handleClickBtnToggleItem(){
        if (window.innerWidth < 767) {
            $(document).on('click', '.footer-links .footer-links-item-title', event => {
                $(event.target).parents('.footer-links-item').children('.footer-links-item-content').slideToggle(300);
            });
        }
    },

    init() {
        // this.handleClickBtnToggleItem();
    }
}

footerLinks.init();