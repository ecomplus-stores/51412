const topBar = {
    handleClickBtnCloseTopBar(){
        if (window.innerWidth < 767) {
            $(document).on('click', '.top-bar .top-bar-close', event => {
                $(event.target).closest('.top-bar').remove();
            });
        }
    },

    init() {
        this.handleClickBtnCloseTopBar();
    }
}

topBar.init();