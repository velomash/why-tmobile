window.Modernizr = function(a, b, c) {
    function C(a) {
      j.cssText = a
    }

    function D(a, b) {
      return C(n.join(a + ";") + (b || ""))
    }

    function E(a, b) {
      return typeof a === b
    }

    function F(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function G(a, b) {
      for (var d in a) {
        var e = a[d];
        if (!F(e, "-") && j[e] !== c) {
          return b == "pfx" ? e : !0
        }
      }
      return !1
    }

    function H(a, b, d) {
      for (var e in a) {
        var f = b[a[e]];
        if (f !== c) {
          return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
        }
      }
      return !1
    }

    function I(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + p.join(d + " ") + d).split(" ");
      return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
    }

    function J() {
      e.input = function(c) {
        for (var d = 0, e = c.length; d < e; d++) {
          u[c[d]] = c[d] in k
        }
        return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u
      }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
        for (var d = 0, e, f, h, i = a.length; d < i; d++) {
          k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e
        }
        return t
      }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.6.2",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k = b.createElement("input"),
      l = ":)",
      m = {}.toString,
      n = " -webkit- -moz- -o- -ms- ".split(" "),
      o = "Webkit Moz O ms",
      p = o.split(" "),
      q = o.toLowerCase().split(" "),
      r = {
        svg: "http://www.w3.org/2000/svg"
      },
      s = {},
      t = {},
      u = {},
      v = [],
      w = v.slice,
      x, y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"),
          m = b.body,
          n = m || b.createElement("body");
        if (parseInt(d, 10)) {
          while (d--) {
            j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j)
          }
        }
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
      },
      z = function() {
        function d(d, e) {
          e = e || b.createElement(a[d] || "div"), d = "on" + d;
          var f = d in e;
          return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
        }
        var a = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img"
        };
        return d
      }(),
      A = {}.hasOwnProperty,
      B;
    !E(A, "undefined") && !E(A.call, "undefined") ? B = function(a, b) {
      return A.call(a, b)
    } : B = function(a, b) {
      return b in a && E(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
      var c = this;
      if (typeof c != "function") {
        throw new TypeError
      }
      var d = w.call(arguments, 1),
        e = function() {
          if (this instanceof e) {
            var a = function() {};
            a.prototype = c.prototype;
            var f = new a,
              g = c.apply(f, d.concat(w.call(arguments)));
            return Object(g) === g ? g : f
          }
          return c.apply(b, d.concat(w.call(arguments)))
        };
      return e
    }), s.flexbox = function() {
      return I("flexWrap")
    }, s.flexboxlegacy = function() {
      return I("boxDirection")
    }, s.canvas = function() {
      var a = b.createElement("canvas");
      return !!a.getContext && !!a.getContext("2d")
    }, s.canvastext = function() {
      return !!e.canvas && !!E(b.createElement("canvas").getContext("2d").fillText, "function")
    }, s.webgl = function() {
      return !!a.WebGLRenderingContext
    }, s.touch = function() {
      var c;
      return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
        c = a.offsetTop === 9
      }), c
    }, s.geolocation = function() {
      return undefined
    }, s.postmessage = function() {
      return !!a.postMessage
    }, s.websqldatabase = function() {
      return !!a.openDatabase
    }, s.indexedDB = function() {
      return !!I("indexedDB", a)
    }, s.hashchange = function() {
      return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, s.history = function() {
      return !!a.history && !!history.pushState
    }, s.draganddrop = function() {
      var a = b.createElement("div");
      return "draggable" in a || "ondragstart" in a && "ondrop" in a
    }, s.websockets = function() {
      return "WebSocket" in a || "MozWebSocket" in a
    }, s.rgba = function() {
      return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
    }, s.hsla = function() {
      return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
    }, s.multiplebgs = function() {
      return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
    }, s.backgroundsize = function() {
      return I("backgroundSize")
    }, s.borderimage = function() {
      return I("borderImage")
    }, s.borderradius = function() {
      return I("borderRadius")
    }, s.boxshadow = function() {
      return I("boxShadow")
    }, s.textshadow = function() {
      return b.createElement("div").style.textShadow === ""
    }, s.opacity = function() {
      return D("opacity:.55"), /^0.55$/.test(j.opacity)
    }, s.cssanimations = function() {
      return I("animationName")
    }, s.csscolumns = function() {
      return I("columnCount")
    }, s.cssgradients = function() {
      var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
      return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), F(j.backgroundImage, "gradient")
    }, s.cssreflections = function() {
      return I("boxReflect")
    }, s.csstransforms = function() {
      return !!I("transform")
    }, s.csstransforms3d = function() {
      var a = !!I("perspective");
      return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
        a = b.offsetLeft === 9 && b.offsetHeight === 3
      }), a
    }, s.csstransitions = function() {
      return I("transition")
    }, s.fontface = function() {
      var a;
      return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
        var e = b.getElementById("smodernizr"),
          f = e.sheet || e.styleSheet,
          g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
        a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
      }), a
    }, s.generatedcontent = function() {
      var a;
      return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
        a = b.offsetHeight >= 3
      }), a
    }, s.video = function() {
      var a = b.createElement("video"),
        c = !1;
      try {
        if (c = !!a.canPlayType) {
          c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        }
      } catch (d) {}
      return c
    }, s.audio = function() {
      var a = b.createElement("audio"),
        c = !1;
      try {
        if (c = !!a.canPlayType) {
          c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        }
      } catch (d) {}
      return c
    }, s.localstorage = function() {
      try {
        return localStorage.setItem(h, h), localStorage.removeItem(h), !0
      } catch (a) {
        return !1
      }
    }, s.sessionstorage = function() {
      try {
        return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
      } catch (a) {
        return !1
      }
    }, s.webworkers = function() {
      return !!a.Worker
    }, s.applicationcache = function() {
      return !!a.applicationCache
    }, s.svg = function() {
      return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
    }, s.inlinesvg = function() {
      var a = b.createElement("div");
      return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
    }, s.smil = function() {
      return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
    }, s.svgclippaths = function() {
      return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
    };
    for (var K in s) {
      B(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x))
    }
    return e.input || J(), e.addTest = function(a, b) {
      if (typeof a == "object") {
        for (var d in a) {
          B(a, d) && e.addTest(d, a[d])
        }
      } else {
        a = a.toLowerCase();
        if (e[a] !== c) {
          return e
        }
        b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
      }
      return e
    }, C(""), i = k = null, e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function(a) {
      return G([a])
    }, e.testAllProps = I, e.testStyles = y, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
  }(this, this.document),
  function(a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a)
    }

    function e(a) {
      return "string" == typeof a
    }

    function f() {}

    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function() {
        ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && m(function() {
            t.removeChild(l)
          }, 50);
          for (var d in y[c]) {
            y[c].hasOwnProperty(d) && y[c][d].onload()
          }
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
      1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
        k.call(this, r)
      }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
      var a = B;
      return a.loader = {
        load: j,
        i: 0
      }, a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
      },
      x = [],
      y = {},
      z = {
        timeout: function(a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      },
      A, B;
    B = function(a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
            url: c,
            origUrl: c,
            prefixes: a
          },
          e, f, g;
        for (f = 0; f < d; f++) {
          g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g))
        }
        for (f = 0; f < b; f++) {
          c = x[f](c)
        }
        return c
      }

      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
        })))
      }

      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) {
              c || (j = function() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l()
              }), g(a, j, b, 0, h)
            } else {
              if (Object(a) === a) {
                for (n in m = function() {
                    var b = 0,
                      c;
                    for (c in a) {
                      a.hasOwnProperty(c) && b++
                    }
                    return b
                  }(), a) {
                  a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                    var a = [].slice.call(arguments);
                    k.apply(this, a), l()
                  } : j[n] = function(a) {
                    return function() {
                      var b = [].slice.call(arguments);
                      a && a.apply(this, b), l()
                    }
                  }(k[n])), g(a[n], j, b, n, h))
                }
              }
            }
          } else {
            !c && l()
          }
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m, n;
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var i, j, l = this.yepnope.loader;
      if (e(a)) {
        g(a, 0, l, 0)
      } else {
        if (w(a)) {
          for (i = 0; i < a.length; i++) {
            j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l)
          }
        } else {
          Object(a) === a && h(a, l)
        }
      }
    }, B.addPrefix = function(a, b) {
      z[a] = b
    }, B.addFilter = function(a) {
      x.push(a)
    }, B.errorTimeout = 10000, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
      b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
      var k = b.createElement("script"),
        l, o, e = e || B.errorTimeout;
      k.src = a;
      for (o in d) {
        k.setAttribute(o, d[o])
      }
      c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
      }, m(function() {
        l || (l = 1, c(1))
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
      var e = b.createElement("link"),
        j, c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d) {
        e.setAttribute(j, d[j])
      }
      g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  };
showLog = true;

function log(m) {
  if (window.console && showLog) {
    console.log(m)
  }
}

