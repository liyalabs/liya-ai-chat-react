import { jsx as d, jsxs as F, Fragment as kt } from "react/jsx-runtime";
import { createContext as Ut, useState as P, useEffect as te, useContext as Dt, useCallback as L, useMemo as zt, useRef as Se } from "react";
function at(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Mt } = Object.prototype, { getPrototypeOf: Ue } = Object, { iterator: Fe, toStringTag: lt } = Symbol, Ce = /* @__PURE__ */ ((e) => (t) => {
  const n = Mt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), V = (e) => (e = e.toLowerCase(), (t) => Ce(t) === e), xe = (e) => (t) => typeof t === e, { isArray: oe } = Array, ie = xe("undefined");
function de(e) {
  return e !== null && !ie(e) && e.constructor !== null && !ie(e.constructor) && D(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ct = V("ArrayBuffer");
function It(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ct(e.buffer), t;
}
const Ht = xe("string"), D = xe("function"), ut = xe("number"), fe = (e) => e !== null && typeof e == "object", jt = (e) => e === !0 || e === !1, we = (e) => {
  if (Ce(e) !== "object")
    return !1;
  const t = Ue(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(lt in e) && !(Fe in e);
}, $t = (e) => {
  if (!fe(e) || de(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, qt = V("Date"), Vt = V("File"), Wt = V("Blob"), Jt = V("FileList"), Kt = (e) => fe(e) && D(e.pipe), Xt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || D(e.append) && ((t = Ce(e)) === "formdata" || // detect form-data instance
  t === "object" && D(e.toString) && e.toString() === "[object FormData]"));
}, Gt = V("URLSearchParams"), [Yt, Zt, Qt, en] = ["ReadableStream", "Request", "Response", "Headers"].map(V), tn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function he(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), oe(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (de(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let a;
    for (r = 0; r < o; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function dt(e, t) {
  if (de(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Z = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ft = (e) => !ie(e) && e !== Z;
function Le() {
  const { caseless: e, skipUndefined: t } = ft(this) && this || {}, n = {}, r = (s, i) => {
    const o = e && dt(n, i) || i;
    we(n[o]) && we(s) ? n[o] = Le(n[o], s) : we(s) ? n[o] = Le({}, s) : oe(s) ? n[o] = s.slice() : (!t || !ie(s)) && (n[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && he(arguments[s], r);
  return n;
}
const nn = (e, t, n, { allOwnKeys: r } = {}) => (he(t, (s, i) => {
  n && D(s) ? Object.defineProperty(e, i, {
    value: at(s, n),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }) : Object.defineProperty(e, i, {
    value: s,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, { allOwnKeys: r }), e), rn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), sn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, on = (e, t, n, r) => {
  let s, i, o;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = n !== !1 && Ue(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, an = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ln = (e) => {
  if (!e) return null;
  if (oe(e)) return e;
  let t = e.length;
  if (!ut(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, cn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ue(Uint8Array)), un = (e, t) => {
  const r = (e && e[Fe]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, dn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, fn = V("HTMLFormElement"), hn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), $e = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), pn = V("RegExp"), ht = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  he(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, mn = (e) => {
  ht(e, (t, n) => {
    if (D(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (D(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, yn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return oe(e) ? r(e) : r(String(e).split(t)), n;
}, gn = () => {
}, wn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function bn(e) {
  return !!(e && D(e.append) && e[lt] === "FormData" && e[Fe]);
}
const _n = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (fe(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (de(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = oe(r) ? [] : {};
        return he(r, (o, a) => {
          const h = n(o, s + 1);
          !ie(h) && (i[a] = h);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, Sn = V("AsyncFunction"), En = (e) => e && (fe(e) || D(e)) && D(e.then) && D(e.catch), pt = ((e, t) => e ? setImmediate : t ? ((n, r) => (Z.addEventListener("message", ({ source: s, data: i }) => {
  s === Z && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Z.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  D(Z.postMessage)
), Rn = typeof queueMicrotask < "u" ? queueMicrotask.bind(Z) : typeof process < "u" && process.nextTick || pt, Fn = (e) => e != null && D(e[Fe]), l = {
  isArray: oe,
  isArrayBuffer: ct,
  isBuffer: de,
  isFormData: Xt,
  isArrayBufferView: It,
  isString: Ht,
  isNumber: ut,
  isBoolean: jt,
  isObject: fe,
  isPlainObject: we,
  isEmptyObject: $t,
  isReadableStream: Yt,
  isRequest: Zt,
  isResponse: Qt,
  isHeaders: en,
  isUndefined: ie,
  isDate: qt,
  isFile: Vt,
  isBlob: Wt,
  isRegExp: pn,
  isFunction: D,
  isStream: Kt,
  isURLSearchParams: Gt,
  isTypedArray: cn,
  isFileList: Jt,
  forEach: he,
  merge: Le,
  extend: nn,
  trim: tn,
  stripBOM: rn,
  inherits: sn,
  toFlatObject: on,
  kindOf: Ce,
  kindOfTest: V,
  endsWith: an,
  toArray: ln,
  forEachEntry: un,
  matchAll: dn,
  isHTMLForm: fn,
  hasOwnProperty: $e,
  hasOwnProp: $e,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ht,
  freezeMethods: mn,
  toObjectSet: yn,
  toCamelCase: hn,
  noop: gn,
  toFiniteNumber: wn,
  findKey: dt,
  global: Z,
  isContextDefined: ft,
  isSpecCompliantForm: bn,
  toJSONObject: _n,
  isAsyncFn: Sn,
  isThenable: En,
  setImmediate: pt,
  asap: Rn,
  isIterable: Fn
};
let b = class mt extends Error {
  static from(t, n, r, s, i, o) {
    const a = new mt(t.message, n || t.code, r, s, i);
    return a.cause = t, a.name = t.name, o && Object.assign(a, o), a;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, r, s, i) {
    super(t), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), s && (this.request = s), i && (this.response = i, this.status = i.status);
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
b.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
b.ERR_BAD_OPTION = "ERR_BAD_OPTION";
b.ECONNABORTED = "ECONNABORTED";
b.ETIMEDOUT = "ETIMEDOUT";
b.ERR_NETWORK = "ERR_NETWORK";
b.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
b.ERR_DEPRECATED = "ERR_DEPRECATED";
b.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
b.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
b.ERR_CANCELED = "ERR_CANCELED";
b.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
b.ERR_INVALID_URL = "ERR_INVALID_URL";
const Cn = null;
function Pe(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function yt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function qe(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = yt(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function xn(e) {
  return l.isArray(e) && !e.some(Pe);
}
const Nn = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ne(e, t, n) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !l.isUndefined(p[m]);
  });
  const r = n.metaTokens, s = n.visitor || f, i = n.dots, o = n.indexes, h = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(c) {
    if (c === null) return "";
    if (l.isDate(c))
      return c.toISOString();
    if (l.isBoolean(c))
      return c.toString();
    if (!h && l.isBlob(c))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(c) || l.isTypedArray(c) ? h && typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function f(c, m, p) {
    let g = c;
    if (c && !p && typeof c == "object") {
      if (l.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), c = JSON.stringify(c);
      else if (l.isArray(c) && xn(c) || (l.isFileList(c) || l.endsWith(m, "[]")) && (g = l.toArray(c)))
        return m = yt(m), g.forEach(function(S, R) {
          !(l.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? qe([m], R, i) : o === null ? m : m + "[]",
            u(S)
          );
        }), !1;
    }
    return Pe(c) ? !0 : (t.append(qe(p, m, i), u(c)), !1);
  }
  const y = [], _ = Object.assign(Nn, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Pe
  });
  function C(c, m) {
    if (!l.isUndefined(c)) {
      if (y.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      y.push(c), l.forEach(c, function(g, w) {
        (!(l.isUndefined(g) || g === null) && s.call(
          t,
          g,
          l.isString(w) ? w.trim() : w,
          m,
          _
        )) === !0 && C(g, m ? m.concat(w) : [w]);
      }), y.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return C(e), t;
}
function Ve(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function De(e, t) {
  this._pairs = [], e && Ne(e, this, t);
}
const gt = De.prototype;
gt.append = function(t, n) {
  this._pairs.push([t, n]);
};
gt.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ve);
  } : Ve;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function vn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function wt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || vn, s = l.isFunction(n) ? {
    serialize: n
  } : n, i = s && s.serialize;
  let o;
  if (i ? o = i(t, s) : o = l.isURLSearchParams(t) ? t.toString() : new De(t, s).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class We {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    l.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const bt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, An = typeof URLSearchParams < "u" ? URLSearchParams : De, On = typeof FormData < "u" ? FormData : null, Tn = typeof Blob < "u" ? Blob : null, Ln = {
  isBrowser: !0,
  classes: {
    URLSearchParams: An,
    FormData: On,
    Blob: Tn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ze = typeof window < "u" && typeof document < "u", Be = typeof navigator == "object" && navigator || void 0, Pn = ze && (!Be || ["ReactNative", "NativeScript", "NS"].indexOf(Be.product) < 0), Bn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", kn = ze && window.location.href || "http://localhost", Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ze,
  hasStandardBrowserEnv: Pn,
  hasStandardBrowserWebWorkerEnv: Bn,
  navigator: Be,
  origin: kn
}, Symbol.toStringTag, { value: "Module" })), U = {
  ...Un,
  ...Ln
};
function Dn(e, t) {
  return Ne(e, new U.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return U.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function zn(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Mn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function _t(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), h = i >= n.length;
    return o = !o && l.isArray(s) ? s.length : o, h ? (l.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !a) : ((!s[o] || !l.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && l.isArray(s[o]) && (s[o] = Mn(s[o])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return l.forEachEntry(e, (r, s) => {
      t(zn(r), s, n, 0);
    }), n;
  }
  return null;
}
function In(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const pe = {
  transitional: bt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = l.isObject(t);
    if (i && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return s ? JSON.stringify(_t(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Dn(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return Ne(
          a ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), In(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || pe.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (l.isResponse(t) || l.isReadableStream(t))
      return t;
    if (t && l.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? b.from(a, b.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: U.classes.FormData,
    Blob: U.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
l.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  pe.headers[e] = {};
});
const Hn = l.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), jn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Hn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Je = Symbol("internals");
function ue(e) {
  return e && String(e).trim().toLowerCase();
}
function be(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(be) : String(e);
}
function $n(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const qn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ae(e, t, n, r, s) {
  if (l.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function Vn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Wn(e, t) {
  const n = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
let z = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, h, u) {
      const f = ue(h);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const y = l.findKey(s, f);
      (!y || s[y] === void 0 || u === !0 || u === void 0 && s[y] !== !1) && (s[y || h] = be(a));
    }
    const o = (a, h) => l.forEach(a, (u, f) => i(u, f, h));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (l.isString(t) && (t = t.trim()) && !qn(t))
      o(jn(t), n);
    else if (l.isObject(t) && l.isIterable(t)) {
      let a = {}, h, u;
      for (const f of t) {
        if (!l.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = f[0]] = (h = a[u]) ? l.isArray(h) ? [...h, f[1]] : [h, f[1]] : f[1];
      }
      o(a, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ue(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return $n(s);
        if (l.isFunction(n))
          return n.call(this, s, r);
        if (l.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ue(t), t) {
      const r = l.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ae(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = ue(o), o) {
        const a = l.findKey(r, o);
        a && (!n || Ae(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return l.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ae(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return l.forEach(this, (s, i) => {
      const o = l.findKey(r, i);
      if (o) {
        n[o] = be(s), delete n[i];
        return;
      }
      const a = t ? Vn(i) : String(i).trim();
      a !== i && delete n[i], n[a] = be(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && l.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Je] = this[Je] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = ue(o);
      r[a] || (Wn(s, o), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
z.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(z.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
l.freezeMethods(z);
function Oe(e, t) {
  const n = this || pe, r = t || n, s = z.from(r.headers);
  let i = r.data;
  return l.forEach(e, function(a) {
    i = a.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function St(e) {
  return !!(e && e.__CANCEL__);
}
let me = class extends b {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", b.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Et(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Jn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Kn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const u = Date.now(), f = r[i];
    o || (o = u), n[s] = h, r[s] = u;
    let y = i, _ = 0;
    for (; y !== s; )
      _ += n[y++], y = y % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), u - o < t)
      return;
    const C = f && u - f;
    return C ? Math.round(_ * 1e3 / C) : void 0;
  };
}
function Xn(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (u, f = Date.now()) => {
    n = f, s = null, i && (clearTimeout(i), i = null), e(...u);
  };
  return [(...u) => {
    const f = Date.now(), y = f - n;
    y >= r ? o(u, f) : (s = u, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - y)));
  }, () => s && o(s)];
}
const Ee = (e, t, n = 3) => {
  let r = 0;
  const s = Kn(50, 250);
  return Xn((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, h = o - r, u = s(h), f = o <= a;
    r = o;
    const y = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: h,
      rate: u || void 0,
      estimated: u && a && f ? (a - o) / u : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(y);
  }, n);
}, Ke = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Xe = (e) => (...t) => l.asap(() => e(...t)), Gn = U.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, U.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(U.origin),
  U.navigator && /(msie|trident)/i.test(U.navigator.userAgent)
) : () => !0, Yn = U.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, i, o) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      l.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), l.isString(r) && a.push(`path=${r}`), l.isString(s) && a.push(`domain=${s}`), i === !0 && a.push("secure"), l.isString(o) && a.push(`SameSite=${o}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Zn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Qn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Rt(e, t, n) {
  let r = !Zn(t);
  return e && (r || n == !1) ? Qn(e, t) : t;
}
const Ge = (e) => e instanceof z ? { ...e } : e;
function ne(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, y, _) {
    return l.isPlainObject(u) && l.isPlainObject(f) ? l.merge.call({ caseless: _ }, u, f) : l.isPlainObject(f) ? l.merge({}, f) : l.isArray(f) ? f.slice() : f;
  }
  function s(u, f, y, _) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(u))
        return r(void 0, u, y, _);
    } else return r(u, f, y, _);
  }
  function i(u, f) {
    if (!l.isUndefined(f))
      return r(void 0, f);
  }
  function o(u, f) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, f);
  }
  function a(u, f, y) {
    if (y in t)
      return r(u, f);
    if (y in e)
      return r(void 0, u);
  }
  const h = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (u, f, y) => s(Ge(u), Ge(f), y, !0)
  };
  return l.forEach(Object.keys({ ...e, ...t }), function(f) {
    const y = h[f] || s, _ = y(e[f], t[f], f);
    l.isUndefined(_) && y !== a || (n[f] = _);
  }), n;
}
const Ft = (e) => {
  const t = ne({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: a } = t;
  if (t.headers = o = z.from(o), t.url = wt(Rt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), l.isFormData(n)) {
    if (U.hasStandardBrowserEnv || U.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (l.isFunction(n.getHeaders)) {
      const h = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(h).forEach(([f, y]) => {
        u.includes(f.toLowerCase()) && o.set(f, y);
      });
    }
  }
  if (U.hasStandardBrowserEnv && (r && l.isFunction(r) && (r = r(t)), r || r !== !1 && Gn(t.url))) {
    const h = s && i && Yn.read(i);
    h && o.set(s, h);
  }
  return t;
}, er = typeof XMLHttpRequest < "u", tr = er && function(e) {
  return new Promise(function(n, r) {
    const s = Ft(e);
    let i = s.data;
    const o = z.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: h, onDownloadProgress: u } = s, f, y, _, C, c;
    function m() {
      C && C(), c && c(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function g() {
      if (!p)
        return;
      const S = z.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), N = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: S,
        config: e,
        request: p
      };
      Et(function(T) {
        n(T), m();
      }, function(T) {
        r(T), m();
      }, N), p = null;
    }
    "onloadend" in p ? p.onloadend = g : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, p.onabort = function() {
      p && (r(new b("Request aborted", b.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function(R) {
      const N = R && R.message ? R.message : "Network Error", O = new b(N, b.ERR_NETWORK, e, p);
      O.event = R || null, r(O), p = null;
    }, p.ontimeout = function() {
      let R = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const N = s.transitional || bt;
      s.timeoutErrorMessage && (R = s.timeoutErrorMessage), r(new b(
        R,
        N.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && l.forEach(o.toJSON(), function(R, N) {
      p.setRequestHeader(N, R);
    }), l.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), a && a !== "json" && (p.responseType = s.responseType), u && ([_, c] = Ee(u, !0), p.addEventListener("progress", _)), h && p.upload && ([y, C] = Ee(h), p.upload.addEventListener("progress", y), p.upload.addEventListener("loadend", C)), (s.cancelToken || s.signal) && (f = (S) => {
      p && (r(!S || S.type ? new me(null, e, p) : S), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const w = Jn(s.url);
    if (w && U.protocols.indexOf(w) === -1) {
      r(new b("Unsupported protocol " + w + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, nr = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(u) {
      if (!s) {
        s = !0, a();
        const f = u instanceof Error ? u : this.reason;
        r.abort(f instanceof b ? f : new me(f instanceof Error ? f.message : f));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new b(`timeout of ${t}ms exceeded`, b.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: h } = r;
    return h.unsubscribe = () => l.asap(a), h;
  }
}, rr = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, sr = async function* (e, t) {
  for await (const n of ir(e))
    yield* rr(n, t);
}, ir = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Ye = (e, t, n, r) => {
  const s = sr(e, t);
  let i = 0, o, a = (h) => {
    o || (o = !0, r && r(h));
  };
  return new ReadableStream({
    async pull(h) {
      try {
        const { done: u, value: f } = await s.next();
        if (u) {
          a(), h.close();
          return;
        }
        let y = f.byteLength;
        if (n) {
          let _ = i += y;
          n(_);
        }
        h.enqueue(new Uint8Array(f));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(h) {
      return a(h), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ze = 64 * 1024, { isFunction: ge } = l, or = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(l.global), {
  ReadableStream: Qe,
  TextEncoder: et
} = l.global, tt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ar = (e) => {
  e = l.merge.call({
    skipUndefined: !0
  }, or, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? ge(t) : typeof fetch == "function", i = ge(n), o = ge(r);
  if (!s)
    return !1;
  const a = s && ge(Qe), h = s && (typeof et == "function" ? /* @__PURE__ */ ((c) => (m) => c.encode(m))(new et()) : async (c) => new Uint8Array(await new n(c).arrayBuffer())), u = i && a && tt(() => {
    let c = !1;
    const m = new n(U.origin, {
      body: new Qe(),
      method: "POST",
      get duplex() {
        return c = !0, "half";
      }
    }).headers.has("Content-Type");
    return c && !m;
  }), f = o && a && tt(() => l.isReadableStream(new r("").body)), y = {
    stream: f && ((c) => c.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((c) => {
    !y[c] && (y[c] = (m, p) => {
      let g = m && m[c];
      if (g)
        return g.call(m);
      throw new b(`Response type '${c}' is not supported`, b.ERR_NOT_SUPPORT, p);
    });
  });
  const _ = async (c) => {
    if (c == null)
      return 0;
    if (l.isBlob(c))
      return c.size;
    if (l.isSpecCompliantForm(c))
      return (await new n(U.origin, {
        method: "POST",
        body: c
      }).arrayBuffer()).byteLength;
    if (l.isArrayBufferView(c) || l.isArrayBuffer(c))
      return c.byteLength;
    if (l.isURLSearchParams(c) && (c = c + ""), l.isString(c))
      return (await h(c)).byteLength;
  }, C = async (c, m) => {
    const p = l.toFiniteNumber(c.getContentLength());
    return p ?? _(m);
  };
  return async (c) => {
    let {
      url: m,
      method: p,
      data: g,
      signal: w,
      cancelToken: S,
      timeout: R,
      onDownloadProgress: N,
      onUploadProgress: O,
      responseType: T,
      headers: k,
      withCredentials: I = "same-origin",
      fetchOptions: J
    } = Ft(c), H = t || fetch;
    T = T ? (T + "").toLowerCase() : "text";
    let j = nr([w, S && S.toAbortSignal()], R), v = null;
    const E = j && j.unsubscribe && (() => {
      j.unsubscribe();
    });
    let K;
    try {
      if (O && u && p !== "get" && p !== "head" && (K = await C(k, g)) !== 0) {
        let $ = new n(m, {
          method: "POST",
          body: g,
          duplex: "half"
        }), X;
        if (l.isFormData(g) && (X = $.headers.get("content-type")) && k.setContentType(X), $.body) {
          const [A, q] = Ke(
            K,
            Ee(Xe(O))
          );
          g = Ye($.body, Ze, A, q);
        }
      }
      l.isString(I) || (I = I ? "include" : "omit");
      const x = i && "credentials" in n.prototype, Y = {
        ...J,
        signal: j,
        method: p.toUpperCase(),
        headers: k.normalize().toJSON(),
        body: g,
        duplex: "half",
        credentials: x ? I : void 0
      };
      v = i && new n(m, Y);
      let M = await (i ? H(v, J) : H(m, Y));
      const se = f && (T === "stream" || T === "response");
      if (f && (N || se && E)) {
        const $ = {};
        ["status", "statusText", "headers"].forEach((le) => {
          $[le] = M[le];
        });
        const X = l.toFiniteNumber(M.headers.get("content-length")), [A, q] = N && Ke(
          X,
          Ee(Xe(N), !0)
        ) || [];
        M = new r(
          Ye(M.body, Ze, A, () => {
            q && q(), E && E();
          }),
          $
        );
      }
      T = T || "text";
      let ae = await y[l.findKey(y, T) || "text"](M, c);
      return !se && E && E(), await new Promise(($, X) => {
        Et($, X, {
          data: ae,
          headers: z.from(M.headers),
          status: M.status,
          statusText: M.statusText,
          config: c,
          request: v
        });
      });
    } catch (x) {
      throw E && E(), x && x.name === "TypeError" && /Load failed|fetch/i.test(x.message) ? Object.assign(
        new b("Network Error", b.ERR_NETWORK, c, v),
        {
          cause: x.cause || x
        }
      ) : b.from(x, x && x.code, c, v);
    }
  };
}, lr = /* @__PURE__ */ new Map(), Ct = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, i = [
    r,
    s,
    n
  ];
  let o = i.length, a = o, h, u, f = lr;
  for (; a--; )
    h = i[a], u = f.get(h), u === void 0 && f.set(h, u = a ? /* @__PURE__ */ new Map() : ar(t)), f = u;
  return u;
};
Ct();
const Me = {
  http: Cn,
  xhr: tr,
  fetch: {
    get: Ct
  }
};
l.forEach(Me, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nt = (e) => `- ${e}`, cr = (e) => l.isFunction(e) || e === null || e === !1;
function ur(e, t) {
  e = l.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let a;
    if (s = r, !cr(r) && (s = Me[(a = String(r)).toLowerCase()], s === void 0))
      throw new b(`Unknown adapter '${a}'`);
    if (s && (l.isFunction(s) || (s = s.get(t))))
      break;
    i[a || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([h, u]) => `adapter ${h} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? o.length > 1 ? `since :
` + o.map(nt).join(`
`) : " " + nt(o[0]) : "as no adapter specified";
    throw new b(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const xt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ur,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Me
};
function Te(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new me(null, e);
}
function rt(e) {
  return Te(e), e.headers = z.from(e.headers), e.data = Oe.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), xt.getAdapter(e.adapter || pe.adapter, e)(e).then(function(r) {
    return Te(e), r.data = Oe.call(
      e,
      e.transformResponse,
      r
    ), r.headers = z.from(r.headers), r;
  }, function(r) {
    return St(r) || (Te(e), r && r.response && (r.response.data = Oe.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = z.from(r.response.headers))), Promise.reject(r);
  });
}
const Nt = "1.13.4", ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ve[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const st = {};
ve.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + Nt + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, a) => {
    if (t === !1)
      throw new b(
        s(o, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !st[o] && (st[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, a) : !0;
  };
};
ve.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function dr(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const a = e[i], h = a === void 0 || o(a, i, e);
      if (h !== !0)
        throw new b("option " + i + " must be " + h, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + i, b.ERR_BAD_OPTION);
  }
}
const _e = {
  assertOptions: dr,
  validators: ve
}, W = _e.validators;
let ee = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new We(),
      response: new We()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ne(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && _e.assertOptions(r, {
      silentJSONParsing: W.transitional(W.boolean),
      forcedJSONParsing: W.transitional(W.boolean),
      clarifyTimeoutError: W.transitional(W.boolean)
    }, !1), s != null && (l.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : _e.assertOptions(s, {
      encode: W.function,
      serialize: W.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), _e.assertOptions(n, {
      baseUrl: W.spelling("baseURL"),
      withXsrfToken: W.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && l.merge(
      i.common,
      i[n.method]
    );
    i && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (c) => {
        delete i[c];
      }
    ), n.headers = z.concat(o, i);
    const a = [];
    let h = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (h = h && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let f, y = 0, _;
    if (!h) {
      const c = [rt.bind(this), void 0];
      for (c.unshift(...a), c.push(...u), _ = c.length, f = Promise.resolve(n); y < _; )
        f = f.then(c[y++], c[y++]);
      return f;
    }
    _ = a.length;
    let C = n;
    for (; y < _; ) {
      const c = a[y++], m = a[y++];
      try {
        C = c(C);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      f = rt.call(this, C);
    } catch (c) {
      return Promise.reject(c);
    }
    for (y = 0, _ = u.length; y < _; )
      f = f.then(u[y++], u[y++]);
    return f;
  }
  getUri(t) {
    t = ne(this.defaults, t);
    const n = Rt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return wt(n, t.params, t.paramsSerializer);
  }
};
l.forEach(["delete", "get", "head", "options"], function(t) {
  ee.prototype[t] = function(n, r) {
    return this.request(ne(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, a) {
      return this.request(ne(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  ee.prototype[t] = n(), ee.prototype[t + "Form"] = n(!0);
});
let fr = class vt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, a) {
      r.reason || (r.reason = new me(i, o, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new vt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function hr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function pr(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const ke = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(ke).forEach(([e, t]) => {
  ke[t] = e;
});
function At(e) {
  const t = new ee(e), n = at(ee.prototype.request, t);
  return l.extend(n, ee.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return At(ne(e, s));
  }, n;
}
const B = At(pe);
B.Axios = ee;
B.CanceledError = me;
B.CancelToken = fr;
B.isCancel = St;
B.VERSION = Nt;
B.toFormData = Ne;
B.AxiosError = b;
B.Cancel = B.CanceledError;
B.all = function(t) {
  return Promise.all(t);
};
B.spread = hr;
B.isAxiosError = pr;
B.mergeConfig = ne;
B.AxiosHeaders = z;
B.formToJSON = (e) => _t(l.isHTMLForm(e) ? new FormData(e) : e);
B.getAdapter = xt.getAdapter;
B.HttpStatusCode = ke;
B.default = B;
const {
  Axios: Mr,
  AxiosError: Ir,
  CanceledError: Hr,
  isCancel: jr,
  CancelToken: $r,
  VERSION: qr,
  all: Vr,
  Cancel: Wr,
  isAxiosError: Jr,
  spread: Kr,
  toFormData: Xr,
  AxiosHeaders: Gr,
  HttpStatusCode: Yr,
  formToJSON: Zr,
  getAdapter: Qr,
  mergeConfig: es
} = B;
let Q = null, Re = null;
function mr(e) {
  return Re = e, Q = B.create({
    baseURL: e.baseUrl,
    timeout: 6e4,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": e.apiKey
    }
  }), Q.interceptors.request.use(
    (t) => t,
    (t) => Promise.reject(t)
  ), Q.interceptors.response.use(
    (t) => t,
    (t) => {
      var r, s;
      const n = ((s = (r = t.response) == null ? void 0 : r.data) == null ? void 0 : s.message) || t.message || "An error occurred";
      return console.error("[LiyaChat] API Error:", n), Promise.reject(new Error(n));
    }
  ), Q;
}
function re() {
  if (!Q)
    throw new Error("[LiyaChat] API client not initialized. Call initializeClient first.");
  return Q;
}
function ye() {
  if (!Re)
    throw new Error("[LiyaChat] Config not set. Initialize the provider first.");
  return Re;
}
function ts() {
  return Q !== null && Re !== null;
}
async function yr(e, t, n) {
  const r = re(), s = ye(), i = n && n.length > 0 ? "/api/v1/external/chat/with-files/" : "/api/v1/external/chat/", o = {
    assistant_id: s.assistantId,
    message: e,
    session_id: t,
    file_ids: n
  }, a = await r.post(i, o);
  if (a.data.status === "error")
    throw new Error(a.data.message || "Failed to send message");
  return a.data.data;
}
async function gr(e, t = 50, n = 0) {
  const s = await re().get(
    `/api/v1/external/sessions/${e}/history/`,
    { params: { limit: t, offset: n } }
  );
  if (s.data.status === "error")
    throw new Error(s.data.message || "Failed to get session history");
  return s.data.data;
}
async function wr(e = 20, t = 0) {
  const n = re(), r = ye(), s = await n.get(
    "/api/v1/external/sessions/",
    {
      params: {
        assistant_id: r.assistantId,
        limit: e,
        offset: t
      }
    }
  );
  if (s.data.status === "error")
    throw new Error(s.data.message || "Failed to get sessions");
  return s.data.data;
}
async function br(e, t) {
  const n = re(), s = {
    assistant_id: ye().assistantId,
    session_name: e || "Yeni Sohbet",
    external_session_id: t
  }, i = await n.post(
    "/api/v1/external/sessions/",
    s
  );
  if (i.data.status === "error")
    throw new Error(i.data.message || "Failed to create session");
  return i.data.data;
}
async function ns(e) {
  const n = await re().get(
    `/api/v1/external/sessions/${e}/`
  );
  if (n.data.status === "error")
    throw new Error(n.data.message || "Failed to get session");
  return n.data.data;
}
async function _r(e) {
  const n = await re().delete(
    `/api/v1/external/sessions/${e}/`
  );
  if (n.data.status === "error")
    throw new Error(n.data.message || "Failed to delete session");
}
async function Sr(e, t) {
  const n = re(), r = new FormData();
  r.append("session_id", e), r.append("file", t);
  const s = await n.post(
    "/api/v1/external/files/",
    r,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
  if (s.data.status === "error")
    throw new Error(s.data.message || "Failed to upload file");
  return s.data.data;
}
function it(e) {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB"], r = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, r)).toFixed(2)) + " " + n[r];
}
function Er(e, t) {
  return !t || t.length === 0 ? !0 : t.some((n) => {
    if (n.endsWith("/*")) {
      const r = n.replace("/*", "");
      return e.type.startsWith(r);
    }
    return e.type === n;
  });
}
const Rr = [
  "text/plain",
  "text/csv",
  "text/markdown",
  "application/pdf",
  "application/json",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/*"
], ot = 50 * 1024 * 1024, Ot = Ut(null);
function rs({ config: e, children: t }) {
  const [n, r] = P(!1);
  te(() => {
    e.apiKey && e.baseUrl && e.assistantId && (mr(e), r(!0));
  }, [e]);
  const s = {
    config: e,
    isInitialized: n
  };
  return /* @__PURE__ */ d(Ot.Provider, { value: s, children: t });
}
function ss() {
  const e = Dt(Ot);
  if (!e)
    throw new Error("useLiyaChatContext must be used within a LiyaChatProvider");
  return e;
}
function Tt() {
  const [e, t] = P([]), [n, r] = P(!1), [s, i] = P(null), [o, a] = P(() => {
    try {
      return localStorage.getItem("liya_chat_session_id");
    } catch {
      return null;
    }
  }), h = L((c) => {
    try {
      localStorage.setItem("liya_chat_session_id", c);
    } catch {
    }
  }, []), u = L(() => {
    try {
      localStorage.removeItem("liya_chat_session_id");
    } catch {
    }
  }, []), f = L(async (c, m) => {
    if (!c.trim()) return null;
    r(!0), i(null);
    const p = {
      id: `temp-${Date.now()}`,
      content: c.trim(),
      role: "user",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    t((g) => [...g, p]);
    try {
      const g = await yr(
        c.trim(),
        o || void 0,
        m
      );
      return g.session_id && (a(g.session_id), h(g.session_id)), t((w) => {
        const R = [...w.filter((N) => N.id !== p.id)];
        return g.user_message ? R.push(g.user_message) : R.push({ ...p, id: `user-${Date.now()}` }), g.assistant_message ? R.push(g.assistant_message) : g.response && R.push({
          id: g.message_id || `msg-${Date.now()}`,
          content: g.response,
          role: "assistant",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          response_time: g.response_time
        }), R;
      }), g;
    } catch (g) {
      return i(g instanceof Error ? g.message : "Failed to send message"), t((w) => w.filter((S) => S.id !== p.id)), null;
    } finally {
      r(!1);
    }
  }, [o, h]), y = L(async (c) => {
    r(!0), i(null);
    try {
      const m = await gr(c);
      t(m.messages), a(c), h(c);
    } catch (m) {
      i(m instanceof Error ? m.message : "Failed to load history");
    } finally {
      r(!1);
    }
  }, [h]), _ = L(() => {
    t([]), a(null), u();
  }, [u]), C = L((c) => {
    a(c), c ? h(c) : u();
  }, [h, u]);
  return {
    messages: e,
    isLoading: n,
    error: s,
    currentSessionId: o,
    sendMessage: f,
    loadHistory: y,
    clearMessages: _,
    setSessionId: C
  };
}
function Ie(e = Rr) {
  const [t, n] = P([]), [r, s] = P([]), [i, o] = P(!1), [a, h] = P(null), u = L((m) => {
    h(null);
    const p = Array.from(m), g = [];
    for (const w of p) {
      if (w.size > ot) {
        h(`File "${w.name}" exceeds maximum size of ${it(ot)}`);
        continue;
      }
      if (!Er(w, e)) {
        h(`File type "${w.type}" is not allowed`);
        continue;
      }
      g.push({
        id: `pending-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        file: w,
        progress: 0,
        status: "pending"
      });
    }
    n((w) => [...w, ...g]);
  }, [e]), f = L(async (m) => {
    if (t.length === 0) return [];
    o(!0), h(null);
    const p = [];
    for (const g of t)
      if (g.status !== "completed") {
        n(
          (w) => w.map((S) => S.id === g.id ? { ...S, status: "uploading" } : S)
        );
        try {
          const w = await Sr(m, g.file);
          p.push(w), s((S) => [...S, w]), n(
            (S) => S.map(
              (R) => R.id === g.id ? { ...R, status: "completed", progress: 100, attachment: w } : R
            )
          );
        } catch (w) {
          n(
            (S) => S.map(
              (R) => R.id === g.id ? { ...R, status: "error", error: w instanceof Error ? w.message : "Upload failed" } : R
            )
          );
        }
      }
    return n((g) => g.filter((w) => w.status !== "completed")), o(!1), p;
  }, [t]), y = L((m) => {
    n((p) => p.filter((g) => g.id !== m));
  }, []), _ = L((m) => {
    s((p) => p.filter((g) => g.id !== m));
  }, []), C = L(() => {
    n([]), s([]), h(null);
  }, []), c = L((m) => m.startsWith("image/") ? "🖼️" : m.startsWith("video/") ? "🎬" : m.startsWith("audio/") ? "🎵" : m.includes("pdf") ? "📄" : m.includes("word") || m.includes("document") ? "📝" : m.includes("excel") || m.includes("spreadsheet") ? "📊" : m.includes("json") ? "📋" : m.startsWith("text/") ? "📃" : "📎", []);
  return {
    pendingFiles: t,
    uploadedFiles: r,
    isUploading: i,
    error: a,
    addFiles: u,
    uploadFiles: f,
    removePendingFile: y,
    removeUploadedFile: _,
    clearAll: C,
    formatFileSize: it,
    getFileIcon: c
  };
}
function Fr(e) {
  return new Date(e).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Cr(e) {
  if (!e) return null;
  try {
    let t = e.trim();
    t.startsWith("```json") ? t = t.replace(/^```json\s*/, "").replace(/\s*```$/, "") : t.startsWith("```") && (t = t.replace(/^```\s*/, "").replace(/\s*```$/, ""));
    const n = t.match(/\{[\s\S]*\}/);
    n && (t = n[0]);
    const r = JSON.parse(t);
    return r && typeof r.response == "string" ? r : null;
  } catch {
    return null;
  }
}
function xr({
  message: e,
  showAvatar: t = !0,
  assistantName: n = "Assistant",
  onSuggestionClick: r
}) {
  const s = e.role === "user", i = zt(() => s ? null : Cr(e.raw_response || e.content), [s, e.raw_response, e.content]), o = (i == null ? void 0 : i.response) || e.content, a = (i == null ? void 0 : i.suggestions) || [], h = (u) => {
    r == null || r(u);
  };
  return /* @__PURE__ */ F("div", { className: `liya-message ${s ? "liya-message--user" : "liya-message--assistant"}`, children: [
    t && !s && /* @__PURE__ */ d("div", { className: "liya-message__avatar", children: /* @__PURE__ */ d("div", { className: "liya-avatar liya-avatar--assistant", children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ d("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" }) }) }) }),
    /* @__PURE__ */ F("div", { className: "liya-message__content", children: [
      /* @__PURE__ */ d("div", { className: "liya-message__bubble", children: /* @__PURE__ */ d("div", { className: "liya-message__text", dangerouslySetInnerHTML: { __html: o } }) }),
      a.length > 0 && /* @__PURE__ */ d("div", { className: "liya-message__suggestions", children: a.map((u, f) => /* @__PURE__ */ F(
        "button",
        {
          className: "liya-suggestion",
          onClick: () => h(u),
          children: [
            /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "14", height: "14", children: /* @__PURE__ */ d("path", { d: "M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" }) }),
            u
          ]
        },
        f
      )) }),
      /* @__PURE__ */ F("div", { className: "liya-message__meta", children: [
        /* @__PURE__ */ d("span", { className: "liya-message__time", children: Fr(e.created_at) }),
        e.response_time && /* @__PURE__ */ F("span", { className: "liya-message__response-time", children: [
          e.response_time.toFixed(1),
          "s"
        ] })
      ] })
    ] }),
    t && s && /* @__PURE__ */ d("div", { className: "liya-message__avatar", children: /* @__PURE__ */ d("div", { className: "liya-avatar liya-avatar--user", children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ d("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }) }) }) })
  ] });
}
function Lt({
  messages: e,
  isLoading: t = !1,
  assistantName: n = "Assistant",
  welcomeMessage: r = "",
  onSuggestionClick: s
}) {
  const i = Se(null);
  return te(() => {
    i.current && (i.current.scrollTop = i.current.scrollHeight);
  }, [e, t]), /* @__PURE__ */ F("div", { ref: i, className: "liya-message-list", children: [
    e.length === 0 && r && /* @__PURE__ */ F("div", { className: "liya-welcome", children: [
      /* @__PURE__ */ d("div", { className: "liya-welcome__icon", children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "48", height: "48", children: /* @__PURE__ */ d("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" }) }) }),
      /* @__PURE__ */ d("p", { className: "liya-welcome__text", children: r })
    ] }),
    e.map((o) => /* @__PURE__ */ d(
      xr,
      {
        message: o,
        assistantName: n,
        onSuggestionClick: s
      },
      o.id
    )),
    t && /* @__PURE__ */ F("div", { className: "liya-typing", children: [
      /* @__PURE__ */ d("div", { className: "liya-typing__avatar", children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ d("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" }) }) }),
      /* @__PURE__ */ F("div", { className: "liya-typing__dots", children: [
        /* @__PURE__ */ d("span", {}),
        /* @__PURE__ */ d("span", {}),
        /* @__PURE__ */ d("span", {})
      ] })
    ] })
  ] });
}
function Nr(e = "tr-TR") {
  const [t, n] = P(!1), [r, s] = P(""), [i, o] = P(""), [a, h] = P(null), [u, f] = P(!1), y = Se(null);
  te(() => {
    const g = typeof window < "u" ? window.SpeechRecognition || window.webkitSpeechRecognition : null;
    f(!!g);
  }, []);
  const _ = L(() => {
    const g = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!g || y.current) return;
    const w = new g();
    w.continuous = !0, w.interimResults = !0, w.lang = e, w.onstart = () => {
      n(!0), h(null);
    }, w.onresult = (S) => {
      let R = "", N = "";
      for (let O = S.resultIndex; O < S.results.length; O++) {
        const T = S.results[O];
        T.isFinal ? N += T[0].transcript : R += T[0].transcript;
      }
      N && s((O) => (O ? O + " " : "") + N), o(R);
    }, w.onerror = (S) => {
      h({
        "no-speech": "No speech detected. Please try again.",
        "audio-capture": "Microphone not available.",
        "not-allowed": "Microphone permission denied.",
        network: "Network error occurred.",
        aborted: "Recording was cancelled."
      }[S.error] || "An error occurred during recording."), n(!1);
    }, w.onend = () => {
      n(!1), o("");
    }, y.current = w;
  }, [e]), C = L(() => {
    if (!u) {
      h("Speech recognition is not supported in this browser");
      return;
    }
    if (_(), y.current && !t) {
      s(""), o(""), h(null);
      try {
        y.current.start();
      } catch {
        h("Failed to start recording");
      }
    }
  }, [u, t, _]), c = L(() => (y.current && t && y.current.stop(), r), [t, r]), m = L(() => {
    y.current && t && y.current.abort(), s(""), o("");
  }, [t]), p = L(() => {
    s(""), o("");
  }, []);
  return te(() => () => {
    y.current && t && y.current.abort();
  }, [t]), {
    isRecording: t,
    transcript: r,
    interimTranscript: i,
    error: a,
    isSupported: u,
    startRecording: C,
    stopRecording: c,
    cancelRecording: m,
    clearTranscript: p
  };
}
function Pt({
  placeholder: e = "Mesajınızı yazın...",
  disabled: t = !1,
  showVoice: n = !0,
  voiceEnabled: r = !0,
  // false for STANDARD users - shows disabled mic icon
  showFileUpload: s = !0,
  maxLength: i = 4e3,
  onSend: o
}) {
  const [a, h] = P(""), u = Se(null), f = Se(null), {
    isRecording: y,
    transcript: _,
    isSupported: C,
    startRecording: c,
    stopRecording: m
  } = Nr(), {
    pendingFiles: p,
    uploadedFiles: g,
    isUploading: w,
    addFiles: S,
    removePendingFile: R,
    clearAll: N,
    formatFileSize: O,
    getFileIcon: T
  } = Ie(), k = (a.trim().length > 0 || g.length > 0) && !t && !w;
  te(() => {
    _ && h(_);
  }, [_]);
  const I = () => {
    if (!k) return;
    const E = a.trim(), K = g.length > 0 ? g.map((x) => x.id) : void 0;
    o(E, K), h(""), N(), H();
  }, J = (E) => {
    E.key === "Enter" && !E.shiftKey && (E.preventDefault(), I());
  }, H = () => {
    u.current && (u.current.style.height = "auto", u.current.style.height = Math.min(u.current.scrollHeight, 150) + "px");
  }, j = () => {
    if (y) {
      const E = m();
      E && h(E);
    } else
      c();
  }, v = (E) => {
    E.target.files && (S(E.target.files), E.target.value = "");
  };
  return /* @__PURE__ */ F("div", { className: "liya-chat-input", children: [
    p.length > 0 && /* @__PURE__ */ d("div", { className: "liya-chat-input__files", children: p.map((E) => /* @__PURE__ */ F(
      "div",
      {
        className: `liya-file-chip ${E.status === "error" ? "liya-file-chip--error" : ""}`,
        children: [
          /* @__PURE__ */ d("span", { className: "liya-file-chip__icon", children: T(E.file.type) }),
          /* @__PURE__ */ d("span", { className: "liya-file-chip__name", children: E.file.name }),
          /* @__PURE__ */ d("span", { className: "liya-file-chip__size", children: O(E.file.size) }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "liya-file-chip__remove",
              onClick: () => R(E.id),
              children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "14", height: "14", children: /* @__PURE__ */ d("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) })
            }
          )
        ]
      },
      E.id
    )) }),
    /* @__PURE__ */ F("div", { className: "liya-chat-input__wrapper", children: [
      s && /* @__PURE__ */ F(kt, { children: [
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "liya-chat-input__btn liya-chat-input__btn--file",
            disabled: t,
            onClick: () => {
              var E;
              return (E = f.current) == null ? void 0 : E.click();
            },
            title: "Dosya ekle",
            children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ d("path", { d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" }) })
          }
        ),
        /* @__PURE__ */ d(
          "input",
          {
            ref: f,
            type: "file",
            multiple: !0,
            className: "liya-chat-input__file-input",
            onChange: v
          }
        )
      ] }),
      /* @__PURE__ */ d(
        "textarea",
        {
          ref: u,
          value: a,
          placeholder: e,
          disabled: t,
          maxLength: i,
          className: "liya-chat-input__textarea",
          rows: 1,
          onChange: (E) => {
            h(E.target.value), H();
          },
          onKeyDown: J
        }
      ),
      n && C && /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: `liya-chat-input__btn liya-chat-input__btn--voice ${y ? "liya-chat-input__btn--recording" : ""} ${r ? "" : "liya-chat-input__btn--voice-disabled"}`,
          disabled: t || !r,
          onClick: r ? j : void 0,
          title: r ? y ? "Kaydı durdur" : "Sesle yaz" : "Sesli yazma özelliği Premium üyelik gerektirir",
          children: r ? y ? /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ d("path", { d: "M6 6h12v12H6z" }) }) : /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ d("path", { d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" }) }) : /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ d("path", { d: "M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" }) })
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "liya-chat-input__btn liya-chat-input__btn--send",
          disabled: !k,
          onClick: I,
          title: "Gönder",
          children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ d("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }) })
        }
      )
    ] }),
    a.length > i * 0.8 && /* @__PURE__ */ F("div", { className: "liya-chat-input__count", children: [
      a.length,
      " / ",
      i
    ] })
  ] });
}
function vr(e, t) {
  const n = parseInt(e.replace("#", ""), 16), r = Math.round(2.55 * t), s = (n >> 16) + r, i = (n >> 8 & 255) + r, o = (n & 255) + r;
  return "#" + (16777216 + (s < 255 ? s < 1 ? 0 : s : 255) * 65536 + (i < 255 ? i < 1 ? 0 : i : 255) * 256 + (o < 255 ? o < 1 ? 0 : o : 255)).toString(16).slice(1);
}
function is({
  position: e = "bottom-right",
  theme: t = {},
  welcomeMessage: n = "Bu chat hizmeti Liya AI tarafından sağlanmaktadır. Size bugün nasıl yardımcı olabilirim?",
  placeholder: r = "Mesajınızı yazın...",
  showBranding: s = !0,
  showVoice: i = !0,
  voiceEnabled: o = !0,
  showFileUpload: a = !0,
  offsetX: h = 20,
  offsetY: u = 20,
  onOpen: f,
  onClose: y,
  onMessageSent: _,
  onMessageReceived: C
}) {
  const [c, m] = P(!1), p = ye(), {
    messages: g,
    isLoading: w,
    currentSessionId: S,
    sendMessage: R,
    loadHistory: N
  } = Tt(), { uploadFiles: O, clearAll: T } = Ie(), k = p.assistantName || "Assistant", I = {
    "--liya-primary-color": t.primaryColor || "#6366f1",
    "--liya-primary-hover": t.primaryColor ? vr(t.primaryColor, -10) : "#4f46e5",
    "--liya-secondary-color": t.secondaryColor || "#e5e7eb",
    "--liya-bg-color": t.backgroundColor || "#ffffff",
    "--liya-bg-secondary": "#f3f4f6",
    "--liya-text-color": t.textColor || "#374151",
    "--liya-text-muted": "#9ca3af",
    "--liya-border-color": "#e5e7eb",
    "--liya-border-radius": t.borderRadius || "16px",
    "--liya-font-family": t.fontFamily || "system-ui, -apple-system, sans-serif",
    "--liya-z-index": t.zIndex || 9999,
    "--liya-offset-x": `${h}px`,
    "--liya-offset-y": `${u}px`
  }, J = (v) => {
    j(v);
  }, H = () => {
    const v = !c;
    m(v), v ? f == null || f() : y == null || y();
  }, j = async (v, E) => {
    var Y, M;
    if (!v.trim() && (!E || E.length === 0)) return;
    let K = E;
    S && E && E.length > 0 && (K = (await O(S)).map((ae) => ae.id)), _ == null || _(v);
    const x = await R(v, K);
    ((Y = x == null ? void 0 : x.assistant_message) != null && Y.content || x != null && x.response) && (C == null || C(((M = x.assistant_message) == null ? void 0 : M.content) || x.response || "")), T();
  };
  return te(() => {
    try {
      const v = localStorage.getItem("liya_chat_session_id");
      v && N(v);
    } catch {
    }
  }, []), /* @__PURE__ */ F("div", { className: `liya-widget liya-widget--${e}`, style: I, children: [
    /* @__PURE__ */ d(
      "button",
      {
        className: `liya-widget__toggle ${c ? "liya-widget__toggle--open" : ""}`,
        onClick: H,
        "aria-label": c ? "Sohbeti kapat" : "Sohbeti aç",
        children: c ? /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "28", height: "28", children: /* @__PURE__ */ d("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) }) : /* @__PURE__ */ F("svg", { viewBox: "0 0 80 92", fill: "none", width: "28", height: "28", children: [
          /* @__PURE__ */ d("rect", { x: "0", y: "0", width: "80", height: "80", rx: "18", fill: "#6366F1" }),
          /* @__PURE__ */ d("path", { d: "M22 80 L34 80 L28 92 Z", fill: "#6366F1" }),
          /* @__PURE__ */ d("path", { d: "M36 26 V58 H56", stroke: "#FFFFFF", strokeWidth: "5", strokeLinecap: "round" }),
          /* @__PURE__ */ d("circle", { cx: "36", cy: "26", r: "3", fill: "#FFFFFF" }),
          /* @__PURE__ */ d("circle", { cx: "36", cy: "58", r: "3", fill: "#FFFFFF" }),
          /* @__PURE__ */ d("circle", { cx: "56", cy: "58", r: "3", fill: "#FFFFFF" }),
          /* @__PURE__ */ d("text", { x: "40", y: "52", fontSize: "12", fontWeight: "600", fontFamily: "system-ui, sans-serif", fill: "#FFFFFF", children: "ai" }),
          /* @__PURE__ */ d("path", { d: "M58 16 L60 20 L64 22 L60 24 L58 28 L56 24 L52 22 L56 20 Z", fill: "#FFFFFF" }),
          /* @__PURE__ */ d("path", { d: "M66 30 L67.5 33 L71 34.5 L67.5 36 L66 39 L64.5 36 L61 34.5 L64.5 33 Z", fill: "#FFFFFF" }),
          /* @__PURE__ */ d("path", { d: "M50 18 L51.5 21 L55 22.5 L51.5 24 L50 27 L48.5 24 L45 22.5 L48.5 21 Z", fill: "#FFFFFF" })
        ] })
      }
    ),
    c && /* @__PURE__ */ F("div", { className: "liya-widget__panel", children: [
      /* @__PURE__ */ F("div", { className: "liya-widget__header", children: [
        /* @__PURE__ */ F("div", { className: "liya-widget__header-info", children: [
          /* @__PURE__ */ d("div", { className: "liya-widget__avatar", children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "24", height: "24", children: /* @__PURE__ */ d("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" }) }) }),
          /* @__PURE__ */ F("div", { className: "liya-widget__header-text", children: [
            /* @__PURE__ */ d("h3", { className: "liya-widget__title", children: k }),
            /* @__PURE__ */ d("span", { className: "liya-widget__status", children: "Çevrimiçi" })
          ] })
        ] }),
        /* @__PURE__ */ d("button", { className: "liya-widget__close", onClick: H, children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ d("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) }) })
      ] }),
      /* @__PURE__ */ d(
        Lt,
        {
          messages: g,
          isLoading: w,
          assistantName: k,
          welcomeMessage: n,
          onSuggestionClick: J
        }
      ),
      /* @__PURE__ */ d(
        Pt,
        {
          placeholder: r,
          disabled: w,
          showVoice: i,
          voiceEnabled: o,
          showFileUpload: a,
          sessionId: S,
          onSend: j
        }
      ),
      s && /* @__PURE__ */ F("div", { className: "liya-widget__branding", children: [
        "Powered by ",
        /* @__PURE__ */ d("a", { href: "https://liyalabs.com", target: "_blank", rel: "noopener noreferrer", children: "Liya AI" })
      ] })
    ] })
  ] });
}
function Ar() {
  const [e, t] = P([]), [n, r] = P(null), [s, i] = P(!1), [o, a] = P(null), [h, u] = P(0), f = L(async (m = 20, p = 0) => {
    i(!0), a(null);
    try {
      const g = await wr(m, p);
      t(g.sessions), u(g.total);
    } catch (g) {
      a(g instanceof Error ? g.message : "Failed to load sessions");
    } finally {
      i(!1);
    }
  }, []), y = L(async (m) => {
    i(!0), a(null);
    try {
      const p = await br(m);
      return t((g) => [p, ...g]), r(p), p;
    } catch (p) {
      return a(p instanceof Error ? p.message : "Failed to create session"), null;
    } finally {
      i(!1);
    }
  }, []), _ = L(async (m) => {
    i(!0), a(null);
    try {
      return await _r(m), t((p) => p.filter((g) => g.id !== m)), (n == null ? void 0 : n.id) === m && r(null), !0;
    } catch (p) {
      return a(p instanceof Error ? p.message : "Failed to delete session"), !1;
    } finally {
      i(!1);
    }
  }, [n]), C = L((m) => {
    r(m);
  }, []), c = L(() => {
    t([]), r(null), u(0);
  }, []);
  return {
    sessions: e,
    currentSession: n,
    isLoading: s,
    error: o,
    totalSessions: h,
    loadSessions: f,
    createSession: y,
    deleteSession: _,
    selectSession: C,
    clearSessions: c
  };
}
function Or(e) {
  if (!e) return "";
  const t = new Date(e), r = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), s = Math.floor(r / (1e3 * 60 * 60 * 24));
  return s === 0 ? t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : s === 1 ? "Dün" : s < 7 ? t.toLocaleDateString([], { weekday: "short" }) : t.toLocaleDateString([], { day: "numeric", month: "short" });
}
function Tr(e, t) {
  return e.length <= t ? e : e.substring(0, t) + "...";
}
function Lr({
  sessions: e,
  currentSessionId: t,
  isLoading: n = !1,
  assistantName: r = "Assistant",
  onSelectSession: s,
  onCreateSession: i,
  onDeleteSession: o
}) {
  return /* @__PURE__ */ F("div", { className: "liya-sidebar", children: [
    /* @__PURE__ */ F("div", { className: "liya-sidebar__header", children: [
      /* @__PURE__ */ F("div", { className: "liya-sidebar__logo", children: [
        /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "24", height: "24", children: /* @__PURE__ */ d("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" }) }),
        /* @__PURE__ */ d("span", { children: r })
      ] }),
      /* @__PURE__ */ d(
        "button",
        {
          className: "liya-sidebar__new-btn",
          onClick: i,
          title: "Yeni sohbet",
          children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ d("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }) })
        }
      )
    ] }),
    /* @__PURE__ */ F("div", { className: "liya-sidebar__list", children: [
      n && /* @__PURE__ */ F("div", { className: "liya-sidebar__loading", children: [
        /* @__PURE__ */ d("div", { className: "liya-sidebar__spinner" }),
        /* @__PURE__ */ d("span", { children: "Yükleniyor..." })
      ] }),
      !n && e.length === 0 && /* @__PURE__ */ F("div", { className: "liya-sidebar__empty", children: [
        /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "40", height: "40", children: /* @__PURE__ */ d("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" }) }),
        /* @__PURE__ */ d("p", { children: "Henüz sohbet yok" }),
        /* @__PURE__ */ d("button", { className: "liya-sidebar__start-btn", onClick: i, children: "Yeni Sohbet Başlat" })
      ] }),
      e.map((a) => /* @__PURE__ */ F(
        "div",
        {
          className: `liya-sidebar__item ${a.id === t ? "liya-sidebar__item--active" : ""}`,
          onClick: () => s(a),
          children: [
            /* @__PURE__ */ d("div", { className: "liya-sidebar__item-icon", children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ d("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" }) }) }),
            /* @__PURE__ */ F("div", { className: "liya-sidebar__item-content", children: [
              /* @__PURE__ */ d("div", { className: "liya-sidebar__item-title", children: Tr(a.session_name, 28) }),
              /* @__PURE__ */ F("div", { className: "liya-sidebar__item-meta", children: [
                /* @__PURE__ */ F("span", { children: [
                  a.message_count,
                  " mesaj"
                ] }),
                /* @__PURE__ */ d("span", { children: Or(a.last_message_at || a.created_at) })
              ] })
            ] }),
            /* @__PURE__ */ d(
              "button",
              {
                className: "liya-sidebar__item-delete",
                onClick: (h) => {
                  h.stopPropagation(), o(a.id);
                },
                title: "Sohbeti sil",
                children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "16", height: "16", children: /* @__PURE__ */ d("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }) })
              }
            )
          ]
        },
        a.id
      ))
    ] })
  ] });
}
function Pr(e, t) {
  const n = parseInt(e.replace("#", ""), 16), r = Math.round(2.55 * t), s = (n >> 16) + r, i = (n >> 8 & 255) + r, o = (n & 255) + r;
  return "#" + (16777216 + (s < 255 ? s < 1 ? 0 : s : 255) * 65536 + (i < 255 ? i < 1 ? 0 : i : 255) * 256 + (o < 255 ? o < 1 ? 0 : o : 255)).toString(16).slice(1);
}
function os({
  theme: e = {},
  showSidebar: t = !0,
  sidebarWidth: n = "300px",
  welcomeMessage: r = "Merhaba! Size nasıl yardımcı olabilirim?",
  placeholder: s = "Mesajınızı yazın...",
  showVoice: i = !0,
  voiceEnabled: o = !0,
  showFileUpload: a = !0,
  onSessionCreated: h,
  onSessionSelected: u,
  onSessionDeleted: f,
  onMessageSent: y,
  onMessageReceived: _
}) {
  const [C, c] = P(!1), m = ye(), {
    messages: p,
    isLoading: g,
    currentSessionId: w,
    sendMessage: S,
    loadHistory: R,
    clearMessages: N,
    setSessionId: O
  } = Tt(), {
    sessions: T,
    currentSession: k,
    isLoading: I,
    loadSessions: J,
    createSession: H,
    deleteSession: j,
    selectSession: v
  } = Ar(), { uploadFiles: E, clearAll: K } = Ie(), x = m.assistantName || "Assistant", Y = {
    "--liya-primary-color": e.primaryColor || "#6366f1",
    "--liya-primary-hover": e.primaryColor ? Pr(e.primaryColor, -10) : "#4f46e5",
    "--liya-secondary-color": e.secondaryColor || "#e5e7eb",
    "--liya-bg-color": e.backgroundColor || "#ffffff",
    "--liya-bg-secondary": "#f3f4f6",
    "--liya-text-color": e.textColor || "#374151",
    "--liya-text-muted": "#9ca3af",
    "--liya-border-color": "#e5e7eb",
    "--liya-border-radius": e.borderRadius || "12px",
    "--liya-font-family": e.fontFamily || "system-ui, -apple-system, sans-serif",
    "--liya-sidebar-width": n
  }, M = async (A) => {
    v(A), O(A.id), await R(A.id), c(!1), u == null || u(A);
  }, se = async () => {
    const A = await H();
    A && (v(A), O(A.id), N(), c(!1), h == null || h(A));
  }, ae = async (A) => {
    await j(A) && (w === A && (N(), O(null), v(null)), f == null || f(A));
  }, $ = async (A, q) => {
    var He, je;
    if (!A.trim() && (!q || q.length === 0)) return;
    if (!w) {
      const ce = await H(A.substring(0, 30));
      ce && (v(ce), O(ce.id), h == null || h(ce));
    }
    let le = q;
    w && q && q.length > 0 && (le = (await E(w)).map((Bt) => Bt.id)), y == null || y(A);
    const G = await S(A, le);
    ((He = G == null ? void 0 : G.assistant_message) != null && He.content || G != null && G.response) && (_ == null || _(((je = G.assistant_message) == null ? void 0 : je.content) || G.response || "")), K(), J();
  }, X = (A) => {
    $(A);
  };
  return te(() => {
    J();
  }, []), /* @__PURE__ */ F("div", { className: "liya-app", style: Y, children: [
    /* @__PURE__ */ F("div", { className: "liya-app__mobile-header", children: [
      /* @__PURE__ */ d("button", { className: "liya-app__menu-btn", onClick: () => c(!0), children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "24", height: "24", children: /* @__PURE__ */ d("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }) }) }),
      /* @__PURE__ */ d("span", { className: "liya-app__mobile-title", children: (k == null ? void 0 : k.session_name) || x }),
      /* @__PURE__ */ d("button", { className: "liya-app__new-btn", onClick: se, children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "24", height: "24", children: /* @__PURE__ */ d("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }) }) })
    ] }),
    t && /* @__PURE__ */ d("aside", { className: `liya-app__sidebar ${C ? "liya-app__sidebar--open" : ""}`, children: /* @__PURE__ */ d(
      Lr,
      {
        sessions: T,
        currentSessionId: w,
        isLoading: I,
        assistantName: x,
        onSelectSession: M,
        onCreateSession: se,
        onDeleteSession: ae
      }
    ) }),
    C && /* @__PURE__ */ d(
      "div",
      {
        className: "liya-app__overlay",
        onClick: () => c(!1)
      }
    ),
    /* @__PURE__ */ F("main", { className: "liya-app__main", children: [
      /* @__PURE__ */ d("div", { className: "liya-app__header", children: /* @__PURE__ */ F("div", { className: "liya-app__header-info", children: [
        /* @__PURE__ */ d("div", { className: "liya-app__avatar", children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "24", height: "24", children: /* @__PURE__ */ d("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" }) }) }),
        /* @__PURE__ */ F("div", { className: "liya-app__header-text", children: [
          /* @__PURE__ */ d("h2", { className: "liya-app__title", children: (k == null ? void 0 : k.session_name) || x }),
          /* @__PURE__ */ d("span", { className: "liya-app__status", children: k ? `${k.message_count} mesaj` : "Yeni sohbet başlatın" })
        ] })
      ] }) }),
      /* @__PURE__ */ d(
        Lt,
        {
          messages: p,
          isLoading: g,
          assistantName: x,
          welcomeMessage: r,
          onSuggestionClick: X
        }
      ),
      /* @__PURE__ */ d(
        Pt,
        {
          placeholder: s,
          disabled: g,
          showVoice: i,
          voiceEnabled: o,
          showFileUpload: a,
          sessionId: w,
          onSend: $
        }
      )
    ] })
  ] });
}
export {
  Pt as ChatInput,
  os as LiyaChatApp,
  rs as LiyaChatProvider,
  is as LiyaChatWidget,
  xr as MessageBubble,
  Lt as MessageList,
  Lr as SessionSidebar,
  br as createSession,
  _r as deleteSession,
  re as getClient,
  ye as getConfig,
  ns as getSession,
  gr as getSessionHistory,
  wr as getSessions,
  mr as initializeClient,
  ts as isInitialized,
  yr as sendMessage,
  Sr as uploadFile,
  Tt as useChat,
  Ie as useFileUpload,
  ss as useLiyaChatContext,
  Ar as useSessions,
  Nr as useVoice
};
