let gdprBis1 = -1;
try {
    gdprBis1 = parseInt(document.cookie.split('; ').find(row => row.startsWith('CookieGDPR=')).split('=')[1]);
} catch (e) {

}

if (gdprBis1>-1) {
    !function (t, i, e, s) {
        function n(s, n) {
            this.options = t.extend({}, r, n), this._container = t("#" + this.options.containerID), this._container.length && (this.jQwindow = t(i), this.jQdocument = t(e), this._holder = t(s), this._nav = {}, this._first = t(this.options.first), this._previous = t(this.options.previous), this._next = t(this.options.next), this._last = t(this.options.last), this._items = this._container.children(), this._itemsShowing = t([]), this._itemsHiding = t([]), this._numPages = Math.ceil(this._items.length / this.options.perPage), this._currentPageNum = this.options.startPage, this._clicked = !1, this._cssAnimSupport = this.getCSSAnimationSupport(), this.init())
        }

        var a = "jPages", h = null, r = {
            containerID: "",
            first: !1,
            previous: "«",
            next: "»",
            last: !1,
            links: "numeric",
            startPage: 1,
            perPage: 10,
            midRange: 5,
            startRange: 1,
            endRange: 1,
            keyBrowse: !1,
            scrollBrowse: !1,
            pause: 0,
            clickStop: !1,
            delay: 50,
            direction: "forward",
            animation: "",
            fallback: 400,
            minHeight: !0,
            callback: s
        };
        n.prototype = {
            constructor: n, getCSSAnimationSupport: function () {
                var t = !1, i = "animation", e = "", n = "Webkit Moz O ms Khtml".split(" "), a = "",
                    h = this._container.get(0);
                if (h.style.animationName && (t = !0), t === !1) for (var r = 0; r < n.length; r++) if (h.style[n[r] + "AnimationName"] !== s) {
                    a = n[r], i = a + "Animation", e = "-" + a.toLowerCase() + "-", t = !0;
                    break
                }
                return t
            }, init: function () {
                if ("" != t("#categoryArticles-currentPage").val()) {
                    var i = t("#categoryArticles-ids").val(), e = 0;
                    e > 0 && i != s && (this._currentPageNum = e)
                }
                this.setStyles(), this.setNav(), this.paginate(this._currentPageNum), this.setMinHeight()
            }, getCookie: function (t) {
                var i = "; " + e.cookie, s = i.split("; " + t + "=");
                return 2 == s.length ? s.pop().split(";").shift() : void 0
            }, setCookie: function (t, i, s) {
                var n = new Date;
                n.setTime(n.getTime() + 24 * s * 60 * 60 * 1e3);
                var a = "expires=" + n.toUTCString();
                e.cookie = t + "=" + i + "; " + a
            }, setStyles: function () {
                var i = "<style>.jp-invisible { visibility: hidden !important; } .jp-hidden { display: none !important; }</style>";
                t(i).appendTo("head"), this._cssAnimSupport && this.options.animation.length ? this._items.addClass("animated jp-hidden") : this._items.hide()
            }, setNav: function () {
                var i = this.writeNav();
                this._holder.each(this.bind(function (e, s) {
                    var n = t(s);
                    n.html(i), this.cacheNavElements(n, e), this.bindNavHandlers(e), this.disableNavSelection(s)
                }, this)), this.options.keyBrowse && this.bindNavKeyBrowse(), this.options.scrollBrowse && this.bindNavScrollBrowse()
            }, writeNav: function () {
                var t, i = 1;
                for (t = this.writeBtn("first") + this.writeBtn("previous"); i <= this._numPages; i++) {
                    switch (1 === i && 0 === this.options.startRange && (t += "<span>...</span>"), t += i > this.options.startRange && i <= this._numPages - this.options.endRange ? "<a href='#' class='jp-hidden'>" : "<a>", this.options.links) {
                        case"numeric":
                            t += i;
                            break;
                        case"blank":
                            break;
                        case"title":
                            var e = this._items.eq(i - 1).attr("data-title");
                            t += e !== s ? e : ""
                    }
                    t += "</a>", (i === this.options.startRange || i === this._numPages - this.options.endRange) && (t += "<span>...</span>")
                }
                return t += this.writeBtn("next") + this.writeBtn("last") + "</div>"
            }, writeBtn: function (i) {
                return this.options[i] === !1 || t(this["_" + i]).length ? "" : "<a class='jp-" + i + "'>" + this.options[i] + "</a>"
            }, cacheNavElements: function (i, e) {
                this._nav[e] = {}, this._nav[e].holder = i, this._nav[e].first = this._first.length ? this._first : this._nav[e].holder.find("a.jp-first"), this._nav[e].previous = this._previous.length ? this._previous : this._nav[e].holder.find("a.jp-previous"), this._nav[e].next = this._next.length ? this._next : this._nav[e].holder.find("a.jp-next"), this._nav[e].last = this._last.length ? this._last : this._nav[e].holder.find("a.jp-last"), this._nav[e].fstBreak = this._nav[e].holder.find("span:first"), this._nav[e].lstBreak = this._nav[e].holder.find("span:last"), this._nav[e].pages = this._nav[e].holder.find("a").not(".jp-first, .jp-previous, .jp-next, .jp-last"), this._nav[e].permPages = this._nav[e].pages.slice(0, this.options.startRange).add(this._nav[e].pages.slice(this._numPages - this.options.endRange, this._numPages)), this._nav[e].pagesShowing = t([]), this._nav[e].currentPage = t([])
            }, bindNavHandlers: function (i) {
                var e = this._nav[i];
                e.holder.bind("click.jPages", this.bind(function (i) {
                    var s = this.getNewPage(e, t(i.target));
                    this.validNewPage(s) && (this._clicked = !0, this.paginate(s)), i.preventDefault()
                }, this)), this._first.length && this._first.bind("click.jPages", this.bind(function () {
                    this.validNewPage(1) && (this._clicked = !0, this.paginate(1))
                }, this)), this._previous.length && this._previous.bind("click.jPages", this.bind(function () {
                    var t = this._currentPageNum - 1;
                    this.validNewPage(t) && (this._clicked = !0, this.paginate(t))
                }, this)), this._next.length && this._next.bind("click.jPages", this.bind(function () {
                    var t = this._currentPageNum + 1;
                    this.validNewPage(t) && (this._clicked = !0, this.paginate(t))
                }, this)), this._last.length && this._last.bind("click.jPages", this.bind(function () {
                    this.validNewPage(this._numPages) && (this._clicked = !0, this.paginate(this._numPages))
                }, this))
            }, disableNavSelection: function (t) {
                "undefined" != typeof t.onselectstart ? t.onselectstart = function () {
                    return !1
                } : "undefined" != typeof t.style.MozUserSelect ? t.style.MozUserSelect = "none" : t.onmousedown = function () {
                    return !1
                }
            }, bindNavKeyBrowse: function () {
                this.jQdocument.bind("keydown.jPages", this.bind(function (t) {
                    var i = t.target.nodeName.toLowerCase();
                    if (this.elemScrolledIntoView() && "input" !== i && "textarea" != i) {
                        var e = this._currentPageNum;
                        37 == t.which && (e = this._currentPageNum - 1), 39 == t.which && (e = this._currentPageNum + 1), this.validNewPage(e) && (this._clicked = !0, this.paginate(e))
                    }
                }, this))
            }, elemScrolledIntoView: function () {
                var t, i, e, s;
                return t = this.jQwindow.scrollTop(), i = t + this.jQwindow.height(), e = this._container.offset().top, s = e + this._container.height(), s >= t && i >= e
            }, bindNavScrollBrowse: function () {
                this._container.bind("mousewheel.jPages DOMMouseScroll.jPages", this.bind(function (t) {
                    var i = (t.originalEvent.wheelDelta || -t.originalEvent.detail) > 0 ? this._currentPageNum - 1 : this._currentPageNum + 1;
                    return this.validNewPage(i) && (this._clicked = !0, this.paginate(i)), t.preventDefault(), !1
                }, this))
            }, getNewPage: function (t, i) {
                return i.is(t.currentPage) ? this._currentPageNum : i.is(t.pages) ? t.pages.index(i) + 1 : i.is(t.first) ? 1 : i.is(t.last) ? this._numPages : i.is(t.previous) ? t.pages.index(t.currentPage) : i.is(t.next) ? t.pages.index(t.currentPage) + 2 : void 0
            }, validNewPage: function (t) {
                return t !== this._currentPageNum && t > 0 && t <= this._numPages
            }, paginate: function (i) {
                var e, s;
                e = this.updateItems(i), s = this.updatePages(i), this._currentPageNum = i, t.isFunction(this.options.callback) && this.callback(i, e, s), this.updatePause()
            }, updateItems: function (t) {
                var i = this.getItemRange(t);
                return this._itemsHiding = this._itemsShowing, this._itemsShowing = this._items.slice(i.start, i.end), this._cssAnimSupport && this.options.animation.length ? this.cssAnimations(t) : this.jQAnimations(t), i
            }, getItemRange: function (t) {
                var i = {};
                return i.start = (t - 1) * this.options.perPage, i.end = i.start + this.options.perPage, i.end > this._items.length && (i.end = this._items.length), i
            }, cssAnimations: function (t) {
                clearInterval(this._delay), this._itemsHiding.removeClass(this.options.animation + " jp-invisible").addClass("jp-hidden"), this._itemsShowing.removeClass("jp-hidden").addClass("jp-invisible"), this._itemsOriented = this.getDirectedItems(t), this._index = 0, this._delay = setInterval(this.bind(function () {
                    this._index === this._itemsOriented.length ? clearInterval(this._delay) : this._itemsOriented.eq(this._index).removeClass("jp-invisible").addClass(this.options.animation), this._index = this._index + 1
                }, this), this.options.delay)
            }, jQAnimations: function (t) {
                clearInterval(this._delay), this._itemsHiding.addClass("jp-hidden"), this._itemsShowing.fadeTo(0, 0).removeClass("jp-hidden"), this._itemsOriented = this.getDirectedItems(t), this._index = 0, this._delay = setInterval(this.bind(function () {
                    this._index === this._itemsOriented.length ? clearInterval(this._delay) : this._itemsOriented.eq(this._index).fadeTo(this.options.fallback, 1), this._index = this._index + 1
                }, this), this.options.delay)
            }, getDirectedItems: function (i) {
                var e;
                switch (this.options.direction) {
                    case"backwards":
                        e = t(this._itemsShowing.get().reverse());
                        break;
                    case"random":
                        e = t(this._itemsShowing.get().sort(function () {
                            return Math.round(Math.random()) - .5
                        }));
                        break;
                    case"auto":
                        e = i >= this._currentPageNum ? this._itemsShowing : t(this._itemsShowing.get().reverse());
                        break;
                    default:
                        e = this._itemsShowing
                }
                return e
            }, updatePages: function (t) {
                var i, e, s;
                i = this.getInterval(t);
                for (e in this._nav) this._nav.hasOwnProperty(e) && (s = this._nav[e], this.updateBtns(s, t), this.updateCurrentPage(s, t), this.updatePagesShowing(s, i), this.updateBreaks(s, i));
                return i
            }, getInterval: function (t) {
                var i, e, s, n;
                return i = Math.ceil(this.options.midRange / 2), e = this._numPages - this.options.midRange, s = t > i ? Math.max(Math.min(t - i, e), 0) : 0, n = t > i ? Math.min(t + i - (this.options.midRange % 2 > 0 ? 1 : 0), this._numPages) : Math.min(this.options.midRange, this._numPages), {
                    start: s,
                    end: n
                }
            }, updateBtns: function (t, i) {
                1 === i && (t.first.addClass("jp-disabled"), t.previous.addClass("jp-disabled")), i === this._numPages && (t.next.addClass("jp-disabled"), t.last.addClass("jp-disabled")), 1 === this._currentPageNum && i > 1 && (t.first.removeClass("jp-disabled"), t.previous.removeClass("jp-disabled")), this._currentPageNum === this._numPages && i < this._numPages && (t.next.removeClass("jp-disabled"), t.last.removeClass("jp-disabled"))
            }, updateCurrentPage: function (i, e) {
                if (i.currentPage.removeClass("jp-current"), i.currentPage = i.pages.eq(e - 1).addClass("jp-current"), "" != t("#categoryArticles-currentPage").val() && "undefined" != t("#categoryArticles-currentPage").val()) {
                    var s = t("#categoryArticles-ids").val(), n = "pageCurr-" + s;
                    this.setCookie(n, e, 1)
                }
            }, updatePagesShowing: function (t, i) {
                var e = t.pages.slice(i.start, i.end).not(t.permPages);
                t.pagesShowing.not(e).addClass("jp-hidden"), e.not(t.pagesShowing).removeClass("jp-hidden"), t.pagesShowing = e
            }, updateBreaks: function (t, i) {
                i.start > this.options.startRange || 0 === this.options.startRange && i.start > 0 ? t.fstBreak.removeClass("jp-hidden") : t.fstBreak.addClass("jp-hidden"), i.end < this._numPages - this.options.endRange ? t.lstBreak.removeClass("jp-hidden") : t.lstBreak.addClass("jp-hidden")
            }, callback: function (t, i, e) {
                var s = {current: t, interval: e, count: this._numPages}, n = {
                    showing: this._itemsShowing,
                    oncoming: this._items.slice(i.start + this.options.perPage, i.end + this.options.perPage),
                    range: i,
                    count: this._items.length
                };
                s.interval.start = s.interval.start + 1, n.range.start = n.range.start + 1, this.options.callback(s, n)
            }, updatePause: function () {
                if (this.options.pause && this._numPages > 1) {
                    if (clearTimeout(this._pause), this.options.clickStop && this._clicked) return;
                    this._pause = setTimeout(this.bind(function () {
                        this.paginate(this._currentPageNum !== this._numPages ? this._currentPageNum + 1 : 1)
                    }, this), this.options.pause)
                }
            }, setMinHeight: function () {
                this.options.minHeight && !this._container.is("table, tbody") && setTimeout(this.bind(function () {
                    this._container.css({"min-height": this._container.css("height")})
                }, this), 1e3)
            }, bind: function (t, i) {
                return function () {
                    return t.apply(i, arguments)
                }
            }, destroy: function () {
                this.jQdocument.unbind("keydown.jPages"), this._container.unbind("mousewheel.jPages DOMMouseScroll.jPages"), this.options.minHeight && this._container.css("min-height", ""), this._cssAnimSupport && this.options.animation.length ? this._items.removeClass("animated jp-hidden jp-invisible " + this.options.animation) : this._items.removeClass("jp-hidden").fadeTo(0, 1), this._holder.unbind("click.jPages").empty()
            }
        }, t.fn[a] = function (i) {
            var e = t.type(i);
            return "object" === e ? (this.length && !t.data(this, a) && (h = new n(this, i), this.each(function () {
                t.data(this, a, h)
            })), this) : "string" === e && "destroy" === i ? (null != h && h.destroy(), this.each(function () {
                t.removeData(this, a)
            }), this) : this
        }
    }(jQuery, window, document);
}