function css_browser_selector(u) {
  var uaInfo = {},
    screens = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560],
    allScreens = screens.length,
    ua = u.toLowerCase(),
    is = function(t) {
      return RegExp(t, "i").test(ua)
    },
    version = function(p, n) {
      n = n.replace(".", "_");
      var i = n.indexOf("_"),
        ver = "";
      while (i > 0) {
        ver += " " + p + n.substring(0, i);
        i = n.indexOf("_", i + 1)
      }
      ver += " " + p + n;
      return ver
    },
    g = "gecko",
    w = "webkit",
    c = "chrome",
    f = "firefox",
    s = "safari",
    o = "opera",
    m = "mobile",
    a = "android",
    bb = "blackberry",
    lang = "lang_",
    dv = "device_",
    html = document.documentElement,
    b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d+)/.test(ua)) ? ("ie ie" + (/trident\/4\.0/.test(ua) ? "8" : RegExp.$1)) : is("firefox/") ? g + " " + f + (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? " " + f + RegExp.$2 + " " + f + RegExp.$2 + "_" + RegExp.$4 : "") : is("gecko/") ? g : is("opera") ? o + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? " " + o + RegExp.$2 + " " + o + RegExp.$2 + "_" + RegExp.$4 : (/opera(\s|\/)(\d+)\.(\d+)/.test(ua) ? " " + o + RegExp.$2 + " " + o + RegExp.$2 + "_" + RegExp.$3 : "")) : is("konqueror") ? "konqueror" : is("blackberry") ? (bb + (/Version\/(\d+)(\.(\d+)+)/i.test(ua) ? " " + bb + RegExp.$1 + " " + bb + RegExp.$1 + RegExp.$2.replace(".", "_") : (/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(ua) ? " " + bb + RegExp.$2 + (RegExp.$3 ? " " + bb + RegExp.$2 + RegExp.$3 : "") : ""))) : is("android") ? (a + (/Version\/(\d+)(\.(\d+))+/i.test(ua) ? " " + a + RegExp.$1 + " " + a + RegExp.$1 + RegExp.$2.replace(".", "_") : "") + (/Android (.+); (.+) Build/i.test(ua) ? " " + dv + ((RegExp.$2).replace(/ /g, "_")).replace(/-/g, "_") : "")) : is("chrome") ? w + " " + c + (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? " " + c + RegExp.$2 + ((RegExp.$4 > 0) ? " " + c + RegExp.$2 + "_" + RegExp.$4 : "") : "") : is("iron") ? w + " iron" : is("applewebkit/") ? (w + " " + s + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? " " + s + RegExp.$2 + " " + s + RegExp.$2 + RegExp.$3.replace(".", "_") : (/ Safari\/(\d+)/i.test(ua) ? ((RegExp.$1 == "419" || RegExp.$1 == "417" || RegExp.$1 == "416" || RegExp.$1 == "412") ? " " + s + "2_0" : RegExp.$1 == "312" ? " " + s + "1_3" : RegExp.$1 == "125" ? " " + s + "1_2" : RegExp.$1 == "85" ? " " + s + "1_0" : "") : ""))) : is("mozilla/") ? g : "", is("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk") ? m : "", is("j2me") ? "j2me" : is("ipad|ipod|iphone") ? ((/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(ua) ? "ios" + version("ios", RegExp.$2) : "") + " " + (/(ip(ad|od|hone))/gi.test(ua) ? RegExp.$1 : "")) : is("playbook") ? "playbook" : is("kindle|silk") ? "kindle" : is("playbook") ? "playbook" : is("mac") ? "mac" + (/mac os x ((\d+)[.|_](\d+))/.test(ua) ? (" mac" + (RegExp.$2) + " mac" + (RegExp.$1).replace(".", "_")) : "") : is("win") ? "win" + (is("windows nt 6.2") ? " win8" : is("windows nt 6.1") ? " win7" : is("windows nt 6.0") ? " vista" : is("windows nt 5.2") || is("windows nt 5.1") ? " win_xp" : is("windows nt 5.0") ? " win_2k" : is("windows nt 4.0") || is("WinNT4.0") ? " win_nt" : "") : is("freebsd") ? "freebsd" : (is("x11|linux")) ? "linux" : "", (/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(ua)) ? (lang + RegExp.$2).replace("-", "_") + (RegExp.$3 != "" ? (" " + lang + RegExp.$1).replace("-", "_") : "") : "", (is("ipad|iphone|ipod") && !is("safari")) ? "ipad_app" : ""];

  function screenSize() {
    var w = window.outerWidth || html.clientWidth;
    var h = window.outerHeight || html.clientHeight;
    uaInfo.orientation = ((w < h) ? "portrait" : "landscape");
    html.className = html.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "");
    for (var i = (allScreens - 1); i >= 0; i--) {
      if (w >= screens[i]) {
        uaInfo.maxw = screens[i];
        break
      }
    }
    widthClasses = "";
    for (var info in uaInfo) {
      widthClasses += " " + info + "_" + uaInfo[info]
    }
    html.className = (html.className + widthClasses);
    return widthClasses
  }
  window.onresize = screenSize;
  screenSize();
  var cssbs = (b.join(" ")) + " js ";
  html.className = (cssbs + html.className.replace(/\b(no[-|_]?)?js\b/g, "")).replace(/^ /, "").replace(/ +/g, " ");
  return cssbs
}
css_browser_selector(navigator.userAgent);
var alertFallback = false;
if (typeof console === "undefined" || typeof console.log === "undefined" || typeof console.debug === "undefined") {
  console = {};
  if (alertFallback) {
    console.log = function(msg) {
      alert(msg)
    };
    console.debug = function(msg) {
      alert(msg)
    }
  } else {
    console.log = function() {};
    console.debug = function() {}
  }
}
var flexsliderItemsWidth = function(parentWidth) {
  var itemWidth = 0;
  if (parentWidth > 934) {
    itemWidth = Math.floor(parentWidth / 5)
  } else {
    if (parentWidth > 720) {
      itemWidth = Math.floor(parentWidth / 4)
    } else {
      if (parentWidth > 646) {
        itemWidth = Math.floor(parentWidth / 3)
      } else {
        itemWidth = parentWidth
      }
    }
  }
  return itemWidth
};
$(function() {
  $(window).on("resize", function(e) {
    $(".flexslider:not(.short-carousel,.device-sliders,.compare-slider), .flexslider-deals").not(".compare-list .flexslider").each(function(e) {
      $this = $(this);
      if ($this.find(".slides li").length > 1) {
        var parentWidth = $this.parent().width();
        var itemWidth = flexsliderItemsWidth(parentWidth);
        if (parentWidth > 960) {
          $this.data("flexslider").setOpts({
            maxItems: 3,
            itemWidth: itemWidth
          })
        } else {
          if (parentWidth > 640) {
            $this.data("flexslider").setOpts({
              maxItems: 2,
              itemWidth: itemWidth
            })
          } else {
            $this.data("flexslider").setOpts({
              maxItems: 1,
              itemWidth: itemWidth
            })
          }
        }
      }
    })
  })
});
var isMobile = {
  Android: function() {
    return /Android/i.test(navigator.userAgent)
  },
  BlackBerry: function() {
    return /BlackBerry/i.test(navigator.userAgent)
  },
  iOS: function() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent)
  },
  Opera: function() {
    return /Opera Mini/i.test(navigator.userAgent)
  },
  Windows: function() {
    return /IEMobile/i.test(navigator.userAgent)
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
  }
};
if (isMobile.iOS()) {
  window.scrollTo(0, 1)
}
$(function() {
  $(".view-more-questions").find("a[data-target]").on("click", function(e) {
    if ($(this).hasClass("collapsed")) {
      return
    }
    $("html, body").animate({
      scrollTop: $(this).parents(".faq-display").offset().top - Clover.navigation.maxNavHeight - 5
    }, 500)
  })
});
var Clover = Clover || {};
Clover.isEditMode = function() {
  if (typeof CQ !== "undefined") {
    return CQ.WCM.isEditMode()
  } else {
    return false
  }
};
var Clover = Clover || {};
Clover.getBaseDomain = function() {
  var dom = location.hostname,
    domSplit, baseDom = dom;
  if (/\./.test(dom) && !/^[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}$/.test(dom)) {
    domSplit = dom.split(".");
    baseDom = (domSplit.length > 2) ? "." + domSplit[domSplit.length - 2] + "." + domSplit[domSplit.length - 1] : dom
  }
  return baseDom
};
var Clover = Clover || {};
Clover.coordinates = {};
Clover.coordinates.storeCookieName = "TMobileUSStore";
Clover.coordinates.locationCookieName = "TMobileUSLocation";
Clover.coordinates.locationDeniedCookieName = "TMobileUSLocationDenied";
Clover.coordinates.cookieOptions = {
  path: "/",
  domain: Clover.getBaseDomain(),
};
Clover.zipcode = "undefined";
Clover.stateCode = "undefined";
Clover.geoLookupRunning = false;
(function($) {
  $(function() {
    Clover.coordinates.clean = function() {
      $.removeCookie(Clover.coordinates.storeCookieName, Clover.coordinates.cookieOptions);
      $.removeCookie(Clover.coordinates.locationCookieName, Clover.coordinates.cookieOptions);
      Clover.zipcode = "undefined";
      Clover.stateCode = "undefined"
    };
    Clover.coordinates.handleGeoErrors = function(error) {
      Clover.geoLookupRunning = false;
      Clover.zipcode = "undefined";
      if (console !== undefined) {
        switch (error.code) {
          case error.TIMEOUT:
            console.log("Geo Lookup Timeout");
            $.cookie(Clover.coordinates.locationDeniedCookieName, "true", Clover.coordinates.cookieOptions);
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Geo Position Unavailable");
            break;
          case error.PERMISSION_DENIED:
            console.log("Geo Lookup Permission denied");
            $.cookie(Clover.coordinates.locationDeniedCookieName, "true", Clover.coordinates.cookieOptions);
            break;
          case error.UNKNOWN_ERROR:
            console.log("Geo Lookup Unknown error");
            break
        }
      }
    };
    Clover.coordinates.handleGeoErrorsHighAccuracy = function(error) {
      if (console !== undefined) {
        switch (error.code) {
          case error.TIMEOUT:
            var geoAllow = ($.cookie(Clover.coordinates.locationDeniedCookieName)) ? false : true;
            Clover.zipcode = "pending";
            if (false) {
              var options = {
                maximumAge: 600000,
                timeout: 20000,
                enableHighAccuracy: false
              };
              console.log("getLocation: low accuracy");
              navigator.geolocation.getCurrentPosition(Clover.coordinates.storePosition, Clover.coordinates.handleGeoErrors, options)
            }
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Geo Position Unavailable");
            Clover.zipcode = "undefined";
            break;
          case error.PERMISSION_DENIED:
            console.log("Geo Lookup Permission denied");
            $.cookie(Clover.coordinates.locationDeniedCookieName, "true", Clover.coordinates.cookieOptions);
            Clover.zipcode = "undefined";
            break;
          case error.UNKNOWN_ERROR:
            console.log("Geo Lookup Unknown error");
            Clover.zipcode = "undefined";
            break
        }
      }
    };
    Clover.coordinates.getLocation = function() {
      var geoAllow = ($.cookie(Clover.coordinates.locationDeniedCookieName)) ? false : true;
      if (false) {
        Clover.geoLookupRunning = true;
        Clover.zipcode = "pending";
        var options = {
          maximumAge: 60000,
          timeout: 6000,
          enableHighAccuracy: true
        };
        navigator.geolocation.getCurrentPosition(Clover.coordinates.storePosition, Clover.coordinates.handleGeoErrorsHighAccuracy, options)
      }
    };
    Clover.coordinates.zipData = {};
    Clover.coordinates.getZipFromLocationService = function(lat, lon) {
      var latValue = lat,
        longValue = lon;
      if (!latValue || !longValue) {
        return
      }
      $.ajax({
        type: "get",
        url: "/srvspub/latlong2zipcode",
        data: {
          lat: latValue,
          "long": longValue
        },
        dataType: "json",
        success: function(data) {
          if (data.zipCode || data.stateCode) {
            Clover.coordinates.zipData = data;
            var zipCode = data.zipCode,
              stateCode = data.stateCode;
            Clover.coordinates.storeZipCookie(zipCode);
            Clover.zipcode = zipCode;
            Clover.stateCode = stateCode;
            $.cookie(Clover.coordinates.locationCookieName, "latitude=" + Clover.coordinates.latitude + "&longitude=" + Clover.coordinates.longitude + "&ZIP=" + Clover.zipcode + "&STATE=" + Clover.stateCode, Clover.coordinates.cookieOptions)
          }
        },
        error: function(message) {}
      })
    };
    Clover.coordinates.setLatLongFromLocationCookie = function() {
      Clover.coordinates.latitude = Clover.getQuerystringVal($.cookie(Clover.coordinates.locationCookieName), "latitude");
      Clover.coordinates.longitude = Clover.getQuerystringVal($.cookie(Clover.coordinates.locationCookieName), "longitude")
    };
    Clover.coordinates.setZipFromLocationCookie = function() {
      var locationCookie = $.cookie(Clover.coordinates.locationCookieName),
        zipcode = false;
      if (locationCookie !== null) {
        zipcode = Clover.getQuerystringVal($.cookie(Clover.coordinates.locationCookieName), "ZIP");
        if (zipcode !== false && zipcode !== "undefined") {
          Clover.zipcode = zipcode
        }
      }
    };
    Clover.coordinates.setStateFromLocationCookie = function() {
      var locationCookie = $.cookie(Clover.coordinates.locationCookieName),
        stateCode = false;
      if (locationCookie !== null) {
        stateCode = Clover.getQuerystringVal($.cookie(Clover.coordinates.locationCookieName), "STATE");
        if (stateCode !== false && stateCode !== "undefined") {
          Clover.stateCode = stateCode
        }
      }
    };
    Clover.coordinates.setZipFromStoreCookie = function() {
      var storeCookie = $.cookie(Clover.coordinates.storeCookieName),
        cParts, zip;
      if (storeCookie !== null) {
        cParts = storeCookie.split("&");
        cParts.forEach(function(part) {
          if (/zip=/i.test(part)) {
            zip = part.split("=")[1];
            if (/^[\d]{5}$/.test(zip)) {
              Clover.zipcode = zip
            }
          }
        })
      }
    };
    Clover.coordinates.init = function() {
      Clover.coordinates.setZip();
      Clover.coordinates.getState()
    };
    Clover.coordinates.storePosition = function(position) {
      Clover.coordinates.latitude = position.coords.latitude;
      Clover.coordinates.longitude = position.coords.longitude;
      Clover.coordinates.getZipFromLocationService(Clover.coordinates.latitude, Clover.coordinates.longitude)
    };
    Clover.coordinates.storeZipCookie = function(s) {
      Clover.zipcode = s;
      $.cookie(Clover.coordinates.locationCookieName, "ZIP=" + s, Clover.coordinates.cookieOptions)
    };
    Clover.coordinates.getState = function() {
      if (Clover.stateCode === "undefined") {
        Clover.coordinates.setStateFromLocationCookie()
      }
      return Clover.stateCode
    };
    Clover.coordinates.getZip = function() {
      return Clover.zipcode
    };
    Clover.coordinates.setZip = function() {
      if (Clover.zipcode === "undefined") {
        if ($.cookie(Clover.coordinates.storeCookieName) !== null) {
          Clover.coordinates.setZipFromStoreCookie()
        } else {
          if ($.cookie(Clover.coordinates.locationCookieName) !== null) {
            Clover.coordinates.setZipFromLocationCookie()
          } else {
            Clover.coordinates.getLocation()
          }
        }
      } else {
        if (Clover.zipcode === "pending") {
          setTimeout(Clover.coordinates.setZip, 25)
        }
      }
    };
    Clover.coordinates.getLatitude = function() {
      if (Clover.coordinates.latitude) {
        return Clover.coordinates.latitude
      } else {
        Clover.coordinates.setLatLongFromLocationCookie();
        return Clover.coordinates.latitude
      }
    };
    Clover.coordinates.getLongitude = function() {
      if (Clover.coordinates.longitude) {
        return Clover.coordinates.longitude
      } else {
        Clover.coordinates.setLatLongFromLocationCookie();
        return Clover.coordinates.longitude
      }
    };
    if (!Clover.isEditMode()) {
      Clover.coordinates.init()
    }
  })
})(window.jQuery);
(function() {
  var n = this,
    t = n._,
    r = {},
    e = Array.prototype,
    u = Object.prototype,
    i = Function.prototype,
    a = e.push,
    o = e.slice,
    c = e.concat,
    l = u.toString,
    f = u.hasOwnProperty,
    s = e.forEach,
    p = e.map,
    v = e.reduce,
    h = e.reduceRight,
    g = e.filter,
    d = e.every,
    m = e.some,
    y = e.indexOf,
    b = e.lastIndexOf,
    x = Array.isArray,
    _ = Object.keys,
    j = i.bind,
    w = function(n) {
      return n instanceof w ? n : this instanceof w ? (this._wrapped = n, void 0) : new w(n)
    };
  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w, w.VERSION = "1.4.3";
  var A = w.each = w.forEach = function(n, t, e) {
    if (null != n) {
      if (s && n.forEach === s) {
        n.forEach(t, e)
      } else {
        if (n.length === +n.length) {
          for (var u = 0, i = n.length; i > u; u++) {
            if (t.call(e, n[u], u, n) === r) {
              return
            }
          }
        } else {
          for (var a in n) {
            if (w.has(n, a) && t.call(e, n[a], a, n) === r) {
              return
            }
          }
        }
      }
    }
  };
  w.map = w.collect = function(n, t, r) {
    var e = [];
    return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
      e[e.length] = t.call(r, n, u, i)
    }), e)
  };
  var O = "Reduce of empty array with no initial value";
  w.reduce = w.foldl = w.inject = function(n, t, r, e) {
    var u = arguments.length > 2;
    if (null == n && (n = []), v && n.reduce === v) {
      return e && (t = w.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t)
    }
    if (A(n, function(n, i, a) {
        u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
      }), !u) {
      throw new TypeError(O)
    }
    return r
  }, w.reduceRight = w.foldr = function(n, t, r, e) {
    var u = arguments.length > 2;
    if (null == n && (n = []), h && n.reduceRight === h) {
      return e && (t = w.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t)
    }
    var i = n.length;
    if (i !== +i) {
      var a = w.keys(n);
      i = a.length
    }
    if (A(n, function(o, c, l) {
        c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
      }), !u) {
      throw new TypeError(O)
    }
    return r
  }, w.find = w.detect = function(n, t, r) {
    var e;
    return E(n, function(n, u, i) {
      return t.call(r, n, u, i) ? (e = n, !0) : void 0
    }), e
  }, w.filter = w.select = function(n, t, r) {
    var e = [];
    return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
      t.call(r, n, u, i) && (e[e.length] = n)
    }), e)
  }, w.reject = function(n, t, r) {
    return w.filter(n, function(n, e, u) {
      return !t.call(r, n, e, u)
    }, r)
  }, w.every = w.all = function(n, t, e) {
    t || (t = w.identity);
    var u = !0;
    return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
      return (u = u && t.call(e, n, i, a)) ? void 0 : r
    }), !!u)
  };
  var E = w.some = w.any = function(n, t, e) {
    t || (t = w.identity);
    var u = !1;
    return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
      return u || (u = t.call(e, n, i, a)) ? r : void 0
    }), !!u)
  };
  w.contains = w.include = function(n, t) {
    return null == n ? !1 : y && n.indexOf === y ? -1 != n.indexOf(t) : E(n, function(n) {
      return n === t
    })
  }, w.invoke = function(n, t) {
    var r = o.call(arguments, 2);
    return w.map(n, function(n) {
      return (w.isFunction(t) ? t : n[t]).apply(n, r)
    })
  }, w.pluck = function(n, t) {
    return w.map(n, function(n) {
      return n[t]
    })
  }, w.where = function(n, t) {
    return w.isEmpty(t) ? [] : w.filter(n, function(n) {
      for (var r in t) {
        if (t[r] !== n[r]) {
          return !1
        }
      }
      return !0
    })
  }, w.max = function(n, t, r) {
    if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) {
      return Math.max.apply(Math, n)
    }
    if (!t && w.isEmpty(n)) {
      return -1 / 0
    }
    var e = {
      computed: -1 / 0,
      value: -1 / 0
    };
    return A(n, function(n, u, i) {
      var a = t ? t.call(r, n, u, i) : n;
      a >= e.computed && (e = {
        value: n,
        computed: a
      })
    }), e.value
  }, w.min = function(n, t, r) {
    if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) {
      return Math.min.apply(Math, n)
    }
    if (!t && w.isEmpty(n)) {
      return 1 / 0
    }
    var e = {
      computed: 1 / 0,
      value: 1 / 0
    };
    return A(n, function(n, u, i) {
      var a = t ? t.call(r, n, u, i) : n;
      e.computed > a && (e = {
        value: n,
        computed: a
      })
    }), e.value
  }, w.shuffle = function(n) {
    var t, r = 0,
      e = [];
    return A(n, function(n) {
      t = w.random(r++), e[r - 1] = e[t], e[t] = n
    }), e
  };
  var F = function(n) {
    return w.isFunction(n) ? n : function(t) {
      return t[n]
    }
  };
  w.sortBy = function(n, t, r) {
    var e = F(t);
    return w.pluck(w.map(n, function(n, t, u) {
      return {
        value: n,
        index: t,
        criteria: e.call(r, n, t, u)
      }
    }).sort(function(n, t) {
      var r = n.criteria,
        e = t.criteria;
      if (r !== e) {
        if (r > e || void 0 === r) {
          return 1
        }
        if (e > r || void 0 === e) {
          return -1
        }
      }
      return n.index < t.index ? -1 : 1
    }), "value")
  };
  var k = function(n, t, r, e) {
    var u = {},
      i = F(t || w.identity);
    return A(n, function(t, a) {
      var o = i.call(r, t, a, n);
      e(u, o, t)
    }), u
  };
  w.groupBy = function(n, t, r) {
    return k(n, t, r, function(n, t, r) {
      (w.has(n, t) ? n[t] : n[t] = []).push(r)
    })
  }, w.countBy = function(n, t, r) {
    return k(n, t, r, function(n, t) {
      w.has(n, t) || (n[t] = 0), n[t]++
    })
  }, w.sortedIndex = function(n, t, r, e) {
    r = null == r ? w.identity : F(r);
    for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
      var o = i + a >>> 1;
      u > r.call(e, n[o]) ? i = o + 1 : a = o
    }
    return i
  }, w.toArray = function(n) {
    return n ? w.isArray(n) ? o.call(n) : n.length === +n.length ? w.map(n, w.identity) : w.values(n) : []
  }, w.size = function(n) {
    return null == n ? 0 : n.length === +n.length ? n.length : w.keys(n).length
  }, w.first = w.head = w.take = function(n, t, r) {
    return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
  }, w.initial = function(n, t, r) {
    return o.call(n, 0, n.length - (null == t || r ? 1 : t))
  }, w.last = function(n, t, r) {
    return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
  }, w.rest = w.tail = w.drop = function(n, t, r) {
    return o.call(n, null == t || r ? 1 : t)
  }, w.compact = function(n) {
    return w.filter(n, w.identity)
  };
  var R = function(n, t, r) {
    return A(n, function(n) {
      w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
    }), r
  };
  w.flatten = function(n, t) {
    return R(n, t, [])
  }, w.without = function(n) {
    return w.difference(n, o.call(arguments, 1))
  }, w.uniq = w.unique = function(n, t, r, e) {
    w.isFunction(t) && (e = r, r = t, t = !1);
    var u = r ? w.map(n, r, e) : n,
      i = [],
      a = [];
    return A(u, function(r, e) {
      (t ? e && a[a.length - 1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]))
    }), i
  }, w.union = function() {
    return w.uniq(c.apply(e, arguments))
  }, w.intersection = function(n) {
    var t = o.call(arguments, 1);
    return w.filter(w.uniq(n), function(n) {
      return w.every(t, function(t) {
        return w.indexOf(t, n) >= 0
      })
    })
  }, w.difference = function(n) {
    var t = c.apply(e, o.call(arguments, 1));
    return w.filter(n, function(n) {
      return !w.contains(t, n)
    })
  }, w.zip = function() {
    for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = Array(t), e = 0; t > e; e++) {
      r[e] = w.pluck(n, "" + e)
    }
    return r
  }, w.object = function(n, t) {
    if (null == n) {
      return {}
    }
    for (var r = {}, e = 0, u = n.length; u > e; e++) {
      t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1]
    }
    return r
  }, w.indexOf = function(n, t, r) {
    if (null == n) {
      return -1
    }
    var e = 0,
      u = n.length;
    if (r) {
      if ("number" != typeof r) {
        return e = w.sortedIndex(n, t), n[e] === t ? e : -1
      }
      e = 0 > r ? Math.max(0, u + r) : r
    }
    if (y && n.indexOf === y) {
      return n.indexOf(t, r)
    }
    for (; u > e; e++) {
      if (n[e] === t) {
        return e
      }
    }
    return -1
  }, w.lastIndexOf = function(n, t, r) {
    if (null == n) {
      return -1
    }
    var e = null != r;
    if (b && n.lastIndexOf === b) {
      return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t)
    }
    for (var u = e ? r : n.length; u--;) {
      if (n[u] === t) {
        return u
      }
    }
    return -1
  }, w.range = function(n, t, r) {
    1 >= arguments.length && (t = n || 0, n = 0), r = arguments[2] || 1;
    for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;) {
      i[u++] = n, n += r
    }
    return i
  };
  var I = function() {};
  w.bind = function(n, t) {
    var r, e;
    if (n.bind === j && j) {
      return j.apply(n, o.call(arguments, 1))
    }
    if (!w.isFunction(n)) {
      throw new TypeError
    }
    return r = o.call(arguments, 2), e = function() {
      if (!(this instanceof e)) {
        return n.apply(t, r.concat(o.call(arguments)))
      }
      I.prototype = n.prototype;
      var u = new I;
      I.prototype = null;
      var i = n.apply(u, r.concat(o.call(arguments)));
      return Object(i) === i ? i : u
    }
  }, w.bindAll = function(n) {
    var t = o.call(arguments, 1);
    return 0 == t.length && (t = w.functions(n)), A(t, function(t) {
      n[t] = w.bind(n[t], n)
    }), n
  }, w.memoize = function(n, t) {
    var r = {};
    return t || (t = w.identity),
      function() {
        var e = t.apply(this, arguments);
        return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
      }
  }, w.delay = function(n, t) {
    var r = o.call(arguments, 2);
    return setTimeout(function() {
      return n.apply(null, r)
    }, t)
  }, w.defer = function(n) {
    return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
  }, w.throttle = function(n, t) {
    var r, e, u, i, a = 0,
      o = function() {
        a = new Date, u = null, i = n.apply(r, e)
      };
    return function() {
      var c = new Date,
        l = t - (c - a);
      return r = this, e = arguments, 0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)), i
    }
  }, w.debounce = function(n, t, r) {
    var e, u;
    return function() {
      var i = this,
        a = arguments,
        o = function() {
          e = null, r || (u = n.apply(i, a))
        },
        c = r && !e;
      return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u
    }
  }, w.once = function(n) {
    var t, r = !1;
    return function() {
      return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
    }
  }, w.wrap = function(n, t) {
    return function() {
      var r = [n];
      return a.apply(r, arguments), t.apply(this, r)
    }
  }, w.compose = function() {
    var n = arguments;
    return function() {
      for (var t = arguments, r = n.length - 1; r >= 0; r--) {
        t = [n[r].apply(this, t)]
      }
      return t[0]
    }
  }, w.after = function(n, t) {
    return 0 >= n ? t() : function() {
      return 1 > --n ? t.apply(this, arguments) : void 0
    }
  }, w.keys = _ || function(n) {
    if (n !== Object(n)) {
      throw new TypeError("Invalid object")
    }
    var t = [];
    for (var r in n) {
      w.has(n, r) && (t[t.length] = r)
    }
    return t
  }, w.values = function(n) {
    var t = [];
    for (var r in n) {
      w.has(n, r) && t.push(n[r])
    }
    return t
  }, w.pairs = function(n) {
    var t = [];
    for (var r in n) {
      w.has(n, r) && t.push([r, n[r]])
    }
    return t
  }, w.invert = function(n) {
    var t = {};
    for (var r in n) {
      w.has(n, r) && (t[n[r]] = r)
    }
    return t
  }, w.functions = w.methods = function(n) {
    var t = [];
    for (var r in n) {
      w.isFunction(n[r]) && t.push(r)
    }
    return t.sort()
  }, w.extend = function(n) {
    return A(o.call(arguments, 1), function(t) {
      if (t) {
        for (var r in t) {
          n[r] = t[r]
        }
      }
    }), n
  }, w.pick = function(n) {
    var t = {},
      r = c.apply(e, o.call(arguments, 1));
    return A(r, function(r) {
      r in n && (t[r] = n[r])
    }), t
  }, w.omit = function(n) {
    var t = {},
      r = c.apply(e, o.call(arguments, 1));
    for (var u in n) {
      w.contains(r, u) || (t[u] = n[u])
    }
    return t
  }, w.defaults = function(n) {
    return A(o.call(arguments, 1), function(t) {
      if (t) {
        for (var r in t) {
          null == n[r] && (n[r] = t[r])
        }
      }
    }), n
  }, w.clone = function(n) {
    return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({}, n) : n
  }, w.tap = function(n, t) {
    return t(n), n
  };
  var S = function(n, t, r, e) {
    if (n === t) {
      return 0 !== n || 1 / n == 1 / t
    }
    if (null == n || null == t) {
      return n === t
    }
    n instanceof w && (n = n._wrapped), t instanceof w && (t = t._wrapped);
    var u = l.call(n);
    if (u != l.call(t)) {
      return !1
    }
    switch (u) {
      case "[object String]":
        return n == t + "";
      case "[object Number]":
        return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
      case "[object Date]":
      case "[object Boolean]":
        return +n == +t;
      case "[object RegExp]":
        return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
    }
    if ("object" != typeof n || "object" != typeof t) {
      return !1
    }
    for (var i = r.length; i--;) {
      if (r[i] == n) {
        return e[i] == t
      }
    }
    r.push(n), e.push(t);
    var a = 0,
      o = !0;
    if ("[object Array]" == u) {
      if (a = n.length, o = a == t.length) {
        for (; a-- && (o = S(n[a], t[a], r, e));) {}
      }
    } else {
      var c = n.constructor,
        f = t.constructor;
      if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f)) {
        return !1
      }
      for (var s in n) {
        if (w.has(n, s) && (a++, !(o = w.has(t, s) && S(n[s], t[s], r, e)))) {
          break
        }
      }
      if (o) {
        for (s in t) {
          if (w.has(t, s) && !a--) {
            break
          }
        }
        o = !a
      }
    }
    return r.pop(), e.pop(), o
  };
  w.isEqual = function(n, t) {
    return S(n, t, [], [])
  }, w.isEmpty = function(n) {
    if (null == n) {
      return !0
    }
    if (w.isArray(n) || w.isString(n)) {
      return 0 === n.length
    }
    for (var t in n) {
      if (w.has(n, t)) {
        return !1
      }
    }
    return !0
  }, w.isElement = function(n) {
    return !(!n || 1 !== n.nodeType)
  }, w.isArray = x || function(n) {
    return "[object Array]" == l.call(n)
  }, w.isObject = function(n) {
    return n === Object(n)
  }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
    w["is" + n] = function(t) {
      return l.call(t) == "[object " + n + "]"
    }
  }), w.isArguments(arguments) || (w.isArguments = function(n) {
    return !(!n || !w.has(n, "callee"))
  }), w.isFunction = function(n) {
    return "function" == typeof n
  }, w.isFinite = function(n) {
    return isFinite(n) && !isNaN(parseFloat(n))
  }, w.isNaN = function(n) {
    return w.isNumber(n) && n != +n
  }, w.isBoolean = function(n) {
    return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
  }, w.isNull = function(n) {
    return null === n
  }, w.isUndefined = function(n) {
    return void 0 === n
  }, w.has = function(n, t) {
    return f.call(n, t)
  }, w.noConflict = function() {
    return n._ = t, this
  }, w.identity = function(n) {
    return n
  }, w.times = function(n, t, r) {
    for (var e = Array(n), u = 0; n > u; u++) {
      e[u] = t.call(r, u)
    }
    return e
  }, w.random = function(n, t) {
    return null == t && (t = n, n = 0), n + (0 | Math.random() * (t - n + 1))
  };
  var T = {
    escape: {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "/": "&#x2F;"
    }
  };
  T.unescape = w.invert(T.escape);
  var M = {
    escape: RegExp("[" + w.keys(T.escape).join("") + "]", "g"),
    unescape: RegExp("(" + w.keys(T.unescape).join("|") + ")", "g")
  };
  w.each(["escape", "unescape"], function(n) {
    w[n] = function(t) {
      return null == t ? "" : ("" + t).replace(M[n], function(t) {
        return T[n][t]
      })
    }
  }), w.result = function(n, t) {
    if (null == n) {
      return null
    }
    var r = n[t];
    return w.isFunction(r) ? r.call(n) : r
  }, w.mixin = function(n) {
    A(w.functions(n), function(t) {
      var r = w[t] = n[t];
      w.prototype[t] = function() {
        var n = [this._wrapped];
        return a.apply(n, arguments), z.call(this, r.apply(w, n))
      }
    })
  };
  var N = 0;
  w.uniqueId = function(n) {
    var t = "" + ++N;
    return n ? n + t : t
  }, w.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var q = /(.)^/,
    B = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "	": "t",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
    D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  w.template = function(n, t, r) {
    r = w.defaults({}, r, w.templateSettings);
    var e = RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"),
      u = 0,
      i = "__p+='";
    n.replace(e, function(t, r, e, a, o) {
      return i += n.slice(u, o).replace(D, function(n) {
        return "\\" + B[n]
      }), r && (i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), a && (i += "';\n" + a + "\n__p+='"), u = o + t.length, t
    }), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
    try {
      var a = Function(r.variable || "obj", "_", i)
    } catch (o) {
      throw o.source = i, o
    }
    if (t) {
      return a(t, w)
    }
    var c = function(n) {
      return a.call(this, n, w)
    };
    return c.source = "function(" + (r.variable || "obj") + "){\n" + i + "}", c
  }, w.chain = function(n) {
    return w(n).chain()
  };
  var z = function(n) {
    return this._chain ? w(n).chain() : n
  };
  w.mixin(w), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
    var t = e[n];
    w.prototype[n] = function() {
      var r = this._wrapped;
      return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
    }
  }), A(["concat", "join", "slice"], function(n) {
    var t = e[n];
    w.prototype[n] = function() {
      return z.call(this, t.apply(this._wrapped, arguments))
    }
  }), w.extend(w.prototype, {
    chain: function() {
      return this._chain = !0, this
    },
    value: function() {
      return this._wrapped
    }
  })
}).call(this);
var Clover = Clover || {};
Clover.getQuerystringVal = function(query, name) {
  if (_.isNull(query) || query.length == 0) {
    return false
  }
  var pairs = query.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    if (pair[0] == name) {
      return pair[1]
    }
  }
  return false
};
Clover.setQuerystringVal = function(query, name, value) {
  if (_.isNull(query) || query.length == 0) {
    return name + "=" + value
  }
  var newquery = "";
  var pairs = query.split("&");
  for (var i = 0; i < pairs.lenght; i++) {
    var pair = pairs[i].split("=");
    if (pair[0] == name) {
      pairs[i] = name + "=" + value
    }
  }
  for (var i = 0; i < pairs.lenght; i++) {
    if (i > 0) {
      newquery = newquery + "&"
    }
    newquery = newquery + pairs[i]
  }
  return newquery
};
Clover.unsetQuerystringVal = function(query, name) {
  if (_.isNull(query) || query.length == 0) {
    return null
  }
  var pairs = query.split("&");
  var newquery = "";
  var allowampersand = false;
  for (var i = 0; i < pairs.lenght; i++) {
    var pair = pairs[i].split("=");
    if (pair[0] != name) {
      if (allowampersand) {
        newquery = newquery + "&"
      } else {
        allowampersand = true
      }
      newquery = newquery + pair[0] + "=" + pair[1]
    }
  }
};
var Clover = Clover || {};
Clover.notificationUtil = {};
(function($) {
  $(function() {
    window.BUSINESS_HOME = "http://business.t-mobile.com";
    Clover.notificationUtil.visitCookieConfig = {
      expires: 365,
      path: "/"
    };
    Clover.notificationUtil.visitCookieName = "TMobileVisit";
    Clover.notificationUtil.init = function() {
      Clover.notificationUtil.container = $("#tmoVisitAlert");
      Clover.notificationUtil.footerSection = $(".business-section");
      Clover.notificationUtil.detectBusinessTraffic();
      Clover.notificationUtil.detectSessionNotification();
      Clover.notificationUtil.bindEvents()
    };
    Clover.notificationUtil.detectBusinessTraffic = function() {
      var tmoVisit = $.cookie(Clover.notificationUtil.visitCookieName);
      if (tmoVisit !== null) {
        if (tmoVisit === "business") {
          if (/business\.t-mobile\.com/.test(window.document.referrer)) {
            Clover.notificationUtil.container.removeClass("hidden")
          } else {
            Clover.notificationUtil.container.remove()
          }
        } else {
          Clover.notificationUtil.container.remove()
        }
      } else {
        Clover.notificationUtil.container.removeClass("hidden")
      }
    };
    Clover.notificationUtil.detectSessionNotification = function() {
      var tmoVisit = $.cookie(Clover.notificationUtil.visitCookieName);
      if (tmoVisit !== "business" && $.cookie("TMobileVisitIgnored")) {
        Clover.notificationUtil.container.remove()
      } else {
        $.cookie("TMobileVisitIgnored", "true")
      }
    };
    Clover.notificationUtil.setNotiCookie = function(st) {
      switch (st) {
        case "close":
          $.cookie(Clover.notificationUtil.visitCookieName, "dismissed", Clover.notificationUtil.visitCookieConfig);
          Clover.navigation.maxNavHeight = Clover.navigation.navMainInner.outerHeight();
          Clover.navigation.navMain.height(Clover.navigation.maxNavHeight);
          Clover.notificationUtil.container.remove();
          $(".container-main").css({
            "padding-top": Clover.navigation.maxNavHeight - 3
          });
          $(document).trigger("alertClose");
          Clover.navigation.closeNavBarAll();
          break;
        case "business":
          $.cookie(Clover.notificationUtil.visitCookieName, "business", Clover.notificationUtil.visitCookieConfig);
          window.location.href = window.BUSINESS_HOME;
          break;
        case "personal":
          $.cookie(Clover.notificationUtil.visitCookieName, "personal", Clover.notificationUtil.visitCookieConfig);
          break;
        default:
      }
    };
    Clover.notificationUtil.bindEvents = function() {
      var self = this;
      self.container.find("a").on("click", function(e) {
        e.preventDefault();
        Clover.notificationUtil.setNotiCookie($(this).data("target-status"))
      });
      self.footerSection.find("a").on("click", function(e) {
        e.preventDefault();
        Clover.notificationUtil.setNotiCookie($(this).data("target-status"))
      })
    };
    Clover.notificationUtil.init()
  })
})(window.jQuery);
var Clover = Clover || {};
Clover.Optimizations = {};
(function($) {
  Clover.Optimizations.loadVisibleImages = function() {
    var sTop = $(document).scrollTop(),
      wHt = $(window).height();
    $("img.lazy-load[data-lazy]").each(function() {
      var $elem = $(this),
        imgY = $elem.parent().parent().parent().parent().offset().top,
        src;
      if (imgY < sTop + wHt && imgY + 300 > sTop) {
        src = $elem.attr("data-lazy");
        $elem.attr("src", src).removeAttr("data-lazy").removeClass("lazy-load")
      }
    })
  };
  Clover.Optimizations.bind = function() {
    $(document).on("scroll", Clover.Optimizations.loadVisibleImages)
  };
  Clover.Optimizations.init = function() {
    setTimeout(Clover.Optimizations.loadVisibleImages, 500);
    Clover.Optimizations.bind()
  };
  $(function() {
    Clover.Optimizations.init()
  })
})(window.jQuery);
! function($) {
  $(function() {
    $.support.transition = (function() {
      var transitionEnd = (function() {
        var el = document.createElement("bootstrap"),
          transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
          },
          name;
        for (name in transEndEventNames) {
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }
      }());
      return transitionEnd && {
        end: transitionEnd
      }
    })()
  })
}(window.jQuery);
! function($) {
  var dismiss = '[data-dismiss="alert"]',
    Alert = function(el) {
      $(el).on("click", dismiss, this.close)
    };
  Alert.prototype.close = function(e) {
    var $this = $(this),
      selector = $this.attr("data-target"),
      $parent;
    if (!selector) {
      selector = $this.attr("href");
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")
    }
    $parent = $(selector);
    e && e.preventDefault();
    $parent.length || ($parent = $this.hasClass("alert") ? $this : $this.parent());
    $parent.trigger(e = $.Event("close"));
    if (e.isDefaultPrevented()) {
      return
    }
    $parent.removeClass("in");

    function removeElement() {
      $parent.trigger("closed").remove()
    }
    $.support.transition && $parent.hasClass("fade") ? $parent.on($.support.transition.end, removeElement) : removeElement()
  };
  var old = $.fn.alert;
  $.fn.alert = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("alert");
      if (!data) {
        $this.data("alert", (data = new Alert(this)))
      }
      if (typeof option == "string") {
        data[option].call($this)
      }
    })
  };
  $.fn.alert.Constructor = Alert;
  $.fn.alert.noConflict = function() {
    $.fn.alert = old;
    return this
  };
  $(document).on("click.alert.data-api", dismiss, Alert.prototype.close)
}(window.jQuery);
! function($) {
  var Button = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, $.fn.button.defaults, options)
  };
  Button.prototype.setState = function(state) {
    var d = "disabled",
      $el = this.$element,
      data = $el.data(),
      val = $el.is("input") ? "val" : "html";
    state = state + "Text";
    data.resetText || $el.data("resetText", $el[val]());
    $el[val](data[state] || this.options[state]);
    setTimeout(function() {
      state == "loadingText" ? $el.addClass(d).attr(d, d) : $el.removeClass(d).removeAttr(d)
    }, 0)
  };
  Button.prototype.toggle = function() {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]');
    $parent && $parent.find(".active").removeClass("active");
    this.$element.toggleClass("active")
  };
  var old = $.fn.button;
  $.fn.button = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("button"),
        options = typeof option == "object" && option;
      if (!data) {
        $this.data("button", (data = new Button(this, options)))
      }
      if (option == "toggle") {
        data.toggle()
      } else {
        if (option) {
          data.setState(option)
        }
      }
    })
  };
  $.fn.button.defaults = {
    loadingText: "loading..."
  };
  $.fn.button.Constructor = Button;
  $.fn.button.noConflict = function() {
    $.fn.button = old;
    return this
  };
  $(document).on("click.button.data-api", "[data-toggle^=button]", function(e) {
    var $btn = $(e.target);
    if (!$btn.hasClass("btn")) {
      $btn = $btn.closest(".btn")
    }
    $btn.button("toggle")
  })
}(window.jQuery);
! function($) {
  var Carousel = function(element, options) {
    this.$element = $(element);
    this.$indicators = this.$element.find(".carousel-indicators");
    this.options = options;
    this.options.pause == "hover" && this.$element.on("mouseenter", $.proxy(this.pause, this)).on("mouseleave", $.proxy(this.cycle, this))
  };
  Carousel.prototype = {
    cycle: function(e) {
      if (!e) {
        this.paused = false
      }
      if (this.interval) {
        clearInterval(this.interval)
      }
      this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
      return this
    },
    getActiveIndex: function() {
      this.$active = this.$element.find(".item.active");
      this.$items = this.$active.parent().children();
      return this.$items.index(this.$active)
    },
    to: function(pos) {
      var activeIndex = this.getActiveIndex(),
        that = this;
      if (pos > (this.$items.length - 1) || pos < 0) {
        return
      }
      if (this.sliding) {
        return this.$element.one("slid", function() {
          that.to(pos)
        })
      }
      if (activeIndex == pos) {
        return this.pause().cycle()
      }
      return this.slide(pos > activeIndex ? "next" : "prev", $(this.$items[pos]))
    },
    pause: function(e) {
      if (!e) {
        this.paused = true
      }
      if (this.$element.find(".next, .prev").length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end);
        this.cycle(true)
      }
      clearInterval(this.interval);
      this.interval = null;
      return this
    },
    next: function() {
      if (this.sliding) {
        return
      }
      return this.slide("next")
    },
    prev: function() {
      if (this.sliding) {
        return
      }
      return this.slide("prev")
    },
    slide: function(type, next) {
      var $active = this.$element.find(".item.active"),
        $next = next || $active[type](),
        isCycling = this.interval,
        direction = type == "next" ? "left" : "right",
        fallback = type == "next" ? "first" : "last",
        that = this,
        e;
      this.sliding = true;
      isCycling && this.pause();
      $next = $next.length ? $next : this.$element.find(".item")[fallback]();
      e = $.Event("slide", {
        relatedTarget: $next[0],
        direction: direction
      });
      if ($next.hasClass("active")) {
        return
      }
      if (this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        this.$element.one("slid", function() {
          var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()]);
          $nextIndicator && $nextIndicator.addClass("active")
        })
      }
      if ($.support.transition && this.$element.hasClass("slide")) {
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) {
          return
        }
        $next.addClass(type);
        $next[0].offsetWidth;
        $active.addClass(direction);
        $next.addClass(direction);
        this.$element.one($.support.transition.end, function() {
          $next.removeClass([type, direction].join(" ")).addClass("active");
          $active.removeClass(["active", direction].join(" "));
          that.sliding = false;
          setTimeout(function() {
            that.$element.trigger("slid")
          }, 0)
        })
      } else {
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) {
          return
        }
        $active.removeClass("active");
        $next.addClass("active");
        this.sliding = false;
        this.$element.trigger("slid")
      }
      isCycling && this.cycle();
      return this
    }
  };
  var old = $.fn.carousel;
  $.fn.carousel = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("carousel"),
        options = $.extend({}, $.fn.carousel.defaults, typeof option == "object" && option),
        action = typeof option == "string" ? option : options.slide;
      if (!data) {
        $this.data("carousel", (data = new Carousel(this, options)))
      }
      if (typeof option == "number") {
        data.to(option)
      } else {
        if (action) {
          data[action]()
        } else {
          if (options.interval) {
            data.pause().cycle()
          }
        }
      }
    })
  };
  $.fn.carousel.defaults = {
    interval: 5000,
    pause: "hover"
  };
  $.fn.carousel.Constructor = Carousel;
  $.fn.carousel.noConflict = function() {
    $.fn.carousel = old;
    return this
  };
  $(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
    var $this = $(this),
      href, $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "")),
      options = $.extend({}, $target.data(), $this.data()),
      slideIndex;
    $target.carousel(options);
    if (slideIndex = $this.attr("data-slide-to")) {
      $target.data("carousel").pause().to(slideIndex).cycle()
    }
    e.preventDefault()
  })
}(window.jQuery);
! function($) {
  var Collapse = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, $.fn.collapse.defaults, options);
    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }
    this.options.toggle && this.toggle()
  };
  Collapse.prototype = {
    constructor: Collapse,
    dimension: function() {
      var hasWidth = this.$element.hasClass("width");
      return hasWidth ? "width" : "height"
    },
    show: function() {
      var dimension, scroll, actives, hasData;
      if (this.transitioning || this.$element.hasClass("in")) {
        return
      }
      dimension = this.dimension();
      scroll = $.camelCase(["scroll", dimension].join("-"));
      actives = this.$parent && this.$parent.find("> .accordion-group > .in");
      if (actives && actives.length) {
        hasData = actives.data("collapse");
        if (hasData && hasData.transitioning) {
          return
        }
        actives.collapse("hide");
        hasData || actives.data("collapse", null)
      }
      this.$element[dimension](0);
      this.transition("addClass", $.Event("show"), "shown");
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    },
    hide: function() {
      var dimension;
      if (this.transitioning || !this.$element.hasClass("in")) {
        return
      }
      dimension = this.dimension();
      this.reset(this.$element[dimension]());
      this.transition("removeClass", $.Event("hide"), "hidden");
      this.$element[dimension](0)
    },
    reset: function(size) {
      var dimension = this.dimension();
      this.$element.removeClass("collapse")[dimension](size || "auto")[0].offsetWidth;
      this.$element[size !== null ? "addClass" : "removeClass"]("collapse");
      return this
    },
    transition: function(method, startEvent, completeEvent) {
      var that = this,
        complete = function() {
          if (startEvent.type == "show") {
            that.reset()
          }
          that.transitioning = 0;
          that.$element.trigger(completeEvent)
        };
      this.$element.trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return
      }
      this.transitioning = 1;
      this.$element[method]("in");
      $.support.transition && this.$element.hasClass("collapse") ? this.$element.one($.support.transition.end, complete) : complete()
    },
    toggle: function() {
      this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
  };
  var old = $.fn.collapse;
  $.fn.collapse = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("collapse"),
        options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == "object" && option);
      if (!data) {
        $this.data("collapse", (data = new Collapse(this, options)))
      }
      if (typeof option == "string") {
        data[option]()
      }
    })
  };
  $.fn.collapse.defaults = {
    toggle: true
  };
  $.fn.collapse.Constructor = Collapse;
  $.fn.collapse.noConflict = function() {
    $.fn.collapse = old;
    return this
  };
  $(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(e) {
    var $this = $(this),
      href, target = $this.attr("data-target") || e.preventDefault() || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""),
      option = $(target).data("collapse") ? "toggle" : $this.data();
    $this[$(target).hasClass("in") ? "addClass" : "removeClass"]("collapsed");
    $(target).collapse(option)
  })
}(window.jQuery);
! function($) {
  var toggle = "[data-toggle=dropdown]",
    Dropdown = function(element) {
      var $el = $(element).on("click.dropdown.data-api", this.toggle);
      $("html").on("click.dropdown.data-api", function() {
        $el.parent().removeClass("open")
      })
    };
  Dropdown.prototype = {
    constructor: Dropdown,
    toggle: function(e) {
      var $this = $(this),
        $parent, isActive;
      if ($this.is(".disabled, :disabled")) {
        return
      }
      $parent = getParent($this);
      isActive = $parent.hasClass("open");
      clearMenus();
      if (!isActive) {
        $parent.toggleClass("open")
      }
      $this.focus();
      return false
    },
    keydown: function(e) {
      var $this, $items, $active, $parent, isActive, index;
      if (!/(38|40|27)/.test(e.keyCode)) {
        return
      }
      $this = $(this);
      e.preventDefault();
      e.stopPropagation();
      if ($this.is(".disabled, :disabled")) {
        return
      }
      $parent = getParent($this);
      isActive = $parent.hasClass("open");
      if (!isActive || (isActive && e.keyCode == 27)) {
        return $this.click()
      }
      $items = $("[role=menu] li:not(.divider):visible a", $parent);
      if (!$items.length) {
        return
      }
      index = $items.index($items.filter(":focus"));
      if (e.keyCode == 38 && index > 0) {
        index--
      }
      if (e.keyCode == 40 && index < $items.length - 1) {
        index++
      }
      if (!~index) {
        index = 0
      }
      $items.eq(index).focus()
    }
  };

  function clearMenus() {
    $(toggle).each(function() {
      getParent($(this)).removeClass("open")
    })
  }

  function getParent($this) {
    var selector = $this.attr("data-target"),
      $parent;
    if (!selector) {
      selector = $this.attr("href");
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "")
    }
    $parent = $(selector);
    $parent.length || ($parent = $this.parent());
    return $parent
  }
  var old = $.fn.dropdown;
  $.fn.dropdown = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("dropdown");
      if (!data) {
        $this.data("dropdown", (data = new Dropdown(this)))
      }
      if (typeof option == "string") {
        data[option].call($this)
      }
    })
  };
  $.fn.dropdown.Constructor = Dropdown;
  $.fn.dropdown.noConflict = function() {
    $.fn.dropdown = old;
    return this
  };
  $(document).on("click.dropdown.data-api touchstart.dropdown.data-api", clearMenus).on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function(e) {
    e.stopPropagation()
  }).on("touchstart.dropdown.data-api", ".dropdown-menu", function(e) {
    e.stopPropagation()
  }).on("click.dropdown.data-api touchstart.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", toggle + ", [role=menu]", Dropdown.prototype.keydown)
}(window.jQuery);
! function($) {
  var Modal = function(element, options) {
    this.options = options;
    this.$element = $(element).delegate('[data-dismiss="modal"]', "click.dismiss.modal", $.proxy(this.hide, this));
    this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
  };
  Modal.prototype = {
    constructor: Modal,
    toggle: function() {
      return this[!this.isShown ? "show" : "hide"]()
    },
    show: function() {
      var that = this,
        e = $.Event("show");
      this.$element.trigger(e);
      if (this.isShown || e.isDefaultPrevented()) {
        return
      }
      this.isShown = true;
      this.escape();
      this.backdrop(function() {
        var transition = $.support.transition && that.$element.hasClass("fade");
        if (!that.$element.parent().length) {
          that.$element.appendTo(document.body)
        }
        that.$element.show();
        if (transition) {
          that.$element[0].offsetWidth
        }
        that.$element.addClass("in").attr("aria-hidden", false);
        that.enforceFocus();
        transition ? that.$element.one($.support.transition.end, function() {
          that.$element.focus().trigger("shown")
        }) : that.$element.focus().trigger("shown")
      })
    },
    hide: function(e) {
      e && e.preventDefault();
      var that = this;
      e = $.Event("hide");
      this.$element.trigger(e);
      if (!this.isShown || e.isDefaultPrevented()) {
        return
      }
      this.isShown = false;
      this.escape();
      $(document).off("focusin.modal");
      this.$element.removeClass("in").attr("aria-hidden", true);
      $.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
    },
    enforceFocus: function() {
      var that = this;
      $(document).on("focusin.modal", function(e) {
        if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
          that.$element.focus()
        }
      })
    },
    escape: function() {
      var that = this;
      if (this.isShown && this.options.keyboard) {
        this.$element.on("keyup.dismiss.modal", function(e) {
          e.which == 27 && that.hide()
        })
      } else {
        if (!this.isShown) {
          this.$element.off("keyup.dismiss.modal")
        }
      }
    },
    hideWithTransition: function() {
      var that = this,
        timeout = setTimeout(function() {
          that.$element.off($.support.transition.end);
          that.hideModal()
        }, 500);
      this.$element.one($.support.transition.end, function() {
        clearTimeout(timeout);
        that.hideModal()
      })
    },
    hideModal: function(that) {
      this.$element.hide().trigger("hidden");
      this.backdrop()
    },
    removeBackdrop: function() {
      this.$backdrop.remove();
      this.$backdrop = null
    },
    backdrop: function(callback) {
      var that = this,
        animate = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
        var doAnimate = $.support.transition && animate;
        this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body);
        this.$backdrop.click(this.options.backdrop == "static" ? $.proxy(this.$element[0].focus, this.$element[0]) : $.proxy(this.hide, this));
        if (doAnimate) {
          this.$backdrop[0].offsetWidth
        }
        this.$backdrop.addClass("in");
        doAnimate ? this.$backdrop.one($.support.transition.end, callback) : callback()
      } else {
        if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) : this.removeBackdrop()
        } else {
          if (callback) {
            callback()
          }
        }
      }
    }
  };
  var old = $.fn.modal;
  $.fn.modal = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("modal"),
        options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == "object" && option);
      if (!data) {
        $this.data("modal", (data = new Modal(this, options)))
      }
      if (typeof option == "string") {
        data[option]()
      } else {
        if (options.show) {
          data.show()
        }
      }
    })
  };
  $.fn.modal.defaults = {
    backdrop: true,
    keyboard: true,
    show: true
  };
  $.fn.modal.Constructor = Modal;
  $.fn.modal.noConflict = function() {
    $.fn.modal = old;
    return this
  };
  $(document).on("click.modal.data-api", '[data-toggle="modal"]', function(e) {
    var $this = $(this),
      href = $this.attr("href"),
      $target = $($this.attr("data-target") || (href && href.replace(/.*(?=#[^\s]+$)/, ""))),
      option = $target.data("modal") ? "toggle" : $.extend({
        remote: !/#/.test(href) && href
      }, $target.data(), $this.data());
    e.preventDefault();
    $target.modal(option).one("hide", function() {
      $this.focus()
    })
  })
}(window.jQuery);
! function($) {
  var Tooltip = function(element, options) {
    this.init("tooltip", element, options)
  };
  Tooltip.prototype = {
    constructor: Tooltip,
    init: function(type, element, options) {
      var eventIn, eventOut, triggers, trigger, i;
      this.type = type;
      this.$element = $(element);
      this.options = this.getOptions(options);
      this.enabled = true;
      triggers = this.options.trigger.split(" ");
      for (i = triggers.length; i--;) {
        trigger = triggers[i];
        if (trigger == "click") {
          this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else {
          if (trigger != "manual") {
            eventIn = trigger == "hover" ? "mouseenter" : "focus";
            eventOut = trigger == "hover" ? "mouseleave" : "blur";
            this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
            this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this))
          }
        }
      }
      this.options.selector ? (this._options = $.extend({}, this.options, {
        trigger: "manual",
        selector: ""
      })) : this.fixTitle()
    },
    getOptions: function(options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options);
      if (options.delay && typeof options.delay == "number") {
        options.delay = {
          show: options.delay,
          hide: options.delay
        }
      }
      return options
    },
    enter: function(e) {
      var defaults = $.fn[this.type].defaults,
        options = {},
        self;
      this._options && $.each(this._options, function(key, value) {
        if (defaults[key] != value) {
          options[key] = value
        }
      }, this);
      self = $(e.currentTarget)[this.type](options).data(this.type);
      if (!self.options.delay || !self.options.delay.show) {
        return self.show()
      }
      clearTimeout(this.timeout);
      self.hoverState = "in";
      this.timeout = setTimeout(function() {
        if (self.hoverState == "in") {
          self.show()
        }
      }, self.options.delay.show)
    },
    leave: function(e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type);
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      if (!self.options.delay || !self.options.delay.hide) {
        return self.hide()
      }
      self.hoverState = "out";
      this.timeout = setTimeout(function() {
        if (self.hoverState == "out") {
          self.hide()
        }
      }, self.options.delay.hide)
    },
    show: function() {
      var $tip, pos, actualWidth, actualHeight, placement, tp, e = $.Event("show");
      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) {
          return
        }
        $tip = this.tip();
        this.setContent();
        if (this.options.animation) {
          $tip.addClass("fade")
        }
        placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
        $tip.detach().css({
          top: 0,
          left: 0,
          display: "block"
        });
        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
        pos = this.getPosition();
        actualWidth = $tip[0].offsetWidth;
        actualHeight = $tip[0].offsetHeight;
        switch (placement) {
          case "bottom":
            tp = {
              top: pos.top + pos.height,
              left: pos.left + pos.width / 2 - actualWidth / 2
            };
            break;
          case "top":
            tp = {
              top: pos.top - actualHeight,
              left: pos.left + pos.width / 2 - actualWidth / 2
            };
            break;
          case "left":
            tp = {
              top: pos.top + pos.height / 2 - actualHeight / 2,
              left: pos.left - actualWidth
            };
            break;
          case "right":
            tp = {
              top: pos.top + pos.height / 2 - actualHeight / 2,
              left: pos.left + pos.width
            };
            break
        }
        this.applyPlacement(tp, placement);
        this.$element.trigger("shown")
      }
    },
    applyPlacement: function(offset, placement) {
      var $tip = this.tip(),
        width = $tip[0].offsetWidth,
        height = $tip[0].offsetHeight,
        actualWidth, actualHeight, delta, replace;
      $tip.offset(offset).addClass(placement).addClass("in");
      actualWidth = $tip[0].offsetWidth;
      actualHeight = $tip[0].offsetHeight;
      if (placement == "top" && actualHeight != height) {
        offset.top = offset.top + height - actualHeight;
        replace = true
      }
      if (placement == "bottom" || placement == "top") {
        delta = 0;
        if (offset.left < 0) {
          delta = offset.left * -2;
          offset.left = 0;
          $tip.offset(offset);
          actualWidth = $tip[0].offsetWidth;
          actualHeight = $tip[0].offsetHeight
        }
        this.replaceArrow(delta - width + actualWidth, actualWidth, "left")
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, "top")
      }
      if (replace) {
        $tip.offset(offset)
      }
    },
    replaceArrow: function(delta, dimension, position) {
      this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : "")
    },
    setContent: function() {
      var $tip = this.tip(),
        title = this.getTitle();
      $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
      $tip.removeClass("fade in top bottom left right")
    },
    hide: function() {
      var that = this,
        $tip = this.tip(),
        e = $.Event("hide");
      this.$element.trigger(e);
      if (e.isDefaultPrevented()) {
        return
      }
      $tip.removeClass("in");

      function removeWithAnimation() {
        var timeout = setTimeout(function() {
          $tip.off($.support.transition.end).detach()
        }, 500);
        $tip.one($.support.transition.end, function() {
          clearTimeout(timeout);
          $tip.detach()
        })
      }
      $.support.transition && this.$tip.hasClass("fade") ? removeWithAnimation() : $tip.detach();
      this.$element.trigger("hidden");
      return this
    },
    fixTitle: function() {
      var $e = this.$element;
      if ($e.attr("title") || typeof($e.attr("data-original-title")) != "string") {
        $e.attr("data-original-title", $e.attr("title") || "").attr("title", "")
      }
    },
    hasContent: function() {
      return this.getTitle()
    },
    getPosition: function() {
      var el = this.$element[0];
      return $.extend({}, (typeof el.getBoundingClientRect == "function") ? el.getBoundingClientRect() : {
        width: el.offsetWidth,
        height: el.offsetHeight
      }, this.$element.offset())
    },
    getTitle: function() {
      var title, $e = this.$element,
        o = this.options;
      title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
      return title
    },
    tip: function() {
      return this.$tip = this.$tip || $(this.options.template)
    },
    arrow: function() {
      return this.$arrow = this.$arrow || this.tip().find(".arrow")
    },
    validate: function() {
      if (!this.$element[0].parentNode) {
        this.hide();
        this.$element = null;
        this.options = null
      }
    },
    enable: function() {
      this.enabled = true
    },
    disable: function() {
      this.enabled = false
    },
    toggleEnabled: function() {
      this.enabled = !this.enabled
    },
    toggle: function(e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this;
      self.tip().hasClass("in") ? self.hide() : self.show()
    },
    destroy: function() {
      this.hide().$element.off("." + this.type).removeData(this.type)
    }
  };
  var old = $.fn.tooltip;
  $.fn.tooltip = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("tooltip"),
        options = typeof option == "object" && option;
      if (!data) {
        $this.data("tooltip", (data = new Tooltip(this, options)))
      }
      if (typeof option == "string") {
        data[option]()
      }
    })
  };
  $.fn.tooltip.Constructor = Tooltip;
  $.fn.tooltip.defaults = {
    animation: true,
    placement: "top",
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: false,
    container: false
  };
  $.fn.tooltip.noConflict = function() {
    $.fn.tooltip = old;
    return this
  }
}(window.jQuery);
! function($) {
  var Popclover = function(element, options) {
    this.init("popclover", element, options)
  };
  Popclover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {
    constructor: Popclover,
    setContent: function() {
      var $tip = this.tip(),
        title = this.getTitle(),
        content = this.getContent();
      $tip.find(".popclover-title")[this.options.html ? "html" : "text"](title);
      $tip.find(".popclover-content")[this.options.html ? "html" : "text"](content);
      $tip.removeClass("fade top bottom left right in")
    },
    hasContent: function() {
      return this.getTitle() || this.getContent()
    },
    getContent: function() {
      var content, $e = this.$element,
        o = this.options;
      content = (typeof o.content == "function" ? o.content.call($e[0]) : o.content) || $e.attr("data-content");
      return content
    },
    tip: function() {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    },
    destroy: function() {
      this.hide().$element.off("." + this.type).removeData(this.type)
    }
  });
  var old = $.fn.popclover;
  $.fn.popclover = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("popclover"),
        options = typeof option == "object" && option;
      if (!data) {
        $this.data("popclover", (data = new Popclover(this, options)))
      }
      if (typeof option == "string") {
        data[option]()
      }
    })
  };
  $.fn.popclover.Constructor = Popclover;
  $.fn.popclover.defaults = $.extend({}, $.fn.tooltip.defaults, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popclover"><div class="arrow"></div><h3 class="popclover-title"></h3><div class="popclover-content"></div></div>'
  });
  $.fn.popclover.noConflict = function() {
    $.fn.popclover = old;
    return this
  }
}(window.jQuery);
! function($) {
  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this),
      $element = $(element).is("body") ? $(window) : $(element),
      href;
    this.options = $.extend({}, $.fn.scrollspy.defaults, options);
    this.$scrollElement = $element.on("scroll.scroll-spy.data-api", process);
    this.selector = (this.options.target || ((href = $(element).attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "")) || "") + " .nav li > a";
    this.$body = $("body");
    this.refresh();
    this.process()
  }
  ScrollSpy.prototype = {
    constructor: ScrollSpy,
    refresh: function() {
      var self = this,
        $targets;
      this.offsets = $([]);
      this.targets = $([]);
      $targets = this.$body.find(this.selector).map(function() {
        var $el = $(this),
          href = $el.data("target") || $el.attr("href"),
          $href = /^#\w/.test(href) && $(href);
        return ($href && $href.length && [
          [$href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href]
        ]) || null
      }).sort(function(a, b) {
        return a[0] - b[0]
      }).each(function() {
        self.offsets.push(this[0]);
        self.targets.push(this[1])
      })
    },
    process: function() {
      var scrollTop = this.$scrollElement.scrollTop() + this.options.offset,
        scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
        maxScroll = scrollHeight - this.$scrollElement.height(),
        offsets = this.offsets,
        targets = this.targets,
        activeTarget = this.activeTarget,
        i;
      if (scrollTop >= maxScroll) {
        return activeTarget != (i = targets.last()[0]) && this.activate(i)
      }
      for (i = offsets.length; i--;) {
        activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i])
      }
    },
    activate: function(target) {
      var active, selector;
      this.activeTarget = target;
      $(this.selector).parent(".active").removeClass("active");
      selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
      active = $(selector).parent("li").addClass("active");
      if (active.parent(".dropdown-menu").length) {
        active = active.closest("li.dropdown").addClass("active")
      }
      active.trigger("activate")
    }
  };
  var old = $.fn.scrollspy;
  $.fn.scrollspy = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("scrollspy"),
        options = typeof option == "object" && option;
      if (!data) {
        $this.data("scrollspy", (data = new ScrollSpy(this, options)))
      }
      if (typeof option == "string") {
        data[option]()
      }
    })
  };
  $.fn.scrollspy.Constructor = ScrollSpy;
  $.fn.scrollspy.defaults = {
    offset: 10
  };
  $.fn.scrollspy.noConflict = function() {
    $.fn.scrollspy = old;
    return this
  };
  $(window).on("load", function() {
    $('[data-spy="scroll"]').each(function() {
      var $spy = $(this);
      $spy.scrollspy($spy.data())
    })
  })
}(window.jQuery);
! function($) {
  var Tab = function(element) {
    this.element = $(element)
  };
  Tab.prototype = {
    constructor: Tab,
    show: function() {
      var $this = this.element,
        $ul = $this.closest("ul:not(.dropdown-menu)"),
        selector = $this.attr("data-target"),
        previous, $target, e;
      if (!selector) {
        selector = $this.attr("href");
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")
      }
      if ($this.parent("li").hasClass("active")) {
        return
      }
      previous = $ul.find(".active:last a")[0];
      e = $.Event("show", {
        relatedTarget: previous
      });
      $this.trigger(e);
      if (e.isDefaultPrevented()) {
        return
      }
      $target = $(selector);
      this.activate($this.parent("li"), $ul);
      this.activate($target, $target.parent(), function() {
        $this.trigger({
          type: "shown",
          relatedTarget: previous
        })
      })
    },
    activate: function(element, container, callback) {
      var $active = container.find("> .active"),
        transition = callback && $.support.transition && $active.hasClass("fade");

      function next() {
        $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
        element.addClass("active");
        if (transition) {
          element[0].offsetWidth;
          element.addClass("in")
        } else {
          element.removeClass("fade")
        }
        if (element.parent(".dropdown-menu")) {
          element.closest("li.dropdown").addClass("active")
        }
        callback && callback()
      }
      transition ? $active.one($.support.transition.end, next) : next();
      $active.removeClass("in")
    }
  };
  var old = $.fn.tab;
  $.fn.tab = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("tab");
      if (!data) {
        $this.data("tab", (data = new Tab(this)))
      }
      if (typeof option == "string") {
        data[option]()
      }
    })
  };
  $.fn.tab.Constructor = Tab;
  $.fn.tab.noConflict = function() {
    $.fn.tab = old;
    return this
  };
  $(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
    e.preventDefault();
    $(this).tab("show")
  })
}(window.jQuery);
! function($) {
  var Typeahead = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, $.fn.typeahead.defaults, options);
    this.matcher = this.options.matcher || this.matcher;
    this.sorter = this.options.sorter || this.sorter;
    this.highlighter = this.options.highlighter || this.highlighter;
    this.updater = this.options.updater || this.updater;
    this.source = this.options.source;
    this.$menu = $(this.options.menu);
    this.shown = false;
    this.listen()
  };
  Typeahead.prototype = {
    constructor: Typeahead,
    select: function() {
      var val = this.$menu.find(".active").attr("data-value");
      this.$element.val(this.updater(val)).change();
      return this.hide()
    },
    updater: function(item) {
      return item
    },
    show: function() {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      });
      this.$menu.insertAfter(this.$element).css({
        top: pos.top + pos.height,
        left: pos.left
      }).show();
      this.shown = true;
      return this
    },
    hide: function() {
      this.$menu.hide();
      this.shown = false;
      return this
    },
    lookup: function(event) {
      var items;
      this.query = this.$element.val();
      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }
      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source;
      return items ? this.process(items) : this
    },
    process: function(items) {
      var that = this;
      items = $.grep(items, function(item) {
        return that.matcher(item)
      });
      items = this.sorter(items);
      if (!items.length) {
        return this.shown ? this.hide() : this
      }
      return this.render(items.slice(0, this.options.items)).show()
    },
    matcher: function(item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    },
    sorter: function(items) {
      var beginswith = [],
        caseSensitive = [],
        caseInsensitive = [],
        item;
      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) {
          beginswith.push(item)
        } else {
          if (~item.indexOf(this.query)) {
            caseSensitive.push(item)
          } else {
            caseInsensitive.push(item)
          }
        }
      }
      return beginswith.concat(caseSensitive, caseInsensitive)
    },
    highlighter: function(item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      return item.replace(new RegExp("(" + query + ")", "ig"), function($1, match) {
        return "<strong>" + match + "</strong>"
      })
    },
    render: function(items) {
      var that = this;
      items = $(items).map(function(i, item) {
        i = $(that.options.item).attr("data-value", item);
        i.find("a").html(that.highlighter(item));
        return i[0]
      });
      items.first().addClass("active");
      this.$menu.html(items);
      return this
    },
    next: function(event) {
      var active = this.$menu.find(".active").removeClass("active"),
        next = active.next();
      if (!next.length) {
        next = $(this.$menu.find("li")[0])
      }
      next.addClass("active")
    },
    prev: function(event) {
      var active = this.$menu.find(".active").removeClass("active"),
        prev = active.prev();
      if (!prev.length) {
        prev = this.$menu.find("li").last()
      }
      prev.addClass("active")
    },
    listen: function() {
      this.$element.on("blur", $.proxy(this.blur, this)).on("keypress", $.proxy(this.keypress, this)).on("keyup", $.proxy(this.keyup, this));
      if (this.eventSupported("keydown")) {
        this.$element.on("keydown", $.proxy(this.keydown, this))
      }
      this.$menu.on("click", $.proxy(this.click, this)).on("mouseenter", "li", $.proxy(this.mouseenter, this))
    },
    eventSupported: function(eventName) {
      var isSupported = eventName in this.$element;
      if (!isSupported) {
        this.$element.setAttribute(eventName, "return;");
        isSupported = typeof this.$element[eventName] === "function"
      }
      return isSupported
    },
    move: function(e) {
      if (!this.shown) {
        return
      }
      switch (e.keyCode) {
        case 9:
        case 13:
        case 27:
          e.preventDefault();
          break;
        case 38:
          e.preventDefault();
          this.prev();
          break;
        case 40:
          e.preventDefault();
          this.next();
          break
      }
      e.stopPropagation()
    },
    keydown: function(e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40, 38, 9, 13, 27]);
      this.move(e)
    },
    keypress: function(e) {
      if (this.suppressKeyPressRepeat) {
        return
      }
      this.move(e)
    },
    keyup: function(e) {
      switch (e.keyCode) {
        case 40:
        case 38:
        case 16:
        case 17:
        case 18:
          break;
        case 9:
        case 13:
          if (!this.shown) {
            return
          }
          this.select();
          break;
        case 27:
          if (!this.shown) {
            return
          }
          this.hide();
          break;
        default:
          this.lookup()
      }
      e.stopPropagation();
      e.preventDefault()
    },
    blur: function(e) {
      var that = this;
      setTimeout(function() {
        that.hide()
      }, 150)
    },
    click: function(e) {
      e.stopPropagation();
      e.preventDefault();
      this.select()
    },
    mouseenter: function(e) {
      this.$menu.find(".active").removeClass("active");
      $(e.currentTarget).addClass("active")
    }
  };
  var old = $.fn.typeahead;
  $.fn.typeahead = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("typeahead"),
        options = typeof option == "object" && option;
      if (!data) {
        $this.data("typeahead", (data = new Typeahead(this, options)))
      }
      if (typeof option == "string") {
        data[option]()
      }
    })
  };
  $.fn.typeahead.defaults = {
    source: [],
    items: 8,
    menu: '<ul class="typeahead dropdown-menu"></ul>',
    item: '<li><a href="#"></a></li>',
    minLength: 1
  };
  $.fn.typeahead.Constructor = Typeahead;
  $.fn.typeahead.noConflict = function() {
    $.fn.typeahead = old;
    return this
  };
  $(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(e) {
    var $this = $(this);
    if ($this.data("typeahead")) {
      return
    }
    e.preventDefault();
    $this.typeahead($this.data())
  })
}(window.jQuery);
! function($) {
  var Affix = function(element, options) {
    this.options = $.extend({}, $.fn.affix.defaults, options);
    this.$window = $(window).on("scroll.affix.data-api", $.proxy(this.checkPosition, this)).on("click.affix.data-api", $.proxy(function() {
      setTimeout($.proxy(this.checkPosition, this), 1)
    }, this));
    this.$element = $(element);
    this.checkPosition()
  };
  Affix.prototype.checkPosition = function() {
    if (!this.$element.is(":visible")) {
      return
    }
    var scrollHeight = $(document).height(),
      scrollTop = this.$window.scrollTop(),
      position = this.$element.offset(),
      offset = this.options.offset,
      offsetBottom = offset.bottom,
      offsetTop = offset.top,
      reset = "affix affix-top affix-bottom",
      affix;
    if (typeof offset != "object") {
      offsetBottom = offsetTop = offset
    }
    if (typeof offsetTop == "function") {
      offsetTop = offset.top()
    }
    if (typeof offsetBottom == "function") {
      offsetBottom = offset.bottom()
    }
    affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ? false : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? "bottom" : offsetTop != null && scrollTop <= offsetTop ? "top" : false;
    if (this.affixed === affix) {
      return
    }
    this.affixed = affix;
    this.unpin = affix == "bottom" ? position.top - scrollTop : null;
    this.$element.removeClass(reset).addClass("affix" + (affix ? "-" + affix : ""))
  };
  var old = $.fn.affix;
  $.fn.affix = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("affix"),
        options = typeof option == "object" && option;
      if (!data) {
        $this.data("affix", (data = new Affix(this, options)))
      }
      if (typeof option == "string") {
        data[option]()
      }
    })
  };
  $.fn.affix.Constructor = Affix;
  $.fn.affix.defaults = {
    offset: 0
  };
  $.fn.affix.noConflict = function() {
    $.fn.affix = old;
    return this
  };
  $(window).on("load", function() {
    $('[data-spy="affix"]').each(function() {
      var $spy = $(this),
        data = $spy.data();
      data.offset = data.offset || {};
      data.offsetBottom && (data.offset.bottom = data.offsetBottom);
      data.offsetTop && (data.offset.top = data.offsetTop);
      $spy.affix(data)
    })
  })
}(window.jQuery);
(function($) {
  $(document).on("click.modal.data-api", '[data-toggle="remote-modal"]', function(e) {
    var $this = $(this),
      href = $this.attr("href"),
      $target = $($this.attr("data-target") || (href && href.replace(/.*(?=#[^\s]+$)/, ""))),
      mergedOptions = $.extend({
        remote: !/#/.test(href) && href
      }, $target.data(), $this.data()),
      modalData = $target.data("modal"),
      option = modalData ? "toggle" : mergedOptions;
    if (modalData && modalData.options && modalData.options.remote && mergedOptions.remote && modalData.options.remote != mergedOptions.remote) {
      option = mergedOptions;
      $target.removeData("modal")
    }
    e.preventDefault();
    $target.modal(option).one("hide", function() {
      $this.focus()
    })
  })
})(window.jQuery);
var Clover = Clover || {};
Clover.navigation = Clover.navigation || {};
Clover.navigation.iOSHalt = false;
Clover.navigation.CoverageLocation = Clover.navigation.CoverageLocation || {};
Clover.util = {};
Clover.util.bp = {
  small: [0, 480],
  medium: [481, 979],
  large: [979, 5000]
};
(function($) {
  $(function() {
    setTimeout(function() {
      $(".navbar").offset({
        top: 0
      })
    }, 10);
    Clover.navigation.clearSubNav = function() {
      $("li.active a", Clover.navigation.navMainInner).click()
    };
    Clover.navigation.checkScroll = function() {
      var self = this,
        top = self.window.scrollTop(),
        newNavHeight = 0,
        navOpen = Clover.navigation.navMain.hasClass("open");
      self.clearSubNav();
      if (top < 0) {
        top = 0
      }
      if (top > this.lastScrollTop) {
        var navTop = Clover.navigation.navMain.offset()["top"],
          navHeight = Clover.navigation.navMain.height();
        clearTimeout(Clover.navigation.delayedSubnavOpenTimer);
        Clover.navigation.delayedSubnavOpenTimer = null;
        Clover.navigation.closeNavBarAll();
        if (Clover.navigation.navMain.hasClass("fixedToTop")) {
          Clover.navigation.navMain.removeClass("fixedToTop");
          if (!Clover.navigation.touch) {
            Clover.navigation.navMain.offset({
              top: top
            })
          }
        }
      } else {
        var navTop = Clover.navigation.navMain.offset()["top"],
          navHeight = Clover.navigation.navMain.height();
        navBottom = navTop + navHeight;
        if (Clover.navigation.touch) {
          Clover.navigation.navMain.addClass("fixedToTop")
        } else {
          if (navBottom < top - 5) {
            Clover.navigation.navMain.offset({
              top: top - navHeight
            })
          } else {
            if (navTop < top && navBottom > top - 5) {} else {
              if (navTop >= top) {
                Clover.navigation.navMain.addClass("fixedToTop");
                Clover.navigation.navMain.offsetTop = navTop
              }
            }
          }
        }
        if (Clover.navigation.navMain.offset()["top"] > top) {
          Clover.navigation.navMain.offset({
            top: top
          })
        }
      }
      this.lastScrollTop = top
    };
    Clover.navigation.setNavLeft = function() {
      var self = this;
      if (self.navCollapseBreak < self.window.width()) {
        self.navMainInner.css({
          position: "absolute",
          width: "100%"
        });
        var left = (self.window.width() - self.navMainInner.width()) / 2;
        if (left < 0) {
          left = 0
        }
        self.navMainInner.css({
          left: left
        })
      }
    };
    Clover.navigation.setNavListWidth = function() {
      $(".nav-list.bs-docs-sidenav").width($(".bs-docs-sidebar").width())
    };
    Clover.navigation.growNavHeight = function(immediate) {
      var self = this;
      if (Clover.navigation.navMain.height() < Clover.navigation.navMainInner.height()) {
        Clover.navigation.navMain.height(Clover.navigation.navMain.height() + 10);
        if (immediate) {
          Clover.navigation.growNavHeight(immediate)
        } else {
          setTimeout(Clover.navigation.growNavHeight, 1)
        }
      } else {
        Clover.navigation.isNavDown = true;
        Clover.navigation.navMain.height(Clover.navigation.navMainInner.height())
      }
    };
    Clover.navigation.shrinkNavHeight = function(immediate) {
      var self = this;
      if (Clover.navigation.navMain.height() > Clover.navigation.navMainInner.height()) {
        Clover.navigation.navMain.height(Clover.navigation.navMain.height() - 10);
        if (immediate) {
          Clover.navigation.shrinkNavHeight(immediate)
        } else {
          setTimeout(Clover.navigation.shrinkNavHeight, 1)
        }
      } else {
        Clover.navigation.isNavDown = false;
        Clover.navigation.navMain.height(Clover.navigation.maxNavHeight)
      }
    };
    Clover.navigation.setSubNavbarPosition = function() {
      var self = this,
        pos = ((self.navMain.height() < self.maxNavHeight) ? self.lastScrollTop - (self.maxNavHeight - self.navMain.height()) : self.lastScrollTop) + 3;
      self.subNav.css({
        position: "fixed",
        top: self.navMain.height()
      })
    };
    Clover.navigation.showSubNavbar = function(subnav) {
      var self = this;
      self.setSubNavbarPosition();
      self.subNav.removeClass("hidden");
      self.subNav.find(".subnav").addClass("hidden");
      self.subNav.find("div.subnav-" + subnav).removeClass("hidden");
      $("input[type=text]:visible", self.subNav.find("div.subnav-" + subnav)).focus();
      $("body").trigger("cloverNavigationSubnavToggle", [true]);
      if (isMobile.any()) {
        if (isMobile.iOS()) {
          window.scrollTo(0, 1);
          Clover.navigation.iOSHalt = true
        }
        if (subnav === "compact") {
          if ($(".subnav-compact").height() + $(".navbar-main").height() > window.innerHeight) {
            $(".subnav-compact").height(window.innerHeight - $(".navbar-main").height()).css("overflow-y", "auto")
          }
        }
      }
      self.knownLocation()
    };
    Clover.navigation.hideSubNavbar = function() {
      if (typeof Clover.navigation.subNav == "undefined") {
        Clover.navigation.subNav = $(".sub-navbar")
      }
      Clover.navigation.subNav.addClass("hidden");
      $("body").trigger("cloverNavigationSubnavToggle", [false])
    };
    Clover.navigation.setMinim = function() {
      var self = this;
      if (self.window.width() > self.navCollapseBreak) {
        if (self.navMainInner.hasClass("minim")) {
          self.navMainInner.removeClass("minim");
          self.clearSubNav()
        }
      } else {
        if (!self.navMainInner.hasClass("minim")) {
          self.navMainInner.addClass("minim")
        }
      }
    };
    Clover.navigation.underscoreTmplSettings = {
      interpolate: /\<\@\=(.+?)\@\>/gim,
      evaluate: /\<\@([\s\S]+?)\@\>/gim,
      escape: /\<\@\-(.+?)\@\>/gim
    };
    Clover.navigation.underscoreTmplSettingMus = {
      interpolate: /\{\{(.+?)\}\}/g
    };
    Clover.navigation.underscoreTmplSettingDefault = function() {
      _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      }
    };
    Clover.navigation.storeLocatorCookieOptions = {
      domain: ".t-mobile.com",
      path: "/",
      expires: 100
    };
    Clover.navigation.storeLocator = function() {
      var $form = $("#f_store"),
        jsTemplate = $("script.storeTemplate"),
        template, cookieZIP, cookieMap, defaultLocation = $("#mark-as-default-location"),
        markDefaultLocation = $("#mark-as-default-location-text");
      $form.on("submit", function(ev) {
        ev.preventDefault()
      });
      if ($form.size() == 0 || jsTemplate.size() == 0) {
        return
      }
      _.templateSettings.variable = "tmoSt";
      template = _.template(jsTemplate.html(), null, Clover.navigation.underscoreTmplSettings);
      cookieZIP = Clover.getQuerystringVal($.cookie("TMobileUSStore"), "ZIP");
      cookieMap = $.cookie("mapLocation");
      if (cookieMap != null || cookieMap != undefined) {
        if ($.type(cookieMap) === "string" && cookieMap.slice(cookieMap.length - 5, cookieMap.length) == ", USA") {
          cookieMap = cookieMap.slice(0, cookieMap.length - 5)
        }
        $("#c_store").val(cookieMap);
        if ($("#p_store")) {
          $("#p_store").val(cookieMap)
        }
        ShowClearField()
      }
      if (cookieZIP) {
        ShowClearField();
        $("input.def-zip-code").val(cookieZIP);
        $("#mark-as-default-location").is(":checked");
        $(".mark-as-default-location-text-disabled").hide();
        $("#mark-as-default-location-text").hide();
        $(".default-location-set-text").show()
      }
      $("#c_store").keypress(function(e) {
        Clover.navigation.loadGoogleMapsAPI();
        if (e.which == 13) {
          e.preventDefault();
          ShowData()
        }
      });
      $("body").on("mousedown touchend", ".find-stores-link", function(e) {
        e.preventDefault();
        ShowData()
      });
      defaultLocation.click(function() {
        if (defaultLocation.is(":checked")) {
          var ckval = $("#mark-as-default-location").val();
          var newcookievalue = Clover.setQuerystringVal($.cookie("TMobileUSStore"), "ZIP", ckval);
          $.cookie("TMobileUSStore", newcookievalue, Clover.navigation.storeLocatorCookieOptions)
        } else {
          var newcookievalue = Clover.unsetQuerystringVal($.cookie("TMobileUSStore"), "ZIP")
        }
      });
      markDefaultLocation.mousedown(function(e) {
        e.preventDefault();
        var ckval = $("#mark-as-default-location").val();
        var newcookievalue = Clover.setQuerystringVal($.cookie("TMobileUSStore"), "ZIP", ckval);
        $.cookie("TMobileUSStore", newcookievalue, Clover.navigation.storeLocatorCookieOptions);
        $(".mark-as-default-location-text-disabled").hide();
        $("#mark-as-default-location-text").hide();
        $(".default-location-set-text").show()
      });

      function ShowClearField() {
        $(".clear-input").show();
        $(".search-input").hide()
      }
      $(".clear-input").click(function() {
        ClearSearchField()
      });

      function ClearSearchField() {
        $(".clear-input").hide();
        $(".search-input").show();
        $(".addresses-list").html("");
        $("#c_store").val("");
        $("#c_store").removeClass("notfound")
      }

      function HideSearch() {
        var inputValue = $("#c_store").val();
        if (inputValue.length > 1) {
          $(".search-input").hide()
        } else {
          $(".search-input").show()
        }
      }
      $("#c_store").keypress(function() {
        ShowClearField()
      });
      $(".pac-container").css("z-index", 9999);
      Clover.navigation.storeLocator.initialize = function() {
        var input = document.getElementById("c_store");
        var options = {
          componentRestrictions: {
            country: "us"
          }
        };
        if (typeof google !== "undefined") {
          var autocomplete = new google.maps.places.Autocomplete(input, options);
          google.maps.event.addListener(autocomplete, "place_changed", function() {
            var place = autocomplete.getPlace();
            if (place.geometry) {
              $("#c_store").removeClass("notfound");
              $("error-msg").addClass("hidden");
              $(".error-msg").css("line-height", "0");
              $(".mark-as-default-location-text-disabled").hide();
              $("#mark-as-default-location-text").hide();
              $(".default-location-set-text").hide();
              ShowData()
            } else {
              geocoder2.geocode($("#c_store").val(), function(results, status) {
                var rd = false;
                if (status == google.maps.GeocoderStatus.OK) {
                  if (Clover.navigation.CoverageLocation.validateCountry(results)) {} else {}
                } else {}
                input.className = "span notfound";
                $(".addresses-list").html("");
                $("#mark-as-default-location, .checkbox").hide();
                $(".error-msg").css("line-height", "26px")
              });
              return
            }
          })
        }
      };

      function getZipCodeFromCookie() {
        return Clover.getQuerystringVal($.cookie("TMobileUSStore"), "ZIP")
      }

      function urlStoreLocator(sUrl) {
        additionalUrl = $("#additional-stores").attr("href");
        if (additionalUrl.indexOf("?") !== -1) {
          additionalUrl = additionalUrl.substring(0, additionalUrl.lastIndexOf("?"))
        }
        $("#additional-stores").attr("href", additionalUrl + "?additionalUrl=" + encodeURI(sUrl))
      }

      function ShowData() {
        var input = document.getElementById("c_store");
        $(".pac-container").hide();
        $(".addresses-list address").hide();
        $(".serviceError").addClass("hidden");
        $(".countryError").addClass("hidden");
        $(".emptyError").addClass("hidden");
        var inputValue = $("#c_store").val(),
          errorText = $form.find(".error-msg").html();
        if (inputValue) {
          $("#floatingBarsG").show();
          $(".mark-as-default-location-text-disabled").show()
        } else {
          $("#floatingBarsG").hide;
          $(".mark-as-default-location-text-disabled").hide()
        }
        if (!inputValue.length) {
          $(".emptyError").removeClass("hidden");
          return
        }
        $("#mark-as-default-location").val(inputValue.replace(/[^\d.]/g, ""));
        $.ajax({
          type: "get",
          url: ((typeof UNAV_HOST !== "undefined") ? UNAV_HOST : "") + window.STORE_LOCATOR_QUICK_SEARCH_SERVLET_PATH + "." + inputValue + ".html",
          dataType: (typeof UNAV_HOST !== "undefined") ? "jsonp" : "json",
          success: function(data) {
            if (_.isEmpty(data.stores)) {
              if (typeof google !== "undefined") {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                  address: inputValue
                }, function(results, status) {
                  var rd = false;
                  if (status == google.maps.GeocoderStatus.OK) {
                    if (Clover.navigation.CoverageLocation.validateCountry(results)) {
                      $(".serviceError").removeClass("hidden")
                    } else {
                      $(".countryError").removeClass("hidden")
                    }
                  } else {
                    $(".serviceError").removeClass("hidden")
                  }
                  input.className = "span notfound";
                  $(".addresses-list").html("");
                  $(".error-msg").css("line-height", "26px")
                })
              }
              $(".addresses-list").show();
              $(".mark-as-default-location-text-disabled").hide();
              $("#mark-as-default-location-text").hide();
              $(".default-location-set-text").hide();
              $("#floatingBarsG").hide()
            } else {
              $(".error-msg").addClass("hidden");
              $(".addresses-list address").show();
              $(".addresses-list").html(template(data.stores));
              $("#floatingBarsG").hide();
              ShowClearField();
              urlStoreLocator($("#c_store").val());
              if (!data.zipCode) {
                $("#mark-as-default-location").hide()
              } else {
                if (data.zipCode == getZipCodeFromCookie()) {
                  $("#mark-as-default-location").val(data.zipCode);
                  $("#mark-as-default-location").attr("checked", true);
                  $(".mark-as-default-location-text-disabled").hide();
                  $("#mark-as-default-location-text").show();
                  $(".default-location-set-text").hide()
                } else {
                  $("#mark-as-default-location").val(data.zipCode);
                  $("#mark-as-default-location").attr("checked", false);
                  if (data.zipCode) {
                    $(".mark-as-default-location-text-disabled").hide();
                    $("#mark-as-default-location-text").show();
                    $(".default-location-set-text").hide()
                  }
                }
              }
              var ckval = $("#mark-as-default-location").val();
              var newcookievalue = Clover.setQuerystringVal($.cookie("TMobileUSStore"), "ZIP", ckval);
              console.log("setting store cookie", newcookievalue);
              $.cookie("TMobileUSStore", newcookievalue, Clover.navigation.storeLocatorCookieOptions)
            }
          },
          error: function() {
            $("#floatingBarsG").hide();
            $(".addresses-list address").show();
            $(".addresses-list").html(errorText)
          }
        })
      }
    };
    Clover.navigation.storeLocatorMenu = function() {
      if (isMobile.any()) {
        Clover.navigation.subNav.find(".subnav-store-locator").css({
          "max-height": 520,
          "overflow-y": "scroll"
        })
      }
    };
    Clover.navigation.getUserPreferredStoreZip = function() {
      return $("#c_store").val()
    };
    Clover.navigation.closeNavBarAll = function() {
      $(".pac-container").hide().removeClass("main-nav").removeClass("extra");
      $(".navigation .sub-navbar").addClass("hidden");
      $(".mainnav > .nav-links li, .mainnav > .glyph-menu li").removeClass("active");
      Clover.navigation.CoverageLocation.resetSearch();
      $("body").trigger("cloverNavigationSubnavToggle", [false])
    };
    Clover.navigation.closeNavBarEl = function(parnt, him, that) {
      Clover.navigation.navMain.find(".active").removeClass("active");
      parnt.addClass("active");
      him.showSubNavbar(that.data("subnav"))
    };
    Clover.navigation.checkForSubNavHeight = function() {
      if (Clover.notificationUtil.container) {
        if (!Clover.notificationUtil.container.hasClass("hidden")) {
          if ($(window).height() < 416) {
            $(".sub-navbar").css({
              height: (416 - Clover.navigation.navMain.height()) + "px"
            })
          }
        }
      }
    };
    Clover.navigation.touchClickHandler = function(e) {
      if (!Clover.navigation.dragging) {
        window.location.href = e
      } else {
        Clover.navigation.dragging = false
      }
    };
    Clover.navigation.bindEvents = function() {
      var self = this,
        expandableLinks = Clover.navigation.navMain.find("a").filter(function(index, item) {
          var el = $(item);
          return (el.data("subnav") != undefined)
        });
      $(window).on("scroll.navigation", function(ev) {
        if (!Clover.navigation.iOSHalt) {
          self.checkScroll();
          self.setNavListWidth()
        } else {
          Clover.navigation.iOSHalt = false
        }
      });
      if (!isMobile.any()) {
        $(".subnav-shop .menu-left-shop-list li a").click(function(ev, a) {
          if (typeof ev.originalEvent == "object") {
            window.location.href = $(this).attr("href");
            return true
          }
        })
      }
      Clover.navigation.checkForSubNavHeight();
      if (Clover.navigation.touch && ($(window).width() < 723)) {
        $(".sub-navbar").bind("touchmove", function(e) {
          Clover.navigation.dragging = true
        });
        $(".sub-navbar a").each(function(e) {
          $(this).attr("link", $(this).attr("href"));
          var s = $(this).attr("href");
          $(this).attr("href", "javascript: Clover.navigation.touchClickHandler('" + s + "');")
        })
      }
      $(window).on("resize", function(ev) {
        self.setMinim();
        if (!self.navMainInner.hasClass("minim")) {
          self.setNavLeft();
          self.setNavListWidth()
        }
        if (Clover.notificationUtil.container.height()) {
          Clover.navigation.maxNavHeight = Clover.navigation.navMainInner.outerHeight() + Clover.notificationUtil.container.outerHeight() - 1;
          Clover.navigation.navMain.height(Clover.navigation.maxNavHeight);
          $(".container-main").css({
            "padding-top": Clover.navigation.maxNavHeight - 3
          })
        }
      });
      $(".navbar-main .nav-menu-collapse a", "body").not(".glyph-cart,.count").on("click", function(e) {
        e.preventDefault();
        var parnt = $(this).parent();
        var that = $(this);
        var him = self;
        if ($(this).data("touch-link") != undefined) {
          if (($(this).data("touch-link")) && (isMobile.any()) && ($(window).height() < 690)) {
            window.location.href = $("div.subnav-" + $(this).data("subnav")).find("a.view-full").attr("href");
            return false
          }
        }
        if (e.originalEvent == undefined) {
          return
        }
        if (parnt.hasClass("active")) {
          $(".pac-container").addClass("main-nav");
          if ($("div.alert").length > 0) {
            $(".pac-container").addClass("extra")
          }
          parnt.removeClass("active");
          self.hideSubNavbar();
          if ($("html").hasClass("touch")) {
            $("div.container-fluid.container-main").off("touchend MSPointerUp")
          }
        } else {
          Clover.navigation.closeNavBarEl(parnt, him, that);
          $(".pac-container").removeClass("main-nav").removeClass("extra");
          if ($("html").hasClass("touch")) {
            $("div.container-fluid.container-main").on("touchend MSPointerUp", function() {
              Clover.navigation.closeNavBarAll();
              $("div.container-fluid.container-main").off("touchend MSPointerUp")
            })
          }
        }
      });
      $("body").on("mouseover", ".navbar-main .nav-menu-collapse a", function(e) {
        if (isMobile.any()) {
          e.preventDefault();
          e.stopPropagation();
          return false
        }
        if ($("html:animated, body:animated").length > 0) {
          e.preventDefault();
          return false
        }
        e.preventDefault();
        $(".pac-container").hide();
        var parnt = $(this).parent();
        if (parnt.hasClass("active")) {
          parnt.removeClass("active")
        } else {
          Clover.navigation.pendingMenu = $(this).data("subnav");
          clearTimeout(Clover.navigation.delayedSubnavOpenTimer);
          Clover.navigation.delayedSubnavOpenTimer = null;
          Clover.navigation.delayedSubnavOpenTimer = setTimeout(function(e) {
            Clover.navigation.navMain.find(".active").removeClass("active");
            parnt.addClass("active");
            $(".pac-container").addClass("main-nav");
            if ($("div.alert").length > 0) {
              $(".pac-container").addClass("extra")
            }
            self.showSubNavbar(Clover.navigation.pendingMenu)
          }, 120)
        }
      });
      $("body").on("mouseout", ".navbar-main .nav-menu-collapse a", function(e) {
        clearTimeout(Clover.navigation.delayedSubnavOpenTimer);
        Clover.navigation.delayedSubnavOpenTimer = null;
        Clover.navigation.pendingMenu = $(this).data("subnav")
      });
      $("body").on("mouseover", ".subnav a", function(e) {
        if (window.innerWidth > 723) {
          Clover.navigation.pendingTab = $(this);
          clearTimeout(Clover.navigation.delayedHoverTimer);
          Clover.navigation.delayedHoverTimer = null;
          Clover.navigation.delayedHoverTimer = setTimeout(function(e) {
            try {
              Clover.navigation.pendingTab.click()
            } catch (e) {
              console.log("delayedHover Error: ", e)
            }
          }, 100)
        }
      });
      $("body").on("mouseout", ".subnav a", function(e) {
        clearTimeout(Clover.navigation.delayedHoverTimer);
        Clover.navigation.delayedHoverTimer = null;
        Clover.navigation.pendingTab = null
      });
      $(".container-main").on("click", function() {
        Clover.navigation.clearSubNav()
      });
      $(".sub-navbar").on("click", function(event) {
        if ($(event.target).parents(".subnav").size() < 1) {
          Clover.navigation.clearSubNav()
        }
      });
      $("body").on("mouseleave", ".navbar, .subnav", function(e) {
        if (!$("html").hasClass("touch")) {
          clearTimeout(Clover.navigation.delayedSubnavOpenTimer);
          Clover.navigation.delayedSubnavOpenTimer = null;
          Clover.navigation.delayedSubnavCloseTimer = setTimeout(function(e) {
            Clover.navigation.closeNavBarAll()
          }, 130)
        }
      });
      $("body").on("click", ".nav_search_form", function() {
        Clover.navigation.delayedSubnavCloseTimer = setTimeout(function(e) {
          Clover.navigation.closeNavBarAll()
        }, 130)
      });
      $("body").on("mouseenter", ".navbar, .subnav, .navbar li.primary, .navbar li.glyph, .pac-container", function() {
        clearTimeout(Clover.navigation.delayedSubnavCloseTimer)
      });
      $(document).on("alertClose", function(e) {
        Clover.navigation.checkForSubNavHeight()
      })
    };
    Clover.navigation.knownLocation = function() {
      if ($.cookie("TMobileUSStore")) {
        $(".coverage-location-unknown").addClass("hidden");
        $(".coverage-location-known").removeClass("hidden")
      }
    };
    Clover.navigation.coverage = function() {
      var coverageSubnav = $(".subnav-coverage", Clover.navigation.subNav);
      $(".coverage-location-unknown form", coverageSubnav).on("submit", function(ev) {
        ev.preventDefault();
        var cookieval = parseInt($(this).find("#location").val());
        if (_.isNumber(cookieval)) {
          $.cookie("TMobileUSStore", "ZIP=" + cookieval, Clover.navigation.storeLocatorCookieOptions);
          $(".coverage-location-unknown", coverageSubnav).addClass("hidden");
          $(".coverage-location-known", coverageSubnav).removeClass("hidden")
        }
      });
      $("#coverage-swap", coverageSubnav).click(function(ev) {
        ev.preventDefault();
        $(".coverage-location-unknown", coverageSubnav).removeClass("hidden");
        $("#location", coverageSubnav).focus();
        $(".coverage-location-known", coverageSubnav).addClass("hidden")
      });
      $("#locationInput").on("keypress", function() {
        Clover.navigation.loadGoogleMapsAPI()
      })
    };
    Clover.navigation.myAccount = function() {
      if ($.cookie("MyTMobile") !== null) {
        $(".login-controls .loggedin").removeClass("hidden");
        $(".login-controls .loggedout").addClass("hidden");
        $(".login-controls .signup").addClass("hidden")
      } else {
        $(".login-controls .loggedout").removeClass("hidden");
        $(".login-controls .signup").removeClass("hidden");
        $(".login-controls .loggedin").addClass("hidden")
      }
    };
    Clover.navigation.seachForm = function() {
      $(".main-nav-search").on("submit", function(ev) {
        ev.preventDefault();
        var keyFld = $(this).find(".main-nav-search-key"),
          params = $(this).serialize(),
          action = $(this).attr("action"),
          actionParams = action + "?" + params;
        if (keyFld.val() !== "" && keyFld.attr("placeholder") !== keyFld.val()) {
          window.location.href = actionParams;
          return false
        } else {
          keyFld.parent().addClass("control-group error");
          keyFld.focus()
        }
      });
      $(".main-nav-search-key").on("change", function() {
        $(this).parent().removeClass("control-group error")
      })
    };
    Clover.navigation.GoogleMapsAPIStarted = false;
    Clover.navigation.GoogleMapsAPILoaded = false;
    Clover.navigation.loadGoogleMapsAPI = function() {
      if (Clover.navigation.GoogleMapsAPIStarted === false) {
        Clover.navigation.GoogleMapsAPIStarted = true;
        if ($("#googleMapsApiScript").size() === 0) {
          $("<script>").attr({
            src: "//maps.googleapis.com/maps/api/js?libraries=places&client=gme-tmobileusa3&sensor=false&v=3.12&language=en&callback=Clover.navigation.initGoogleMapAPIDependencies",
            id: "googleMapsApiScript",
            type: "text/javascript"
          }).appendTo("body")
        } else {
          if (Clover.navigation.GoogleMapsAPILoaded === false) {
            Clover.navigation.initGoogleMapAPIDependencies()
          }
        }
      }
    };
    Clover.navigation.initGoogleMapAPIDependencies = function() {
      if (typeof google !== "undefined") {
        Clover.navigation.GoogleMapsAPIStarted = true;
        Clover.navigation.GoogleMapsAPILoaded = true;
        Clover.navigation.CoverageLocation.init();
        Clover.navigation.storeLocator.initialize()
      }
    };
    Clover.navigation.init = function() {
      Clover.navigation.lastScrollTop = 0;
      Clover.navigation.scrollTimer = 0;
      Clover.navigation.maxNavHeight = 0;
      Clover.navigation.navCollapseBreak = 699;
      Clover.navigation.isNavDown = false;
      Clover.navigation.navMainInner = $(".navbar-main > .navbar-inner");
      Clover.navigation.navMain = $(".navbar-main");
      Clover.navigation.subNav = $(".sub-navbar");
      Clover.navigation.window = $(window);
      Clover.navigation.touch = !!("ontouchstart" in window) || !!("onmsgesturechange" in window);
      Clover.navigation.dragging = false;
      Clover.navigation.delayedHoverTimer = null;
      Clover.navigation.pendingTab = "";
      Clover.navigation.delayedSubnavOpenTimer = null;
      Clover.navigation.delayedSubnavCloseTimer = null;
      Clover.navigation.pendingMenu = null;
      Clover.navigation.seachForm();
      Clover.navigation.hideSubNavbar();
      Clover.navigation.maxNavHeight = Clover.navigation.navMainInner.outerHeight();
      if (Clover.notificationUtil.container.height()) {
        Clover.navigation.maxNavHeight = Clover.navigation.navMainInner.outerHeight() + Clover.notificationUtil.container.outerHeight() - 1
      }
      Clover.navigation.navMain.height(Clover.navigation.maxNavHeight);
      $(".container-main").css({
        "padding-top": Clover.navigation.maxNavHeight - 3
      });
      Clover.navigation.bindEvents();
      Clover.navigation.setNavLeft();
      Clover.navigation.setMinim();
      Clover.navigation.myAccount();
      Clover.navigation.storeLocatorMenu();
      Clover.navigation.storeLocator();
      Clover.navigation.coverage()
    };
    if (!UNAV_PAGE) {
      if (!Clover.isEditMode()) {
        setTimeout(function() {
          Clover.navigation.init()
        }, 100)
      } else {
        Clover.navigation.hideSubNavbar()
      }
    }
    Clover.navigation.CoverageLocation.getLocationAddress = function(location) {
      var $locationForm = $(".coverage-location-form"),
        $searchInput = $("input[type='text']", $locationForm),
        $searchButton = $("button", $locationForm),
        $interstitial = $(".interstitial-modal"),
        isInterstitial = $interstitial.length > 0,
        address = $searchInput.val(),
        cookieValue = Clover.navigation.CoverageLocation.mapLocationCookie,
        searchAddress, geolocationSupported, cookieNull, geocoder;
      if (cookieValue === null || cookieValue === undefined || cookieValue === "" || address !== cookieValue) {
        cookieNull = true
      } else {
        cookieNull = false
      }
      if (location != undefined) {
        searchAddress = location;
        geolocationSupported = true
      } else {
        searchAddress = {
          address: address
        };
        geolocationSupported = false;
        cookieNull = true
      }
      if (typeof google !== "undefined") {
        geocoder = new google.maps.Geocoder();
        geocoder.geocode(searchAddress, function(results, status) {
          var rd = false;
          if (status == google.maps.GeocoderStatus.OK) {
            if (Clover.navigation.CoverageLocation.validateCountry(results)) {
              if (geolocationSupported) {
                address = results[0].formatted_address
              }
              if (cookieNull) {
                Clover.navigation.CoverageLocation.mapLocationCookie = address;
                try {
                  if (Clover.coverage) {
                    if (geolocationSupported) {
                      Clover.coverage.geoLoaded(address)
                    } else {
                      Clover.coverage.loadAddress(address)
                    }
                    rd = false
                  } else {
                    if (!geolocationSupported) {
                      $.cookie("mapLocation", address, {
                        path: "/"
                      });
                      rd = true
                    }
                  }
                } catch (e) {}
                Clover.navigation.CoverageLocation.setCoverageSearchInputsValue(address);
                cookieNull = false
              }
              Clover.navigation.CoverageLocation.showErrorMessage("RESET_MESSAGES");
              if (!geolocationSupported && rd) {
                Clover.navigation.CoverageLocation.redirectToCoverageHome()
              }
            } else {
              if (!geolocationSupported) {
                Clover.navigation.CoverageLocation.showErrorMessage("INVALID_COUNTRY")
              }
            }
            Clover.navigation.CoverageLocation.hideElements()
          } else {
            if (!geolocationSupported) {
              Clover.navigation.CoverageLocation.showErrorMessage("INVALID_VALUE")
            }
            Clover.navigation.CoverageLocation.hideElements()
          }
        })
      }
    };
    Clover.navigation.CoverageLocation.validateCountry = function(r) {
      var countryList = ["US", "CA", "VI", "PR", "MX"],
        isGood = false,
        found = false,
        country, i = 0;
      for (i = 0; i < r.length && !found; i++) {
        $.each(r[i].address_components, function(i, v) {
          if (v.types[0] === "country") {
            country = v.short_name;
            found = true;
            return false
          }
        })
      }
      for (i = 0; i < countryList.length && !isGood; i++) {
        if (countryList[i] === country) {
          isGood = true
        }
      }
      return isGood
    };
    Clover.navigation.CoverageLocation.showErrorMessage = function(type) {
      var $locationForm = $(".coverage-location-form"),
        $searchInput = $("input[type='text']", $locationForm),
        $searchButton = $("button", $locationForm);
      $controlGroup = $(".control-group", $locationForm);
      switch (type) {
        case "INVALID_COUNTRY":
          $(".message.invalidCountry", $locationForm).removeClass("hidden");
          $(".message.invalid", $locationForm).addClass("hidden");
          $controlGroup.addClass("error");
          break;
        case "INVALID_VALUE":
          $(".message.invalid", $locationForm).removeClass("hidden");
          $(".message.invalidCountry", $locationForm).addClass("hidden");
          $controlGroup.addClass("error");
          break;
        case "RESET_MESSAGES":
        default:
          $(".message.invalid", $locationForm).addClass("hidden");
          $(".message.invalidCountry", $locationForm).addClass("hidden");
          $controlGroup.removeClass("error")
      }
    };
    Clover.navigation.CoverageLocation.resetSearch = function() {
      var $locationForm = $(".coverage-location-form"),
        $searchInput = $("input[type='text']", $locationForm);
      $searchInput.blur();
      $(".pac-container").hide()
    };
    Clover.navigation.CoverageLocation.redirectToCoverageHome = function() {
      var $locationForm = $(".coverage-location-form"),
        $searchButton = $("button", $locationForm),
        coverageHomeUrl = $searchButton.data("coverage-home");
      if (coverageHomeUrl) {
        var url = (/^http/.test(coverageHomeUrl)) ? coverageHomeUrl : location.protocol + "//" + location.host + coverageHomeUrl;
        window.location.href = url
      }
    };
    Clover.navigation.CoverageLocation.getUserGeolocation = function() {
      var latLng;
      var longitude;
      var latitude;
      longitude = Clover.coordinates.getLongitude();
      latitude = Clover.coordinates.getLatitude();
      if (typeof google !== "undefined") {
        if (latitude && longitude) {
          latLng = new google.maps.LatLng(latitude, longitude);
          Clover.navigation.CoverageLocation.getLocationAddress({
            latLng: latLng
          })
        } else {
          Clover.coordinates.getLocation();
          longitude = Clover.coordinates.getLongitude();
          latitude = Clover.coordinates.getLatitude();
          if (latitude && longitude) {
            latLng = new google.maps.LatLng(latitude, longitude);
            Clover.navigation.CoverageLocation.getLocationAddress({
              latLng: latLng
            })
          } else {
            Clover.navigation.CoverageLocation.hideElements()
          }
        }
      }
    };
    Clover.navigation.CoverageLocation.hideElements = function() {
      if (Clover.navigation.CoverageLocation.mapLocationCookie) {}
    };
    Clover.navigation.CoverageLocation.setCoverageSearchInputsValue = function(value) {
      var $mapContainer = $(".mapContainer .inputBox");
      var $interstitial = $(".interstitial-modal");
      var $subNavLocationForm = $(".coverage-location-form");
      var $slocatorInput = $("#p_store");
      var existMapContainer = $mapContainer.length > 0;
      var existInterstitial = $interstitial.length > 0;
      if ($slocatorInput) {
        $slocatorInput.val(value)
      }
      if (existMapContainer) {}
      if (existInterstitial) {}
      $("input.def-zip-code").val(value);
      $("input[type='text']", $subNavLocationForm).val(value)
    };
    Clover.navigation.CoverageLocation.init = function() {
      var $locationForm = $(".coverage-location-form"),
        $searchInput = $("input[type='text']", $locationForm),
        $searchButton = $("button", $locationForm),
        input, autocomplete;
      $(".container-main").css({
        "padding-top": Clover.navigation.maxNavHeight - 3
      });
      try {
        Clover.navigation.navMain.offsetTop = Clover.navigation.navMain.offset()["top"]
      } catch (e) {}
      input = document.getElementById("locationInput");
      var options = {
        componentRestrictions: {
          country: "us"
        }
      };
      if (typeof google !== "undefined") {
        autocomplete = new google.maps.places.Autocomplete(input, options)
      }
      Clover.navigation.CoverageLocation.getUserGeolocation(Clover.navigation.CoverageLocation.hideElements);
      Clover.navigation.CoverageLocation.mapLocationCookie = $.cookie("mapLocation");
      if (Clover.navigation.CoverageLocation.mapLocationCookie) {
        Clover.navigation.CoverageLocation.setCoverageSearchInputsValue(Clover.navigation.CoverageLocation.mapLocationCookie)
      }
      $searchButton.click(function(e) {
        e.preventDefault();
        Clover.navigation.CoverageLocation.getLocationAddress()
      });
      $searchInput.keypress(function(e) {
        if (e.which == 13) {
          e.preventDefault();
          Clover.navigation.CoverageLocation.getLocationAddress()
        }
        if ($(this).hasClass("error")) {
          $(this).removeClass("error")
        }
      })
    }
  })
})(window.jQuery);
var Clover = Clover || {};
Clover.top = {};
(function($) {
  $(function() {
    Clover.top.bindEvents = function() {
      $('a[href="#top"]').on("click", function(e) {
        e.preventDefault();
        $("html, body").animate({
          scrollTop: 0
        }, 500);
        location.hash = ""
      })
    };
    Clover.top.init = function() {
      Clover.top.bindEvents()
    };
    $(document).ready(function() {
      if (!Clover.isEditMode()) {
        Clover.top.init()
      }
    })
  })
})(window.jQuery);
var Clover = Clover || {};
Clover.footer = {};
(function($) {
  $(function() {
    Clover.footer.setContentCSS = function() {
      var self = this,
        css = {
          "margin-bottom": self.footerContainer.outerHeight() - 3
        };
      self.mainContainer.addClass("container-main-footer-locked");
      self.mainContainer.css(css)
    };
    Clover.footer.undoContentCss = function() {
      var css = {
        "margin-bottom": "inherit"
      };
      this.mainContainer.removeClass("container-main-footer-locked");
      this.mainContainer.css(css)
    };
    Clover.footer.lockFooter = function() {
      this.footerContainer.removeClass("footer-mobile");
      if ($(window).width() > 723 && $(window).height() > this.footerContainer.height() + 100) {
        this.setContentCSS();
        this.footerContainer.addClass("footer-locked")
      } else {
        this.unlockFooter()
      }
    };
    Clover.footer.unlockFooter = function() {
      this.footerContainer.removeClass("footer-locked");
      if ($(window).width() <= 723) {
        this.footerContainer.addClass("footer-mobile")
      }
      this.undoContentCss()
    };
    Clover.footer.bindEvents = function() {
      $("footer .section-collapsible h3").on("click", function() {
        if (!$(this).parents("footer").hasClass("footer-mobile")) {
          return
        }
        if ($(this).parents(".section-collapsible").hasClass("section-expanded")) {
          $(this).parents(".section-collapsible").removeClass("section-expanded")
        } else {
          $(this).parents(".section-collapsible").addClass("section-expanded")
        }
      })
    };
    Clover.footer.init = function() {
      Clover.footer.mainContainer = $(".container-main");
      Clover.footer.footerContainer = $("footer.main-footer");
      Clover.footer.lockFooter();
      Clover.footer.bindEvents()
    };
    if (!Clover.isEditMode()) {
      if (!UNAV_PAGE) {
        $(window).on("resize", function() {
          Clover.footer.lockFooter()
        });
        Clover.footer.init()
      }
    }
  })
})(window.jQuery);
var Clover = Clover || {};
Clover.bootstrApaccordionFix = {};
(function($) {
  $(function() {
    Clover.bootstrApaccordionFix.init = function() {
      $(".accordion.collapsible-component").on("hidden", function(e) {
        e.stopPropagation();
        $this = $(this);
        $this.find(".accordion-group .collapse").each(function() {
          var hasAnimation = (Modernizr.csstransitions) ? $(this).hasClass("in") : $(this).height() == 0;
          if (!hasAnimation) {
            $(this).parent(".accordion-group").find("a.accordion-toggle").addClass("collapsed")
          }
        })
      })
    };
    Clover.bootstrApaccordionFix.cancelFix = function() {
      $(".accordion.collapsible-component").off("hidden")
    }
  })
})(window.jQuery);
var Clover = Clover || {};
Clover.bootstrapFixes = {};
(function($) {
  $(function() {
    function NumericField(e) {
      if (window.event) {
        keynum = e.keyCode
      } else {
        if (e.which) {
          keynum = e.which
        }
      }
      if (keynum != 8 && keynum != 0 && (keynum < 48 || keynum > 57)) {
        return false
      } else {
        return true
      }
    }
    Clover.bootstrapFixes.bootstrapDropdownWidth = function() {
      var maxWidth = 0;
      $(".generic-dropdown").each(function() {
        var $dropdownEl = $(this).find(".dropdown-menu");
        $dropdownEl.css({
          display: "block",
          visibility: "hidden"
        }), $dropDownCaret = $(this).find(".caret"), $dropdownItems = $(this).find(".dropdown-menu a");
        var isCarouselDropdown = $(this).find(".category-selected").size() > 0;
        maxWidth = 0;
        $dropdownItems.each(function() {
          maxWidth = Math.max(maxWidth, $(this).outerWidth())
        });
        $dropdownEl.removeAttr("style");
        if (isCarouselDropdown) {
          $(this).width(maxWidth + (maxWidth * 0.33) + $dropDownCaret.outerWidth() + 8)
        } else {
          $(this).width(maxWidth + $dropDownCaret.outerWidth() + 5)
        }
      })
    };
    Clover.bootstrapFixes.modalBackdropFix = function() {
      $(".modal").each(function() {
        $(this).appendTo("body")
      })
    };
    Clover.bootstrapFixes.init = function() {
      Clover.bootstrapFixes.bootstrapDropdownWidth();
      Clover.bootstrapFixes.modalBackdropFix()
    };
    $(function() {
      Clover.bootstrapFixes.init()
    })
  })
})(window.jQuery);
Clover = Clover || {};
Clover.princingModule = Clover.princingModule || {};
(function($) {
  $(function() {
    Clover.princingModule.modalUrl = $("[data-price-component]");
    Clover.princingModule.modalContainer = $(".modal.pricing-component");
    Clover.princingModule.hideClass = "hide";
    Clover.princingModule.renderModal = function(d) {
      var scrollPositon = $(window).scrollTop();
      if ($(".modal").size()) {
        $(".modal").modal("hide")
      }
      if (!Clover.princingModule.modalContainer.size()) {
        $("body").append('<div class="modal fade pricing-component"></div>');
        Clover.princingModule.modalContainer = $(".modal.pricing-component")
      }
      Clover.princingModule.modalContainer.css("top", scrollPositon + 60);
      Clover.princingModule.modalContainer.html(d).modal("show");
      Clover.princingModule.modalContainer.on("hidden", function(e) {
        if ($(e.target).is(".modal")) {
          $(this).remove()
        }
      })
    };
    Clover.princingModule.setStockStatus = function(outOfStockStatus) {
      if (!outOfStockStatus) {
        $("div.out-of-stock").addClass(Clover.princingModule.hideClass);
        $("div.in-stock").removeClass(Clover.princingModule.hideClass)
      } else {
        $("div.in-stock").addClass(Clover.princingModule.hideClass);
        $("div.out-of-stock").removeClass(Clover.princingModule.hideClass)
      }
    };
    Clover.princingModule.toggleCarriers = function() {
      $(".spec-row:not(.header)").find(".spec-cell:not(:eq(0),:eq(1),:eq(2))").hide();
      $(".compare-controls").find("span").on("click", function(e) {
        var n = $(this).data("carrier") + 1;
        $(".compare-carriers").find(".spec-row:not(.header)").each(function(i) {
          $(this).find(".spec-cell:not(:eq(0),:eq(1))").hide();
          $(this).find(".spec-cell:eq(" + n + ")").show()
        })
      })
    };
    Clover.princingModule.compareCarries = function() {
      Clover.princingModule.compareCarriesContainer = $(".compare-carriers");
      Clover.princingModule.compareCarriesHeader = $(".compare-carriers .spec-row.header");
      var carriers = Clover.princingModule.compareCarriesHeader.find(".spec-cell:not(:first,.tmo-logo)");
      carriers.each(function(i) {
        $(".compare-controls").append("<div><span type='button' data-carrier=" + i + " class='btn'>" + $(this).text() + "</span></div>");
        $(this).text("")
      });
      $(".compare-controls").find("span:first").addClass("active");
      Clover.princingModule.toggleCarriers()
    };
    Clover.princingModule.ajaxCall = function(s) {
      $.ajax({
        type: "get",
        url: s,
        success: function(data) {
          Clover.princingModule.renderModal(data);
          Clover.bootstrApaccordionFix.init();
          Clover.princingModule.sincroCompare();
          setTimeout(function() {
            Clover.princingCompare.init()
          }, 200);
          Clover.princingModule.compareCarries();
          Clover.princingModule.superDecimal("#upfront-price, #monthly-price-heading")
        }
      })
    };
    Clover.princingModule.sincroCompare = function() {
      var maxHeight = 0,
        $specRow = $(".spec-row");
      $specRow.each(function() {
        $elements = $(this).find(".spec-cell");
        $elements.each(function() {
          maxHeight = Math.max(maxHeight, $(this).height())
        }).height(maxHeight);
        maxHeight = 0
      })
    };
    Clover.princingModule.superDecimal = function(selector) {
      $(selector).each(function() {
        var number = $(this).text();
        $(this).html(Clover.princingModule.getSuperDecimalValue(number))
      })
    };
    Clover.princingModule.getSuperDecimalValue = function(rawPrice) {
      var number = rawPrice.toString().split(".");
      if (!number[0] || !number[1]) {
        return rawPrice
      } else {
        if ((number[1] === "0") || (number[1] === "00")) {
          return number[0]
        } else {
          return number[0] + '<sup class="super-decimal-price">' + number[1].substring(0, 2) + "</sup>" + number[1].substring(2)
        }
      }
    };
    Clover.princingModule.bindAccordion = function() {
      $("body").on("click", "a[data-accordion-target]", function(e) {
        e.preventDefault();
        elTarget = $(this).data("accordion-target");
        $elH = $(".collapsible-component").find('a[href="' + elTarget + '"]');
        $elB = $(".collapsible-component").find(elTarget);
        $elH.click();
        if (!Modernizr.csstransitions) {
          setTimeout(function() {
            var accordionContentP = $(elTarget).offset().top - 56;
            $("html, body").animate({
              scrollTop: accordionContentP
            }, 500)
          }, 250)
        } else {
          $("#accordion2").one("hidden", function() {
            var accordionContentP = $(elTarget).offset().top - 56;
            $("html, body").animate({
              scrollTop: accordionContentP
            }, 500)
          })
        }
      })
    };
    Clover.princingModule.bind = function() {
      $("body").on("click", "[data-price-component]", function(e) {
        e.preventDefault();
        var dataPriceValue = $(this).attr("data-price-component");
        if (dataPriceValue == "#" || dataPriceValue == "") {
          return false
        }
        Clover.princingModule.ajaxCall(dataPriceValue)
      });
      Clover.princingModule.bindAccordion()
    };
    Clover.princingModule.init = function() {
      Clover.princingModule.bind()
    }
  });
  $(document).ready(function() {
    Clover.princingModule.init()
  })
})(window.jQuery);
var Clover = Clover || {};
Clover.princingCompare = Clover.princingCompare || {};
(function($) {
  $(function() {
    Clover.princingCompare.comparePlans = function(ar) {
      var compareVal;
      var numberFifty = "50";
      var numberSixty = "60";
      var numberSeventy = "70";
      var numberThirty = "30";
      var numberTen = "10";
      var tmobilePlanVal;
      var userPlanVal;
      var diffPlanVal;
      var diffPlanMonthVal;
      if (!_.last(ar)) {
        return false
      }
      Clover.princingCompare.tmoPlanPrice.addClass("show-results").find(".consider,.saving").hide();
      if (Clover.princingCompare.tmoPlanPrice.data("no-of-lines") == "1") {
        if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "1") {
          compareVal = Number(numberFifty)
        } else {
          if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "2") {
            compareVal = Number(numberSixty)
          } else {
            if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "3") {
              compareVal = Number(numberSeventy)
            }
          }
        }
      }
      if (Clover.princingCompare.tmoPlanPrice.data("no-of-lines") == "2") {
        if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "1") {
          compareVal = Number(numberFifty) + Number(numberThirty)
        } else {
          if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "2") {
            compareVal = Number(numberSixty) + Number(numberThirty) + Number(numberTen)
          } else {
            if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "3") {
              compareVal = Number(numberSeventy) + Number(numberFifty)
            }
          }
        }
      }
      if (Clover.princingCompare.tmoPlanPrice.data("no-of-lines") == "3") {
        if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "1") {
          compareVal = Number(numberFifty) + Number(numberThirty) + Number(numberTen)
        } else {
          if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "2") {
            compareVal = Number(numberSixty) + Number(numberThirty) + Number(numberThirty)
          } else {
            if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "3") {
              compareVal = Number(numberSeventy) + Number(numberFifty) + Number(numberThirty)
            }
          }
        }
      }
      if (Clover.princingCompare.tmoPlanPrice.data("no-of-lines") == "4") {
        if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "1") {
          compareVal = Number(numberFifty) + Number(numberThirty) + Number(numberTen) + Number(numberTen)
        } else {
          if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "2") {
            compareVal = Number(numberSixty) + Number(numberFifty) + Number(numberThirty)
          } else {
            if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "3") {
              compareVal = Number(numberSixty) + Number(numberSixty) + Number(numberSixty)
            }
          }
        }
      }
      if (Clover.princingCompare.tmoPlanPrice.data("no-of-lines") == "5") {
        if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "1") {
          compareVal = Number(numberSeventy) + Number(numberTen) + Number(numberThirty)
        } else {
          if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "2") {
            compareVal = Number(numberSeventy) + Number(numberSixty) + Number(numberThirty)
          } else {
            if (Clover.princingCompare.tmoPlanPrice.data("data-value") == "3") {
              compareVal = Number(numberSeventy) + Number(numberSeventy) + Number(numberSeventy)
            }
          }
        }
      }
      if (ar[0] == undefined || ar[0] == "Other") {
        ar[0] = "another carrier"
      }
      Clover.princingCompare.tmoSaving.find("h4 span").text(ar[0]);
      tmobilePlanVal = Number(compareVal);
      userPlanVal = Number(_.last(ar));
      diffPlanMonthVal = (Number(userPlanVal) - Number(tmobilePlanVal)).toFixed(2);
      diffPlanVal = (Number(diffPlanMonthVal) * Number(24)).toFixed(2);
      $(".term-calc-value").text("$" + diffPlanVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      $(".monthly-calc-value").text("$" + diffPlanMonthVal);
      $(".what-save").hide();
      if (compareVal < _.last(ar)) {
        Clover.princingCompare.tmoSaving.show()
      } else {
        Clover.princingCompare.tmoConsider.show()
      }
    };
    Clover.princingCompare.savingH = function() {
      var maxHeight = 0,
        $colums = $(".compare-control, .compare-results");
      $(".compare-control, .compare-results").removeAttr("style");
      $colums.each(function() {
        maxHeight = Math.max(maxHeight, $(this).height())
      }).height(maxHeight);
      maxHeight = 0
    };
    Clover.princingCompare.submitData = function() {
      compareValues = [];
      $(".check-group").each(function() {
        $currentElem = $(this);
        activeBtn = $currentElem.find(".btn.active").val();
        if (!activeBtn) {
          $currentElem.find(".btn:first-child").addClass("active");
          if ($currentElem.is(".estimate-lines")) {
            Clover.princingCompare.tmoPlanPrice.data("no-of-lines", "1")
          } else {
            if ($currentElem.is(".estimate-data-amount")) {
              Clover.princingCompare.tmoPlanPrice.data("data-value", "1")
            }
          }
          Clover.princingCompare.tmoPlanPrice.data("phone-value", Clover.princingModule.phoneValueModule);
          activeBtn = $currentElem.find(".btn.active").val()
        }
        compareValues.push(activeBtn)
      });
      monthBill = parseFloat($(".estimate-bill").find("input").val());
      if ($.isNumeric(monthBill)) {
        compareValues.push(monthBill);
        Clover.princingCompare.comparePlans(compareValues)
      }
      Clover.princingModule.superDecimal(".term-calc-value,.monthly-calc-value")
    };
    Clover.princingCompare.bind = function() {
      var $submitCompare = $(".estimate-saving").find("button");
      var checkGrops = $(".check-group").length;
      var compareValues = [];
      var monthBill;
      var $currentElem;
      $(".estimate-bill").find("input").on("keypress", function(e) {
        if (e.which == 13) {
          Clover.princingCompare.submitData()
        }
      });
      $submitCompare.on("click", function(e) {
        e.preventDefault();
        Clover.princingCompare.submitData()
      })
    };
    Clover.princingCompare.init = function() {
      Clover.princingCompare.tmoPlanPrice = $(".compare-results");
      Clover.princingCompare.tmoSaving = $(".saving");
      Clover.princingCompare.tmoConsider = $(".consider");
      Clover.princingCompare.bind()
    }
  });
  $(document).ready(function() {
    Clover.princingCompare.init()
  })
})(window.jQuery);
$(function() {
  if (!("placeholder" in document.createElement("input"))) {
    $("input[placeholder], textarea[placeholder]").each(function() {
      var placeholderValue = $(this).attr("placeholder");
      if (this.value == "") {
        this.value = placeholderValue
      }
      $(this).focus(function() {
        if (this.value == placeholderValue) {
          this.value = ""
        }
      }).blur(function() {
        if ($.trim(this.value) == "") {
          this.value = placeholderValue
        }
      })
    })
  }
});
var Clover = Clover || {};
Clover.planConfig = {};
(function($) {
  $(function() {
    Clover.planConfig.cookieSettings = {
      path: "/"
    };
    Clover.planConfig.cookieName = "TMobilePlansConfig";
    Clover.planConfig.get = function() {
      var cookie = $.cookie(Clover.planConfig.cookieName);
      if (cookie !== null) {
        try {
          cookie = JSON.parse(cookie);
          if (typeof cookie.PlanID === "undefined" || typeof cookie.PlanType === "undefined" || typeof cookie.Lines === "undefined" || cookie.Lines.length > 5) {
            Clover.planConfig.clean();
            cookie = null
          }
        } catch (err) {
          Clover.planConfig.clean();
          cookie = null
        }
      }
      return cookie
    };
    Clover.planConfig.maxLinesReached = function() {
      var plan = Clover.planConfig.get(),
        max = true,
        i;
      if (plan !== null) {
        if (plan.Lines.length === 5) {
          for (i = 0; i < 5; i += 1) {
            if (plan.Lines[i].DeviceID === "") {
              max = false
            }
          }
        } else {
          max = false
        }
      } else {
        max = false
      }
      return max
    };
    Clover.planConfig.clean = function() {
      $.removeCookie(Clover.planConfig.cookieName, Clover.planConfig.cookieSettings)
    };
    Clover.planConfig.scrub = function(lines) {
      if ((window.document.referrer.indexOf("phone-plans/") !== -1) || (window.document.referrer.indexOf("add-to-cart.") !== -1) || (window.document.referrer.indexOf("/shop/cart") !== -1)) {
        var plan = Clover.planConfig.get();
        var newPlanLines = [];
        if (plan !== null) {
          if (lines !== undefined && lines.length > 0) {
            for (var i = 0; i < lines.length; i++) {
              for (var j = 0; j < plan.Lines.length; j++) {
                if (lines[i].DeviceID == plan.Lines[j].DeviceID) {
                  newPlanLines.push(plan.Lines[j]);
                  break
                }
              }
            }
            if (newPlanLines.length == 0) {
              newPlanLines = lines
            }
          }
          if (lines !== undefined && lines.length == 0) {
            for (var j = 0; j < plan.Lines.length; j++) {
              if (plan.Lines[j].DeviceID == "") {
                newPlanLines.push(plan.Lines[j])
              }
            }
          }
          if (plan.Lines.length > newPlanLines.length) {
            plan.FamilyConvert = true;
            additionalLines = plan.Lines.length - newPlanLines.length;
            for (var j = additionalLines; j < plan.Lines.length; j++) {
              if (plan.Lines[j].DeviceID == "") {
                newPlanLines.push(plan.Lines[j])
              }
            }
          }
          if (window.document.referrer.indexOf("/shop/cart/Empty") !== -1) {
            newPlanLines = []
          }
          if (newPlanLines.length > 0) {} else {}
        }
      }
    };
    Clover.planConfig.setLines = function(planType, planId, planFirst, familyConvert, lines) {
      var config = {},
        totalLines = 0,
        i;
      if (planType !== undefined && planId !== undefined && planFirst !== undefined && familyConvert !== undefined && lines !== undefined) {
        totalLines = lines.length;
        config = {
          PlanID: planId,
          PlanType: familyConvert ? "family" : planType,
          PlanFirst: planFirst,
          FamilyConvert: familyConvert,
          TotalLines: totalLines,
          Lines: lines
        };
        $.cookie(Clover.planConfig.cookieName, JSON.stringify(config), Clover.planConfig.cookieSettings)
      }
    };
    Clover.planConfig.addLine = function() {
      var config = Clover.planConfig.get(),
        totalLines;
      if (config !== null) {
        totalLines = config.TotalLines < 5 ? config.TotalLines + 1 : 5;
        config.TotalLines = totalLines;
        config.FamilyConvert = true;
        config.PlanType = "family";
        $.cookie(Clover.planConfig.cookieName, JSON.stringify(config), Clover.planConfig.cookieSettings)
      }
    };
    Clover.planConfig.setPlans = function(planType, planId, throttledServiceIdArr) {
      var config = {},
        totalLines = 0,
        lines = [],
        i;
      if (planType && planId && (throttledServiceIdArr.length > 0 || planType === "mbb")) {
        totalLines = throttledServiceIdArr.length;
        for (i = 0; i < totalLines; i += 1) {
          lines.push({
            DeviceID: "",
            ThrottledServiceID: throttledServiceIdArr[i]
          })
        }
        config = {
          PlanID: planId,
          PlanType: planType,
          PlanFirst: true,
          FamilyConvert: false,
          TotalLines: totalLines,
          Lines: lines
        }
      }
      $.cookie(Clover.planConfig.cookieName, JSON.stringify(config), Clover.planConfig.cookieSettings);
      var cVal = $.cookie("TMobileCreditLevel") || "A";
      $.cookie("PreviousCreditState", cVal, {
        path: "/",
        domain: ".t-mobile.com"
      })
    };
    Clover.planConfig.set = function(planType, planId, totalLines, deviceId, throttledServiceId) {
      var config = Clover.planConfig.get(),
        added = false;
      if (config === null) {
        var lines = [];
        if (deviceId && throttledServiceId) {
          lines.push({
            DeviceID: deviceId,
            ThrottledServiceID: throttledServiceId
          })
        }
        config = {
          PlanID: planId || "",
          PlanType: planType || "",
          PlanFirst: false,
          FamilyConvert: false,
          TotalLines: totalLines,
          Lines: lines
        }
      } else {
        if (planType) {
          config.PlanType = planType
        }
        if (planId) {
          config.PlanID = planId
        }
        config.TotalLines = totalLines;
        if (deviceId && throttledServiceId) {
          if (config.Lines.length <= 5) {
            for (i = 0; i < config.Lines.length; i += 1) {
              if (!added && config.Lines[i].DeviceID === "") {
                config.Lines[i].DeviceID = deviceId;
                config.Lines[i].ThrottledServiceID = throttledServiceId;
                added = true;
                break
              }
            }
            if (!added && config.Lines.length < 5) {
              config.Lines.push({
                DeviceID: deviceId,
                ThrottledServiceID: throttledServiceId
              })
            }
          }
        }
      }
      $.cookie(Clover.planConfig.cookieName, JSON.stringify(config), Clover.planConfig.cookieSettings)
    };
    Clover.planConfig.fixConfiguratorLinks = function() {
      var config = Clover.planConfig.get(),
        cart = Clover.Cart.get(),
        shouldBeFamily = false,
        i, j;

      function fixTheLinks() {
        $('[data-cta-path*=".individual."]').each(function() {
          var newCTAPath = $(this).attr("data-cta-path").replace(/(step[\d])\.individual\./, "$1.family.");
          $(this).attr("data-cta-path", newCTAPath)
        });
        $('[data-ori-path*=".individual."]').each(function() {
          var newOriPath = $(this).attr("data-ori-path").replace(/(step[\d])\.individual\./, "$1.family.");
          $(this).attr("data-ori-path", newOriPath)
        });
        $('a.btn[href*=".individual."]').each(function() {
          var newCTAPath = $(this).attr("href").replace(/(step[\d])\.individual\./, "$1.family.");
          $(this).attr("href", newCTAPath)
        })
      }
      if (cart.hasOwnProperty("Package")) {
        if (cart.Package !== null) {
          if (cart.Package.length > 0) {
            maxP = cart.Package.length;
            for (i = 0; i < maxP; i += 1) {
              if (shouldBeFamily) {
                break
              }
              if (cart.Package[i].hasOwnProperty("TotalLines")) {
                if (cart.Package[i].TotalLines !== null) {
                  if (cart.Package[i].TotalLines.length > 0 && cart.Package[i].TotalLines.length < 5) {
                    maxL = cart.Package[i].TotalLines.length;
                    for (j = 0; j < maxL; j += 1) {
                      if (cart.Package[i].TotalLines[j].hasOwnProperty("PlanName")) {
                        if (cart.Package[i].TotalLines[j].PlanName !== null) {
                          if (cart.Package[i].TotalLines[j].PlanName.hasOwnProperty("IsFamilyType") && cart.Package[i].TotalLines[j].PlanName.IsFamilyType === true) {
                            shouldBeFamily = true;
                            break
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (config !== null) {
        if (config.PlanType === "family" || (config.hasOwnProperty("Lines") !== undefined && config.Lines.length > 1)) {
          fixTheLinks()
        }
      } else {
        if (shouldBeFamily) {
          fixTheLinks()
        }
      }
    };
    Clover.planConfig.init = function() {
      if ($("#body.cartbody").size() > 0) {
        Clover.planConfig.clean()
      }
    };
    $(document).ready(function() {
      Clover.planConfig.init()
    })
  })
})(window.jQuery);
Clover = Clover || {};
Clover.Cart = Clover.Cart || {};
Clover.Cart.timeout = 20;
Clover.Cart.timeoutCount = 0;
Clover.Cart.timeoutLimit = 40;
(function($) {
  $(function() {
    Clover.Cart.DefaultPostData = {
      ItemName: "",
      ItemId: "",
      SubItemName: "",
      SubItemId: "",
      CreditClass: "A",
      ZipCode: Clover.zipcode !== "undefined" ? Clover.zipcode : Clover.coordinates.getZip(),
      LineNumber: "",
      Quantity: "1"
    };
    Clover.Cart.post = function(endPoint, payload, callback, errorCallback) {
      payload.ZipCode = Clover.zipcode ? Clover.zipcode : Clover.coordinates.getZip();
      var creditLevelVal = $.cookie("TMobileCreditLevel");
      if ((typeof creditLevelVal !== "undefined") && (creditLevelVal !== null)) {
        payload.CreditClass = creditLevelVal
      }
      $.ajax({
        type: "POST",
        url: endPoint,
        data: JSON.stringify(payload),
        error: (typeof errorCallback === "function") ? errorCallback : Clover.Cart.postError,
        success: (typeof callback === "function") ? callback : Clover.Cart.postSuccess,
        dataType: "json",
        contentType: "application/json",
        processData: false
      })
    };
    Clover.Cart.postDevice = function(deviceId, lineNumber, callback, errorCallback) {
      var line = (typeof lineNumber === "undefined") ? "" : lineNumber,
        postData = Clover.Cart.DefaultPostData;
      postData.ItemName = "postpaiddevice";
      postData.ItemId = deviceId;
      postData.LineNumber = line;
      Clover.Cart.post(window.ADD_ITEM_SERVICE_URL, postData, callback, errorCallback)
    };
    Clover.Cart.postAccessory = function(itemId, lineNumber, quantity, callback, errorCallback) {
      var line = (typeof lineNumber === "undefined") ? "" : lineNumber,
        postData = Clover.Cart.DefaultPostData;
      postData.ItemName = "accessory";
      postData.ItemId = itemId;
      postData.LineNumber = line;
      postData.Quantity = quantity;
      if (postData.ZipCode === "undefined") {
        postData.ZipCode = ""
      }
      Clover.Cart.post(window.ADD_ITEM_SERVICE_URL, postData, callback, errorCallback)
    };
    Clover.Cart.postPlanIndividual = function(planId, throttledId, lineNumber, callback, errorCallback) {
      var line = (typeof lineNumber === "undefined") ? "1" : lineNumber,
        postData = Clover.Cart.DefaultPostData;
      postData.ItemName = "individual";
      postData.ItemId = planId;
      postData.SubItemName = "throttleservice";
      postData.SubItemId = throttledId;
      postData.LineNumber = line;
      Clover.Cart.post(window.ADD_ITEM_SERVICE_URL, postData, callback, errorCallback)
    };
    Clover.Cart.postPlanFamily = function(planId, throttledId, lineNumber, callback, errorCallback) {
      var line = (typeof lineNumber === "undefined") ? "1" : lineNumber,
        postData = Clover.Cart.DefaultPostData;
      postData.ItemName = "family";
      postData.ItemId = planId;
      postData.SubItemName = "throttleservice";
      postData.SubItemId = throttledId;
      postData.LineNumber = line;
      Clover.Cart.post(window.ADD_ITEM_SERVICE_URL, postData, callback, errorCallback)
    };
    Clover.Cart.postPlanMBB = function(planId, callback, errorCallback) {
      postData = Clover.Cart.DefaultPostData;
      postData.ItemName = "mobilebroadband";
      postData.ItemId = planId;
      postData.LineNumber = "1";
      Clover.Cart.post(window.ADD_ITEM_SERVICE_URL, postData, callback, errorCallback)
    };
    Clover.Cart.postServices = function(serviceId, lineNumber, callback, errorCallback) {
      var line = (typeof lineNumber === "undefined") ? "1" : lineNumber,
        postData = Clover.Cart.DefaultPostData;
      postData.ItemName = "optionalservice";
      postData.ItemId = serviceId;
      postData.LineNumber = line;
      Clover.Cart.post(window.ADD_ITEM_SERVICE_URL, postData, callback, errorCallback)
    };
    Clover.Cart.postError = function(err) {
      if (err.responseText) {
        var resp = err.responseText;
        resp = JSON.parse(resp);
        if (resp.WCFErrors && resp.WCFErrors.length > 0) {
          if (resp.WCFErrors[0].ErrorDetail) {
            Clover.Cart.handleMessage(resp.WCFErrors[0].ErrorDetail)
          }
        }
      } else {
        if (err.PackageException) {
          Clover.Cart.handleErrors(err)
        }
      }
    };
    Clover.Cart.handleErrors = function(data) {
      var PEReason = false;
      var ReferrerURL = false;
      if (data && data.PackageException && data.PackageException.PEReason) {
        PEReason = data.PackageException.PEReason;
        if (data.PackageException.ReferrerURL) {
          ReferrerURL = data.PackageException.ReferrerURL
        }
        if (PEReason && ReferrerURL) {
          Clover.Cart.handleForward(PEReason, ReferrerURL);
          return false
        } else {
          Clover.Cart.handleMessage(PEReason)
        }
      } else {}
    };
    Clover.Cart.postSuccess = function(data) {
      if (data.Status !== null) {
        Clover.ShoppingCart.retrieveItems();
        Clover.Cart.handleMessage(data.Status)
      } else {
        if (data.PackageException) {
          Clover.Cart.handleErrors(data)
        } else {
          Clover.Cart.postError(data)
        }
      }
    };
    Clover.Cart.handleForward = function(pe, url) {
      if (pe && url) {
        if (Clover.Cart.timeoutCount == 0) {} else {}
        setTimeout(function() {
          window.location.href = url;
          if (window.location.href !== url && (Clover.Cart.timeoutCount < Clover.Cart.timeoutLimit)) {
            Clover.Cart.timeout += 20;
            Clover.Cart.timeoutCount++;
            Clover.Cart.handleForward(pe, url)
          }
        }, Clover.Cart.timeout)
      }
    };
    Clover.Cart.handleMessage = function(message) {
      console.log(message)
    };
    Clover.Cart.get = function() {
      return Clover.ShoppingCart.rawCart
    };
    Clover.Cart.clean = function() {
      $.removeCookie("ShoppingPartner", Clover.planConfig.cookieSettings);
      $.removeCookie("TMobileCart", Clover.planConfig.cookieSettings)
    }
  })
})(window.jQuery);
var Clover = Clover || {};
Clover.ShoppingCart = {};
(function($) {
  $(function() {
    Clover.ShoppingCart.cartWebSrv = ((typeof UNAV_HOST !== "undefined") ? UNAV_HOST : "") + window.QUERY_CART_SERVICE_URL;
    Clover.ShoppingCart.cartIconContainerEl = $("li.glyph.cart");
    Clover.ShoppingCart.cartIconSel = "a.glyph-cart";
    Clover.ShoppingCart.ItemsSel = "a.count";
    Clover.ShoppingCart.cartIconCTAsEl = Clover.ShoppingCart.cartIconContainerEl.find("a");
    Clover.ShoppingCart.isFamilyPlan = false;
    Clover.ShoppingCart.ItemsCount = 0;
    Clover.ShoppingCart.PackageCount = 0;
    Clover.ShoppingCart.DeviceCount = 0;
    Clover.ShoppingCart.AccessoriesCount = 0;
    Clover.ShoppingCart.ServicesCount = 0;
    Clover.ShoppingCart.rawCart = {};
    Clover.ShoppingCart.init = function() {
      Clover.ShoppingCart.retrieveItems()
    };
    Clover.ShoppingCart.retrieveItems = function() {
      $.ajax({
        type: "GET",
        contentType: "application/json",
        dataType: (typeof UNAV_HOST !== "undefined") ? "jsonp" : "json",
        url: Clover.ShoppingCart.cartWebSrv,
        cache: false,
        success: function(resp) {
          Clover.ShoppingCart.rawCart = resp;
          var lineArr = [];
          var packages = resp.Package;
          if (packages != undefined) {
            Clover.ShoppingCart.ItemsCount = 0;
            Clover.ShoppingCart.PackageCount = 0;
            Clover.ShoppingCart.DeviceCount = 0;
            Clover.ShoppingCart.AccessoriesCount = 0;
            Clover.ShoppingCart.ServicesCount = 0;
            var packagesSize = packages.length;
            for (var i = 0; i < packagesSize; i++) {
              Clover.ShoppingCart.PackageCount++;
              var totalLines = packages[i].TotalLines;
              if (totalLines != undefined) {
                for (var j = 0; j < totalLines.length; j++) {
                  var currentDeviceId = null;
                  var currentThrottleServiceId = null;
                  if (totalLines[j].Accessory != undefined) {
                    if (totalLines[j].Accessory.AccessoryDetails != undefined) {
                      var accessoriesCount = totalLines[j].Accessory.AccessoryDetails.length;
                      for (var k = 0; k < accessoriesCount; k++) {
                        var acc = totalLines[j].Accessory.AccessoryDetails[k];
                        Clover.ShoppingCart.AccessoriesCount += Number(acc.AccessoryQuantity)
                      }
                    }
                  }
                  var currentDevice = null;
                  var currentThrottleServiceId = null;
                  if (totalLines[j].DeviceID != undefined) {
                    currentDevice = totalLines[j].DeviceID;
                    if (currentDevice !== "00000000-0000-0000-0000-000000000000") {
                      Clover.ShoppingCart.DeviceCount++
                    }
                  }
                  if (totalLines[j].Service != undefined) {
                    if (totalLines[j].Service.ServiceDetails != undefined) {
                      for (var k = 0; k < totalLines[j].Service.ServiceDetails.length; k++) {
                        if (!totalLines[j].Service.ServiceDetails[k].IsThrottleServcie) {
                          Clover.ShoppingCart.ServicesCount++
                        } else {
                          currentThrottleServiceId = totalLines[j].Service.ServiceDetails[k].ServiceID
                        }
                      }
                    }
                  }
                  if (totalLines[j].PlanName != undefined && totalLines[j].PlanName.IsFamilyType != undefined) {
                    Clover.ShoppingCart.isFamilyPlan = totalLines[j].PlanName.IsFamilyType
                  }
                  if (totalLines[j].DeviceID != undefined && totalLines[j].PlanName != undefined && totalLines[j].PlanName.length > 0) {
                    currentDevice = totalLines[j].DeviceID
                  }
                  lineArr.push({
                    DeviceID: currentDevice,
                    ThrottledServiceID: currentThrottleServiceId
                  })
                }
              }
            }
            Clover.ShoppingCart.ItemsCount = Clover.ShoppingCart.DeviceCount + Clover.ShoppingCart.AccessoriesCount;
            console.log("Clover.ShoppingCart.ItemsCount: " + Clover.ShoppingCart.ItemsCount);
            var itemsSel = Clover.ShoppingCart.cartIconContainerEl.find(Clover.ShoppingCart.ItemsSel);
            if (Clover.ShoppingCart.ItemsCount > 0) {
              itemsSel.removeClass("hidden").html(Clover.ShoppingCart.ItemsCount);
              Clover.ShoppingCart.cartIconContainerEl.find(Clover.ShoppingCart.cartIconSel).addClass("not-empty")
            } else {
              itemsSel.addClass("hidden").html();
              Clover.ShoppingCart.cartIconContainerEl.find(Clover.ShoppingCart.cartIconSel).removeClass("not-empty")
            }
          }
          Clover.planConfig.fixConfiguratorLinks()
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("jqXHR", jqXHR);
          console.log("textStatus", textStatus);
          console.log("errorThrown", errorThrown);
          if (typeof UNAV_HOST !== "undefined") {
            console.log("QueryCart communication error. Service may not be responding correctly to JSONP request.")
          }
        }
      })
    };
    $(document).ready(function() {
      if (!Clover.isEditMode()) {
        Clover.ShoppingCart.init()
      }
    })
  })
})(window.jQuery);
var Clover = Clover || {};
Clover.ZipModal = {};
(function($) {
  $(function() {
    Clover.ZipModal.selectorModal = $("div.modal.zipcode-modal");
    Clover.ZipModal.selectorSubmit = $("a.submit-zipcode");
    Clover.ZipModal.selectorZipInput = ".zipcode-modal input.zip-code";
    Clover.ZipModal.selectorErrorMsg = $("div.modal.zipcode-modal .error-msg");
    Clover.ZipModal.selectorBadZipMsg = $("div.modal.zipcode-modal .bad-zip-msg");
    Clover.ZipModal.zipCodeCookied = Clover.getQuerystringVal($.cookie("TMobileUSStore"), "ZIP");
    Clover.ZipModal.isDeviceAvailableInZip = true;
    Clover.ZipModal.getDeviceAvailabilityInZip = function(deviceId, zipCode, callback) {
      var serviceUrl = window.IS_DEVICE_AVAILABLE_IN_ZIP_SERVICE_URL + "/DeviceId/" + deviceId + "/ZipCode/" + zipCode;
      $.getJSON(serviceUrl, function(data) {
        Clover.ZipModal.isDeviceAvailableInZip = eval(data);
        callback.call()
      })
    };
    Clover.ZipModal.bind = function() {
      Clover.ZipModal.selectorSubmit.on("click.default", function(ev) {
        ev.preventDefault();
        Clover.ZipModal.selectorErrorMsg.addClass("hidden");
        Clover.ZipModal.selectorBadZipMsg.addClass("hidden");
        var zipcode = $(Clover.ZipModal.selectorZipInput).val();
        if (zipcode !== "" && /^[\d]{5}(-[\d]{4})?$/.test(zipcode)) {
          Clover.coordinates.storeZipCookie(zipcode);
          Clover.ZipModal.getDeviceAvailabilityInZip(Clover.ZipModal.deviceId, zipcode, function() {
            if (Clover.ZipModal.isDeviceAvailableInZip) {
              Clover.ZipModal.zipOkCallback.call()
            } else {
              Clover.ZipModal.selectorErrorMsg.removeClass("hidden")
            }
          })
        } else {
          Clover.ZipModal.selectorBadZipMsg.removeClass("hidden")
        }
      });
      $(Clover.ZipModal.selectorZipInput).on("keypress", function(e) {
        if (e.which == 13) {
          e.preventDefault();
          Clover.ZipModal.selectorSubmit.trigger("click.default")
        }
      })
    };
    Clover.ZipModal.bindSaveZip = function(itemId, lineNumber, quantity, addAccessorySuccess, addAccessoryError) {
      Clover.ZipModal.selectorSubmit.on("click.saveZip", function(ev) {
        ev.preventDefault();
        console.debug("ZipCode Submitted");
        var zipcode = $(Clover.ZipModal.selectorZipInput).val();
        if (!(/^[\d]{5}$/.test(zipcode))) {
          Clover.ZipModal.selectorBadZipMsg.removeClass("hidden");
          return false
        }
        Clover.coordinates.storeZipCookie(zipcode);
        Clover.ZipModal.selectorModal.modal("hide");
        Clover.Cart.postAccessory(itemId, lineNumber, quantity, addAccessorySuccess, addAccessoryError)
      })
    };
    Clover.ZipModal.showModal = function(deviceId, zipOkCallback) {
      Clover.ZipModal.deviceId = deviceId;
      Clover.ZipModal.zipOkCallback = zipOkCallback;
      Clover.ZipModal.selectorSubmit.off("click.saveZip");
      Clover.ZipModal.bind();
      var zip = Clover.coordinates.getZip();
      if (zip !== "undefined") {
        $(Clover.ZipModal.selectorZipInput).val(zip)
      }
      Clover.ZipModal.selectorModal.modal()
    };
    Clover.ZipModal.init = function() {
      Clover.ZipModal.selectorErrorMsg.addClass("hidden");
      Clover.ZipModal.selectorBadZipMsg.addClass("hidden")
    };
    Clover.ZipModal.init()
  })
})(window.jQuery);
(function($) {
  $.fn.homeDisplay = function(opt) {
    var settings = $.extend({
      autostart: true,
      pauseOnAction: true,
      current: 0,
      speed: 1000,
      time: 4000,
      cta: "p.slide-cta a:eq(0)",
      onCta: "target",
      navigation: ".marqee-display-nav li",
      controls: ".marquee-controls",
      controlsOnHover: true,
      nextClass: "next-slide",
      prevClass: "prev-slide",
      displayNavigation: true,
      fixedHeight: false,
      mobileSpecial: false
    }, opt);
    var timer, total, self = this,
      parent = self.parent(),
      fadeCompleted = false;

    function goTo() {
      settings.current++;
      if (settings.current >= total) {
        settings.current = 0
      }
      ind = settings.current;
      self.map(function(index, el) {
        if (index == ind) {
          $(settings.navigation).removeClass("active");
          $(settings.navigation).eq(ind).addClass("active");
          $(el).fadeIn("slow", function() {
            fadeCompleted = true
          })
        } else {
          $(el).hide();
          fadeCompleted = false
        }
      })
    }

    function init() {
      self.each(function(i) {
        fadeCompleted = true;
        var slide = $(this);
        if (slide.find(settings.cta).size() > 0) {
          slide.addClass("target");
          slide.click(function(ev) {
            window.location.href = slide.find(settings.cta).attr("href")
          })
        }
      });
      self.map(function(index, el) {
        if (index != 0) {
          $(el).hide()
        }
      });
      if (settings.controlsOnHover) {
        $(settings.controls).hide()
      }
      parent.css("overflow", "");
      total = self.size();
      if (total <= 1) {
        $(settings.navigation).parent().hide();
        $(settings.controls).hide();
        return
      }
      if (settings.displayNavigation) {
        $(settings.navigation).parent().show()
      }
      if (settings.autostart) {
        timer = setInterval(goTo, settings.time)
      }
      binds();
      parent.swipe({
        allowPageScroll: "vertical",
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
          stop();
          goNext()
        },
        swipeRight: function(event, direction, distance, duration, fingerCount) {
          stop();
          goPrev()
        },
        threshold: 0
      })
    }

    function goNext() {
      if (!fadeCompleted) {
        return
      }
      stop();
      goTo()
    }

    function goPrev() {
      if (!fadeCompleted) {
        return
      }
      if (settings.current == 0) {
        settings.current = total - 2
      } else {
        settings.current = settings.current - 2
      }
      stop();
      goTo()
    }

    function binds() {
      if ($(settings.controls).size()) {
        $(settings.controls).find("." + settings.nextClass).on("click", goNext);
        $(settings.controls).find("." + settings.prevClass).on("click", goPrev)
      }
      $(settings.navigation).each(function(i) {
        $(this).on("click", function(ev) {
          if (!fadeCompleted) {
            return
          }
          ev.preventDefault();
          settings.current = (i - 1);
          stop();
          goTo()
        })
      });
      if (!isMobile.any()) {
        self.parent().hover(function(ev) {
          if (settings.controlsOnHover) {
            $(settings.controls).show()
          }
          stop()
        }, function(ev) {
          if (settings.controlsOnHover) {
            $(settings.controls).hide()
          }
        })
      }
      parent.on("swipe", function(e) {
        clearInterval(timer)
      });
      $(window).on("resize", $.debounce(500, false, function() {
        if ((($(window).width() < 724) && settings.mobileSpecial) || settings.fixedHeight) {
          var marqueMaxHeight = 0,
            navigationHeight = $(settings.navigation).parent().outerHeight();
          self.each(function() {
            var element = $(this),
              visibleMarquee = $(this).is(":visible") ? true : false;
            marqueMaxHeight = Math.max(marqueMaxHeight, element.show().outerHeight());
            if (!visibleMarquee) {
              element.hide()
            }
          });
          parent.height(marqueMaxHeight + navigationHeight);
          marqueMaxHeight = 0
        } else {
          parent.removeAttr("style")
        }
      }))
    }

    function stop() {
      clearInterval(timer)
    }
    init();
    return this
  }
})(jQuery);
(function($) {
  $(function() {
    $(".marquee-slide").homeDisplay({
      controlsOnHover: true,
      autostart: false,
      mobileSpecial: false
    })
  })
})(window.jQuery);
(function($) {
  $(function() {
    $(".product_details_faq > .ipar-faqProducts").addClass("span12");
    $("#accessories .compatible_accessories_carousel").addClass("span12");
    if ($(".marquee-display").length) {
      $("body").find(".container-main .parsys>.parbase").first().css("margin-top", 0)
    }
  })
})(window.jQuery);
var Clover = Clover || {};
Clover.AddToCart = {};
(function($) {
  $(function() {
    Clover.AddToCart.init = function() {
      var $addLinks = $(".add-to-cart-link");
      $addLinks.off("click").on("click", function(event) {
        event.preventDefault();
        var currentTarget = $(this),
          itemId = currentTarget.data("cartitemid"),
          lineNumber = typeof currentTarget.data("cartlinenumber") !== "undefined" ? currentTarget.data("cartlinenumber") : "",
          itemType = currentTarget.data("cartitemtype"),
          quantity = $("#accessoryQuantity").size() === 1 ? $("#accessoryQuantity").val() : 1,
          accessoryName = currentTarget.data("cartitemname");
        $(".ugc-zip-modal .save-zipcode").off("click").on("click", function(ev) {
          ev.preventDefault();
          $(".ugc-zip-modal input.zip-code").parent().removeClass("control-group error");
          var ugcZip = $(".ugc-zip-modal input.zip-code").val();
          if (ugcZip !== "" && /^[\d]{5}(-[\d]{4})?$/.test(ugcZip)) {
            Clover.coordinates.storeZipCookie(ugcZip);
            $(".ugc-zip-modal").modal("hide");
            currentTarget.click();
            $("html, body").animate({
              scrollTop: currentTarget.offset().top - 200
            }, 500)
          } else {
            $(".ugc-zip-modal input.zip-code").parent().addClass("control-group error");
            $(".ugc-zip-modal .zip-error").removeClass("hidden")
          }
        });
        if (isNaN(quantity)) {
          quantity = 1
        }

        function addAccessorySuccess(data) {
          var successMsg, links;
          if (data.Status !== null) {
            if (data.Status === "accessory added to cart") {
              Clover.ShoppingCart.retrieveItems();
              successMsg = data.Status.replace("accessory", "<strong>" + accessoryName + "</strong>");
              links = '<a class="cta" href="' + window.VIEW_CART_LINK_URL + '">' + window.VIEW_CART_TEXT + '</a><br/><a class="cta" href="' + window.CONTINUE_SHOPPING_ACCESSORIES_LINK_URL + '">' + window.CONTINUE_SHOPPING_TEXT + "</a>";
              var options = {
                html: true,
                title: successMsg,
                content: links,
                placement: "top",
                trigger: "manual"
              };
              currentTarget.popclover(options);
              currentTarget.popclover("show");
              setTimeout(function() {
                currentTarget.popclover("hide")
              }, 15000)
            } else {
              if (data.Status === "Invalid Zipcode") {
                $(".ugc-zip-modal").modal().find(".zip-error").removeClass("hidden")
              }
            }
          } else {
            if (data.PackageException) {
              Clover.Cart.postSuccess(data)
            } else {
              Clover.Cart.postError(data)
            }
          }
        }

        function addAccessoryError(data) {
          var respTxt, errorTitle = "<strong>" + accessoryName + "</strong> " + window.ERROR_MSG_TEXT,
            errorMsg = window.ERROR_REASON_TEXT;
          if (data.responseText !== null) {
            respTxt = JSON.parse(data.responseText);
            if (respTxt.WCFErrors && respTxt.WCFErrors.length > 0) {
              if (respTxt.WCFErrors[0].ErrorDetail) {
                console.log(respTxt.WCFErrors[0].ErrorDetail)
              }
            }
            var options = {
              html: true,
              title: errorTitle,
              content: errorMsg,
              placement: "top",
              trigger: "manual"
            };
            currentTarget.popclover(options);
            currentTarget.popclover("show");
            setTimeout(function() {
              currentTarget.popclover("hide")
            }, 15000)
          } else {
            if (data.PackageException) {
              Clover.Cart.postSuccess(data)
            } else {
              Clover.Cart.postError(data)
            }
          }
        }
        if (typeof lineNumber === "undefined") {
          lineNumber = ""
        }
        Clover.Cart.postAccessory(itemId, lineNumber, quantity, addAccessorySuccess, addAccessoryError)
      })
    };
    $(document).ready(function() {
      if (!Clover.isEditMode()) {
        addToCartInitialize()
      }
    });
    addToCartInitialize = function() {
      Clover.AddToCart.init()
    }
  })
})(window.jQuery);
if (!Clover.isEditMode()) {
  var MTIProjectId = "2a554fb3-a8fe-4827-b87a-e46dc9f9981c";
  (function() {
    var mtiTracking = document.createElement("script");
    mtiTracking.type = "text/javascript";
    mtiTracking.async = "true";
    mtiTracking.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//fast.fonts.com/t/trackingCode.js";
    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(mtiTracking)
  })()
};
