!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){"use strict";var o=32,e=33,n=34,i=35,r=36,s=38,l=40,a=function(o,e){var n,i=e.scrollTop(),r=e.prop("scrollHeight"),s=e.prop("clientHeight"),l=o.originalEvent.wheelDelta||-1*o.originalEvent.detail||-1*o.originalEvent.deltaY,a=0;if("wheel"===o.type){var c=e.height()/t(window).height();a=o.originalEvent.deltaY*c}else this.options.touch&&"touchmove"===o.type&&(l=o.originalEvent.changedTouches[0].clientY-this.startClientY);return{prevent:(n=l>0&&i+a<=0)||l<0&&i+a>=r-s,top:n,scrollTop:i,deltaY:a}},c=function(t,a){var c=a.scrollTop(),h={top:!1,bottom:!1};if(h.top=0===c&&(t.keyCode===e||t.keyCode===r||t.keyCode===s),!h.top){var p=a.prop("scrollHeight"),E=a.prop("clientHeight");h.bottom=p===c+E&&(t.keyCode===o||t.keyCode===n||t.keyCode===i||t.keyCode===l)}return h},h=function(o,e){this.$element=o,this.options=t.extend({},h.DEFAULTS,this.$element.data(),e),this.enabled=!0,this.startClientY=0,this.options.unblock&&this.$element.on(h.CORE.wheelEventName+h.NAMESPACE,this.options.unblock,t.proxy(h.CORE.unblockHandler,this)),this.$element.on(h.CORE.wheelEventName+h.NAMESPACE,this.options.selector,t.proxy(h.CORE.handler,this)),this.options.touch&&(this.$element.on("touchstart"+h.NAMESPACE,this.options.selector,t.proxy(h.CORE.touchHandler,this)),this.$element.on("touchmove"+h.NAMESPACE,this.options.selector,t.proxy(h.CORE.handler,this)),this.options.unblock&&this.$element.on("touchmove"+h.NAMESPACE,this.options.unblock,t.proxy(h.CORE.unblockHandler,this))),this.options.keyboard&&(this.$element.attr("tabindex",this.options.keyboard.tabindex||0),this.$element.on("keydown"+h.NAMESPACE,this.options.selector,t.proxy(h.CORE.keyboardHandler,this)),this.options.unblock&&this.$element.on("keydown"+h.NAMESPACE,this.options.unblock,t.proxy(h.CORE.unblockHandler,this)))};h.NAME="ScrollLock",h.VERSION="3.1.2",h.NAMESPACE=".scrollLock",h.ANIMATION_NAMESPACE=h.NAMESPACE+".effect",h.DEFAULTS={strict:!1,strictFn:function(t){return t.prop("scrollHeight")>t.prop("clientHeight")},selector:!1,animation:!1,touch:"ontouchstart"in window,keyboard:!1,unblock:!1},h.CORE={wheelEventName:"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",animationEventName:["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"].join(h.ANIMATION_NAMESPACE+" ")+h.ANIMATION_NAMESPACE,unblockHandler:function(t){t.__currentTarget=t.currentTarget},handler:function(o){if(this.enabled&&!o.ctrlKey){var e=t(o.currentTarget);if(!0!==this.options.strict||this.options.strictFn(e)){o.stopPropagation();var n=t.proxy(a,this)(o,e);if(o.__currentTarget&&(n.prevent&=t.proxy(a,this)(o,t(o.__currentTarget)).prevent),n.prevent){o.preventDefault(),n.deltaY&&e.scrollTop(n.scrollTop+n.deltaY);var i=n.top?"top":"bottom";this.options.animation&&setTimeout(h.CORE.animationHandler.bind(this,e,i),0),e.trigger(t.Event(i+h.NAMESPACE))}}}},touchHandler:function(t){this.startClientY=t.originalEvent.touches[0].clientY},animationHandler:function(t,o){var e=this.options.animation[o],n=this.options.animation.top+" "+this.options.animation.bottom;t.off(h.ANIMATION_NAMESPACE).removeClass(n).addClass(e).one(h.CORE.animationEventName,function(){t.removeClass(e)})},keyboardHandler:function(o){var e=t(o.currentTarget),n=(e.scrollTop(),c(o,e));if(o.__currentTarget){var i=c(o,t(o.__currentTarget));n.top&=i.top,n.bottom&=i.bottom}return n.top?(e.trigger(t.Event("top"+h.NAMESPACE)),this.options.animation&&setTimeout(h.CORE.animationHandler.bind(this,e,"top"),0),!1):n.bottom?(e.trigger(t.Event("bottom"+h.NAMESPACE)),this.options.animation&&setTimeout(h.CORE.animationHandler.bind(this,e,"bottom"),0),!1):void 0}},h.prototype.toggleStrict=function(){this.options.strict=!this.options.strict},h.prototype.enable=function(){this.enabled=!0},h.prototype.disable=function(){this.enabled=!1},h.prototype.destroy=function(){this.disable(),this.$element.off(h.NAMESPACE),this.$element=null,this.options=null};var p=t.fn.scrollLock;t.fn.scrollLock=function(o){return this.each(function(){var e=t(this),n="object"==typeof o&&o,i=e.data(h.NAME);(i||"destroy"!==o)&&(i||e.data(h.NAME,i=new h(e,n)),"string"==typeof o&&i[o]())})},t.fn.scrollLock.defaults=h.DEFAULTS,t.fn.scrollLock.noConflict=function(){return t.fn.scrollLock=p,this}});! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    "use strict";
    var o = 32,
        e = 33,
        n = 34,
        i = 35,
        r = 36,
        s = 38,
        l = 40,
        a = function(o, e) {
            var n, i = e.scrollTop(),
                r = e.prop("scrollHeight"),
                s = e.prop("clientHeight"),
                l = o.originalEvent.wheelDelta || -1 * o.originalEvent.detail || -1 * o.originalEvent.deltaY,
                a = 0;
            if ("wheel" === o.type) {
                var c = e.height() / t(window).height();
                a = o.originalEvent.deltaY * c
            } else this.options.touch && "touchmove" === o.type && (l = o.originalEvent.changedTouches[0].clientY - this.startClientY);
            return {
                prevent: (n = l > 0 && i + a <= 0) || l < 0 && i + a >= r - s,
                top: n,
                scrollTop: i,
                deltaY: a
            }
        },
        c = function(t, a) {
            var c = a.scrollTop(),
                h = {
                    top: !1,
                    bottom: !1
                };
            if (h.top = 0 === c && (t.keyCode === e || t.keyCode === r || t.keyCode === s), !h.top) {
                var p = a.prop("scrollHeight"),
                    E = a.prop("clientHeight");
                h.bottom = p === c + E && (t.keyCode === o || t.keyCode === n || t.keyCode === i || t.keyCode === l)
            }
            return h
        },
        h = function(o, e) {
            this.$element = o, this.options = t.extend({}, h.DEFAULTS, this.$element.data(), e), this.enabled = !0, this.startClientY = 0, this.options.unblock && this.$element.on(h.CORE.wheelEventName + h.NAMESPACE, this.options.unblock, t.proxy(h.CORE.unblockHandler, this)), this.$element.on(h.CORE.wheelEventName + h.NAMESPACE, this.options.selector, t.proxy(h.CORE.handler, this)), this.options.touch && (this.$element.on("touchstart" + h.NAMESPACE, this.options.selector, t.proxy(h.CORE.touchHandler, this)), this.$element.on("touchmove" + h.NAMESPACE, this.options.selector, t.proxy(h.CORE.handler, this)), this.options.unblock && this.$element.on("touchmove" + h.NAMESPACE, this.options.unblock, t.proxy(h.CORE.unblockHandler, this))), this.options.keyboard && (this.$element.attr("tabindex", this.options.keyboard.tabindex || 0), this.$element.on("keydown" + h.NAMESPACE, this.options.selector, t.proxy(h.CORE.keyboardHandler, this)), this.options.unblock && this.$element.on("keydown" + h.NAMESPACE, this.options.unblock, t.proxy(h.CORE.unblockHandler, this)))
        };
    h.NAME = "ScrollLock", h.VERSION = "3.1.2", h.NAMESPACE = ".scrollLock", h.ANIMATION_NAMESPACE = h.NAMESPACE + ".effect", h.DEFAULTS = {
        strict: !1,
        strictFn: function(t) {
            return t.prop("scrollHeight") > t.prop("clientHeight")
        },
        selector: !1,
        animation: !1,
        touch: "ontouchstart" in window,
        keyboard: !1,
        unblock: !1
    }, h.CORE = {
        wheelEventName: "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
        animationEventName: ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"].join(h.ANIMATION_NAMESPACE + " ") + h.ANIMATION_NAMESPACE,
        unblockHandler: function(t) {
            t.__currentTarget = t.currentTarget
        },
        handler: function(o) {
            if (this.enabled && !o.ctrlKey) {
                var e = t(o.currentTarget);
                if (!0 !== this.options.strict || this.options.strictFn(e)) {
                    o.stopPropagation();
                    var n = t.proxy(a, this)(o, e);
                    if (o.__currentTarget && (n.prevent &= t.proxy(a, this)(o, t(o.__currentTarget)).prevent), n.prevent) {
                        o.preventDefault(), n.deltaY && e.scrollTop(n.scrollTop + n.deltaY);
                        var i = n.top ? "top" : "bottom";
                        this.options.animation && setTimeout(h.CORE.animationHandler.bind(this, e, i), 0), e.trigger(t.Event(i + h.NAMESPACE))
                    }
                }
            }
        },
        touchHandler: function(t) {
            this.startClientY = t.originalEvent.touches[0].clientY
        },
        animationHandler: function(t, o) {
            var e = this.options.animation[o],
                n = this.options.animation.top + " " + this.options.animation.bottom;
            t.off(h.ANIMATION_NAMESPACE).removeClass(n).addClass(e).one(h.CORE.animationEventName, function() {
                t.removeClass(e)
            })
        },
        keyboardHandler: function(o) {
            var e = t(o.currentTarget),
                n = (e.scrollTop(), c(o, e));
            if (o.__currentTarget) {
                var i = c(o, t(o.__currentTarget));
                n.top &= i.top, n.bottom &= i.bottom
            }
            return n.top ? (e.trigger(t.Event("top" + h.NAMESPACE)), this.options.animation && setTimeout(h.CORE.animationHandler.bind(this, e, "top"), 0), !1) : n.bottom ? (e.trigger(t.Event("bottom" + h.NAMESPACE)), this.options.animation && setTimeout(h.CORE.animationHandler.bind(this, e, "bottom"), 0), !1) : void 0
        }
    }, h.prototype.toggleStrict = function() {
        this.options.strict = !this.options.strict
    }, h.prototype.enable = function() {
        this.enabled = !0
    }, h.prototype.disable = function() {
        this.enabled = !1
    }, h.prototype.destroy = function() {
        this.disable(), this.$element.off(h.NAMESPACE), this.$element = null, this.options = null
    };
    var p = t.fn.scrollLock;
    t.fn.scrollLock = function(o) {
        return this.each(function() {
            var e = t(this),
                n = "object" == typeof o && o,
                i = e.data(h.NAME);
            (i || "destroy" !== o) && (i || e.data(h.NAME, i = new h(e, n)), "string" == typeof o && i[o]())
        })
    }, t.fn.scrollLock.defaults = h.DEFAULTS, t.fn.scrollLock.noConflict = function() {
        return t.fn.scrollLock = p, this
    }
});