const header = {
    handleClickBtnToggleMenu(){
        if (window.innerWidth < 767) {
            $(document).on('click', '.header .header-bars', () => {
                $('body').toggleClass('menu-mobile-active');
            });
        }
    },

    init() {
        this.handleClickBtnToggleMenu();
    }
}

header.init();