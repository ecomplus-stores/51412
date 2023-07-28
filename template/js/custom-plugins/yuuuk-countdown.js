!function(i, s, a) {
    i.fn.yuukCountdown = function(s) {
        var a = {
                starttime: "",
                endtime: "",
                startCallBack: i.noop,
                notStartCallBack: i.noop,
                endCallBack: i.noop
            },
            l = i.extend(a, s);
        return this.each(function(s, a) {
            ({
                timer: null,
                countDown: function() {
                    var i = Math.round((new Date).getTime() / 1e3),
                        s = Math.round(new Date(l.starttime) / 1e3);
                    endTime = Math.round(new Date(l.endtime) / 1e3);
                    var a = endTime - i;
                    return {
                        endLeftTime: a,
                        startLeftTime: s - i,
                        day: parseInt(a / 60 / 60 / 24),
                        hour: parseInt(a / 60 / 60 % 24),
                        minute: parseInt(a / 60 % 60),
                        second: parseInt(a % 60),
                        ms: parseInt((new Date(l.endtime) - (new Date).getTime()) % 1e3)
                    }
                },
                defaultHtml: function(day, hour, minute, second, ms){
                    return `
                        <div class="countdown-wrapper">
                            <div class="countdown-item countdown-item-day"><b>${day || '00'}</b><span>dias</span></div>
                            <div class="countdown-item-separator countdown-item-separator-1">:</div>
                            <div class="countdown-item countdown-item-hour"><b>${hour || '00'}</b><span>horas</span></div>
                            <div class="countdown-item-separator countdown-item-separator-2">:</div>
                            <div class="countdown-item countdown-item-minute"><b>${minute || '00'}</b><span>minutos</span></div>
                            <div class="countdown-item-separator countdown-item-separator-3">:</div>
                            <div class="countdown-item countdown-item-second"><b>${second || '00'}</b><span>segundos</span></div>
                            <div class="countdown-item-separator countdown-item-separator-4">:</div>
                            <div class="countdown-item countdown-item-ms"><b>${ms || '00'}</b><span>milissegundos</span></div>
                        </div>
                    `;
                },
                setHtml: function(s) {
                    var n = s.endLeftTime,
                        t = s.startLeftTime,
                        day = this.fillZero(s.day),
                        hour = this.fillZero(s.hour),
                        minute = this.fillZero(s.minute),
                        second = this.fillZero(s.second),
                        ms = this.fillZero(s.ms.toString().substr(0, 2) || 0);
                    t > 0 ? l.notStartCallBack && l.notStartCallBack(s) : (n > 0 && (i(a).html(this.defaultHtml(day, hour, minute, second, ms)), l.startCallBack && l.startCallBack(s)), n <= 0 && (i(a).html(this.defaultHtml(day, hour, minute, second, ms)), l.endCallBack && l.endCallBack(s), clearInterval(this.timer)))
                },
                fillZero: function(i) {
                    return i < 10 && (i = "0" + (i < 0 ? "0" : i)), i
                },
                init: function() {
                    var i = this;
                    if (new Date(l.endtime) <= new Date(l.starttime)) throw new Error("Error Countdown");
                    this.timer = setInterval(function() {
                        i.setHtml(i.countDown())
                    }, 10)
                }
            }).init()
        })
    }
}(jQuery, window);