var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
    new MutationObserver((n) => {
      for (const r of n) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function e(n) {
      const r = {};
      return n.integrity && (r.integrity = n.integrity), n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? r.credentials = "include" : n.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
    }
    function i(n) {
      if (n.ep) return;
      n.ep = true;
      const r = e(n);
      fetch(n.href, r);
    }
  })();
  function Ah() {
    window.history.scrollRestoration && (window.history.scrollRestoration = "manual");
    let s = window.matchMedia("(hover:none)").matches;
    const t = window.innerWidth, e = window.innerHeight;
    let i = 0, n = "";
    s ? (i = 3, t > 767 && (t > e ? i = 1 : i = 2)) : (i = 0, t > 1780 && (i = -1));
    const r = navigator.userAgent;
    return r.indexOf("Chrome") > -1 || r.indexOf("Safari") > -1 && document.documentElement.classList.add("N-A"), {
      devicec: n,
      device: i,
      touch: s
    };
  }
  function Lh() {
    ea();
    const s = document.querySelector(".checkfix_c input");
    s.onclick = () => Eh(s), window.addEventListener("resize", () => {
      ea();
    });
  }
  function ea() {
    if (!document.querySelector(".checkfix")) {
      const r = document.createElement("div");
      r.className = "checkfix", r.insertAdjacentHTML("afterbegin", '<div class="checkfix_t"></div><div class="checkfix_c"><input type="checkbox" id="grid" /><label for="grid">Show grid</label></div>'), document.querySelector("body").appendChild(r);
    }
    const s = window.innerWidth, t = window.innerHeight;
    let e = s != window.outerWidth, i = (t * 10 / s).toFixed(2), n = (t / s).toFixed(2);
    document.querySelector(".checkfix_t").innerHTML = "Width: " + s + "<br>Height: " + t + "<br>Ratio: 16/" + i + "<br>Ratio: " + n + "<br>Zoom: " + e;
  }
  function Eh(s) {
    const t = window.innerWidth;
    if (s.checked) {
      let e = "", i = t > 1195 ? 12 : 6, n = i == 12 ? 1 : 6;
      for (let r = 0; r < i; r++) e += '<div class="cl' + n + '"></div>';
      document.body.insertAdjacentHTML("beforeend", '<div class="CKgrid"><div class="gridcl">' + e + "</div></div>"), document.querySelector(".CKgrid").style.display = "block", setTimeout(() => {
        document.querySelector(".CKgrid").classList.add("A");
      }, 120);
    } else document.querySelector(".CKgrid").classList.remove("A"), s.classList.add("INA"), setTimeout(() => {
      document.querySelector(".CKgrid").remove(), s.classList.remove("INA");
    }, 600);
  }
  async function Oh(s, t = "getSkin") {
    return new Promise((e) => {
      fetch(s, {
        method: "GET",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        },
        body: null
      }).then(async (l) => {
        const c = await l.text();
        e(c);
      }).catch((l) => console.error("Error:", l));
    });
  }
  function xh(s, t, e) {
    return Math.min(Math.max(e, s), t);
  }
  function Ai(s) {
    return new Promise((t) => setTimeout(t, s));
  }
  function Mh(s, t) {
    let e = null;
    return (...i) => {
      e === null && (s(...i), e = setTimeout(() => {
        e = null;
      }, t));
    };
  }
  function rl(s, t) {
    let e;
    return function(...i) {
      clearTimeout(e), e = setTimeout(() => {
        s.apply(this, i);
      }, t);
    };
  }
  function Is(s, t) {
    const e = new Set(s);
    for (const i of t) e.delete(i);
    return e;
  }
  function Ch(s) {
    return !!s.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i);
  }
  class Ph {
    constructor({ nav: t, head: e, ops: i, evt: n }) {
      this.EVT = n, this.type = -1, this.SCR = [
        window.innerWidth,
        window.innerHeight
      ], this.isOpen = 0, this.actMenu = 0, this.keypress = 0, this.set(i, [
        t,
        e
      ]);
    }
    set(t, e) {
      this.touch = t.has("touch") ? t.get("touch") : false;
      let i = 0;
      if (this.SCR[0] <= 1194 ? i = this.touch == true ? 3 : 2 : i = this.touch == true ? 1 : 0, i !== this.type) this.type = i;
      else return false;
      const n = e != null ? e[0] : document.querySelector(".nav"), r = document.querySelector(".head"), o = r.querySelector(".head_brg");
      n.classList.contains("prombar") && document.documentElement.classList.add("prombar");
      const a = /* @__PURE__ */ new Map([
        [
          "nav",
          n
        ],
        [
          "head",
          r
        ],
        [
          "brg",
          o
        ]
      ]);
      this.setEVT(t, a);
    }
    init() {
    }
    setEVT(t, e) {
      const i = e.has("nav") ? e.get("nav") : void 0;
      e.has("head") && e.get("head");
      const n = e.has("brg") ? e.get("brg") : void 0;
      n && (n.onclick = async () => {
        if (this.isOpen == -1) return false;
        this.isOpen == 0 ? this.openFn(i) : this.closeFn(i);
      }, n.onkeydown = (a) => {
        a.key === "Enter" && (this.keypress = 1);
      });
      const r = i.querySelector(".desp_c"), o = i.querySelector(".desp");
      this.focusOut = (a) => {
        if (a.type === "scroll") o.classList.remove("A");
        else {
          if (a.target.closest(".desp_h") || a.target.closest(".desp button")) return;
          o.classList.remove("A");
        }
        document.removeEventListener("click", this.focusOut), document.removeEventListener("scroll", this.focusOut);
      }, r.onclick = (a) => {
        if (a.preventDefault(), o.classList.contains("A")) {
          o.classList.remove("A");
          return;
        }
        o.classList.add("A"), document.addEventListener("click", this.focusOut), document.addEventListener("scroll", this.focusOut);
      };
    }
    async closeFn(t) {
      this.isOpen = -1, document.documentElement.classList.remove("A-nav"), await Ai(600);
      for (let e of document.documentElement.querySelectorAll(".nav .nav_menu .A")) e.classList.remove("A");
      this.EVT.get("SLL").state = 1, document.dispatchEvent(this.EVT.get("SLL")), this.isOpen = 0;
    }
    async openFn(t) {
      this.EVT.get("SLL").state = 0, document.dispatchEvent(this.EVT.get("SLL")), this.isOpen = 1, document.documentElement.classList.add("A-nav");
    }
    killEVT() {
    }
    resizeFn(t) {
      this.actMenu = 0, this.closeFn(document.querySelector(".nav")), this.set(t, [
        document.querySelector(".nav"),
        document.querySelector(".head")
      ]);
    }
  }
  function ol(s, t, e) {
    return Math.max(s, Math.min(t, e));
  }
  class Dh {
    advance(t) {
      var _a2;
      if (!this.isRunning) return;
      let e = false;
      if (this.lerp) this.value = (i = this.value, n = this.to, r = 60 * this.lerp, o = t, function(a, l, c) {
        return (1 - c) * a + c * l;
      }(i, n, 1 - Math.exp(-r * o))), Math.round(this.value) === this.to && (this.value = this.to, e = true);
      else {
        this.currentTime += t;
        const a = ol(0, this.currentTime / this.duration, 1);
        e = a >= 1;
        const l = e ? 1 : this.easing(a);
        this.value = this.from + (this.to - this.from) * l;
      }
      var i, n, r, o;
      (_a2 = this.onUpdate) == null ? void 0 : _a2.call(this, this.value, e), e && this.stop();
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t, e, { lerp: i = 0.1, duration: n = 1, easing: r = (l) => l, onStart: o, onUpdate: a }) {
      this.from = this.value = t, this.to = e, this.lerp = i, this.duration = n, this.easing = r, this.currentTime = 0, this.isRunning = true, o == null ? void 0 : o(), this.onUpdate = a;
    }
  }
  class kh {
    constructor({ wrapper: t, content: e, autoResize: i = true, debounce: n = 250 } = {}) {
      __publicField(this, "resize", () => {
        this.onWrapperResize(), this.onContentResize();
      });
      __publicField(this, "onWrapperResize", () => {
        this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
      });
      __publicField(this, "onContentResize", () => {
        this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
      });
      this.wrapper = t, this.content = e, i && (this.debouncedResize = /* @__PURE__ */ function(r, o) {
        let a;
        return function() {
          let l = arguments, c = this;
          clearTimeout(a), a = setTimeout(function() {
            r.apply(c, l);
          }, o);
        };
      }(this.resize, n), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, false) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
      var _a2, _b;
      (_a2 = this.wrapperResizeObserver) == null ? void 0 : _a2.disconnect(), (_b = this.contentResizeObserver) == null ? void 0 : _b.disconnect(), window.removeEventListener("resize", this.debouncedResize, false);
    }
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height
      };
    }
  }
  class al {
    constructor() {
      this.events = {};
    }
    emit(t, ...e) {
      let i = this.events[t] || [];
      for (let n = 0, r = i.length; n < r; n++) i[n](...e);
    }
    on(t, e) {
      var _a2;
      return ((_a2 = this.events[t]) == null ? void 0 : _a2.push(e)) || (this.events[t] = [
        e
      ]), () => {
        var _a3;
        this.events[t] = (_a3 = this.events[t]) == null ? void 0 : _a3.filter((i) => e !== i);
      };
    }
    off(t, e) {
      var _a2;
      this.events[t] = (_a2 = this.events[t]) == null ? void 0 : _a2.filter((i) => e !== i);
    }
    destroy() {
      this.events = {};
    }
  }
  const ia = 100 / 6;
  class Rh {
    constructor(t, { wheelMultiplier: e = 1, touchMultiplier: i = 1 }) {
      __publicField(this, "onTouchStart", (t) => {
        const { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
          x: 0,
          y: 0
        }, this.emitter.emit("scroll", {
          deltaX: 0,
          deltaY: 0,
          event: t
        });
      });
      __publicField(this, "onTouchMove", (t) => {
        const { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t, n = -(e - this.touchStart.x) * this.touchMultiplier, r = -(i - this.touchStart.y) * this.touchMultiplier;
        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
          x: n,
          y: r
        }, this.emitter.emit("scroll", {
          deltaX: n,
          deltaY: r,
          event: t
        });
      });
      __publicField(this, "onTouchEnd", (t) => {
        this.emitter.emit("scroll", {
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: t
        });
      });
      __publicField(this, "onWheel", (t) => {
        let { deltaX: e, deltaY: i, deltaMode: n } = t;
        e *= n === 1 ? ia : n === 2 ? this.windowWidth : 1, i *= n === 1 ? ia : n === 2 ? this.windowHeight : 1, e *= this.wheelMultiplier, i *= this.wheelMultiplier, this.emitter.emit("scroll", {
          deltaX: e,
          deltaY: i,
          event: t
        });
      });
      __publicField(this, "onWindowResize", () => {
        this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
      });
      this.element = t, this.wheelMultiplier = e, this.touchMultiplier = i, this.touchStart = {
        x: null,
        y: null
      }, this.emitter = new al(), window.addEventListener("resize", this.onWindowResize, false), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
        passive: false
      }), this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: false
      }), this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: false
      }), this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: false
      });
    }
    on(t, e) {
      return this.emitter.on(t, e);
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, false), this.element.removeEventListener("wheel", this.onWheel, {
        passive: false
      }), this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: false
      }), this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: false
      }), this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: false
      });
    }
  }
  class Ih {
    constructor({ wrapper: t = window, content: e = document.documentElement, wheelEventsTarget: i = t, eventsTarget: n = i, smoothWheel: r = true, syncTouch: o = false, syncTouchLerp: a = 0.075, touchInertiaMultiplier: l = 35, duration: c, easing: h = (_) => Math.min(1, 1.001 - Math.pow(2, -10 * _)), lerp: d = !c && 0.1, infinite: f = false, orientation: p = "vertical", gestureOrientation: m = "vertical", touchMultiplier: u = 1, wheelMultiplier: g = 1, autoResize: v = true, __experimental__naiveDimensions: y = false } = {}) {
      this.__isSmooth = false, this.__isScrolling = false, this.__isStopped = false, this.__isLocked = false, this.onVirtualScroll = ({ deltaX: _, deltaY: T, event: S }) => {
        if (S.ctrlKey) return;
        const w = S.type.includes("touch"), b = S.type.includes("wheel");
        if (this.options.syncTouch && w && S.type === "touchstart" && !this.isStopped && !this.isLocked) return void this.reset();
        const A = _ === 0 && T === 0, L = this.options.gestureOrientation === "vertical" && T === 0 || this.options.gestureOrientation === "horizontal" && _ === 0;
        if (A || L) return;
        let x = S.composedPath();
        if (x = x.slice(0, x.indexOf(this.rootElement)), x.find((D) => {
          var I, C, q, R, N;
          return ((I = D.hasAttribute) === null || I === void 0 ? void 0 : I.call(D, "data-lenis-prevent")) || w && ((C = D.hasAttribute) === null || C === void 0 ? void 0 : C.call(D, "data-lenis-prevent-touch")) || b && ((q = D.hasAttribute) === null || q === void 0 ? void 0 : q.call(D, "data-lenis-prevent-wheel")) || ((R = D.classList) === null || R === void 0 ? void 0 : R.contains("lenis")) && !(!((N = D.classList) === null || N === void 0) && N.contains("lenis-stopped"));
        })) return;
        if (this.isStopped || this.isLocked) return void S.preventDefault();
        if (this.isSmooth = this.options.syncTouch && w || this.options.smoothWheel && b, !this.isSmooth) return this.isScrolling = false, void this.animate.stop();
        S.preventDefault();
        let E = T;
        this.options.gestureOrientation === "both" ? E = Math.abs(T) > Math.abs(_) ? T : _ : this.options.gestureOrientation === "horizontal" && (E = _);
        const O = w && this.options.syncTouch, M = w && S.type === "touchend" && Math.abs(E) > 5;
        M && (E = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + E, Object.assign({
          programmatic: false
        }, O ? {
          lerp: M ? this.options.syncTouchLerp : 1
        } : {
          lerp: this.options.lerp,
          duration: this.options.duration,
          easing: this.options.easing
        }));
      }, this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const _ = this.animatedScroll;
          this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - _), this.emit();
        }
      }, window.lenisVersion = "1.0.42", t !== document.documentElement && t !== document.body || (t = window), this.options = {
        wrapper: t,
        content: e,
        wheelEventsTarget: i,
        eventsTarget: n,
        smoothWheel: r,
        syncTouch: o,
        syncTouchLerp: a,
        touchInertiaMultiplier: l,
        duration: c,
        easing: h,
        lerp: d,
        infinite: f,
        gestureOrientation: m,
        orientation: p,
        touchMultiplier: u,
        wheelMultiplier: g,
        autoResize: v,
        __experimental__naiveDimensions: y
      }, this.animate = new Dh(), this.emitter = new al(), this.dimensions = new kh({
        wrapper: t,
        content: e,
        autoResize: v
      }), this.toggleClassName("lenis", true), this.velocity = 0, this.isLocked = false, this.isStopped = false, this.isSmooth = o || r, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false), this.virtualScroll = new Rh(n, {
        touchMultiplier: u,
        wheelMultiplier: g
      }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", false), this.toggleClassName("lenis-smooth", false), this.toggleClassName("lenis-scrolling", false), this.toggleClassName("lenis-stopped", false), this.toggleClassName("lenis-locked", false);
    }
    on(t, e) {
      return this.emitter.on(t, e);
    }
    off(t, e) {
      return this.emitter.off(t, e);
    }
    setScroll(t) {
      this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t;
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
    }
    start() {
      this.isStopped && (this.isStopped = false, this.reset());
    }
    stop() {
      this.isStopped || (this.isStopped = true, this.animate.stop(), this.reset());
    }
    raf(t) {
      const e = t - (this.time || t);
      this.time = t, this.animate.advance(1e-3 * e);
    }
    scrollTo(t, { offset: e = 0, immediate: i = false, lock: n = false, duration: r = this.options.duration, easing: o = this.options.easing, lerp: a = !r && this.options.lerp, onComplete: l, force: c = false, programmatic: h = true } = {}) {
      if (!this.isStopped && !this.isLocked || c) {
        if ([
          "top",
          "left",
          "start"
        ].includes(t)) t = 0;
        else if ([
          "bottom",
          "right",
          "end"
        ].includes(t)) t = this.limit;
        else {
          let d;
          if (typeof t == "string" ? d = document.querySelector(t) : (t == null ? void 0 : t.nodeType) && (d = t), d) {
            if (this.options.wrapper !== window) {
              const p = this.options.wrapper.getBoundingClientRect();
              e -= this.isHorizontal ? p.left : p.top;
            }
            const f = d.getBoundingClientRect();
            t = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
          }
        }
        if (typeof t == "number") {
          if (t += e, t = Math.round(t), this.options.infinite ? h && (this.targetScroll = this.animatedScroll = this.scroll) : t = ol(0, t, this.limit), i) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), void (l == null || l(this));
          if (!h) {
            if (t === this.targetScroll) return;
            this.targetScroll = t;
          }
          this.animate.fromTo(this.animatedScroll, t, {
            duration: r,
            easing: o,
            lerp: a,
            onStart: () => {
              n && (this.isLocked = true), this.isScrolling = true;
            },
            onUpdate: (d, f) => {
              this.isScrolling = true, this.velocity = d - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = d, this.setScroll(this.scroll), h && (this.targetScroll = d), f || this.emit(), f && (this.reset(), this.emit(), l == null ? void 0 : l(this), this.__preventNextScrollEvent = true, requestAnimationFrame(() => {
                delete this.__preventNextScrollEvent;
              }));
            }
          });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite ? (t = this.animatedScroll, e = this.limit, (t % e + e) % e) : this.animatedScroll;
      var t, e;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    set isSmooth(t) {
      this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClassName("lenis-smooth", t));
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(t) {
      this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClassName("lenis-scrolling", t));
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(t) {
      this.__isStopped !== t && (this.__isStopped = t, this.toggleClassName("lenis-stopped", t));
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isLocked(t) {
      this.__isLocked !== t && (this.__isLocked = t, this.toggleClassName("lenis-locked", t));
    }
    get className() {
      let t = "lenis";
      return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t;
    }
    toggleClassName(t, e) {
      this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this);
    }
  }
  function Nh() {
    this.VEL = this.lenis.velocity;
    for (let [s, t] of this.IOSSLL.entries()) t.get("CLS").updFn(this.lenis.animatedScroll);
    this.SLLthrottle(), this.SLLdebounce(), this.SLLbar && this.busy == 0 && this.SLLbar.seek(this.lenis.animatedScroll / this.FOTSLL), this.SLL.set("target", this.lenis.animatedScroll);
  }
  function Fh() {
    for (let [s, t] of this.IOSSLL.entries()) t.get("CLS").updFn(this.lenis.animatedScroll);
    this.SLLthrottle(), this.SLLdebounce(), this.SLL.set("target", this.lenis.animatedScroll);
  }
  function qh() {
    this.SLL.get("target") > this.lenis.targetScroll ? document.documentElement.classList.add("sll-up") : this.SLL.get("target") < this.lenis.targetScroll && document.documentElement.classList.remove("sll-up"), this.lenis.targetScroll == 0 ? document.documentElement.classList.remove("sll-start") : this.lenis.targetScroll > 0 && document.documentElement.classList.add("sll-start");
  }
  function Vh() {
  }
  function Bh() {
    const s = this.OPS.get("touch");
    this.lenis = new Ih({
      wheelEventsTarget: document.documentElement,
      lerp: 0.12,
      smoothWheel: !s,
      smoothTouch: false,
      normalizeWheel: true
    }), this.lenis.stop();
  }
  function zh() {
    this.onCheckSLL = qh.bind(this), this.onBounceSLL = Vh.bind(this), this.SLLthrottle = Mh(this.onCheckSLL, 500), this.SLLdebounce = rl(this.onBounceSLL, 30), this.OPS.get("touch") == true ? this.scrollFn = Fh.bind(this) : this.scrollFn = Nh.bind(this), this.lenis.on("scroll", this.scrollFn);
  }
  function Uh() {
    this.EVT = /* @__PURE__ */ new Map(), this.SCRFn = $h.bind(this), this.SCRdebounce = rl(() => this.SCRFn(0), 160), window.onresize = this.SCRdebounce, this.visFn = Wh.bind(this), document.addEventListener("visibilitychange", this.visFn), this.custom = ll.bind(this), this.EVT.set("custom", this.custom), this.EVT = this.custom();
  }
  function $h(s = 1) {
    let t = window.innerWidth, e = window.innerHeight;
    const i = window.matchMedia("(hover:none)").matches;
    if (this.OPS.set("touch", i), i == 1 && this.SCR && s == 0 && this.SCR[0] == window.innerWidth) return false;
    if (this.SCR = [
      t,
      e
    ], this.MOU && (this.MOU.SCR[0] = t, this.MOU.SCR[1] = e), this.nav && this.nav.resizeFn && (this.nav.SCR[0] = t, this.nav.SCR[1] = e, this.nav.resizeFn(this.OPS)), this.IOS) for (let n of this.IOS) n.get("CLS") != null && n.get("CLS").resizeFn && n.get("CLS").resizeFn(window.scrollY, this.OPS);
    if (this.CMPS) for (let n of this.CMPS) n.get("CLS") != null && n.get("CLS").resizeFn && n.get("CLS").resizeFn(window.scrollY, this.OPS);
  }
  function Wh(s) {
    document.visibilityState == "hidden" ? (this.lenis.stop(), window.cancelAnimationFrame(this.UPD)) : (this.lenis.start(), this.updFn(performance.now()));
  }
  function ll() {
    let s = /* @__PURE__ */ new Map();
    return s.set("SLL", new CustomEvent("SLL", {
      state: null,
      scrollto: null,
      y: 0
    })), document.addEventListener("SLL", (t) => {
      t.scrollto != null ? this.lenis.scrollTo(t.scrollto, {
        offset: t.y,
        force: true
      }) : t.state == 1 ? this.lenis.start() : this.lenis.stop();
    }), s.get("SLL").state = null, s.get("SLL").scrollto = null, s.set("ANM", new CustomEvent("ANM", {
      el: null,
      state: null,
      param: null
    })), document.addEventListener("ANM", (t) => {
    }), s.set("CTA", new CustomEvent("CTA", {
      els: null,
      state: null
    })), document.addEventListener("CTA", (t) => {
    }), s;
  }
  function Hh(s) {
    this.stats && this.stats.begin(), this.lenis && this.lenis.raf(s);
    for (let [t, e] of this.IOSUPD.entries()) e.get("CLS").updFn(this.lenis.animatedScroll, this.VEL);
    this.stats && this.stats.end();
  }
  function Yh(s = null) {
    const t = [
      "#FC753F",
      "#EDE6D6",
      "#758B3B",
      "#1D261D"
    ], e = document.createElement("div");
    e.classList.add("ldr"), s.back == 0 ? anime.utils.set(e, {
      y: "-100%"
    }) : anime.utils.set(e, {
      y: "100%"
    }), document.body.insertAdjacentElement("beforeend", e);
    let i = 0.6;
    anime.utils.set(e, {
      "--ldrbg": t[Math.floor(Math.random() * t.length)]
    });
    const n = anime.createTimeline({
      autoplay: false
    }).add(e, {
      y: [
        "100%",
        "0%"
      ],
      duration: i,
      ease: "inOut(2)"
    }, 0).init(), r = anime.createTimeline({
      autoplay: false,
      onComplete: () => {
        e.remove();
      }
    }).add(e, {
      y: [
        "0%",
        "-100%"
      ],
      duration: i,
      ease: "inOut(2.4)"
    }, i).init();
    return /* @__PURE__ */ new Map([
      [
        "el",
        e
      ],
      [
        "ANMin",
        n
      ],
      [
        "ANMout",
        r
      ],
      [
        "type",
        s.type ? s.type : 1
      ]
    ]);
  }
  async function jh(s, t) {
    await s.get("ANMin").play(), t();
  }
  async function Xh(s = null, t = null, e = null) {
    if (this.busy == 1) return false;
    const i = "http://192.168.0.113:1234/", n = new URL(this.URL, i), r = new URL(s, i);
    if ((this.nav.isOpen == 1 || document.documentElement.querySelector(".nav .desp.A")) && await this.nav.closeFn(document.documentElement.querySelector(".nav")), n.href.replace(r.hash, "") === r.href.replace(r.hash, "")) return r.hash && document.querySelector(r.hash) && this.lenis.scrollTo(r.hash, {
      offset: -100,
      force: true
    }), false;
    this.busy = 1, window.history.pushState({}, document.title, s), this.URL = s, this.lenis.stop();
    const o = Object.fromEntries(this.OPS);
    o.back = e;
    const a = Yh({}), l = new Promise((f, p) => jh(a, f)), c = new Promise((f, p) => Kh(this.URL, f)), h = new Promise((f, p) => Gh(o, this.URL, f)), d = await Promise.all([
      l,
      c,
      h
    ]);
    document.querySelector("main").remove(), this.lenis.scrollTo(0, {
      immediate: true,
      lock: true,
      force: true
    }), await document.querySelector("#app").insertAdjacentHTML("beforeend", d[2].innerHTML), await Promise.all([
      this.setIMG(),
      this.setVID()
    ]), this.initApp(a);
  }
  async function Gh(s, t, e) {
    const i = new DOMParser(), n = await Oh(t), r = i.parseFromString(n, "text/html");
    let o = r;
    {
      const a = r.querySelectorAll("#videoLow,.waiter,.ldr,.nav,.head,.fixBtn");
      for (let l of a) l.remove();
      o = r.querySelector("body");
    }
    e(o);
  }
  async function Kh(s, t) {
    new DOMParser(), await (await window.fetch(s, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    })).text();
    const i = document.createElement("div");
    i.innerHTML = i, document.title = i.title, t();
  }
  function Qh() {
    this.popFn = Xh.bind(this), window.addEventListener("popstate", (s) => {
      s.preventDefault();
      const t = "http://192.168.0.113:1234/", e = new URL(window.location.pathname, t);
      this.popFn(e.pathname, false, true);
    }, {
      passive: true
    });
  }
  function Zh() {
    const s = new Set(document.querySelectorAll("a")), t = this.CTAlinks.size > 0 ? Is(this.CTAlinks, s) : void 0;
    if (t) for (const o of t) o.onclick = null, this.CTAlinks.delete(o);
    const e = new URL(document.baseURI);
    for (let o of s) {
      if (!o.href || o.getAttribute("href") == "" || o.target == "_blank") continue;
      let a = new URL(o.href, document.baseURI);
      if (e.origin === a.origin == false) {
        o.target = "_blank", o.href = o.classList.contains("SHA") ? o.href.replace("MYURL", window.location.href) : o.href;
        continue;
      }
      e.href == a.href || e.href + "/" == a.href ? o.classList.add("ALK") : o.classList.remove("ALK"), o.onclick = (c) => {
        c.preventDefault();
        let h = o.getAttribute("href");
        if (h === "#quote-project") {
          this.mdlContact.openFn();
          return;
        }
        if (h.startsWith("#")) return this.lenis.scrollTo(h, {
          offset: -100,
          force: true
        }), false;
        this.popFn(h, o, false);
      }, this.CTAlinks.add(o);
    }
    const i = document.querySelectorAll(".CPY");
    for (let o of i) o.onclick = (a) => {
      if (a.preventDefault(), window.isSecureContext && navigator.clipboard) navigator.clipboard.writeText(window.location.href);
      else {
        const l = document.createElement("textarea");
        l.value = window.location.href, document.body.appendChild(l), l.focus(), l.select(), document.execCommand("copy"), document.body.removeChild(l);
      }
    };
    const n = document.querySelectorAll(".tabGroup");
    if (n) for (let o of n) {
      let a = -1;
      const l = o.querySelectorAll(".Atab"), c = o.querySelectorAll(".Atab_c"), h = o.querySelectorAll(".Atab_h"), d = o.querySelectorAll(".Atab_b");
      for (let [f, p] of c.entries()) p.onclick = async (m) => {
        m.preventDefault();
        let u = d[f].clientHeight < window.innerHeight ? d[f].clientHeight * 1 / window.innerHeight : 0.6;
        if (a != -1 && (l[a].classList.remove("A"), anime.animate(h[a], {
          height: [
            h[a].clientHeight + "px",
            0
          ],
          duration: u,
          ease: "inOut(2)"
        }), a == f)) return a = -1, false;
        l[f].classList.add("A"), anime.animate(h[f], {
          height: d[f].clientHeight + "px",
          duration: u,
          ease: "inOut(2)",
          onBegin: () => {
          },
          onComplete: () => {
            h[f].style.height = "auto", this.lenis.scrollTo(p, {
              offset: -150,
              force: true
            });
          }
        }), a = f;
      };
    }
    const r = document.querySelectorAll(".openQuickMDL");
    if (r) for (let o of r) o.onclick = async (a) => {
      a.preventDefault(), this.quickMDL.openFn(o);
    };
  }
  class Jh {
    constructor(t) {
      const e = t.parentNode;
      this.MD = e.querySelector("video") ?? e.querySelector("img"), this.type = this.MD.tagName == "VIDEO" ? "VID" : "IMG", this.load = 0;
    }
    set(t) {
      if (this.type == "VID" && (this.touch = t.get("touch"), this.MD.dataset.auto)) {
        if (this.auto = 1, this.MD.src || this.MD.dataset.src) return this.load = 1, false;
        this.MD.src = "data:,", this.MD.loop = true, this.MD.muted = true, this.MD.setAttribute("webkit-playsinline", "webkit-playsinline"), this.MD.setAttribute("playsinline", "playsinline"), this.touch == true && this.MD.load();
      }
    }
    kill() {
      this.type == "VID" && this.MD.pause();
    }
    async chkFn(t, e) {
      let i = false;
      return t.isIntersecting == null || (t.isIntersecting == true ? i = this.start() : i = this.stop()), i;
    }
    start() {
      return this.active = 1, this.load == 0 ? this.onLoad() : this.load == 1 && this.auto && this.MD.play(), true;
    }
    stop() {
      return this.active = 0, this.type == "VID" && this.MD.currentTime > 0 && !this.MD.paused && !this.MD.ended && this.MD.readyState > this.MD.HAVE_CURRENT_DATA && this.MD.pause(), false;
    }
    async onLoad() {
      if (this.load = -1, this.type == "IMG") this.MD.dataset.src = this.MD.dataset.lazy, delete this.MD.dataset.lazy, this.loadFn(this.MD).then(() => {
        this.load = 1;
      });
      else if (this.type == "VID") {
        if (this.MD.classList.contains("WT")) return false;
        this.MD.dataset.src = this.MD.dataset.lazy, delete this.MD.dataset.lazy, this.loadFn(this.MD).then(() => {
          this.okFn(), this.load = 1, this.MD.play();
        });
      }
    }
  }
  function co(s, t = null) {
    return new Promise((e, i) => {
      if (s.getAttribute("src")) return e(s), false;
      let n = new Image(), r = "";
      s.dataset.src && (r = s.dataset.src);
      let o = 0;
      /\.(gif)$/.test(r) && (o = 1), s.onload = () => {
        s.classList.add("L"), delete s.dataset.src, n.remove(), e(s);
      }, s.onerror = () => {
        e(s);
      }, n.onload = () => {
        s.src = r;
      }, n.onerror = () => {
        s.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjYGRg/A8AAQoBAj0TXDIAAAAASUVORK5CYII=", e(s);
      }, n.src = r, o == 1 && (s.src = r, s.classList.add("L"));
    });
  }
  async function tu(s = null) {
    const t = new Set(document.querySelectorAll("img.WT")), e = new Set(document.querySelectorAll("img:not(.WT)")), i = this.IMG.size > 0 ? Is(this.IMG, t) : void 0;
    if (i) for (const o of i) document.body.contains(o) || this.IMG.delete(o);
    const n = this.IMG.size > 0 ? Is(this.IMG, e) : void 0;
    if (n) for (const o of n) document.body.contains(o) || this.IMG.delete(o);
    const r = [];
    for (let o of t) if (!this.IMG.has(o)) {
      const a = co(o);
      r.push(a);
    }
    await Promise.all(r).then((o) => {
      for (let a of o) this.IMG.add(a);
    }), this.stepIMG(e);
  }
  async function eu(s) {
    for (let t of s) !this.IMG.has(t) && !t.dataset.lazy && (await co(t), this.IMG.add(t));
  }
  function iu(s) {
    s.oncanplay = null, s.onplay = null, s.currentTime = 0, !(s.currentTime > 0 && !s.paused && !s.ended && s.readyState > s.HAVE_CURRENT_DATA) && !s.dataset.auto && s.pause();
  }
  async function Kn(s, t = false) {
    return new Promise((e, i) => {
      s.dataset.loop ? s.loop = false : s.loop = true, s.muted = true, s.autoplay = true, s.setAttribute("webkit-playsinline", "webkit-playsinline"), s.setAttribute("playsinline", "playsinline"), s.onplay = () => {
        s.isPlaying = true;
      }, s.oncanplay = () => {
        s.isPlaying && (s.classList.add("L"), iu(s), e(s));
      }, s.src = s.dataset.src, delete s.dataset.src, s.onerror = () => {
        e(s);
      }, s.play();
    });
  }
  async function su(s = null) {
    const t = new Set(document.querySelectorAll("video.WT")), e = new Set(document.querySelectorAll("video:not(.WT)")), i = [], n = this.VID.size > 0 ? Is(this.VID, t) : void 0;
    if (n) for (const o of n) document.body.contains(o) || this.VID.delete(o);
    const r = this.VID.size > 0 ? Is(this.VID, e) : void 0;
    if (r) for (const o of r) document.body.contains(o) || this.VID.delete(o);
    for (let o of t) if (!this.VID.has(o)) {
      const a = Kn(o);
      i.push(a);
    }
    await Promise.all(i).then((o) => {
      for (let a of o) this.VID.add(a);
    }), this.stepVID(e);
  }
  async function nu(s) {
    for (let t of s) !this.VID.has(t) && !t.dataset.lazy && (await Kn(t), this.VID.add(t));
  }
  function ru(s) {
    const t = new Jh(s);
    return t.type == "VID" ? (t.loadFn = Kn, t.okFn = () => {
      this[t.type].add(t.MD);
    }) : (t.loadFn = co, t.okFn = () => {
      this[t.type].add(t.MD), this.killIO(s);
    }), t;
  }
  let ou = class {
    constructor(t) {
      this.el = t;
    }
    set(t) {
      this.setEVT(), console.log(window.innerWidth / window.innerHeight < 1.2), console.log(window.innerWidth < 1194);
    }
    async kill() {
    }
    start(t = 0) {
      let e, i;
      window.innerWidth / window.innerHeight < 1.2 && window.innerWidth < 1194 ? (e = [
        this.el.querySelector(".bx-1"),
        this.el.querySelector(".bx-2"),
        this.el.querySelector(".bx-3"),
        this.el.querySelector(".bx-4")
      ], i = [
        this.el.querySelector(".bx-1 .bx_inner"),
        this.el.querySelector(".bx-2 .bx_inner"),
        this.el.querySelector(".bx-3 .bx_inner"),
        this.el.querySelector(".bx-4 .bx_inner")
      ]) : (e = [
        this.el.querySelector(".bx-2"),
        this.el.querySelector(".bx-3"),
        this.el.querySelector(".bx-4"),
        this.el.querySelector(".bx-1")
      ], i = [
        this.el.querySelector(".bx-2 .bx_inner"),
        this.el.querySelector(".bx-3 .bx_inner"),
        this.el.querySelector(".bx-4 .bx_inner"),
        this.el.querySelector(".bx-1 .bx_inner")
      ]);
      const n = anime.createTimeline({
        autoplay: false
      }).add(e, {
        opacity: {
          from: 0,
          to: 1,
          ease: "outBack(1.5)",
          duration: 0.6
        },
        y: {
          from: "2rem",
          to: "0rem",
          ease: "outElastic(.6, .4)",
          duration: 0.9
        },
        delay: anime.stagger(0.1)
      }, 0.2).add(i, {
        opacity: {
          from: 0,
          to: 1,
          ease: "outBack(1.5)",
          duration: 0.6
        },
        y: {
          from: "2rem",
          to: "0rem",
          ease: "outElastic(.6, .4)",
          duration: 0.9
        },
        delay: anime.stagger(0.1)
      }, 0.3).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          n
        ]
      ]);
    }
    setEVT() {
      const t = this.el.querySelector(".sel"), e = this.el.querySelector(".sel_c");
      e.onclick = (i) => {
        i.preventDefault(), t.classList.toggle("A");
      };
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY) {
    }
  }, au = class {
    constructor(t) {
      this.el = t, this.act = 0;
    }
    set(t) {
      this.setEVT(t);
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: {
          from: 0,
          to: 1
        },
        duration: 0.9
      }, 0).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT(t) {
      const e = this.el.querySelectorAll(".bg_el"), i = this.el.querySelectorAll(".info_el"), n = this.el.querySelectorAll(".Alabel"), r = this.el.querySelectorAll(".im i"), o = [
        "#FFFFFF",
        "#1D261D",
        "#1D261D"
      ], a = [
        "#EDE6D6",
        "#1D261D",
        "#FFFFFF"
      ], l = [
        "#1D261D",
        "#758B3B",
        "#EDE6D6"
      ], c = this.el.querySelector(".TL"), h = this.el.querySelector(".TR"), d = this.el.querySelector(".pag_prog .inner"), f = this.el.querySelector(".pag_nums .act"), p = () => {
        e[this.act].classList.remove("A"), i[this.act].classList.remove("A"), n[this.act].classList.remove("A"), r[this.act].classList.remove("A");
      }, m = () => {
        anime.animate(this.el, {
          "--txcol": o[this.act],
          "--imbgs": a[this.act],
          duration: 0.45,
          delay: 0.3,
          ease: "inOut(2)"
        }), anime.animate(this.el, {
          "--btnbg": l[this.act],
          "--btntx": o[this.act],
          duration: 0.45,
          ease: "linear"
        }), e[this.act].classList.add("A"), i[this.act].classList.add("A"), r[this.act].classList.add("A"), n[this.act].classList.add("A"), f.innerHTML = this.act + 1, d.style.width = (this.act + 1) / e.length * 100 + "%";
      };
      c.onclick = (u) => {
        u.preventDefault(), p(), this.act = this.act <= 0 ? i.length - 1 : this.act - 1, m();
      }, h.onclick = (u) => {
        u.preventDefault(), p(), this.act = this.act >= i.length - 1 ? 0 : this.act + 1, m();
      }, m();
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY) {
    }
  };
  const lu = {}, cu = {
    intro: (s) => new ou(s),
    stories: (s) => new au(s),
    fake: (s) => new Fake(s)
  };
  let hu = class {
    constructor(t) {
      this.el = t;
    }
    set(t) {
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: [
          0,
          1
        ],
        duration: 1,
        ease: "inOut(2)"
      }).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT() {
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY) {
    }
  }, uu = class {
    constructor(t) {
      this.el = t, this.needy = [
        "lenis."
      ], this.act = 0;
    }
    set(t) {
      this.setEVT();
    }
    async kill() {
    }
    setEVT() {
      const t = this.el.querySelector(".about_team button.Abtn"), e = this.el.querySelector(".team .bottom"), i = this.el.querySelector(".team .hold"), n = this.el.querySelectorAll(".mdls .mdl"), r = this.el.querySelectorAll(".team button.ppl");
      for (let [o, a] of r.entries()) a.onclick = (l) => {
        l.preventDefault(), n[o].classList.add("A"), this.lenisstop(), n[o].querySelector(".mdl_close").onclick = (c) => {
          c.preventDefault(), n[o].classList.remove("A"), this.lenisstart();
        };
      };
      t && (t.onclick = (o) => {
        o.preventDefault(), this.act === 0 ? (this.act = 1, e.classList.add("A"), t.classList.add("A"), anime.animate(e, {
          height: i.clientHeight + "px",
          duration: 0.45,
          ease: "inOut(2)",
          onComplete: () => {
            e.style.height = "auto";
          }
        })) : (this.act = 0, e.classList.remove("A"), t.classList.remove("A"), anime.animate(e, {
          height: 0,
          duration: 0.45,
          ease: "inOut(2)",
          onBegin: () => {
            this.lenisscrollto(this.el, -100, 0.45);
          }
        }));
      });
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY) {
    }
  };
  const du = {}, fu = {
    intro: (s) => new hu(s),
    team: (s) => new uu(s),
    fake: (s) => new Fake(s)
  };
  let pu = class {
    constructor(t) {
      this.el = t;
    }
    set(t) {
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: [
          0,
          1
        ],
        duration: 1,
        ease: "inOut(2)"
      }).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT() {
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY) {
    }
  };
  const mu = {}, gu = {
    intro: (s) => new pu(s),
    fake: (s) => new Fake(s)
  };
  let _u = class {
    constructor(t) {
      this.el = t;
    }
    set(t) {
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: [
          0,
          1
        ],
        duration: 1,
        ease: "inOut(2)"
      }).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT() {
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY) {
    }
  };
  const vu = {}, yu = {
    intro: (s) => new _u(s),
    fake: (s) => new Fake(s)
  };
  let Su = class {
    constructor(t) {
      this.el = t;
    }
    set(t) {
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: [
          0,
          1
        ],
        duration: 1,
        ease: "inOut(2)"
      }).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT() {
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY) {
    }
  };
  const bu = {}, Tu = {
    intro: (s) => new Su(s),
    fake: (s) => new Fake(s)
  };
  let wu = class {
    constructor(t) {
      this.el = t;
    }
    set(t) {
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: [
          0,
          1
        ],
        duration: 1,
        ease: "inOut(2)"
      }).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT() {
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY) {
    }
  };
  const Au = {}, Lu = {
    intro: (s) => new wu(s),
    fake: (s) => new Fake(s)
  };
  let Eu = class {
    constructor(t) {
      this.el = t, this.blogMain = t.querySelector(".blogMain"), this.blogPosts = t.querySelector(".blogMain_posts"), this.blogPostsHold = t.querySelector(".blogMain_posts .hold"), this.filtSearch = t.querySelector(".filts_srch"), this.filtClear = t.querySelector(".filts .filts_clear"), this.catsBtns = t.querySelectorAll(".filtsCats button"), this.typesBtns = t.querySelectorAll(".filtsTypes button"), this.dateBtns = t.querySelectorAll(".filtsDate input"), this.blogPag = t.querySelector(".blogMain_pag"), this.blogPagHold = t.querySelector(".blogMain_pag_hold"), this.pagPrev = t.querySelector(".blogMain_pag .Apag.TL"), this.pagStart = t.querySelector(".blogMain_pag .Apag.TLF"), this.pagNext = t.querySelector(".blogMain_pag .Apag.TR"), this.pagEnd = t.querySelector(".blogMain_pag .Apag.TRF"), this.page = 1, this.perpage = 8, this.max = this.blogMain.dataset.maxpage !== "" ? parseInt(this.blogMain.dataset.maxpages) : 1, this.cat = [], this.types = [], this.search = "", this.date = this.blogMain.querySelector(".filtsDate input:checked") ? this.blogMain.querySelector(".filtsDate input:checked").value : "", this.pos = 0, this.needy = /* @__PURE__ */ new Set([
        "SCRFn",
        "initCTA",
        "lenis.",
        "setIOS",
        "initIOS",
        "startIOS"
      ]);
    }
    async set(t) {
      this.global = Object.fromEntries(t), this.max > 1 ? await this.createPags() : this.blogPag.classList.add("hide"), this.setEVT();
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: [
          0,
          1
        ],
        duration: 1,
        ease: "inOut(2)"
      }).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT() {
      if (this.pagPrev.onclick = async () => {
        this.page--, await this.loadPosts(this.page, this.cat, this.search, this.types, this.date);
      }, this.pagStart.onclick = async () => {
        this.page = 1, await this.loadPosts(this.page, this.cat, this.search, this.types, this.date);
      }, this.pagNext.onclick = async () => {
        this.page++, await this.loadPosts(this.page, this.cat, this.search, this.types, this.date);
      }, this.pagEnd.onclick = async () => {
        this.page = this.max, await this.loadPosts(this.page, this.cat, this.search, this.types, this.date);
      }, this.filtSearch.onsubmit = async (c) => {
        c.preventDefault(), this.page = 1, this.search = this.filtSearch.querySelector("input").value, await this.loadPosts(this.page, this.cat, this.search, this.types, this.date);
      }, this.catsBtns) for (let c of this.catsBtns) c.onclick = async () => {
        c.classList.contains("A") ? (this.cat = this.cat.filter((h) => h !== c.dataset.slug), c.classList.remove("A")) : (c.classList.add("A"), this.cat.push(c.dataset.slug)), this.page = 1, await this.loadPosts(this.page, this.cat, this.search, this.types, this.date);
      };
      if (this.typesBtns) for (let c of this.typesBtns) c.onclick = async () => {
        c.classList.contains("A") ? (this.types = this.types.filter((h) => h !== c.dataset.slug), c.classList.remove("A")) : (c.classList.add("A"), this.types.push(c.dataset.slug)), this.page = 1, await this.loadPosts(this.page, this.cat, this.search, this.types, this.date);
      };
      if (this.dateBtns) for (let c of this.dateBtns) c.onchange = async () => {
        this.date = this.blogMain.querySelector(".filtsDate input:checked").value, this.page = 1, await this.loadPosts(this.page, this.cat, this.search, this.types, this.date);
      };
      this.filtClear.onclick = async (c) => {
        if (c.preventDefault(), this.page = 1, this.filtSearch.querySelector("input").value = "", this.search = this.filtSearch.querySelector("input").value, this.cat = [], this.types = [], this.catsBtns) for (let h of this.catsBtns) h.classList.remove("A");
        if (this.typesBtns) for (let h of this.typesBtns) h.classList.remove("A");
        if (this.dateBtns) {
          for (let h of this.dateBtns) h.checked = false;
          this.dateBtns[0].checked = true;
        }
        this.date = "all", this.filtSearch.classList.remove("A"), await this.loadPosts(this.page, this.cat, this.search, this.types, this.date);
      };
      const t = this.el.querySelectorAll(".Atab"), e = this.el.querySelectorAll(".Atab_c"), i = this.el.querySelectorAll(".Atab_h"), n = this.el.querySelectorAll(".Atab_b");
      for (let [c, h] of e.entries()) h.onclick = async (d) => {
        h.parentElement.classList.contains("A") ? (t[c].classList.remove("A"), anime.animate(i[c], {
          height: [
            n[c].clientHeight + "px",
            "0px"
          ],
          duration: 0.45,
          ease: "inOut(2)"
        })) : (t[c].classList.add("A"), anime.animate(i[c], {
          height: n[c].clientHeight + "px",
          duration: 0.45,
          ease: "inOut",
          onComplete: () => {
            i[c].style.height = "auto";
          }
        }));
      };
      const r = this.el.querySelector(".filts_tabs"), o = this.el.querySelector(".filts_tabs_c"), a = this.el.querySelector(".filts_tabs_h"), l = this.el.querySelector(".filts_tabs_b");
      o.onclick = async (c) => {
        c.preventDefault(), r.classList.contains("A") ? (r.classList.remove("A"), anime.animate(a, {
          height: [
            l.clientHeight + "px",
            "0px"
          ],
          duration: 0.45,
          ease: "inOut(2)"
        })) : (r.classList.add("A"), anime.animate(a, {
          height: l.clientHeight + "px",
          duration: 0.45,
          ease: "inOut",
          onComplete: () => {
            a.style.height = "auto";
          }
        }));
      };
    }
    killEVT() {
    }
    async resizeFn(t = window.scrollY) {
      this.max > 1 ? await this.createPags() : this.blogPag.classList.add("hide");
    }
    async loadPosts(t = null, e = null, i = null, n = null, r = null) {
      e == null ? e = this.cat : this.cat = e, n == null ? n = this.types : this.types = n, r == null ? r = this.date : this.date = r, i == null ? i = this.search : this.search = i, t == null ? t = this.page = 1 : this.page = parseInt(t), e = e.length > 0 ? e.join(",") : "", n = n.length > 0 ? n.join(",") : "", this.getinfo = {
        base: this.global.base,
        device: this.global.device,
        page: this.page,
        categories: e,
        search: this.search,
        perpage: this.perpage,
        posttype: "post",
        date: r,
        types: n
      }, Promise.all([
        fetch(this.getinfo.base + "/wp-json/csskiller/v1/loadposts", {
          method: "POST",
          body: JSON.stringify(this.getinfo)
        })
      ]).then(async (o) => {
        const a = await o[0].json();
        this.updateFilterCounters(), this.blogPosts.classList.add("load"), this.lenisscrollto(this.blogPosts, -200, 0.9), this.updateClearFiltersState(), anime.utils.set(this.blogPosts, {
          height: this.blogPosts.querySelector(".hold").clientHeight + "px"
        }), await anime.animate(this.blogPosts, {
          opacity: 0,
          duration: 0.45,
          ease: "inOut(2)"
        }), this.blogPosts.querySelector(".hold").remove(), this.max = a.maxpages, this.max > 1 ? await this.createPags() : this.blogPag.classList.add("hide"), this.blogPosts.insertAdjacentHTML("beforeend", a.skin), this.initCTA(), this.initIOS(), this.startIOS(), anime.animate(this.blogPosts, {
          opacity: 1,
          duration: 0.6,
          ease: "inOut(2)"
        }), await anime.animate(this.blogPosts, {
          height: this.blogPosts.querySelector(".hold").clientHeight + "px",
          duration: 0.6,
          ease: "inOut(2)",
          onComplete: () => {
            this.blogPosts.style.height = "auto", this.blogPosts.classList.remove("load");
          }
        });
      });
    }
    async createPags() {
      if (this.blogPag.classList.remove("hide"), this.blogPagBtns) for (let e of this.blogPagBtns) e.remove();
      let t = "";
      this.page = parseInt(this.page, 10), this.add = (e, i) => {
        for (var n = e; n < i; n++) {
          let r = n;
          t += '<button class="Apag" data-pag="' + n + '" aria-label="Go to page ' + n + '"><span class="Apag_t">' + r + "</span></button>";
        }
      }, this.last = () => {
        this.max, t += '<div class="Apag Apag-dots"><span class="Apag_t">...</span></div><button class="Apag" data-pag="' + this.max + '" aria-label="Go to page ' + this.max + '"><span class="Apag_t">' + this.max + "</span></button>";
      }, this.first = () => {
        t += '<button class="Apag" data-pag="1" aria-label="Go to page 1"><span class="Apag_t">1</span></button><div class="Apag-dots"><span></span><span></span><span></span></div>';
      }, this.max < 8 ? this.add(1, this.max + 1) : this.page < 4 ? (this.add(1, 5), this.last()) : this.page > this.max - 3 ? (this.first(), this.add(this.max - 3, this.max + 1)) : (this.first(), this.add(this.page - 1, this.page + 2), this.last()), this.blogPagHold.innerHTML = window.innerWidth < 768 ? this.page + " of " + this.max : t, t = "", this.blogPagBtns = this.blogPag.querySelectorAll("button[data-pag]"), this.blogPag.querySelector('button[data-pag="' + this.page + '"]') && this.blogPag.querySelector('button[data-pag="' + this.page + '"]').classList.add("act");
      for (let e of this.blogPagBtns) e.onclick = async () => {
        this.page = e.dataset.pag, await this.loadPosts(this.page, this.cat, this.search, this.types, this.date);
      };
      this.page > 1 ? this.pagPrev.classList.remove("hide") : this.pagPrev.classList.add("hide"), this.page > 1 ? this.pagStart.classList.remove("hide") : this.pagStart.classList.add("hide"), this.page !== this.max ? this.pagNext.classList.remove("hide") : this.pagNext.classList.add("hide"), this.page !== this.max ? this.pagEnd.classList.remove("hide") : this.pagEnd.classList.add("hide");
    }
    updateClearFiltersState() {
      this.types.length > 0 || this.cat.length > 0 || this.search !== "" || this.date !== "all" ? this.filtClear.classList.add("A") : this.filtClear.classList.remove("A");
    }
    updateFilterCounters() {
      let t = this.date === "all" ? 0 : 1, e = this.types.length, i = this.cat.length, n = t + e + i;
      this.el.querySelector(".Atab-cat .qty").innerHTML = i > 0 ? `(${i})` : "", this.el.querySelector(".Atab-type .qty").innerHTML = e > 0 ? `(${e})` : "", this.el.querySelector(".Atab-date .qty").innerHTML = t > 0 ? `(${t})` : "", this.el.querySelector(".filts_tabs_c .qty").innerHTML = n > 0 ? `(${n})` : "";
    }
  };
  const Ou = {}, xu = {
    intro: (s) => new Eu(s)
  };
  let Mu = class {
    constructor(t) {
      this.el = t;
    }
    set(t) {
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: [
          0,
          1
        ],
        duration: 1,
        ease: "inOut(2)"
      }).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT() {
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY) {
    }
  };
  const Cu = {}, Pu = {
    intro: (s) => new Mu(s)
  };
  let Du = class {
    constructor(t) {
      this.el = t;
    }
    set(t) {
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: [
          0,
          1
        ],
        duration: 1,
        ease: "inOut(2)"
      }).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT() {
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY) {
    }
  };
  const ku = {}, Ru = {
    intro: (s) => new Du(s)
  };
  let Iu = class {
    constructor(t) {
      this.el = t;
    }
    set(t) {
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: [
          0,
          1
        ],
        duration: 1,
        ease: "inOut(2)"
      }).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT() {
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY) {
    }
  };
  const Nu = {
    intro: (s) => new Iu(s)
  };
  let Fu = class {
    constructor(t) {
      this.el = t, this.jobsMain = t.querySelector(".jobsMain"), this.jobsPosts = t.querySelector(".jobsMain_posts"), this.jobsPostsHold = t.querySelector(".jobsMain_posts .hold"), this.filtSearch = t.querySelector(".filts_srch"), this.filtClear = t.querySelector(".filts .filts_clear"), this.locsBtns = t.querySelectorAll(".filtsLocs button"), this.specsBtns = t.querySelectorAll(".filtsSpecs button"), this.dateBtns = t.querySelectorAll(".filtsDate input"), this.jobsPag = t.querySelector(".jobsMain_pag"), this.jobsPagHold = t.querySelector(".jobsMain_pag_hold"), this.pagPrev = t.querySelector(".jobsMain_pag .Apag.TL"), this.pagStart = t.querySelector(".jobsMain_pag .Apag.TLF"), this.pagNext = t.querySelector(".jobsMain_pag .Apag.TR"), this.pagEnd = t.querySelector(".jobsMain_pag .Apag.TRF"), this.page = 1, this.perpage = 4, this.max = this.jobsMain.dataset.maxpage !== "" ? parseInt(this.jobsMain.dataset.maxpages) : 1, this.locs = [], this.specs = [], this.date = this.jobsMain.querySelector(".filtsDate input:checked") ? this.jobsMain.querySelector(".filtsDate input:checked").value : "", this.pos = 0, this.needy = /* @__PURE__ */ new Set([
        "SCRFn",
        "initCTA",
        "lenis.",
        "setIOS",
        "initIOS",
        "startIOS"
      ]);
    }
    async set(t) {
      this.global = Object.fromEntries(t), this.max > 1 ? await this.createPags() : this.jobsPag.classList.add("hide"), this.setEVT();
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: [
          0,
          1
        ],
        duration: 1,
        ease: "inOut(2)"
      }).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT() {
      if (this.pagPrev.onclick = async () => {
        this.page--, await this.loadPosts(this.page, this.locs, this.specs, this.date);
      }, this.pagStart.onclick = async () => {
        this.page = 1, await this.loadPosts(this.page, this.locs, this.specs, this.date);
      }, this.pagNext.onclick = async () => {
        this.page++, await this.loadPosts(this.page, this.locs, this.specs, this.date);
      }, this.pagEnd.onclick = async () => {
        this.page = this.max, await this.loadPosts(this.page, this.locs, this.specs, this.date);
      }, this.locsBtns) for (let c of this.locsBtns) c.onclick = async () => {
        c.classList.contains("A") ? (this.locs = this.locs.filter((h) => h !== c.dataset.slug), c.classList.remove("A")) : (c.classList.add("A"), this.locs.push(c.dataset.slug)), this.page = 1, await this.loadPosts(this.page, this.locs, this.specs, this.date);
      };
      if (this.specsBtns) for (let c of this.specsBtns) c.onclick = async () => {
        c.classList.contains("A") ? (this.specs = this.specs.filter((h) => h !== c.dataset.slug), c.classList.remove("A")) : (c.classList.add("A"), this.specs.push(c.dataset.slug)), this.page = 1, await this.loadPosts(this.page, this.locs, this.specs, this.date);
      };
      if (this.dateBtns) for (let c of this.dateBtns) c.onchange = async () => {
        this.date = this.jobsMain.querySelector(".filtsDate input:checked").value, this.page = 1, await this.loadPosts(this.page, this.locs, this.specs, this.date);
      };
      this.filtClear.onclick = async (c) => {
        if (c.preventDefault(), this.page = 1, this.filtSearch.querySelector("input").value = "", this.search = this.filtSearch.querySelector("input").value, this.locs = [], this.specs = [], this.locsBtns) for (let h of this.locsBtns) h.classList.remove("A");
        if (this.specsBtns) for (let h of this.specsBtns) h.classList.remove("A");
        if (this.dateBtns) {
          for (let h of this.dateBtns) h.checked = false;
          this.dateBtns[0].checked = true;
        }
        this.date = "all", this.filtSearch.classList.remove("A"), await this.loadPosts(this.page, this.locs, this.specs, this.date);
      };
      const t = this.el.querySelectorAll(".Atab"), e = this.el.querySelectorAll(".Atab_c"), i = this.el.querySelectorAll(".Atab_h"), n = this.el.querySelectorAll(".Atab_b");
      for (let [c, h] of e.entries()) h.onclick = async (d) => {
        h.parentElement.classList.contains("A") ? (t[c].classList.remove("A"), anime.animate(i[c], {
          height: [
            n[c].clientHeight + "px",
            "0px"
          ],
          duration: 0.45,
          ease: "inOut(2)"
        })) : (t[c].classList.add("A"), anime.animate(i[c], {
          height: n[c].clientHeight + "px",
          duration: 0.45,
          ease: "inOut",
          onComplete: () => {
            i[c].style.height = "auto";
          }
        }));
      };
      const r = this.el.querySelector(".filts_tabs"), o = this.el.querySelector(".filts_tabs_c"), a = this.el.querySelector(".filts_tabs_h"), l = this.el.querySelector(".filts_tabs_b");
      o.onclick = async (c) => {
        c.preventDefault(), r.classList.contains("A") ? (r.classList.remove("A"), anime.animate(a, {
          height: [
            l.clientHeight + "px",
            "0px"
          ],
          duration: 0.45,
          ease: "inOut(2)"
        })) : (r.classList.add("A"), anime.animate(a, {
          height: l.clientHeight + "px",
          duration: 0.45,
          ease: "inOut",
          onComplete: () => {
            a.style.height = "auto";
          }
        }));
      };
    }
    killEVT() {
    }
    async resizeFn(t = window.scrollY) {
      this.max > 1 ? await this.createPags() : this.jobsPag.classList.add("hide");
    }
    async loadPosts(t = null, e = null, i = null, n = null) {
      e == null ? e = this.locs : this.locs = e, i == null ? i = this.specs : this.specs = i, n == null ? n = this.date : this.date = n, t == null ? t = this.page = 1 : this.page = parseInt(t), e = e.length > 0 ? e.join(",") : "", i = i.length > 0 ? i.join(",") : "", this.getinfo = {
        base: this.global.base,
        device: this.global.device,
        page: this.page,
        locs: e,
        perpage: this.perpage,
        posttype: "post",
        date: n,
        types: i
      }, Promise.all([
        fetch(this.getinfo.base + "/wp-json/csskiller/v1/loadposts", {
          method: "POST",
          body: JSON.stringify(this.getinfo)
        })
      ]).then(async (r) => {
        const o = await r[0].json();
        this.updateFilterCounters(), this.jobsPosts.classList.add("load"), this.lenisscrollto(this.jobsPosts, -200, 0.9), this.updateClearFiltersState(), anime.utils.set(this.jobsPosts, {
          height: this.jobsPosts.querySelector(".hold").clientHeight + "px"
        }), await anime.animate(this.jobsPosts, {
          opacity: 0,
          duration: 0.45,
          ease: "inOut(2)"
        }), this.jobsPosts.querySelector(".hold").remove(), this.max = o.maxpages, this.max > 1 ? await this.createPags() : this.jobsPag.classList.add("hide"), this.jobsPosts.insertAdjacentHTML("beforeend", o.skin), this.initCTA(), this.initIOS(), this.startIOS(), anime.animate(this.jobsPosts, {
          opacity: 1,
          duration: 0.6,
          ease: "inOut(2)"
        }), await anime.animate(this.jobsPosts, {
          height: this.jobsPosts.querySelector(".hold").clientHeight + "px",
          duration: 0.6,
          ease: "inOut(2)",
          onComplete: () => {
            this.jobsPosts.style.height = "auto", this.jobsPosts.classList.remove("load");
          }
        });
      });
    }
    async createPags() {
      if (this.jobsPag.classList.remove("hide"), this.jobsPagBtns) for (let e of this.jobsPagBtns) e.remove();
      let t = "";
      this.page = parseInt(this.page, 10), this.add = (e, i) => {
        for (var n = e; n < i; n++) {
          let r = n;
          t += '<button class="Apag" data-pag="' + n + '" aria-label="Go to page ' + n + '"><span class="Apag_t">' + r + "</span></button>";
        }
      }, this.last = () => {
        this.max, t += '<div class="Apag Apag-dots"><span class="Apag_t">...</span></div><button class="Apag" data-pag="' + this.max + '" aria-label="Go to page ' + this.max + '"><span class="Apag_t">' + this.max + "</span></button>";
      }, this.first = () => {
        t += '<button class="Apag" data-pag="1" aria-label="Go to page 1"><span class="Apag_t">1</span></button><div class="Apag-dots"><span></span><span></span><span></span></div>';
      }, this.max < 8 ? this.add(1, this.max + 1) : this.page < 4 ? (this.add(1, 5), this.last()) : this.page > this.max - 3 ? (this.first(), this.add(this.max - 3, this.max + 1)) : (this.first(), this.add(this.page - 1, this.page + 2), this.last()), this.jobsPagHold.innerHTML = window.innerWidth < 768 ? this.page + " of " + this.max : t, t = "", this.jobsPagBtns = this.jobsPag.querySelectorAll("button[data-pag]"), this.jobsPag.querySelector('button[data-pag="' + this.page + '"]') && this.jobsPag.querySelector('button[data-pag="' + this.page + '"]').classList.add("act");
      for (let e of this.jobsPagBtns) e.onclick = async () => {
        this.page = e.dataset.pag, await this.loadPosts(this.page, this.locs, this.specs, this.date);
      };
      this.page > 1 ? this.pagPrev.classList.remove("hide") : this.pagPrev.classList.add("hide"), this.page > 1 ? this.pagStart.classList.remove("hide") : this.pagStart.classList.add("hide"), this.page !== this.max ? this.pagNext.classList.remove("hide") : this.pagNext.classList.add("hide"), this.page !== this.max ? this.pagEnd.classList.remove("hide") : this.pagEnd.classList.add("hide");
    }
    updateClearFiltersState() {
      this.specs.length > 0 || this.locs.length > 0 || this.search !== "" || this.date !== "all" ? this.filtClear.classList.add("A") : this.filtClear.classList.remove("A");
    }
    updateFilterCounters() {
      let t = this.date === "all" ? 0 : 1, e = this.specs.length, i = this.locs.length, n = t + e + i;
      this.el.querySelector(".Atab-locs .qty").innerHTML = i > 0 ? `(${i})` : "", this.el.querySelector(".Atab-specs .qty").innerHTML = e > 0 ? `(${e})` : "", this.el.querySelector(".Atab-date .qty").innerHTML = t > 0 ? `(${t})` : "", this.el.querySelector(".filts_tabs_c .qty").innerHTML = n > 0 ? `(${n})` : "";
    }
  };
  const qu = {}, Vu = {
    intro: (s) => new Fu(s)
  };
  class Bu {
    constructor(t) {
      this.el = t;
    }
    async set(t) {
    }
    async kill() {
    }
    start(t = 0) {
      const e = anime.createTimeline({
        autoplay: false
      }).add(this.el, {
        opacity: [
          0,
          1
        ],
        duration: 1,
        ease: "inOut(2)"
      }).init();
      return /* @__PURE__ */ new Map([
        [
          "in",
          0
        ],
        [
          "out",
          0
        ],
        [
          "ANM",
          e
        ]
      ]);
    }
    setEVT() {
    }
    killEVT() {
    }
    async resizeFn(t = window.scrollY) {
    }
  }
  const zu = {}, Uu = {
    intro: (s) => new Bu(s)
  };
  class $u {
    constructor(t) {
      this.el = t, this.upd = "SLL", this.VEL = 0;
    }
    set(t) {
      this.parent = this.el.parentNode, this.st = [], this.setBND();
      let e = this.parent.querySelector("img");
      (t.get("device") > 1 || window.innerWidth < 1194 && window.innerWidth / window.innerHeight < 1.2) && this.parent.querySelector("img.resp") && (e = this.parent.querySelector("img.resp"));
      const i = (t.get("device") > 1, 15);
      gsap.set(e, {
        scale: i * 2 / 100 + 1
      }), this.ANM = gsap.timeline({
        paused: true
      }).fromTo(e, {
        yPercent: i * -1
      }, {
        yPercent: i,
        duration: 1,
        ease: "none"
      }, 0), this.updFn(), this.setEVT(t);
    }
    kill() {
      this.active = 0;
    }
    chkFn(t, e) {
      let i = false;
      return t.isIntersecting == null ? i = void 0 : t.isIntersecting == true ? i = this.start(t) : i = this.stop(t), i;
    }
    start() {
      return this.active == 1 || (this.active = 1), true;
    }
    stop() {
      return this.active == 0 || (this.active = 0), false;
    }
    setEVT(t) {
      this.killEVT(t);
    }
    killEVT(t) {
    }
    updFn(t = window.scrollY) {
      if (this.active == 0 || !this.ANM) return false;
      this.BND.set("CRT", xh(0, this.BND.get(1), t + this.SCR[1] - this.BND.get(0))), this.BND.set("PRG", parseFloat((this.BND.get("CRT") / this.BND.get(1)).toFixed(8))), this.ANM.progress(this.BND.get("PRG"));
    }
    setBND(t = window.scrollY) {
      const e = window.innerHeight, i = this.el.getBoundingClientRect(), n = parseInt(i.y + t), r = i.height + e;
      this.BND = /* @__PURE__ */ new Map([
        [
          0,
          n
        ],
        [
          1,
          r
        ],
        [
          "CRT",
          0
        ],
        [
          "PRG",
          0
        ]
      ]), this.SCR = [
        window.innerWidth,
        window.innerHeight
      ];
    }
    resizeFn(t = window.scrollY, e) {
      this.ANM && (this.set(e), this.updFn(t, 0));
    }
  }
  class Wu {
    constructor(t) {
      this.el = t, this.DOM = {
        el: this.el.parentNode,
        real: this.el.parentNode.querySelector(".Stext_r"),
        fake: this.el.parentNode.querySelector(".Stext_f"),
        hold: this.el.parentNode.querySelector(".Stext_h")
      }, this.act = 0, this.upd = "UPD", this.speed = {
        current: 0,
        target: 0,
        static: 0,
        plus: 0
      };
    }
    set(t) {
      if (this.setBND(t), this.DOM.real.clientWidth == 0) return false;
      for (; this.DOM.real.clientWidth < window.innerWidth; ) this.DOM.real.appendChild(this.DOM.real.querySelector(".Sel").cloneNode(true));
      this.DOM.fake.innerHTML = this.DOM.real.innerHTML, this.speedRate = this.DOM.real.clientWidth / window.innerWidth, this.setEVT(t), this.createAnim();
    }
    createAnim() {
      this.ANM || (this.ANMin = anime.createTimeline({
        autoplay: false,
        onComplete: () => delete this.ANMin
      }).add(this.DOM.el, {
        "--yScale": 0,
        duration: 0.4,
        ease: "inOut(2)"
      }, 0).add(this.DOM.hold, {
        y: {
          from: "50%",
          to: "0%",
          ease: "outExpo",
          duration: 0.9
        },
        opacity: {
          from: 0,
          to: 1,
          duration: 0.4,
          ease: "inOut(1)"
        }
      }, 0.2).add(this.speed, {
        plus: {
          from: 4,
          to: 0,
          ease: "outExpo",
          duration: 1
        }
      }, 0).init()), this.ANM = anime.createTimeline({
        autoplay: false,
        loop: true
      }).add(this.DOM.real, {
        x: {
          from: 0,
          to: "-100%",
          ease: "linear",
          duration: 20
        }
      }, 0).init();
    }
    chkFn(t, e) {
      let i = false;
      return console.log("asdasdasd"), t.isIntersecting == null ? i = void 0 : t.isIntersecting == true ? i = this.start(t) : i = this.stop(t), i;
    }
    start() {
      return this.active == 1 || (this.active = 1, this.ANMin && this.ANMin.play(), this.ANM.play()), true;
    }
    stop(t) {
      return this.active == 0 || (this.active = 0, this.ANM.pause()), false;
    }
    setEVT(t) {
    }
    killEVT(t) {
    }
    kill() {
      this.active = 0;
    }
    updFn(t = window.scrollY, e = 0) {
      if (this.active == 0) return false;
      this.speed.target = Math.min(Math.abs(e * 0.3).toFixed(3), 3), this.speed.current = anime.utils.lerp(this.speed.current, this.speed.target, 0.05), this.ANM.playbackRate = Math.max(0.4, 0.3 + this.speed.current + this.speed.plus);
    }
    setBND(t = window.scrollY, e) {
      const i = this.el.getBoundingClientRect(), n = parseInt(i.y + t), r = i.height;
      this.BND = /* @__PURE__ */ new Map([
        [
          0,
          n
        ],
        [
          1,
          r
        ],
        [
          "CRT",
          0
        ],
        [
          "PRG",
          0
        ]
      ]);
    }
    resizeFn(t = window.scrollY, e) {
      this.ANM && (this.set(e), this.updFn(t, 0));
    }
  }
  function Hu(s, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(s, i.key, i);
    }
  }
  function Yu(s, t, e) {
    return t && Hu(s.prototype, t), Object.defineProperty(s, "prototype", {
      writable: false
    }), s;
  }
  var sa = "(prefers-reduced-motion: reduce)", Xi = 1, ju = 2, is = 3, fs = 4, tn = 5, An = 6, kn = 7, Xu = {
    CREATED: Xi,
    MOUNTED: ju,
    IDLE: is,
    MOVING: fs,
    SCROLLING: tn,
    DRAGGING: An,
    DESTROYED: kn
  };
  function $e(s) {
    s.length = 0;
  }
  function di(s, t, e) {
    return Array.prototype.slice.call(s, t, e);
  }
  function ht(s) {
    return s.bind.apply(s, [
      null
    ].concat(di(arguments, 1)));
  }
  var cl = setTimeout, Ir = function() {
  };
  function na(s) {
    return requestAnimationFrame(s);
  }
  function Qn(s, t) {
    return typeof t === s;
  }
  function Ns(s) {
    return !uo(s) && Qn("object", s);
  }
  var ho = Array.isArray, hl = ht(Qn, "function"), oi = ht(Qn, "string"), en = ht(Qn, "undefined");
  function uo(s) {
    return s === null;
  }
  function ul(s) {
    try {
      return s instanceof (s.ownerDocument.defaultView || window).HTMLElement;
    } catch {
      return false;
    }
  }
  function sn(s) {
    return ho(s) ? s : [
      s
    ];
  }
  function ue(s, t) {
    sn(s).forEach(t);
  }
  function fo(s, t) {
    return s.indexOf(t) > -1;
  }
  function Ln(s, t) {
    return s.push.apply(s, sn(t)), s;
  }
  function Ve(s, t, e) {
    s && ue(t, function(i) {
      i && s.classList[e ? "add" : "remove"](i);
    });
  }
  function Me(s, t) {
    Ve(s, oi(t) ? t.split(" ") : t, true);
  }
  function nn(s, t) {
    ue(t, s.appendChild.bind(s));
  }
  function po(s, t) {
    ue(s, function(e) {
      var i = (t || e).parentNode;
      i && i.insertBefore(e, t);
    });
  }
  function Fs(s, t) {
    return ul(s) && (s.msMatchesSelector || s.matches).call(s, t);
  }
  function dl(s, t) {
    var e = s ? di(s.children) : [];
    return t ? e.filter(function(i) {
      return Fs(i, t);
    }) : e;
  }
  function rn(s, t) {
    return t ? dl(s, t)[0] : s.firstElementChild;
  }
  var qs = Object.keys;
  function Li(s, t, e) {
    return s && (e ? qs(s).reverse() : qs(s)).forEach(function(i) {
      i !== "__proto__" && t(s[i], i);
    }), s;
  }
  function Vs(s) {
    return di(arguments, 1).forEach(function(t) {
      Li(t, function(e, i) {
        s[i] = t[i];
      });
    }), s;
  }
  function Je(s) {
    return di(arguments, 1).forEach(function(t) {
      Li(t, function(e, i) {
        ho(e) ? s[i] = e.slice() : Ns(e) ? s[i] = Je({}, Ns(s[i]) ? s[i] : {}, e) : s[i] = e;
      });
    }), s;
  }
  function ra(s, t) {
    ue(t || qs(s), function(e) {
      delete s[e];
    });
  }
  function Ce(s, t) {
    ue(s, function(e) {
      ue(t, function(i) {
        e && e.removeAttribute(i);
      });
    });
  }
  function X(s, t, e) {
    Ns(t) ? Li(t, function(i, n) {
      X(s, n, i);
    }) : ue(s, function(i) {
      uo(e) || e === "" ? Ce(i, t) : i.setAttribute(t, String(e));
    });
  }
  function Qi(s, t, e) {
    var i = document.createElement(s);
    return t && (oi(t) ? Me(i, t) : X(i, t)), e && nn(e, i), i;
  }
  function me(s, t, e) {
    if (en(e)) return getComputedStyle(s)[t];
    uo(e) || (s.style[t] = "" + e);
  }
  function Bs(s, t) {
    me(s, "display", t);
  }
  function fl(s) {
    s.setActive && s.setActive() || s.focus({
      preventScroll: true
    });
  }
  function _e(s, t) {
    return s.getAttribute(t);
  }
  function oa(s, t) {
    return s && s.classList.contains(t);
  }
  function ae(s) {
    return s.getBoundingClientRect();
  }
  function Di(s) {
    ue(s, function(t) {
      t && t.parentNode && t.parentNode.removeChild(t);
    });
  }
  function pl(s) {
    return rn(new DOMParser().parseFromString(s, "text/html").body);
  }
  function Fe(s, t) {
    s.preventDefault(), t && (s.stopPropagation(), s.stopImmediatePropagation());
  }
  function ml(s, t) {
    return s && s.querySelector(t);
  }
  function mo(s, t) {
    return t ? di(s.querySelectorAll(t)) : [];
  }
  function Be(s, t) {
    Ve(s, t, false);
  }
  function Nr(s) {
    return s.timeStamp;
  }
  function mi(s) {
    return oi(s) ? s : s ? s + "px" : "";
  }
  var on = "splide", go = "data-" + on;
  function As(s, t) {
    if (!s) throw new Error("[" + on + "] " + (t || ""));
  }
  var ai = Math.min, Rn = Math.max, In = Math.floor, zs = Math.ceil, Ut = Math.abs;
  function gl(s, t, e) {
    return Ut(s - t) < e;
  }
  function En(s, t, e, i) {
    var n = ai(t, e), r = Rn(t, e);
    return i ? n < s && s < r : n <= s && s <= r;
  }
  function $i(s, t, e) {
    var i = ai(t, e), n = Rn(t, e);
    return ai(Rn(i, s), n);
  }
  function Fr(s) {
    return +(s > 0) - +(s < 0);
  }
  function qr(s, t) {
    return ue(t, function(e) {
      s = s.replace("%s", "" + e);
    }), s;
  }
  function _o(s) {
    return s < 10 ? "0" + s : "" + s;
  }
  var aa = {};
  function Gu(s) {
    return "" + s + _o(aa[s] = (aa[s] || 0) + 1);
  }
  function _l() {
    var s = [];
    function t(o, a, l, c) {
      n(o, a, function(h, d, f) {
        var p = "addEventListener" in h, m = p ? h.removeEventListener.bind(h, d, l, c) : h.removeListener.bind(h, l);
        p ? h.addEventListener(d, l, c) : h.addListener(l), s.push([
          h,
          d,
          f,
          l,
          m
        ]);
      });
    }
    function e(o, a, l) {
      n(o, a, function(c, h, d) {
        s = s.filter(function(f) {
          return f[0] === c && f[1] === h && f[2] === d && (!l || f[3] === l) ? (f[4](), false) : true;
        });
      });
    }
    function i(o, a, l) {
      var c, h = true;
      return typeof CustomEvent == "function" ? c = new CustomEvent(a, {
        bubbles: h,
        detail: l
      }) : (c = document.createEvent("CustomEvent"), c.initCustomEvent(a, h, false, l)), o.dispatchEvent(c), c;
    }
    function n(o, a, l) {
      ue(o, function(c) {
        c && ue(a, function(h) {
          h.split(" ").forEach(function(d) {
            var f = d.split(".");
            l(c, f[0], f[1]);
          });
        });
      });
    }
    function r() {
      s.forEach(function(o) {
        o[4]();
      }), $e(s);
    }
    return {
      bind: t,
      unbind: e,
      dispatch: i,
      destroy: r
    };
  }
  var Ni = "mounted", la = "ready", li = "move", an = "moved", vl = "click", Ku = "active", Qu = "inactive", Zu = "visible", Ju = "hidden", Ot = "refresh", jt = "updated", Us = "resize", vo = "resized", td = "drag", ed = "dragging", id = "dragged", yo = "scroll", ps = "scrolled", sd = "overflow", yl = "destroy", nd = "arrows:mounted", rd = "arrows:updated", od = "pagination:mounted", ad = "pagination:updated", Sl = "navigation:mounted", bl = "autoplay:play", ld = "autoplay:playing", Tl = "autoplay:pause", wl = "lazyload:loaded", Al = "sk", Ll = "sh", Nn = "ei";
  function vt(s) {
    var t = s ? s.event.bus : document.createDocumentFragment(), e = _l();
    function i(r, o) {
      e.bind(t, sn(r).join(" "), function(a) {
        o.apply(o, ho(a.detail) ? a.detail : []);
      });
    }
    function n(r) {
      e.dispatch(t, r, di(arguments, 1));
    }
    return s && s.event.on(yl, e.destroy), Vs(e, {
      bus: t,
      on: i,
      off: ht(e.unbind, t),
      emit: n
    });
  }
  function Zn(s, t, e, i) {
    var n = Date.now, r, o = 0, a, l = true, c = 0;
    function h() {
      if (!l) {
        if (o = s ? ai((n() - r) / s, 1) : 1, e && e(o), o >= 1 && (t(), r = n(), i && ++c >= i)) return f();
        a = na(h);
      }
    }
    function d(v) {
      v || m(), r = n() - (v ? o * s : 0), l = false, a = na(h);
    }
    function f() {
      l = true;
    }
    function p() {
      r = n(), o = 0, e && e(o);
    }
    function m() {
      a && cancelAnimationFrame(a), o = 0, a = 0, l = true;
    }
    function u(v) {
      s = v;
    }
    function g() {
      return l;
    }
    return {
      start: d,
      rewind: p,
      pause: f,
      cancel: m,
      set: u,
      isPaused: g
    };
  }
  function cd(s) {
    var t = s;
    function e(n) {
      t = n;
    }
    function i(n) {
      return fo(sn(n), t);
    }
    return {
      set: e,
      is: i
    };
  }
  function hd(s, t) {
    var e = Zn(0, s, null, 1);
    return function() {
      e.isPaused() && e.start();
    };
  }
  function ud(s, t, e) {
    var i = s.state, n = e.breakpoints || {}, r = e.reducedMotion || {}, o = _l(), a = [];
    function l() {
      var m = e.mediaQuery === "min";
      qs(n).sort(function(u, g) {
        return m ? +u - +g : +g - +u;
      }).forEach(function(u) {
        h(n[u], "(" + (m ? "min" : "max") + "-width:" + u + "px)");
      }), h(r, sa), d();
    }
    function c(m) {
      m && o.destroy();
    }
    function h(m, u) {
      var g = matchMedia(u);
      o.bind(g, "change", d), a.push([
        m,
        g
      ]);
    }
    function d() {
      var m = i.is(kn), u = e.direction, g = a.reduce(function(v, y) {
        return Je(v, y[1].matches ? y[0] : {});
      }, {});
      ra(e), p(g), e.destroy ? s.destroy(e.destroy === "completely") : m ? (c(true), s.mount()) : u !== e.direction && s.refresh();
    }
    function f(m) {
      matchMedia(sa).matches && (m ? Je(e, r) : ra(e, qs(r)));
    }
    function p(m, u, g) {
      Je(e, m), u && Je(Object.getPrototypeOf(e), m), (g || !i.is(Xi)) && s.emit(jt, e);
    }
    return {
      setup: l,
      destroy: c,
      reduce: f,
      set: p
    };
  }
  var Jn = "Arrow", tr = Jn + "Left", er = Jn + "Right", El = Jn + "Up", Ol = Jn + "Down", ca = "rtl", ir = "ttb", mr = {
    width: [
      "height"
    ],
    left: [
      "top",
      "right"
    ],
    right: [
      "bottom",
      "left"
    ],
    x: [
      "y"
    ],
    X: [
      "Y"
    ],
    Y: [
      "X"
    ],
    ArrowLeft: [
      El,
      er
    ],
    ArrowRight: [
      Ol,
      tr
    ]
  };
  function dd(s, t, e) {
    function i(r, o, a) {
      a = a || e.direction;
      var l = a === ca && !o ? 1 : a === ir ? 0 : -1;
      return mr[r] && mr[r][l] || r.replace(/width|left|right/i, function(c, h) {
        var d = mr[c.toLowerCase()][l] || c;
        return h > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d;
      });
    }
    function n(r) {
      return r * (e.direction === ca ? 1 : -1);
    }
    return {
      resolve: i,
      orient: n
    };
  }
  var ze = "role", Zi = "tabindex", fd = "disabled", be = "aria-", ln = be + "controls", xl = be + "current", ha = be + "selected", ce = be + "label", So = be + "labelledby", Ml = be + "hidden", bo = be + "orientation", $s = be + "roledescription", ua = be + "live", da = be + "busy", fa = be + "atomic", To = [
    ze,
    Zi,
    fd,
    ln,
    xl,
    ce,
    So,
    Ml,
    bo,
    $s
  ], De = on + "__", fi = "is-", gr = on, pa = De + "track", pd = De + "list", sr = De + "slide", Cl = sr + "--clone", md = sr + "__container", wo = De + "arrows", nr = De + "arrow", Pl = nr + "--prev", Dl = nr + "--next", rr = De + "pagination", kl = rr + "__page", gd = De + "progress", _d = gd + "__bar", vd = De + "toggle", yd = De + "spinner", Sd = De + "sr", bd = fi + "initialized", ki = fi + "active", Rl = fi + "prev", Il = fi + "next", Vr = fi + "visible", Br = fi + "loading", Nl = fi + "focus-in", Fl = fi + "overflow", Td = [
    ki,
    Vr,
    Rl,
    Il,
    Br,
    Nl,
    Fl
  ], wd = {
    slide: sr,
    clone: Cl,
    arrows: wo,
    arrow: nr,
    prev: Pl,
    next: Dl,
    pagination: rr,
    page: kl,
    spinner: yd
  };
  function Ad(s, t) {
    if (hl(s.closest)) return s.closest(t);
    for (var e = s; e && e.nodeType === 1 && !Fs(e, t); ) e = e.parentElement;
    return e;
  }
  var Ld = 5, ma = 200, ql = "touchstart mousedown", _r = "touchmove mousemove", vr = "touchend touchcancel mouseup click";
  function Ed(s, t, e) {
    var i = vt(s), n = i.on, r = i.bind, o = s.root, a = e.i18n, l = {}, c = [], h = [], d = [], f, p, m;
    function u() {
      _(), T(), y();
    }
    function g() {
      n(Ot, v), n(Ot, u), n(jt, y), r(document, ql + " keydown", function(b) {
        m = b.type === "keydown";
      }, {
        capture: true
      }), r(o, "focusin", function() {
        Ve(o, Nl, !!m);
      });
    }
    function v(b) {
      var A = To.concat("style");
      $e(c), Be(o, h), Be(f, d), Ce([
        f,
        p
      ], A), Ce(o, b ? A : [
        "style",
        $s
      ]);
    }
    function y() {
      Be(o, h), Be(f, d), h = w(gr), d = w(pa), Me(o, h), Me(f, d), X(o, ce, e.label), X(o, So, e.labelledby);
    }
    function _() {
      f = S("." + pa), p = rn(f, "." + pd), As(f && p, "A track/list element is missing."), Ln(c, dl(p, "." + sr + ":not(." + Cl + ")")), Li({
        arrows: wo,
        pagination: rr,
        prev: Pl,
        next: Dl,
        bar: _d,
        toggle: vd
      }, function(b, A) {
        l[A] = S("." + b);
      }), Vs(l, {
        root: o,
        track: f,
        list: p,
        slides: c
      });
    }
    function T() {
      var b = o.id || Gu(on), A = e.role;
      o.id = b, f.id = f.id || b + "-track", p.id = p.id || b + "-list", !_e(o, ze) && o.tagName !== "SECTION" && A && X(o, ze, A), X(o, $s, a.carousel), X(p, ze, "presentation");
    }
    function S(b) {
      var A = ml(o, b);
      return A && Ad(A, "." + gr) === o ? A : void 0;
    }
    function w(b) {
      return [
        b + "--" + e.type,
        b + "--" + e.direction,
        e.drag && b + "--draggable",
        e.isNavigation && b + "--nav",
        b === gr && ki
      ];
    }
    return Vs(l, {
      setup: u,
      mount: g,
      destroy: v
    });
  }
  var ss = "slide", ms = "loop", cn = "fade";
  function Od(s, t, e, i) {
    var n = vt(s), r = n.on, o = n.emit, a = n.bind, l = s.Components, c = s.root, h = s.options, d = h.isNavigation, f = h.updateOnMove, p = h.i18n, m = h.pagination, u = h.slideFocus, g = l.Direction.resolve, v = _e(i, "style"), y = _e(i, ce), _ = e > -1, T = rn(i, "." + md), S;
    function w() {
      _ || (i.id = c.id + "-slide" + _o(t + 1), X(i, ze, m ? "tabpanel" : "group"), X(i, $s, p.slide), X(i, ce, y || qr(p.slideLabel, [
        t + 1,
        s.length
      ]))), b();
    }
    function b() {
      a(i, "click", ht(o, vl, R)), a(i, "keydown", ht(o, Al, R)), r([
        an,
        Ll,
        ps
      ], E), r(Sl, L), f && r(li, x);
    }
    function A() {
      S = true, n.destroy(), Be(i, Td), Ce(i, To), X(i, "style", v), X(i, ce, y || "");
    }
    function L() {
      var N = s.splides.map(function(P) {
        var V = P.splide.Components.Slides.getAt(t);
        return V ? V.slide.id : "";
      }).join(" ");
      X(i, ce, qr(p.slideX, (_ ? e : t) + 1)), X(i, ln, N), X(i, ze, u ? "button" : ""), u && Ce(i, $s);
    }
    function x() {
      S || E();
    }
    function E() {
      if (!S) {
        var N = s.index;
        O(), M(), Ve(i, Rl, t === N - 1), Ve(i, Il, t === N + 1);
      }
    }
    function O() {
      var N = I();
      N !== oa(i, ki) && (Ve(i, ki, N), X(i, xl, d && N || ""), o(N ? Ku : Qu, R));
    }
    function M() {
      var N = C(), P = !N && (!I() || _);
      if (s.state.is([
        fs,
        tn
      ]) || X(i, Ml, P || ""), X(mo(i, h.focusableNodes || ""), Zi, P ? -1 : ""), u && X(i, Zi, P ? -1 : 0), N !== oa(i, Vr) && (Ve(i, Vr, N), o(N ? Zu : Ju, R)), !N && document.activeElement === i) {
        var V = l.Slides.getAt(s.index);
        V && fl(V.slide);
      }
    }
    function D(N, P, V) {
      me(V && T || i, N, P);
    }
    function I() {
      var N = s.index;
      return N === t || h.cloneStatus && N === e;
    }
    function C() {
      if (s.is(cn)) return I();
      var N = ae(l.Elements.track), P = ae(i), V = g("left", true), $ = g("right", true);
      return In(N[V]) <= zs(P[V]) && In(P[$]) <= zs(N[$]);
    }
    function q(N, P) {
      var V = Ut(N - t);
      return !_ && (h.rewind || s.is(ms)) && (V = ai(V, s.length - V)), V <= P;
    }
    var R = {
      index: t,
      slideIndex: e,
      slide: i,
      container: T,
      isClone: _,
      mount: w,
      destroy: A,
      update: E,
      style: D,
      isWithin: q
    };
    return R;
  }
  function xd(s, t, e) {
    var i = vt(s), n = i.on, r = i.emit, o = i.bind, a = t.Elements, l = a.slides, c = a.list, h = [];
    function d() {
      f(), n(Ot, p), n(Ot, f);
    }
    function f() {
      l.forEach(function(E, O) {
        u(E, O, -1);
      });
    }
    function p() {
      S(function(E) {
        E.destroy();
      }), $e(h);
    }
    function m() {
      S(function(E) {
        E.update();
      });
    }
    function u(E, O, M) {
      var D = Od(s, O, M, E);
      D.mount(), h.push(D), h.sort(function(I, C) {
        return I.index - C.index;
      });
    }
    function g(E) {
      return E ? w(function(O) {
        return !O.isClone;
      }) : h;
    }
    function v(E) {
      var O = t.Controller, M = O.toIndex(E), D = O.hasFocus() ? 1 : e.perPage;
      return w(function(I) {
        return En(I.index, M, M + D - 1);
      });
    }
    function y(E) {
      return w(E)[0];
    }
    function _(E, O) {
      ue(E, function(M) {
        if (oi(M) && (M = pl(M)), ul(M)) {
          var D = l[O];
          D ? po(M, D) : nn(c, M), Me(M, e.classes.slide), A(M, ht(r, Us));
        }
      }), r(Ot);
    }
    function T(E) {
      Di(w(E).map(function(O) {
        return O.slide;
      })), r(Ot);
    }
    function S(E, O) {
      g(O).forEach(E);
    }
    function w(E) {
      return h.filter(hl(E) ? E : function(O) {
        return oi(E) ? Fs(O.slide, E) : fo(sn(E), O.index);
      });
    }
    function b(E, O, M) {
      S(function(D) {
        D.style(E, O, M);
      });
    }
    function A(E, O) {
      var M = mo(E, "img"), D = M.length;
      D ? M.forEach(function(I) {
        o(I, "load error", function() {
          --D || O();
        });
      }) : O();
    }
    function L(E) {
      return E ? l.length : h.length;
    }
    function x() {
      return h.length > e.perPage;
    }
    return {
      mount: d,
      destroy: p,
      update: m,
      register: u,
      get: g,
      getIn: v,
      getAt: y,
      add: _,
      remove: T,
      forEach: S,
      filter: w,
      style: b,
      getLength: L,
      isEnough: x
    };
  }
  function Md(s, t, e) {
    var i = vt(s), n = i.on, r = i.bind, o = i.emit, a = t.Slides, l = t.Direction.resolve, c = t.Elements, h = c.root, d = c.track, f = c.list, p = a.getAt, m = a.style, u, g, v;
    function y() {
      _(), r(window, "resize load", hd(ht(o, Us))), n([
        jt,
        Ot
      ], _), n(Us, T);
    }
    function _() {
      u = e.direction === ir, me(h, "maxWidth", mi(e.width)), me(d, l("paddingLeft"), S(false)), me(d, l("paddingRight"), S(true)), T(true);
    }
    function T(R) {
      var N = ae(h);
      (R || g.width !== N.width || g.height !== N.height) && (me(d, "height", w()), m(l("marginRight"), mi(e.gap)), m("width", A()), m("height", L(), true), g = N, o(vo), v !== (v = q()) && (Ve(h, Fl, v), o(sd, v)));
    }
    function S(R) {
      var N = e.padding, P = l(R ? "right" : "left");
      return N && mi(N[P] || (Ns(N) ? 0 : N)) || "0px";
    }
    function w() {
      var R = "";
      return u && (R = b(), As(R, "height or heightRatio is missing."), R = "calc(" + R + " - " + S(false) + " - " + S(true) + ")"), R;
    }
    function b() {
      return mi(e.height || ae(f).width * e.heightRatio);
    }
    function A() {
      return e.autoWidth ? null : mi(e.fixedWidth) || (u ? "" : x());
    }
    function L() {
      return mi(e.fixedHeight) || (u ? e.autoHeight ? null : x() : b());
    }
    function x() {
      var R = mi(e.gap);
      return "calc((100%" + (R && " + " + R) + ")/" + (e.perPage || 1) + (R && " - " + R) + ")";
    }
    function E() {
      return ae(f)[l("width")];
    }
    function O(R, N) {
      var P = p(R || 0);
      return P ? ae(P.slide)[l("width")] + (N ? 0 : I()) : 0;
    }
    function M(R, N) {
      var P = p(R);
      if (P) {
        var V = ae(P.slide)[l("right")], $ = ae(f)[l("left")];
        return Ut(V - $) + (N ? 0 : I());
      }
      return 0;
    }
    function D(R) {
      return M(s.length - 1) - M(0) + O(0, R);
    }
    function I() {
      var R = p(0);
      return R && parseFloat(me(R.slide, l("marginRight"))) || 0;
    }
    function C(R) {
      return parseFloat(me(d, l("padding" + (R ? "Right" : "Left")))) || 0;
    }
    function q() {
      return s.is(cn) || D(true) > E();
    }
    return {
      mount: y,
      resize: T,
      listSize: E,
      slideSize: O,
      sliderSize: D,
      totalSize: M,
      getPadding: C,
      isOverflow: q
    };
  }
  var Cd = 2;
  function Pd(s, t, e) {
    var i = vt(s), n = i.on, r = t.Elements, o = t.Slides, a = t.Direction.resolve, l = [], c;
    function h() {
      n(Ot, d), n([
        jt,
        Us
      ], p), (c = g()) && (m(c), t.Layout.resize(true));
    }
    function d() {
      f(), h();
    }
    function f() {
      Di(l), $e(l), i.destroy();
    }
    function p() {
      var v = g();
      c !== v && (c < v || !v) && i.emit(Ot);
    }
    function m(v) {
      var y = o.get().slice(), _ = y.length;
      if (_) {
        for (; y.length < v; ) Ln(y, y);
        Ln(y.slice(-v), y.slice(0, v)).forEach(function(T, S) {
          var w = S < v, b = u(T.slide, S);
          w ? po(b, y[0].slide) : nn(r.list, b), Ln(l, b), o.register(b, S - v + (w ? 0 : _), T.index);
        });
      }
    }
    function u(v, y) {
      var _ = v.cloneNode(true);
      return Me(_, e.classes.clone), _.id = s.root.id + "-clone" + _o(y + 1), _;
    }
    function g() {
      var v = e.clones;
      if (!s.is(ms)) v = 0;
      else if (en(v)) {
        var y = e[a("fixedWidth")] && t.Layout.slideSize(0), _ = y && zs(ae(r.track)[a("width")] / y);
        v = _ || e[a("autoWidth")] && s.length || e.perPage * Cd;
      }
      return v;
    }
    return {
      mount: h,
      destroy: f
    };
  }
  function Dd(s, t, e) {
    var i = vt(s), n = i.on, r = i.emit, o = s.state.set, a = t.Layout, l = a.slideSize, c = a.getPadding, h = a.totalSize, d = a.listSize, f = a.sliderSize, p = t.Direction, m = p.resolve, u = p.orient, g = t.Elements, v = g.list, y = g.track, _;
    function T() {
      _ = t.Transition, n([
        Ni,
        vo,
        jt,
        Ot
      ], S);
    }
    function S() {
      t.Controller.isBusy() || (t.Scroll.cancel(), b(s.index), t.Slides.update());
    }
    function w(P, V, $, G) {
      P !== V && R(P > $) && (E(), A(x(D(), P > $), true)), o(fs), r(li, V, $, P), _.start(V, function() {
        o(is), r(an, V, $, P), G && G();
      });
    }
    function b(P) {
      A(M(P, true));
    }
    function A(P, V) {
      if (!s.is(cn)) {
        var $ = V ? P : L(P);
        me(v, "transform", "translate" + m("X") + "(" + $ + "px)"), P !== $ && r(Ll);
      }
    }
    function L(P) {
      if (s.is(ms)) {
        var V = O(P), $ = V > t.Controller.getEnd(), G = V < 0;
        (G || $) && (P = x(P, $));
      }
      return P;
    }
    function x(P, V) {
      var $ = P - q(V), G = f();
      return P -= u(G * (zs(Ut($) / G) || 1)) * (V ? 1 : -1), P;
    }
    function E() {
      A(D(), true), _.cancel();
    }
    function O(P) {
      for (var V = t.Slides.get(), $ = 0, G = 1 / 0, W = 0; W < V.length; W++) {
        var et = V[W].index, k = Ut(M(et, true) - P);
        if (k <= G) G = k, $ = et;
        else break;
      }
      return $;
    }
    function M(P, V) {
      var $ = u(h(P - 1) - C(P));
      return V ? I($) : $;
    }
    function D() {
      var P = m("left");
      return ae(v)[P] - ae(y)[P] + u(c(false));
    }
    function I(P) {
      return e.trimSpace && s.is(ss) && (P = $i(P, 0, u(f(true) - d()))), P;
    }
    function C(P) {
      var V = e.focus;
      return V === "center" ? (d() - l(P, true)) / 2 : +V * l(P) || 0;
    }
    function q(P) {
      return M(P ? t.Controller.getEnd() : 0, !!e.trimSpace);
    }
    function R(P) {
      var V = u(x(D(), P));
      return P ? V >= 0 : V <= v[m("scrollWidth")] - ae(y)[m("width")];
    }
    function N(P, V) {
      V = en(V) ? D() : V;
      var $ = P !== true && u(V) < u(q(false)), G = P !== false && u(V) > u(q(true));
      return $ || G;
    }
    return {
      mount: T,
      move: w,
      jump: b,
      translate: A,
      shift: x,
      cancel: E,
      toIndex: O,
      toPosition: M,
      getPosition: D,
      getLimit: q,
      exceededLimit: N,
      reposition: S
    };
  }
  function kd(s, t, e) {
    var i = vt(s), n = i.on, r = i.emit, o = t.Move, a = o.getPosition, l = o.getLimit, c = o.toPosition, h = t.Slides, d = h.isEnough, f = h.getLength, p = e.omitEnd, m = s.is(ms), u = s.is(ss), g = ht(D, false), v = ht(D, true), y = e.start || 0, _, T = y, S, w, b;
    function A() {
      L(), n([
        jt,
        Ot,
        Nn
      ], L), n(vo, x);
    }
    function L() {
      S = f(true), w = e.perMove, b = e.perPage, _ = R();
      var k = $i(y, 0, p ? _ : S - 1);
      k !== y && (y = k, o.reposition());
    }
    function x() {
      _ !== R() && r(Nn);
    }
    function E(k, K, st) {
      if (!et()) {
        var it = M(k), rt = q(it);
        rt > -1 && (K || rt !== y) && ($(rt), o.move(it, rt, T, st));
      }
    }
    function O(k, K, st, it) {
      t.Scroll.scroll(k, K, st, function() {
        var rt = q(o.toIndex(a()));
        $(p ? ai(rt, _) : rt), it && it();
      });
    }
    function M(k) {
      var K = y;
      if (oi(k)) {
        var st = k.match(/([+\-<>])(\d+)?/) || [], it = st[1], rt = st[2];
        it === "+" || it === "-" ? K = I(y + +("" + it + (+rt || 1)), y) : it === ">" ? K = rt ? N(+rt) : g(true) : it === "<" && (K = v(true));
      } else K = m ? k : $i(k, 0, _);
      return K;
    }
    function D(k, K) {
      var st = w || (W() ? 1 : b), it = I(y + st * (k ? -1 : 1), y, !(w || W()));
      return it === -1 && u && !gl(a(), l(!k), 1) ? k ? 0 : _ : K ? it : q(it);
    }
    function I(k, K, st) {
      if (d() || W()) {
        var it = C(k);
        it !== k && (K = k, k = it, st = false), k < 0 || k > _ ? !w && (En(0, k, K, true) || En(_, K, k, true)) ? k = N(P(k)) : m ? k = st ? k < 0 ? -(S % b || b) : S : k : e.rewind ? k = k < 0 ? _ : 0 : k = -1 : st && k !== K && (k = N(P(K) + (k < K ? -1 : 1)));
      } else k = -1;
      return k;
    }
    function C(k) {
      if (u && e.trimSpace === "move" && k !== y) for (var K = a(); K === c(k, true) && En(k, 0, s.length - 1, !e.rewind); ) k < y ? --k : ++k;
      return k;
    }
    function q(k) {
      return m ? (k + S) % S || 0 : k;
    }
    function R() {
      for (var k = S - (W() || m && w ? 1 : b); p && k-- > 0; ) if (c(S - 1, true) !== c(k, true)) {
        k++;
        break;
      }
      return $i(k, 0, S - 1);
    }
    function N(k) {
      return $i(W() ? k : b * k, 0, _);
    }
    function P(k) {
      return W() ? ai(k, _) : In((k >= _ ? S - 1 : k) / b);
    }
    function V(k) {
      var K = o.toIndex(k);
      return u ? $i(K, 0, _) : K;
    }
    function $(k) {
      k !== y && (T = y, y = k);
    }
    function G(k) {
      return k ? T : y;
    }
    function W() {
      return !en(e.focus) || e.isNavigation;
    }
    function et() {
      return s.state.is([
        fs,
        tn
      ]) && !!e.waitForTransition;
    }
    return {
      mount: A,
      go: E,
      scroll: O,
      getNext: g,
      getPrev: v,
      getAdjacent: D,
      getEnd: R,
      setIndex: $,
      getIndex: G,
      toIndex: N,
      toPage: P,
      toDest: V,
      hasFocus: W,
      isBusy: et
    };
  }
  var Rd = "http://www.w3.org/2000/svg", Id = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z", _n = 40;
  function Nd(s, t, e) {
    var i = vt(s), n = i.on, r = i.bind, o = i.emit, a = e.classes, l = e.i18n, c = t.Elements, h = t.Controller, d = c.arrows, f = c.track, p = d, m = c.prev, u = c.next, g, v, y = {};
    function _() {
      S(), n(jt, T);
    }
    function T() {
      w(), _();
    }
    function S() {
      var O = e.arrows;
      O && !(m && u) && L(), m && u && (Vs(y, {
        prev: m,
        next: u
      }), Bs(p, O ? "" : "none"), Me(p, v = wo + "--" + e.direction), O && (b(), E(), X([
        m,
        u
      ], ln, f.id), o(nd, m, u)));
    }
    function w() {
      i.destroy(), Be(p, v), g ? (Di(d ? [
        m,
        u
      ] : p), m = u = null) : Ce([
        m,
        u
      ], To);
    }
    function b() {
      n([
        Ni,
        an,
        Ot,
        ps,
        Nn
      ], E), r(u, "click", ht(A, ">")), r(m, "click", ht(A, "<"));
    }
    function A(O) {
      h.go(O, true);
    }
    function L() {
      p = d || Qi("div", a.arrows), m = x(true), u = x(false), g = true, nn(p, [
        m,
        u
      ]), !d && po(p, f);
    }
    function x(O) {
      var M = '<button class="' + a.arrow + " " + (O ? a.prev : a.next) + '" type="button"><svg xmlns="' + Rd + '" viewBox="0 0 ' + _n + " " + _n + '" width="' + _n + '" height="' + _n + '" focusable="false"><path d="' + (e.arrowPath || Id) + '" />';
      return pl(M);
    }
    function E() {
      if (m && u) {
        var O = s.index, M = h.getPrev(), D = h.getNext(), I = M > -1 && O < M ? l.last : l.prev, C = D > -1 && O > D ? l.first : l.next;
        m.disabled = M < 0, u.disabled = D < 0, X(m, ce, I), X(u, ce, C), o(rd, m, u, M, D);
      }
    }
    return {
      arrows: y,
      mount: _,
      destroy: w,
      update: E
    };
  }
  var Fd = go + "-interval";
  function qd(s, t, e) {
    var i = vt(s), n = i.on, r = i.bind, o = i.emit, a = Zn(e.interval, s.go.bind(s, ">"), b), l = a.isPaused, c = t.Elements, h = t.Elements, d = h.root, f = h.toggle, p = e.autoplay, m, u, g = p === "pause";
    function v() {
      p && (y(), f && X(f, ln, c.track.id), g || _(), w());
    }
    function y() {
      e.pauseOnHover && r(d, "mouseenter mouseleave", function(L) {
        m = L.type === "mouseenter", S();
      }), e.pauseOnFocus && r(d, "focusin focusout", function(L) {
        u = L.type === "focusin", S();
      }), f && r(f, "click", function() {
        g ? _() : T(true);
      }), n([
        li,
        yo,
        Ot
      ], a.rewind), n(li, A);
    }
    function _() {
      l() && t.Slides.isEnough() && (a.start(!e.resetProgress), u = m = g = false, w(), o(bl));
    }
    function T(L) {
      L === void 0 && (L = true), g = !!L, w(), l() || (a.pause(), o(Tl));
    }
    function S() {
      g || (m || u ? T(false) : _());
    }
    function w() {
      f && (Ve(f, ki, !g), X(f, ce, e.i18n[g ? "play" : "pause"]));
    }
    function b(L) {
      var x = c.bar;
      x && me(x, "width", L * 100 + "%"), o(ld, L);
    }
    function A(L) {
      var x = t.Slides.getAt(L);
      a.set(x && +_e(x.slide, Fd) || e.interval);
    }
    return {
      mount: v,
      destroy: a.cancel,
      play: _,
      pause: T,
      isPaused: l
    };
  }
  function Vd(s, t, e) {
    var i = vt(s), n = i.on;
    function r() {
      e.cover && (n(wl, ht(a, true)), n([
        Ni,
        jt,
        Ot
      ], ht(o, true)));
    }
    function o(l) {
      t.Slides.forEach(function(c) {
        var h = rn(c.container || c.slide, "img");
        h && h.src && a(l, h, c);
      });
    }
    function a(l, c, h) {
      h.style("background", l ? 'center/cover no-repeat url("' + c.src + '")' : "", true), Bs(c, l ? "none" : "");
    }
    return {
      mount: r,
      destroy: ht(o, false)
    };
  }
  var Bd = 10, zd = 600, Ud = 0.6, $d = 1.5, Wd = 800;
  function Hd(s, t, e) {
    var i = vt(s), n = i.on, r = i.emit, o = s.state.set, a = t.Move, l = a.getPosition, c = a.getLimit, h = a.exceededLimit, d = a.translate, f = s.is(ss), p, m, u = 1;
    function g() {
      n(li, T), n([
        jt,
        Ot
      ], S);
    }
    function v(b, A, L, x, E) {
      var O = l();
      if (T(), L && (!f || !h())) {
        var M = t.Layout.sliderSize(), D = Fr(b) * M * In(Ut(b) / M) || 0;
        b = a.toPosition(t.Controller.toDest(b % M)) + D;
      }
      var I = gl(O, b, 1);
      u = 1, A = I ? 0 : A || Rn(Ut(b - O) / $d, Wd), m = x, p = Zn(A, y, ht(_, O, b, E), 1), o(tn), r(yo), p.start();
    }
    function y() {
      o(is), m && m(), r(ps);
    }
    function _(b, A, L, x) {
      var E = l(), O = b + (A - b) * w(x), M = (O - E) * u;
      d(E + M), f && !L && h() && (u *= Ud, Ut(M) < Bd && v(c(h(true)), zd, false, m, true));
    }
    function T() {
      p && p.cancel();
    }
    function S() {
      p && !p.isPaused() && (T(), y());
    }
    function w(b) {
      var A = e.easingFunc;
      return A ? A(b) : 1 - Math.pow(1 - b, 4);
    }
    return {
      mount: g,
      destroy: T,
      scroll: v,
      cancel: S
    };
  }
  var Wi = {
    passive: false,
    capture: true
  };
  function Yd(s, t, e) {
    var i = vt(s), n = i.on, r = i.emit, o = i.bind, a = i.unbind, l = s.state, c = t.Move, h = t.Scroll, d = t.Controller, f = t.Elements.track, p = t.Media.reduce, m = t.Direction, u = m.resolve, g = m.orient, v = c.getPosition, y = c.exceededLimit, _, T, S, w, b, A = false, L, x, E;
    function O() {
      o(f, _r, Ir, Wi), o(f, vr, Ir, Wi), o(f, ql, D, Wi), o(f, "click", q, {
        capture: true
      }), o(f, "dragstart", Fe), n([
        Ni,
        jt
      ], M);
    }
    function M() {
      var F = e.drag;
      at(!F), w = F === "free";
    }
    function D(F) {
      if (L = false, !x) {
        var j = rt(F);
        it(F.target) && (j || !F.button) && (d.isBusy() ? Fe(F, true) : (E = j ? f : window, b = l.is([
          fs,
          tn
        ]), S = null, o(E, _r, I, Wi), o(E, vr, C, Wi), c.cancel(), h.cancel(), R(F)));
      }
    }
    function I(F) {
      if (l.is(An) || (l.set(An), r(td)), F.cancelable) if (b) {
        c.translate(_ + st(W(F)));
        var j = et(F) > ma, ot = A !== (A = y());
        (j || ot) && R(F), L = true, r(ed), Fe(F);
      } else V(F) && (b = P(F), Fe(F));
    }
    function C(F) {
      l.is(An) && (l.set(is), r(id)), b && (N(F), Fe(F)), a(E, _r, I), a(E, vr, C), b = false;
    }
    function q(F) {
      !x && L && Fe(F, true);
    }
    function R(F) {
      S = T, T = F, _ = v();
    }
    function N(F) {
      var j = $(F), ot = G(j), Ft = e.rewind && e.rewindByDrag;
      p(false), w ? d.scroll(ot, 0, e.snap) : s.is(cn) ? d.go(g(Fr(j)) < 0 ? Ft ? "<" : "-" : Ft ? ">" : "+") : s.is(ss) && A && Ft ? d.go(y(true) ? ">" : "<") : d.go(d.toDest(ot), true), p(true);
    }
    function P(F) {
      var j = e.dragMinThreshold, ot = Ns(j), Ft = ot && j.mouse || 0, ie = (ot ? j.touch : +j) || 10;
      return Ut(W(F)) > (rt(F) ? ie : Ft);
    }
    function V(F) {
      return Ut(W(F)) > Ut(W(F, true));
    }
    function $(F) {
      if (s.is(ms) || !A) {
        var j = et(F);
        if (j && j < ma) return W(F) / j;
      }
      return 0;
    }
    function G(F) {
      return v() + Fr(F) * ai(Ut(F) * (e.flickPower || 600), w ? 1 / 0 : t.Layout.listSize() * (e.flickMaxPages || 1));
    }
    function W(F, j) {
      return K(F, j) - K(k(F), j);
    }
    function et(F) {
      return Nr(F) - Nr(k(F));
    }
    function k(F) {
      return T === F && S || T;
    }
    function K(F, j) {
      return (rt(F) ? F.changedTouches[0] : F)["page" + u(j ? "Y" : "X")];
    }
    function st(F) {
      return F / (A && s.is(ss) ? Ld : 1);
    }
    function it(F) {
      var j = e.noDrag;
      return !Fs(F, "." + kl + ", ." + nr) && (!j || !Fs(F, j));
    }
    function rt(F) {
      return typeof TouchEvent < "u" && F instanceof TouchEvent;
    }
    function Mt() {
      return b;
    }
    function at(F) {
      x = F;
    }
    return {
      mount: O,
      disable: at,
      isDragging: Mt
    };
  }
  var jd = {
    Spacebar: " ",
    Right: er,
    Left: tr,
    Up: El,
    Down: Ol
  };
  function Ao(s) {
    return s = oi(s) ? s : s.key, jd[s] || s;
  }
  var ga = "keydown";
  function Xd(s, t, e) {
    var i = vt(s), n = i.on, r = i.bind, o = i.unbind, a = s.root, l = t.Direction.resolve, c, h;
    function d() {
      f(), n(jt, p), n(jt, f), n(li, u);
    }
    function f() {
      var v = e.keyboard;
      v && (c = v === "global" ? window : a, r(c, ga, g));
    }
    function p() {
      o(c, ga);
    }
    function m(v) {
      h = v;
    }
    function u() {
      var v = h;
      h = true, cl(function() {
        h = v;
      });
    }
    function g(v) {
      if (!h) {
        var y = Ao(v);
        y === l(tr) ? s.go("<") : y === l(er) && s.go(">");
      }
    }
    return {
      mount: d,
      destroy: p,
      disable: m
    };
  }
  var Ls = go + "-lazy", On = Ls + "-srcset", Gd = "[" + Ls + "], [" + On + "]";
  function Kd(s, t, e) {
    var i = vt(s), n = i.on, r = i.off, o = i.bind, a = i.emit, l = e.lazyLoad === "sequential", c = [
      an,
      ps
    ], h = [];
    function d() {
      e.lazyLoad && (f(), n(Ot, f));
    }
    function f() {
      $e(h), p(), l ? v() : (r(c), n(c, m), m());
    }
    function p() {
      t.Slides.forEach(function(y) {
        mo(y.slide, Gd).forEach(function(_) {
          var T = _e(_, Ls), S = _e(_, On);
          if (T !== _.src || S !== _.srcset) {
            var w = e.classes.spinner, b = _.parentElement, A = rn(b, "." + w) || Qi("span", w, b);
            h.push([
              _,
              y,
              A
            ]), _.src || Bs(_, "none");
          }
        });
      });
    }
    function m() {
      h = h.filter(function(y) {
        var _ = e.perPage * ((e.preloadPages || 1) + 1) - 1;
        return y[1].isWithin(s.index, _) ? u(y) : true;
      }), h.length || r(c);
    }
    function u(y) {
      var _ = y[0];
      Me(y[1].slide, Br), o(_, "load error", ht(g, y)), X(_, "src", _e(_, Ls)), X(_, "srcset", _e(_, On)), Ce(_, Ls), Ce(_, On);
    }
    function g(y, _) {
      var T = y[0], S = y[1];
      Be(S.slide, Br), _.type !== "error" && (Di(y[2]), Bs(T, ""), a(wl, T, S), a(Us)), l && v();
    }
    function v() {
      h.length && u(h.shift());
    }
    return {
      mount: d,
      destroy: ht($e, h),
      check: m
    };
  }
  function Qd(s, t, e) {
    var i = vt(s), n = i.on, r = i.emit, o = i.bind, a = t.Slides, l = t.Elements, c = t.Controller, h = c.hasFocus, d = c.getIndex, f = c.go, p = t.Direction.resolve, m = l.pagination, u = [], g, v;
    function y() {
      _(), n([
        jt,
        Ot,
        Nn
      ], y);
      var x = e.pagination;
      m && Bs(m, x ? "" : "none"), x && (n([
        li,
        yo,
        ps
      ], L), T(), L(), r(od, {
        list: g,
        items: u
      }, A(s.index)));
    }
    function _() {
      g && (Di(m ? di(g.children) : g), Be(g, v), $e(u), g = null), i.destroy();
    }
    function T() {
      var x = s.length, E = e.classes, O = e.i18n, M = e.perPage, D = h() ? c.getEnd() + 1 : zs(x / M);
      g = m || Qi("ul", E.pagination, l.track.parentElement), Me(g, v = rr + "--" + b()), X(g, ze, "tablist"), X(g, ce, O.select), X(g, bo, b() === ir ? "vertical" : "");
      for (var I = 0; I < D; I++) {
        var C = Qi("li", null, g), q = Qi("button", {
          class: E.page,
          type: "button"
        }, C), R = a.getIn(I).map(function(P) {
          return P.slide.id;
        }), N = !h() && M > 1 ? O.pageX : O.slideX;
        o(q, "click", ht(S, I)), e.paginationKeyboard && o(q, "keydown", ht(w, I)), X(C, ze, "presentation"), X(q, ze, "tab"), X(q, ln, R.join(" ")), X(q, ce, qr(N, I + 1)), X(q, Zi, -1), u.push({
          li: C,
          button: q,
          page: I
        });
      }
    }
    function S(x) {
      f(">" + x, true);
    }
    function w(x, E) {
      var O = u.length, M = Ao(E), D = b(), I = -1;
      M === p(er, false, D) ? I = ++x % O : M === p(tr, false, D) ? I = (--x + O) % O : M === "Home" ? I = 0 : M === "End" && (I = O - 1);
      var C = u[I];
      C && (fl(C.button), f(">" + I), Fe(E, true));
    }
    function b() {
      return e.paginationDirection || e.direction;
    }
    function A(x) {
      return u[c.toPage(x)];
    }
    function L() {
      var x = A(d(true)), E = A(d());
      if (x) {
        var O = x.button;
        Be(O, ki), Ce(O, ha), X(O, Zi, -1);
      }
      if (E) {
        var M = E.button;
        Me(M, ki), X(M, ha, true), X(M, Zi, "");
      }
      r(ad, {
        list: g,
        items: u
      }, x, E);
    }
    return {
      items: u,
      mount: y,
      destroy: _,
      getAt: A,
      update: L
    };
  }
  var Zd = [
    " ",
    "Enter"
  ];
  function Jd(s, t, e) {
    var i = e.isNavigation, n = e.slideFocus, r = [];
    function o() {
      s.splides.forEach(function(m) {
        m.isParent || (c(s, m.splide), c(m.splide, s));
      }), i && h();
    }
    function a() {
      r.forEach(function(m) {
        m.destroy();
      }), $e(r);
    }
    function l() {
      a(), o();
    }
    function c(m, u) {
      var g = vt(m);
      g.on(li, function(v, y, _) {
        u.go(u.is(ms) ? _ : v);
      }), r.push(g);
    }
    function h() {
      var m = vt(s), u = m.on;
      u(vl, f), u(Al, p), u([
        Ni,
        jt
      ], d), r.push(m), m.emit(Sl, s.splides);
    }
    function d() {
      X(t.Elements.list, bo, e.direction === ir ? "vertical" : "");
    }
    function f(m) {
      s.go(m.index);
    }
    function p(m, u) {
      fo(Zd, Ao(u)) && (f(m), Fe(u));
    }
    return {
      setup: ht(t.Media.set, {
        slideFocus: en(n) ? i : n
      }, true),
      mount: o,
      destroy: a,
      remount: l
    };
  }
  function tf(s, t, e) {
    var i = vt(s), n = i.bind, r = 0;
    function o() {
      e.wheel && n(t.Elements.track, "wheel", a, Wi);
    }
    function a(c) {
      if (c.cancelable) {
        var h = c.deltaY, d = h < 0, f = Nr(c), p = e.wheelMinThreshold || 0, m = e.wheelSleep || 0;
        Ut(h) > p && f - r > m && (s.go(d ? "<" : ">"), r = f), l(d) && Fe(c);
      }
    }
    function l(c) {
      return !e.releaseWheel || s.state.is(fs) || t.Controller.getAdjacent(c) !== -1;
    }
    return {
      mount: o
    };
  }
  var ef = 90;
  function sf(s, t, e) {
    var i = vt(s), n = i.on, r = t.Elements.track, o = e.live && !e.isNavigation, a = Qi("span", Sd), l = Zn(ef, ht(h, false));
    function c() {
      o && (f(!t.Autoplay.isPaused()), X(r, fa, true), a.textContent = "\u2026", n(bl, ht(f, true)), n(Tl, ht(f, false)), n([
        an,
        ps
      ], ht(h, true)));
    }
    function h(p) {
      X(r, da, p), p ? (nn(r, a), l.start()) : (Di(a), l.cancel());
    }
    function d() {
      Ce(r, [
        ua,
        fa,
        da
      ]), Di(a);
    }
    function f(p) {
      o && X(r, ua, p ? "off" : "polite");
    }
    return {
      mount: c,
      disable: f,
      destroy: d
    };
  }
  var nf = Object.freeze({
    __proto__: null,
    Media: ud,
    Direction: dd,
    Elements: Ed,
    Slides: xd,
    Layout: Md,
    Clones: Pd,
    Move: Dd,
    Controller: kd,
    Arrows: Nd,
    Autoplay: qd,
    Cover: Vd,
    Scroll: Hd,
    Drag: Yd,
    Keyboard: Xd,
    LazyLoad: Kd,
    Pagination: Qd,
    Sync: Jd,
    Wheel: tf,
    Live: sf
  }), rf = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s"
  }, of = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: true,
    arrows: true,
    pagination: true,
    paginationKeyboard: true,
    interval: 5e3,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: true,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: true,
    direction: "ltr",
    trimSpace: true,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: true,
    classes: wd,
    i18n: rf,
    reducedMotion: {
      speed: 0,
      rewindSpeed: 0,
      autoplay: "pause"
    }
  };
  function af(s, t, e) {
    var i = t.Slides;
    function n() {
      vt(s).on([
        Ni,
        Ot
      ], r);
    }
    function r() {
      i.forEach(function(a) {
        a.style("transform", "translateX(-" + 100 * a.index + "%)");
      });
    }
    function o(a, l) {
      i.style("transition", "opacity " + e.speed + "ms " + e.easing), cl(l);
    }
    return {
      mount: n,
      start: o,
      cancel: Ir
    };
  }
  function lf(s, t, e) {
    var i = t.Move, n = t.Controller, r = t.Scroll, o = t.Elements.list, a = ht(me, o, "transition"), l;
    function c() {
      vt(s).bind(o, "transitionend", function(p) {
        p.target === o && l && (d(), l());
      });
    }
    function h(p, m) {
      var u = i.toPosition(p, true), g = i.getPosition(), v = f(p);
      Ut(u - g) >= 1 && v >= 1 ? e.useScroll ? r.scroll(u, v, false, m) : (a("transform " + v + "ms " + e.easing), i.translate(u, true), l = m) : (i.jump(p), m());
    }
    function d() {
      a(""), r.cancel();
    }
    function f(p) {
      var m = e.rewindSpeed;
      if (s.is(ss) && m) {
        var u = n.getIndex(true), g = n.getEnd();
        if (u === 0 && p >= g || u >= g && p === 0) return m;
      }
      return e.speed;
    }
    return {
      mount: c,
      start: h,
      cancel: d
    };
  }
  var cf = function() {
    function s(e, i) {
      this.event = vt(), this.Components = {}, this.state = cd(Xi), this.splides = [], this._o = {}, this._E = {};
      var n = oi(e) ? ml(document, e) : e;
      As(n, n + " is invalid."), this.root = n, i = Je({
        label: _e(n, ce) || "",
        labelledby: _e(n, So) || ""
      }, of, s.defaults, i || {});
      try {
        Je(i, JSON.parse(_e(n, go)));
      } catch {
        As(false, "Invalid JSON");
      }
      this._o = Object.create(Je({}, i));
    }
    var t = s.prototype;
    return t.mount = function(i, n) {
      var r = this, o = this.state, a = this.Components;
      As(o.is([
        Xi,
        kn
      ]), "Already mounted!"), o.set(Xi), this._C = a, this._T = n || this._T || (this.is(cn) ? af : lf), this._E = i || this._E;
      var l = Vs({}, nf, this._E, {
        Transition: this._T
      });
      return Li(l, function(c, h) {
        var d = c(r, a, r._o);
        a[h] = d, d.setup && d.setup();
      }), Li(a, function(c) {
        c.mount && c.mount();
      }), this.emit(Ni), Me(this.root, bd), o.set(is), this.emit(la), this;
    }, t.sync = function(i) {
      return this.splides.push({
        splide: i
      }), i.splides.push({
        splide: this,
        isParent: true
      }), this.state.is(is) && (this._C.Sync.remount(), i.Components.Sync.remount()), this;
    }, t.go = function(i) {
      return this._C.Controller.go(i), this;
    }, t.on = function(i, n) {
      return this.event.on(i, n), this;
    }, t.off = function(i) {
      return this.event.off(i), this;
    }, t.emit = function(i) {
      var n;
      return (n = this.event).emit.apply(n, [
        i
      ].concat(di(arguments, 1))), this;
    }, t.add = function(i, n) {
      return this._C.Slides.add(i, n), this;
    }, t.remove = function(i) {
      return this._C.Slides.remove(i), this;
    }, t.is = function(i) {
      return this._o.type === i;
    }, t.refresh = function() {
      return this.emit(Ot), this;
    }, t.destroy = function(i) {
      i === void 0 && (i = true);
      var n = this.event, r = this.state;
      return r.is(Xi) ? vt(this).on(la, this.destroy.bind(this, i)) : (Li(this._C, function(o) {
        o.destroy && o.destroy(i);
      }, true), n.emit(yl), n.destroy(), i && $e(this.splides), r.set(kn)), this;
    }, Yu(s, [
      {
        key: "options",
        get: function() {
          return this._o;
        },
        set: function(i) {
          this._C.Media.set(i, true, true);
        }
      },
      {
        key: "length",
        get: function() {
          return this._C.Slides.getLength(true);
        }
      },
      {
        key: "index",
        get: function() {
          return this._C.Controller.getIndex();
        }
      }
    ]), s;
  }(), Lo = cf;
  Lo.defaults = {};
  Lo.STATES = Xu;
  class hf {
    constructor(t) {
      this.el = t, this.pos = -1, this.needy = /* @__PURE__ */ new Set([
        "SCRFn",
        "initCTA",
        "lenis.",
        "setIOS",
        "initIOS",
        "startIOS"
      ]);
    }
    async set(t) {
      if (!this.slider) {
        let e = this.el.dataset.type ? this.el.dataset.type : "loop", i = this.el.dataset.focus ? this.el.dataset.focus : "center", n = this.el.dataset.autoWidth ? this.el.dataset.autoWidth : true, r = this.el.dataset.pagination ? this.el.dataset.pagination : false, o = this.el.dataset.gap ? this.el.dataset.gap : "2.4rem", a = this.el.querySelector(".prgEl");
        this.slider = new Lo(this.el, {
          type: e,
          autoWidth: n,
          focus: i,
          pagination: r,
          paginationType: "bullets",
          updateOnMove: true,
          arrows: false,
          gap: o,
          rewind: false
        }).mount(), a != null && (console.log(this.el.clientWidth), console.log(this.el.querySelector(".splide__list").scrollWidth), console.log(anime.utils.get(this.el.querySelector(".splide__list"), "x", false)), anime.utils.set(a, {
          "--prog": Math.min(this.slider.index / (this.slider.Components.Controller.getEnd() - 1), 1)
        }), this.slider.on("mounted move", (l) => {
          let c = this.slider.Components.Controller.getEnd() - 1, h = Math.min(this.slider.index / c, 1);
          console.dir(this.slider), anime.animate(a, {
            "--prog": h,
            duration: 0.45,
            ease: "inOut(2)"
          }), console.log(l), console.log(this.el.querySelector(".splide__list").scrollWidth), console.log(anime.utils.get(this.el.querySelector(".splide__list"), "x", false));
        }));
      }
      await Ai(100), this.setEVT(t), this.initIOS(), this.startIOS();
    }
    async kill() {
    }
    setEVT(t) {
      const e = this.el.querySelectorAll(".splide__slide").length - 1;
      this.el.querySelector(".TL") && (this.el.querySelector(".TL").onclick = () => this.slider.go("-${i}")), this.el.querySelector(".TR") && (this.el.querySelector(".TR").onclick = () => {
        this.slider.index < e && this.slider.go("+${i}");
      });
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY, e) {
      this.set(e);
    }
  }
  let uf = class {
    constructor(t) {
      this.el = t, this.pos = -1, this.needy = /* @__PURE__ */ new Set([
        "SCRFn",
        "initCTA",
        "lenis."
      ]);
    }
    set(t) {
      this.setEVT(t);
    }
    async kill() {
    }
    async setEVT(t) {
      this.el.dataset.video && (this.el.onclick = async (e) => {
        e.preventDefault(), this.lenisstop(), this.modal = document.createElement("div"), this.modal.classList.add("modalVid"), this.modal.innerHTML = `
          <div class="grid-vw">
            <div class="modalVid_close"></div>
            <video class="modalVid_video" data-src="${this.el.dataset.video}" controls autoplay></video>
          </div>
        `, document.body.appendChild(this.modal), this.modal.querySelector(".modalVid_close").onclick = () => {
          this.modal.querySelector("video").pause(), gsap.to(this.modal.querySelector("video"), {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut"
          }), gsap.to(this.modal, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
              this.modal.remove(), this.lenisstart();
            }
          });
        }, gsap.to(this.modal, {
          opacity: 1,
          duration: 0.6,
          ease: "expo.out"
        }), await Kn(this.modal.querySelector("video")), this.modal.querySelector("video").muted = false, await Ai(450), gsap.to(this.modal.querySelector("video"), {
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            this.modal.querySelector("video").play();
          }
        });
      });
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY, e) {
      this.set(e);
    }
  };
  class df {
    constructor(t) {
      this.el = t, this.modal = t.querySelector(".mdl"), this.pos = -1, this.needy = /* @__PURE__ */ new Set([
        "SCRFn",
        "initCTA",
        "lenis."
      ]);
    }
    set(t) {
    }
    async kill() {
    }
    async setEVT(t) {
      const e = this.el.querySelector(".Cmodal_open"), i = this.modal.querySelector(".mdl_close");
      e.onclick = async (n) => {
        n.preventDefault(), this.lenisstop(), gsap.fromTo(this.modal, {
          opacity: 0
        }, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            this.modal.classList.add("A");
          }
        });
      }, i.onclick = async (n) => {
        n.preventDefault(), gsap.fromTo(this.modal, {
          opacity: 1
        }, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            this.modal.classList.remove("A"), this.modal.querySelector(".mdl_cnt").scrollTo(0, 0), this.lenisstart();
          }
        });
      };
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY, e) {
      this.set(e);
    }
  }
  class ff {
    constructor(t) {
      this.DOM = {
        el: t
      }, this.DOM.npt = this.DOM.el.querySelector(".Afield_npt"), this.initEvents();
    }
    initEvents() {
      this.clickFn = () => {
        this.DOM.el.classList.contains("foc") || this.DOM.npt.focus();
      }, this.checkField = () => {
        this.DOM.el.classList.remove("err");
      }, this.focusFn = () => {
        this.DOM.el.classList.remove("err"), this.DOM.el.classList.remove("ok"), this.DOM.el.classList.add("foc");
      }, this.focusoutFn = () => {
        this.DOM.el.classList.remove("foc"), this.check();
      }, this.DOM.el.addEventListener("click", this.clickFn), this.DOM.npt.addEventListener("input", this.checkField), this.DOM.npt.addEventListener("focusin", this.focusFn), this.DOM.npt.addEventListener("focusout", this.focusoutFn), this.DOM.el.classList.contains("Afield-pass") && this.DOM.el.querySelector(".Afield_i") && (this.DOM.el.querySelector(".Afield_i").onclick = (t) => {
        t.preventDefault(), this.DOM.el.classList.contains("Afield-pass-show") ? (this.DOM.el.classList.remove("Afield-pass-show"), this.DOM.npt.type = "password") : (this.DOM.el.classList.add("Afield-pass-show"), this.DOM.npt.type = "text"), this.DOM.npt.focus();
      });
    }
    check() {
      return this.DOM.el.classList.contains("Afield-not") ? true : (this.DOM.npt.value == "" ? (this.DOM.el.classList.add("err"), this.DOM.el.classList.add("empty")) : (this.DOM.el.classList.contains("Afield-email") ? this.DOM.npt.value.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i) ? (this.DOM.el.classList.remove("err"), this.DOM.el.classList.add("ok")) : (this.DOM.el.classList.add("err"), this.DOM.el.classList.remove("ok")) : this.DOM.el.classList.contains("Afield-num") ? this.DOM.el.classList.contains("Afield-prefix") ? this.DOM.npt.value.match(/^[\+]?[0-9]{1,4}$/im) ? (this.DOM.el.classList.remove("err"), this.DOM.el.classList.add("ok")) : (this.DOM.el.classList.add("err"), this.DOM.el.classList.remove("ok")) : this.DOM.npt.value.match(/^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im) ? (this.DOM.el.classList.remove("err"), this.DOM.el.classList.add("ok")) : (this.DOM.el.classList.add("err"), this.DOM.el.classList.remove("ok")) : (this.DOM.el.classList.remove("err"), this.DOM.el.classList.add("ok")), this.DOM.el.classList.remove("empty")), !this.DOM.el.classList.contains("err"));
    }
    clear() {
      this.DOM.el.classList.remove("foc"), this.DOM.el.classList.remove("fill"), this.DOM.el.classList.remove("err"), this.DOM.el.classList.remove("ok"), this.DOM.npt.value = "";
    }
    removeEvents() {
      this.DOM.npt.removeEventListener("input", this.checkField), this.DOM.npt.removeEventListener("focusin", this.focusFn), this.DOM.npt.removeEventListener("focusout", this.focusoutFn);
    }
  }
  class pf {
    constructor(t) {
      this.DOM = {
        el: t,
        npt: t.querySelector("input")
      }, this.initEvents();
    }
    initEvents() {
      this.check = () => {
        if (console.log("check chk"), this.DOM.el.classList.contains("Achk-not")) return true;
        this.DOM.npt.checked ? (this.DOM.el.classList.remove("err"), this.DOM.el.classList.add("ok")) : (this.DOM.el.classList.add("err"), this.DOM.el.classList.remove("ok"));
      }, this.DOM.npt.addEventListener("change", this.check);
    }
    clear() {
      this.DOM.el.checked = false, this.DOM.el.classList.remove("err"), this.DOM.el.classList.remove("ok");
    }
    removeEvents() {
      this.DOM.npt.removeEventListener("change", this.check);
    }
  }
  class mf {
    constructor(t) {
      this.el = t, this.needy = /* @__PURE__ */ new Set([
        "lenis."
      ]), this.set();
    }
    set() {
      if (this.el.querySelector(".Afield")) {
        this.fields = [];
        for (let t of this.el.querySelectorAll(".Afield")) this.fields.push(new ff(t));
      }
      if (this.el.querySelector(".Achk")) {
        this.chks = [];
        for (let t of this.el.querySelectorAll(".Achk")) this.chks.push(new pf(t));
      }
      this.setEVT();
    }
    async kill() {
    }
    async setEVT() {
      const t = this.el.querySelector(".mdl"), e = t.querySelector(".mdl_close"), i = t.querySelector(".mdl .mdl_cnt button");
      this.el.querySelector(".sendBtn"), this.el.onsubmit = (r) => {
        r.preventDefault(), this.checkFields() && (console.log("send"), this.lenisstop(), t.classList.add("A"), this.clearFn());
      };
      const n = () => {
        t.classList.remove("A"), this.lenisstart();
      };
      e.onclick = (r) => {
        r.preventDefault(), n();
      }, i.onclick = (r) => {
        r.preventDefault(), n();
      };
    }
    checkFields() {
      for (let t of this.fields) t.check();
      for (let t of this.chks) t.check();
      return !this.el.querySelector(".err");
    }
    clearFn() {
      for (let t of this.fields) t.clear();
      for (let t of this.chks) t.clear();
    }
    killEVT() {
    }
    resizeFn(t = window.scrollY, e) {
    }
  }
  class gf {
    constructor(t) {
      this.el = t, this.pos = -1;
    }
    set(t) {
      this.setEVT(t);
    }
    async kill() {
    }
    setEVT(t) {
      if (this.el.querySelector(".Atab")) {
        const e = this.el.querySelector(".Atab"), i = this.el.querySelector(".Atab_c"), n = this.el.querySelector(".Atab_h"), r = this.el.querySelector(".Atab_b");
        e.classList.remove("A"), n.removeAttribute("style"), i.onclick = async (o) => {
          if (o.preventDefault(), e.classList.contains("A")) {
            e.classList.remove("A"), anime.animate(n, {
              height: 0,
              duration: 0.6,
              ease: "inOut(2)"
            });
            return;
          }
          e.classList.add("A"), anime.animate(n, {
            height: r.clientHeight + "px",
            duration: 0.6,
            ease: "inOut(2)"
          });
        };
      }
    }
    killEVT() {
    }
    checkField(t) {
      let e = t.value != "";
      t.type == "email" && (e = Ch(t.value)), e == false ? (t.parentNode.classList.add("ERR"), t.parentNode.classList.remove("OK")) : (t.parentNode.classList.remove("ERR"), t.parentNode.classList.add("OK"));
    }
    resizeFn(t = window.scrollY, e) {
      this.setEVT(e);
    }
  }
  const _a = {
    home: lu,
    about: du,
    help: mu,
    contact: vu,
    providers: bu,
    legal: ku,
    post: Cu,
    blog: Ou,
    faqs: Au,
    jobs: qu,
    job: zu
  }, va = {
    home: cu,
    about: fu,
    help: gu,
    contact: yu,
    providers: Tu,
    legal: Ru,
    post: Pu,
    blog: xu,
    error: Nu,
    faqs: Lu,
    jobs: Vu,
    job: Uu
  };
  let yr = {
    par: (s) => new $u(s),
    stext: (s) => new Wu(s),
    default: (s) => {
    }
  };
  const ya = {
    foot: (s) => new gf(s),
    carou: (s) => new hf(s),
    video: (s) => new uf(s),
    modal: (s) => new df(s),
    newsletter: (s) => new mf(s),
    default: (s) => {
    }
  };
  function _f(s, t) {
    const e = s.parentNode, i = s.parentNode.querySelector(".tLine") ? s.parentNode.querySelector(".tLine") : false;
    if (i == false) return n;
    const n = anime.createTimeline({
      autoplay: false,
      onComplete: () => e.classList.add("ND")
    }), r = Splitting({
      target: i,
      by: "lines"
    }), o = r[0].lines.length > 2 ? 0.4 : 1;
    for (let [a, l] of r[0].lines.entries()) n.add(l, {
      y: {
        from: "40%",
        to: 0,
        duration: 0.8,
        ease: "inOut(2)"
      },
      rotateX: {
        from: "-8deg",
        to: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "inOut(2)"
      },
      opacity: {
        from: 0,
        to: 1,
        duration: 1,
        ease: "inOut(2)"
      }
    }, a * (0.15 * o));
    return n.init(), n;
  }
  function vf(s, t) {
    const e = s.parentNode, i = s.parentNode.querySelector(".tLine") ? s.parentNode.querySelector(".tLine") : false;
    if (i == false) return n;
    const n = anime.createTimeline({
      autoplay: false,
      onComplete: () => e.classList.add("ND")
    }), r = Splitting({
      target: i,
      by: "chars"
    }), o = r[0].chars.length > 7 ? 0.5 : 1;
    for (let [a, l] of r[0].chars.entries()) n.add(l, {
      translateY: {
        from: "100%",
        to: 0,
        duration: 0.6,
        ease: "inOut(2)"
      },
      opacity: {
        from: 0,
        to: 1,
        duration: 0.4,
        ease: "inOut(2)"
      }
    }, a * (0.08 * o));
    return n.init().then(() => {
      for (let a of r[0].words) a.style.overflow = "visible";
    }), n;
  }
  function yf(s, t) {
    return [
      "check",
      (i, n) => {
        i.target.parentNode;
        const r = i.boundingClientRect.y;
        n == 1 ? r > 0 && document.documentElement.classList.add("hideNav") : r > 0 && document.documentElement.classList.remove("hideNav");
      }
    ];
  }
  const Sf = {
    default: () => {
    },
    tline: (s, t) => _f(s),
    tchar: (s, t) => vf(s),
    hideNav: (s, t) => yf()
  };
  function bf() {
    const t = {
      root: null,
      threshold: [
        0
      ]
    };
    this.IOfn = Af.bind(this), this.IOobs = new IntersectionObserver(this.IOfn, t), this.chkCLS = (e, i) => {
      const n = e.get("CLS");
      let r = n.chkFn(i, this.lenis.targetScroll);
      const o = n.upd ? n.upd : null;
      if (o == null) return false;
      r == true ? (this["IOS" + o + "ln"] = this["IOS" + o + "ln"] + 1, this["IOS" + o].add(e)) : r == false && (this["IOS" + o + "ln"] = Math.max(this["IOS" + o + "ln"] - 1, 0), this["IOS" + o].delete(e));
    };
  }
  async function Tf(s = "home") {
    const t = new Set(document.querySelectorAll(".IO")), e = new Set(this.IOS.filter((r) => !t.has(r.get("el"))));
    if (e) for (const r of e) this.killIO(r.get("el"));
    yr.lazy = (r) => ru.bind(this)(r);
    const i = _a[s] ? {
      ...yr,
      ..._a[s]
    } : yr, n = Sf;
    for (let r of t) if (this.IOS.findIndex((o) => r == o.get("el")) == -1) {
      const o = r.dataset.cls ? r.dataset.cls : "default", a = r.dataset.anm ? r.dataset.anm : "default", l = /* @__PURE__ */ new Map([
        [
          "el",
          r
        ],
        [
          "CLS",
          i[o](r)
        ],
        [
          "ANM",
          n[a](r, this.OPS)
        ]
      ]), c = l.has("CLS") ? l.get("CLS") : void 0;
      c == null ? void 0 : c.set(this.OPS), this.IOS.push(l);
    }
  }
  async function wf(s) {
    const t = anime.createTimeline({
      autoplay: false
    });
    for (let e of this.IOS) {
      if (e.has("act")) continue;
      e.get("el").style.display = "none";
      const i = e.has("CLS") ? e.get("CLS") : void 0, n = Math.max(0.01, parseInt(window.getComputedStyle(e.get("el")).getPropertyValue("transition-delay")));
      if (t.add(e.get("el"), {
        opacity: 0.5,
        duration: 0
      }, 0).add(() => this.IOobs.observe(e.get("el")), n - 0.01).add(e.get("el"), {
        opacity: 1,
        duration: 0,
        onBegin: () => e.set("act", 1),
        onComplete: () => e.get("el").style.display = "block"
      }, n + 0.01), i != null && i.needy) for (const r of i.needy) r.includes(".") ? r == "lenis." && (i.lenisstart = () => this.lenis.start(), i.lenisstop = () => this.lenis.stop(), i.lenisto = (o, a = 0.6) => this.lenis.scrollTo(o, {
        offset: document.querySelector(".head").clientHeight * -1,
        immediate: a == 0,
        duration: a,
        lock: true,
        force: true,
        easing: (l) => l < 0.5 ? 4 * l * l * l : 1 - Math.pow(-2 * l + 2, 3) / 2
      })) : i[r] = () => this[r]();
    }
    t.init().play();
  }
  function Af(s) {
    s.forEach((t) => {
      if (t.boundingClientRect.height == 0) return false;
      const e = this.IOS.filter((i) => t.target == i.get("el"));
      if (!e[0].has("act")) return false;
      e[0].get("CLS") != null ? this.chkCLS(e[0], t) : this.viewIO(t, e[0]);
    });
  }
  function Lf(s, t = void 0) {
    s.target.dataset.norep && this.killIO(s.target);
    const e = t.has("ANM") ? t.get("ANM") : void 0;
    s.isIntersecting ? (s.target.parentNode.classList.add("SV"), s.target.parentNode.classList.add("IV"), e && (Array.isArray(e) ? e[1](s, 1) : e.play())) : (s.target.parentNode.classList.remove("IV"), e && (Array.isArray(e) ? e[1](s, 0) : e.pause()));
  }
  function Ef(s) {
    this.IOobs.unobserve(s);
    const t = this.IOS.findIndex((e) => e.get("el") == s);
    if (t != -1) {
      const e = this.IOS[t].has("CLS") ? this.IOS[t].get("CLS") : void 0;
      e && (e.kill(), this.IOSSLL.delete(this.IOS[t]), this.IOSUPD.delete(this.IOS[t])), document.body.contains(s) || this.IOS.splice(t, 1);
    }
  }
  function Of() {
  }
  async function xf(s = "home") {
    const t = new Set(document.querySelectorAll('[class^="CMP"]')), e = new Set(this.CMPS.filter((n) => !t.has(n.get("el"))));
    if (e) {
      for (const n of e) this.killCMP(n.get("el"), 1);
      await Ai(100);
    }
    const i = va[s] ? {
      ...ya,
      ...va[s]
    } : ya;
    for (let n of t) if (this.CMPS.findIndex((r) => n == r.get("el")) == -1) {
      const r = n.dataset.cmp ? n.dataset.cmp : "default", o = /* @__PURE__ */ new Map([
        [
          "id",
          r
        ],
        [
          "el",
          n
        ],
        [
          "CLS",
          i[r](n)
        ],
        [
          "ANM",
          void 0
        ]
      ]);
      this.CMPS.push(o);
    }
  }
  function Mf(s) {
    let t;
    for (let e of this.CMPS) if (e.has("CLS")) {
      const i = e.get("CLS");
      if (i.set(this.OPS), e.get("id") == "intro" && (t = i.start(s), t.set("CMP", e)), i.needy) for (const n of i.needy) n.includes(".") ? n == "lenis." && (i.lenisstart = () => this.lenis.start(), i.lenisstop = () => this.lenis.stop(), i.lenisscrollto = (r, o = -100, a = 1) => this.lenis.scrollTo(r, {
        offset: o,
        duration: a
      })) : i[n] = () => this[n]();
      e.get("CLS").leaderFn && (e.get("CLS").initLeader = async () => {
        this.lenis.stop(), await Promise.all([
          this.setIMG(),
          this.setVID()
        ]), this.setIOS(), await this.initIOS(document.querySelector("main").dataset.skin), this.startIOS(), this.initCTA();
      }, e.get("CLS").endLeader = async () => {
        this.lenis.start();
      });
    }
    return t;
  }
  async function Cf(s, t = 0) {
    const e = this.CMPS.findIndex((n) => n.get("el") == s), i = this.CMPS[e].has("CLS") ? this.CMPS[e].get("CLS") : void 0;
    i && (t == 0 ? i.kill(t) : await i.kill(t)), this.CMPS.splice(e, 1);
  }
  function Pf(s = null) {
    const t = document.querySelector(".ldr"), e = document.querySelector(".ldr_icon"), i = e.querySelector(".ldr_icon_in"), n = anime.createTimeline({
      autoplay: false
    }).add(document.querySelector(".waiter"), {
      opacity: 0,
      duration: 0.2,
      delay: 0.01,
      onComplete: () => {
        document.querySelector(".waiter").remove();
      }
    }, 0).add("logo1", 0.6).add("logo2", 1.2).add("logo3", 1.8).add(i, {
      scale: [
        0,
        1.1,
        1
      ],
      duration: 0.1,
      delay: 0.1,
      ease: "inOut(2)"
    }, 0).add(e.querySelector(".logo-1"), {
      opacity: {
        from: 0,
        to: 1,
        ease: "inOut(2)",
        duration: 0.1
      },
      translateY: {
        from: ".2em",
        to: "0rem",
        ease: "outElastic(.8, .3)",
        duration: 0.9
      }
    }, "logo1").add(t, {
      "--ldrbg": "#758B3B",
      duration: 0.1,
      ease: "inOut(2)"
    }, "logo1").add(i.querySelector(".ldr_icon_plus"), {
      scale: [
        1,
        0.87,
        1
      ],
      duration: 0.15,
      ease: "easeOutInQuad"
    }, "logo1").add(e.querySelector(".logo-2"), {
      opacity: {
        from: 0,
        to: 1,
        ease: "inOut(2)",
        duration: 0.1
      },
      translateY: {
        from: ".2em",
        to: "0rem",
        ease: "outElastic(.8, .3)",
        duration: 0.9
      }
    }, "logo2").add(t, {
      "--ldrbg": "#D5CFC1",
      duration: 0.1,
      ease: "inOut(2)"
    }, "logo2").add(i.querySelector(".ldr_icon_plus"), {
      scale: [
        1,
        0.87,
        1
      ],
      duration: 0.15,
      ease: "easeOutInQuad"
    }, "logo2").add(e.querySelector(".logo-3"), {
      opacity: {
        from: 0,
        to: 1,
        ease: "inOut(2)",
        duration: 0.1
      },
      translateY: {
        from: ".2em",
        to: "0rem",
        ease: "outElastic(.8, .3)",
        duration: 0.9
      }
    }, "logo3").add(t, {
      "--ldrbg": "#FC753F",
      duration: 0.1,
      ease: "inOut(2)"
    }, "logo3").add(i.querySelector(".ldr_icon_plus"), {
      scale: [
        1,
        0.87,
        1
      ],
      duration: 0.15,
      ease: "easeOutInQuad"
    }, "logo3").add(i.querySelector(".ldr_icon_plus"), {
      scale: [
        1,
        0.87,
        1
      ],
      duration: 0.15,
      ease: "easeOutInQuad"
    }, "<+=.7").init(), r = anime.createTimeline({
      autoplay: false,
      onComplete: () => {
        t.remove();
      }
    }).add(e, {
      translateY: "10rem",
      opacity: 0,
      duration: 0.6,
      ease: "outBack(1.5)"
    }, 0).add(t, {
      "--ldrcp": [
        "100%",
        "0%"
      ],
      duration: 0.6,
      ease: "outBack(1.5)"
    }, 0).init();
    return /* @__PURE__ */ new Map([
      [
        "el",
        t
      ],
      [
        "ANMin",
        n
      ],
      [
        "ANMout",
        r
      ]
    ]);
  }
  async function Df(s, t = null) {
    await s.get("ANMin").play(), t != null && t();
  }
  async function Sa(s) {
    return s.get("el"), s.get("ANMout").play(), s;
  }
  var kf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Rf = {
    exports: {}
  };
  (function(s, t) {
    (function(e, i) {
      s.exports = i();
    })(kf, function() {
      var e = function() {
        function i(p) {
          return o.appendChild(p.dom), p;
        }
        function n(p) {
          for (var m = 0; m < o.children.length; m++) o.children[m].style.display = m === p ? "block" : "none";
          r = p;
        }
        var r = 0, o = document.createElement("div");
        o.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", o.addEventListener("click", function(p) {
          p.preventDefault(), n(++r % o.children.length);
        }, false);
        var a = (performance || Date).now(), l = a, c = 0, h = i(new e.Panel("FPS", "#0ff", "#002")), d = i(new e.Panel("MS", "#0f0", "#020"));
        if (self.performance && self.performance.memory) var f = i(new e.Panel("MB", "#f08", "#201"));
        return n(0), {
          REVISION: 16,
          dom: o,
          addPanel: i,
          showPanel: n,
          begin: function() {
            a = (performance || Date).now();
          },
          end: function() {
            c++;
            var p = (performance || Date).now();
            if (d.update(p - a, 200), p > l + 1e3 && (h.update(1e3 * c / (p - l), 100), l = p, c = 0, f)) {
              var m = performance.memory;
              f.update(m.usedJSHeapSize / 1048576, m.jsHeapSizeLimit / 1048576);
            }
            return p;
          },
          update: function() {
            a = this.end();
          },
          domElement: o,
          setMode: n
        };
      };
      return e.Panel = function(i, n, r) {
        var o = 1 / 0, a = 0, l = Math.round, c = l(window.devicePixelRatio || 1), h = 80 * c, d = 48 * c, f = 3 * c, p = 2 * c, m = 3 * c, u = 15 * c, g = 74 * c, v = 30 * c, y = document.createElement("canvas");
        y.width = h, y.height = d, y.style.cssText = "width:80px;height:48px";
        var _ = y.getContext("2d");
        return _.font = "bold " + 9 * c + "px Helvetica,Arial,sans-serif", _.textBaseline = "top", _.fillStyle = r, _.fillRect(0, 0, h, d), _.fillStyle = n, _.fillText(i, f, p), _.fillRect(m, u, g, v), _.fillStyle = r, _.globalAlpha = 0.9, _.fillRect(m, u, g, v), {
          dom: y,
          update: function(T, S) {
            o = Math.min(o, T), a = Math.max(a, T), _.fillStyle = r, _.globalAlpha = 1, _.fillRect(0, 0, h, u), _.fillStyle = n, _.fillText(l(T) + " " + i + " (" + l(o) + "-" + l(a) + ")", f, p), _.drawImage(y, m + c, u, g - c, v, m, u, g - c, v), _.fillRect(m + g - c, u, c, v), _.fillStyle = r, _.globalAlpha = 0.9, _.fillRect(m + g - c, u, c, l((1 - T / S) * v));
          }
        };
      }, e;
    });
  })(Rf);
  class If {
    constructor({ el: t, ops: e, evt: i }) {
      this.el = t, this.contactForm = this.el.querySelector("#quickForm"), this.EVT = i;
    }
    async set(t) {
      const e = this.el.querySelector(".quickMDL_info .tt2"), i = this.el.querySelector(".quickMDL_info_btm "), n = this.el.querySelector(".wysi"), r = t.parentNode;
      let o = r.querySelector(".Ajob_ex") ? r.querySelector(".Ajob_ex").innerHTML : "", a = r.querySelector(".tt3") ? r.querySelector(".tt3").innerHTML : "", l = r.querySelector(".Ajob_top") ? r.querySelector(".Ajob_top").innerHTML : "";
      e.innerHTML = a, n.innerHTML = o, i.innerHTML = l, this.setEVT();
    }
    setEVT(t, e) {
      this.el.querySelector(".quickMDL_close").onclick = (i) => {
        i.preventDefault(), this.closeFn();
      };
    }
    async closeFn() {
      this.EVT.get("SLL").state = 1, document.dispatchEvent(this.EVT.get("SLL")), this.el.classList.remove("A");
    }
    async openFn(t) {
      this.EVT.get("SLL").state = 0, document.dispatchEvent(this.EVT.get("SLL")), this.set(t), this.el.classList.add("A");
    }
    killEVT() {
    }
  }
  class wt {
    constructor(t) {
      this.busy = 1, this.URL = window.location.pathname, this.OPS = /* @__PURE__ */ new Map(), this.OPS.set("base", t.base), this.OPS.set("device", t.device), this.OPS.set("lowbat", t.lowbat), this.OPS.set("touch", t.touch), this.OPS.set("first", 0), this.updFn = Hh.bind(this), this.updTimer = anime.createTimer({
        autoplay: false,
        onUpdate: (e) => this.updFn(e.currentTime * 1e3)
      }), this.setApp();
    }
    async setApp() {
      this.SCR = [
        window.innerWidth,
        window.innerHeight
      ], this.SLL = /* @__PURE__ */ new Map(), this.SLL.set("speed", 0), this.SLL.set("target", 0), this.setSLL(), this.setEVT(), this.CTAlinks = /* @__PURE__ */ new Set(), this.CTAbuttons = /* @__PURE__ */ new Set(), this.setCTA(), this.IOS = [], this.IOSSLL = /* @__PURE__ */ new Set(), this.IOSUPD = /* @__PURE__ */ new Set(), this.setIOS(), this.CMPS = [], this.setCMPS(), this.IMG = /* @__PURE__ */ new Set(), this.VID = /* @__PURE__ */ new Set(), this.nav = new Ph({
        nav: document.querySelector(".nav"),
        head: document.querySelector(".head"),
        ops: this.OPS,
        evt: this.EVT
      }), this.quickMDL = new If({
        el: document.querySelector(".quickMDL"),
        ops: this.OPS,
        evt: this.EVT
      });
      const t = Pf();
      this.updTimer.play(), await Promise.all([
        this.setIMG(),
        this.setVID(),
        Df(t)
      ]), this.initApp(t);
    }
    async initApp(t) {
      await this.initCMPS(document.querySelector("main").dataset.skin), await this.initIOS(document.querySelector("main").dataset.skin);
      const e = t.type ? t.type : this.OPS.get("first"), i = await this.startCMPS(e);
      let n = i.has("in") ? i.get("in") : 0;
      this.OPS.get("first") == 0 ? await Sa(t) : await Sa(t), i.has("in") && await Ai(n), i.has("out") ? (i.has("ANM") && i.get("ANM").play(), await Ai(i.get("out"))) : i.has("ANM") && await i.get("ANM").play(), this.startIOS(0), this.initCTA(), this.initSLL(), this.lenis.start();
      const r = new URL(document.baseURI);
      this.OPS.set("first", 1), document.documentElement.classList.remove("lenis-stopped"), r.hash && document.querySelector(r.hash) && (await Ai(300), this.lenis.scrollTo(r.hash, {
        offset: -200,
        force: true
      })), this.busy = 0;
    }
  }
  wt.prototype.setSLL = Bh;
  wt.prototype.initSLL = zh;
  wt.prototype.setEVT = Uh;
  wt.prototype.setCustom = ll;
  wt.prototype.setIOS = bf;
  wt.prototype.initIOS = Tf;
  wt.prototype.startIOS = wf;
  wt.prototype.viewIO = Lf;
  wt.prototype.killIO = Ef;
  wt.prototype.setCTA = Qh;
  wt.prototype.initCTA = Zh;
  wt.prototype.startCMPS = Mf;
  wt.prototype.setCMPS = Of;
  wt.prototype.initCMPS = xf;
  wt.prototype.killCMP = Cf;
  wt.prototype.setIMG = tu;
  wt.prototype.stepIMG = eu;
  wt.prototype.setVID = su;
  wt.prototype.stepVID = nu;
  function Ne(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function Vl(s, t) {
    s.prototype = Object.create(t.prototype), s.prototype.constructor = s, s.__proto__ = t;
  }
  var Jt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  }, ns = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  }, Eo, Pt, ft, Oe = 1e8, It = 1 / Oe, zr = Math.PI * 2, Nf = zr / 4, Ff = 0, Bl = Math.sqrt, qf = Math.cos, Vf = Math.sin, xt = function(t) {
    return typeof t == "string";
  }, yt = function(t) {
    return typeof t == "function";
  }, We = function(t) {
    return typeof t == "number";
  }, Oo = function(t) {
    return typeof t > "u";
  }, Pe = function(t) {
    return typeof t == "object";
  }, $t = function(t) {
    return t !== false;
  }, xo = function() {
    return typeof window < "u";
  }, vn = function(t) {
    return yt(t) || xt(t);
  }, zl = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
  }, Nt = Array.isArray, Ur = /(?:-?\.?\d|\.)+/gi, Ul = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Gi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Sr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, $l = /[+-]=-?[.\d]+/, Wl = /[^,'"\[\]\s]+/gi, Bf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, mt, we, $r, Mo, te = {}, Fn = {}, Hl, Yl = function(t) {
    return (Fn = rs(t, te)) && Xt;
  }, Co = function(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }, Ws = function(t, e) {
    return !e && console.warn(t);
  }, jl = function(t, e) {
    return t && (te[t] = e) && Fn && (Fn[t] = e) || te;
  }, Hs = function() {
    return 0;
  }, zf = {
    suppressEvents: true,
    isStart: true,
    kill: false
  }, xn = {
    suppressEvents: true,
    kill: false
  }, Uf = {
    suppressEvents: true
  }, Po = {}, ni = [], Wr = {}, Xl, Kt = {}, br = {}, ba = 30, Mn = [], Do = "", ko = function(t) {
    var e = t[0], i, n;
    if (Pe(e) || yt(e) || (t = [
      t
    ]), !(i = (e._gsap || {}).harness)) {
      for (n = Mn.length; n-- && !Mn[n].targetTest(e); ) ;
      i = Mn[n];
    }
    for (n = t.length; n--; ) t[n] && (t[n]._gsap || (t[n]._gsap = new vc(t[n], i))) || t.splice(n, 1);
    return t;
  }, Ei = function(t) {
    return t._gsap || ko(he(t))[0]._gsap;
  }, Gl = function(t, e, i) {
    return (i = t[e]) && yt(i) ? t[e]() : Oo(i) && t.getAttribute && t.getAttribute(e) || i;
  }, Wt = function(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }, St = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  }, Tt = function(t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  }, Ji = function(t, e) {
    var i = e.charAt(0), n = parseFloat(e.substr(2));
    return t = parseFloat(t), i === "+" ? t + n : i === "-" ? t - n : i === "*" ? t * n : t / n;
  }, $f = function(t, e) {
    for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; ) ;
    return n < i;
  }, qn = function() {
    var t = ni.length, e = ni.slice(0), i, n;
    for (Wr = {}, ni.length = 0, i = 0; i < t; i++) n = e[i], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], true)._lazy = 0);
  }, Kl = function(t, e, i, n) {
    ni.length && !Pt && qn(), t.render(e, i, Pt && e < 0 && (t._initted || t._startAt)), ni.length && !Pt && qn();
  }, Ql = function(t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(Wl).length < 2 ? e : xt(t) ? t.trim() : t;
  }, Zl = function(t) {
    return t;
  }, ee = function(t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  }, Wf = function(t) {
    return function(e, i) {
      for (var n in i) n in e || n === "duration" && t || n === "ease" || (e[n] = i[n]);
    };
  }, rs = function(t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  }, Ta = function s(t, e) {
    for (var i in e) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = Pe(e[i]) ? s(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t;
  }, Vn = function(t, e) {
    var i = {}, n;
    for (n in t) n in e || (i[n] = t[n]);
    return i;
  }, Es = function(t) {
    var e = t.parent || mt, i = t.keyframes ? Wf(Nt(t.keyframes)) : ee;
    if ($t(t.inherit)) for (; e; ) i(t, e.vars.defaults), e = e.parent || e._dp;
    return t;
  }, Hf = function(t, e) {
    for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i]; ) ;
    return i < 0;
  }, Jl = function(t, e, i, n, r) {
    var o = t[n], a;
    if (r) for (a = e[r]; o && o[r] > a; ) o = o._prev;
    return o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t, e;
  }, or = function(t, e, i, n) {
    i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
    var r = e._prev, o = e._next;
    r ? r._next = o : t[i] === e && (t[i] = o), o ? o._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null;
  }, ci = function(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
  }, Oi = function(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var i = t; i; ) i._dirty = 1, i = i.parent;
    return t;
  }, Yf = function(t) {
    for (var e = t.parent; e && e.parent; ) e._dirty = 1, e.totalDuration(), e = e.parent;
    return t;
  }, Hr = function(t, e, i, n) {
    return t._startAt && (Pt ? t._startAt.revert(xn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, true, n));
  }, jf = function s(t) {
    return !t || t._ts && s(t.parent);
  }, wa = function(t) {
    return t._repeat ? os(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  }, os = function(t, e) {
    var i = Math.floor(t = Tt(t / e));
    return t && i === t ? i - 1 : i;
  }, Bn = function(t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }, ar = function(t) {
    return t._end = Tt(t._start + (t._tDur / Math.abs(t._ts || t._rts || It) || 0));
  }, lr = function(t, e) {
    var i = t._dp;
    return i && i.smoothChildTiming && t._ts && (t._start = Tt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), ar(t), i._dirty || Oi(i, t)), t;
  }, tc = function(t, e) {
    var i;
    if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Bn(t.rawTime(), e), (!e._dur || hn(0, e.totalDuration(), i) - e._tTime > It) && e.render(i, true)), Oi(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (i = t; i._dp; ) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
      t._zTime = -1e-8;
    }
  }, Ae = function(t, e, i, n) {
    return e.parent && ci(e), e._start = Tt((We(i) ? i : i || t !== mt ? ne(t, i, e) : t._time) + e._delay), e._end = Tt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Jl(t, e, "_first", "_last", t._sort ? "_start" : 0), Yr(e) || (t._recent = e), n || tc(t, e), t._ts < 0 && lr(t, t._tTime), t;
  }, ec = function(t, e) {
    return (te.ScrollTrigger || Co("scrollTrigger", e)) && te.ScrollTrigger.create(e, t);
  }, ic = function(t, e, i, n, r) {
    if (Io(t, e, r), !t._initted) return 1;
    if (!i && t._pt && !Pt && (t._dur && t.vars.lazy !== false || !t._dur && t.vars.lazy) && Xl !== Qt.frame) return ni.push(t), t._lazy = [
      r,
      n
    ], 1;
  }, Xf = function s(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || s(e));
  }, Yr = function(t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart";
  }, Gf = function(t, e, i, n) {
    var r = t.ratio, o = e < 0 || !e && (!t._start && Xf(t) && !(!t._initted && Yr(t)) || (t._ts < 0 || t._dp._ts < 0) && !Yr(t)) ? 0 : 1, a = t._rDelay, l = 0, c, h, d;
    if (a && t._repeat && (l = hn(0, t._tDur, e), h = os(l, a), t._yoyo && h & 1 && (o = 1 - o), h !== os(t._tTime, a) && (r = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== r || Pt || n || t._zTime === It || !e && t._zTime) {
      if (!t._initted && ic(t, e, n, i, l)) return;
      for (d = t._zTime, t._zTime = e || (i ? It : 0), i || (i = e && !d), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, c = t._pt; c; ) c.r(o, c.d), c = c._next;
      e < 0 && Hr(t, e, i, true), t._onUpdate && !i && Zt(t, "onUpdate"), l && t._repeat && !i && t.parent && Zt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && ci(t, 1), !i && !Pt && (Zt(t, o ? "onComplete" : "onReverseComplete", true), t._prom && t._prom()));
    } else t._zTime || (t._zTime = e);
  }, Kf = function(t, e, i) {
    var n;
    if (i > e) for (n = t._first; n && n._start <= i; ) {
      if (n.data === "isPause" && n._start > e) return n;
      n = n._next;
    }
    else for (n = t._last; n && n._start >= i; ) {
      if (n.data === "isPause" && n._start < e) return n;
      n = n._prev;
    }
  }, as = function(t, e, i, n) {
    var r = t._repeat, o = Tt(e) || 0, a = t._tTime / t._tDur;
    return a && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = r ? r < 0 ? 1e10 : Tt(o * (r + 1) + t._rDelay * r) : o, a > 0 && !n && lr(t, t._tTime = t._tDur * a), t.parent && ar(t), i || Oi(t.parent, t), t;
  }, Aa = function(t) {
    return t instanceof Bt ? Oi(t) : as(t, t._dur);
  }, Qf = {
    _start: 0,
    endTime: Hs,
    totalDuration: Hs
  }, ne = function s(t, e, i) {
    var n = t.labels, r = t._recent || Qf, o = t.duration() >= Oe ? r.endTime(false) : t._dur, a, l, c;
    return xt(e) && (isNaN(e) || e in n) ? (l = e.charAt(0), c = e.substr(-1) === "%", a = e.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (c ? (a < 0 ? r : i).totalDuration() / 100 : 1)) : a < 0 ? (e in n || (n[e] = o), n[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), c && i && (l = l / 100 * (Nt(i) ? i[0] : i).totalDuration()), a > 1 ? s(t, e.substr(0, a - 1), i) + l : o + l)) : e == null ? o : +e;
  }, Os = function(t, e, i) {
    var n = We(e[1]), r = (n ? 2 : 1) + (t < 2 ? 0 : 1), o = e[r], a, l;
    if (n && (o.duration = e[1]), o.parent = i, t) {
      for (a = o, l = i; l && !("immediateRender" in a); ) a = l.vars.defaults || {}, l = $t(l.vars.inherit) && l.parent;
      o.immediateRender = $t(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[r - 1];
    }
    return new bt(e[0], o, e[r + 1]);
  }, pi = function(t, e) {
    return t || t === 0 ? e(t) : e;
  }, hn = function(t, e, i) {
    return i < t ? t : i > e ? e : i;
  }, Rt = function(t, e) {
    return !xt(t) || !(e = Bf.exec(t)) ? "" : e[1];
  }, Zf = function(t, e, i) {
    return pi(i, function(n) {
      return hn(t, e, n);
    });
  }, jr = [].slice, sc = function(t, e) {
    return t && Pe(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Pe(t[0])) && !t.nodeType && t !== we;
  }, Jf = function(t, e, i) {
    return i === void 0 && (i = []), t.forEach(function(n) {
      var r;
      return xt(n) && !e || sc(n, 1) ? (r = i).push.apply(r, he(n)) : i.push(n);
    }) || i;
  }, he = function(t, e, i) {
    return ft && !e && ft.selector ? ft.selector(t) : xt(t) && !i && ($r || !ls()) ? jr.call((e || Mo).querySelectorAll(t), 0) : Nt(t) ? Jf(t, i) : sc(t) ? jr.call(t, 0) : t ? [
      t
    ] : [];
  }, Xr = function(t) {
    return t = he(t)[0] || Ws("Invalid scope") || {}, function(e) {
      var i = t.current || t.nativeElement || t;
      return he(e, i.querySelectorAll ? i : i === t ? Ws("Invalid scope") || Mo.createElement("div") : t);
    };
  }, nc = function(t) {
    return t.sort(function() {
      return 0.5 - Math.random();
    });
  }, rc = function(t) {
    if (yt(t)) return t;
    var e = Pe(t) ? t : {
      each: t
    }, i = xi(e.ease), n = e.from || 0, r = parseFloat(e.base) || 0, o = {}, a = n > 0 && n < 1, l = isNaN(n) || a, c = e.axis, h = n, d = n;
    return xt(n) ? h = d = {
      center: 0.5,
      edges: 0.5,
      end: 1
    }[n] || 0 : !a && l && (h = n[0], d = n[1]), function(f, p, m) {
      var u = (m || e).length, g = o[u], v, y, _, T, S, w, b, A, L;
      if (!g) {
        if (L = e.grid === "auto" ? 0 : (e.grid || [
          1,
          Oe
        ])[1], !L) {
          for (b = -1e8; b < (b = m[L++].getBoundingClientRect().left) && L < u; ) ;
          L < u && L--;
        }
        for (g = o[u] = [], v = l ? Math.min(L, u) * h - 0.5 : n % L, y = L === Oe ? 0 : l ? u * d / L - 0.5 : n / L | 0, b = 0, A = Oe, w = 0; w < u; w++) _ = w % L - v, T = y - (w / L | 0), g[w] = S = c ? Math.abs(c === "y" ? T : _) : Bl(_ * _ + T * T), S > b && (b = S), S < A && (A = S);
        n === "random" && nc(g), g.max = b - A, g.min = A, g.v = u = (parseFloat(e.amount) || parseFloat(e.each) * (L > u ? u - 1 : c ? c === "y" ? u / L : L : Math.max(L, u / L)) || 0) * (n === "edges" ? -1 : 1), g.b = u < 0 ? r - u : r, g.u = Rt(e.amount || e.each) || 0, i = i && u < 0 ? mc(i) : i;
      }
      return u = (g[f] - g.min) / g.max || 0, Tt(g.b + (i ? i(u) : u) * g.v) + g.u;
    };
  }, Gr = function(t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(i) {
      var n = Tt(Math.round(parseFloat(i) / t) * t * e);
      return (n - n % 1) / e + (We(i) ? 0 : Rt(i));
    };
  }, oc = function(t, e) {
    var i = Nt(t), n, r;
    return !i && Pe(t) && (n = i = t.radius || Oe, t.values ? (t = he(t.values), (r = !We(t[0])) && (n *= n)) : t = Gr(t.increment)), pi(e, i ? yt(t) ? function(o) {
      return r = t(o), Math.abs(r - o) <= n ? r : o;
    } : function(o) {
      for (var a = parseFloat(r ? o.x : o), l = parseFloat(r ? o.y : 0), c = Oe, h = 0, d = t.length, f, p; d--; ) r ? (f = t[d].x - a, p = t[d].y - l, f = f * f + p * p) : f = Math.abs(t[d] - a), f < c && (c = f, h = d);
      return h = !n || c <= n ? t[h] : o, r || h === o || We(o) ? h : h + Rt(o);
    } : Gr(t));
  }, ac = function(t, e, i, n) {
    return pi(Nt(t) ? !e : i === true ? !!(i = 0) : !n, function() {
      return Nt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * n) / n;
    });
  }, tp = function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return function(n) {
      return e.reduce(function(r, o) {
        return o(r);
      }, n);
    };
  }, ep = function(t, e) {
    return function(i) {
      return t(parseFloat(i)) + (e || Rt(i));
    };
  }, ip = function(t, e, i) {
    return cc(t, e, 0, 1, i);
  }, lc = function(t, e, i) {
    return pi(i, function(n) {
      return t[~~e(n)];
    });
  }, sp = function s(t, e, i) {
    var n = e - t;
    return Nt(t) ? lc(t, s(0, t.length), e) : pi(i, function(r) {
      return (n + (r - t) % n) % n + t;
    });
  }, np = function s(t, e, i) {
    var n = e - t, r = n * 2;
    return Nt(t) ? lc(t, s(0, t.length - 1), e) : pi(i, function(o) {
      return o = (r + (o - t) % r) % r || 0, t + (o > n ? r - o : o);
    });
  }, Ys = function(t) {
    for (var e = 0, i = "", n, r, o, a; ~(n = t.indexOf("random(", e)); ) o = t.indexOf(")", n), a = t.charAt(n + 7) === "[", r = t.substr(n + 7, o - n - 7).match(a ? Wl : Ur), i += t.substr(e, n - e) + ac(a ? r : +r[0], a ? 0 : +r[1], +r[2] || 1e-5), e = o + 1;
    return i + t.substr(e, t.length - e);
  }, cc = function(t, e, i, n, r) {
    var o = e - t, a = n - i;
    return pi(r, function(l) {
      return i + ((l - t) / o * a || 0);
    });
  }, rp = function s(t, e, i, n) {
    var r = isNaN(t + e) ? 0 : function(p) {
      return (1 - p) * t + p * e;
    };
    if (!r) {
      var o = xt(t), a = {}, l, c, h, d, f;
      if (i === true && (n = 1) && (i = null), o) t = {
        p: t
      }, e = {
        p: e
      };
      else if (Nt(t) && !Nt(e)) {
        for (h = [], d = t.length, f = d - 2, c = 1; c < d; c++) h.push(s(t[c - 1], t[c]));
        d--, r = function(m) {
          m *= d;
          var u = Math.min(f, ~~m);
          return h[u](m - u);
        }, i = e;
      } else n || (t = rs(Nt(t) ? [] : {}, t));
      if (!h) {
        for (l in e) Ro.call(a, t, l, "get", e[l]);
        r = function(m) {
          return qo(m, a) || (o ? t.p : t);
        };
      }
    }
    return pi(i, r);
  }, La = function(t, e, i) {
    var n = t.labels, r = Oe, o, a, l;
    for (o in n) a = n[o] - e, a < 0 == !!i && a && r > (a = Math.abs(a)) && (l = o, r = a);
    return l;
  }, Zt = function(t, e, i) {
    var n = t.vars, r = n[e], o = ft, a = t._ctx, l, c, h;
    if (r) return l = n[e + "Params"], c = n.callbackScope || t, i && ni.length && qn(), a && (ft = a), h = l ? r.apply(c, l) : r.call(c), ft = o, h;
  }, Ss = function(t) {
    return ci(t), t.scrollTrigger && t.scrollTrigger.kill(!!Pt), t.progress() < 1 && Zt(t, "onInterrupt"), t;
  }, Ki, hc = [], uc = function(t) {
    if (t) if (t = !t.name && t.default || t, xo() || t.headless) {
      var e = t.name, i = yt(t), n = e && !i && t.init ? function() {
        this._props = [];
      } : t, r = {
        init: Hs,
        render: qo,
        add: Ro,
        kill: bp,
        modifier: Sp,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Fo,
        aliases: {},
        register: 0
      };
      if (ls(), t !== n) {
        if (Kt[e]) return;
        ee(n, ee(Vn(t, r), o)), rs(n.prototype, rs(r, Vn(t, o))), Kt[n.prop = e] = n, t.targetTest && (Mn.push(n), Po[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      jl(e, n), t.register && t.register(Xt, n, Ht);
    } else hc.push(t);
  }, lt = 255, bs = {
    aqua: [
      0,
      lt,
      lt
    ],
    lime: [
      0,
      lt,
      0
    ],
    silver: [
      192,
      192,
      192
    ],
    black: [
      0,
      0,
      0
    ],
    maroon: [
      128,
      0,
      0
    ],
    teal: [
      0,
      128,
      128
    ],
    blue: [
      0,
      0,
      lt
    ],
    navy: [
      0,
      0,
      128
    ],
    white: [
      lt,
      lt,
      lt
    ],
    olive: [
      128,
      128,
      0
    ],
    yellow: [
      lt,
      lt,
      0
    ],
    orange: [
      lt,
      165,
      0
    ],
    gray: [
      128,
      128,
      128
    ],
    purple: [
      128,
      0,
      128
    ],
    green: [
      0,
      128,
      0
    ],
    red: [
      lt,
      0,
      0
    ],
    pink: [
      lt,
      192,
      203
    ],
    cyan: [
      0,
      lt,
      lt
    ],
    transparent: [
      lt,
      lt,
      lt,
      0
    ]
  }, Tr = function(t, e, i) {
    return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * lt + 0.5 | 0;
  }, dc = function(t, e, i) {
    var n = t ? We(t) ? [
      t >> 16,
      t >> 8 & lt,
      t & lt
    ] : 0 : bs.black, r, o, a, l, c, h, d, f, p, m;
    if (!n) {
      if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), bs[t]) n = bs[t];
      else if (t.charAt(0) === "#") {
        if (t.length < 6 && (r = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + r + r + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return n = parseInt(t.substr(1, 6), 16), [
          n >> 16,
          n >> 8 & lt,
          n & lt,
          parseInt(t.substr(7), 16) / 255
        ];
        t = parseInt(t.substr(1), 16), n = [
          t >> 16,
          t >> 8 & lt,
          t & lt
        ];
      } else if (t.substr(0, 3) === "hsl") {
        if (n = m = t.match(Ur), !e) l = +n[0] % 360 / 360, c = +n[1] / 100, h = +n[2] / 100, o = h <= 0.5 ? h * (c + 1) : h + c - h * c, r = h * 2 - o, n.length > 3 && (n[3] *= 1), n[0] = Tr(l + 1 / 3, r, o), n[1] = Tr(l, r, o), n[2] = Tr(l - 1 / 3, r, o);
        else if (~t.indexOf("=")) return n = t.match(Ul), i && n.length < 4 && (n[3] = 1), n;
      } else n = t.match(Ur) || bs.transparent;
      n = n.map(Number);
    }
    return e && !m && (r = n[0] / lt, o = n[1] / lt, a = n[2] / lt, d = Math.max(r, o, a), f = Math.min(r, o, a), h = (d + f) / 2, d === f ? l = c = 0 : (p = d - f, c = h > 0.5 ? p / (2 - d - f) : p / (d + f), l = d === r ? (o - a) / p + (o < a ? 6 : 0) : d === o ? (a - r) / p + 2 : (r - o) / p + 4, l *= 60), n[0] = ~~(l + 0.5), n[1] = ~~(c * 100 + 0.5), n[2] = ~~(h * 100 + 0.5)), i && n.length < 4 && (n[3] = 1), n;
  }, fc = function(t) {
    var e = [], i = [], n = -1;
    return t.split(ri).forEach(function(r) {
      var o = r.match(Gi) || [];
      e.push.apply(e, o), i.push(n += o.length + 1);
    }), e.c = i, e;
  }, Ea = function(t, e, i) {
    var n = "", r = (t + n).match(ri), o = e ? "hsla(" : "rgba(", a = 0, l, c, h, d;
    if (!r) return t;
    if (r = r.map(function(f) {
      return (f = dc(f, e, 1)) && o + (e ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
    }), i && (h = fc(t), l = i.c, l.join(n) !== h.c.join(n))) for (c = t.replace(ri, "1").split(Gi), d = c.length - 1; a < d; a++) n += c[a] + (~l.indexOf(a) ? r.shift() || o + "0,0,0,0)" : (h.length ? h : r.length ? r : i).shift());
    if (!c) for (c = t.split(ri), d = c.length - 1; a < d; a++) n += c[a] + r[a];
    return n + c[d];
  }, ri = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
    for (t in bs) s += "|" + t + "\\b";
    return new RegExp(s + ")", "gi");
  }(), op = /hsl[a]?\(/, pc = function(t) {
    var e = t.join(" "), i;
    if (ri.lastIndex = 0, ri.test(e)) return i = op.test(e), t[1] = Ea(t[1], i), t[0] = Ea(t[0], i, fc(t[1])), true;
  }, js, Qt = function() {
    var s = Date.now, t = 500, e = 33, i = s(), n = i, r = 1e3 / 240, o = r, a = [], l, c, h, d, f, p, m = function u(g) {
      var v = s() - n, y = g === true, _, T, S, w;
      if ((v > t || v < 0) && (i += v - e), n += v, S = n - i, _ = S - o, (_ > 0 || y) && (w = ++d.frame, f = S - d.time * 1e3, d.time = S = S / 1e3, o += _ + (_ >= r ? 4 : r - _), T = 1), y || (l = c(u)), T) for (p = 0; p < a.length; p++) a[p](S, f, w, g);
    };
    return d = {
      time: 0,
      frame: 0,
      tick: function() {
        m(true);
      },
      deltaRatio: function(g) {
        return f / (1e3 / (g || 60));
      },
      wake: function() {
        Hl && (!$r && xo() && (we = $r = window, Mo = we.document || {}, te.gsap = Xt, (we.gsapVersions || (we.gsapVersions = [])).push(Xt.version), Yl(Fn || we.GreenSockGlobals || !we.gsap && we || {}), hc.forEach(uc)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), c = h || function(g) {
          return setTimeout(g, o - d.time * 1e3 + 1 | 0);
        }, js = 1, m(2));
      },
      sleep: function() {
        (h ? cancelAnimationFrame : clearTimeout)(l), js = 0, c = Hs;
      },
      lagSmoothing: function(g, v) {
        t = g || 1 / 0, e = Math.min(v || 33, t);
      },
      fps: function(g) {
        r = 1e3 / (g || 240), o = d.time * 1e3 + r;
      },
      add: function(g, v, y) {
        var _ = v ? function(T, S, w, b) {
          g(T, S, w, b), d.remove(_);
        } : g;
        return d.remove(g), a[y ? "unshift" : "push"](_), ls(), _;
      },
      remove: function(g, v) {
        ~(v = a.indexOf(g)) && a.splice(v, 1) && p >= v && p--;
      },
      _listeners: a
    }, d;
  }(), ls = function() {
    return !js && Qt.wake();
  }, J = {}, ap = /^[\d.\-M][\d.\-,\s]/, lp = /["']/g, cp = function(t) {
    for (var e = {}, i = t.substr(1, t.length - 3).split(":"), n = i[0], r = 1, o = i.length, a, l, c; r < o; r++) l = i[r], a = r !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), e[n] = isNaN(c) ? c.replace(lp, "").trim() : +c, n = l.substr(a + 1).trim();
    return e;
  }, hp = function(t) {
    var e = t.indexOf("(") + 1, i = t.indexOf(")"), n = t.indexOf("(", e);
    return t.substring(e, ~n && n < i ? t.indexOf(")", i + 1) : i);
  }, up = function(t) {
    var e = (t + "").split("("), i = J[e[0]];
    return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [
      cp(e[1])
    ] : hp(t).split(",").map(Ql)) : J._CE && ap.test(t) ? J._CE("", t) : i;
  }, mc = function(t) {
    return function(e) {
      return 1 - t(1 - e);
    };
  }, gc = function s(t, e) {
    for (var i = t._first, n; i; ) i instanceof Bt ? s(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? s(i.timeline, e) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = e)), i = i._next;
  }, xi = function(t, e) {
    return t && (yt(t) ? t : J[t] || up(t)) || e;
  }, Fi = function(t, e, i, n) {
    i === void 0 && (i = function(l) {
      return 1 - e(1 - l);
    }), n === void 0 && (n = function(l) {
      return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
    });
    var r = {
      easeIn: e,
      easeOut: i,
      easeInOut: n
    }, o;
    return Wt(t, function(a) {
      J[a] = te[a] = r, J[o = a.toLowerCase()] = i;
      for (var l in r) J[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = J[a + "." + l] = r[l];
    }), r;
  }, _c = function(t) {
    return function(e) {
      return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
    };
  }, wr = function s(t, e, i) {
    var n = e >= 1 ? e : 1, r = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = r / zr * (Math.asin(1 / n) || 0), a = function(h) {
      return h === 1 ? 1 : n * Math.pow(2, -10 * h) * Vf((h - o) * r) + 1;
    }, l = t === "out" ? a : t === "in" ? function(c) {
      return 1 - a(1 - c);
    } : _c(a);
    return r = zr / r, l.config = function(c, h) {
      return s(t, c, h);
    }, l;
  }, Ar = function s(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function(o) {
      return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
    }, n = t === "out" ? i : t === "in" ? function(r) {
      return 1 - i(1 - r);
    } : _c(i);
    return n.config = function(r) {
      return s(t, r);
    }, n;
  };
  Wt("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, t) {
    var e = t < 5 ? t + 1 : t;
    Fi(s + ",Power" + (e - 1), t ? function(i) {
      return Math.pow(i, e);
    } : function(i) {
      return i;
    }, function(i) {
      return 1 - Math.pow(1 - i, e);
    }, function(i) {
      return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
    });
  });
  J.Linear.easeNone = J.none = J.Linear.easeIn;
  Fi("Elastic", wr("in"), wr("out"), wr());
  (function(s, t) {
    var e = 1 / t, i = 2 * e, n = 2.5 * e, r = function(a) {
      return a < e ? s * a * a : a < i ? s * Math.pow(a - 1.5 / t, 2) + 0.75 : a < n ? s * (a -= 2.25 / t) * a + 0.9375 : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
    };
    Fi("Bounce", function(o) {
      return 1 - r(1 - o);
    }, r);
  })(7.5625, 2.75);
  Fi("Expo", function(s) {
    return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
  });
  Fi("Circ", function(s) {
    return -(Bl(1 - s * s) - 1);
  });
  Fi("Sine", function(s) {
    return s === 1 ? 1 : -qf(s * Nf) + 1;
  });
  Fi("Back", Ar("in"), Ar("out"), Ar());
  J.SteppedEase = J.steps = te.SteppedEase = {
    config: function(t, e) {
      t === void 0 && (t = 1);
      var i = 1 / t, n = t + (e ? 0 : 1), r = e ? 1 : 0, o = 1 - It;
      return function(a) {
        return ((n * hn(0, o, a) | 0) + r) * i;
      };
    }
  };
  ns.ease = J["quad.out"];
  Wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
    return Do += s + "," + s + "Params,";
  });
  var vc = function(t, e) {
    this.id = Ff++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Gl, this.set = e ? e.getSetter : Fo;
  }, Xs = function() {
    function s(e) {
      this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, as(this, +e.duration, 1, 1), this.data = e.data, ft && (this._ctx = ft, ft.data.push(this)), js || Qt.wake();
    }
    var t = s.prototype;
    return t.delay = function(i) {
      return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
    }, t.duration = function(i) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
    }, t.totalDuration = function(i) {
      return arguments.length ? (this._dirty = 0, as(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, t.totalTime = function(i, n) {
      if (ls(), !arguments.length) return this._tTime;
      var r = this._dp;
      if (r && r.smoothChildTiming && this._ts) {
        for (lr(this, i), !r._dp || r.parent || tc(r, this); r && r.parent; ) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, true), r = r.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && Ae(this._dp, this, this._start - this._delay);
      }
      return (this._tTime !== i || !this._dur && !n || this._initted && Math.abs(this._zTime) === It || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Kl(this, i, n)), this;
    }, t.time = function(i, n) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + wa(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), n) : this._time;
    }, t.totalProgress = function(i, n) {
      return arguments.length ? this.totalTime(this.totalDuration() * i, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    }, t.progress = function(i, n) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + wa(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    }, t.iteration = function(i, n) {
      var r = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (i - 1) * r, n) : this._repeat ? os(this._tTime, r) + 1 : 1;
    }, t.timeScale = function(i, n) {
      if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
      if (this._rts === i) return this;
      var r = this.parent && this._ts ? Bn(this.parent._time, this) : this._tTime;
      return this._rts = +i || 0, this._ts = this._ps || i === -1e-8 ? 0 : this._rts, this.totalTime(hn(-Math.abs(this._delay), this._tDur, r), n !== false), ar(this), Yf(this);
    }, t.paused = function(i) {
      return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ls(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== It && (this._tTime -= It)))), this) : this._ps;
    }, t.startTime = function(i) {
      if (arguments.length) {
        this._start = i;
        var n = this.parent || this._dp;
        return n && (n._sort || !this.parent) && Ae(n, this, i - this._delay), this;
      }
      return this._start;
    }, t.endTime = function(i) {
      return this._start + ($t(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, t.rawTime = function(i) {
      var n = this.parent || this._dp;
      return n ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bn(n.rawTime(i), this) : this._tTime : this._tTime;
    }, t.revert = function(i) {
      i === void 0 && (i = Uf);
      var n = Pt;
      return Pt = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== false && this.kill(), Pt = n, this;
    }, t.globalTime = function(i) {
      for (var n = this, r = arguments.length ? i : n.rawTime(); n; ) r = n._start + r / (Math.abs(n._ts) || 1), n = n._dp;
      return !this.parent && this._sat ? this._sat.globalTime(i) : r;
    }, t.repeat = function(i) {
      return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Aa(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
    }, t.repeatDelay = function(i) {
      if (arguments.length) {
        var n = this._time;
        return this._rDelay = i, Aa(this), n ? this.time(n) : this;
      }
      return this._rDelay;
    }, t.yoyo = function(i) {
      return arguments.length ? (this._yoyo = i, this) : this._yoyo;
    }, t.seek = function(i, n) {
      return this.totalTime(ne(this, i), $t(n));
    }, t.restart = function(i, n) {
      return this.play().totalTime(i ? -this._delay : 0, $t(n)), this._dur || (this._zTime = -1e-8), this;
    }, t.play = function(i, n) {
      return i != null && this.seek(i, n), this.reversed(false).paused(false);
    }, t.reverse = function(i, n) {
      return i != null && this.seek(i || this.totalDuration(), n), this.reversed(true).paused(false);
    }, t.pause = function(i, n) {
      return i != null && this.seek(i, n), this.paused(true);
    }, t.resume = function() {
      return this.paused(false);
    }, t.reversed = function(i) {
      return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -1e-8 : 0)), this) : this._rts < 0;
    }, t.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -1e-8, this;
    }, t.isActive = function() {
      var i = this.parent || this._dp, n = this._start, r;
      return !!(!i || this._ts && this._initted && i.isActive() && (r = i.rawTime(true)) >= n && r < this.endTime(true) - It);
    }, t.eventCallback = function(i, n, r) {
      var o = this.vars;
      return arguments.length > 1 ? (n ? (o[i] = n, r && (o[i + "Params"] = r), i === "onUpdate" && (this._onUpdate = n)) : delete o[i], this) : o[i];
    }, t.then = function(i) {
      var n = this;
      return new Promise(function(r) {
        var o = yt(i) ? i : Zl, a = function() {
          var c = n.then;
          n.then = null, yt(o) && (o = o(n)) && (o.then || o === n) && (n.then = c), r(o), n.then = c;
        };
        n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? a() : n._prom = a;
      });
    }, t.kill = function() {
      Ss(this);
    }, s;
  }();
  ee(Xs.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Bt = function(s) {
    Vl(t, s);
    function t(i, n) {
      var r;
      return i === void 0 && (i = {}), r = s.call(this, i) || this, r.labels = {}, r.smoothChildTiming = !!i.smoothChildTiming, r.autoRemoveChildren = !!i.autoRemoveChildren, r._sort = $t(i.sortChildren), mt && Ae(i.parent || mt, Ne(r), n), i.reversed && r.reverse(), i.paused && r.paused(true), i.scrollTrigger && ec(Ne(r), i.scrollTrigger), r;
    }
    var e = t.prototype;
    return e.to = function(n, r, o) {
      return Os(0, arguments, this), this;
    }, e.from = function(n, r, o) {
      return Os(1, arguments, this), this;
    }, e.fromTo = function(n, r, o, a) {
      return Os(2, arguments, this), this;
    }, e.set = function(n, r, o) {
      return r.duration = 0, r.parent = this, Es(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new bt(n, r, ne(this, o), 1), this;
    }, e.call = function(n, r, o) {
      return Ae(this, bt.delayedCall(0, n, r), o);
    }, e.staggerTo = function(n, r, o, a, l, c, h) {
      return o.duration = r, o.stagger = o.stagger || a, o.onComplete = c, o.onCompleteParams = h, o.parent = this, new bt(n, o, ne(this, l)), this;
    }, e.staggerFrom = function(n, r, o, a, l, c, h) {
      return o.runBackwards = 1, Es(o).immediateRender = $t(o.immediateRender), this.staggerTo(n, r, o, a, l, c, h);
    }, e.staggerFromTo = function(n, r, o, a, l, c, h, d) {
      return a.startAt = o, Es(a).immediateRender = $t(a.immediateRender), this.staggerTo(n, r, a, l, c, h, d);
    }, e.render = function(n, r, o) {
      var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, h = n <= 0 ? 0 : Tt(n), d = this._zTime < 0 != n < 0 && (this._initted || !c), f, p, m, u, g, v, y, _, T, S, w, b;
      if (this !== mt && h > l && n >= 0 && (h = l), h !== this._tTime || o || d) {
        if (a !== this._time && c && (h += this._time - a, n += this._time - a), f = h, T = this._start, _ = this._ts, v = !_, d && (c || (a = this._zTime), (n || !r) && (this._zTime = n)), this._repeat) {
          if (w = this._yoyo, g = c + this._rDelay, this._repeat < -1 && n < 0) return this.totalTime(g * 100 + n, r, o);
          if (f = Tt(h % g), h === l ? (u = this._repeat, f = c) : (S = Tt(h / g), u = ~~S, u && u === S && (f = c, u--), f > c && (f = c)), S = os(this._tTime, g), !a && this._tTime && S !== u && this._tTime - S * g - this._dur <= 0 && (S = u), w && u & 1 && (f = c - f, b = 1), u !== S && !this._lock) {
            var A = w && S & 1, L = A === (w && u & 1);
            if (u < S && (A = !A), a = A ? 0 : h % c ? c : h, this._lock = 1, this.render(a || (b ? 0 : Tt(u * g)), r, !c)._lock = 0, this._tTime = h, !r && this.parent && Zt(this, "onRepeat"), this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1), a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (c = this._dur, l = this._tDur, L && (this._lock = 2, a = A ? c : -1e-4, this.render(a, true), this.vars.repeatRefresh && !b && this.invalidate()), this._lock = 0, !this._ts && !v) return this;
            gc(this, b);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (y = Kf(this, Tt(a), Tt(f)), y && (h -= f - (f = y._start))), this._tTime = h, this._time = f, this._act = !_, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, a = 0), !a && f && !r && !u && (Zt(this, "onStart"), this._tTime !== h)) return this;
        if (f >= a && n >= 0) for (p = this._first; p; ) {
          if (m = p._next, (p._act || f >= p._start) && p._ts && y !== p) {
            if (p.parent !== this) return this.render(n, r, o);
            if (p.render(p._ts > 0 ? (f - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (f - p._start) * p._ts, r, o), f !== this._time || !this._ts && !v) {
              y = 0, m && (h += this._zTime = -1e-8);
              break;
            }
          }
          p = m;
        }
        else {
          p = this._last;
          for (var x = n < 0 ? n : f; p; ) {
            if (m = p._prev, (p._act || x <= p._end) && p._ts && y !== p) {
              if (p.parent !== this) return this.render(n, r, o);
              if (p.render(p._ts > 0 ? (x - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (x - p._start) * p._ts, r, o || Pt && (p._initted || p._startAt)), f !== this._time || !this._ts && !v) {
                y = 0, m && (h += this._zTime = x ? -1e-8 : It);
                break;
              }
            }
            p = m;
          }
        }
        if (y && !r && (this.pause(), y.render(f >= a ? 0 : -1e-8)._zTime = f >= a ? 1 : -1, this._ts)) return this._start = T, ar(this), this.render(n, r, o);
        this._onUpdate && !r && Zt(this, "onUpdate", true), (h === l && this._tTime >= this.totalDuration() || !h && a) && (T === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((n || !c) && (h === l && this._ts > 0 || !h && this._ts < 0) && ci(this, 1), !r && !(n < 0 && !a) && (h || a || !l) && (Zt(this, h === l && n >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(h < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }, e.add = function(n, r) {
      var o = this;
      if (We(r) || (r = ne(this, r, n)), !(n instanceof Xs)) {
        if (Nt(n)) return n.forEach(function(a) {
          return o.add(a, r);
        }), this;
        if (xt(n)) return this.addLabel(n, r);
        if (yt(n)) n = bt.delayedCall(0, n);
        else return this;
      }
      return this !== n ? Ae(this, n, r) : this;
    }, e.getChildren = function(n, r, o, a) {
      n === void 0 && (n = true), r === void 0 && (r = true), o === void 0 && (o = true), a === void 0 && (a = -1e8);
      for (var l = [], c = this._first; c; ) c._start >= a && (c instanceof bt ? r && l.push(c) : (o && l.push(c), n && l.push.apply(l, c.getChildren(true, r, o)))), c = c._next;
      return l;
    }, e.getById = function(n) {
      for (var r = this.getChildren(1, 1, 1), o = r.length; o--; ) if (r[o].vars.id === n) return r[o];
    }, e.remove = function(n) {
      return xt(n) ? this.removeLabel(n) : yt(n) ? this.killTweensOf(n) : (n.parent === this && or(this, n), n === this._recent && (this._recent = this._last), Oi(this));
    }, e.totalTime = function(n, r) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Tt(Qt.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), s.prototype.totalTime.call(this, n, r), this._forcing = 0, this) : this._tTime;
    }, e.addLabel = function(n, r) {
      return this.labels[n] = ne(this, r), this;
    }, e.removeLabel = function(n) {
      return delete this.labels[n], this;
    }, e.addPause = function(n, r, o) {
      var a = bt.delayedCall(0, r || Hs, o);
      return a.data = "isPause", this._hasPause = 1, Ae(this, a, ne(this, n));
    }, e.removePause = function(n) {
      var r = this._first;
      for (n = ne(this, n); r; ) r._start === n && r.data === "isPause" && ci(r), r = r._next;
    }, e.killTweensOf = function(n, r, o) {
      for (var a = this.getTweensOf(n, o), l = a.length; l--; ) ti !== a[l] && a[l].kill(n, r);
      return this;
    }, e.getTweensOf = function(n, r) {
      for (var o = [], a = he(n), l = this._first, c = We(r), h; l; ) l instanceof bt ? $f(l._targets, a) && (c ? (!ti || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && o.push(l) : (h = l.getTweensOf(a, r)).length && o.push.apply(o, h), l = l._next;
      return o;
    }, e.tweenTo = function(n, r) {
      r = r || {};
      var o = this, a = ne(o, n), l = r, c = l.startAt, h = l.onStart, d = l.onStartParams, f = l.immediateRender, p, m = bt.to(o, ee({
        ease: r.ease || "none",
        lazy: false,
        immediateRender: false,
        time: a,
        overwrite: "auto",
        duration: r.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || It,
        onStart: function() {
          if (o.pause(), !p) {
            var g = r.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
            m._dur !== g && as(m, g, 0, 1).render(m._time, true, true), p = 1;
          }
          h && h.apply(m, d || []);
        }
      }, r));
      return f ? m.render(0) : m;
    }, e.tweenFromTo = function(n, r, o) {
      return this.tweenTo(r, ee({
        startAt: {
          time: ne(this, n)
        }
      }, o));
    }, e.recent = function() {
      return this._recent;
    }, e.nextLabel = function(n) {
      return n === void 0 && (n = this._time), La(this, ne(this, n));
    }, e.previousLabel = function(n) {
      return n === void 0 && (n = this._time), La(this, ne(this, n), 1);
    }, e.currentLabel = function(n) {
      return arguments.length ? this.seek(n, true) : this.previousLabel(this._time + It);
    }, e.shiftChildren = function(n, r, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, c; a; ) a._start >= o && (a._start += n, a._end += n), a = a._next;
      if (r) for (c in l) l[c] >= o && (l[c] += n);
      return Oi(this);
    }, e.invalidate = function(n) {
      var r = this._first;
      for (this._lock = 0; r; ) r.invalidate(n), r = r._next;
      return s.prototype.invalidate.call(this, n);
    }, e.clear = function(n) {
      n === void 0 && (n = true);
      for (var r = this._first, o; r; ) o = r._next, this.remove(r), r = o;
      return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), Oi(this);
    }, e.totalDuration = function(n) {
      var r = 0, o = this, a = o._last, l = Oe, c, h, d;
      if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
      if (o._dirty) {
        for (d = o.parent; a; ) c = a._prev, a._dirty && a.totalDuration(), h = a._start, h > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Ae(o, a, h - a._delay, 1)._lock = 0) : l = h, h < 0 && a._ts && (r -= h, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += h / o._ts, o._time -= h, o._tTime -= h), o.shiftChildren(-h, false, -1 / 0), l = 0), a._end > r && a._ts && (r = a._end), a = c;
        as(o, o === mt && o._time > r ? o._time : r, 1, 1), o._dirty = 0;
      }
      return o._tDur;
    }, t.updateRoot = function(n) {
      if (mt._ts && (Kl(mt, Bn(n, mt)), Xl = Qt.frame), Qt.frame >= ba) {
        ba += Jt.autoSleep || 120;
        var r = mt._first;
        if ((!r || !r._ts) && Jt.autoSleep && Qt._listeners.length < 2) {
          for (; r && !r._ts; ) r = r._next;
          r || Qt.sleep();
        }
      }
    }, t;
  }(Xs);
  ee(Bt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var dp = function(t, e, i, n, r, o, a) {
    var l = new Ht(this._pt, t, e, 0, 1, Ac, null, r), c = 0, h = 0, d, f, p, m, u, g, v, y;
    for (l.b = i, l.e = n, i += "", n += "", (v = ~n.indexOf("random(")) && (n = Ys(n)), o && (y = [
      i,
      n
    ], o(y, t, e), i = y[0], n = y[1]), f = i.match(Sr) || []; d = Sr.exec(n); ) m = d[0], u = n.substring(c, d.index), p ? p = (p + 1) % 5 : u.substr(-5) === "rgba(" && (p = 1), m !== f[h++] && (g = parseFloat(f[h - 1]) || 0, l._pt = {
      _next: l._pt,
      p: u || h === 1 ? u : ",",
      s: g,
      c: m.charAt(1) === "=" ? Ji(g, m) - g : parseFloat(m) - g,
      m: p && p < 4 ? Math.round : 0
    }, c = Sr.lastIndex);
    return l.c = c < n.length ? n.substring(c, n.length) : "", l.fp = a, ($l.test(n) || v) && (l.e = 0), this._pt = l, l;
  }, Ro = function(t, e, i, n, r, o, a, l, c, h) {
    yt(n) && (n = n(r || 0, t, o));
    var d = t[e], f = i !== "get" ? i : yt(d) ? c ? t[e.indexOf("set") || !yt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]() : d, p = yt(d) ? c ? _p : Tc : No, m;
    if (xt(n) && (~n.indexOf("random(") && (n = Ys(n)), n.charAt(1) === "=" && (m = Ji(f, n) + (Rt(f) || 0), (m || m === 0) && (n = m))), !h || f !== n || Kr) return !isNaN(f * n) && n !== "" ? (m = new Ht(this._pt, t, e, +f || 0, n - (f || 0), typeof d == "boolean" ? yp : wc, 0, p), c && (m.fp = c), a && m.modifier(a, this, t), this._pt = m) : (!d && !(e in t) && Co(e, n), dp.call(this, t, e, f, n, p, l || Jt.stringFilter, c));
  }, fp = function(t, e, i, n, r) {
    if (yt(t) && (t = xs(t, r, e, i, n)), !Pe(t) || t.style && t.nodeType || Nt(t) || zl(t)) return xt(t) ? xs(t, r, e, i, n) : t;
    var o = {}, a;
    for (a in t) o[a] = xs(t[a], r, e, i, n);
    return o;
  }, yc = function(t, e, i, n, r, o) {
    var a, l, c, h;
    if (Kt[t] && (a = new Kt[t]()).init(r, a.rawVars ? e[t] : fp(e[t], n, r, o, i), i, n, o) !== false && (i._pt = l = new Ht(i._pt, r, t, 0, 1, a.render, a, 0, a.priority), i !== Ki)) for (c = i._ptLookup[i._targets.indexOf(r)], h = a._props.length; h--; ) c[a._props[h]] = l;
    return a;
  }, ti, Kr, Io = function s(t, e, i) {
    var n = t.vars, r = n.ease, o = n.startAt, a = n.immediateRender, l = n.lazy, c = n.onUpdate, h = n.runBackwards, d = n.yoyoEase, f = n.keyframes, p = n.autoRevert, m = t._dur, u = t._startAt, g = t._targets, v = t.parent, y = v && v.data === "nested" ? v.vars.targets : g, _ = t._overwrite === "auto" && !Eo, T = t.timeline, S, w, b, A, L, x, E, O, M, D, I, C, q;
    if (T && (!f || !r) && (r = "none"), t._ease = xi(r, ns.ease), t._yEase = d ? mc(xi(d === true ? r : d, ns.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !T && !!n.runBackwards, !T || f && !n.stagger) {
      if (O = g[0] ? Ei(g[0]).harness : 0, C = O && n[O.prop], S = Vn(n, Po), u && (u._zTime < 0 && u.progress(1), e < 0 && h && a && !p ? u.render(-1, true) : u.revert(h && m ? xn : zf), u._lazy = 0), o) {
        if (ci(t._startAt = bt.set(g, ee({
          data: "isStart",
          overwrite: false,
          parent: v,
          immediateRender: true,
          lazy: !u && $t(l),
          startAt: null,
          delay: 0,
          onUpdate: c && function() {
            return Zt(t, "onUpdate");
          },
          stagger: 0
        }, o))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Pt || !a && !p) && t._startAt.revert(xn), a && m && e <= 0 && i <= 0) {
          e && (t._zTime = e);
          return;
        }
      } else if (h && m && !u) {
        if (e && (a = false), b = ee({
          overwrite: false,
          data: "isFromStart",
          lazy: a && !u && $t(l),
          immediateRender: a,
          stagger: 0,
          parent: v
        }, S), C && (b[O.prop] = C), ci(t._startAt = bt.set(g, b)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Pt ? t._startAt.revert(xn) : t._startAt.render(-1, true)), t._zTime = e, !a) s(t._startAt, It, It);
        else if (!e) return;
      }
      for (t._pt = t._ptCache = 0, l = m && $t(l) || l && !m, w = 0; w < g.length; w++) {
        if (L = g[w], E = L._gsap || ko(g)[w]._gsap, t._ptLookup[w] = D = {}, Wr[E.id] && ni.length && qn(), I = y === g ? w : y.indexOf(L), O && (M = new O()).init(L, C || S, t, I, y) !== false && (t._pt = A = new Ht(t._pt, L, M.name, 0, 1, M.render, M, 0, M.priority), M._props.forEach(function(R) {
          D[R] = A;
        }), M.priority && (x = 1)), !O || C) for (b in S) Kt[b] && (M = yc(b, S, t, I, L, y)) ? M.priority && (x = 1) : D[b] = A = Ro.call(t, L, b, "get", S[b], I, y, 0, n.stringFilter);
        t._op && t._op[w] && t.kill(L, t._op[w]), _ && t._pt && (ti = t, mt.killTweensOf(L, D, t.globalTime(e)), q = !t.parent, ti = 0), t._pt && l && (Wr[E.id] = 1);
      }
      x && Lc(t), t._onInit && t._onInit(t);
    }
    t._onUpdate = c, t._initted = (!t._op || t._pt) && !q, f && e <= 0 && T.render(Oe, true, true);
  }, pp = function(t, e, i, n, r, o, a, l) {
    var c = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, d, f, p;
    if (!c) for (c = t._ptCache[e] = [], f = t._ptLookup, p = t._targets.length; p--; ) {
      if (h = f[p][e], h && h.d && h.d._pt) for (h = h.d._pt; h && h.p !== e && h.fp !== e; ) h = h._next;
      if (!h) return Kr = 1, t.vars[e] = "+=0", Io(t, a), Kr = 0, l ? Ws(e + " not eligible for reset") : 1;
      c.push(h);
    }
    for (p = c.length; p--; ) d = c[p], h = d._pt || d, h.s = (n || n === 0) && !r ? n : h.s + (n || 0) + o * h.c, h.c = i - h.s, d.e && (d.e = St(i) + Rt(d.e)), d.b && (d.b = h.s + Rt(d.b));
  }, mp = function(t, e) {
    var i = t[0] ? Ei(t[0]).harness : 0, n = i && i.aliases, r, o, a, l;
    if (!n) return e;
    r = rs({}, e);
    for (o in n) if (o in r) for (l = n[o].split(","), a = l.length; a--; ) r[l[a]] = r[o];
    return r;
  }, gp = function(t, e, i, n) {
    var r = e.ease || n || "power1.inOut", o, a;
    if (Nt(e)) a = i[t] || (i[t] = []), e.forEach(function(l, c) {
      return a.push({
        t: c / (e.length - 1) * 100,
        v: l,
        e: r
      });
    });
    else for (o in e) a = i[o] || (i[o] = []), o === "ease" || a.push({
      t: parseFloat(t),
      v: e[o],
      e: r
    });
  }, xs = function(t, e, i, n, r) {
    return yt(t) ? t.call(e, i, n, r) : xt(t) && ~t.indexOf("random(") ? Ys(t) : t;
  }, Sc = Do + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", bc = {};
  Wt(Sc + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
    return bc[s] = 1;
  });
  var bt = function(s) {
    Vl(t, s);
    function t(i, n, r, o) {
      var a;
      typeof n == "number" && (r.duration = n, n = r, r = null), a = s.call(this, o ? n : Es(n)) || this;
      var l = a.vars, c = l.duration, h = l.delay, d = l.immediateRender, f = l.stagger, p = l.overwrite, m = l.keyframes, u = l.defaults, g = l.scrollTrigger, v = l.yoyoEase, y = n.parent || mt, _ = (Nt(i) || zl(i) ? We(i[0]) : "length" in n) ? [
        i
      ] : he(i), T, S, w, b, A, L, x, E;
      if (a._targets = _.length ? ko(_) : Ws("GSAP target " + i + " not found. https://gsap.com", !Jt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = p, m || f || vn(c) || vn(h)) {
        if (n = a.vars, T = a.timeline = new Bt({
          data: "nested",
          defaults: u || {},
          targets: y && y.data === "nested" ? y.vars.targets : _
        }), T.kill(), T.parent = T._dp = Ne(a), T._start = 0, f || vn(c) || vn(h)) {
          if (b = _.length, x = f && rc(f), Pe(f)) for (A in f) ~Sc.indexOf(A) && (E || (E = {}), E[A] = f[A]);
          for (S = 0; S < b; S++) w = Vn(n, bc), w.stagger = 0, v && (w.yoyoEase = v), E && rs(w, E), L = _[S], w.duration = +xs(c, Ne(a), S, L, _), w.delay = (+xs(h, Ne(a), S, L, _) || 0) - a._delay, !f && b === 1 && w.delay && (a._delay = h = w.delay, a._start += h, w.delay = 0), T.to(L, w, x ? x(S, L, _) : 0), T._ease = J.none;
          T.duration() ? c = h = 0 : a.timeline = 0;
        } else if (m) {
          Es(ee(T.vars.defaults, {
            ease: "none"
          })), T._ease = xi(m.ease || n.ease || "none");
          var O = 0, M, D, I;
          if (Nt(m)) m.forEach(function(C) {
            return T.to(_, C, ">");
          }), T.duration();
          else {
            w = {};
            for (A in m) A === "ease" || A === "easeEach" || gp(A, m[A], w, m.easeEach);
            for (A in w) for (M = w[A].sort(function(C, q) {
              return C.t - q.t;
            }), O = 0, S = 0; S < M.length; S++) D = M[S], I = {
              ease: D.e,
              duration: (D.t - (S ? M[S - 1].t : 0)) / 100 * c
            }, I[A] = D.v, T.to(_, I, O), O += I.duration;
            T.duration() < c && T.to({}, {
              duration: c - T.duration()
            });
          }
        }
        c || a.duration(c = T.duration());
      } else a.timeline = 0;
      return p === true && !Eo && (ti = Ne(a), mt.killTweensOf(_), ti = 0), Ae(y, Ne(a), r), n.reversed && a.reverse(), n.paused && a.paused(true), (d || !c && !m && a._start === Tt(y._time) && $t(d) && jf(Ne(a)) && y.data !== "nested") && (a._tTime = -1e-8, a.render(Math.max(0, -h) || 0)), g && ec(Ne(a), g), a;
    }
    var e = t.prototype;
    return e.render = function(n, r, o) {
      var a = this._time, l = this._tDur, c = this._dur, h = n < 0, d = n > l - It && !h ? l : n < It ? 0 : n, f, p, m, u, g, v, y, _, T;
      if (!c) Gf(this, n, r, o);
      else if (d !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h || this._lazy) {
        if (f = d, _ = this.timeline, this._repeat) {
          if (u = c + this._rDelay, this._repeat < -1 && h) return this.totalTime(u * 100 + n, r, o);
          if (f = Tt(d % u), d === l ? (m = this._repeat, f = c) : (g = Tt(d / u), m = ~~g, m && m === g ? (f = c, m--) : f > c && (f = c)), v = this._yoyo && m & 1, v && (T = this._yEase, f = c - f), g = os(this._tTime, u), f === a && !o && this._initted && m === g) return this._tTime = d, this;
          m !== g && (_ && this._yEase && gc(_, v), this.vars.repeatRefresh && !v && !this._lock && f !== u && this._initted && (this._lock = o = 1, this.render(Tt(u * m), true).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (ic(this, h ? n : f, o, r, d)) return this._tTime = 0, this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && m !== g)) return this;
          if (c !== this._dur) return this.render(n, r, o);
        }
        if (this._tTime = d, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (T || this._ease)(f / c), this._from && (this.ratio = y = 1 - y), f && !a && !r && !m && (Zt(this, "onStart"), this._tTime !== d)) return this;
        for (p = this._pt; p; ) p.r(y, p.d), p = p._next;
        _ && _.render(n < 0 ? n : _._dur * _._ease(f / this._dur), r, o) || this._startAt && (this._zTime = n), this._onUpdate && !r && (h && Hr(this, n, r, o), Zt(this, "onUpdate")), this._repeat && m !== g && this.vars.onRepeat && !r && this.parent && Zt(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (h && !this._onUpdate && Hr(this, n, true, true), (n || !c) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && ci(this, 1), !r && !(h && !a) && (d || a || v) && (Zt(this, d === l ? "onComplete" : "onReverseComplete", true), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }, e.targets = function() {
      return this._targets;
    }, e.invalidate = function(n) {
      return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), s.prototype.invalidate.call(this, n);
    }, e.resetTo = function(n, r, o, a, l) {
      js || Qt.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
      return this._initted || Io(this, c), h = this._ease(c / this._dur), pp(this, n, r, o, a, h, c, l) ? this.resetTo(n, r, o, a, 1) : (lr(this, 0), this.parent || Jl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, e.kill = function(n, r) {
      if (r === void 0 && (r = "all"), !n && (!r || r === "all")) return this._lazy = this._pt = 0, this.parent ? Ss(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Pt), this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return this.timeline.killTweensOf(n, r, ti && ti.vars.overwrite !== true)._first || Ss(this), this.parent && o !== this.timeline.totalDuration() && as(this, this._dur * this.timeline._tDur / o, 0, 1), this;
      }
      var a = this._targets, l = n ? he(n) : a, c = this._ptLookup, h = this._pt, d, f, p, m, u, g, v;
      if ((!r || r === "all") && Hf(a, l)) return r === "all" && (this._pt = 0), Ss(this);
      for (d = this._op = this._op || [], r !== "all" && (xt(r) && (u = {}, Wt(r, function(y) {
        return u[y] = 1;
      }), r = u), r = mp(a, r)), v = a.length; v--; ) if (~l.indexOf(a[v])) {
        f = c[v], r === "all" ? (d[v] = r, m = f, p = {}) : (p = d[v] = d[v] || {}, m = r);
        for (u in m) g = f && f[u], g && ((!("kill" in g.d) || g.d.kill(u) === true) && or(this, g, "_pt"), delete f[u]), p !== "all" && (p[u] = 1);
      }
      return this._initted && !this._pt && h && Ss(this), this;
    }, t.to = function(n, r) {
      return new t(n, r, arguments[2]);
    }, t.from = function(n, r) {
      return Os(1, arguments);
    }, t.delayedCall = function(n, r, o, a) {
      return new t(r, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: n,
        onComplete: r,
        onReverseComplete: r,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a
      });
    }, t.fromTo = function(n, r, o) {
      return Os(2, arguments);
    }, t.set = function(n, r) {
      return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(n, r);
    }, t.killTweensOf = function(n, r, o) {
      return mt.killTweensOf(n, r, o);
    }, t;
  }(Xs);
  ee(bt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  Wt("staggerTo,staggerFrom,staggerFromTo", function(s) {
    bt[s] = function() {
      var t = new Bt(), e = jr.call(arguments, 0);
      return e.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, e);
    };
  });
  var No = function(t, e, i) {
    return t[e] = i;
  }, Tc = function(t, e, i) {
    return t[e](i);
  }, _p = function(t, e, i, n) {
    return t[e](n.fp, i);
  }, vp = function(t, e, i) {
    return t.setAttribute(e, i);
  }, Fo = function(t, e) {
    return yt(t[e]) ? Tc : Oo(t[e]) && t.setAttribute ? vp : No;
  }, wc = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
  }, yp = function(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  }, Ac = function(t, e) {
    var i = e._pt, n = "";
    if (!t && e.b) n = e.b;
    else if (t === 1 && e.e) n = e.e;
    else {
      for (; i; ) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + n, i = i._next;
      n += e.c;
    }
    e.set(e.t, e.p, n, e);
  }, qo = function(t, e) {
    for (var i = e._pt; i; ) i.r(t, i.d), i = i._next;
  }, Sp = function(t, e, i, n) {
    for (var r = this._pt, o; r; ) o = r._next, r.p === n && r.modifier(t, e, i), r = o;
  }, bp = function(t) {
    for (var e = this._pt, i, n; e; ) n = e._next, e.p === t && !e.op || e.op === t ? or(this, e, "_pt") : e.dep || (i = 1), e = n;
    return !i;
  }, Tp = function(t, e, i, n) {
    n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
  }, Lc = function(t) {
    for (var e = t._pt, i, n, r, o; e; ) {
      for (i = e._next, n = r; n && n.pr > e.pr; ) n = n._next;
      (e._prev = n ? n._prev : o) ? e._prev._next = e : r = e, (e._next = n) ? n._prev = e : o = e, e = i;
    }
    t._pt = r;
  }, Ht = function() {
    function s(e, i, n, r, o, a, l, c, h) {
      this.t = i, this.s = r, this.c = o, this.p = n, this.r = a || wc, this.d = l || this, this.set = c || No, this.pr = h || 0, this._next = e, e && (e._prev = this);
    }
    var t = s.prototype;
    return t.modifier = function(i, n, r) {
      this.mSet = this.mSet || this.set, this.set = Tp, this.m = i, this.mt = r, this.tween = n;
    }, s;
  }();
  Wt(Do + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
    return Po[s] = 1;
  });
  te.TweenMax = te.TweenLite = bt;
  te.TimelineLite = te.TimelineMax = Bt;
  mt = new Bt({
    sortChildren: false,
    defaults: ns,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  Jt.stringFilter = pc;
  var Mi = [], Cn = {}, wp = [], Oa = 0, Ap = 0, Lr = function(t) {
    return (Cn[t] || wp).map(function(e) {
      return e();
    });
  }, Qr = function() {
    var t = Date.now(), e = [];
    t - Oa > 2 && (Lr("matchMediaInit"), Mi.forEach(function(i) {
      var n = i.queries, r = i.conditions, o, a, l, c;
      for (a in n) o = we.matchMedia(n[a]).matches, o && (l = 1), o !== r[a] && (r[a] = o, c = 1);
      c && (i.revert(), l && e.push(i));
    }), Lr("matchMediaRevert"), e.forEach(function(i) {
      return i.onMatch(i, function(n) {
        return i.add(null, n);
      });
    }), Oa = t, Lr("matchMedia"));
  }, Ec = function() {
    function s(e, i) {
      this.selector = i && Xr(i), this.data = [], this._r = [], this.isReverted = false, this.id = Ap++, e && this.add(e);
    }
    var t = s.prototype;
    return t.add = function(i, n, r) {
      yt(i) && (r = n, n = i, i = yt);
      var o = this, a = function() {
        var c = ft, h = o.selector, d;
        return c && c !== o && c.data.push(o), r && (o.selector = Xr(r)), ft = o, d = n.apply(o, arguments), yt(d) && o._r.push(d), ft = c, o.selector = h, o.isReverted = false, d;
      };
      return o.last = a, i === yt ? a(o, function(l) {
        return o.add(null, l);
      }) : i ? o[i] = a : a;
    }, t.ignore = function(i) {
      var n = ft;
      ft = null, i(this), ft = n;
    }, t.getTweens = function() {
      var i = [];
      return this.data.forEach(function(n) {
        return n instanceof s ? i.push.apply(i, n.getTweens()) : n instanceof bt && !(n.parent && n.parent.data === "nested") && i.push(n);
      }), i;
    }, t.clear = function() {
      this._r.length = this.data.length = 0;
    }, t.kill = function(i, n) {
      var r = this;
      if (i ? function() {
        for (var a = r.getTweens(), l = r.data.length, c; l--; ) c = r.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(true, true, false).forEach(function(h) {
          return a.splice(a.indexOf(h), 1);
        }));
        for (a.map(function(h) {
          return {
            g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
            t: h
          };
        }).sort(function(h, d) {
          return d.g - h.g || -1 / 0;
        }).forEach(function(h) {
          return h.t.revert(i);
        }), l = r.data.length; l--; ) c = r.data[l], c instanceof Bt ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof bt) && c.revert && c.revert(i);
        r._r.forEach(function(h) {
          return h(i, r);
        }), r.isReverted = true;
      }() : this.data.forEach(function(a) {
        return a.kill && a.kill();
      }), this.clear(), n) for (var o = Mi.length; o--; ) Mi[o].id === this.id && Mi.splice(o, 1);
    }, t.revert = function(i) {
      this.kill(i || {});
    }, s;
  }(), Lp = function() {
    function s(e) {
      this.contexts = [], this.scope = e, ft && ft.data.push(this);
    }
    var t = s.prototype;
    return t.add = function(i, n, r) {
      Pe(i) || (i = {
        matches: i
      });
      var o = new Ec(0, r || this.scope), a = o.conditions = {}, l, c, h;
      ft && !o.selector && (o.selector = ft.selector), this.contexts.push(o), n = o.add("onMatch", n), o.queries = i;
      for (c in i) c === "all" ? h = 1 : (l = we.matchMedia(i[c]), l && (Mi.indexOf(o) < 0 && Mi.push(o), (a[c] = l.matches) && (h = 1), l.addListener ? l.addListener(Qr) : l.addEventListener("change", Qr)));
      return h && n(o, function(d) {
        return o.add(null, d);
      }), this;
    }, t.revert = function(i) {
      this.kill(i || {});
    }, t.kill = function(i) {
      this.contexts.forEach(function(n) {
        return n.kill(i, true);
      });
    }, s;
  }(), zn = {
    registerPlugin: function() {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      e.forEach(function(n) {
        return uc(n);
      });
    },
    timeline: function(t) {
      return new Bt(t);
    },
    getTweensOf: function(t, e) {
      return mt.getTweensOf(t, e);
    },
    getProperty: function(t, e, i, n) {
      xt(t) && (t = he(t)[0]);
      var r = Ei(t || {}).get, o = i ? Zl : Ql;
      return i === "native" && (i = ""), t && (e ? o((Kt[e] && Kt[e].get || r)(t, e, i, n)) : function(a, l, c) {
        return o((Kt[a] && Kt[a].get || r)(t, a, l, c));
      });
    },
    quickSetter: function(t, e, i) {
      if (t = he(t), t.length > 1) {
        var n = t.map(function(h) {
          return Xt.quickSetter(h, e, i);
        }), r = n.length;
        return function(h) {
          for (var d = r; d--; ) n[d](h);
        };
      }
      t = t[0] || {};
      var o = Kt[e], a = Ei(t), l = a.harness && (a.harness.aliases || {})[e] || e, c = o ? function(h) {
        var d = new o();
        Ki._pt = 0, d.init(t, i ? h + i : h, Ki, 0, [
          t
        ]), d.render(1, d), Ki._pt && qo(1, Ki);
      } : a.set(t, l);
      return o ? c : function(h) {
        return c(t, l, i ? h + i : h, a, 1);
      };
    },
    quickTo: function(t, e, i) {
      var n, r = Xt.to(t, ee((n = {}, n[e] = "+=0.1", n.paused = true, n.stagger = 0, n), i || {})), o = function(l, c, h) {
        return r.resetTo(e, l, c, h);
      };
      return o.tween = r, o;
    },
    isTweening: function(t) {
      return mt.getTweensOf(t, true).length > 0;
    },
    defaults: function(t) {
      return t && t.ease && (t.ease = xi(t.ease, ns.ease)), Ta(ns, t || {});
    },
    config: function(t) {
      return Ta(Jt, t || {});
    },
    registerEffect: function(t) {
      var e = t.name, i = t.effect, n = t.plugins, r = t.defaults, o = t.extendTimeline;
      (n || "").split(",").forEach(function(a) {
        return a && !Kt[a] && !te[a] && Ws(e + " effect requires " + a + " plugin.");
      }), br[e] = function(a, l, c) {
        return i(he(a), ee(l || {}, r), c);
      }, o && (Bt.prototype[e] = function(a, l, c) {
        return this.add(br[e](a, Pe(l) ? l : (c = l) && {}, this), c);
      });
    },
    registerEase: function(t, e) {
      J[t] = xi(e);
    },
    parseEase: function(t, e) {
      return arguments.length ? xi(t, e) : J;
    },
    getById: function(t) {
      return mt.getById(t);
    },
    exportRoot: function(t, e) {
      t === void 0 && (t = {});
      var i = new Bt(t), n, r;
      for (i.smoothChildTiming = $t(t.smoothChildTiming), mt.remove(i), i._dp = 0, i._time = i._tTime = mt._time, n = mt._first; n; ) r = n._next, (e || !(!n._dur && n instanceof bt && n.vars.onComplete === n._targets[0])) && Ae(i, n, n._start - n._delay), n = r;
      return Ae(mt, i, 0), i;
    },
    context: function(t, e) {
      return t ? new Ec(t, e) : ft;
    },
    matchMedia: function(t) {
      return new Lp(t);
    },
    matchMediaRefresh: function() {
      return Mi.forEach(function(t) {
        var e = t.conditions, i, n;
        for (n in e) e[n] && (e[n] = false, i = 1);
        i && t.revert();
      }) || Qr();
    },
    addEventListener: function(t, e) {
      var i = Cn[t] || (Cn[t] = []);
      ~i.indexOf(e) || i.push(e);
    },
    removeEventListener: function(t, e) {
      var i = Cn[t], n = i && i.indexOf(e);
      n >= 0 && i.splice(n, 1);
    },
    utils: {
      wrap: sp,
      wrapYoyo: np,
      distribute: rc,
      random: ac,
      snap: oc,
      normalize: ip,
      getUnit: Rt,
      clamp: Zf,
      splitColor: dc,
      toArray: he,
      selector: Xr,
      mapRange: cc,
      pipe: tp,
      unitize: ep,
      interpolate: rp,
      shuffle: nc
    },
    install: Yl,
    effects: br,
    ticker: Qt,
    updateRoot: Bt.updateRoot,
    plugins: Kt,
    globalTimeline: mt,
    core: {
      PropTween: Ht,
      globals: jl,
      Tween: bt,
      Timeline: Bt,
      Animation: Xs,
      getCache: Ei,
      _removeLinkedListItem: or,
      reverting: function() {
        return Pt;
      },
      context: function(t) {
        return t && ft && (ft.data.push(t), t._ctx = ft), ft;
      },
      suppressOverwrites: function(t) {
        return Eo = t;
      }
    }
  };
  Wt("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
    return zn[s] = bt[s];
  });
  Qt.add(Bt.updateRoot);
  Ki = zn.to({}, {
    duration: 0
  });
  var Ep = function(t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; ) i = i._next;
    return i;
  }, Op = function(t, e) {
    var i = t._targets, n, r, o;
    for (n in e) for (r = i.length; r--; ) o = t._ptLookup[r][n], o && (o = o.d) && (o._pt && (o = Ep(o, n)), o && o.modifier && o.modifier(e[n], t, i[r], n));
  }, Er = function(t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function(n, r, o) {
        o._onInit = function(a) {
          var l, c;
          if (xt(r) && (l = {}, Wt(r, function(h) {
            return l[h] = 1;
          }), r = l), e) {
            l = {};
            for (c in r) l[c] = e(r[c]);
            r = l;
          }
          Op(a, r);
        };
      }
    };
  }, Xt = zn.registerPlugin({
    name: "attr",
    init: function(t, e, i, n, r) {
      var o, a, l;
      this.tween = i;
      for (o in e) l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", e[o], n, r, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
    },
    render: function(t, e) {
      for (var i = e._pt; i; ) Pt ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
    }
  }, {
    name: "endArray",
    init: function(t, e) {
      for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
    }
  }, Er("roundProps", Gr), Er("modifiers"), Er("snap", oc)) || zn;
  bt.version = Bt.version = Xt.version = "3.12.7";
  Hl = 1;
  xo() && ls();
  J.Power0;
  J.Power1;
  J.Power2;
  J.Power3;
  J.Power4;
  J.Linear;
  J.Quad;
  J.Cubic;
  J.Quart;
  J.Quint;
  J.Strong;
  J.Elastic;
  J.Back;
  J.SteppedEase;
  J.Bounce;
  J.Sine;
  J.Expo;
  J.Circ;
  var xa, ei, ts, Vo, yi, Ma, Bo, xp = function() {
    return typeof window < "u";
  }, He = {}, vi = 180 / Math.PI, es = Math.PI / 180, Bi = Math.atan2, Ca = 1e8, zo = /([A-Z])/g, Mp = /(left|right|width|margin|padding|x)/i, Cp = /[\s,\(]\S/, Le = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  }, Zr = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  }, Pp = function(t, e) {
    return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  }, Dp = function(t, e) {
    return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
  }, kp = function(t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  }, Oc = function(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }, xc = function(t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
  }, Rp = function(t, e, i) {
    return t.style[e] = i;
  }, Ip = function(t, e, i) {
    return t.style.setProperty(e, i);
  }, Np = function(t, e, i) {
    return t._gsap[e] = i;
  }, Fp = function(t, e, i) {
    return t._gsap.scaleX = t._gsap.scaleY = i;
  }, qp = function(t, e, i, n, r) {
    var o = t._gsap;
    o.scaleX = o.scaleY = i, o.renderTransform(r, o);
  }, Vp = function(t, e, i, n, r) {
    var o = t._gsap;
    o[e] = i, o.renderTransform(r, o);
  }, _t = "transform", Yt = _t + "Origin", Bp = function s(t, e) {
    var i = this, n = this.target, r = n.style, o = n._gsap;
    if (t in He && r) {
      if (this.tfm = this.tfm || {}, t !== "transform") t = Le[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return i.tfm[a] = qe(n, a);
      }) : this.tfm[t] = o.x ? o[t] : qe(n, t), t === Yt && (this.tfm.zOrigin = o.zOrigin);
      else return Le.transform.split(",").forEach(function(a) {
        return s.call(i, a, e);
      });
      if (this.props.indexOf(_t) >= 0) return;
      o.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(Yt, e, "")), t = _t;
    }
    (r || e) && this.props.push(t, e, r[t]);
  }, Mc = function(t) {
    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
  }, zp = function() {
    var t = this.props, e = this.target, i = e.style, n = e._gsap, r, o;
    for (r = 0; r < t.length; r += 3) t[r + 1] ? t[r + 1] === 2 ? e[t[r]](t[r + 2]) : e[t[r]] = t[r + 2] : t[r + 2] ? i[t[r]] = t[r + 2] : i.removeProperty(t[r].substr(0, 2) === "--" ? t[r] : t[r].replace(zo, "-$1").toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) n[o] = this.tfm[o];
      n.svg && (n.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), r = Bo(), (!r || !r.isStart) && !i[_t] && (Mc(i), n.zOrigin && i[Yt] && (i[Yt] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1);
    }
  }, Cc = function(t, e) {
    var i = {
      target: t,
      props: [],
      revert: zp,
      save: Bp
    };
    return t._gsap || Xt.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(n) {
      return i.save(n);
    }), i;
  }, Pc, Jr = function(t, e) {
    var i = ei.createElementNS ? ei.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ei.createElement(t);
    return i && i.style ? i : ei.createElement(t);
  }, xe = function s(t, e, i) {
    var n = getComputedStyle(t);
    return n[e] || n.getPropertyValue(e.replace(zo, "-$1").toLowerCase()) || n.getPropertyValue(e) || !i && s(t, cs(e) || e, 1) || "";
  }, Pa = "O,Moz,ms,Ms,Webkit".split(","), cs = function(t, e, i) {
    var n = e || yi, r = n.style, o = 5;
    if (t in r && !i) return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Pa[o] + t in r); ) ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Pa[o] : "") + t;
  }, to = function() {
    xp() && window.document && (xa = window, ei = xa.document, ts = ei.documentElement, yi = Jr("div") || {
      style: {}
    }, Jr("div"), _t = cs(_t), Yt = _t + "Origin", yi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Pc = !!cs("perspective"), Bo = Xt.core.reverting, Vo = 1);
  }, Da = function(t) {
    var e = t.ownerSVGElement, i = Jr("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = t.cloneNode(true), r;
    n.style.display = "block", i.appendChild(n), ts.appendChild(i);
    try {
      r = n.getBBox();
    } catch {
    }
    return i.removeChild(n), ts.removeChild(i), r;
  }, ka = function(t, e) {
    for (var i = e.length; i--; ) if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  }, Dc = function(t) {
    var e, i;
    try {
      e = t.getBBox();
    } catch {
      e = Da(t), i = 1;
    }
    return e && (e.width || e.height) || i || (e = Da(t)), e && !e.width && !e.x && !e.y ? {
      x: +ka(t, [
        "x",
        "cx",
        "x1"
      ]) || 0,
      y: +ka(t, [
        "y",
        "cy",
        "y1"
      ]) || 0,
      width: 0,
      height: 0
    } : e;
  }, kc = function(t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Dc(t));
  }, Ri = function(t, e) {
    if (e) {
      var i = t.style, n;
      e in He && e !== Yt && (e = _t), i.removeProperty ? (n = e.substr(0, 2), (n === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(n === "--" ? e : e.replace(zo, "-$1").toLowerCase())) : i.removeAttribute(e);
    }
  }, ii = function(t, e, i, n, r, o) {
    var a = new Ht(t._pt, e, i, 0, 1, o ? xc : Oc);
    return t._pt = a, a.b = n, a.e = r, t._props.push(i), a;
  }, Ra = {
    deg: 1,
    rad: 1,
    turn: 1
  }, Up = {
    grid: 1,
    flex: 1
  }, hi = function s(t, e, i, n) {
    var r = parseFloat(i) || 0, o = (i + "").trim().substr((r + "").length) || "px", a = yi.style, l = Mp.test(e), c = t.tagName.toLowerCase() === "svg", h = (c ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, f = n === "px", p = n === "%", m, u, g, v;
    if (n === o || !r || Ra[n] || Ra[o]) return r;
    if (o !== "px" && !f && (r = s(t, e, i, "px")), v = t.getCTM && kc(t), (p || o === "%") && (He[e] || ~e.indexOf("adius"))) return m = v ? t.getBBox()[l ? "width" : "height"] : t[h], St(p ? r / m * d : r / 100 * m);
    if (a[l ? "width" : "height"] = d + (f ? o : n), u = n !== "rem" && ~e.indexOf("adius") || n === "em" && t.appendChild && !c ? t : t.parentNode, v && (u = (t.ownerSVGElement || {}).parentNode), (!u || u === ei || !u.appendChild) && (u = ei.body), g = u._gsap, g && p && g.width && l && g.time === Qt.time && !g.uncache) return St(r / g.width * d);
    if (p && (e === "height" || e === "width")) {
      var y = t.style[e];
      t.style[e] = d + n, m = t[h], y ? t.style[e] = y : Ri(t, e);
    } else (p || o === "%") && !Up[xe(u, "display")] && (a.position = xe(t, "position")), u === t && (a.position = "static"), u.appendChild(yi), m = yi[h], u.removeChild(yi), a.position = "absolute";
    return l && p && (g = Ei(u), g.time = Qt.time, g.width = u[h]), St(f ? m * r / d : m && r ? d / m * r : 0);
  }, qe = function(t, e, i, n) {
    var r;
    return Vo || to(), e in Le && e !== "transform" && (e = Le[e], ~e.indexOf(",") && (e = e.split(",")[0])), He[e] && e !== "transform" ? (r = Ks(t, n), r = e !== "transformOrigin" ? r[e] : r.svg ? r.origin : $n(xe(t, Yt)) + " " + r.zOrigin + "px") : (r = t.style[e], (!r || r === "auto" || n || ~(r + "").indexOf("calc(")) && (r = Un[e] && Un[e](t, e, i) || xe(t, e) || Gl(t, e) || (e === "opacity" ? 1 : 0))), i && !~(r + "").trim().indexOf(" ") ? hi(t, e, r, i) + i : r;
  }, $p = function(t, e, i, n) {
    if (!i || i === "none") {
      var r = cs(e, t, 1), o = r && xe(t, r, 1);
      o && o !== i ? (e = r, i = o) : e === "borderColor" && (i = xe(t, "borderTopColor"));
    }
    var a = new Ht(this._pt, t.style, e, 0, 1, Ac), l = 0, c = 0, h, d, f, p, m, u, g, v, y, _, T, S;
    if (a.b = i, a.e = n, i += "", n += "", n === "auto" && (u = t.style[e], t.style[e] = n, n = xe(t, e) || n, u ? t.style[e] = u : Ri(t, e)), h = [
      i,
      n
    ], pc(h), i = h[0], n = h[1], f = i.match(Gi) || [], S = n.match(Gi) || [], S.length) {
      for (; d = Gi.exec(n); ) g = d[0], y = n.substring(l, d.index), m ? m = (m + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (m = 1), g !== (u = f[c++] || "") && (p = parseFloat(u) || 0, T = u.substr((p + "").length), g.charAt(1) === "=" && (g = Ji(p, g) + T), v = parseFloat(g), _ = g.substr((v + "").length), l = Gi.lastIndex - _.length, _ || (_ = _ || Jt.units[e] || T, l === n.length && (n += _, a.e += _)), T !== _ && (p = hi(t, e, u, _) || 0), a._pt = {
        _next: a._pt,
        p: y || c === 1 ? y : ",",
        s: p,
        c: v - p,
        m: m && m < 4 || e === "zIndex" ? Math.round : 0
      });
      a.c = l < n.length ? n.substring(l, n.length) : "";
    } else a.r = e === "display" && n === "none" ? xc : Oc;
    return $l.test(n) && (a.e = 0), this._pt = a, a;
  }, Ia = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  }, Wp = function(t) {
    var e = t.split(" "), i = e[0], n = e[1] || "50%";
    return (i === "top" || i === "bottom" || n === "left" || n === "right") && (t = i, i = n, n = t), e[0] = Ia[i] || i, e[1] = Ia[n] || n, e.join(" ");
  }, Hp = function(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i = e.t, n = i.style, r = e.u, o = i._gsap, a, l, c;
      if (r === "all" || r === true) n.cssText = "", l = 1;
      else for (r = r.split(","), c = r.length; --c > -1; ) a = r[c], He[a] && (l = 1, a = a === "transformOrigin" ? Yt : _t), Ri(i, a);
      l && (Ri(i, _t), o && (o.svg && i.removeAttribute("transform"), n.scale = n.rotate = n.translate = "none", Ks(i, 1), o.uncache = 1, Mc(n)));
    }
  }, Un = {
    clearProps: function(t, e, i, n, r) {
      if (r.data !== "isFromStart") {
        var o = t._pt = new Ht(t._pt, e, i, 0, 0, Hp);
        return o.u = n, o.pr = -10, o.tween = r, t._props.push(i), 1;
      }
    }
  }, Gs = [
    1,
    0,
    0,
    1,
    0,
    0
  ], Rc = {}, Ic = function(t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  }, Na = function(t) {
    var e = xe(t, _t);
    return Ic(e) ? Gs : e.substr(7).match(Ul).map(St);
  }, Uo = function(t, e) {
    var i = t._gsap || Ei(t), n = t.style, r = Na(t), o, a, l, c;
    return i.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, r = [
      l.a,
      l.b,
      l.c,
      l.d,
      l.e,
      l.f
    ], r.join(",") === "1,0,0,1,0,0" ? Gs : r) : (r === Gs && !t.offsetParent && t !== ts && !i.svg && (l = n.display, n.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (c = 1, a = t.nextElementSibling, ts.appendChild(t)), r = Na(t), l ? n.display = l : Ri(t, "display"), c && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : ts.removeChild(t))), e && r.length > 6 ? [
      r[0],
      r[1],
      r[4],
      r[5],
      r[12],
      r[13]
    ] : r);
  }, eo = function(t, e, i, n, r, o) {
    var a = t._gsap, l = r || Uo(t, true), c = a.xOrigin || 0, h = a.yOrigin || 0, d = a.xOffset || 0, f = a.yOffset || 0, p = l[0], m = l[1], u = l[2], g = l[3], v = l[4], y = l[5], _ = e.split(" "), T = parseFloat(_[0]) || 0, S = parseFloat(_[1]) || 0, w, b, A, L;
    i ? l !== Gs && (b = p * g - m * u) && (A = T * (g / b) + S * (-u / b) + (u * y - g * v) / b, L = T * (-m / b) + S * (p / b) - (p * y - m * v) / b, T = A, S = L) : (w = Dc(t), T = w.x + (~_[0].indexOf("%") ? T / 100 * w.width : T), S = w.y + (~(_[1] || _[0]).indexOf("%") ? S / 100 * w.height : S)), n || n !== false && a.smooth ? (v = T - c, y = S - h, a.xOffset = d + (v * p + y * u) - v, a.yOffset = f + (v * m + y * g) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = T, a.yOrigin = S, a.smooth = !!n, a.origin = e, a.originIsAbsolute = !!i, t.style[Yt] = "0px 0px", o && (ii(o, a, "xOrigin", c, T), ii(o, a, "yOrigin", h, S), ii(o, a, "xOffset", d, a.xOffset), ii(o, a, "yOffset", f, a.yOffset)), t.setAttribute("data-svg-origin", T + " " + S);
  }, Ks = function(t, e) {
    var i = t._gsap || new vc(t);
    if ("x" in i && !e && !i.uncache) return i;
    var n = t.style, r = i.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), c = xe(t, Yt) || "0", h, d, f, p, m, u, g, v, y, _, T, S, w, b, A, L, x, E, O, M, D, I, C, q, R, N, P, V, $, G, W, et;
    return h = d = f = u = g = v = y = _ = T = 0, p = m = 1, i.svg = !!(t.getCTM && kc(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[_t] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[_t] !== "none" ? l[_t] : "")), n.scale = n.rotate = n.translate = "none"), b = Uo(t, i.svg), i.svg && (i.uncache ? (R = t.getBBox(), c = i.xOrigin - R.x + "px " + (i.yOrigin - R.y) + "px", q = "") : q = !e && t.getAttribute("data-svg-origin"), eo(t, q || c, !!q || i.originIsAbsolute, i.smooth !== false, b)), S = i.xOrigin || 0, w = i.yOrigin || 0, b !== Gs && (E = b[0], O = b[1], M = b[2], D = b[3], h = I = b[4], d = C = b[5], b.length === 6 ? (p = Math.sqrt(E * E + O * O), m = Math.sqrt(D * D + M * M), u = E || O ? Bi(O, E) * vi : 0, y = M || D ? Bi(M, D) * vi + u : 0, y && (m *= Math.abs(Math.cos(y * es))), i.svg && (h -= S - (S * E + w * M), d -= w - (S * O + w * D))) : (et = b[6], G = b[7], P = b[8], V = b[9], $ = b[10], W = b[11], h = b[12], d = b[13], f = b[14], A = Bi(et, $), g = A * vi, A && (L = Math.cos(-A), x = Math.sin(-A), q = I * L + P * x, R = C * L + V * x, N = et * L + $ * x, P = I * -x + P * L, V = C * -x + V * L, $ = et * -x + $ * L, W = G * -x + W * L, I = q, C = R, et = N), A = Bi(-M, $), v = A * vi, A && (L = Math.cos(-A), x = Math.sin(-A), q = E * L - P * x, R = O * L - V * x, N = M * L - $ * x, W = D * x + W * L, E = q, O = R, M = N), A = Bi(O, E), u = A * vi, A && (L = Math.cos(A), x = Math.sin(A), q = E * L + O * x, R = I * L + C * x, O = O * L - E * x, C = C * L - I * x, E = q, I = R), g && Math.abs(g) + Math.abs(u) > 359.9 && (g = u = 0, v = 180 - v), p = St(Math.sqrt(E * E + O * O + M * M)), m = St(Math.sqrt(C * C + et * et)), A = Bi(I, C), y = Math.abs(A) > 2e-4 ? A * vi : 0, T = W ? 1 / (W < 0 ? -W : W) : 0), i.svg && (q = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Ic(xe(t, _t)), q && t.setAttribute("transform", q))), Math.abs(y) > 90 && Math.abs(y) < 270 && (r ? (p *= -1, y += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (m *= -1, y += y <= 0 ? 180 : -180)), e = e || i.uncache, i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + o, i.y = d - ((i.yPercent = d && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + o, i.z = f + o, i.scaleX = St(p), i.scaleY = St(m), i.rotation = St(u) + a, i.rotationX = St(g) + a, i.rotationY = St(v) + a, i.skewX = y + a, i.skewY = _ + a, i.transformPerspective = T + o, (i.zOrigin = parseFloat(c.split(" ")[2]) || !e && i.zOrigin || 0) && (n[Yt] = $n(c)), i.xOffset = i.yOffset = 0, i.force3D = Jt.force3D, i.renderTransform = i.svg ? jp : Pc ? Nc : Yp, i.uncache = 0, i;
  }, $n = function(t) {
    return (t = t.split(" "))[0] + " " + t[1];
  }, Or = function(t, e, i) {
    var n = Rt(e);
    return St(parseFloat(e) + parseFloat(hi(t, "x", i + "px", n))) + n;
  }, Yp = function(t, e) {
    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Nc(t, e);
  }, gi = "0deg", vs = "0px", _i = ") ", Nc = function(t, e) {
    var i = e || this, n = i.xPercent, r = i.yPercent, o = i.x, a = i.y, l = i.z, c = i.rotation, h = i.rotationY, d = i.rotationX, f = i.skewX, p = i.skewY, m = i.scaleX, u = i.scaleY, g = i.transformPerspective, v = i.force3D, y = i.target, _ = i.zOrigin, T = "", S = v === "auto" && t && t !== 1 || v === true;
    if (_ && (d !== gi || h !== gi)) {
      var w = parseFloat(h) * es, b = Math.sin(w), A = Math.cos(w), L;
      w = parseFloat(d) * es, L = Math.cos(w), o = Or(y, o, b * L * -_), a = Or(y, a, -Math.sin(w) * -_), l = Or(y, l, A * L * -_ + _);
    }
    g !== vs && (T += "perspective(" + g + _i), (n || r) && (T += "translate(" + n + "%, " + r + "%) "), (S || o !== vs || a !== vs || l !== vs) && (T += l !== vs || S ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + _i), c !== gi && (T += "rotate(" + c + _i), h !== gi && (T += "rotateY(" + h + _i), d !== gi && (T += "rotateX(" + d + _i), (f !== gi || p !== gi) && (T += "skew(" + f + ", " + p + _i), (m !== 1 || u !== 1) && (T += "scale(" + m + ", " + u + _i), y.style[_t] = T || "translate(0, 0)";
  }, jp = function(t, e) {
    var i = e || this, n = i.xPercent, r = i.yPercent, o = i.x, a = i.y, l = i.rotation, c = i.skewX, h = i.skewY, d = i.scaleX, f = i.scaleY, p = i.target, m = i.xOrigin, u = i.yOrigin, g = i.xOffset, v = i.yOffset, y = i.forceCSS, _ = parseFloat(o), T = parseFloat(a), S, w, b, A, L;
    l = parseFloat(l), c = parseFloat(c), h = parseFloat(h), h && (h = parseFloat(h), c += h, l += h), l || c ? (l *= es, c *= es, S = Math.cos(l) * d, w = Math.sin(l) * d, b = Math.sin(l - c) * -f, A = Math.cos(l - c) * f, c && (h *= es, L = Math.tan(c - h), L = Math.sqrt(1 + L * L), b *= L, A *= L, h && (L = Math.tan(h), L = Math.sqrt(1 + L * L), S *= L, w *= L)), S = St(S), w = St(w), b = St(b), A = St(A)) : (S = d, A = f, w = b = 0), (_ && !~(o + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (_ = hi(p, "x", o, "px"), T = hi(p, "y", a, "px")), (m || u || g || v) && (_ = St(_ + m - (m * S + u * b) + g), T = St(T + u - (m * w + u * A) + v)), (n || r) && (L = p.getBBox(), _ = St(_ + n / 100 * L.width), T = St(T + r / 100 * L.height)), L = "matrix(" + S + "," + w + "," + b + "," + A + "," + _ + "," + T + ")", p.setAttribute("transform", L), y && (p.style[_t] = L);
  }, Xp = function(t, e, i, n, r) {
    var o = 360, a = xt(r), l = parseFloat(r) * (a && ~r.indexOf("rad") ? vi : 1), c = l - n, h = n + c + "deg", d, f;
    return a && (d = r.split("_")[1], d === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -360)), d === "cw" && c < 0 ? c = (c + o * Ca) % o - ~~(c / o) * o : d === "ccw" && c > 0 && (c = (c - o * Ca) % o - ~~(c / o) * o)), t._pt = f = new Ht(t._pt, e, i, n, c, Pp), f.e = h, f.u = "deg", t._props.push(i), f;
  }, Fa = function(t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  }, Gp = function(t, e, i) {
    var n = Fa({}, i._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", o = i.style, a, l, c, h, d, f, p, m;
    n.svg ? (c = i.getAttribute("transform"), i.setAttribute("transform", ""), o[_t] = e, a = Ks(i, 1), Ri(i, _t), i.setAttribute("transform", c)) : (c = getComputedStyle(i)[_t], o[_t] = e, a = Ks(i, 1), o[_t] = c);
    for (l in He) c = n[l], h = a[l], c !== h && r.indexOf(l) < 0 && (p = Rt(c), m = Rt(h), d = p !== m ? hi(i, l, c, m) : parseFloat(c), f = parseFloat(h), t._pt = new Ht(t._pt, a, l, d, f - d, Zr), t._pt.u = m || 0, t._props.push(l));
    Fa(a, n);
  };
  Wt("padding,margin,Width,Radius", function(s, t) {
    var e = "Top", i = "Right", n = "Bottom", r = "Left", o = (t < 3 ? [
      e,
      i,
      n,
      r
    ] : [
      e + r,
      e + i,
      n + i,
      n + r
    ]).map(function(a) {
      return t < 2 ? s + a : "border" + a + s;
    });
    Un[t > 1 ? "border" + s : s] = function(a, l, c, h, d) {
      var f, p;
      if (arguments.length < 4) return f = o.map(function(m) {
        return qe(a, m, c);
      }), p = f.join(" "), p.split(f[0]).length === 5 ? f[0] : p;
      f = (h + "").split(" "), p = {}, o.forEach(function(m, u) {
        return p[m] = f[u] = f[u] || f[(u - 1) / 2 | 0];
      }), a.init(l, p, d);
    };
  });
  var Fc = {
    name: "css",
    register: to,
    targetTest: function(t) {
      return t.style && t.nodeType;
    },
    init: function(t, e, i, n, r) {
      var o = this._props, a = t.style, l = i.vars.startAt, c, h, d, f, p, m, u, g, v, y, _, T, S, w, b, A;
      Vo || to(), this.styles = this.styles || Cc(t), A = this.styles.props, this.tween = i;
      for (u in e) if (u !== "autoRound" && (h = e[u], !(Kt[u] && yc(u, e, i, n, t, r)))) {
        if (p = typeof h, m = Un[u], p === "function" && (h = h.call(i, n, t, r), p = typeof h), p === "string" && ~h.indexOf("random(") && (h = Ys(h)), m) m(this, t, u, h, i) && (b = 1);
        else if (u.substr(0, 2) === "--") c = (getComputedStyle(t).getPropertyValue(u) + "").trim(), h += "", ri.lastIndex = 0, ri.test(c) || (g = Rt(c), v = Rt(h)), v ? g !== v && (c = hi(t, u, c, v) + v) : g && (h += g), this.add(a, "setProperty", c, h, n, r, 0, 0, u), o.push(u), A.push(u, 0, a[u]);
        else if (p !== "undefined") {
          if (l && u in l ? (c = typeof l[u] == "function" ? l[u].call(i, n, t, r) : l[u], xt(c) && ~c.indexOf("random(") && (c = Ys(c)), Rt(c + "") || c === "auto" || (c += Jt.units[u] || Rt(qe(t, u)) || ""), (c + "").charAt(1) === "=" && (c = qe(t, u))) : c = qe(t, u), f = parseFloat(c), y = p === "string" && h.charAt(1) === "=" && h.substr(0, 2), y && (h = h.substr(2)), d = parseFloat(h), u in Le && (u === "autoAlpha" && (f === 1 && qe(t, "visibility") === "hidden" && d && (f = 0), A.push("visibility", 0, a.visibility), ii(this, a, "visibility", f ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), u !== "scale" && u !== "transform" && (u = Le[u], ~u.indexOf(",") && (u = u.split(",")[0]))), _ = u in He, _) {
            if (this.styles.save(u), T || (S = t._gsap, S.renderTransform && !e.parseTransform || Ks(t, e.parseTransform), w = e.smoothOrigin !== false && S.smooth, T = this._pt = new Ht(this._pt, a, _t, 0, 1, S.renderTransform, S, 0, -1), T.dep = 1), u === "scale") this._pt = new Ht(this._pt, S, "scaleY", S.scaleY, (y ? Ji(S.scaleY, y + d) : d) - S.scaleY || 0, Zr), this._pt.u = 0, o.push("scaleY", u), u += "X";
            else if (u === "transformOrigin") {
              A.push(Yt, 0, a[Yt]), h = Wp(h), S.svg ? eo(t, h, 0, w, 0, this) : (v = parseFloat(h.split(" ")[2]) || 0, v !== S.zOrigin && ii(this, S, "zOrigin", S.zOrigin, v), ii(this, a, u, $n(c), $n(h)));
              continue;
            } else if (u === "svgOrigin") {
              eo(t, h, 1, w, 0, this);
              continue;
            } else if (u in Rc) {
              Xp(this, S, u, f, y ? Ji(f, y + h) : h);
              continue;
            } else if (u === "smoothOrigin") {
              ii(this, S, "smooth", S.smooth, h);
              continue;
            } else if (u === "force3D") {
              S[u] = h;
              continue;
            } else if (u === "transform") {
              Gp(this, h, t);
              continue;
            }
          } else u in a || (u = cs(u) || u);
          if (_ || (d || d === 0) && (f || f === 0) && !Cp.test(h) && u in a) g = (c + "").substr((f + "").length), d || (d = 0), v = Rt(h) || (u in Jt.units ? Jt.units[u] : g), g !== v && (f = hi(t, u, c, v)), this._pt = new Ht(this._pt, _ ? S : a, u, f, (y ? Ji(f, y + d) : d) - f, !_ && (v === "px" || u === "zIndex") && e.autoRound !== false ? kp : Zr), this._pt.u = v || 0, g !== v && v !== "%" && (this._pt.b = c, this._pt.r = Dp);
          else if (u in a) $p.call(this, t, u, c, y ? y + h : h);
          else if (u in t) this.add(t, u, c || t[u], y ? y + h : h, n, r);
          else if (u !== "parseTransform") {
            Co(u, h);
            continue;
          }
          _ || (u in a ? A.push(u, 0, a[u]) : typeof t[u] == "function" ? A.push(u, 2, t[u]()) : A.push(u, 1, c || t[u])), o.push(u);
        }
      }
      b && Lc(this);
    },
    render: function(t, e) {
      if (e.tween._time || !Bo()) for (var i = e._pt; i; ) i.r(t, i.d), i = i._next;
      else e.styles.revert();
    },
    get: qe,
    aliases: Le,
    getSetter: function(t, e, i) {
      var n = Le[e];
      return n && n.indexOf(",") < 0 && (e = n), e in He && e !== Yt && (t._gsap.x || qe(t, "x")) ? i && Ma === i ? e === "scale" ? Fp : Np : (Ma = i || {}) && (e === "scale" ? qp : Vp) : t.style && !Oo(t.style[e]) ? Rp : ~e.indexOf("-") ? Ip : Fo(t, e);
    },
    core: {
      _removeProperty: Ri,
      _getMatrix: Uo
    }
  };
  Xt.utils.checkPrefix = cs;
  Xt.core.getStyleSaver = Cc;
  (function(s, t, e, i) {
    var n = Wt(s + "," + t + "," + e, function(r) {
      He[r] = 1;
    });
    Wt(t, function(r) {
      Jt.units[r] = "deg", Rc[r] = 1;
    }), Le[n[13]] = s + "," + t, Wt(i, function(r) {
      var o = r.split(":");
      Le[o[1]] = n[o[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  Wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
    Jt.units[s] = "px";
  });
  Xt.registerPlugin(Fc);
  var Wn = Xt.registerPlugin(Fc) || Xt;
  Wn.core.Tween;
  const qi = typeof window < "u", re = qi ? window : null, At = qi ? document : null, dt = {
    INVALID: 0,
    OBJECT: 1,
    ATTRIBUTE: 2,
    CSS: 3,
    TRANSFORM: 4,
    CSS_VAR: 5
  }, tt = {
    NUMBER: 0,
    UNIT: 1,
    COLOR: 2,
    COMPLEX: 3
  }, le = {
    NONE: 0,
    AUTO: 1,
    FORCE: 2
  }, Ct = {
    replace: 0,
    none: 1,
    blend: 2
  }, qa = Symbol(), $o = Symbol(), Wo = Symbol(), cr = Symbol(), Va = Symbol(), xr = Symbol(), qc = Symbol(), nt = 1e-11, Ts = 1e12, Lt = 1e3, io = 120, si = "", un = /* @__PURE__ */ new Map();
  un.set("x", "translateX");
  un.set("y", "translateY");
  un.set("z", "translateZ");
  const Vc = [
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "perspective",
    "matrix",
    "matrix3d"
  ], Bc = Vc.reduce((s, t) => ({
    ...s,
    [t]: t + "("
  }), {}), Et = () => {
  }, Kp = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i, Qp = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i, Zp = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i, Jp = /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i, tm = /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i, Ba = /[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi, zc = /^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i, em = /([a-z])([A-Z])/g, im = /(\w+)(\([^)]+\)+)/g, sm = /(\*=|\+=|-=)/, Uc = {
    id: null,
    keyframes: null,
    playbackEase: null,
    playbackRate: 1,
    frameRate: io,
    loop: 0,
    reversed: false,
    alternate: false,
    autoplay: true,
    duration: Lt,
    delay: 0,
    loopDelay: 0,
    ease: "outQuad",
    composition: Ct.replace,
    modifier: (s) => s,
    onBegin: Et,
    onUpdate: Et,
    onRender: Et,
    onLoop: Et,
    onComplete: Et
  }, Y = {
    defaults: Uc,
    root: At,
    scope: null,
    precision: 4,
    timeScale: 1,
    tickThreshold: 200
  }, nm = (s) => s.replace(em, "$1-$2").toLowerCase(), Ci = (s, t) => s.indexOf(t) === 0, Hn = Date.now, ye = Array.isArray, ge = (s) => s && s.constructor === Object, hr = (s) => typeof s == "number" && !isNaN(s), gs = (s) => typeof s == "string", ui = (s) => typeof s == "function", U = (s) => typeof s > "u", Ms = (s) => U(s) || s === null, Ho = (s) => qi && s instanceof SVGElement, $c = (s) => Kp.test(s), Wc = (s) => Ci(s, "rgb"), Hc = (s) => Ci(s, "hsl"), rm = (s) => $c(s) || Wc(s) || Hc(s), Cs = (s) => !Y.defaults.hasOwnProperty(s), Si = (s) => gs(s) ? parseFloat(s) : s, Hi = Math.pow, Ps = Math.sqrt, Yc = Math.sin, jc = Math.cos, hs = Math.abs, za = Math.exp, om = Math.ceil, Yn = Math.floor, am = Math.asin, lm = Math.max, cm = Math.atan2, _s = Math.PI, Xc = Math.round, B = (s, t, e) => s < t ? t : s > e ? e : s, z = (s, t) => {
    if (t < 0) return s;
    const e = 10 ** t;
    return Xc(s * e) / e;
  }, Ie = (s, t) => ye(t) ? t.reduce((e, i) => hs(i - s) < hs(e - s) ? i : e) : t ? Xc(s / t) * t : s, Ge = (s, t, e) => s + (t - s) * e, Ds = (s) => s === 1 / 0 ? Ts : s === -1 / 0 ? -1e12 : s, Pi = (s) => s < nt ? nt : s, qt = (s) => ye(s) ? [
    ...s
  ] : s, Qs = (s, t) => {
    const e = {
      ...s
    };
    for (let i in t) {
      const n = s[i];
      e[i] = U(n) ? t[i] : n;
    }
    return e;
  }, pt = (s, t, e, i = "_prev", n = "_next") => {
    let r = s._head, o = n;
    for (e && (r = s._tail, o = i); r; ) {
      const a = r[o];
      t(r), r = a;
    }
  }, Zs = (s, t, e = "_prev", i = "_next") => {
    const n = t[e], r = t[i];
    n ? n[i] = r : s._head = r, r ? r[e] = n : s._tail = n, t[e] = null, t[i] = null;
  }, bi = (s, t, e, i = "_prev", n = "_next") => {
    let r = s._tail;
    for (; r && e && e(r, t); ) r = r[i];
    const o = r ? r[n] : s._head;
    r ? r[n] = t : s._head = t, o ? o[i] = t : s._tail = t, t[i] = r, t[n] = o;
  };
  class Gc {
    constructor() {
      this.currentTime = 0, this.deltaTime = 0, this._elapsedTime = 0, this._startTime = 0, this._lastTime = 0, this._scheduledTime = 0, this._frameDuration = Lt / io, this._fps = io, this._speed = 1, this._hasChildren = false;
    }
    get frameRate() {
      return this._fps;
    }
    set frameRate(t) {
      const e = this._frameDuration, i = +t, n = i < nt ? nt : i, r = Lt / n;
      this._fps = n, this._frameDuration = r, this._scheduledTime += r - e;
    }
    get playbackRate() {
      return this._speed;
    }
    set playbackRate(t) {
      const e = +t;
      this._speed = e < nt ? nt : e;
    }
    requestTick(t) {
      const e = this._scheduledTime, i = this._elapsedTime;
      if (this._elapsedTime += t - i, i < e) return le.NONE;
      const n = this._frameDuration, r = i - e;
      return this._scheduledTime += r < n ? n : r, le.AUTO;
    }
    computeDeltaTime(t) {
      const e = t - this._lastTime;
      return this.deltaTime = e, this._lastTime = t, e;
    }
  }
  const Ua = (s, t, e, i, n) => {
    const r = s.duration, o = s.currentTime, a = s._currentIteration, l = s._iterationDuration, c = s._iterationCount, h = s._loopDelay, d = s.reversed, f = s._alternate, p = s._hasChildren, m = s._delay, u = m + l, g = B(t - m, -m, r), v = g - o, y = g >= r, _ = n === le.FORCE, T = n === le.AUTO, S = _ || (v < 0 ? v * -1 : v) >= Y.tickThreshold;
    let w = s.began, b = 0, A = g;
    if (c > 1) {
      const C = ~~(g / (l + (y ? 0 : h)));
      s._currentIteration = B(C, 0, c), y && s._currentIteration--, b = s._currentIteration % 2, A = g % (l + h);
    }
    const L = d ^ (f && b), x = s._ease;
    let E = y ? L ? 0 : r : L ? l - A : A;
    x && (E = l * x(E / l) || 0);
    const O = E < s._iterationTime, M = S ? O ? 2 : 1 : 0, D = Y.precision;
    s._iterationTime = E, s._backwards = O && !L, !e && !w && g > 0 && (w = s.began = true, s.onBegin(s)), s.currentTime = g;
    let I = 0;
    if (w && s._currentIteration !== a && (e || s.onLoop(s), p && pt(s, (C) => C.reset(), true)), (_ || T && (t >= m && t <= u || t <= m && o > 0 || t >= u && o !== r) || E >= u && o !== r || E <= m && o > 0 || t <= o && o === r && s.completed) && (w && (s.computeDeltaTime(o), e || s.onUpdate(s)), !p)) {
      let C = s._head, q, R, N, P, V = 0;
      const $ = s.parent, G = s._offset + ($ ? $._offset : 0) + m + E;
      for (; C; ) {
        const W = C._composition, et = C._currentTime, k = C._changeDuration, K = C._absoluteStartTime + C._changeDuration, st = C._nextRep, it = C._prevRep, rt = W !== Ct.none;
        if ((M || (et !== k || G <= K + (st ? st._delay : 0)) && (et !== 0 || G >= C._absoluteStartTime)) && (!rt || !C._isOverridden && (!C._isOverlapped || G <= K) && (!st || st._isOverridden || G <= st._absoluteStartTime) && (!it || it._isOverridden || G >= it._absoluteStartTime + it._changeDuration + C._delay))) {
          const Mt = C._currentTime = B(E - C._startTime, 0, k), at = C._ease(Mt / C._updateDuration), F = C._modifier, j = C._valueType, ot = C._tweenType, Ft = ot === dt.OBJECT, ie = j === tt.NUMBER, ke = ie && Ft || at === 0 || at === 1 ? -1 : D;
          let Dt, Re;
          if (ie) Dt = Re = F(z(Ge(C._fromNumber, C._toNumber, at), ke));
          else if (j === tt.UNIT) Re = F(z(Ge(C._fromNumber, C._toNumber, at), ke)), Dt = `${Re}${C._unit}`;
          else if (j === tt.COLOR) {
            const ut = C._fromNumbers, Gt = C._toNumbers, zt = z(B(F(Ge(ut[0], Gt[0], at)), 0, 255), 0), de = z(B(F(Ge(ut[1], Gt[1], at)), 0, 255), 0), Vi = z(B(F(Ge(ut[2], Gt[2], at)), 0, 255), 0), mn = B(F(z(Ge(ut[3], Gt[3], at), ke)), 0, 1);
            if (Dt = `rgba(${zt},${de},${Vi},${mn})`, rt) {
              const Ye = C._numbers;
              Ye[0] = zt, Ye[1] = de, Ye[2] = Vi, Ye[3] = mn;
            }
          } else if (j === tt.COMPLEX) {
            Dt = C._strings[0];
            for (let ut = 0, Gt = C._toNumbers.length; ut < Gt; ut++) {
              const zt = F(z(Ge(C._fromNumbers[ut], C._toNumbers[ut], at), ke)), de = C._strings[ut + 1];
              Dt += `${de ? zt + de : zt}`, rt && (C._numbers[ut] = zt);
            }
          }
          if (rt && (C._number = Re), !i && W !== Ct.blend) {
            const ut = C.property;
            q = C.target, Ft ? q[ut] = Dt : ot === dt.ATTRIBUTE ? q.setAttribute(ut, Dt) : (R = q.style, ot === dt.TRANSFORM ? (q !== N && (N = q, P = q[cr]), P[ut] = Dt, V = 1) : ot === dt.CSS ? R[ut] = Dt : ot === dt.CSS_VAR && R.setProperty(ut, Dt)), w && (I = 1);
          } else C._value = Dt;
        }
        if (V && C._renderTransforms) {
          let Mt = si;
          for (let at in P) Mt += `${Bc[at]}${P[at]}) `;
          R.transform = Mt, V = 0;
        }
        C = C._next;
      }
      I && !e && s.onRender(s);
    }
    return w && y && (c === 1 / 0 ? s._startTime += s.duration : s._currentIteration >= c - 1 && (s.paused = true, s.completed || (s.completed = true, e || (s.onComplete(s), s._resolve(s))))), I;
  }, Qe = (s, t, e, i, n) => {
    if (Ua(s, t, e, i, n), s._hasChildren) {
      let r = 0;
      const o = i ? t : s._iterationTime, a = Hn();
      pt(s, (l) => {
        r += Ua(l, (o - l._offset) * l._speed, e, i, l._fps < s._fps ? l.requestTick(a) : n);
      }, s._backwards), s.began && r && s.onRender(s);
    }
  }, ks = {
    animation: null,
    update: Et
  }, hm = (s) => {
    let t = ks.animation;
    return t || (t = {
      duration: nt,
      _offset: 0,
      _delay: 0,
      _head: null,
      _tail: null
    }, ks.animation = t, ks.update = () => {
      s.forEach((e) => {
        for (let i in e) {
          const n = e[i], r = n._head, o = r._valueType === tt.COMPLEX ? qt(r._fromNumbers) : null;
          let a = r._fromNumber, l = n._tail;
          for (; l && l !== r; ) o ? l._numbers.forEach((c, h) => o[h] += c) : a += l._number, l = l._prevAdd;
          r._toNumber = a, r._toNumbers = o;
        }
      }), Qe(t, 1, 1, 0, le.FORCE);
    }), t;
  }, Kc = qi ? requestAnimationFrame : setImmediate, um = qi ? cancelAnimationFrame : clearImmediate;
  class dm extends Gc {
    constructor() {
      super();
      const t = Hn();
      this.currentTime = t, this._elapsedTime = t, this._startTime = t, this._lastTime = t, this.useDefaultMainLoop = true, this.suspendWhenHidden = true, this.defaults = Uc, this._reqId = 0, this._stopped = false, this._suspended = false, this._head = null, this._tail = null;
    }
    update() {
      const t = this.currentTime = Hn();
      if (this.requestTick(t)) {
        this.computeDeltaTime(t);
        const e = this._speed, i = this._fps;
        let n = this._head;
        for (; n; ) {
          const r = n._next;
          n.paused ? (Zs(gt, n), this._hasChildren = !!this._tail, n._running = false, n.completed && !n._cancelled && n.cancel()) : Qe(n, (t - n._startTime) * n._speed * e, 0, 0, n._fps < i ? n.requestTick(t) : le.AUTO), n = r;
        }
        ks.update();
      }
    }
    stop() {
      return this._stopped = true, $a();
    }
    start() {
      return (this._suspended || this._stopped) && (pt(this, (t) => t.resetTime()), this._suspended = false, this._stopped = false), this.useDefaultMainLoop && !this._reqId && (this._reqId = Kc(Qc)), this;
    }
    suspend() {
      return this._suspended = true, $a();
    }
    resume() {
      return this._stopped ? this : this.start();
    }
    get playbackRate() {
      return super.playbackRate * (Y.timeScale === 1 ? 1 : Lt);
    }
    set playbackRate(t) {
      super.playbackRate = t * Y.timeScale, pt(this, (e) => e.playbackRate = e._speed);
    }
    get timeUnit() {
      return Y.timeScale === 1 ? "ms" : "s";
    }
    set timeUnit(t) {
      const i = t === "s", n = i ? 1e-3 : 1;
      if (Y.timeScale !== n) {
        Y.timeScale = n, Y.tickThreshold = 200 * n;
        const r = i ? 1e-3 : Lt;
        this.defaults.duration *= r, this._speed *= r;
      }
    }
    get precision() {
      return Y.precision;
    }
    set precision(t) {
      Y.precision = t;
    }
  }
  const gt = new dm(), Qc = () => {
    gt._head ? (gt._reqId = Kc(Qc), gt.update()) : gt._reqId = 0;
  }, $a = () => (um(gt._reqId), gt._reqId = 0, gt);
  function Wa(s) {
    const t = gs(s) ? Y.root.querySelectorAll(s) : s;
    if (t instanceof NodeList || t instanceof HTMLCollection) return t;
  }
  function Ue(s) {
    if (Ms(s)) return [];
    if (ye(s)) {
      const e = s.flat(1 / 0), i = [];
      for (let n = 0, r = e.length; n < r; n++) {
        const o = e[n];
        if (!Ms(o)) {
          const a = Wa(o);
          if (a) for (let l = 0, c = a.length; l < c; l++) {
            const h = a[l];
            if (!Ms(h)) {
              let d = false;
              for (let f = 0, p = i.length; f < p; f++) if (i[f] === h) {
                d = true;
                break;
              }
              d || i.push(h);
            }
          }
          else {
            let l = false;
            for (let c = 0, h = i.length; c < h; c++) if (i[c] === o) {
              l = true;
              break;
            }
            l || i.push(o);
          }
        }
      }
      return i;
    }
    if (!qi) return [
      s
    ];
    const t = Wa(s);
    return t ? Array.from(t) : [
      s
    ];
  }
  function Yo(s) {
    const t = Ue(s), e = t.length;
    if (e) for (let i = 0; i < e; i++) {
      const n = t[i];
      if (!n[qa]) {
        n[qa] = true;
        const r = Ho(n);
        (n.nodeType || r) && (n[$o] = true, n[Wo] = r, n[cr] = {});
      }
    }
    return t;
  }
  const us = (s) => s, Zc = (s, t, e) => (((1 - 3 * e + 3 * t) * s + (3 * e - 6 * t)) * s + 3 * t) * s, fm = (s, t, e) => {
    let i = 0, n = 1, r, o, a = 0;
    do
      o = i + (n - i) / 2, r = Zc(o, t, e) - s, r > 0 ? n = o : i = o;
    while (hs(r) > 1e-7 && ++a < 100);
    return o;
  }, pm = (s = 0.5, t = 0, e = 0.5, i = 1) => s === t && e === i ? us : (n) => n === 0 || n === 1 ? n : Zc(fm(n, s, e), t, i), mm = (s = 10, t) => {
    const e = t ? om : Yn;
    return (i) => e(B(i, 0, 1) * s) * (1 / s);
  }, gm = _s / 2, Ha = _s * 2, ys = (s = 1.64) => (t) => Hi(t, +s), Ya = {
    [si]: ys,
    Quad: ys(2),
    Cubic: ys(3),
    Quart: ys(4),
    Quint: ys(5),
    Sine: (s) => 1 - jc(s * gm),
    Circ: (s) => 1 - Ps(1 - s * s),
    Expo: (s) => s ? Hi(2, 10 * s - 10) : 0,
    Bounce: (s) => {
      let t, e = 4;
      for (; s < ((t = Hi(2, --e)) - 1) / 11; ) ;
      return 1 / Hi(4, 3 - e) - 7.5625 * Hi((t * 3 - 2) / 22 - s, 2);
    },
    Back: (s = 1.70158) => (t) => (+s + 1) * t * t * t - +s * t * t,
    Elastic: (s = 1, t = 0.3) => {
      const e = B(+s, 1, 10), i = B(+t, nt, 2), n = i / Ha * am(1 / e), r = Ha / i;
      return (o) => o === 0 || o === 1 ? o : -e * Hi(2, -10 * (1 - o)) * Yc((1 - o - n) * r);
    }
  }, ja = {
    in: (s) => (t) => s(t),
    out: (s) => (t) => 1 - s(1 - t),
    inOut: (s) => (t) => t < 0.5 ? s(t * 2) / 2 : 1 - s(t * -2 + 2) / 2,
    outIn: (s) => (t) => t < 0.5 ? (1 - s(1 - t * 2)) / 2 : (s(t * 2 - 1) + 1) / 2
  }, Jc = (...s) => {
    const t = s.length;
    if (!t) return us;
    const e = t - 1, i = s[0], n = s[e], r = [
      0
    ], o = [
      Si(i)
    ];
    for (let a = 1; a < e; a++) {
      const l = s[a], c = gs(l) ? l.trim().split(" ") : [
        l
      ], h = c[0], d = c[1];
      r.push(U(d) ? a / e : Si(d) / 100), o.push(Si(h));
    }
    return o.push(Si(n)), r.push(1), function(l) {
      for (let c = 1, h = r.length; c < h; c++) {
        const d = r[c];
        if (l <= d) {
          const f = r[c - 1], p = o[c - 1];
          return p + (o[c] - p) * (l - f) / (d - f);
        }
      }
      return o[o.length - 1];
    };
  }, _m = (s = 10, t = 1) => {
    const e = [
      0
    ], i = s - 1;
    for (let n = 1; n < i; n++) {
      const r = e[n - 1], o = n / i, a = (n + 1) / i, l = o + (a - o) * Math.random(), c = o * (1 - t) + l * t;
      e.push(B(c, r, 1));
    }
    return e.push(1), Jc(...e);
  }, Ze = {
    linear: Jc,
    irregular: _m,
    steps: mm,
    cubicBezier: pm
  }, jn = {
    linear: us
  };
  for (let s in ja) for (let t in Ya) {
    const e = Ya[t], i = ja[s], n = t === si || t === "Back" || t === "Elastic", r = n ? (a, l) => i(e(a, l)) : i(e), o = s + t;
    Ze[o] = r, jn[o] = n ? r() : r;
  }
  const vm = (s) => {
    if (s.indexOf("(") <= -1) return us;
    const t = s.slice(0, -1).split("("), e = Ze[t[0]];
    return e ? jn[s] = e(...t[1].split(",")) : us;
  }, ds = (s) => ui(s) ? s : gs(s) ? jn[s] ? jn[s] : vm(s) : us, ym = (s, t, e) => {
    const i = s.style.transform;
    let n;
    if (i) {
      const r = s[cr];
      let o;
      for (; o = im.exec(i); ) {
        const a = o[1], l = o[2].slice(1, -1);
        r[a] = l, a === t && (n = l, e && (e[t] = l));
      }
    }
    return i && !U(n) ? n : Ci(t, "scale") ? "1" : Ci(t, "rotate") || Ci(t, "skew") ? "0deg" : "0px";
  }, th = (s) => {
    const e = Ue(s)[0];
    if (!(!e || !Ho(e))) return e;
  }, Sm = (s, t = 0.33) => (e) => {
    const i = th(s);
    if (!i) return;
    const n = e.tagName === "path", r = n ? " " : ",", o = e[Va];
    o && e.setAttribute(n ? "d" : "points", o);
    let a = "", l = "";
    if (!t) a = e.getAttribute(n ? "d" : "points"), l = i.getAttribute(n ? "d" : "points");
    else {
      const c = e.getTotalLength(), h = i.getTotalLength(), d = Math.max(Math.ceil(c * t), Math.ceil(h * t));
      for (let f = 0; f < d; f++) {
        const p = f / (d - 1), m = e.getPointAtLength(c * p), u = i.getPointAtLength(h * p), g = n ? f === 0 ? "M" : "L" : "";
        a += g + z(m.x, 3) + r + m.y + " ", l += g + z(u.x, 3) + r + u.y + " ";
      }
    }
    return e[Va] = l, [
      a,
      l
    ];
  };
  function bm(s, t, e) {
    const i = getComputedStyle(s).strokeLinecap, n = 1e5;
    let r = i;
    const o = new Proxy(s, {
      get(a, l) {
        const c = a[l];
        return l === qc ? a : l === "setAttribute" ? (...h) => {
          if (h[0] === "draw") {
            const d = h[1], f = Y.precision, p = d.split(" "), m = z(+p[0], f), u = z(+p[1], f), g = z(m * -1e5, 0), v = z(u * n + g, 0), y = z(n - v, 0);
            if (i !== "butt") {
              const _ = m === u ? "butt" : i;
              r !== _ && (a.setAttribute("stroke-linecap", `${_}`), r = _);
            }
            a.setAttribute("stroke-dashoffset", `${g}`), a.setAttribute("stroke-dasharray", `${v} ${y}`);
          }
          return Reflect.apply(c, a, h);
        } : ui(c) ? (...h) => Reflect.apply(c, a, h) : c;
      }
    });
    return s.getAttribute("pathLength") !== `${n}` && (s.setAttribute("pathLength", `${n}`), o.setAttribute("draw", `${t} ${e}`)), o;
  }
  const Tm = (s, t = 0, e = 0) => {
    const i = Ue(s);
    return i.forEach((n, r) => i[r] = bm(n, t, e)), i;
  }, Mr = (s, t, e = 0) => s.getPointAtLength(t + e >= 1 ? t + e : 0), Cr = (s, t) => (e) => {
    const i = +s.getTotalLength(), n = e[Wo], r = s.getCTM();
    return {
      from: 0,
      to: i,
      modifier: (o) => {
        if (t === "a") {
          const a = Mr(s, o, -1), l = Mr(s, o, 1);
          return cm(l.y - a.y, l.x - a.x) * 180 / _s;
        } else {
          const a = Mr(s, o, 0);
          return t === "x" ? n ? a.x : a.x * r.a + a.y * r.c + r.e : n ? a.y : a.x * r.b + a.y * r.d + r.f;
        }
      }
    };
  }, wm = (s) => {
    const t = th(s);
    if (t) return {
      x: Cr(t, "x"),
      y: Cr(t, "y"),
      angle: Cr(t, "a")
    };
  }, Am = [
    "opacity",
    "rotate",
    "overflow",
    "color"
  ], Lm = (s, t) => {
    if (Am.includes(t)) return false;
    if (t in s.style || t in s) {
      if (t === "scale") {
        const e = s.parentNode;
        return e && e.tagName === "filter";
      }
      return true;
    }
  }, Em = {
    morphTo: Sm,
    createMotionPath: wm,
    createDrawable: Tm
  }, Om = (s) => {
    const t = Qp.exec(s) || Zp.exec(s), e = U(t[4]) ? 1 : +t[4];
    return [
      +t[1],
      +t[2],
      +t[3],
      e
    ];
  }, xm = (s) => {
    const t = s.length, e = t === 4 || t === 5;
    return [
      +("0x" + s[1] + s[e ? 1 : 2]),
      +("0x" + s[e ? 2 : 3] + s[e ? 2 : 4]),
      +("0x" + s[e ? 3 : 5] + s[e ? 3 : 6]),
      t === 5 || t === 9 ? +(+("0x" + s[e ? 4 : 7] + s[e ? 4 : 8]) / 255).toFixed(3) : 1
    ];
  }, Pr = (s, t, e) => (e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? s + (t - s) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? s + (t - s) * (2 / 3 - e) * 6 : s), Mm = (s) => {
    const t = Jp.exec(s) || tm.exec(s), e = +t[1] / 360, i = +t[2] / 100, n = +t[3] / 100, r = U(t[4]) ? 1 : +t[4];
    let o, a, l;
    if (i === 0) o = a = l = n;
    else {
      const c = n < 0.5 ? n * (1 + i) : n + i - n * i, h = 2 * n - c;
      o = z(Pr(h, c, e + 1 / 3) * 255, 0), a = z(Pr(h, c, e) * 255, 0), l = z(Pr(h, c, e - 1 / 3) * 255, 0);
    }
    return [
      o,
      a,
      l,
      r
    ];
  }, Cm = (s) => Wc(s) ? Om(s) : $c(s) ? xm(s) : Hc(s) ? Mm(s) : [
    0,
    0,
    0,
    1
  ], Z = (s, t) => U(s) ? t : s, je = (s, t, e, i, n) => {
    if (ui(s)) {
      const r = () => {
        const o = s(t, e, i);
        return isNaN(+o) ? o || 0 : +o;
      };
      return n && (n.func = r), r();
    } else return s;
  }, jo = (s, t) => {
    const e = s[$o] ? s[Wo] && Lm(s, t) ? dt.ATTRIBUTE : Vc.includes(t) || un.get(t) ? dt.TRANSFORM : Ci(t, "--") ? dt.CSS_VAR : t in s.style ? dt.CSS : Ms(s.getAttribute(t)) ? U(s[t]) ? dt.INVALID : dt.OBJECT : dt.ATTRIBUTE : dt.OBJECT;
    return e === dt.INVALID && console.warn(`Can't find property '${t}' on target '${s}'.`), e;
  }, Xa = (s, t, e) => {
    const i = s.style[t];
    i && e && (e[t] = i);
    const n = i || getComputedStyle(s[qc] || s).getPropertyValue(t);
    return n === "auto" ? "0" : n;
  }, Yi = (s, t, e, i) => {
    const n = U(e) ? jo(s, t) : e;
    return n === dt.OBJECT ? s[t] || 0 : n === dt.ATTRIBUTE ? s.getAttribute(t) : n === dt.TRANSFORM ? ym(s, t, i) : n === dt.CSS_VAR ? Xa(s, t, i).trimStart() : Xa(s, t, i);
  }, so = (s, t, e) => e === "-" ? s - t : e === "+" ? s + t : s * t, Xo = () => ({
    t: tt.NUMBER,
    n: 0,
    u: null,
    o: null,
    d: null,
    s: null
  }), pe = (s, t) => {
    if (t.t = tt.NUMBER, t.n = 0, t.u = null, t.o = null, t.d = null, t.s = null, !s) return t;
    const e = +s;
    if (isNaN(e)) {
      let i = s;
      i[1] === "=" && (t.o = i[0], i = i.slice(2));
      const n = i.includes(" ") ? false : zc.exec(i);
      if (n) return t.t = tt.UNIT, t.n = +n[1], t.u = n[2], t;
      if (t.o) return t.n = +i, t;
      if (rm(i)) return t.t = tt.COLOR, t.d = Cm(i), t;
      {
        const r = i.match(Ba);
        return t.t = tt.COMPLEX, t.d = r ? r.map(Number) : [], t.s = i.split(Ba) || [], t;
      }
    } else return t.n = e, t;
  }, Ga = (s, t) => (t.t = s._valueType, t.n = s._toNumber, t.u = s._unit, t.o = null, t.d = qt(s._toNumbers), t.s = qt(s._strings), t), oe = Xo(), Ka = {}, eh = (s, t, e) => {
    if (e === dt.TRANSFORM) {
      const i = un.get(s);
      return i || s;
    } else if (e === dt.CSS || e === dt.ATTRIBUTE && Ho(t) && s in t.style) {
      const i = Ka[s];
      if (i) return i;
      {
        const n = nm(s);
        return Ka[s] = n, n;
      }
    } else return s;
  }, Dr = {
    deg: 1,
    rad: 180 / _s,
    turn: 360
  }, Qa = {}, ih = (s, t, e, i = false) => {
    const n = t.u, r = t.n;
    if (t.t === tt.UNIT && n === e) return t;
    const o = r + n + e, a = Qa[o];
    if (!U(a) && !i) t.n = a;
    else {
      let l;
      if (n in Dr) l = r * Dr[n] / Dr[e];
      else {
        const h = s.cloneNode(), d = s.parentNode, f = d && d !== At ? d : At.body;
        f.appendChild(h);
        const p = h.style;
        p.width = 100 + n;
        const m = h.offsetWidth || 100;
        p.width = 100 + e;
        const u = h.offsetWidth || 100, g = m / u;
        f.removeChild(h), l = g * r;
      }
      t.n = l, Qa[o] = l;
    }
    return t.t, tt.UNIT, t.u = e, t;
  }, sh = {
    _rep: /* @__PURE__ */ new WeakMap(),
    _add: /* @__PURE__ */ new Map()
  }, Js = (s, t, e = "_rep") => {
    const i = sh[e];
    let n = i.get(s);
    return n || (n = {}, i.set(s, n)), n[t] ? n[t] : n[t] = {
      _head: null,
      _tail: null
    };
  }, Pm = (s, t) => s._isOverridden || s._absoluteStartTime > t._absoluteStartTime, Pn = (s) => {
    s._isOverlapped = 1, s._isOverridden = 1, s._changeDuration = nt, s._currentTime = nt;
  }, nh = (s, t) => {
    const e = s._composition;
    if (e === Ct.replace) {
      const i = s._absoluteStartTime;
      bi(t, s, Pm, "_prevRep", "_nextRep");
      const n = s._prevRep;
      if (n) {
        const r = n.parent, o = n._absoluteStartTime + n._changeDuration;
        if (s.parent.id !== r.id && r._iterationCount > 1 && o + (r.duration - r._iterationDuration) > i) {
          Pn(n);
          let c = n._prevRep;
          for (; c && c.parent.id === r.id; ) Pn(c), c = c._prevRep;
        }
        const a = i - s._delay;
        if (o > a) {
          const c = n._startTime, h = o - (c + n._updateDuration);
          n._changeDuration = a - h - c, n._currentTime = n._changeDuration, n._isOverlapped = 1, n._changeDuration < nt && Pn(n);
        }
        let l = 0;
        pt(r, (c) => {
          l -= c._isOverridden - 1;
        }), l === 0 && (r.completed = true, r.pause());
      }
    } else if (e === Ct.blend) {
      const i = Js(s.target, s.property, "_add"), n = hm(sh._add);
      let r = i._head;
      r || (r = {
        ...s
      }, r._composition = Ct.replace, r._updateDuration = nt, r._startTime = 0, r._numbers = qt(s._fromNumbers), r._number = 0, r._next = null, r._prev = null, bi(i, r), bi(n, r));
      const o = s._toNumber;
      if (s._fromNumber = r._fromNumber - o, s._toNumber = 0, s._numbers = qt(s._fromNumbers), s._number = 0, r._fromNumber = o, s._toNumbers) {
        const a = qt(s._toNumbers);
        a && a.forEach((l, c) => {
          s._fromNumbers[c] = r._fromNumbers[c] - l, s._toNumbers[c] = 0;
        }), r._fromNumbers = a;
      }
      bi(i, s, null, "_prevAdd", "_nextAdd");
    }
    return s;
  }, Dm = (s) => {
    const t = s._composition;
    if (t !== Ct.none) {
      const e = s.target, i = s.property, n = Js(e, i);
      if (Zs(n, s, "_prevRep", "_nextRep"), t === Ct.blend) {
        const r = Js(e, i, "_add");
        Zs(r, s, "_prevAdd", "_nextAdd");
      }
    }
    return s;
  }, Za = (s) => (s.paused = true, s.began = false, s.completed = false, s), no = (s) => (s._cancelled && (s._hasChildren ? pt(s, no) : pt(s, (t) => {
    t._composition !== Ct.none && nh(t, Js(t.target, t.property));
  }), s._cancelled = 0), s);
  let km = 0;
  class dn extends Gc {
    constructor(t = {}, e = null, i = 0) {
      super();
      const { id: n, delay: r, duration: o, reversed: a, alternate: l, loop: c, loopDelay: h, autoplay: d, frameRate: f, playbackRate: p, onComplete: m, onLoop: u, onBegin: g, onUpdate: v } = t;
      Y.scope && Y.scope.revertibles.push(this);
      const y = e ? 0 : gt._elapsedTime, _ = e ? e.defaults : Y.defaults, T = ui(r) || U(r) ? _.delay : +r, S = ui(o) || U(o) ? 1 / 0 : +o, w = Z(c, _.loop), b = Z(h, _.loopDelay), A = w === true || w === 1 / 0 || w < 0 ? 1 / 0 : w + 1;
      this.id = U(n) ? o === nt ? 0 : ++km : n, this.parent = e, this.duration = Ds((S + b) * A - b) || nt, this.paused = true, this.began = false, this.completed = false, this.reversed = +Z(a, _.reversed), this.onBegin = g || _.onBegin, this.onUpdate = v || _.onUpdate, this.onLoop = u || _.onLoop, this.onComplete = m || _.onComplete, this._autoplay = e ? false : Z(d, _.autoplay), this._offset = e ? i : gt._elapsedTime - gt._startTime, this._delay = T, this._loopDelay = b, this._iterationTime = 0, this._iterationDuration = S, this._iterationCount = A, this._currentIteration = 0, this._resolve = Et, this._hasChildren = false, this._running = false, this._cancelled = 0, this._reversed = this.reversed, this._alternate = Z(l, _.alternate), this._backwards = false, this._prev = null, this._next = null, this._elapsedTime = y, this._startTime = y, this._lastTime = y, this._fps = Z(f, _.frameRate), this._speed = Z(p, _.playbackRate);
    }
    get progress() {
      return z(this.currentTime / this.duration, 6);
    }
    set progress(t) {
      const e = this.paused;
      this.pause().seek(this.duration * +t), e || this.play();
    }
    get playbackRate() {
      return super.playbackRate;
    }
    set playbackRate(t) {
      super.playbackRate = t, this.resetTime();
    }
    reset(t = 0) {
      return no(this), !this._reversed != !this.reversed && this.reverse(), this._iterationTime = this._iterationDuration, Qe(this, 0, 1, t, le.FORCE), Za(this), this._hasChildren && pt(this, Za), this;
    }
    init(t = 0) {
      this.frameRate = this._fps, this.playbackRate = this._speed, !t && this._hasChildren && Qe(this, this.duration, 1, t, le.FORCE);
      const e = this._autoplay;
      return this.reset(t), e === true ? this.play() : !t && e && !U(e.linked) && e.link(this), this;
    }
    resetTime() {
      const t = 1 / (this._speed * gt._speed);
      return this._startTime = Hn() - (this.currentTime + this._delay) * t - 12, this;
    }
    pause() {
      return this.paused ? this : (this.paused = true, this);
    }
    play() {
      return this.paused ? (this.paused = false, this.duration <= nt ? Qe(this, nt, 0, 0, le.FORCE) : (this._running || (bi(gt, this), gt._hasChildren = true, this._running = true), this.resetTime(), gt.resume()), this) : this;
    }
    restart() {
      return this.reset(0).play();
    }
    seek(t, e = 0, i = 0) {
      no(this), this.completed = false;
      const n = this.paused;
      return this.paused = true, Qe(this, t + this._delay, ~~e, ~~i, le.AUTO), n ? this : this.play();
    }
    reverse() {
      const t = this.reversed;
      return this.reversed = +(this._alternate && !(this._iterationCount % 2) ? t : !t), this.seek(this.duration - this.currentTime), this.resetTime(), this;
    }
    playForward() {
      return this.reversed ? this.reverse().play() : this.play();
    }
    playBackward() {
      return this.reversed ? this.play() : this.reverse().play();
    }
    cancel() {
      return this._hasChildren ? pt(this, (t) => t.cancel(), true) : pt(this, Dm), this._cancelled = 1, this.pause();
    }
    stretch(t) {
      const e = this.duration;
      if (e === Pi(t)) return this;
      const i = t / e;
      return this.duration = Pi(Ds(z(e * i, 12))), this._iterationDuration = Pi(Ds(z(this._iterationDuration * i, 12))), this._offset *= i, this._delay *= i, this._loopDelay *= i, this;
    }
    revert() {
      return Qe(this, 0, 1, 0, le.FORCE), this.cancel();
    }
    then(t = Et) {
      const e = this.then, i = () => {
        this.then = null, t(this), this.then = e, this._resolve = Et;
      };
      return new Promise((n) => (this._resolve = () => n(i()), this.completed && this._resolve(), this));
    }
  }
  const ur = (s) => {
    if (s._hasChildren) pt(s, ur, true);
    else {
      const t = s;
      t.pause(), pt(t, (e) => {
        const i = e.property, n = e.target;
        if (n[$o]) {
          const r = n.style, o = t._inlineStyles[i];
          if (e._tweenType === dt.TRANSFORM) {
            const a = n[cr];
            if (U(o) || o === si ? delete a[i] : a[i] = o, e._renderTransforms) if (!Object.keys(a).length) r.removeProperty("transform");
            else {
              let l = si;
              for (let c in a) l += Bc[c] + a[c] + ") ";
              r.transform = l;
            }
          } else U(o) || o === si ? r.removeProperty(i) : r[i] = o;
          t._tail === e && t.targets.forEach((a) => {
            a.getAttribute && a.getAttribute("style") === si && a.removeAttribute("style");
          });
        }
      });
    }
    return s;
  }, H = Xo(), Q = Xo(), yn = {
    func: null
  }, Sn = [
    null
  ], zi = [
    null,
    null
  ], bn = {
    to: null
  };
  let Rm = 0, Xe, Te;
  const Im = (s, t) => {
    const e = {};
    if (ye(s)) {
      const i = [].concat(...s.map((n) => Object.keys(n))).filter(Cs);
      for (let n = 0, r = i.length; n < r; n++) {
        const o = i[n], a = s.map((l) => {
          const c = {};
          for (let h in l) {
            const d = l[h];
            Cs(h) ? h === o && (c.to = d) : c[h] = d;
          }
          return c;
        });
        e[o] = a;
      }
    } else {
      const i = Z(t.duration, Y.defaults.duration);
      Object.keys(s).map((r) => ({
        o: parseFloat(r) / 100,
        p: s[r]
      })).sort((r, o) => r.o - o.o).forEach((r) => {
        const o = r.o, a = r.p;
        for (let l in a) if (Cs(l)) {
          let c = e[l];
          c || (c = e[l] = []);
          const h = o * i;
          let d = c.length, f = c[d - 1];
          const p = {
            to: a[l]
          };
          let m = 0;
          for (let u = 0; u < d; u++) m += c[u].duration;
          d === 1 && (p.from = f.to), a.ease && (p.ease = a.ease), p.duration = h - (d ? m : 0), c.push(p);
        }
        return r;
      });
      for (let r in e) {
        const o = e[r];
        let a;
        for (let l = 0, c = o.length; l < c; l++) {
          const h = o[l], d = h.ease;
          a && (h.ease = a), a = d;
        }
        o[0].duration || o.shift();
      }
    }
    return e;
  };
  class fn extends dn {
    constructor(t, e, i, n, r = false, o = 0, a = 0) {
      super(e, i, n), this._head = null, this._tail = null;
      const l = Yo(t), c = l.length, h = e.keyframes, d = h ? Qs(Im(h, e), e) : e, { delay: f, duration: p, ease: m, playbackEase: u, modifier: g, composition: v, onRender: y } = d, _ = i ? i.defaults : Y.defaults, T = Z(u, _.playbackEase), S = T ? ds(T) : null, w = !U(m) && !U(m.ease), b = w ? m.ease : Z(m, S ? "linear" : _.ease), A = w ? m.duration : Z(p, _.duration), L = Z(f, _.delay), x = g || _.modifier, E = U(v) && c >= Lt ? Ct.none : U(v) ? _.composition : v, O = {}, M = this._offset + (i ? i._offset : 0);
      let D = NaN, I = NaN, C = 0;
      for (let q = 0; q < c; q++) {
        const R = l[q], N = o || q, P = a || c;
        let V = NaN, $ = NaN;
        for (let G in d) if (Cs(G)) {
          const W = jo(R, G);
          if (W !== dt.INVALID) {
            const et = eh(G, R, W);
            let k = d[G];
            if (r && (zi[0] = k, zi[1] = k, k = zi), ye(k)) {
              const at = k.length, F = !ge(k[0]);
              at === 2 && F ? (bn.to = k, Sn[0] = bn, Xe = Sn) : at > 2 && F ? (Xe = [], k.forEach((j, ot) => {
                ot ? ot === 1 ? (zi[1] = j, Xe.push(zi)) : Xe.push(j) : zi[0] = j;
              })) : Xe = k;
            } else Sn[0] = k, Xe = Sn;
            let K = null, st = null, it = NaN, rt = 0, Mt = 0;
            for (let at = Xe.length; Mt < at; Mt++) {
              const F = Xe[Mt];
              ge(F) ? Te = F : (bn.to = F, Te = bn), yn.func = null;
              const j = je(Te.to, R, N, P, yn);
              let ot;
              ge(j) && !U(j.to) ? (Te = j, ot = j.to) : ot = j;
              const Ft = je(Te.from, R, N, P), ie = Te.ease, ke = !U(ie) && !U(ie.ease), Dt = ke ? ie.ease : ie || b, Re = ke ? ie.duration : je(Z(Te.duration, at > 1 ? je(A, R, N, P) / at : A), R, N, P), ut = je(Z(Te.delay, Mt ? 0 : L), R, N, P), Gt = je(Z(Te.composition, E), R, N, P), zt = hr(Gt) ? Gt : Ct[Gt], de = Te.modifier || x, Vi = ye(ot), mn = Vi || !U(Ft) && !U(ot), Ye = st ? rt + ut : ut, fr = M + Ye;
              let se = st;
              if (zt !== Ct.none) {
                K || (K = Js(R, et));
                let ct = K._head;
                for (; ct && !ct._isOverridden && ct._absoluteStartTime <= fr; ) if (se = ct, ct = ct._nextRep, ct && ct._absoluteStartTime >= fr) for (; ct; ) Pn(ct), ct = ct._nextRep;
              }
              if (mn ? (pe(Vi ? je(ot[0], R, N, P) : Ft, H), pe(Vi ? je(ot[1], R, N, P, yn) : ot, Q), H.t === tt.NUMBER && (se ? se._valueType === tt.UNIT && (H.t = tt.UNIT, H.u = se._unit) : (pe(Yi(R, et, W, O), oe), oe.t === tt.UNIT && (H.t = tt.UNIT, H.u = oe.u)))) : (U(ot) ? st ? Ga(st, Q) : pe(i && se && se.parent.parent === i ? se._value : Yi(R, et, W, O), Q) : pe(ot, Q), U(Ft) ? st ? Ga(st, H) : pe(i && se && se.parent.parent === i ? se._value : Yi(R, et, W, O), H) : pe(Ft, H)), H.o && (H.n = so(se ? se._toNumber : pe(Yi(R, et, W, O), oe).n, H.n, H.o)), Q.o && (Q.n = so(H.n, Q.n, Q.o)), H.t !== Q.t) {
                if (H.t === tt.COMPLEX || Q.t === tt.COMPLEX) {
                  const ct = H.t === tt.COMPLEX ? H : Q, kt = H.t === tt.COMPLEX ? Q : H;
                  kt.t = tt.COMPLEX, kt.s = qt(ct.s), kt.d = ct.d.map(() => kt.n);
                } else if (H.t === tt.UNIT || Q.t === tt.UNIT) {
                  const ct = H.t === tt.UNIT ? H : Q, kt = H.t === tt.UNIT ? Q : H;
                  kt.t = tt.UNIT, kt.u = ct.u;
                } else if (H.t === tt.COLOR || Q.t === tt.COLOR) {
                  const ct = H.t === tt.COLOR ? H : Q, kt = H.t === tt.COLOR ? Q : H;
                  kt.t = tt.COLOR, kt.s = ct.s, kt.d = [
                    0,
                    0,
                    0,
                    1
                  ];
                }
              }
              if (H.u !== Q.u) {
                let ct = Q.u ? H : Q;
                ct = ih(R, ct, Q.u ? Q.u : H.u, false);
              }
              if (Q.d && H.d && Q.d.length !== H.d.length) {
                const ct = H.d.length > Q.d.length ? H : Q, kt = ct === H ? Q : H;
                kt.d = ct.d.map(($g, ta) => U(kt.d[ta]) ? 0 : kt.d[ta]), kt.s = qt(ct.s);
              }
              const pr = +Re || nt, gn = {
                parent: this,
                id: Rm++,
                property: et,
                target: R,
                _value: null,
                _func: yn.func,
                _ease: ds(Dt),
                _fromNumbers: qt(H.d),
                _toNumbers: qt(Q.d),
                _strings: qt(Q.s),
                _fromNumber: H.n,
                _toNumber: Q.n,
                _numbers: qt(H.d),
                _number: H.n,
                _unit: Q.u,
                _modifier: de,
                _currentTime: 0,
                _startTime: Ye,
                _delay: +ut,
                _updateDuration: pr,
                _changeDuration: pr,
                _absoluteStartTime: fr,
                _tweenType: W,
                _valueType: Q.t,
                _composition: zt,
                _isOverlapped: 0,
                _isOverridden: 0,
                _renderTransforms: 0,
                _prevRep: null,
                _nextRep: null,
                _prevAdd: null,
                _nextAdd: null,
                _prev: null,
                _next: null
              };
              zt !== Ct.none && nh(gn, K), isNaN(it) && (it = gn._startTime), rt = z(Ye + pr, 12), st = gn, C++, bi(this, gn);
            }
            (isNaN(I) || it < I) && (I = it), (isNaN(D) || rt > D) && (D = rt), W === dt.TRANSFORM && (V = C - Mt, $ = C);
          }
        }
        if (!isNaN(V)) {
          let G = 0;
          pt(this, (W) => {
            G >= V && G < $ && (W._renderTransforms = 1, W._composition === Ct.blend && pt(ks.animation, (et) => {
              et.id === W.id && (et._renderTransforms = 1);
            })), G++;
          });
        }
      }
      c || console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."), I ? (pt(this, (q) => {
        q._startTime - q._delay || (q._delay -= I), q._startTime -= I;
      }), D -= I) : I = 0, D || (D = nt, this._iterationCount = 0), this.targets = l, this.duration = D === nt ? nt : Ds((D + this._loopDelay) * this._iterationCount - this._loopDelay) || nt, this.onRender = y || _.onRender, this._ease = S, this._delay = I, this._iterationDuration = D, this._inlineStyles = O;
    }
    stretch(t) {
      const e = this.duration;
      if (e === Pi(t)) return this;
      const i = t / e;
      return pt(this, (n) => {
        n._updateDuration = Pi(z(n._updateDuration * i, 12)), n._changeDuration = Pi(z(n._changeDuration * i, 12)), n._currentTime *= i, n._startTime *= i, n._absoluteStartTime *= i;
      }), super.stretch(t);
    }
    refresh() {
      return pt(this, (t) => {
        const e = Yi(t.target, t.property, t._tweenType);
        pe(e, oe), t._fromNumbers = qt(oe.d), t._fromNumber = oe.n, t._func && (pe(t._func(), Q), t._toNumbers = qt(Q.d), t._strings = qt(Q.s), t._toNumber = Q.n);
      }), this;
    }
    revert() {
      return super.revert(), ur(this);
    }
    then(t) {
      return super.then(t);
    }
  }
  function Xn(s, t, e) {
    const i = Yo(s);
    if (!i.length) return;
    const [n] = i, r = jo(n, t), o = eh(t, n, r);
    let a = Yi(n, o);
    if (U(e)) return a;
    if (pe(a, oe), oe.t === tt.NUMBER || oe.t === tt.UNIT) {
      if (e === false) return oe.n;
      {
        const l = ih(n, oe, e, false);
        return `${z(l.n, Y.precision)}${l.u}`;
      }
    }
  }
  const ji = (s, t) => {
    if (!U(t)) return t.duration = nt, t.composition = Z(t.composition, Ct.none), new fn(s, t, null, 0, true).play();
  }, Ja = (s, t) => {
    let e = false;
    return pt(t, (i) => {
      s.includes(i.target) && (Zs(t, i), e = true);
    }, true), e;
  }, Rs = (s, t) => {
    const e = Ue(s), i = t || gt;
    let n;
    if (i._hasChildren ? pt(i, (r) => {
      r._hasChildren || (n = Ja(e, r), n && !r._head && Zs(i, r)), r._head ? Rs(s, r) : r._hasChildren = false;
    }, true) : n = Ja(e, i), n && !i._head) {
      i._hasChildren = false;
      const r = i;
      r.pause && r.pause();
    }
    return e;
  }, Go = (s, t, e) => {
    const i = 10 ** (e || 0);
    return Yn((Math.random() * (t - s + 1 / i) + s) * i) / i;
  }, Nm = (s) => s[Go(0, s.length - 1)], Fm = (s) => {
    let t = s.length, e, i;
    for (; t; ) i = Go(0, --t), e = s[t], s[t] = s[i], s[i] = e;
    return s;
  }, qm = (s, t) => (+s).toFixed(t), Vm = (s, t, e) => `${s}`.padStart(t, e), Bm = (s, t, e) => `${s}`.padEnd(t, e), zm = (s, t, e) => ((s - t) % (e - t) + (e - t)) % (e - t) + t, ws = (s, t, e, i, n) => i + (s - t) / (e - t) * (n - i), Um = (s) => s * _s / 180, $m = (s) => s * 180 / _s, Wm = (s, t, e, i) => {
    let n = Lt / Y.defaults.frameRate;
    if (i !== false) {
      const o = i || gt._hasChildren && gt;
      o && o.deltaTime && (n = o.deltaTime);
    }
    const r = 1 - Math.exp(-e * n * 0.1);
    return e ? e === 1 ? t : (1 - r) * s + r * t : s;
  }, Hm = (s, t = 0) => (...e) => t ? (i) => s(...e, i) : (i) => s(i, ...e), rh = (s) => (...t) => {
    const e = s(...t);
    return new Proxy(Et, {
      apply: (i, n, [r]) => e(r),
      get: (i, n) => rh((...r) => {
        const o = oh[n](...r);
        return (a) => o(e(a));
      })
    });
  }, fe = (s, t = 0) => (...e) => (e.length < s.length ? rh(Hm(s, t)) : s)(...e), oh = {
    $: Yo,
    get: Xn,
    set: ji,
    remove: Rs,
    cleanInlineStyles: ur,
    random: Go,
    randomPick: Nm,
    shuffle: Fm,
    lerp: Wm,
    clamp: fe(B),
    round: fe(z),
    snap: fe(Ie),
    wrap: fe(zm),
    interpolate: fe(Ge, 1),
    mapRange: fe(ws),
    roundPad: fe(qm),
    padStart: fe(Vm),
    padEnd: fe(Bm),
    degToRad: fe(Um),
    radToDeg: fe($m)
  }, Ym = (s, t) => {
    if (Ci(t, "<")) {
      const e = t[1] === "<", i = s._tail, n = i ? i._offset + i._delay : 0;
      return e ? n : n + i.duration;
    }
  }, Dn = (s, t) => {
    let e = s._iterationDuration;
    if (e === nt && (e = 0), U(t)) return e;
    if (hr(+t)) return +t;
    const i = t, n = s ? s.labels : null, r = !Ms(n), o = Ym(s, i), a = !U(o), l = sm.exec(i);
    if (l) {
      const c = l[0], h = i.split(c), d = r && h[0] ? n[h[0]] : e, f = a ? o : r ? d : e, p = +h[1];
      return so(f, p, c[0]);
    } else return a ? o : r ? U(n[i]) ? e : n[i] : e;
  };
  function kr(s, t, e, i, n, r) {
    const o = hr(s.duration) && s.duration <= nt ? e - nt : e;
    Qe(t, o, 1, 1, le.AUTO);
    const a = i ? new fn(i, s, t, o, false, n, r) : new dn(s, t, o);
    return a.init(1), bi(t, a), pt(t, (l) => {
      const h = l._offset + l._delay + l.duration;
      h > t._iterationDuration && (t._iterationDuration = h);
    }), t.duration = Ds((t._iterationDuration + t._loopDelay) * t._iterationCount - t._loopDelay) || nt, t;
  }
  class jm extends dn {
    constructor(t = {}) {
      super(t, null, 0), this.duration = 0, this.labels = {};
      const e = t.defaults, i = Y.defaults;
      this.defaults = e ? Qs(e, i) : i, this.onRender = t.onRender || i.onRender;
      const n = Z(t.playbackEase, i.playbackEase);
      this._ease = n ? ds(n) : null, this._iterationDuration = 0, this._head = null, this._tail = null;
    }
    add(t, e, i) {
      const n = ge(e), r = ge(t), o = ui(t);
      if (n || r || o) {
        if (this._hasChildren = true, n) {
          const a = e;
          if (ui(i)) {
            const l = i, c = Ue(t), h = this.duration, d = this._iterationDuration, f = a.id;
            let p = 0;
            const m = c.length;
            c.forEach((u) => {
              const g = {
                ...a
              };
              this.duration = h, this._iterationDuration = d, U(f) || (g.id = f + "-" + p), kr(g, this, l(u, p, m, this), u, p, m), p++;
            });
          } else kr(a, this, Dn(this, i), t);
        } else kr(r ? t : {
          onComplete: t,
          duration: nt
        }, this, Dn(this, e));
        return this.init(1), this._autoplay === true ? this.play() : this;
      } else if (gs(t)) return this.labels[t] = Dn(this, e), this;
    }
    set(t, e, i) {
      return U(e) ? this : (e.duration = nt, e.composition = Ct.replace, this.add(t, e, i));
    }
    stretch(t) {
      const e = this.duration;
      if (e === Pi(t)) return this;
      const i = t / e, n = this.labels;
      pt(this, (r) => {
        r.stretch(r.duration * i);
      });
      for (let r in n) n[r] *= i;
      return super.stretch(t);
    }
    refresh() {
      return pt(this, (t) => {
        t.refresh();
      }), this;
    }
    revert() {
      return super.revert(), pt(this, (t) => t.revert, true), ur(this);
    }
    then(t) {
      return super.then(t);
    }
  }
  const Xm = (s, t = {}) => {
    let e = [], i = 0;
    const n = t.from, r = t.reversed, o = t.ease, a = !U(o), c = a && !U(o.ease) ? o.ease : a ? ds(o) : null, h = t.grid, d = t.axis, f = U(n) || n === 0 || n === "first", p = n === "center", m = n === "last", u = ye(s), g = Si(u ? s[0] : s), v = u ? Si(s[1]) : 0, y = zc.exec((u ? s[1] : s) + si), _ = t.start || 0 + (u ? g : 0);
    let T = f ? 0 : hr(n) ? n : 0;
    return (S, w, b, A) => {
      if (p && (T = (b - 1) / 2), m && (T = b - 1), !e.length) {
        for (let O = 0; O < b; O++) {
          if (!h) e.push(hs(T - O));
          else {
            const M = p ? (h[0] - 1) / 2 : T % h[0], D = p ? (h[1] - 1) / 2 : Yn(T / h[0]), I = O % h[0], C = Yn(O / h[0]), q = M - I, R = D - C;
            let N = Ps(q * q + R * R);
            d === "x" && (N = -q), d === "y" && (N = -R), e.push(N);
          }
          i = lm(...e);
        }
        c && (e = e.map((O) => c(O / i) * i)), r && (e = e.map((O) => d ? O < 0 ? O * -1 : -O : hs(i - O)));
      }
      const L = u ? (v - g) / i : g;
      let E = (A ? Dn(A, U(t.start) ? A._iterationDuration : _) : _) + (L * z(e[w], 2) || 0);
      return t.modifier && (E = t.modifier(E)), y && (E = `${E}${y[2]}`), E;
    };
  };
  class Gm {
    constructor(t = {}) {
      this.timeStep = 0.02, this.restThreshold = 6e-4, this.restDuration = 100, this.maxDuration = 6e4, this.maxRestSteps = this.restDuration / this.timeStep / Lt, this.maxIterations = this.maxDuration / this.timeStep / Lt, this.m = B(Z(t.mass, 1), 0, Lt), this.s = B(Z(t.stiffness, 100), 1, Lt), this.d = B(Z(t.damping, 10), 0.1, Lt), this.v = B(Z(t.velocity, 0), 0, Lt), this.w0 = 0, this.zeta = 0, this.wd = 0, this.b = 0, this.solverDuration = 0, this.duration = 0, this.compute(), this.ease = (e) => e === 0 || e === 1 ? e : this.solve(e * this.solverDuration);
    }
    solve(t) {
      const { zeta: e, w0: i, wd: n, b: r } = this;
      let o = t;
      return e < 1 ? o = za(-o * e * i) * (1 * jc(n * o) + r * Yc(n * o)) : o = (1 + r * o) * za(-o * i), 1 - o;
    }
    compute() {
      const { maxRestSteps: t, maxIterations: e, restThreshold: i, timeStep: n, m: r, d: o, s: a, v: l } = this, c = this.w0 = B(Ps(a / r), nt, Lt), h = this.zeta = o / (2 * Ps(a * r)), d = this.wd = h < 1 ? c * Ps(1 - h * h) : 0;
      this.b = h < 1 ? (h * c + -l) / d : -l + c;
      let f = 0, p = 0, m = 0;
      for (; p < t && m < e; ) hs(1 - this.solve(f)) < i ? p++ : p = 0, this.solverDuration = f, f += n, m++;
      this.duration = z(this.solverDuration * Lt, 0) * Y.timeScale;
    }
    get mass() {
      return this.m;
    }
    set mass(t) {
      this.m = B(Z(t, 1), 0, Lt), this.compute();
    }
    get stiffness() {
      return this.s;
    }
    set stiffness(t) {
      this.s = B(Z(t, 100), 1, Lt), this.compute();
    }
    get damping() {
      return this.d;
    }
    set damping(t) {
      this.d = B(Z(t, 10), 0.1, Lt), this.compute();
    }
    get velocity() {
      return this.v;
    }
    set velocity(t) {
      this.v = B(Z(t, 0), 0, Lt), this.compute();
    }
  }
  const Km = (s) => new Gm(s);
  class ah {
    constructor(t, e) {
      Y.scope && Y.scope.revertibles.push(this);
      const i = {}, n = {};
      if (this.targets = [], this.animations = {}, !(U(t) || U(e))) {
        for (let r in e) {
          const o = e[r];
          Cs(r) ? n[r] = o : i[r] = o;
        }
        for (let r in n) {
          const o = n[r], a = ge(o);
          let l = {}, c = "+=0";
          if (a) {
            const f = o.unit;
            gs(f) && (c += f);
          } else l.duration = o;
          l[r] = a ? Qs({
            to: c
          }, o) : c;
          const h = Qs(i, l);
          h.composition = Ct.replace, h.autoplay = false;
          const d = this.animations[r] = new fn(t, h, null, 0, false).init();
          this.targets.length || this.targets.push(...d.targets), this[r] = (f, p, m) => {
            const u = d._head;
            if (U(f)) {
              const g = u._numbers;
              return g && g.length ? g : u._modifier(u._number);
            } else return pt(d, (g) => {
              if (ye(f)) for (let v = 0, y = f.length; v < y; v++) U(g._numbers[v]) || (g._fromNumbers[v] = g._modifier(g._numbers[v]), g._toNumbers[v] = f[v]);
              else g._fromNumber = g._modifier(g._number), g._toNumber = f;
              U(m) || (g._ease = ds(m)), g._currentTime = 0;
            }), U(p) || d.stretch(p), d.reset(1).play(), this;
          };
        }
      }
    }
    revert() {
      for (let t in this.animations) this[t] = Et, this.animations[t].revert();
      return this.animations = {}, this.targets.length = 0, this;
    }
  }
  class Qm {
    constructor(t) {
      this.el = t, this.zIndex = 0, this.parentElement = null, this.classList = {
        add: Et,
        remove: Et
      };
    }
    get x() {
      return this.el.x || 0;
    }
    set x(t) {
      this.el.x = t;
    }
    get y() {
      return this.el.y || 0;
    }
    set y(t) {
      this.el.y = t;
    }
    get width() {
      return this.el.width || 0;
    }
    set width(t) {
      this.el.width = t;
    }
    get height() {
      return this.el.height || 0;
    }
    set height(t) {
      this.el.height = t;
    }
    getBoundingClientRect() {
      return {
        top: this.y,
        right: this.x,
        bottom: this.y + this.height,
        left: this.x + this.width
      };
    }
  }
  class Zm {
    constructor(t) {
      this.$el = t, this.inlineTransforms = [], this.point = new DOMPoint(), this.inversedMatrix = this.getMatrix().inverse();
    }
    normalizePoint(t, e) {
      return this.point.x = t, this.point.y = e, this.point.matrixTransform(this.inversedMatrix);
    }
    traverseUp(t) {
      let e = this.$el.parentElement, i = 0;
      for (; e && e !== At; ) t(e, i), e = e.parentElement, i++;
    }
    getMatrix() {
      const t = new DOMMatrix();
      return this.traverseUp((e) => {
        const i = new DOMMatrix(Xn(e, "transform"));
        t.preMultiplySelf(i);
      }), t;
    }
    remove() {
      this.traverseUp((t, e) => {
        this.inlineTransforms[e] = t.style.transform, t.style.transform = "none";
      });
    }
    revert() {
      this.traverseUp((t, e) => {
        const i = this.inlineTransforms[e];
        i === "" ? t.style.removeProperty("transform") : t.style.transform = i;
      });
    }
  }
  let Tn = 0;
  class Jm {
    constructor(t, e = {}) {
      if (!t) return;
      Y.scope && Y.scope.revertibles.push(this);
      const i = e.x, n = e.y, r = e.trigger, o = e.modifier, a = e.container, l = e.containerPadding || 0, c = ye(l) ? l : [
        l,
        l,
        l,
        l
      ], h = e.releaseEase, d = h && ds(h), f = !U(h) && !U(h.ease), p = ge(i) && !U(i.mapTo) ? i.mapTo : "x", m = ge(n) && !U(n.mapTo) ? n.mapTo : "y";
      this.snapX = Z(e.snap, 0), this.snapY = Z(e.snap, 0), this.scrollSpeed = Z(e.scrollSpeed, 1.5), this.scrollThreshold = Z(e.scrollThreshold, 20), this.dragSpeed = Z(e.dragSpeed, 1), this.hasCustomEase = !!d && !f, this.releaseSpring = f ? h : Km({
        mass: Z(e.releaseMass, 1),
        stiffness: Z(e.releaseStiffness, 80),
        damping: Z(e.releaseDamping, 20)
      }), this.releaseEase = f ? this.releaseSpring.ease : d || Ze.outQuint, this.releaseVelocity = Z(e.releaseVelocity, 1), this.container = ye(a) ? a : null, this.$target = ge(t) ? new Qm(t) : Ue(t)[0], this.$trigger = Ue(r || t)[0], this.fixed = Xn(this.$target, "position") === "fixed", this.$container = a && !this.container ? Ue(a)[0] : At.body, this.containerPadding = Z(c, [
        0,
        0,
        0,
        0
      ]), this.containerFriction = B(0, Z(e.containerFriction, 0.85), 1), this.onGrab = e.onGrab || Et, this.onDrag = e.onDrag || Et, this.onRelease = e.onRelease || Et, this.onUpdate = e.onUpdate || Et, this.onSettle = e.onSettle || Et, this.onSnap = e.onSnap || Et, this.disabled = [
        0,
        0
      ];
      const u = {};
      if (o && (u.modifier = o), U(i) || i === true) u[p] = 0;
      else if (ge(i)) {
        const T = i, S = {};
        T.modifier && (S.modifier = T.modifier), T.composition && (S.composition = T.composition), U(T.snap) || (this.snapX = T.snap), u[p] = S;
      } else i === false && (u[p] = 0, this.disabled[0] = 1);
      if (U(n) || n === true) u[m] = 0;
      else if (ge(n)) {
        const T = n, S = {};
        T.modifier && (S.modifier = T.modifier), T.composition && (S.composition = T.composition), U(T.snap) || (this.snapY = T.snap), u[m] = S;
      } else n === false && (u[m] = 0, this.disabled[1] = 1);
      this.animate = new ah(this.$target, u), this.xProp = p, this.yProp = m, this.destX = 0, this.destY = 0, this.deltaX = 0, this.deltaY = 0, this.progresses = [
        0,
        0
      ], this.scroll = {
        x: 0,
        y: 0
      }, this.coords = [
        this.x,
        this.y,
        0,
        0
      ], this.snapped = [
        0,
        0
      ], this.pointer = [
        0,
        0,
        0,
        0
      ], this.scrollView = [
        0,
        0
      ], this.dragArea = [
        0,
        0,
        0,
        0
      ], this.containerBounds = [
        -1e12,
        Ts,
        Ts,
        -1e12
      ], this.scrollBounds = [
        0,
        0,
        0,
        0
      ], this.targetBounds = [
        0,
        0,
        0,
        0
      ], this.window = [
        0,
        0
      ], this.velocity = 0, this.angle = 0, this.triggerStyles = null, this.bodyStyles = null, this.targetStyles = null, this.transforms = new Zm(this.$target), this.updateTicker = new dn({
        autoplay: false,
        onUpdate: (T) => this.update(T)
      }, null, 0).init(), this.manual = false, this.grabbed = false, this.dragged = false, this.updated = false, this.released = false, this.contained = !U(a), this.canScroll = false, this.useWin = this.$container === At.body, this.$scrollContainer = this.useWin ? re : this.$container, this.isFinePointer = matchMedia("(pointer:fine)").matches, this.enabled = false, this.animate.animations[this.disabled[0] ? m : p].onRender = () => {
        const T = this.updated, S = this.grabbed && T, w = !S && this.released;
        if (S || w) {
          const b = this.x, A = this.y;
          this.deltaX = this.coords[2] - b, this.deltaY = this.coords[3] - A, this.coords[2] = b, this.coords[3] = A, this.progresses[0] = ws(b, this.containerBounds[3], this.containerBounds[1], 0, 1), this.progresses[1] = ws(A, this.containerBounds[0], this.containerBounds[2], 0, 1);
        } else this.deltaX = 0, this.deltaY = 0;
        T && (this.onUpdate(this), this.updated = false), S && this.onDrag(this), w && this.onUpdate(this);
      }, this.animate.animations[this.disabled[0] ? m : p].onComplete = () => {
        this.manual || this.onSettle(this);
      }, this.enable(), this.updateBoundingValues();
      const [g, v, y, _] = this.containerBounds;
      this.x = B(this.x, _, v), this.y = B(this.x, g, y);
    }
    get x() {
      return z(this.animate[this.xProp](), Y.precision);
    }
    set x(t) {
      if (this.disabled[0]) return;
      const e = z(t, 5);
      this.manual = true, this.destX = e, this.snapped[0] = Ie(e, this.snapX), this.animate[this.xProp](e, 0, Ze.out(5)), this.manual = false;
    }
    get y() {
      return z(this.animate[this.yProp](), Y.precision);
    }
    set y(t) {
      if (this.disabled[1]) return;
      const e = z(t, 5);
      this.manual = true, this.destY = e, this.snapped[1] = Ie(e, this.snapY), this.animate[this.yProp](e, 0, Ze.out(5)), this.manual = false;
    }
    get progressX() {
      return this.progresses[0];
    }
    set progressX(t) {
      this.updated = true, this.progresses[0] = t, this.x = ws(t, 0, 1, this.containerBounds[3], this.containerBounds[1]);
    }
    get progressY() {
      return this.progresses[1];
    }
    set progressY(t) {
      this.updated = true, this.progresses[1] = t, this.y = ws(t, 0, 1, this.containerBounds[0], this.containerBounds[2]);
    }
    updateScrollCoords() {
      const t = z(this.useWin ? re.scrollX : this.$container.scrollLeft, 0), e = z(this.useWin ? re.scrollY : this.$container.scrollTop, 0), [i, n, r, o] = this.containerPadding, a = this.scrollThreshold;
      this.scroll.x = t, this.scroll.y = e, this.scrollBounds[0] = e - this.targetBounds[0] + i - a, this.scrollBounds[1] = t - this.targetBounds[1] - n + a, this.scrollBounds[2] = e - this.targetBounds[2] - r + a, this.scrollBounds[3] = t - this.targetBounds[3] + o - a;
    }
    updateBoundingValues() {
      const t = this.x, e = this.y;
      this.x = 0, this.y = 0, this.transforms.remove();
      const i = this.window[0] = re.innerWidth, n = this.window[1] = re.innerHeight, r = this.useWin, o = this.$container.scrollWidth, a = this.$container.scrollHeight, l = this.fixed, c = this.$container.getBoundingClientRect(), [h, d, f, p] = this.containerPadding;
      this.dragArea[0] = r ? 0 : c.left, this.dragArea[1] = r ? 0 : c.top, this.scrollView[0] = r ? B(o, i, o) : o, this.scrollView[1] = r ? B(a, n, a) : a, this.updateScrollCoords();
      const { width: m, height: u, left: g, top: v, right: y, bottom: _ } = this.$container.getBoundingClientRect();
      if (this.dragArea[2] = z(r ? B(m, i, i) : m, 0), this.dragArea[3] = z(r ? B(u, n, n) : u, 0), this.canScroll = l ? false : (o > this.dragArea[2] + p - d || a > this.dragArea[3] + h - f) && (!this.container || this.container && !ye(this.container)) && this.contained, this.contained) {
        const T = this.scroll.x, S = this.scroll.y, w = this.canScroll, b = this.$target.getBoundingClientRect(), A = w ? r ? 0 : this.$container.scrollLeft : 0, L = w ? r ? 0 : this.$container.scrollTop : 0, x = w ? this.scrollView[0] - A - m : 0, E = w ? this.scrollView[1] - L - u : 0;
        this.targetBounds[0] = z(b.top + S - (r ? 0 : v), 0), this.targetBounds[1] = z(b.right + T - (r ? i : y), 0), this.targetBounds[2] = z(b.bottom + S - (r ? n : _), 0), this.targetBounds[3] = z(b.left + T - (r ? 0 : g), 0), this.container ? (this.containerBounds[0] = this.container[0] + h, this.containerBounds[1] = this.container[1] - d, this.containerBounds[2] = this.container[2] - f, this.containerBounds[3] = this.container[3] + p) : (this.containerBounds[0] = -z(b.top - (l ? B(v, 0, n) : v) + L - h, 0), this.containerBounds[1] = -z(b.right - (l ? B(y, 0, i) : y) - x + d, 0), this.containerBounds[2] = -z(b.bottom - (l ? B(_, 0, n) : _) - E + f, 0), this.containerBounds[3] = -z(b.left - (l ? B(g, 0, i) : g) + A - p, 0));
      }
      this.transforms.revert(), this.x = t, this.y = e;
    }
    isOutOfBounds(t, e, i) {
      if (!this.contained) return false;
      const [n, r, o, a] = t, [l, c] = this.disabled;
      return !l && e < a || !l && e > r || !c && i < n || !c && i > o;
    }
    update(t) {
      this.updateScrollCoords();
      const [e, i] = this.disabled;
      if (this.canScroll) {
        const [I, C, q, R] = this.containerPadding, [N, P] = this.scrollView, V = this.dragArea[2], $ = this.dragArea[3], G = this.scroll.x, W = this.scroll.y, et = this.$container.scrollWidth, k = this.$container.scrollHeight, K = this.useWin ? B(et, this.window[0], et) : et, st = this.useWin ? B(k, this.window[1], k) : k, it = N - K, rt = P - st;
        this.dragged && it > 0 && (this.coords[0] -= it, this.scrollView[0] = K), this.dragged && rt > 0 && (this.coords[1] -= rt, this.scrollView[1] = st);
        const Mt = this.scrollSpeed * 10, at = this.scrollThreshold, [F, j] = this.coords, [ot, Ft, ie, ke] = this.scrollBounds, Dt = z(B((j - ot + I) / at, -1, 0) * Mt, 0), Re = z(B((F - Ft - C) / at, 0, 1) * Mt, 0), ut = z(B((j - ie - q) / at, 0, 1) * Mt, 0), Gt = z(B((F - ke + R) / at, -1, 0) * Mt, 0);
        if (Dt || ut || Gt || Re) {
          let zt = G, de = W;
          e || (zt = z(B(G + (Gt || Re), 0, N - V), 0), this.coords[0] -= G - zt), i || (de = z(B(W + (Dt || ut), 0, P - $), 0), this.coords[1] -= W - de), this.$scrollContainer.scrollTo(zt, de);
        }
      }
      const [n, r, o, a] = this.pointer, l = n - o, c = r - a, h = this.x, d = this.y;
      this.coords[0] += l * this.dragSpeed, this.coords[1] += c * this.dragSpeed, this.pointer[2] = n, this.pointer[3] = r;
      const [f, p] = this.coords, [m, u] = this.snapped, [g, v, y, _] = this.containerBounds, T = (1 - this.containerFriction) * this.dragSpeed;
      let S = 0, w = 0;
      e || (S = this.x = B(f, _, v) + (f - B(f, _, v)) * T), i || (w = this.y = B(p, g, y) + (p - B(p, g, y)) * T);
      const [b, A] = this.snapped;
      (b !== m && this.snapX || A !== u && this.snapY) && this.onSnap(this);
      const L = S - h, x = w - d, E = !e && L && (L < 0 ? S > _ : w < v), O = !i && x && (x < 0 ? w > g : w < y), M = this.velocity;
      let D = 0;
      if (E || O) {
        const I = t.deltaTime;
        D = (I > 0 ? Math.sqrt(L * L + x * x) / I : 0) * this.releaseVelocity, D === 0 && M > 3 && (D = M);
      }
      this.velocity = D, this.angle = Math.atan2(x, L);
    }
    scrollInView(t, e, i = Ze.inOutQuad) {
      this.updateScrollCoords();
      const n = this.destX, r = this.destY, o = this.scroll, a = this.scrollBounds, l = this.canScroll;
      if (!this.container && this.isOutOfBounds(a, n, r)) {
        const [c, h, d, f] = a, p = z(B(r - c, -1e12, 0), 0), m = z(B(n - h, 0, Ts), 0), u = z(B(r - d, 0, Ts), 0), g = z(B(n - f, -1e12, 0), 0);
        new fn(o, {
          x: z(o.x + (g ? g - t : m ? m + t : 0), 0),
          y: z(o.y + (p ? p - t : u ? u + t : 0), 0),
          duration: U(e) ? 100 * Y.timeScale : e,
          ease: i,
          onUpdate: () => {
            this.canScroll = false, this.$scrollContainer.scrollTo(o.x, o.y);
          }
        }).init().then(() => {
          this.canScroll = l;
        });
      }
    }
    handleHover() {
      this.isFinePointer && !this.triggerStyles && (this.triggerStyles = ji(this.$trigger, {
        cursor: "grab"
      }));
    }
    animateInView(t, e = Ze.out(5)) {
      this.updateBoundingValues();
      const i = this.x, n = this.y, [r, o, a, l] = this.containerPadding, c = this.scroll.y - this.targetBounds[0] + r, h = this.scroll.x - this.targetBounds[1] - o, d = this.scroll.y - this.targetBounds[2] - a, f = this.scroll.x - this.targetBounds[3] + l;
      if (this.isOutOfBounds([
        c,
        h,
        d,
        f
      ], i, n)) {
        const [p, m] = this.disabled, u = B(Ie(i, this.snapX), f, h), g = B(Ie(n, this.snapY), c, d), v = U(t) ? 350 * Y.timeScale : t;
        p || this.animate[this.xProp](u, v, e), m || this.animate[this.yProp](g, v, e);
      }
      return this;
    }
    handleDown(t) {
      const e = t.target;
      if (Rs(this.scroll), this.grabbed || e.type === "range" || e[xr] && e !== this.$trigger) return;
      const { x: i, y: n } = this.transforms.normalizePoint(t.clientX, t.clientY);
      this.grabbed = true, this.released = false, this.updateBoundingValues();
      const [r, o, a, l] = this.containerBounds, c = (1 - this.containerFriction) * this.dragSpeed, h = this.x, d = this.y;
      this.x = h, this.y = d, this.coords[0] = this.coords[2] = B(h, l, o) + (h - B(h, l, o)) / c, this.coords[1] = this.coords[3] = B(d, r, a) + (d - B(d, r, a)) / c, this.pointer[2] = i, this.pointer[3] = n, this.deltaX = 0, this.deltaY = 0, this.velocity = 0, this.angle = 0, this.targetStyles && (this.targetStyles.revert(), this.targetStyles = null);
      const f = Xn(this.$target, "zIndex", false);
      Tn = (f > Tn ? f : Tn) + 1, this.targetStyles = ji(this.$target, {
        zIndex: Tn
      }), this.isFinePointer && (this.triggerStyles && (this.triggerStyles.revert(), this.targetStyles = null), this.bodyStyles = ji(At.body, {
        cursor: "grabbing"
      })), this.scrollInView(0), this.onGrab(this), At.addEventListener("pointermove", this, false), At.addEventListener("pointerup", this, false), At.addEventListener("pointercancel", this, false), re.addEventListener("selectstart", this, false);
    }
    handleMove(t) {
      if (!this.grabbed) return;
      t.preventDefault(), this.triggerStyles || (this.triggerStyles = ji(this.$trigger, {
        pointerEvents: "none"
      }));
      const { x: e, y: i } = this.transforms.normalizePoint(t.clientX, t.clientY);
      this.updateTicker.play(), this.pointer[0] = e, this.pointer[1] = i, this.dragged = true, this.updated = true, this.released = false;
    }
    handleUp() {
      if (!this.grabbed) return;
      this.updateTicker.pause(), this.triggerStyles && (this.triggerStyles.revert(), this.triggerStyles = null), this.isFinePointer && this.bodyStyles && (this.bodyStyles.revert(), this.bodyStyles = null);
      const [t, e] = this.disabled, [i, n, r, o] = this.containerBounds, [a, l] = this.snapped, c = this.releaseSpring, h = this.releaseEase, d = this.hasCustomEase, f = this.x, p = this.y, u = this.velocity * Y.timeScale * 100, g = Math.cos(this.angle) * u, v = Math.sin(this.angle) * u, y = f + g, _ = p + v, T = 1 - this.containerFriction;
      c.velocity = z(B(u / 50, 0, 50), 2);
      const { ease: S, duration: w } = c;
      let b = B(Ie(y, this.snapX), o, n), A = B(Ie(_, this.snapY), i, r);
      if (this.isOutOfBounds(this.containerBounds, y, _) && T) {
        const x = !t && (y > n || y < o), E = !e && (_ > r || _ < i), O = x && !E, M = E && !x, D = M ? B(b + (b - f) * 0.25, o, n) : b, I = O ? B(A + (A - p) * 0.25, i, r) : A, C = M || d ? h : S, q = O || d ? h : S;
        b = B(Ie(D, this.snapX), o, n), A = B(Ie(I, this.snapY), i, r), t || this.animate[this.xProp](b, w, C), e || this.animate[this.yProp](A, w, q);
      } else {
        const x = f !== b || u ? w : 0, E = p !== A || u ? w : 0;
        t || this.animate[this.xProp](b, x, h), e || this.animate[this.yProp](A, E, h);
      }
      this.destX = b, this.destY = A, this.scrollInView(this.scrollThreshold, w, h), this.onRelease(this);
      let L = false;
      b !== a && (this.snapped[0] = b, this.snapX && (L = true)), A !== l && this.snapY && (this.snapped[1] = A, this.snapY && (L = true)), L && this.onSnap(this), this.grabbed = false, this.dragged = false, this.released = true, At.removeEventListener("pointermove", this), At.removeEventListener("pointerup", this), At.removeEventListener("pointercancel", this), re.removeEventListener("selectstart", this);
    }
    reset() {
      return Rs(this.scroll), this.grabbed = false, this.dragged = false, this.updated = false, this.released = false, this.canScroll = false, this.x = 0, this.y = 0, this.coords[0] = 0, this.coords[1] = 0, this.pointer[0] = 0, this.pointer[1] = 0, this.pointer[2] = 0, this.pointer[3] = 0, this.velocity = 0, this.angle = 0, this;
    }
    enable() {
      return this.enabled || (this.enabled = true, this.$target[xr] = true, this.$target.classList.remove("is-disabled"), this.touchActionStyles = ji(this.$trigger, {
        touchAction: this.disabled[0] ? "pan-x" : this.disabled[1] ? "pan-y" : "none"
      }), this.$trigger.addEventListener("pointerdown", this), this.$trigger.addEventListener("mouseenter", this)), this;
    }
    disable() {
      return this.enabled = false, this.grabbed = false, this.dragged = false, this.updated = false, this.released = false, this.canScroll = false, this.$target[xr] = false, this.touchActionStyles.revert(), this.triggerStyles && (this.triggerStyles.revert(), this.triggerStyles = null), this.bodyStyles && (this.bodyStyles.revert(), this.bodyStyles = null), this.targetStyles && (this.targetStyles.revert(), this.targetStyles = null), Rs(this.scroll), this.updateTicker.pause(), this.$target.classList.add("is-disabled"), this.$trigger.removeEventListener("pointerdown", this), this.$trigger.removeEventListener("mouseenter", this), At.removeEventListener("pointermove", this), At.removeEventListener("pointerup", this), At.removeEventListener("pointercancel", this), re.removeEventListener("selectstart", this), this;
    }
    revert() {
      return this.reset(), this.disable(), this.$target.classList.remove("is-disabled"), this.updateTicker.revert(), this;
    }
    handleEvent(t) {
      switch (t.type) {
        case "pointerdown":
          this.handleDown(t);
          break;
        case "pointermove":
          this.handleMove(t);
          break;
        case "pointerup":
          this.handleUp();
          break;
        case "pointercancel":
          this.handleUp();
          break;
        case "mouseenter":
          this.handleHover();
          break;
        case "selectstart":
          t.preventDefault();
          break;
      }
    }
  }
  class tg {
    constructor(t = {}) {
      Y.scope && Y.scope.revertibles.push(this);
      const e = Ue(t.root), i = t.defaults, n = Y.defaults, r = t.mediaQueries;
      if (this.defaults = i ? Qs(i, n) : n, this.root = e[0] || At, this.constructors = [], this.revertConstructors = [], this.revertibles = [], this.methods = {}, this.matches = {}, this.mediaQueryLists = {}, this.data = {}, r) for (let o in r) {
        const a = re.matchMedia(r[o]);
        this.mediaQueryLists[o] = a, a.addEventListener("change", this);
      }
    }
    execute(t) {
      let e = Y.scope, i = Y.root, n = Y.defaults;
      Y.scope = this, Y.root = this.root, Y.defaults = this.defaults;
      const r = this.mediaQueryLists;
      for (let a in r) this.matches[a] = r[a].matches;
      const o = t(this);
      return Y.scope = e, Y.root = i, Y.defaults = n, o;
    }
    refresh() {
      return this.execute(() => {
        let t = this.revertibles.length, e = this.revertConstructors.length;
        for (; t--; ) this.revertibles[t].revert();
        for (; e--; ) this.revertConstructors[e](this);
        this.revertibles.length = 0, this.revertConstructors.length = 0, this.constructors.forEach((i) => {
          const n = i(this);
          n && this.revertConstructors.push(n);
        });
      }), this;
    }
    add(t, e) {
      if (ui(t)) {
        const i = t;
        this.constructors.push(i), this.execute(() => {
          const n = i(this);
          n && this.revertConstructors.push(n);
        });
      } else this.methods[t] = (...i) => this.execute(() => e(...i));
      return this;
    }
    handleEvent(t) {
      switch (t.type) {
        case "change":
          this.refresh();
          break;
      }
    }
    revert() {
      const t = this.revertibles, e = this.revertConstructors, i = this.mediaQueryLists;
      let n = t.length, r = e.length;
      for (; n--; ) t[n].revert();
      for (; r--; ) e[r](this);
      for (let o in i) i[o].removeEventListener("change", this);
      t.length = 0, e.length = 0, this.constructors.length = 0, this.matches = {}, this.methods = {}, this.mediaQueryLists = {}, this.data = {};
    }
  }
  const eg = (s) => new dn(s, null, 0).init(), ig = (s, t) => new fn(s, t, null, 0, false).init(), sg = (s) => new jm(s).init(), ng = (s, t) => new ah(s, t), rg = (s, t) => new Jm(s, t), og = (s) => new tg(s);
  qi && (re.AnimeJS || (re.AnimeJS = []), re.AnimeJS.push({
    version: "4.0.0-beta.102",
    engine: gt
  }), At.addEventListener("visibilitychange", () => gt.suspendWhenHidden ? At.hidden ? gt.suspend() : gt.resume() : 0));
  (function() {
    function s() {
      for (var i = arguments.length, n = 0; n < i; n++) {
        var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        r.nodeType === 1 || r.nodeType === 11 ? this.appendChild(r) : this.appendChild(document.createTextNode(String(r)));
      }
    }
    function t() {
      for (; this.lastChild; ) this.removeChild(this.lastChild);
      arguments.length && this.append.apply(this, arguments);
    }
    function e() {
      for (var i = this.parentNode, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
      var a = r.length;
      if (i) for (a || i.removeChild(this); a--; ) {
        var l = r[a];
        typeof l != "object" ? l = this.ownerDocument.createTextNode(l) : l.parentNode && l.parentNode.removeChild(l), a ? i.insertBefore(this.previousSibling, l) : i.replaceChild(l, this);
      }
    }
    typeof Element < "u" && (Element.prototype.append || (Element.prototype.append = s, DocumentFragment.prototype.append = s), Element.prototype.replaceChildren || (Element.prototype.replaceChildren = t, DocumentFragment.prototype.replaceChildren = t), Element.prototype.replaceWith || (Element.prototype.replaceWith = e, DocumentFragment.prototype.replaceWith = e));
  })();
  function ag(s, t) {
    if (!(s instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function tl(s, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(s, i.key, i);
    }
  }
  function el(s, t, e) {
    return t && tl(s.prototype, t), e && tl(s, e), s;
  }
  function lg(s, t, e) {
    return t in s ? Object.defineProperty(s, t, {
      value: e,
      enumerable: true,
      configurable: true,
      writable: true
    }) : s[t] = e, s;
  }
  function il(s, t) {
    var e = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(s);
      t && (i = i.filter(function(n) {
        return Object.getOwnPropertyDescriptor(s, n).enumerable;
      })), e.push.apply(e, i);
    }
    return e;
  }
  function sl(s) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t] != null ? arguments[t] : {};
      t % 2 ? il(Object(e), true).forEach(function(i) {
        lg(s, i, e[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(e)) : il(Object(e)).forEach(function(i) {
        Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(e, i));
      });
    }
    return s;
  }
  function lh(s, t) {
    return hg(s) || dg(s, t) || ch(s, t) || pg();
  }
  function Vt(s) {
    return cg(s) || ug(s) || ch(s) || fg();
  }
  function cg(s) {
    if (Array.isArray(s)) return ro(s);
  }
  function hg(s) {
    if (Array.isArray(s)) return s;
  }
  function ug(s) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(s)) return Array.from(s);
  }
  function dg(s, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(s)))) {
      var e = [], i = true, n = false, r = void 0;
      try {
        for (var o = s[Symbol.iterator](), a; !(i = (a = o.next()).done) && (e.push(a.value), !(t && e.length === t)); i = true) ;
      } catch (l) {
        n = true, r = l;
      } finally {
        try {
          !i && o.return != null && o.return();
        } finally {
          if (n) throw r;
        }
      }
      return e;
    }
  }
  function ch(s, t) {
    if (s) {
      if (typeof s == "string") return ro(s, t);
      var e = Object.prototype.toString.call(s).slice(8, -1);
      if (e === "Object" && s.constructor && (e = s.constructor.name), e === "Map" || e === "Set") return Array.from(s);
      if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ro(s, t);
    }
  }
  function ro(s, t) {
    (t == null || t > s.length) && (t = s.length);
    for (var e = 0, i = new Array(t); e < t; e++) i[e] = s[e];
    return i;
  }
  function fg() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function pg() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Ti(s, t) {
    return Object.getOwnPropertyNames(Object(s)).reduce(function(e, i) {
      var n = Object.getOwnPropertyDescriptor(Object(s), i), r = Object.getOwnPropertyDescriptor(Object(t), i);
      return Object.defineProperty(e, i, r || n);
    }, {});
  }
  function pn(s) {
    return typeof s == "string";
  }
  function Ko(s) {
    return Array.isArray(s);
  }
  function wn() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Ti(s), e;
    return t.types !== void 0 ? e = t.types : t.split !== void 0 && (e = t.split), e !== void 0 && (t.types = (pn(e) || Ko(e) ? String(e) : "").split(",").map(function(i) {
      return String(i).trim();
    }).filter(function(i) {
      return /((line)|(word)|(char))/i.test(i);
    })), (t.absolute || t.position) && (t.absolute = t.absolute || /absolute/.test(s.position)), t;
  }
  function Qo(s) {
    var t = pn(s) || Ko(s) ? String(s) : "";
    return {
      none: !t,
      lines: /line/i.test(t),
      words: /word/i.test(t),
      chars: /char/i.test(t)
    };
  }
  function dr(s) {
    return s !== null && typeof s == "object";
  }
  function mg(s) {
    return dr(s) && /^(1|3|11)$/.test(s.nodeType);
  }
  function gg(s) {
    return typeof s == "number" && s > -1 && s % 1 === 0;
  }
  function _g(s) {
    return dr(s) && gg(s.length);
  }
  function Ii(s) {
    return Ko(s) ? s : s == null ? [] : _g(s) ? Array.prototype.slice.call(s) : [
      s
    ];
  }
  function nl(s) {
    var t = s;
    return pn(s) && (/^(#[a-z]\w+)$/.test(s.trim()) ? t = document.getElementById(s.trim().slice(1)) : t = document.querySelectorAll(s)), Ii(t).reduce(function(e, i) {
      return [].concat(Vt(e), Vt(Ii(i).filter(mg)));
    }, []);
  }
  var vg = Object.entries, Gn = "_splittype", Se = {}, yg = 0;
  function Ee(s, t, e) {
    if (!dr(s)) return console.warn("[data.set] owner is not an object"), null;
    var i = s[Gn] || (s[Gn] = ++yg), n = Se[i] || (Se[i] = {});
    return e === void 0 ? t && Object.getPrototypeOf(t) === Object.prototype && (Se[i] = sl(sl({}, n), t)) : t !== void 0 && (n[t] = e), e;
  }
  function wi(s, t) {
    var e = dr(s) ? s[Gn] : null, i = e && Se[e] || {};
    return i;
  }
  function hh(s) {
    var t = s && s[Gn];
    t && (delete s[t], delete Se[t]);
  }
  function Sg() {
    Object.keys(Se).forEach(function(s) {
      delete Se[s];
    });
  }
  function bg() {
    vg(Se).forEach(function(s) {
      var t = lh(s, 2), e = t[0], i = t[1], n = i.isRoot, r = i.isSplit;
      (!n || !r) && (Se[e] = null, delete Se[e]);
    });
  }
  function Tg(s) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ", e = s ? String(s) : "";
    return e.trim().replace(/\s+/g, " ").split(t);
  }
  var Zo = "\\ud800-\\udfff", uh = "\\u0300-\\u036f\\ufe20-\\ufe23", dh = "\\u20d0-\\u20f0", fh = "\\ufe0e\\ufe0f", wg = "[".concat(Zo, "]"), oo = "[".concat(uh).concat(dh, "]"), ao = "\\ud83c[\\udffb-\\udfff]", Ag = "(?:".concat(oo, "|").concat(ao, ")"), ph = "[^".concat(Zo, "]"), mh = "(?:\\ud83c[\\udde6-\\uddff]){2}", gh = "[\\ud800-\\udbff][\\udc00-\\udfff]", _h = "\\u200d", vh = "".concat(Ag, "?"), yh = "[".concat(fh, "]?"), Lg = "(?:" + _h + "(?:" + [
    ph,
    mh,
    gh
  ].join("|") + ")" + yh + vh + ")*", Eg = yh + vh + Lg, Og = "(?:".concat([
    "".concat(ph).concat(oo, "?"),
    oo,
    mh,
    gh,
    wg
  ].join("|"), `
)`), xg = RegExp("".concat(ao, "(?=").concat(ao, ")|").concat(Og).concat(Eg), "g"), Mg = [
    _h,
    Zo,
    uh,
    dh,
    fh
  ], Cg = RegExp("[".concat(Mg.join(""), "]"));
  function Pg(s) {
    return s.split("");
  }
  function Sh(s) {
    return Cg.test(s);
  }
  function Dg(s) {
    return s.match(xg) || [];
  }
  function kg(s) {
    return Sh(s) ? Dg(s) : Pg(s);
  }
  function Rg(s) {
    return s == null ? "" : String(s);
  }
  function Ig(s) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return s = Rg(s), s && pn(s) && !t && Sh(s) ? kg(s) : s.split(t);
  }
  function lo(s, t) {
    var e = document.createElement(s);
    return t && Object.keys(t).forEach(function(i) {
      var n = t[i], r = pn(n) ? n.trim() : n;
      r === null || r === "" || (i === "children" ? e.append.apply(e, Vt(Ii(r))) : e.setAttribute(i, r));
    }), e;
  }
  var Jo = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: [
      "lines",
      "words",
      "chars"
    ],
    absolute: false,
    tagName: "div"
  };
  function Ng(s, t) {
    t = Ti(Jo, t);
    var e = Qo(t.types), i = t.tagName, n = s.nodeValue, r = document.createDocumentFragment(), o = [], a = [];
    return /^\s/.test(n) && r.append(" "), o = Tg(n).reduce(function(l, c, h, d) {
      var f, p;
      return e.chars && (p = Ig(c).map(function(m) {
        var u = lo(i, {
          class: "".concat(t.splitClass, " ").concat(t.charClass),
          style: "display: inline-block;",
          children: m
        });
        return Ee(u, "isChar", true), a = [].concat(Vt(a), [
          u
        ]), u;
      })), e.words || e.lines ? (f = lo(i, {
        class: "".concat(t.wordClass, " ").concat(t.splitClass),
        style: "display: inline-block; ".concat(e.words && t.absolute ? "position: relative;" : ""),
        children: e.chars ? p : c
      }), Ee(f, {
        isWord: true,
        isWordStart: true,
        isWordEnd: true
      }), r.appendChild(f)) : p.forEach(function(m) {
        r.appendChild(m);
      }), h < d.length - 1 && r.append(" "), e.words ? l.concat(f) : l;
    }, []), /\s$/.test(n) && r.append(" "), s.replaceWith(r), {
      words: o,
      chars: a
    };
  }
  function bh(s, t) {
    var e = s.nodeType, i = {
      words: [],
      chars: []
    };
    if (!/(1|3|11)/.test(e)) return i;
    if (e === 3 && /\S/.test(s.nodeValue)) return Ng(s, t);
    var n = Ii(s.childNodes);
    if (n.length && (Ee(s, "isSplit", true), !wi(s).isRoot)) {
      s.style.display = "inline-block", s.style.position = "relative";
      var r = s.nextSibling, o = s.previousSibling, a = s.textContent || "", l = r ? r.textContent : " ", c = o ? o.textContent : " ";
      Ee(s, {
        isWordEnd: /\s$/.test(a) || /^\s/.test(l),
        isWordStart: /^\s/.test(a) || /\s$/.test(c)
      });
    }
    return n.reduce(function(h, d) {
      var f = bh(d, t), p = f.words, m = f.chars;
      return {
        words: [].concat(Vt(h.words), Vt(p)),
        chars: [].concat(Vt(h.chars), Vt(m))
      };
    }, i);
  }
  function Fg(s, t, e, i) {
    if (!e.absolute) return {
      top: t ? s.offsetTop : null
    };
    var n = s.offsetParent, r = lh(i, 2), o = r[0], a = r[1], l = 0, c = 0;
    if (n && n !== document.body) {
      var h = n.getBoundingClientRect();
      l = h.x + o, c = h.y + a;
    }
    var d = s.getBoundingClientRect(), f = d.width, p = d.height, m = d.x, u = d.y, g = u + a - c, v = m + o - l;
    return {
      width: f,
      height: p,
      top: g,
      left: v
    };
  }
  function Th(s) {
    wi(s).isWord ? (hh(s), s.replaceWith.apply(s, Vt(s.childNodes))) : Ii(s.children).forEach(function(t) {
      return Th(t);
    });
  }
  var qg = function() {
    return document.createDocumentFragment();
  };
  function Vg(s, t, e) {
    var i = Qo(t.types), n = t.tagName, r = s.getElementsByTagName("*"), o = [], a = [], l = null, c, h, d, f = [], p = s.parentElement, m = s.nextElementSibling, u = qg(), g = window.getComputedStyle(s), v = g.textAlign, y = parseFloat(g.fontSize), _ = y * 0.2;
    return t.absolute && (d = {
      left: s.offsetLeft,
      top: s.offsetTop,
      width: s.offsetWidth
    }, h = s.offsetWidth, c = s.offsetHeight, Ee(s, {
      cssWidth: s.style.width,
      cssHeight: s.style.height
    })), Ii(r).forEach(function(T) {
      var S = T.parentElement === s, w = Fg(T, S, t, e), b = w.width, A = w.height, L = w.top, x = w.left;
      /^br$/i.test(T.nodeName) || (i.lines && S && ((l === null || L - l >= _) && (l = L, o.push(a = [])), a.push(T)), t.absolute && Ee(T, {
        top: L,
        left: x,
        width: b,
        height: A
      }));
    }), p && p.removeChild(s), i.lines && (f = o.map(function(T) {
      var S = lo(n, {
        class: "".concat(t.splitClass, " ").concat(t.lineClass),
        style: "display: block; text-align: ".concat(v, "; width: 100%;")
      });
      Ee(S, "isLine", true);
      var w = {
        height: 0,
        top: 1e4
      };
      return u.appendChild(S), T.forEach(function(b, A, L) {
        var x = wi(b), E = x.isWordEnd, O = x.top, M = x.height, D = L[A + 1];
        w.height = Math.max(w.height, M), w.top = Math.min(w.top, O), S.appendChild(b), E && wi(D).isWordStart && S.append(" ");
      }), t.absolute && Ee(S, {
        height: w.height,
        top: w.top
      }), S;
    }), i.words || Th(u), s.replaceChildren(u)), t.absolute && (s.style.width = "".concat(s.style.width || h, "px"), s.style.height = "".concat(c, "px"), Ii(r).forEach(function(T) {
      var S = wi(T), w = S.isLine, b = S.top, A = S.left, L = S.width, x = S.height, E = wi(T.parentElement), O = !w && E.isLine;
      T.style.top = "".concat(O ? b - E.top : b, "px"), T.style.left = w ? "".concat(d.left, "px") : "".concat(A - (O ? d.left : 0), "px"), T.style.height = "".concat(x, "px"), T.style.width = w ? "".concat(d.width, "px") : "".concat(L, "px"), T.style.position = "absolute";
    })), p && (m ? p.insertBefore(s, m) : p.appendChild(s)), f;
  }
  var Ui = Ti(Jo, {}), Bg = function() {
    el(s, null, [
      {
        key: "clearData",
        value: function() {
          Sg();
        }
      },
      {
        key: "setDefaults",
        value: function(e) {
          return Ui = Ti(Ui, wn(e)), Jo;
        }
      },
      {
        key: "revert",
        value: function(e) {
          nl(e).forEach(function(i) {
            var n = wi(i), r = n.isSplit, o = n.html, a = n.cssWidth, l = n.cssHeight;
            r && (i.innerHTML = o, i.style.width = a || "", i.style.height = l || "", hh(i));
          });
        }
      },
      {
        key: "create",
        value: function(e, i) {
          return new s(e, i);
        }
      },
      {
        key: "data",
        get: function() {
          return Se;
        }
      },
      {
        key: "defaults",
        get: function() {
          return Ui;
        },
        set: function(e) {
          Ui = Ti(Ui, wn(e));
        }
      }
    ]);
    function s(t, e) {
      ag(this, s), this.isSplit = false, this.settings = Ti(Ui, wn(e)), this.elements = nl(t), this.split();
    }
    return el(s, [
      {
        key: "split",
        value: function(e) {
          var i = this;
          this.revert(), this.elements.forEach(function(o) {
            Ee(o, "html", o.innerHTML);
          }), this.lines = [], this.words = [], this.chars = [];
          var n = [
            window.pageXOffset,
            window.pageYOffset
          ];
          e !== void 0 && (this.settings = Ti(this.settings, wn(e)));
          var r = Qo(this.settings.types);
          r.none || (this.elements.forEach(function(o) {
            Ee(o, "isRoot", true);
            var a = bh(o, i.settings), l = a.words, c = a.chars;
            i.words = [].concat(Vt(i.words), Vt(l)), i.chars = [].concat(Vt(i.chars), Vt(c));
          }), this.elements.forEach(function(o) {
            if (r.lines || i.settings.absolute) {
              var a = Vg(o, i.settings, n);
              i.lines = [].concat(Vt(i.lines), Vt(a));
            }
          }), this.isSplit = true, window.scrollTo(n[0], n[1]), bg());
        }
      },
      {
        key: "revert",
        value: function() {
          this.isSplit && (this.lines = null, this.words = null, this.chars = null, this.isSplit = false), s.revert(this.elements);
        }
      }
    ]), s;
  }();
  window.history.scrollRestoration && (window.history.scrollRestoration = "manual");
  document.documentElement.classList.add("lenis-stopped");
  let ve = Ah();
  ve.base = "";
  ve.first = 1;
  const Ke = new URL(window.location.href);
  Ke.searchParams.has("design") && (console.log("design"), Lh());
  Ke.searchParams.has("preview") && (console.log("preview"), ve.preview = 1, ve.previewnonce = Ke.searchParams.has("preview_nonce") ? Ke.searchParams.get("preview_nonce") : false, ve.previewid = Ke.searchParams.has("preview_id") ? Ke.searchParams.get("preview_id") : false, ve.pageid = Ke.searchParams.has("page_id") ? Ke.searchParams.get("page_id") : false);
  window.gsap = Wn;
  Wn.ticker.remove(Wn.updateRoot);
  window.SplitType = Bg;
  const zg = {
    animate: ig,
    createTimer: eg,
    createTimeline: sg,
    createDraggable: rg,
    createAnimatable: ng,
    createScope: og,
    engine: gt,
    eases: Ze,
    stagger: Xm,
    utils: oh,
    svg: Em
  };
  window.anime = zg;
  window.anime.engine.timeUnit = "s";
  const wh = document.createElement("script");
  wh.src = "https://js.hsforms.net/forms/v2.js";
  document.body.appendChild(wh);
  const Rr = document.querySelector("#videoLow"), Ug = new Promise((s) => {
    Rr.play().then(() => {
      Rr.remove(), ve.lowbat = 1, s(true);
    }).catch((t) => {
      ve.lowbat = 0, Rr.remove(), s(false);
    });
  });
  await Promise.all([
    Ug
  ]).then((s) => {
    ve.lowbat = s[0], ve.first = 0, console.log(s);
  });
  new wt(ve);
})();
