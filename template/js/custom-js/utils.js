window.utils = {
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
    },

    init(){
        this.initPlugins();
    },
}

utils.init();