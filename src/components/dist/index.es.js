import xe, { createContext as De, forwardRef as Zr, createElement as ct, useContext as In } from "react";
var Ut = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function Mn() {
  if (ir) return Me;
  ir = 1;
  var r = xe, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(a, o, c) {
    var d, f = {}, h = null, p = null;
    c !== void 0 && (h = "" + c), o.key !== void 0 && (h = "" + o.key), o.ref !== void 0 && (p = o.ref);
    for (d in o) n.call(o, d) && !s.hasOwnProperty(d) && (f[d] = o[d]);
    if (a && a.defaultProps) for (d in o = a.defaultProps, o) f[d] === void 0 && (f[d] = o[d]);
    return { $$typeof: e, type: a, key: h, ref: p, props: f, _owner: i.current };
  }
  return Me.Fragment = t, Me.jsx = l, Me.jsxs = l, Me;
}
var Le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function Ln() {
  return sr || (sr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = xe, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, E = "@@iterator";
    function _(u) {
      if (u === null || typeof u != "object")
        return null;
      var y = v && u[v] || u[E];
      return typeof y == "function" ? y : null;
    }
    var g = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(u) {
      {
        for (var y = arguments.length, P = new Array(y > 1 ? y - 1 : 0), L = 1; L < y; L++)
          P[L - 1] = arguments[L];
        S("error", u, P);
      }
    }
    function S(u, y, P) {
      {
        var L = g.ReactDebugCurrentFrame, V = L.getStackAddendum();
        V !== "" && (y += "%s", P = P.concat([V]));
        var q = P.map(function(G) {
          return String(G);
        });
        q.unshift("Warning: " + y), Function.prototype.apply.call(console[u], console, q);
      }
    }
    var m = !1, T = !1, O = !1, C = !1, R = !1, M;
    M = Symbol.for("react.module.reference");
    function b(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === s || R || u === i || u === c || u === d || C || u === p || m || T || O || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === f || u.$$typeof === l || u.$$typeof === a || u.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === M || u.getModuleId !== void 0));
    }
    function x(u, y, P) {
      var L = u.displayName;
      if (L)
        return L;
      var V = y.displayName || y.name || "";
      return V !== "" ? P + "(" + V + ")" : P;
    }
    function I(u) {
      return u.displayName || "Context";
    }
    function A(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case a:
            var y = u;
            return I(y) + ".Consumer";
          case l:
            var P = u;
            return I(P._context) + ".Provider";
          case o:
            return x(u, u.render, "ForwardRef");
          case f:
            var L = u.displayName || null;
            return L !== null ? L : A(u.type) || "Memo";
          case h: {
            var V = u, q = V._payload, G = V._init;
            try {
              return A(G(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, F = 0, Y, pe, ie, $, ae, ce, he;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function Ae() {
      {
        if (F === 0) {
          Y = console.log, pe = console.info, ie = console.warn, $ = console.error, ae = console.group, ce = console.groupCollapsed, he = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        F++;
      }
    }
    function U() {
      {
        if (F--, F === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, u, {
              value: Y
            }),
            info: N({}, u, {
              value: pe
            }),
            warn: N({}, u, {
              value: ie
            }),
            error: N({}, u, {
              value: $
            }),
            group: N({}, u, {
              value: ae
            }),
            groupCollapsed: N({}, u, {
              value: ce
            }),
            groupEnd: N({}, u, {
              value: he
            })
          });
        }
        F < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _e = g.ReactCurrentDispatcher, J;
    function Q(u, y, P) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (V) {
            var L = V.stack.trim().match(/\n( *(at )?)/);
            J = L && L[1] || "";
          }
        return `
` + J + u;
      }
    }
    var de = !1, le;
    {
      var z = typeof WeakMap == "function" ? WeakMap : Map;
      le = new z();
    }
    function X(u, y) {
      if (!u || de)
        return "";
      {
        var P = le.get(u);
        if (P !== void 0)
          return P;
      }
      var L;
      de = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = _e.current, _e.current = null, Ae();
      try {
        if (y) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (te) {
              L = te;
            }
            Reflect.construct(u, [], G);
          } else {
            try {
              G.call();
            } catch (te) {
              L = te;
            }
            u.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            L = te;
          }
          u();
        }
      } catch (te) {
        if (te && L && typeof te.stack == "string") {
          for (var j = te.stack.split(`
`), ee = L.stack.split(`
`), B = j.length - 1, W = ee.length - 1; B >= 1 && W >= 0 && j[B] !== ee[W]; )
            W--;
          for (; B >= 1 && W >= 0; B--, W--)
            if (j[B] !== ee[W]) {
              if (B !== 1 || W !== 1)
                do
                  if (B--, W--, W < 0 || j[B] !== ee[W]) {
                    var oe = `
` + j[B].replace(" at new ", " at ");
                    return u.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", u.displayName)), typeof u == "function" && le.set(u, oe), oe;
                  }
                while (B >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        de = !1, _e.current = q, U(), Error.prepareStackTrace = V;
      }
      var Re = u ? u.displayName || u.name : "", Te = Re ? Q(Re) : "";
      return typeof u == "function" && le.set(u, Te), Te;
    }
    function we(u, y, P) {
      return X(u, !1);
    }
    function ye(u) {
      var y = u.prototype;
      return !!(y && y.isReactComponent);
    }
    function H(u, y, P) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return X(u, ye(u));
      if (typeof u == "string")
        return Q(u);
      switch (u) {
        case c:
          return Q("Suspense");
        case d:
          return Q("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case o:
            return we(u.render);
          case f:
            return H(u.type, y, P);
          case h: {
            var L = u, V = L._payload, q = L._init;
            try {
              return H(q(V), y, P);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Ce = {}, Ie = g.ReactDebugCurrentFrame;
    function Se(u) {
      if (u) {
        var y = u._owner, P = H(u.type, u._source, y ? y.type : null);
        Ie.setExtraStackFrame(P);
      } else
        Ie.setExtraStackFrame(null);
    }
    function rt(u, y, P, L, V) {
      {
        var q = Function.call.bind(Z);
        for (var G in u)
          if (q(u, G)) {
            var j = void 0;
            try {
              if (typeof u[G] != "function") {
                var ee = Error((L || "React class") + ": " + P + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ee.name = "Invariant Violation", ee;
              }
              j = u[G](y, G, L, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              j = B;
            }
            j && !(j instanceof Error) && (Se(V), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", P, G, typeof j), Se(null)), j instanceof Error && !(j.message in Ce) && (Ce[j.message] = !0, Se(V), w("Failed %s type: %s", P, j.message), Se(null));
          }
      }
    }
    var be = Array.isArray;
    function D(u) {
      return be(u);
    }
    function fe(u) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, P = y && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return P;
      }
    }
    function ge(u) {
      try {
        return nt(u), !1;
      } catch {
        return !0;
      }
    }
    function nt(u) {
      return "" + u;
    }
    function it(u) {
      if (ge(u))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fe(u)), nt(u);
    }
    var ve = g.ReactCurrentOwner, k = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, se, Kt, st;
    st = {};
    function hn(u) {
      if (Z.call(u, "ref")) {
        var y = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function mn(u) {
      if (Z.call(u, "key")) {
        var y = Object.getOwnPropertyDescriptor(u, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function gn(u, y) {
      if (typeof u.ref == "string" && ve.current && y && ve.current.stateNode !== y) {
        var P = A(ve.current.type);
        st[P] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(ve.current.type), u.ref), st[P] = !0);
      }
    }
    function vn(u, y) {
      {
        var P = function() {
          se || (se = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        P.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function En(u, y) {
      {
        var P = function() {
          Kt || (Kt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        P.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var _n = function(u, y, P, L, V, q, G) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: u,
        key: y,
        ref: P,
        props: G,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function Sn(u, y, P, L, V) {
      {
        var q, G = {}, j = null, ee = null;
        P !== void 0 && (it(P), j = "" + P), mn(y) && (it(y.key), j = "" + y.key), hn(y) && (ee = y.ref, gn(y, V));
        for (q in y)
          Z.call(y, q) && !k.hasOwnProperty(q) && (G[q] = y[q]);
        if (u && u.defaultProps) {
          var B = u.defaultProps;
          for (q in B)
            G[q] === void 0 && (G[q] = B[q]);
        }
        if (j || ee) {
          var W = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          j && vn(G, W), ee && En(G, W);
        }
        return _n(u, j, ee, V, L, ve.current, G);
      }
    }
    var ot = g.ReactCurrentOwner, Qt = g.ReactDebugCurrentFrame;
    function Pe(u) {
      if (u) {
        var y = u._owner, P = H(u.type, u._source, y ? y.type : null);
        Qt.setExtraStackFrame(P);
      } else
        Qt.setExtraStackFrame(null);
    }
    var at;
    at = !1;
    function lt(u) {
      return typeof u == "object" && u !== null && u.$$typeof === e;
    }
    function Jt() {
      {
        if (ot.current) {
          var u = A(ot.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Tn(u) {
      return "";
    }
    var Zt = {};
    function wn(u) {
      {
        var y = Jt();
        if (!y) {
          var P = typeof u == "string" ? u : u.displayName || u.name;
          P && (y = `

Check the top-level render call using <` + P + ">.");
        }
        return y;
      }
    }
    function er(u, y) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var P = wn(y);
        if (Zt[P])
          return;
        Zt[P] = !0;
        var L = "";
        u && u._owner && u._owner !== ot.current && (L = " It was passed a child from " + A(u._owner.type) + "."), Pe(u), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, L), Pe(null);
      }
    }
    function tr(u, y) {
      {
        if (typeof u != "object")
          return;
        if (D(u))
          for (var P = 0; P < u.length; P++) {
            var L = u[P];
            lt(L) && er(L, y);
          }
        else if (lt(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var V = _(u);
          if (typeof V == "function" && V !== u.entries)
            for (var q = V.call(u), G; !(G = q.next()).done; )
              lt(G.value) && er(G.value, y);
        }
      }
    }
    function yn(u) {
      {
        var y = u.type;
        if (y == null || typeof y == "string")
          return;
        var P;
        if (typeof y == "function")
          P = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === f))
          P = y.propTypes;
        else
          return;
        if (P) {
          var L = A(y);
          rt(P, u.props, "prop", L, u);
        } else if (y.PropTypes !== void 0 && !at) {
          at = !0;
          var V = A(y);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bn(u) {
      {
        for (var y = Object.keys(u.props), P = 0; P < y.length; P++) {
          var L = y[P];
          if (L !== "children" && L !== "key") {
            Pe(u), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Pe(null);
            break;
          }
        }
        u.ref !== null && (Pe(u), w("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    var rr = {};
    function nr(u, y, P, L, V, q) {
      {
        var G = b(u);
        if (!G) {
          var j = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ee = Tn();
          ee ? j += ee : j += Jt();
          var B;
          u === null ? B = "null" : D(u) ? B = "array" : u !== void 0 && u.$$typeof === e ? (B = "<" + (A(u.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : B = typeof u, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, j);
        }
        var W = Sn(u, y, P, V, q);
        if (W == null)
          return W;
        if (G) {
          var oe = y.children;
          if (oe !== void 0)
            if (L)
              if (D(oe)) {
                for (var Re = 0; Re < oe.length; Re++)
                  tr(oe[Re], u);
                Object.freeze && Object.freeze(oe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              tr(oe, u);
        }
        if (Z.call(y, "key")) {
          var Te = A(u), te = Object.keys(y).filter(function(Cn) {
            return Cn !== "key";
          }), ut = te.length > 0 ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!rr[Te + ut]) {
            var An = te.length > 0 ? "{" + te.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ut, Te, An, Te), rr[Te + ut] = !0;
          }
        }
        return u === n ? bn(W) : yn(W), W;
      }
    }
    function Pn(u, y, P) {
      return nr(u, y, P, !0);
    }
    function Rn(u, y, P) {
      return nr(u, y, P, !1);
    }
    var xn = Rn, On = Pn;
    Le.Fragment = n, Le.jsx = xn, Le.jsxs = On;
  }()), Le;
}
process.env.NODE_ENV === "production" ? Ut.exports = Mn() : Ut.exports = Ln();
var Qe = Ut.exports;
const Ns = De({});
Zr((r, e) => /* @__PURE__ */ Qe.jsx("input", { className: "input", ref: e, ...r }));
/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Nn = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = (r, e, t, n) => {
  const i = Zr(
    ({ color: s = "currentColor", size: l = 24, stroke: a = 2, title: o, className: c, children: d, ...f }, h) => ct(
      "svg",
      {
        ref: h,
        ...Nn[r],
        width: l,
        height: l,
        className: ["tabler-icon", `tabler-icon-${e}`, c].join(" "),
        strokeWidth: a,
        stroke: s,
        ...f
      },
      [
        o && ct("title", { key: "svg-title" }, o),
        ...n.map(([p, v]) => ct(p, v)),
        ...Array.isArray(d) ? d : [d]
      ]
    )
  );
  return i.displayName = `${t}`, i;
};
/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jn = Dn("outline", "x", "IconX", [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]]);
const kn = De(!1);
function Ds({
  children: r,
  className: e,
  ...t
}) {
  const { setIsOpen: n } = In(kn);
  return /* @__PURE__ */ Qe.jsxs("div", { className: ` modal-header ${e}`, ...t, children: [
    r,
    /* @__PURE__ */ Qe.jsx(
      jn,
      {
        onClick: () => n(),
        className: "hover:text-red-500 hover:cursor-pointer"
      }
    )
  ] });
}
var or = { exports: {} }, Ne = {};
Ne._ = Ne._interop_require_default = Gn;
function Gn(r) {
  return r && r.__esModule ? r : { default: r };
}
var je = { exports: {} }, dt = {}, ar;
function en() {
  return ar || (ar = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    function e(l, a) {
      for (var o in a) Object.defineProperty(l, o, {
        enumerable: !0,
        get: a[o]
      });
    }
    e(r, {
      assign: function() {
        return s;
      },
      searchParamsToUrlQuery: function() {
        return t;
      },
      urlQueryToSearchParams: function() {
        return i;
      }
    });
    function t(l) {
      const a = {};
      return l.forEach((o, c) => {
        typeof a[c] > "u" ? a[c] = o : Array.isArray(a[c]) ? a[c].push(o) : a[c] = [
          a[c],
          o
        ];
      }), a;
    }
    function n(l) {
      return typeof l == "string" || typeof l == "number" && !isNaN(l) || typeof l == "boolean" ? String(l) : "";
    }
    function i(l) {
      const a = new URLSearchParams();
      return Object.entries(l).forEach((o) => {
        let [c, d] = o;
        Array.isArray(d) ? d.forEach((f) => a.append(c, n(f))) : a.set(c, n(d));
      }), a;
    }
    function s(l) {
      for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
        o[c - 1] = arguments[c];
      return o.forEach((d) => {
        Array.from(d.keys()).forEach((f) => l.delete(f)), d.forEach((f, h) => l.append(h, f));
      }), l;
    }
  }(dt)), dt;
}
var ft = {}, ke = {}, lr;
function zn() {
  if (lr) return ke;
  lr = 1;
  function r(t) {
    if (typeof WeakMap != "function") return null;
    var n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
    return (r = function(s) {
      return s ? i : n;
    })(t);
  }
  ke._ = ke._interop_require_wildcard = e;
  function e(t, n) {
    if (!n && t && t.__esModule) return t;
    if (t === null || typeof t != "object" && typeof t != "function") return { default: t };
    var i = r(n);
    if (i && i.has(t)) return i.get(t);
    var s = { __proto__: null }, l = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in t)
      if (a !== "default" && Object.prototype.hasOwnProperty.call(t, a)) {
        var o = l ? Object.getOwnPropertyDescriptor(t, a) : null;
        o && (o.get || o.set) ? Object.defineProperty(s, a, o) : s[a] = t[a];
      }
    return s.default = t, i && i.set(t, s), s;
  }
  return ke;
}
var ur;
function tn() {
  return ur || (ur = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    function e(o, c) {
      for (var d in c) Object.defineProperty(o, d, {
        enumerable: !0,
        get: c[d]
      });
    }
    e(r, {
      formatUrl: function() {
        return s;
      },
      formatWithValidation: function() {
        return a;
      },
      urlObjectKeys: function() {
        return l;
      }
    });
    const n = /* @__PURE__ */ zn()._(en()), i = /https?|ftp|gopher|file/;
    function s(o) {
      let { auth: c, hostname: d } = o, f = o.protocol || "", h = o.pathname || "", p = o.hash || "", v = o.query || "", E = !1;
      c = c ? encodeURIComponent(c).replace(/%3A/i, ":") + "@" : "", o.host ? E = c + o.host : d && (E = c + (~d.indexOf(":") ? "[" + d + "]" : d), o.port && (E += ":" + o.port)), v && typeof v == "object" && (v = String(n.urlQueryToSearchParams(v)));
      let _ = o.search || v && "?" + v || "";
      return f && !f.endsWith(":") && (f += ":"), o.slashes || (!f || i.test(f)) && E !== !1 ? (E = "//" + (E || ""), h && h[0] !== "/" && (h = "/" + h)) : E || (E = ""), p && p[0] !== "#" && (p = "#" + p), _ && _[0] !== "?" && (_ = "?" + _), h = h.replace(/[?#]/g, encodeURIComponent), _ = _.replace("#", "%23"), "" + f + E + h + _ + p;
    }
    const l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    function a(o) {
      return process.env.NODE_ENV === "development" && o !== null && typeof o == "object" && Object.keys(o).forEach((c) => {
        l.includes(c) || console.warn("Unknown key passed via urlObject into url.format: " + c);
      }), s(o);
    }
  }(ft)), ft;
}
var pt = {}, cr;
function Fn() {
  return cr || (cr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "omit", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(t, n) {
      const i = {};
      return Object.keys(t).forEach((s) => {
        n.includes(s) || (i[s] = t[s]);
      }), i;
    }
  }(pt)), pt;
}
var ht = {}, dr;
function et() {
  return dr || (dr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    function e(m, T) {
      for (var O in T) Object.defineProperty(m, O, {
        enumerable: !0,
        get: T[O]
      });
    }
    e(r, {
      DecodeError: function() {
        return v;
      },
      MiddlewareNotFoundError: function() {
        return w;
      },
      MissingStaticPage: function() {
        return g;
      },
      NormalizeError: function() {
        return E;
      },
      PageNotFoundError: function() {
        return _;
      },
      SP: function() {
        return h;
      },
      ST: function() {
        return p;
      },
      WEB_VITALS: function() {
        return t;
      },
      execOnce: function() {
        return n;
      },
      getDisplayName: function() {
        return o;
      },
      getLocationOrigin: function() {
        return l;
      },
      getURL: function() {
        return a;
      },
      isAbsoluteUrl: function() {
        return s;
      },
      isResSent: function() {
        return c;
      },
      loadGetInitialProps: function() {
        return f;
      },
      normalizeRepeatedSlashes: function() {
        return d;
      },
      stringifyError: function() {
        return S;
      }
    });
    const t = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function n(m) {
      let T = !1, O;
      return function() {
        for (var C = arguments.length, R = new Array(C), M = 0; M < C; M++)
          R[M] = arguments[M];
        return T || (T = !0, O = m(...R)), O;
      };
    }
    const i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, s = (m) => i.test(m);
    function l() {
      const { protocol: m, hostname: T, port: O } = window.location;
      return m + "//" + T + (O ? ":" + O : "");
    }
    function a() {
      const { href: m } = window.location, T = l();
      return m.substring(T.length);
    }
    function o(m) {
      return typeof m == "string" ? m : m.displayName || m.name || "Unknown";
    }
    function c(m) {
      return m.finished || m.headersSent;
    }
    function d(m) {
      const T = m.split("?");
      return T[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (T[1] ? "?" + T.slice(1).join("?") : "");
    }
    async function f(m, T) {
      if (process.env.NODE_ENV !== "production") {
        var O;
        if ((O = m.prototype) != null && O.getInitialProps) {
          const M = '"' + o(m) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
          throw new Error(M);
        }
      }
      const C = T.res || T.ctx && T.ctx.res;
      if (!m.getInitialProps)
        return T.ctx && T.Component ? {
          pageProps: await f(T.Component, T.ctx)
        } : {};
      const R = await m.getInitialProps(T);
      if (C && c(C))
        return R;
      if (!R) {
        const M = '"' + o(m) + '.getInitialProps()" should resolve to an object. But found "' + R + '" instead.';
        throw new Error(M);
      }
      return process.env.NODE_ENV !== "production" && Object.keys(R).length === 0 && !T.ctx && console.warn("" + o(m) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"), R;
    }
    const h = typeof performance < "u", p = h && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((m) => typeof performance[m] == "function");
    class v extends Error {
    }
    class E extends Error {
    }
    class _ extends Error {
      constructor(T) {
        super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + T;
      }
    }
    class g extends Error {
      constructor(T, O) {
        super(), this.message = "Failed to load static file for page: " + T + " " + O;
      }
    }
    class w extends Error {
      constructor() {
        super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
      }
    }
    function S(m) {
      return JSON.stringify({
        message: m.message,
        stack: m.stack
      });
    }
  }(ht)), ht;
}
var Ge = { exports: {} }, mt = {}, fr;
function rn() {
  return fr || (fr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "removeTrailingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(t) {
      return t.replace(/\/$/, "") || "/";
    }
  }(mt)), mt;
}
var gt = {}, pr;
function Xt() {
  return pr || (pr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "parsePath", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(t) {
      const n = t.indexOf("#"), i = t.indexOf("?"), s = i > -1 && (n < 0 || i < n);
      return s || n > -1 ? {
        pathname: t.substring(0, s ? i : n),
        query: s ? t.substring(i, n > -1 ? n : void 0) : "",
        hash: n > -1 ? t.slice(n) : ""
      } : {
        pathname: t,
        query: "",
        hash: ""
      };
    }
  }(gt)), gt;
}
var hr;
function tt() {
  return hr || (hr = 1, function(r, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizePathTrailingSlash", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const t = rn(), n = Xt(), i = (s) => {
      if (!s.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH)
        return s;
      const { pathname: l, query: a, hash: o } = (0, n.parsePath)(s);
      return process.env.__NEXT_TRAILING_SLASH ? /\.[^/]+\/?$/.test(l) ? "" + (0, t.removeTrailingSlash)(l) + a + o : l.endsWith("/") ? "" + l + a + o : l + "/" + a + o : "" + (0, t.removeTrailingSlash)(l) + a + o;
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
  }(Ge, Ge.exports)), Ge.exports;
}
var vt = {}, ze = { exports: {} }, Et = {}, mr;
function nn() {
  return mr || (mr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "pathHasPrefix", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    const e = Xt();
    function t(n, i) {
      if (typeof n != "string")
        return !1;
      const { pathname: s } = (0, e.parsePath)(n);
      return s === i || s.startsWith(i + "/");
    }
  }(Et)), Et;
}
var gr;
function Vn() {
  return gr || (gr = 1, function(r, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "hasBasePath", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const t = nn(), n = process.env.__NEXT_ROUTER_BASEPATH || "";
    function i(s) {
      return (0, t.pathHasPrefix)(s, n);
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
  }(ze, ze.exports)), ze.exports;
}
var vr;
function sn() {
  return vr || (vr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "isLocalURL", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const e = et(), t = Vn();
    function n(i) {
      if (!(0, e.isAbsoluteUrl)(i)) return !0;
      try {
        const s = (0, e.getLocationOrigin)(), l = new URL(i, s);
        return l.origin === s && (0, t.hasBasePath)(l.pathname);
      } catch {
        return !1;
      }
    }
  }(vt)), vt;
}
var _t = {}, St = {}, Er;
function qn() {
  return Er || (Er = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "getSortedRoutes", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    class e {
      insert(i) {
        this._insert(i.split("/").filter(Boolean), [], !1);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(i) {
        i === void 0 && (i = "/");
        const s = [
          ...this.children.keys()
        ].sort();
        this.slugName !== null && s.splice(s.indexOf("[]"), 1), this.restSlugName !== null && s.splice(s.indexOf("[...]"), 1), this.optionalRestSlugName !== null && s.splice(s.indexOf("[[...]]"), 1);
        const l = s.map((a) => this.children.get(a)._smoosh("" + i + a + "/")).reduce((a, o) => [
          ...a,
          ...o
        ], []);
        if (this.slugName !== null && l.push(...this.children.get("[]")._smoosh(i + "[" + this.slugName + "]/")), !this.placeholder) {
          const a = i === "/" ? "/" : i.slice(0, -1);
          if (this.optionalRestSlugName != null)
            throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + a + '" and "' + a + "[[..." + this.optionalRestSlugName + ']]").');
          l.unshift(a);
        }
        return this.restSlugName !== null && l.push(...this.children.get("[...]")._smoosh(i + "[..." + this.restSlugName + "]/")), this.optionalRestSlugName !== null && l.push(...this.children.get("[[...]]")._smoosh(i + "[[..." + this.optionalRestSlugName + "]]/")), l;
      }
      _insert(i, s, l) {
        if (i.length === 0) {
          this.placeholder = !1;
          return;
        }
        if (l)
          throw new Error("Catch-all must be the last part of the URL.");
        let a = i[0];
        if (a.startsWith("[") && a.endsWith("]")) {
          let d = function(f, h) {
            if (f !== null && f !== h)
              throw new Error("You cannot use different slug names for the same dynamic path ('" + f + "' !== '" + h + "').");
            s.forEach((p) => {
              if (p === h)
                throw new Error('You cannot have the same slug name "' + h + '" repeat within a single dynamic path');
              if (p.replace(/\W/g, "") === a.replace(/\W/g, ""))
                throw new Error('You cannot have the slug names "' + p + '" and "' + h + '" differ only by non-word symbols within a single dynamic path');
            }), s.push(h);
          }, o = a.slice(1, -1), c = !1;
          if (o.startsWith("[") && o.endsWith("]") && (o = o.slice(1, -1), c = !0), o.startsWith("…"))
            throw new Error("Detected a three-dot character ('…') at ('" + o + "'). Did you mean ('...')?");
          if (o.startsWith("...") && (o = o.substring(3), l = !0), o.startsWith("[") || o.endsWith("]"))
            throw new Error("Segment names may not start or end with extra brackets ('" + o + "').");
          if (o.startsWith("."))
            throw new Error("Segment names may not start with erroneous periods ('" + o + "').");
          if (l)
            if (c) {
              if (this.restSlugName != null)
                throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + i[0] + '" ).');
              d(this.optionalRestSlugName, o), this.optionalRestSlugName = o, a = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null)
                throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + i[0] + '").');
              d(this.restSlugName, o), this.restSlugName = o, a = "[...]";
            }
          else {
            if (c)
              throw new Error('Optional route parameters are not yet supported ("' + i[0] + '").');
            d(this.slugName, o), this.slugName = o, a = "[]";
          }
        }
        this.children.has(a) || this.children.set(a, new e()), this.children.get(a)._insert(i.slice(1), s, l);
      }
      constructor() {
        this.placeholder = !0, this.children = /* @__PURE__ */ new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
      }
    }
    function t(n) {
      const i = new e();
      return n.forEach((s) => i.insert(s)), i.smoosh();
    }
  }(St)), St;
}
var Tt = {}, wt = {}, yt = {}, bt = {}, _r;
function Hn() {
  return _r || (_r = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "ensureLeadingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(t) {
      return t.startsWith("/") ? t : "/" + t;
    }
  }(bt)), bt;
}
var Pt = {}, Sr;
function Un() {
  return Sr || (Sr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    function e(s, l) {
      for (var a in l) Object.defineProperty(s, a, {
        enumerable: !0,
        get: l[a]
      });
    }
    e(r, {
      DEFAULT_SEGMENT_KEY: function() {
        return i;
      },
      PAGE_SEGMENT_KEY: function() {
        return n;
      },
      isGroupSegment: function() {
        return t;
      }
    });
    function t(s) {
      return s[0] === "(" && s.endsWith(")");
    }
    const n = "__PAGE__", i = "__DEFAULT__";
  }(Pt)), Pt;
}
var Tr;
function Bn() {
  return Tr || (Tr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    function e(l, a) {
      for (var o in a) Object.defineProperty(l, o, {
        enumerable: !0,
        get: a[o]
      });
    }
    e(r, {
      normalizeAppPath: function() {
        return i;
      },
      normalizeRscURL: function() {
        return s;
      }
    });
    const t = Hn(), n = Un();
    function i(l) {
      return (0, t.ensureLeadingSlash)(l.split("/").reduce((a, o, c, d) => !o || (0, n.isGroupSegment)(o) || o[0] === "@" || (o === "page" || o === "route") && c === d.length - 1 ? a : a + "/" + o, ""));
    }
    function s(l) {
      return l.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
  }(yt)), yt;
}
var wr;
function on() {
  return wr || (wr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    function e(l, a) {
      for (var o in a) Object.defineProperty(l, o, {
        enumerable: !0,
        get: a[o]
      });
    }
    e(r, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return n;
      },
      extractInterceptionRouteInformation: function() {
        return s;
      },
      isInterceptionRouteAppPath: function() {
        return i;
      }
    });
    const t = Bn(), n = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function i(l) {
      return l.split("/").find((a) => n.find((o) => a.startsWith(o))) !== void 0;
    }
    function s(l) {
      let a, o, c;
      for (const d of l.split("/"))
        if (o = n.find((f) => d.startsWith(f)), o) {
          [a, c] = l.split(o, 2);
          break;
        }
      if (!a || !o || !c)
        throw new Error(`Invalid interception route: ${l}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
      switch (a = (0, t.normalizeAppPath)(a), o) {
        case "(.)":
          a === "/" ? c = `/${c}` : c = a + "/" + c;
          break;
        case "(..)":
          if (a === "/")
            throw new Error(`Invalid interception route: ${l}. Cannot use (..) marker at the root level, use (.) instead.`);
          c = a.split("/").slice(0, -1).concat(c).join("/");
          break;
        case "(...)":
          c = "/" + c;
          break;
        case "(..)(..)":
          const d = a.split("/");
          if (d.length <= 2)
            throw new Error(`Invalid interception route: ${l}. Cannot use (..)(..) marker at the root level or one level up.`);
          c = d.slice(0, -2).concat(c).join("/");
          break;
        default:
          throw new Error("Invariant: unexpected marker");
      }
      return {
        interceptingRoute: a,
        interceptedRoute: c
      };
    }
  }(wt)), wt;
}
var yr;
function Wn() {
  return yr || (yr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "isDynamicRoute", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const e = on(), t = /\/\[[^/]+?\](?=\/|$)/;
    function n(i) {
      return (0, e.isInterceptionRouteAppPath)(i) && (i = (0, e.extractInterceptionRouteInformation)(i).interceptedRoute), t.test(i);
    }
  }(Tt)), Tt;
}
var br;
function $n() {
  return br || (br = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    function e(i, s) {
      for (var l in s) Object.defineProperty(i, l, {
        enumerable: !0,
        get: s[l]
      });
    }
    e(r, {
      getSortedRoutes: function() {
        return t.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return n.isDynamicRoute;
      }
    });
    const t = qn(), n = Wn();
  }(_t)), _t;
}
var Rt = {}, xt = {}, Pr;
function Xn() {
  return Pr || (Pr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "getRouteMatcher", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    const e = et();
    function t(n) {
      let { re: i, groups: s } = n;
      return (l) => {
        const a = i.exec(l);
        if (!a)
          return !1;
        const o = (d) => {
          try {
            return decodeURIComponent(d);
          } catch {
            throw new e.DecodeError("failed to decode param");
          }
        }, c = {};
        return Object.keys(s).forEach((d) => {
          const f = s[d], h = a[f.pos];
          h !== void 0 && (c[d] = ~h.indexOf("/") ? h.split("/").map((p) => o(p)) : f.repeat ? [
            o(h)
          ] : o(h));
        }), c;
      };
    }
  }(xt)), xt;
}
var Ot = {}, At = {}, Rr;
function Yn() {
  return Rr || (Rr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    function e(ye, H) {
      for (var Z in H) Object.defineProperty(ye, Z, {
        enumerable: !0,
        get: H[Z]
      });
    }
    e(r, {
      ACTION_SUFFIX: function() {
        return o;
      },
      APP_DIR_ALIAS: function() {
        return x;
      },
      CACHE_ONE_YEAR: function() {
        return m;
      },
      DOT_NEXT_ALIAS: function() {
        return M;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return de;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return K;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return _e;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return Ae;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return C;
      },
      MIDDLEWARE_FILENAME: function() {
        return T;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return O;
      },
      NEXT_BODY_SUFFIX: function() {
        return f;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return S;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return v;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return E;
      },
      NEXT_CACHE_SOFT_TAGS_HEADER: function() {
        return p;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return w;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return h;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return _;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return g;
      },
      NEXT_DATA_SUFFIX: function() {
        return c;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return n;
      },
      NEXT_META_SUFFIX: function() {
        return d;
      },
      NEXT_QUERY_PARAM_PREFIX: function() {
        return t;
      },
      NON_STANDARD_NODE_ENV: function() {
        return J;
      },
      PAGES_DIR_ALIAS: function() {
        return R;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return i;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return s;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return pe;
      },
      ROOT_DIR_ALIAS: function() {
        return b;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return Y;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return F;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return N;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return A;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return I;
      },
      RSC_PREFETCH_SUFFIX: function() {
        return l;
      },
      RSC_SUFFIX: function() {
        return a;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return he;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return $;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return ae;
      },
      SERVER_RUNTIME: function() {
        return le;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return Q;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return ie;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return ce;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return U;
      },
      WEBPACK_LAYERS: function() {
        return X;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return we;
      }
    });
    const t = "nxtP", n = "nxtI", i = "x-prerender-revalidate", s = "x-prerender-revalidate-if-generated", l = ".prefetch.rsc", a = ".rsc", o = ".action", c = ".json", d = ".meta", f = ".body", h = "x-next-cache-tags", p = "x-next-cache-soft-tags", v = "x-next-revalidated-tags", E = "x-next-revalidate-tag-token", _ = 64, g = 256, w = 1024, S = "_N_T_", m = 31536e3, T = "middleware", O = `(?:src/)?${T}`, C = "instrumentation", R = "private-next-pages", M = "private-dot-next", b = "private-next-root-dir", x = "private-next-app-dir", I = "private-next-rsc-mod-ref-proxy", A = "private-next-rsc-action-validate", N = "private-next-rsc-server-reference", F = "private-next-rsc-action-encryption", Y = "private-next-rsc-action-client-wrapper", pe = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict", ie = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps", $ = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.", ae = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps", ce = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props", he = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export", K = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?", Ae = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?", U = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.", _e = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member", J = 'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env', Q = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export", de = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ], le = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    }, z = {
      /**
      * The layer for the shared code between the client and server bundles.
      */
      shared: "shared",
      /**
      * The layer for server-only runtime and picking up `react-server` export conditions.
      * Including app router RSC pages and app router custom routes.
      */
      reactServerComponents: "rsc",
      /**
      * Server Side Rendering layer for app (ssr).
      */
      serverSideRendering: "ssr",
      /**
      * The browser client bundle layer for actions.
      */
      actionBrowser: "action-browser",
      /**
      * The layer for the API routes.
      */
      api: "api",
      /**
      * The layer for the middleware code.
      */
      middleware: "middleware",
      /**
      * The layer for the instrumentation hooks.
      */
      instrument: "instrument",
      /**
      * The layer for assets on the edge.
      */
      edgeAsset: "edge-asset",
      /**
      * The browser client bundle layer for App directory.
      */
      appPagesBrowser: "app-pages-browser",
      /**
      * The server bundle layer for metadata routes.
      */
      appMetadataRoute: "app-metadata-route"
    }, X = {
      ...z,
      GROUP: {
        builtinReact: [
          z.reactServerComponents,
          z.actionBrowser,
          z.appMetadataRoute
        ],
        serverOnly: [
          z.reactServerComponents,
          z.actionBrowser,
          z.appMetadataRoute,
          z.instrument,
          z.middleware
        ],
        neutralTarget: [
          // pages api
          z.api
        ],
        clientOnly: [
          z.serverSideRendering,
          z.appPagesBrowser
        ],
        bundled: [
          z.reactServerComponents,
          z.actionBrowser,
          z.appMetadataRoute,
          z.serverSideRendering,
          z.appPagesBrowser,
          z.shared,
          z.instrument
        ]
      }
    }, we = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  }(At)), At;
}
var Ct = {}, xr;
function Kn() {
  return xr || (xr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "escapeStringRegexp", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const e = /[|\\{}()[\]^$+*?.-]/, t = /[|\\{}()[\]^$+*?.-]/g;
    function n(i) {
      return e.test(i) ? i.replace(t, "\\$&") : i;
    }
  }(Ct)), Ct;
}
var Or;
function Qn() {
  return Or || (Or = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    function e(_, g) {
      for (var w in g) Object.defineProperty(_, w, {
        enumerable: !0,
        get: g[w]
      });
    }
    e(r, {
      getNamedMiddlewareRegex: function() {
        return E;
      },
      getNamedRouteRegex: function() {
        return v;
      },
      getRouteRegex: function() {
        return d;
      },
      parseParameter: function() {
        return a;
      }
    });
    const t = Yn(), n = on(), i = Kn(), s = rn(), l = /\[((?:\[.*\])|.+)\]/;
    function a(_) {
      const g = _.match(l);
      return o(g ? g[1] : _);
    }
    function o(_) {
      const g = _.startsWith("[") && _.endsWith("]");
      g && (_ = _.slice(1, -1));
      const w = _.startsWith("...");
      return w && (_ = _.slice(3)), {
        key: _,
        repeat: w,
        optional: g
      };
    }
    function c(_) {
      const g = (0, s.removeTrailingSlash)(_).slice(1).split("/"), w = {};
      let S = 1;
      return {
        parameterizedRoute: g.map((m) => {
          const T = n.INTERCEPTION_ROUTE_MARKERS.find((C) => m.startsWith(C)), O = m.match(l);
          if (T && O) {
            const { key: C, optional: R, repeat: M } = o(O[1]);
            return w[C] = {
              pos: S++,
              repeat: M,
              optional: R
            }, "/" + (0, i.escapeStringRegexp)(T) + "([^/]+?)";
          } else if (O) {
            const { key: C, repeat: R, optional: M } = o(O[1]);
            return w[C] = {
              pos: S++,
              repeat: R,
              optional: M
            }, R ? M ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          } else
            return "/" + (0, i.escapeStringRegexp)(m);
        }).join(""),
        groups: w
      };
    }
    function d(_) {
      const { parameterizedRoute: g, groups: w } = c(_);
      return {
        re: new RegExp("^" + g + "(?:/)?$"),
        groups: w
      };
    }
    function f() {
      let _ = 0;
      return () => {
        let g = "", w = ++_;
        for (; w > 0; )
          g += String.fromCharCode(97 + (w - 1) % 26), w = Math.floor((w - 1) / 26);
        return g;
      };
    }
    function h(_) {
      let { interceptionMarker: g, getSafeRouteKey: w, segment: S, routeKeys: m, keyPrefix: T } = _;
      const { key: O, optional: C, repeat: R } = o(S);
      let M = O.replace(/\W/g, "");
      T && (M = "" + T + M);
      let b = !1;
      (M.length === 0 || M.length > 30) && (b = !0), isNaN(parseInt(M.slice(0, 1))) || (b = !0), b && (M = w()), T ? m[M] = "" + T + O : m[M] = O;
      const x = g ? (0, i.escapeStringRegexp)(g) : "";
      return R ? C ? "(?:/" + x + "(?<" + M + ">.+?))?" : "/" + x + "(?<" + M + ">.+?)" : "/" + x + "(?<" + M + ">[^/]+?)";
    }
    function p(_, g) {
      const w = (0, s.removeTrailingSlash)(_).slice(1).split("/"), S = f(), m = {};
      return {
        namedParameterizedRoute: w.map((T) => {
          const O = n.INTERCEPTION_ROUTE_MARKERS.some((R) => T.startsWith(R)), C = T.match(/\[((?:\[.*\])|.+)\]/);
          if (O && C) {
            const [R] = T.split(C[0]);
            return h({
              getSafeRouteKey: S,
              interceptionMarker: R,
              segment: C[1],
              routeKeys: m,
              keyPrefix: g ? t.NEXT_INTERCEPTION_MARKER_PREFIX : void 0
            });
          } else return C ? h({
            getSafeRouteKey: S,
            segment: C[1],
            routeKeys: m,
            keyPrefix: g ? t.NEXT_QUERY_PARAM_PREFIX : void 0
          }) : "/" + (0, i.escapeStringRegexp)(T);
        }).join(""),
        routeKeys: m
      };
    }
    function v(_, g) {
      const w = p(_, g);
      return {
        ...d(_),
        namedRegex: "^" + w.namedParameterizedRoute + "(?:/)?$",
        routeKeys: w.routeKeys
      };
    }
    function E(_, g) {
      const { parameterizedRoute: w } = c(_), { catchAll: S = !0 } = g;
      if (w === "/")
        return {
          namedRegex: "^/" + (S ? ".*" : "") + "$"
        };
      const { namedParameterizedRoute: m } = p(_, !1);
      let T = S ? "(?:(/.*)?)" : "";
      return {
        namedRegex: "^" + m + T + "$"
      };
    }
  }(Ot)), Ot;
}
var Ar;
function Jn() {
  return Ar || (Ar = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "interpolateAs", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const e = Xn(), t = Qn();
    function n(i, s, l) {
      let a = "";
      const o = (0, t.getRouteRegex)(i), c = o.groups, d = (
        // Try to match the dynamic route against the asPath
        (s !== i ? (0, e.getRouteMatcher)(o)(s) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        l
      );
      a = i;
      const f = Object.keys(c);
      return f.every((h) => {
        let p = d[h] || "";
        const { repeat: v, optional: E } = c[h];
        let _ = "[" + (v ? "..." : "") + h + "]";
        return E && (_ = (p ? "" : "/") + "[" + _ + "]"), v && !Array.isArray(p) && (p = [
          p
        ]), (E || h in d) && // Interpolate group into data URL if present
        (a = a.replace(_, v ? p.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (g) => encodeURIComponent(g)
        ).join("/") : encodeURIComponent(p)) || "/");
      }) || (a = ""), {
        params: f,
        result: a
      };
    }
  }(Rt)), Rt;
}
var Cr;
function Zn() {
  return Cr || (Cr = 1, function(r, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "resolveHref", {
      enumerable: !0,
      get: function() {
        return d;
      }
    });
    const t = en(), n = tn(), i = Fn(), s = et(), l = tt(), a = sn(), o = $n(), c = Jn();
    function d(f, h, p) {
      let v, E = typeof h == "string" ? h : (0, n.formatWithValidation)(h);
      const _ = E.match(/^[a-zA-Z]{1,}:\/\//), g = _ ? E.slice(_[0].length) : E;
      if ((g.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + E + "' passed to next/router in page: '" + f.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const S = (0, s.normalizeRepeatedSlashes)(g);
        E = (_ ? _[0] : "") + S;
      }
      if (!(0, a.isLocalURL)(E))
        return p ? [
          E
        ] : E;
      try {
        v = new URL(E.startsWith("#") ? f.asPath : f.pathname, "http://n");
      } catch {
        v = new URL("/", "http://n");
      }
      try {
        const S = new URL(E, v);
        S.pathname = (0, l.normalizePathTrailingSlash)(S.pathname);
        let m = "";
        if ((0, o.isDynamicRoute)(S.pathname) && S.searchParams && p) {
          const O = (0, t.searchParamsToUrlQuery)(S.searchParams), { result: C, params: R } = (0, c.interpolateAs)(S.pathname, S.pathname, O);
          C && (m = (0, n.formatWithValidation)({
            pathname: C,
            hash: S.hash,
            query: (0, i.omit)(O, R)
          }));
        }
        const T = S.origin === v.origin ? S.href.slice(S.origin.length) : S.href;
        return p ? [
          T,
          m || T
        ] : T;
      } catch {
        return p ? [
          E
        ] : E;
      }
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
  }(je, je.exports)), je.exports;
}
var Fe = { exports: {} }, It = {}, Mt = {}, Ir;
function an() {
  return Ir || (Ir = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "addPathPrefix", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    const e = Xt();
    function t(n, i) {
      if (!n.startsWith("/") || !i)
        return n;
      const { pathname: s, query: l, hash: a } = (0, e.parsePath)(n);
      return "" + i + s + l + a;
    }
  }(Mt)), Mt;
}
var Mr;
function ei() {
  return Mr || (Mr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "addLocale", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const e = an(), t = nn();
    function n(i, s, l, a) {
      if (!s || s === l) return i;
      const o = i.toLowerCase();
      return !a && ((0, t.pathHasPrefix)(o, "/api") || (0, t.pathHasPrefix)(o, "/" + s.toLowerCase())) ? i : (0, e.addPathPrefix)(i, "/" + s);
    }
  }(It)), It;
}
var Lr;
function ti() {
  return Lr || (Lr = 1, function(r, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addLocale", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = tt(), n = function(i) {
      for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
        l[a - 1] = arguments[a];
      return process.env.__NEXT_I18N_SUPPORT ? (0, t.normalizePathTrailingSlash)(ei().addLocale(i, ...l)) : i;
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
  }(Fe, Fe.exports)), Fe.exports;
}
var Lt = {}, Nr;
function ri() {
  return Nr || (Nr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "RouterContext", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = (/* @__PURE__ */ Ne._(xe)).default.createContext(null);
    process.env.NODE_ENV !== "production" && (n.displayName = "RouterContext");
  }(Lt)), Lt;
}
var Nt = {}, Dr;
function ni() {
  return Dr || (Dr = 1, function(r) {
    "use client";
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    function e(c, d) {
      for (var f in d) Object.defineProperty(c, f, {
        enumerable: !0,
        get: d[f]
      });
    }
    e(r, {
      AppRouterContext: function() {
        return i;
      },
      GlobalLayoutRouterContext: function() {
        return l;
      },
      LayoutRouterContext: function() {
        return s;
      },
      MissingSlotContext: function() {
        return o;
      },
      TemplateContext: function() {
        return a;
      }
    });
    const n = /* @__PURE__ */ Ne._(xe), i = n.default.createContext(null), s = n.default.createContext(null), l = n.default.createContext(null), a = n.default.createContext(null);
    process.env.NODE_ENV !== "production" && (i.displayName = "AppRouterContext", s.displayName = "LayoutRouterContext", l.displayName = "GlobalLayoutRouterContext", a.displayName = "TemplateContext");
    const o = n.default.createContext(/* @__PURE__ */ new Set());
  }(Nt)), Nt;
}
var Ve = { exports: {} }, qe = { exports: {} }, jr;
function ii() {
  return jr || (jr = 1, function(r, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(s, l) {
      for (var a in l) Object.defineProperty(s, a, {
        enumerable: !0,
        get: l[a]
      });
    }
    t(e, {
      cancelIdleCallback: function() {
        return i;
      },
      requestIdleCallback: function() {
        return n;
      }
    });
    const n = typeof self < "u" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(s) {
      let l = Date.now();
      return self.setTimeout(function() {
        s({
          didTimeout: !1,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - l));
          }
        });
      }, 1);
    }, i = typeof self < "u" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(s) {
      return clearTimeout(s);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
  }(qe, qe.exports)), qe.exports;
}
var kr;
function si() {
  return kr || (kr = 1, function(r, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "useIntersection", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const t = xe, n = ii(), i = typeof IntersectionObserver == "function", s = /* @__PURE__ */ new Map(), l = [];
    function a(d) {
      const f = {
        root: d.root || null,
        margin: d.rootMargin || ""
      }, h = l.find((_) => _.root === f.root && _.margin === f.margin);
      let p;
      if (h && (p = s.get(h), p))
        return p;
      const v = /* @__PURE__ */ new Map(), E = new IntersectionObserver((_) => {
        _.forEach((g) => {
          const w = v.get(g.target), S = g.isIntersecting || g.intersectionRatio > 0;
          w && S && w(S);
        });
      }, d);
      return p = {
        id: f,
        observer: E,
        elements: v
      }, l.push(f), s.set(f, p), p;
    }
    function o(d, f, h) {
      const { id: p, observer: v, elements: E } = a(h);
      return E.set(d, f), v.observe(d), function() {
        if (E.delete(d), v.unobserve(d), E.size === 0) {
          v.disconnect(), s.delete(p);
          const g = l.findIndex((w) => w.root === p.root && w.margin === p.margin);
          g > -1 && l.splice(g, 1);
        }
      };
    }
    function c(d) {
      let { rootRef: f, rootMargin: h, disabled: p } = d;
      const v = p || !i, [E, _] = (0, t.useState)(!1), g = (0, t.useRef)(null), w = (0, t.useCallback)((m) => {
        g.current = m;
      }, []);
      (0, t.useEffect)(() => {
        if (i) {
          if (v || E) return;
          const m = g.current;
          if (m && m.tagName)
            return o(m, (O) => O && _(O), {
              root: f == null ? void 0 : f.current,
              rootMargin: h
            });
        } else if (!E) {
          const m = (0, n.requestIdleCallback)(() => _(!0));
          return () => (0, n.cancelIdleCallback)(m);
        }
      }, [
        v,
        h,
        f,
        E,
        g.current
      ]);
      const S = (0, t.useCallback)(() => {
        _(!1);
      }, []);
      return [
        w,
        E,
        S
      ];
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
  }(Ve, Ve.exports)), Ve.exports;
}
var He = { exports: {} }, Ue = { exports: {} }, Dt = {}, Gr;
function oi() {
  return Gr || (Gr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(t, n) {
      let i;
      const s = t.split("/");
      return (n || []).some((l) => s[1] && s[1].toLowerCase() === l.toLowerCase() ? (i = l, s.splice(1, 1), t = s.join("/") || "/", !0) : !1), {
        pathname: t,
        detectedLocale: i
      };
    }
  }(Dt)), Dt;
}
var zr;
function ai() {
  return zr || (zr = 1, function(r, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    const t = (n, i) => process.env.__NEXT_I18N_SUPPORT ? oi().normalizeLocalePath(n, i) : {
      pathname: n,
      detectedLocale: void 0
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
  }(Ue, Ue.exports)), Ue.exports;
}
var Be = { exports: {} }, jt = {}, Fr;
function li() {
  return Fr || (Fr = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(t, n, i) {
      if (t) {
        i && (i = i.toLowerCase());
        for (const a of t) {
          var s, l;
          const o = (s = a.domain) == null ? void 0 : s.split(":", 1)[0].toLowerCase();
          if (n === o || i === a.defaultLocale.toLowerCase() || (l = a.locales) != null && l.some((c) => c.toLowerCase() === i))
            return a;
        }
      }
    }
  }(jt)), jt;
}
var Vr;
function ui() {
  return Vr || (Vr = 1, function(r, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    const t = function() {
      for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
        i[s] = arguments[s];
      if (process.env.__NEXT_I18N_SUPPORT)
        return li().detectDomainLocale(...i);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
  }(Be, Be.exports)), Be.exports;
}
var qr;
function ci() {
  return qr || (qr = 1, function(r, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "getDomainLocale", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const t = tt(), n = process.env.__NEXT_ROUTER_BASEPATH || "";
    function i(s, l, a, o) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const c = ai().normalizeLocalePath, d = ui().detectDomainLocale, f = l || c(s, a).detectedLocale, h = d(o, void 0, f);
        if (h) {
          const p = "http" + (h.http ? "" : "s") + "://", v = f === h.defaultLocale ? "" : "/" + f;
          return "" + p + h.domain + (0, t.normalizePathTrailingSlash)("" + n + v + s);
        }
        return !1;
      } else
        return !1;
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
  }(He, He.exports)), He.exports;
}
var We = { exports: {} }, Hr;
function di() {
  return Hr || (Hr = 1, function(r, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addBasePath", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const t = an(), n = tt(), i = process.env.__NEXT_ROUTER_BASEPATH || "";
    function s(l, a) {
      return (0, n.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !a ? l : (0, t.addPathPrefix)(l, i));
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
  }(We, We.exports)), We.exports;
}
var $e = { exports: {} }, Ur;
function fi() {
  return Ur || (Ur = 1, function(r, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(p, v) {
      for (var E in v) Object.defineProperty(p, E, {
        enumerable: !0,
        get: v[E]
      });
    }
    t(e, {
      ACTION_FAST_REFRESH: function() {
        return o;
      },
      ACTION_NAVIGATE: function() {
        return i;
      },
      ACTION_PREFETCH: function() {
        return a;
      },
      ACTION_REFRESH: function() {
        return n;
      },
      ACTION_RESTORE: function() {
        return s;
      },
      ACTION_SERVER_ACTION: function() {
        return c;
      },
      ACTION_SERVER_PATCH: function() {
        return l;
      },
      PrefetchCacheEntryStatus: function() {
        return f;
      },
      PrefetchKind: function() {
        return d;
      },
      isThenable: function() {
        return h;
      }
    });
    const n = "refresh", i = "navigate", s = "restore", l = "server-patch", a = "prefetch", o = "fast-refresh", c = "server-action";
    var d;
    (function(p) {
      p.AUTO = "auto", p.FULL = "full", p.TEMPORARY = "temporary";
    })(d || (d = {}));
    var f;
    (function(p) {
      p.fresh = "fresh", p.reusable = "reusable", p.expired = "expired", p.stale = "stale";
    })(f || (f = {}));
    function h(p) {
      return p && (typeof p == "object" || typeof p == "function") && typeof p.then == "function";
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
  }($e, $e.exports)), $e.exports;
}
(function(r, e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return O;
    }
  });
  const t = Ne, n = Qe, i = /* @__PURE__ */ t._(xe), s = Zn(), l = sn(), a = tn(), o = et(), c = ti(), d = ri(), f = ni(), h = si(), p = ci(), v = di(), E = fi(), _ = /* @__PURE__ */ new Set();
  function g(C, R, M, b, x, I) {
    if (typeof window > "u" || !I && !(0, l.isLocalURL)(R))
      return;
    if (!b.bypassPrefetchedCheck) {
      const N = (
        // Let the link's locale prop override the default router locale.
        typeof b.locale < "u" ? b.locale : "locale" in C ? C.locale : void 0
      ), F = R + "%" + M + "%" + N;
      if (_.has(F))
        return;
      _.add(F);
    }
    (async () => I ? C.prefetch(R, x) : C.prefetch(R, M, b))().catch((N) => {
      if (process.env.NODE_ENV !== "production")
        throw N;
    });
  }
  function w(C) {
    const M = C.currentTarget.getAttribute("target");
    return M && M !== "_self" || C.metaKey || C.ctrlKey || C.shiftKey || C.altKey || // triggers resource download
    C.nativeEvent && C.nativeEvent.which === 2;
  }
  function S(C, R, M, b, x, I, A, N, F) {
    const { nodeName: Y } = C.currentTarget;
    if (Y.toUpperCase() === "A" && (w(C) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !F && !(0, l.isLocalURL)(M)))
      return;
    C.preventDefault();
    const ie = () => {
      const $ = A ?? !0;
      "beforePopState" in R ? R[x ? "replace" : "push"](M, b, {
        shallow: I,
        locale: N,
        scroll: $
      }) : R[x ? "replace" : "push"](b || M, {
        scroll: $
      });
    };
    F ? i.default.startTransition(ie) : ie();
  }
  function m(C) {
    return typeof C == "string" ? C : (0, a.formatUrl)(C);
  }
  const O = /* @__PURE__ */ i.default.forwardRef(function(R, M) {
    let b;
    const { href: x, as: I, children: A, prefetch: N = null, passHref: F, replace: Y, shallow: pe, scroll: ie, locale: $, onClick: ae, onMouseEnter: ce, onTouchStart: he, legacyBehavior: K = !1, ...Ae } = R;
    b = A, K && (typeof b == "string" || typeof b == "number") && (b = /* @__PURE__ */ (0, n.jsx)("a", {
      children: b
    }));
    const U = i.default.useContext(d.RouterContext), _e = i.default.useContext(f.AppRouterContext), J = U ?? _e, Q = !U, de = N !== !1, le = N === null ? E.PrefetchKind.AUTO : E.PrefetchKind.FULL;
    if (process.env.NODE_ENV !== "production") {
      let D = function(k) {
        return new Error("Failed prop type: The prop `" + k.key + "` expects a " + k.expected + " in `<Link>`, but got `" + k.actual + "` instead." + (typeof window < "u" ? `
Open your browser's console to view the Component stack trace.` : ""));
      };
      Object.keys({
        href: !0
      }).forEach((k) => {
        if (k === "href" && (R[k] == null || typeof R[k] != "string" && typeof R[k] != "object"))
          throw D({
            key: k,
            expected: "`string` or `object`",
            actual: R[k] === null ? "null" : typeof R[k]
          });
      }), Object.keys({
        as: !0,
        replace: !0,
        scroll: !0,
        shallow: !0,
        passHref: !0,
        prefetch: !0,
        locale: !0,
        onClick: !0,
        onMouseEnter: !0,
        onTouchStart: !0,
        legacyBehavior: !0
      }).forEach((k) => {
        const se = typeof R[k];
        if (k === "as") {
          if (R[k] && se !== "string" && se !== "object")
            throw D({
              key: k,
              expected: "`string` or `object`",
              actual: se
            });
        } else if (k === "locale") {
          if (R[k] && se !== "string")
            throw D({
              key: k,
              expected: "`string`",
              actual: se
            });
        } else if (k === "onClick" || k === "onMouseEnter" || k === "onTouchStart") {
          if (R[k] && se !== "function")
            throw D({
              key: k,
              expected: "`function`",
              actual: se
            });
        } else if ((k === "replace" || k === "scroll" || k === "shallow" || k === "passHref" || k === "prefetch" || k === "legacyBehavior") && R[k] != null && se !== "boolean")
          throw D({
            key: k,
            expected: "`boolean`",
            actual: se
          });
      });
      const ve = i.default.useRef(!1);
      R.prefetch && !ve.current && !Q && (ve.current = !0, console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated"));
    }
    if (process.env.NODE_ENV !== "production" && Q && !I) {
      let D;
      if (typeof x == "string" ? D = x : typeof x == "object" && typeof x.pathname == "string" && (D = x.pathname), D && D.split("/").some((ge) => ge.startsWith("[") && ge.endsWith("]")))
        throw new Error("Dynamic href `" + D + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href");
    }
    const { href: z, as: X } = i.default.useMemo(() => {
      if (!U) {
        const ge = m(x);
        return {
          href: ge,
          as: I ? m(I) : ge
        };
      }
      const [D, fe] = (0, s.resolveHref)(U, x, !0);
      return {
        href: D,
        as: I ? (0, s.resolveHref)(U, I) : fe || D
      };
    }, [
      U,
      x,
      I
    ]), we = i.default.useRef(z), ye = i.default.useRef(X);
    let H;
    if (K)
      if (process.env.NODE_ENV === "development") {
        ae && console.warn('"onClick" was passed to <Link> with `href` of `' + x + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link'), ce && console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + x + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
        try {
          H = i.default.Children.only(b);
        } catch {
          throw b ? new Error("Multiple children were passed to <Link> with `href` of `" + x + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window < "u" ? ` 
Open your browser's console to view the Component stack trace.` : "")) : new Error("No children were passed to <Link> with `href` of `" + x + "` but one child is required https://nextjs.org/docs/messages/link-no-children");
        }
      } else
        H = i.default.Children.only(b);
    else if (process.env.NODE_ENV === "development" && (b == null ? void 0 : b.type) === "a")
      throw new Error(`Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor`);
    const Z = K ? H && typeof H == "object" && H.ref : M, [Ce, Ie, Se] = (0, h.useIntersection)({
      rootMargin: "200px"
    }), rt = i.default.useCallback((D) => {
      (ye.current !== X || we.current !== z) && (Se(), ye.current = X, we.current = z), Ce(D), Z && (typeof Z == "function" ? Z(D) : typeof Z == "object" && (Z.current = D));
    }, [
      X,
      Z,
      z,
      Se,
      Ce
    ]);
    i.default.useEffect(() => {
      process.env.NODE_ENV === "production" && J && (!Ie || !de || g(J, z, X, {
        locale: $
      }, {
        kind: le
      }, Q));
    }, [
      X,
      z,
      Ie,
      $,
      de,
      U == null ? void 0 : U.locale,
      J,
      Q,
      le
    ]);
    const be = {
      ref: rt,
      onClick(D) {
        if (process.env.NODE_ENV !== "production" && !D)
          throw new Error('Component rendered inside next/link has to pass click event to "onClick" prop.');
        !K && typeof ae == "function" && ae(D), K && H.props && typeof H.props.onClick == "function" && H.props.onClick(D), J && (D.defaultPrevented || S(D, J, z, X, Y, pe, ie, $, Q));
      },
      onMouseEnter(D) {
        !K && typeof ce == "function" && ce(D), K && H.props && typeof H.props.onMouseEnter == "function" && H.props.onMouseEnter(D), J && ((!de || process.env.NODE_ENV === "development") && Q || g(J, z, X, {
          locale: $,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: le
        }, Q));
      },
      onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? void 0 : function(fe) {
        !K && typeof he == "function" && he(fe), K && H.props && typeof H.props.onTouchStart == "function" && H.props.onTouchStart(fe), J && (!de && Q || g(J, z, X, {
          locale: $,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: le
        }, Q));
      }
    };
    if ((0, o.isAbsoluteUrl)(X))
      be.href = X;
    else if (!K || F || H.type === "a" && !("href" in H.props)) {
      const D = typeof $ < "u" ? $ : U == null ? void 0 : U.locale, fe = (U == null ? void 0 : U.isLocaleDomain) && (0, p.getDomainLocale)(X, D, U == null ? void 0 : U.locales, U == null ? void 0 : U.domainLocales);
      be.href = fe || (0, v.addBasePath)((0, c.addLocale)(X, D, U == null ? void 0 : U.defaultLocale));
    }
    return K ? /* @__PURE__ */ i.default.cloneElement(H, be) : /* @__PURE__ */ (0, n.jsx)("a", {
      ...Ae,
      ...be,
      children: b
    });
  });
  (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), r.exports = e.default);
})(or, or.exports);
const js = De({
  open: !1,
  setOpen: (r) => r
});
var pi = /* @__PURE__ */ ((r) => (r[r.PLAYING = 0] = "PLAYING", r[r.STOPED = 1] = "STOPED", r[r.LOADED = 2] = "LOADED", r[r.ENDED = 3] = "ENDED", r))(pi || {});
const ks = De({});
function Br(r) {
  return r !== null && typeof r == "object" && "constructor" in r && r.constructor === Object;
}
function Yt(r, e) {
  r === void 0 && (r = {}), e === void 0 && (e = {}), Object.keys(e).forEach((t) => {
    typeof r[t] > "u" ? r[t] = e[t] : Br(e[t]) && Br(r[t]) && Object.keys(e[t]).length > 0 && Yt(r[t], e[t]);
  });
}
const ln = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function Oe() {
  const r = typeof document < "u" ? document : {};
  return Yt(r, ln), r;
}
const hi = {
  document: ln,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(r) {
    return typeof setTimeout > "u" ? (r(), null) : setTimeout(r, 0);
  },
  cancelAnimationFrame(r) {
    typeof setTimeout > "u" || clearTimeout(r);
  }
};
function ne() {
  const r = typeof window < "u" ? window : {};
  return Yt(r, hi), r;
}
function mi(r) {
  return r === void 0 && (r = ""), r.trim().split(" ").filter((e) => !!e.trim());
}
function gi(r) {
  const e = r;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {
    }
    try {
      delete e[t];
    } catch {
    }
  });
}
function Bt(r, e) {
  return e === void 0 && (e = 0), setTimeout(r, e);
}
function Je() {
  return Date.now();
}
function vi(r) {
  const e = ne();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(r, null)), !t && r.currentStyle && (t = r.currentStyle), t || (t = r.style), t;
}
function Ei(r, e) {
  e === void 0 && (e = "x");
  const t = ne();
  let n, i, s;
  const l = vi(r);
  return t.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((a) => a.replace(",", ".")).join(", ")), s = new t.WebKitCSSMatrix(i === "none" ? "" : i)) : (s = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? i = s.m41 : n.length === 16 ? i = parseFloat(n[12]) : i = parseFloat(n[4])), e === "y" && (t.WebKitCSSMatrix ? i = s.m42 : n.length === 16 ? i = parseFloat(n[13]) : i = parseFloat(n[5])), i || 0;
}
function Xe(r) {
  return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object";
}
function _i(r) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? r instanceof HTMLElement : r && (r.nodeType === 1 || r.nodeType === 11);
}
function re() {
  const r = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n != null && !_i(n)) {
      const i = Object.keys(Object(n)).filter((s) => e.indexOf(s) < 0);
      for (let s = 0, l = i.length; s < l; s += 1) {
        const a = i[s], o = Object.getOwnPropertyDescriptor(n, a);
        o !== void 0 && o.enumerable && (Xe(r[a]) && Xe(n[a]) ? n[a].__swiper__ ? r[a] = n[a] : re(r[a], n[a]) : !Xe(r[a]) && Xe(n[a]) ? (r[a] = {}, n[a].__swiper__ ? r[a] = n[a] : re(r[a], n[a])) : r[a] = n[a]);
      }
    }
  }
  return r;
}
function Ye(r, e, t) {
  r.style.setProperty(e, t);
}
function un(r) {
  let {
    swiper: e,
    targetPosition: t,
    side: n
  } = r;
  const i = ne(), s = -e.translate;
  let l = null, a;
  const o = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
  const c = t > s ? "next" : "prev", d = (h, p) => c === "next" && h >= p || c === "prev" && h <= p, f = () => {
    a = (/* @__PURE__ */ new Date()).getTime(), l === null && (l = a);
    const h = Math.max(Math.min((a - l) / o, 1), 0), p = 0.5 - Math.cos(h * Math.PI) / 2;
    let v = s + p * (t - s);
    if (d(v, t) && (v = t), e.wrapperEl.scrollTo({
      [n]: v
    }), d(v, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [n]: v
        });
      }), i.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = i.requestAnimationFrame(f);
  };
  f();
}
function me(r, e) {
  return e === void 0 && (e = ""), [...r.children].filter((t) => t.matches(e));
}
function Ze(r) {
  try {
    console.warn(r);
    return;
  } catch {
  }
}
function Wt(r, e) {
  e === void 0 && (e = []);
  const t = document.createElement(r);
  return t.classList.add(...Array.isArray(e) ? e : mi(e)), t;
}
function Si(r, e) {
  const t = [];
  for (; r.previousElementSibling; ) {
    const n = r.previousElementSibling;
    e ? n.matches(e) && t.push(n) : t.push(n), r = n;
  }
  return t;
}
function Ti(r, e) {
  const t = [];
  for (; r.nextElementSibling; ) {
    const n = r.nextElementSibling;
    e ? n.matches(e) && t.push(n) : t.push(n), r = n;
  }
  return t;
}
function Ee(r, e) {
  return ne().getComputedStyle(r, null).getPropertyValue(e);
}
function Wr(r) {
  let e = r, t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function wi(r, e) {
  const t = [];
  let n = r.parentElement;
  for (; n; )
    t.push(n), n = n.parentElement;
  return t;
}
function $r(r, e, t) {
  const n = ne();
  return r[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
}
let kt;
function yi() {
  const r = ne(), e = Oe();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in r || r.DocumentTouch && e instanceof r.DocumentTouch)
  };
}
function cn() {
  return kt || (kt = yi()), kt;
}
let Gt;
function bi(r) {
  let {
    userAgent: e
  } = r === void 0 ? {} : r;
  const t = cn(), n = ne(), i = n.navigator.platform, s = e || n.navigator.userAgent, l = {
    ios: !1,
    android: !1
  }, a = n.screen.width, o = n.screen.height, c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = s.match(/(iPad).*OS\s([\d_]+)/);
  const f = s.match(/(iPod)(.*OS\s([\d_]+))?/), h = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), p = i === "Win32";
  let v = i === "MacIntel";
  const E = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !d && v && t.touch && E.indexOf(`${a}x${o}`) >= 0 && (d = s.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), v = !1), c && !p && (l.os = "android", l.android = !0), (d || h || f) && (l.os = "ios", l.ios = !0), l;
}
function dn(r) {
  return r === void 0 && (r = {}), Gt || (Gt = bi(r)), Gt;
}
let zt;
function Pi() {
  const r = ne(), e = dn();
  let t = !1;
  function n() {
    const a = r.navigator.userAgent.toLowerCase();
    return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0;
  }
  if (n()) {
    const a = String(r.navigator.userAgent);
    if (a.includes("Version/")) {
      const [o, c] = a.split("Version/")[1].split(" ")[0].split(".").map((d) => Number(d));
      t = o < 16 || o === 16 && c < 2;
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent), s = n(), l = s || i && e.ios;
  return {
    isSafari: t || s,
    needPerspectiveFix: t,
    need3dFix: l,
    isWebView: i
  };
}
function Ri() {
  return zt || (zt = Pi()), zt;
}
function xi(r) {
  let {
    swiper: e,
    on: t,
    emit: n
  } = r;
  const i = ne();
  let s = null, l = null;
  const a = () => {
    !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
  }, o = () => {
    !e || e.destroyed || !e.initialized || (s = new ResizeObserver((f) => {
      l = i.requestAnimationFrame(() => {
        const {
          width: h,
          height: p
        } = e;
        let v = h, E = p;
        f.forEach((_) => {
          let {
            contentBoxSize: g,
            contentRect: w,
            target: S
          } = _;
          S && S !== e.el || (v = w ? w.width : (g[0] || g).inlineSize, E = w ? w.height : (g[0] || g).blockSize);
        }), (v !== h || E !== p) && a();
      });
    }), s.observe(e.el));
  }, c = () => {
    l && i.cancelAnimationFrame(l), s && s.unobserve && e.el && (s.unobserve(e.el), s = null);
  }, d = () => {
    !e || e.destroyed || !e.initialized || n("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
      o();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", d);
  }), t("destroy", () => {
    c(), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", d);
  });
}
function Oi(r) {
  let {
    swiper: e,
    extendParams: t,
    on: n,
    emit: i
  } = r;
  const s = [], l = ne(), a = function(d, f) {
    f === void 0 && (f = {});
    const h = l.MutationObserver || l.WebkitMutationObserver, p = new h((v) => {
      if (e.__preventObserver__) return;
      if (v.length === 1) {
        i("observerUpdate", v[0]);
        return;
      }
      const E = function() {
        i("observerUpdate", v[0]);
      };
      l.requestAnimationFrame ? l.requestAnimationFrame(E) : l.setTimeout(E, 0);
    });
    p.observe(d, {
      attributes: typeof f.attributes > "u" ? !0 : f.attributes,
      childList: e.isElement || (typeof f.childList > "u" ? !0 : f).childList,
      characterData: typeof f.characterData > "u" ? !0 : f.characterData
    }), s.push(p);
  }, o = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const d = wi(e.hostEl);
        for (let f = 0; f < d.length; f += 1)
          a(d[f]);
      }
      a(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), a(e.wrapperEl, {
        attributes: !1
      });
    }
  }, c = () => {
    s.forEach((d) => {
      d.disconnect();
    }), s.splice(0, s.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), n("init", o), n("destroy", c);
}
var Ai = {
  on(r, e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const i = t ? "unshift" : "push";
    return r.split(" ").forEach((s) => {
      n.eventsListeners[s] || (n.eventsListeners[s] = []), n.eventsListeners[s][i](e);
    }), n;
  },
  once(r, e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    function i() {
      n.off(r, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, l = new Array(s), a = 0; a < s; a++)
        l[a] = arguments[a];
      e.apply(n, l);
    }
    return i.__emitterProxy = e, n.on(r, i, t);
  },
  onAny(r, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof r != "function") return t;
    const n = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(r) < 0 && t.eventsAnyListeners[n](r), t;
  },
  offAny(r) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(r);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(r, e) {
    const t = this;
    return !t.eventsListeners || t.destroyed || !t.eventsListeners || r.split(" ").forEach((n) => {
      typeof e > "u" ? t.eventsListeners[n] = [] : t.eventsListeners[n] && t.eventsListeners[n].forEach((i, s) => {
        (i === e || i.__emitterProxy && i.__emitterProxy === e) && t.eventsListeners[n].splice(s, 1);
      });
    }), t;
  },
  emit() {
    const r = this;
    if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
    let e, t, n;
    for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return typeof s[0] == "string" || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), n = r) : (e = s[0].events, t = s[0].data, n = s[0].context || r), t.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach((o) => {
      r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach((c) => {
        c.apply(n, [o, ...t]);
      }), r.eventsListeners && r.eventsListeners[o] && r.eventsListeners[o].forEach((c) => {
        c.apply(n, t);
      });
    }), r;
  }
};
function Ci() {
  const r = this;
  let e, t;
  const n = r.el;
  typeof r.params.width < "u" && r.params.width !== null ? e = r.params.width : e = n.clientWidth, typeof r.params.height < "u" && r.params.height !== null ? t = r.params.height : t = n.clientHeight, !(e === 0 && r.isHorizontal() || t === 0 && r.isVertical()) && (e = e - parseInt(Ee(n, "padding-left") || 0, 10) - parseInt(Ee(n, "padding-right") || 0, 10), t = t - parseInt(Ee(n, "padding-top") || 0, 10) - parseInt(Ee(n, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(r, {
    width: e,
    height: t,
    size: r.isHorizontal() ? e : t
  }));
}
function Ii() {
  const r = this;
  function e(b, x) {
    return parseFloat(b.getPropertyValue(r.getDirectionLabel(x)) || 0);
  }
  const t = r.params, {
    wrapperEl: n,
    slidesEl: i,
    size: s,
    rtlTranslate: l,
    wrongRTL: a
  } = r, o = r.virtual && t.virtual.enabled, c = o ? r.virtual.slides.length : r.slides.length, d = me(i, `.${r.params.slideClass}, swiper-slide`), f = o ? r.virtual.slides.length : d.length;
  let h = [];
  const p = [], v = [];
  let E = t.slidesOffsetBefore;
  typeof E == "function" && (E = t.slidesOffsetBefore.call(r));
  let _ = t.slidesOffsetAfter;
  typeof _ == "function" && (_ = t.slidesOffsetAfter.call(r));
  const g = r.snapGrid.length, w = r.slidesGrid.length;
  let S = t.spaceBetween, m = -E, T = 0, O = 0;
  if (typeof s > "u")
    return;
  typeof S == "string" && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * s : typeof S == "string" && (S = parseFloat(S)), r.virtualSize = -S, d.forEach((b) => {
    l ? b.style.marginLeft = "" : b.style.marginRight = "", b.style.marginBottom = "", b.style.marginTop = "";
  }), t.centeredSlides && t.cssMode && (Ye(n, "--swiper-centered-offset-before", ""), Ye(n, "--swiper-centered-offset-after", ""));
  const C = t.grid && t.grid.rows > 1 && r.grid;
  C ? r.grid.initSlides(d) : r.grid && r.grid.unsetSlides();
  let R;
  const M = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((b) => typeof t.breakpoints[b].slidesPerView < "u").length > 0;
  for (let b = 0; b < f; b += 1) {
    R = 0;
    let x;
    if (d[b] && (x = d[b]), C && r.grid.updateSlide(b, x, d), !(d[b] && Ee(x, "display") === "none")) {
      if (t.slidesPerView === "auto") {
        M && (d[b].style[r.getDirectionLabel("width")] = "");
        const I = getComputedStyle(x), A = x.style.transform, N = x.style.webkitTransform;
        if (A && (x.style.transform = "none"), N && (x.style.webkitTransform = "none"), t.roundLengths)
          R = r.isHorizontal() ? $r(x, "width") : $r(x, "height");
        else {
          const F = e(I, "width"), Y = e(I, "padding-left"), pe = e(I, "padding-right"), ie = e(I, "margin-left"), $ = e(I, "margin-right"), ae = I.getPropertyValue("box-sizing");
          if (ae && ae === "border-box")
            R = F + ie + $;
          else {
            const {
              clientWidth: ce,
              offsetWidth: he
            } = x;
            R = F + Y + pe + ie + $ + (he - ce);
          }
        }
        A && (x.style.transform = A), N && (x.style.webkitTransform = N), t.roundLengths && (R = Math.floor(R));
      } else
        R = (s - (t.slidesPerView - 1) * S) / t.slidesPerView, t.roundLengths && (R = Math.floor(R)), d[b] && (d[b].style[r.getDirectionLabel("width")] = `${R}px`);
      d[b] && (d[b].swiperSlideSize = R), v.push(R), t.centeredSlides ? (m = m + R / 2 + T / 2 + S, T === 0 && b !== 0 && (m = m - s / 2 - S), b === 0 && (m = m - s / 2 - S), Math.abs(m) < 1 / 1e3 && (m = 0), t.roundLengths && (m = Math.floor(m)), O % t.slidesPerGroup === 0 && h.push(m), p.push(m)) : (t.roundLengths && (m = Math.floor(m)), (O - Math.min(r.params.slidesPerGroupSkip, O)) % r.params.slidesPerGroup === 0 && h.push(m), p.push(m), m = m + R + S), r.virtualSize += R + S, T = R, O += 1;
    }
  }
  if (r.virtualSize = Math.max(r.virtualSize, s) + _, l && a && (t.effect === "slide" || t.effect === "coverflow") && (n.style.width = `${r.virtualSize + S}px`), t.setWrapperSize && (n.style[r.getDirectionLabel("width")] = `${r.virtualSize + S}px`), C && r.grid.updateWrapperSize(R, h), !t.centeredSlides) {
    const b = [];
    for (let x = 0; x < h.length; x += 1) {
      let I = h[x];
      t.roundLengths && (I = Math.floor(I)), h[x] <= r.virtualSize - s && b.push(I);
    }
    h = b, Math.floor(r.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 && h.push(r.virtualSize - s);
  }
  if (o && t.loop) {
    const b = v[0] + S;
    if (t.slidesPerGroup > 1) {
      const x = Math.ceil((r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup), I = b * t.slidesPerGroup;
      for (let A = 0; A < x; A += 1)
        h.push(h[h.length - 1] + I);
    }
    for (let x = 0; x < r.virtual.slidesBefore + r.virtual.slidesAfter; x += 1)
      t.slidesPerGroup === 1 && h.push(h[h.length - 1] + b), p.push(p[p.length - 1] + b), r.virtualSize += b;
  }
  if (h.length === 0 && (h = [0]), S !== 0) {
    const b = r.isHorizontal() && l ? "marginLeft" : r.getDirectionLabel("marginRight");
    d.filter((x, I) => !t.cssMode || t.loop ? !0 : I !== d.length - 1).forEach((x) => {
      x.style[b] = `${S}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let b = 0;
    v.forEach((I) => {
      b += I + (S || 0);
    }), b -= S;
    const x = b - s;
    h = h.map((I) => I <= 0 ? -E : I > x ? x + _ : I);
  }
  if (t.centerInsufficientSlides) {
    let b = 0;
    v.forEach((I) => {
      b += I + (S || 0);
    }), b -= S;
    const x = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
    if (b + x < s) {
      const I = (s - b - x) / 2;
      h.forEach((A, N) => {
        h[N] = A - I;
      }), p.forEach((A, N) => {
        p[N] = A + I;
      });
    }
  }
  if (Object.assign(r, {
    slides: d,
    snapGrid: h,
    slidesGrid: p,
    slidesSizesGrid: v
  }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
    Ye(n, "--swiper-centered-offset-before", `${-h[0]}px`), Ye(n, "--swiper-centered-offset-after", `${r.size / 2 - v[v.length - 1] / 2}px`);
    const b = -r.snapGrid[0], x = -r.slidesGrid[0];
    r.snapGrid = r.snapGrid.map((I) => I + b), r.slidesGrid = r.slidesGrid.map((I) => I + x);
  }
  if (f !== c && r.emit("slidesLengthChange"), h.length !== g && (r.params.watchOverflow && r.checkOverflow(), r.emit("snapGridLengthChange")), p.length !== w && r.emit("slidesGridLengthChange"), t.watchSlidesProgress && r.updateSlidesOffset(), r.emit("slidesUpdated"), !o && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
    const b = `${t.containerModifierClass}backface-hidden`, x = r.el.classList.contains(b);
    f <= t.maxBackfaceHiddenSlides ? x || r.el.classList.add(b) : x && r.el.classList.remove(b);
  }
}
function Mi(r) {
  const e = this, t = [], n = e.virtual && e.params.virtual.enabled;
  let i = 0, s;
  typeof r == "number" ? e.setTransition(r) : r === !0 && e.setTransition(e.params.speed);
  const l = (a) => n ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((a) => {
        t.push(a);
      });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const a = e.activeIndex + s;
        if (a > e.slides.length && !n) break;
        t.push(l(a));
      }
  else
    t.push(l(e.activeIndex));
  for (s = 0; s < t.length; s += 1)
    if (typeof t[s] < "u") {
      const a = t[s].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (e.wrapperEl.style.height = `${i}px`);
}
function Li() {
  const r = this, e = r.slides, t = r.isElement ? r.isHorizontal() ? r.wrapperEl.offsetLeft : r.wrapperEl.offsetTop : 0;
  for (let n = 0; n < e.length; n += 1)
    e[n].swiperSlideOffset = (r.isHorizontal() ? e[n].offsetLeft : e[n].offsetTop) - t - r.cssOverflowAdjustment();
}
const Xr = (r, e, t) => {
  e && !r.classList.contains(t) ? r.classList.add(t) : !e && r.classList.contains(t) && r.classList.remove(t);
};
function Ni(r) {
  r === void 0 && (r = this && this.translate || 0);
  const e = this, t = e.params, {
    slides: n,
    rtlTranslate: i,
    snapGrid: s
  } = e;
  if (n.length === 0) return;
  typeof n[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let l = -r;
  i && (l = r), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let a = t.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < n.length; o += 1) {
    const c = n[o];
    let d = c.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (d -= n[0].swiperSlideOffset);
    const f = (l + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + a), h = (l - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + a), p = -(l - d), v = p + e.slidesSizesGrid[o], E = p >= 0 && p <= e.size - e.slidesSizesGrid[o], _ = p >= 0 && p < e.size - 1 || v > 1 && v <= e.size || p <= 0 && v >= e.size;
    _ && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(o)), Xr(c, _, t.slideVisibleClass), Xr(c, E, t.slideFullyVisibleClass), c.progress = i ? -f : f, c.originalProgress = i ? -h : h;
  }
}
function Di(r) {
  const e = this;
  if (typeof r > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    r = e && e.translate && e.translate * d || 0;
  }
  const t = e.params, n = e.maxTranslate() - e.minTranslate();
  let {
    progress: i,
    isBeginning: s,
    isEnd: l,
    progressLoop: a
  } = e;
  const o = s, c = l;
  if (n === 0)
    i = 0, s = !0, l = !0;
  else {
    i = (r - e.minTranslate()) / n;
    const d = Math.abs(r - e.minTranslate()) < 1, f = Math.abs(r - e.maxTranslate()) < 1;
    s = d || i <= 0, l = f || i >= 1, d && (i = 0), f && (i = 1);
  }
  if (t.loop) {
    const d = e.getSlideIndexByData(0), f = e.getSlideIndexByData(e.slides.length - 1), h = e.slidesGrid[d], p = e.slidesGrid[f], v = e.slidesGrid[e.slidesGrid.length - 1], E = Math.abs(r);
    E >= h ? a = (E - h) / v : a = (E + v - p) / v, a > 1 && (a -= 1);
  }
  Object.assign(e, {
    progress: i,
    progressLoop: a,
    isBeginning: s,
    isEnd: l
  }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(r), s && !o && e.emit("reachBeginning toEdge"), l && !c && e.emit("reachEnd toEdge"), (o && !s || c && !l) && e.emit("fromEdge"), e.emit("progress", i);
}
const Ft = (r, e, t) => {
  e && !r.classList.contains(t) ? r.classList.add(t) : !e && r.classList.contains(t) && r.classList.remove(t);
};
function ji() {
  const r = this, {
    slides: e,
    params: t,
    slidesEl: n,
    activeIndex: i
  } = r, s = r.virtual && t.virtual.enabled, l = r.grid && t.grid && t.grid.rows > 1, a = (f) => me(n, `.${t.slideClass}${f}, swiper-slide${f}`)[0];
  let o, c, d;
  if (s)
    if (t.loop) {
      let f = i - r.virtual.slidesBefore;
      f < 0 && (f = r.virtual.slides.length + f), f >= r.virtual.slides.length && (f -= r.virtual.slides.length), o = a(`[data-swiper-slide-index="${f}"]`);
    } else
      o = a(`[data-swiper-slide-index="${i}"]`);
  else
    l ? (o = e.filter((f) => f.column === i)[0], d = e.filter((f) => f.column === i + 1)[0], c = e.filter((f) => f.column === i - 1)[0]) : o = e[i];
  o && (l || (d = Ti(o, `.${t.slideClass}, swiper-slide`)[0], t.loop && !d && (d = e[0]), c = Si(o, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c === 0 && (c = e[e.length - 1]))), e.forEach((f) => {
    Ft(f, f === o, t.slideActiveClass), Ft(f, f === d, t.slideNextClass), Ft(f, f === c, t.slidePrevClass);
  }), r.emitSlidesClasses();
}
const Ke = (r, e) => {
  if (!r || r.destroyed || !r.params) return;
  const t = () => r.isElement ? "swiper-slide" : `.${r.params.slideClass}`, n = e.closest(t());
  if (n) {
    let i = n.querySelector(`.${r.params.lazyPreloaderClass}`);
    !i && r.isElement && (n.shadowRoot ? i = n.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      n.shadowRoot && (i = n.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`), i && i.remove());
    })), i && i.remove();
  }
}, Vt = (r, e) => {
  if (!r.slides[e]) return;
  const t = r.slides[e].querySelector('[loading="lazy"]');
  t && t.removeAttribute("loading");
}, $t = (r) => {
  if (!r || r.destroyed || !r.params) return;
  let e = r.params.lazyPreloadPrevNext;
  const t = r.slides.length;
  if (!t || !e || e < 0) return;
  e = Math.min(e, t);
  const n = r.params.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(r.params.slidesPerView), i = r.activeIndex;
  if (r.params.grid && r.params.grid.rows > 1) {
    const l = i, a = [l - e];
    a.push(...Array.from({
      length: e
    }).map((o, c) => l + n + c)), r.slides.forEach((o, c) => {
      a.includes(o.column) && Vt(r, c);
    });
    return;
  }
  const s = i + n - 1;
  if (r.params.rewind || r.params.loop)
    for (let l = i - e; l <= s + e; l += 1) {
      const a = (l % t + t) % t;
      (a < i || a > s) && Vt(r, a);
    }
  else
    for (let l = Math.max(i - e, 0); l <= Math.min(s + e, t - 1); l += 1)
      l !== i && (l > s || l < i) && Vt(r, l);
};
function ki(r) {
  const {
    slidesGrid: e,
    params: t
  } = r, n = r.rtlTranslate ? r.translate : -r.translate;
  let i;
  for (let s = 0; s < e.length; s += 1)
    typeof e[s + 1] < "u" ? n >= e[s] && n < e[s + 1] - (e[s + 1] - e[s]) / 2 ? i = s : n >= e[s] && n < e[s + 1] && (i = s + 1) : n >= e[s] && (i = s);
  return t.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function Gi(r) {
  const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: n,
    params: i,
    activeIndex: s,
    realIndex: l,
    snapIndex: a
  } = e;
  let o = r, c;
  const d = (p) => {
    let v = p - e.virtual.slidesBefore;
    return v < 0 && (v = e.virtual.slides.length + v), v >= e.virtual.slides.length && (v -= e.virtual.slides.length), v;
  };
  if (typeof o > "u" && (o = ki(e)), n.indexOf(t) >= 0)
    c = n.indexOf(t);
  else {
    const p = Math.min(i.slidesPerGroupSkip, o);
    c = p + Math.floor((o - p) / i.slidesPerGroup);
  }
  if (c >= n.length && (c = n.length - 1), o === s && !e.params.loop) {
    c !== a && (e.snapIndex = c, e.emit("snapIndexChange"));
    return;
  }
  if (o === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = d(o);
    return;
  }
  const f = e.grid && i.grid && i.grid.rows > 1;
  let h;
  if (e.virtual && i.virtual.enabled && i.loop)
    h = d(o);
  else if (f) {
    const p = e.slides.filter((E) => E.column === o)[0];
    let v = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(v) && (v = Math.max(e.slides.indexOf(p), 0)), h = Math.floor(v / i.grid.rows);
  } else if (e.slides[o]) {
    const p = e.slides[o].getAttribute("data-swiper-slide-index");
    p ? h = parseInt(p, 10) : h = o;
  } else
    h = o;
  Object.assign(e, {
    previousSnapIndex: a,
    snapIndex: c,
    previousRealIndex: l,
    realIndex: h,
    previousIndex: s,
    activeIndex: o
  }), e.initialized && $t(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (l !== h && e.emit("realIndexChange"), e.emit("slideChange"));
}
function zi(r, e) {
  const t = this, n = t.params;
  let i = r.closest(`.${n.slideClass}, swiper-slide`);
  !i && t.isElement && e && e.length > 1 && e.includes(r) && [...e.slice(e.indexOf(r) + 1, e.length)].forEach((a) => {
    !i && a.matches && a.matches(`.${n.slideClass}, swiper-slide`) && (i = a);
  });
  let s = !1, l;
  if (i) {
    for (let a = 0; a < t.slides.length; a += 1)
      if (t.slides[a] === i) {
        s = !0, l = a;
        break;
      }
  }
  if (i && s)
    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = l;
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  n.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
var Fi = {
  updateSize: Ci,
  updateSlides: Ii,
  updateAutoHeight: Mi,
  updateSlidesOffset: Li,
  updateSlidesProgress: Ni,
  updateProgress: Di,
  updateSlidesClasses: ji,
  updateActiveIndex: Gi,
  updateClickedSlide: zi
};
function Vi(r) {
  r === void 0 && (r = this.isHorizontal() ? "x" : "y");
  const e = this, {
    params: t,
    rtlTranslate: n,
    translate: i,
    wrapperEl: s
  } = e;
  if (t.virtualTranslate)
    return n ? -i : i;
  if (t.cssMode)
    return i;
  let l = Ei(s, r);
  return l += e.cssOverflowAdjustment(), n && (l = -l), l || 0;
}
function qi(r, e) {
  const t = this, {
    rtlTranslate: n,
    params: i,
    wrapperEl: s,
    progress: l
  } = t;
  let a = 0, o = 0;
  const c = 0;
  t.isHorizontal() ? a = n ? -r : r : o = r, i.roundLengths && (a = Math.floor(a), o = Math.floor(o)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? a : o, i.cssMode ? s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -a : -o : i.virtualTranslate || (t.isHorizontal() ? a -= t.cssOverflowAdjustment() : o -= t.cssOverflowAdjustment(), s.style.transform = `translate3d(${a}px, ${o}px, ${c}px)`);
  let d;
  const f = t.maxTranslate() - t.minTranslate();
  f === 0 ? d = 0 : d = (r - t.minTranslate()) / f, d !== l && t.updateProgress(r), t.emit("setTranslate", t.translate, e);
}
function Hi() {
  return -this.snapGrid[0];
}
function Ui() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Bi(r, e, t, n, i) {
  r === void 0 && (r = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), n === void 0 && (n = !0);
  const s = this, {
    params: l,
    wrapperEl: a
  } = s;
  if (s.animating && l.preventInteractionOnTransition)
    return !1;
  const o = s.minTranslate(), c = s.maxTranslate();
  let d;
  if (n && r > o ? d = o : n && r < c ? d = c : d = r, s.updateProgress(d), l.cssMode) {
    const f = s.isHorizontal();
    if (e === 0)
      a[f ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!s.support.smoothScroll)
        return un({
          swiper: s,
          targetPosition: -d,
          side: f ? "left" : "top"
        }), !0;
      a.scrollTo({
        [f ? "left" : "top"]: -d,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return e === 0 ? (s.setTransition(0), s.setTranslate(d), t && (s.emit("beforeTransitionStart", e, i), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(d), t && (s.emit("beforeTransitionStart", e, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(h) {
    !s || s.destroyed || h.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, s.animating = !1, t && s.emit("transitionEnd"));
  }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0;
}
var Wi = {
  getTranslate: Vi,
  setTranslate: qi,
  minTranslate: Hi,
  maxTranslate: Ui,
  translateTo: Bi
};
function $i(r, e) {
  const t = this;
  t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${r}ms`, t.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : ""), t.emit("setTransition", r, e);
}
function fn(r) {
  let {
    swiper: e,
    runCallbacks: t,
    direction: n,
    step: i
  } = r;
  const {
    activeIndex: s,
    previousIndex: l
  } = e;
  let a = n;
  if (a || (s > l ? a = "next" : s < l ? a = "prev" : a = "reset"), e.emit(`transition${i}`), t && s !== l) {
    if (a === "reset") {
      e.emit(`slideResetTransition${i}`);
      return;
    }
    e.emit(`slideChangeTransition${i}`), a === "next" ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`);
  }
}
function Xi(r, e) {
  r === void 0 && (r = !0);
  const t = this, {
    params: n
  } = t;
  n.cssMode || (n.autoHeight && t.updateAutoHeight(), fn({
    swiper: t,
    runCallbacks: r,
    direction: e,
    step: "Start"
  }));
}
function Yi(r, e) {
  r === void 0 && (r = !0);
  const t = this, {
    params: n
  } = t;
  t.animating = !1, !n.cssMode && (t.setTransition(0), fn({
    swiper: t,
    runCallbacks: r,
    direction: e,
    step: "End"
  }));
}
var Ki = {
  setTransition: $i,
  transitionStart: Xi,
  transitionEnd: Yi
};
function Qi(r, e, t, n, i) {
  r === void 0 && (r = 0), t === void 0 && (t = !0), typeof r == "string" && (r = parseInt(r, 10));
  const s = this;
  let l = r;
  l < 0 && (l = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: c,
    previousIndex: d,
    activeIndex: f,
    rtlTranslate: h,
    wrapperEl: p,
    enabled: v
  } = s;
  if (!v && !n && !i || s.destroyed || s.animating && a.preventInteractionOnTransition)
    return !1;
  typeof e > "u" && (e = s.params.speed);
  const E = Math.min(s.params.slidesPerGroupSkip, l);
  let _ = E + Math.floor((l - E) / s.params.slidesPerGroup);
  _ >= o.length && (_ = o.length - 1);
  const g = -o[_];
  if (a.normalizeSlideIndex)
    for (let S = 0; S < c.length; S += 1) {
      const m = -Math.floor(g * 100), T = Math.floor(c[S] * 100), O = Math.floor(c[S + 1] * 100);
      typeof c[S + 1] < "u" ? m >= T && m < O - (O - T) / 2 ? l = S : m >= T && m < O && (l = S + 1) : m >= T && (l = S);
    }
  if (s.initialized && l !== f && (!s.allowSlideNext && (h ? g > s.translate && g > s.minTranslate() : g < s.translate && g < s.minTranslate()) || !s.allowSlidePrev && g > s.translate && g > s.maxTranslate() && (f || 0) !== l))
    return !1;
  l !== (d || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(g);
  let w;
  if (l > f ? w = "next" : l < f ? w = "prev" : w = "reset", h && -g === s.translate || !h && g === s.translate)
    return s.updateActiveIndex(l), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), a.effect !== "slide" && s.setTranslate(g), w !== "reset" && (s.transitionStart(t, w), s.transitionEnd(t, w)), !1;
  if (a.cssMode) {
    const S = s.isHorizontal(), m = h ? g : -g;
    if (e === 0) {
      const T = s.virtual && s.params.virtual.enabled;
      T && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), T && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        p[S ? "scrollLeft" : "scrollTop"] = m;
      })) : p[S ? "scrollLeft" : "scrollTop"] = m, T && requestAnimationFrame(() => {
        s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1;
      });
    } else {
      if (!s.support.smoothScroll)
        return un({
          swiper: s,
          targetPosition: m,
          side: S ? "left" : "top"
        }), !0;
      p.scrollTo({
        [S ? "left" : "top"]: m,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return s.setTransition(e), s.setTranslate(g), s.updateActiveIndex(l), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(t, w), e === 0 ? s.transitionEnd(t, w) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(m) {
    !s || s.destroyed || m.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(t, w));
  }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0;
}
function Ji(r, e, t, n) {
  r === void 0 && (r = 0), t === void 0 && (t = !0), typeof r == "string" && (r = parseInt(r, 10));
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let l = r;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled)
      l = l + i.virtual.slidesBefore;
    else {
      let a;
      if (s) {
        const h = l * i.params.grid.rows;
        a = i.slides.filter((p) => p.getAttribute("data-swiper-slide-index") * 1 === h)[0].column;
      } else
        a = i.getSlideIndexByData(l);
      const o = s ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length, {
        centeredSlides: c
      } = i.params;
      let d = i.params.slidesPerView;
      d === "auto" ? d = i.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(i.params.slidesPerView, 10)), c && d % 2 === 0 && (d = d + 1));
      let f = o - a < d;
      if (c && (f = f || a < Math.ceil(d / 2)), n && c && i.params.slidesPerView !== "auto" && !s && (f = !1), f) {
        const h = c ? a < i.activeIndex ? "prev" : "next" : a - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
        i.loopFix({
          direction: h,
          slideTo: !0,
          activeSlideIndex: h === "next" ? a + 1 : a - o + 1,
          slideRealIndex: h === "next" ? i.realIndex : void 0
        });
      }
      if (s) {
        const h = l * i.params.grid.rows;
        l = i.slides.filter((p) => p.getAttribute("data-swiper-slide-index") * 1 === h)[0].column;
      } else
        l = i.getSlideIndexByData(l);
    }
  return requestAnimationFrame(() => {
    i.slideTo(l, e, t, n);
  }), i;
}
function Zi(r, e, t) {
  e === void 0 && (e = !0);
  const n = this, {
    enabled: i,
    params: s,
    animating: l
  } = n;
  if (!i || n.destroyed) return n;
  typeof r > "u" && (r = n.params.speed);
  let a = s.slidesPerGroup;
  s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
  const o = n.activeIndex < s.slidesPerGroupSkip ? 1 : a, c = n.virtual && s.virtual.enabled;
  if (s.loop) {
    if (l && !c && s.loopPreventsSliding) return !1;
    if (n.loopFix({
      direction: "next"
    }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && s.cssMode)
      return requestAnimationFrame(() => {
        n.slideTo(n.activeIndex + o, r, e, t);
      }), !0;
  }
  return s.rewind && n.isEnd ? n.slideTo(0, r, e, t) : n.slideTo(n.activeIndex + o, r, e, t);
}
function es(r, e, t) {
  e === void 0 && (e = !0);
  const n = this, {
    params: i,
    snapGrid: s,
    slidesGrid: l,
    rtlTranslate: a,
    enabled: o,
    animating: c
  } = n;
  if (!o || n.destroyed) return n;
  typeof r > "u" && (r = n.params.speed);
  const d = n.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !d && i.loopPreventsSliding) return !1;
    n.loopFix({
      direction: "prev"
    }), n._clientLeft = n.wrapperEl.clientLeft;
  }
  const f = a ? n.translate : -n.translate;
  function h(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
  }
  const p = h(f), v = s.map((g) => h(g));
  let E = s[v.indexOf(p) - 1];
  if (typeof E > "u" && i.cssMode) {
    let g;
    s.forEach((w, S) => {
      p >= w && (g = S);
    }), typeof g < "u" && (E = s[g > 0 ? g - 1 : g]);
  }
  let _ = 0;
  if (typeof E < "u" && (_ = l.indexOf(E), _ < 0 && (_ = n.activeIndex - 1), i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (_ = _ - n.slidesPerViewDynamic("previous", !0) + 1, _ = Math.max(_, 0))), i.rewind && n.isBeginning) {
    const g = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
    return n.slideTo(g, r, e, t);
  } else if (i.loop && n.activeIndex === 0 && i.cssMode)
    return requestAnimationFrame(() => {
      n.slideTo(_, r, e, t);
    }), !0;
  return n.slideTo(_, r, e, t);
}
function ts(r, e, t) {
  e === void 0 && (e = !0);
  const n = this;
  if (!n.destroyed)
    return typeof r > "u" && (r = n.params.speed), n.slideTo(n.activeIndex, r, e, t);
}
function rs(r, e, t, n) {
  e === void 0 && (e = !0), n === void 0 && (n = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof r > "u" && (r = i.params.speed);
  let s = i.activeIndex;
  const l = Math.min(i.params.slidesPerGroupSkip, s), a = l + Math.floor((s - l) / i.params.slidesPerGroup), o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[a]) {
    const c = i.snapGrid[a], d = i.snapGrid[a + 1];
    o - c > (d - c) * n && (s += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[a - 1], d = i.snapGrid[a];
    o - c <= (d - c) * n && (s -= i.params.slidesPerGroup);
  }
  return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, r, e, t);
}
function ns() {
  const r = this;
  if (r.destroyed) return;
  const {
    params: e,
    slidesEl: t
  } = r, n = e.slidesPerView === "auto" ? r.slidesPerViewDynamic() : e.slidesPerView;
  let i = r.clickedIndex, s;
  const l = r.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (r.animating) return;
    s = parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? i < r.loopedSlides - n / 2 || i > r.slides.length - r.loopedSlides + n / 2 ? (r.loopFix(), i = r.getSlideIndex(me(t, `${l}[data-swiper-slide-index="${s}"]`)[0]), Bt(() => {
      r.slideTo(i);
    })) : r.slideTo(i) : i > r.slides.length - n ? (r.loopFix(), i = r.getSlideIndex(me(t, `${l}[data-swiper-slide-index="${s}"]`)[0]), Bt(() => {
      r.slideTo(i);
    })) : r.slideTo(i);
  } else
    r.slideTo(i);
}
var is = {
  slideTo: Qi,
  slideToLoop: Ji,
  slideNext: Zi,
  slidePrev: es,
  slideReset: ts,
  slideToClosest: rs,
  slideToClickedSlide: ns
};
function ss(r) {
  const e = this, {
    params: t,
    slidesEl: n
  } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled) return;
  const i = () => {
    me(n, `.${t.slideClass}, swiper-slide`).forEach((f, h) => {
      f.setAttribute("data-swiper-slide-index", h);
    });
  }, s = e.grid && t.grid && t.grid.rows > 1, l = t.slidesPerGroup * (s ? t.grid.rows : 1), a = e.slides.length % l !== 0, o = s && e.slides.length % t.grid.rows !== 0, c = (d) => {
    for (let f = 0; f < d; f += 1) {
      const h = e.isElement ? Wt("swiper-slide", [t.slideBlankClass]) : Wt("div", [t.slideClass, t.slideBlankClass]);
      e.slidesEl.append(h);
    }
  };
  if (a) {
    if (t.loopAddBlankSlides) {
      const d = l - e.slides.length % l;
      c(d), e.recalcSlides(), e.updateSlides();
    } else
      Ze("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    i();
  } else if (o) {
    if (t.loopAddBlankSlides) {
      const d = t.grid.rows - e.slides.length % t.grid.rows;
      c(d), e.recalcSlides(), e.updateSlides();
    } else
      Ze("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    i();
  } else
    i();
  e.loopFix({
    slideRealIndex: r,
    direction: t.centeredSlides ? void 0 : "next"
  });
}
function os(r) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: n,
    setTranslate: i,
    activeSlideIndex: s,
    byController: l,
    byMousewheel: a
  } = r === void 0 ? {} : r;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: d,
    allowSlideNext: f,
    slidesEl: h,
    params: p
  } = o, {
    centeredSlides: v
  } = p;
  if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && p.virtual.enabled) {
    t && (!p.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : p.centeredSlides && o.snapIndex < p.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)), o.allowSlidePrev = d, o.allowSlideNext = f, o.emit("loopFix");
    return;
  }
  let E = p.slidesPerView;
  E === "auto" ? E = o.slidesPerViewDynamic() : (E = Math.ceil(parseFloat(p.slidesPerView, 10)), v && E % 2 === 0 && (E = E + 1));
  const _ = p.slidesPerGroupAuto ? E : p.slidesPerGroup;
  let g = _;
  g % _ !== 0 && (g += _ - g % _), g += p.loopAdditionalSlides, o.loopedSlides = g;
  const w = o.grid && p.grid && p.grid.rows > 1;
  c.length < E + g ? Ze("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : w && p.grid.fill === "row" && Ze("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const S = [], m = [];
  let T = o.activeIndex;
  typeof s > "u" ? s = o.getSlideIndex(c.filter((A) => A.classList.contains(p.slideActiveClass))[0]) : T = s;
  const O = n === "next" || !n, C = n === "prev" || !n;
  let R = 0, M = 0;
  const b = w ? Math.ceil(c.length / p.grid.rows) : c.length, I = (w ? c[s].column : s) + (v && typeof i > "u" ? -E / 2 + 0.5 : 0);
  if (I < g) {
    R = Math.max(g - I, _);
    for (let A = 0; A < g - I; A += 1) {
      const N = A - Math.floor(A / b) * b;
      if (w) {
        const F = b - N - 1;
        for (let Y = c.length - 1; Y >= 0; Y -= 1)
          c[Y].column === F && S.push(Y);
      } else
        S.push(b - N - 1);
    }
  } else if (I + E > b - g) {
    M = Math.max(I - (b - g * 2), _);
    for (let A = 0; A < M; A += 1) {
      const N = A - Math.floor(A / b) * b;
      w ? c.forEach((F, Y) => {
        F.column === N && m.push(Y);
      }) : m.push(N);
    }
  }
  if (o.__preventObserver__ = !0, requestAnimationFrame(() => {
    o.__preventObserver__ = !1;
  }), C && S.forEach((A) => {
    c[A].swiperLoopMoveDOM = !0, h.prepend(c[A]), c[A].swiperLoopMoveDOM = !1;
  }), O && m.forEach((A) => {
    c[A].swiperLoopMoveDOM = !0, h.append(c[A]), c[A].swiperLoopMoveDOM = !1;
  }), o.recalcSlides(), p.slidesPerView === "auto" ? o.updateSlides() : w && (S.length > 0 && C || m.length > 0 && O) && o.slides.forEach((A, N) => {
    o.grid.updateSlide(N, A, o.slides);
  }), p.watchSlidesProgress && o.updateSlidesOffset(), t) {
    if (S.length > 0 && C) {
      if (typeof e > "u") {
        const A = o.slidesGrid[T], F = o.slidesGrid[T + R] - A;
        a ? o.setTranslate(o.translate - F) : (o.slideTo(T + Math.ceil(R), 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - F, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - F));
      } else if (i) {
        const A = w ? S.length / p.grid.rows : S.length;
        o.slideTo(o.activeIndex + A, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate;
      }
    } else if (m.length > 0 && O)
      if (typeof e > "u") {
        const A = o.slidesGrid[T], F = o.slidesGrid[T - M] - A;
        a ? o.setTranslate(o.translate - F) : (o.slideTo(T - M, 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - F, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - F));
      } else {
        const A = w ? m.length / p.grid.rows : m.length;
        o.slideTo(o.activeIndex - A, 0, !1, !0);
      }
  }
  if (o.allowSlidePrev = d, o.allowSlideNext = f, o.controller && o.controller.control && !l) {
    const A = {
      slideRealIndex: e,
      direction: n,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0
    };
    Array.isArray(o.controller.control) ? o.controller.control.forEach((N) => {
      !N.destroyed && N.params.loop && N.loopFix({
        ...A,
        slideTo: N.params.slidesPerView === p.slidesPerView ? t : !1
      });
    }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
      ...A,
      slideTo: o.controller.control.params.slidesPerView === p.slidesPerView ? t : !1
    });
  }
  o.emit("loopFix");
}
function as() {
  const r = this, {
    params: e,
    slidesEl: t
  } = r;
  if (!e.loop || r.virtual && r.params.virtual.enabled) return;
  r.recalcSlides();
  const n = [];
  r.slides.forEach((i) => {
    const s = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
    n[s] = i;
  }), r.slides.forEach((i) => {
    i.removeAttribute("data-swiper-slide-index");
  }), n.forEach((i) => {
    t.append(i);
  }), r.recalcSlides(), r.slideTo(r.realIndex, 0);
}
var ls = {
  loopCreate: ss,
  loopFix: os,
  loopDestroy: as
};
function us(r) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = r ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function cs() {
  const r = this;
  r.params.watchOverflow && r.isLocked || r.params.cssMode || (r.isElement && (r.__preventObserver__ = !0), r[r.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", r.isElement && requestAnimationFrame(() => {
    r.__preventObserver__ = !1;
  }));
}
var ds = {
  setGrabCursor: us,
  unsetGrabCursor: cs
};
function fs(r, e) {
  e === void 0 && (e = this);
  function t(n) {
    if (!n || n === Oe() || n === ne()) return null;
    n.assignedSlot && (n = n.assignedSlot);
    const i = n.closest(r);
    return !i && !n.getRootNode ? null : i || t(n.getRootNode().host);
  }
  return t(e);
}
function Yr(r, e, t) {
  const n = ne(), {
    params: i
  } = r, s = i.edgeSwipeDetection, l = i.edgeSwipeThreshold;
  return s && (t <= l || t >= n.innerWidth - l) ? s === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function ps(r) {
  const e = this, t = Oe();
  let n = r;
  n.originalEvent && (n = n.originalEvent);
  const i = e.touchEventsData;
  if (n.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== n.pointerId)
      return;
    i.pointerId = n.pointerId;
  } else n.type === "touchstart" && n.targetTouches.length === 1 && (i.touchId = n.targetTouches[0].identifier);
  if (n.type === "touchstart") {
    Yr(e, n, n.targetTouches[0].pageX);
    return;
  }
  const {
    params: s,
    touches: l,
    enabled: a
  } = e;
  if (!a || !s.simulateTouch && n.pointerType === "mouse" || e.animating && s.preventInteractionOnTransition)
    return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let o = n.target;
  if (s.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(o) || "which" in n && n.which === 3 || "button" in n && n.button > 0 || i.isTouched && i.isMoved) return;
  const c = !!s.noSwipingClass && s.noSwipingClass !== "", d = n.composedPath ? n.composedPath() : n.path;
  c && n.target && n.target.shadowRoot && d && (o = d[0]);
  const f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`, h = !!(n.target && n.target.shadowRoot);
  if (s.noSwiping && (h ? fs(f, o) : o.closest(f))) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !o.closest(s.swipeHandler))
    return;
  l.currentX = n.pageX, l.currentY = n.pageY;
  const p = l.currentX, v = l.currentY;
  if (!Yr(e, n, p))
    return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), l.startX = p, l.startY = v, i.touchStartTime = Je(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1);
  let E = !0;
  o.matches(i.focusableElements) && (E = !1, o.nodeName === "SELECT" && (i.isTouched = !1)), t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== o && t.activeElement.blur();
  const _ = E && e.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || _) && !o.isContentEditable && n.preventDefault(), s.freeMode && s.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", n);
}
function hs(r) {
  const e = Oe(), t = this, n = t.touchEventsData, {
    params: i,
    touches: s,
    rtlTranslate: l,
    enabled: a
  } = t;
  if (!a || !i.simulateTouch && r.pointerType === "mouse") return;
  let o = r;
  if (o.originalEvent && (o = o.originalEvent), o.type === "pointermove" && (n.touchId !== null || o.pointerId !== n.pointerId))
    return;
  let c;
  if (o.type === "touchmove") {
    if (c = [...o.changedTouches].filter((O) => O.identifier === n.touchId)[0], !c || c.identifier !== n.touchId) return;
  } else
    c = o;
  if (!n.isTouched) {
    n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", o);
    return;
  }
  const d = c.pageX, f = c.pageY;
  if (o.preventedByNestedSwiper) {
    s.startX = d, s.startY = f;
    return;
  }
  if (!t.allowTouchMove) {
    o.target.matches(n.focusableElements) || (t.allowClick = !1), n.isTouched && (Object.assign(s, {
      startX: d,
      startY: f,
      currentX: d,
      currentY: f
    }), n.touchStartTime = Je());
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (t.isVertical()) {
      if (f < s.startY && t.translate <= t.maxTranslate() || f > s.startY && t.translate >= t.minTranslate()) {
        n.isTouched = !1, n.isMoved = !1;
        return;
      }
    } else if (d < s.startX && t.translate <= t.maxTranslate() || d > s.startX && t.translate >= t.minTranslate())
      return;
  }
  if (e.activeElement && o.target === e.activeElement && o.target.matches(n.focusableElements)) {
    n.isMoved = !0, t.allowClick = !1;
    return;
  }
  n.allowTouchCallbacks && t.emit("touchMove", o), s.previousX = s.currentX, s.previousY = s.currentY, s.currentX = d, s.currentY = f;
  const h = s.currentX - s.startX, p = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(h ** 2 + p ** 2) < t.params.threshold) return;
  if (typeof n.isScrolling > "u") {
    let O;
    t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : h * h + p * p >= 25 && (O = Math.atan2(Math.abs(p), Math.abs(h)) * 180 / Math.PI, n.isScrolling = t.isHorizontal() ? O > i.touchAngle : 90 - O > i.touchAngle);
  }
  if (n.isScrolling && t.emit("touchMoveOpposite", o), typeof n.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (n.startMoving = !0), n.isScrolling || o.type === "touchmove" && n.preventTouchMoveFromPointerMove) {
    n.isTouched = !1;
    return;
  }
  if (!n.startMoving)
    return;
  t.allowClick = !1, !i.cssMode && o.cancelable && o.preventDefault(), i.touchMoveStopPropagation && !i.nested && o.stopPropagation();
  let v = t.isHorizontal() ? h : p, E = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), E = Math.abs(E) * (l ? 1 : -1)), s.diff = v, v *= i.touchRatio, l && (v = -v, E = -E);
  const _ = t.touchesDirection;
  t.swipeDirection = v > 0 ? "prev" : "next", t.touchesDirection = E > 0 ? "prev" : "next";
  const g = t.params.loop && !i.cssMode, w = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!n.isMoved) {
    if (g && w && t.loopFix({
      direction: t.swipeDirection
    }), n.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const O = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent(O);
    }
    n.allowMomentumBounce = !1, i.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", o);
  }
  let S;
  if ((/* @__PURE__ */ new Date()).getTime(), n.isMoved && n.allowThresholdMove && _ !== t.touchesDirection && g && w && Math.abs(v) >= 1) {
    Object.assign(s, {
      startX: d,
      startY: f,
      currentX: d,
      currentY: f,
      startTranslate: n.currentTranslate
    }), n.loopSwapReset = !0, n.startTranslate = n.currentTranslate;
    return;
  }
  t.emit("sliderMove", o), n.isMoved = !0, n.currentTranslate = v + n.startTranslate;
  let m = !0, T = i.resistanceRatio;
  if (i.touchReleaseOnEdges && (T = 0), v > 0 ? (g && w && !S && n.allowThresholdMove && n.currentTranslate > (i.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), n.currentTranslate > t.minTranslate() && (m = !1, i.resistance && (n.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + n.startTranslate + v) ** T))) : v < 0 && (g && w && !S && n.allowThresholdMove && n.currentTranslate < (i.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (i.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
  }), n.currentTranslate < t.maxTranslate() && (m = !1, i.resistance && (n.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - n.startTranslate - v) ** T))), m && (o.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (n.currentTranslate = n.startTranslate), i.threshold > 0)
    if (Math.abs(v) > i.threshold || n.allowThresholdMove) {
      if (!n.allowThresholdMove) {
        n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
        return;
      }
    } else {
      n.currentTranslate = n.startTranslate;
      return;
    }
  !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && t.freeMode || i.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(n.currentTranslate), t.setTranslate(n.currentTranslate));
}
function ms(r) {
  const e = this, t = e.touchEventsData;
  let n = r;
  n.originalEvent && (n = n.originalEvent);
  let i;
  if (n.type === "touchend" || n.type === "touchcancel") {
    if (i = [...n.changedTouches].filter((T) => T.identifier === t.touchId)[0], !i || i.identifier !== t.touchId) return;
  } else {
    if (t.touchId !== null || n.pointerId !== t.pointerId) return;
    i = n;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && !(["pointercancel", "contextmenu"].includes(n.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  t.pointerId = null, t.touchId = null;
  const {
    params: l,
    touches: a,
    rtlTranslate: o,
    slidesGrid: c,
    enabled: d
  } = e;
  if (!d || !l.simulateTouch && n.pointerType === "mouse") return;
  if (t.allowTouchCallbacks && e.emit("touchEnd", n), t.allowTouchCallbacks = !1, !t.isTouched) {
    t.isMoved && l.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
    return;
  }
  l.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const f = Je(), h = f - t.touchStartTime;
  if (e.allowClick) {
    const T = n.path || n.composedPath && n.composedPath();
    e.updateClickedSlide(T && T[0] || n.target, T), e.emit("tap click", n), h < 300 && f - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", n);
  }
  if (t.lastClickTime = Je(), Bt(() => {
    e.destroyed || (e.allowClick = !0);
  }), !t.isTouched || !t.isMoved || !e.swipeDirection || a.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    return;
  }
  t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
  let p;
  if (l.followFinger ? p = o ? e.translate : -e.translate : p = -t.currentTranslate, l.cssMode)
    return;
  if (l.freeMode && l.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: p
    });
    return;
  }
  const v = p >= -e.maxTranslate() && !e.params.loop;
  let E = 0, _ = e.slidesSizesGrid[0];
  for (let T = 0; T < c.length; T += T < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
    const O = T < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    typeof c[T + O] < "u" ? (v || p >= c[T] && p < c[T + O]) && (E = T, _ = c[T + O] - c[T]) : (v || p >= c[T]) && (E = T, _ = c[c.length - 1] - c[c.length - 2]);
  }
  let g = null, w = null;
  l.rewind && (e.isBeginning ? w = l.virtual && l.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (g = 0));
  const S = (p - c[E]) / _, m = E < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
  if (h > l.longSwipesMs) {
    if (!l.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (S >= l.longSwipesRatio ? e.slideTo(l.rewind && e.isEnd ? g : E + m) : e.slideTo(E)), e.swipeDirection === "prev" && (S > 1 - l.longSwipesRatio ? e.slideTo(E + m) : w !== null && S < 0 && Math.abs(S) > l.longSwipesRatio ? e.slideTo(w) : e.slideTo(E));
  } else {
    if (!l.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (n.target === e.navigation.nextEl || n.target === e.navigation.prevEl) ? n.target === e.navigation.nextEl ? e.slideTo(E + m) : e.slideTo(E) : (e.swipeDirection === "next" && e.slideTo(g !== null ? g : E + m), e.swipeDirection === "prev" && e.slideTo(w !== null ? w : E));
  }
}
function Kr() {
  const r = this, {
    params: e,
    el: t
  } = r;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && r.setBreakpoint();
  const {
    allowSlideNext: n,
    allowSlidePrev: i,
    snapGrid: s
  } = r, l = r.virtual && r.params.virtual.enabled;
  r.allowSlideNext = !0, r.allowSlidePrev = !0, r.updateSize(), r.updateSlides(), r.updateSlidesClasses();
  const a = l && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && r.isEnd && !r.isBeginning && !r.params.centeredSlides && !a ? r.slideTo(r.slides.length - 1, 0, !1, !0) : r.params.loop && !l ? r.slideToLoop(r.realIndex, 0, !1, !0) : r.slideTo(r.activeIndex, 0, !1, !0), r.autoplay && r.autoplay.running && r.autoplay.paused && (clearTimeout(r.autoplay.resizeTimeout), r.autoplay.resizeTimeout = setTimeout(() => {
    r.autoplay && r.autoplay.running && r.autoplay.paused && r.autoplay.resume();
  }, 500)), r.allowSlidePrev = i, r.allowSlideNext = n, r.params.watchOverflow && s !== r.snapGrid && r.checkOverflow();
}
function gs(r) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && r.preventDefault(), e.params.preventClicksPropagation && e.animating && (r.stopPropagation(), r.stopImmediatePropagation())));
}
function vs() {
  const r = this, {
    wrapperEl: e,
    rtlTranslate: t,
    enabled: n
  } = r;
  if (!n) return;
  r.previousTranslate = r.translate, r.isHorizontal() ? r.translate = -e.scrollLeft : r.translate = -e.scrollTop, r.translate === 0 && (r.translate = 0), r.updateActiveIndex(), r.updateSlidesClasses();
  let i;
  const s = r.maxTranslate() - r.minTranslate();
  s === 0 ? i = 0 : i = (r.translate - r.minTranslate()) / s, i !== r.progress && r.updateProgress(t ? -r.translate : r.translate), r.emit("setTranslate", r.translate, !1);
}
function Es(r) {
  const e = this;
  Ke(e, r.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function _s() {
  const r = this;
  r.documentTouchHandlerProceeded || (r.documentTouchHandlerProceeded = !0, r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"));
}
const pn = (r, e) => {
  const t = Oe(), {
    params: n,
    el: i,
    wrapperEl: s,
    device: l
  } = r, a = !!n.nested, o = e === "on" ? "addEventListener" : "removeEventListener", c = e;
  !i || typeof i == "string" || (t[o]("touchstart", r.onDocumentTouchStart, {
    passive: !1,
    capture: a
  }), i[o]("touchstart", r.onTouchStart, {
    passive: !1
  }), i[o]("pointerdown", r.onTouchStart, {
    passive: !1
  }), t[o]("touchmove", r.onTouchMove, {
    passive: !1,
    capture: a
  }), t[o]("pointermove", r.onTouchMove, {
    passive: !1,
    capture: a
  }), t[o]("touchend", r.onTouchEnd, {
    passive: !0
  }), t[o]("pointerup", r.onTouchEnd, {
    passive: !0
  }), t[o]("pointercancel", r.onTouchEnd, {
    passive: !0
  }), t[o]("touchcancel", r.onTouchEnd, {
    passive: !0
  }), t[o]("pointerout", r.onTouchEnd, {
    passive: !0
  }), t[o]("pointerleave", r.onTouchEnd, {
    passive: !0
  }), t[o]("contextmenu", r.onTouchEnd, {
    passive: !0
  }), (n.preventClicks || n.preventClicksPropagation) && i[o]("click", r.onClick, !0), n.cssMode && s[o]("scroll", r.onScroll), n.updateOnWindowResize ? r[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Kr, !0) : r[c]("observerUpdate", Kr, !0), i[o]("load", r.onLoad, {
    capture: !0
  }));
};
function Ss() {
  const r = this, {
    params: e
  } = r;
  r.onTouchStart = ps.bind(r), r.onTouchMove = hs.bind(r), r.onTouchEnd = ms.bind(r), r.onDocumentTouchStart = _s.bind(r), e.cssMode && (r.onScroll = vs.bind(r)), r.onClick = gs.bind(r), r.onLoad = Es.bind(r), pn(r, "on");
}
function Ts() {
  pn(this, "off");
}
var ws = {
  attachEvents: Ss,
  detachEvents: Ts
};
const Qr = (r, e) => r.grid && e.grid && e.grid.rows > 1;
function ys() {
  const r = this, {
    realIndex: e,
    initialized: t,
    params: n,
    el: i
  } = r, s = n.breakpoints;
  if (!s || s && Object.keys(s).length === 0) return;
  const l = r.getBreakpoint(s, r.params.breakpointsBase, r.el);
  if (!l || r.currentBreakpoint === l) return;
  const o = (l in s ? s[l] : void 0) || r.originalParams, c = Qr(r, n), d = Qr(r, o), f = r.params.grabCursor, h = o.grabCursor, p = n.enabled;
  c && !d ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), r.emitContainerClasses()) : !c && d && (i.classList.add(`${n.containerModifierClass}grid`), (o.grid.fill && o.grid.fill === "column" || !o.grid.fill && n.grid.fill === "column") && i.classList.add(`${n.containerModifierClass}grid-column`), r.emitContainerClasses()), f && !h ? r.unsetGrabCursor() : !f && h && r.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((S) => {
    if (typeof o[S] > "u") return;
    const m = n[S] && n[S].enabled, T = o[S] && o[S].enabled;
    m && !T && r[S].disable(), !m && T && r[S].enable();
  });
  const v = o.direction && o.direction !== n.direction, E = n.loop && (o.slidesPerView !== n.slidesPerView || v), _ = n.loop;
  v && t && r.changeDirection(), re(r.params, o);
  const g = r.params.enabled, w = r.params.loop;
  Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev
  }), p && !g ? r.disable() : !p && g && r.enable(), r.currentBreakpoint = l, r.emit("_beforeBreakpoint", o), t && (E ? (r.loopDestroy(), r.loopCreate(e), r.updateSlides()) : !_ && w ? (r.loopCreate(e), r.updateSlides()) : _ && !w && r.loopDestroy()), r.emit("breakpoint", o);
}
function bs(r, e, t) {
  if (e === void 0 && (e = "window"), !r || e === "container" && !t) return;
  let n = !1;
  const i = ne(), s = e === "window" ? i.innerHeight : t.clientHeight, l = Object.keys(r).map((a) => {
    if (typeof a == "string" && a.indexOf("@") === 0) {
      const o = parseFloat(a.substr(1));
      return {
        value: s * o,
        point: a
      };
    }
    return {
      value: a,
      point: a
    };
  });
  l.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < l.length; a += 1) {
    const {
      point: o,
      value: c
    } = l[a];
    e === "window" ? i.matchMedia(`(min-width: ${c}px)`).matches && (n = o) : c <= t.clientWidth && (n = o);
  }
  return n || "max";
}
var Ps = {
  setBreakpoint: ys,
  getBreakpoint: bs
};
function Rs(r, e) {
  const t = [];
  return r.forEach((n) => {
    typeof n == "object" ? Object.keys(n).forEach((i) => {
      n[i] && t.push(e + i);
    }) : typeof n == "string" && t.push(e + n);
  }), t;
}
function xs() {
  const r = this, {
    classNames: e,
    params: t,
    rtl: n,
    el: i,
    device: s
  } = r, l = Rs(["initialized", t.direction, {
    "free-mode": r.params.freeMode && t.freeMode.enabled
  }, {
    autoheight: t.autoHeight
  }, {
    rtl: n
  }, {
    grid: t.grid && t.grid.rows > 1
  }, {
    "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
  }, {
    android: s.android
  }, {
    ios: s.ios
  }, {
    "css-mode": t.cssMode
  }, {
    centered: t.cssMode && t.centeredSlides
  }, {
    "watch-progress": t.watchSlidesProgress
  }], t.containerModifierClass);
  e.push(...l), i.classList.add(...e), r.emitContainerClasses();
}
function Os() {
  const r = this, {
    el: e,
    classNames: t
  } = r;
  !e || typeof e == "string" || (e.classList.remove(...t), r.emitContainerClasses());
}
var As = {
  addClasses: xs,
  removeClasses: Os
};
function Cs() {
  const r = this, {
    isLocked: e,
    params: t
  } = r, {
    slidesOffsetBefore: n
  } = t;
  if (n) {
    const i = r.slides.length - 1, s = r.slidesGrid[i] + r.slidesSizesGrid[i] + n * 2;
    r.isLocked = r.size > s;
  } else
    r.isLocked = r.snapGrid.length === 1;
  t.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked), t.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked), e && e !== r.isLocked && (r.isEnd = !1), e !== r.isLocked && r.emit(r.isLocked ? "lock" : "unlock");
}
var Is = {
  checkOverflow: Cs
}, Jr = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function Ms(r, e) {
  return function(n) {
    n === void 0 && (n = {});
    const i = Object.keys(n)[0], s = n[i];
    if (typeof s != "object" || s === null) {
      re(e, n);
      return;
    }
    if (r[i] === !0 && (r[i] = {
      enabled: !0
    }), i === "navigation" && r[i] && r[i].enabled && !r[i].prevEl && !r[i].nextEl && (r[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && r[i] && r[i].enabled && !r[i].el && (r[i].auto = !0), !(i in r && "enabled" in s)) {
      re(e, n);
      return;
    }
    typeof r[i] == "object" && !("enabled" in r[i]) && (r[i].enabled = !0), r[i] || (r[i] = {
      enabled: !1
    }), re(e, n);
  };
}
const qt = {
  eventsEmitter: Ai,
  update: Fi,
  translate: Wi,
  transition: Ki,
  slide: is,
  loop: ls,
  grabCursor: ds,
  events: ws,
  breakpoints: Ps,
  checkOverflow: Is,
  classes: As
}, Ht = {};
class ue {
  constructor() {
    let e, t;
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? t = i[0] : [e, t] = i, t || (t = {}), t = re({}, t), e && !t.el && (t.el = e);
    const l = Oe();
    if (t.el && typeof t.el == "string" && l.querySelectorAll(t.el).length > 1) {
      const d = [];
      return l.querySelectorAll(t.el).forEach((f) => {
        const h = re({}, t, {
          el: f
        });
        d.push(new ue(h));
      }), d;
    }
    const a = this;
    a.__swiper__ = !0, a.support = cn(), a.device = dn({
      userAgent: t.userAgent
    }), a.browser = Ri(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
    const o = {};
    a.modules.forEach((d) => {
      d({
        params: t,
        swiper: a,
        extendParams: Ms(t, o),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a)
      });
    });
    const c = re({}, Jr, o);
    return a.params = re({}, c, Ht, t), a.originalParams = re({}, a.params), a.passedParams = re({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((d) => {
      a.on(d, a.params.on[d]);
    }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
      enabled: a.params.enabled,
      el: e,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return a.params.direction === "horizontal";
      },
      isVertical() {
        return a.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: a.params.allowSlideNext,
      allowSlidePrev: a.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: a.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: a.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), a.emit("_swiper"), a.params.init && a.init(), a;
  }
  getDirectionLabel(e) {
    return this.isHorizontal() ? e : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[e];
  }
  getSlideIndex(e) {
    const {
      slidesEl: t,
      params: n
    } = this, i = me(t, `.${n.slideClass}, swiper-slide`), s = Wr(i[0]);
    return Wr(e) - s;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter((t) => t.getAttribute("data-swiper-slide-index") * 1 === e)[0]);
  }
  recalcSlides() {
    const e = this, {
      slidesEl: t,
      params: n
    } = e;
    e.slides = me(t, `.${n.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
  }
  setProgress(e, t) {
    const n = this;
    e = Math.min(Math.max(e, 0), 1);
    const i = n.minTranslate(), l = (n.maxTranslate() - i) * e + i;
    n.translateTo(l, typeof t > "u" ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className.split(" ").filter((n) => n.indexOf("swiper") === 0 || n.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed ? "" : e.className.split(" ").filter((n) => n.indexOf("swiper-slide") === 0 || n.indexOf(t.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach((n) => {
      const i = e.getSlideClasses(n);
      t.push({
        slideEl: n,
        classNames: i
      }), e.emit("_slideClass", n, i);
    }), e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e, t) {
    e === void 0 && (e = "current"), t === void 0 && (t = !1);
    const n = this, {
      params: i,
      slides: s,
      slidesGrid: l,
      slidesSizesGrid: a,
      size: o,
      activeIndex: c
    } = n;
    let d = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let f = s[c] ? Math.ceil(s[c].swiperSlideSize) : 0, h;
      for (let p = c + 1; p < s.length; p += 1)
        s[p] && !h && (f += Math.ceil(s[p].swiperSlideSize), d += 1, f > o && (h = !0));
      for (let p = c - 1; p >= 0; p -= 1)
        s[p] && !h && (f += s[p].swiperSlideSize, d += 1, f > o && (h = !0));
    } else if (e === "current")
      for (let f = c + 1; f < s.length; f += 1)
        (t ? l[f] + a[f] - l[c] < o : l[f] - l[c] < o) && (d += 1);
    else
      for (let f = c - 1; f >= 0; f -= 1)
        l[c] - l[f] < o && (d += 1);
    return d;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: t,
      params: n
    } = e;
    n.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
      l.complete && Ke(e, l);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function i() {
      const l = e.rtlTranslate ? e.translate * -1 : e.translate, a = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let s;
    if (n.freeMode && n.freeMode.enabled && !n.cssMode)
      i(), n.autoHeight && e.updateAutoHeight();
    else {
      if ((n.slidesPerView === "auto" || n.slidesPerView > 1) && e.isEnd && !n.centeredSlides) {
        const l = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
        s = e.slideTo(l.length - 1, 0, !1, !0);
      } else
        s = e.slideTo(e.activeIndex, 0, !1, !0);
      s || i();
    }
    n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t) {
    t === void 0 && (t = !0);
    const n = this, i = n.params.direction;
    return e || (e = i === "horizontal" ? "vertical" : "horizontal"), e === i || e !== "horizontal" && e !== "vertical" || (n.el.classList.remove(`${n.params.containerModifierClass}${i}`), n.el.classList.add(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.forEach((s) => {
      e === "vertical" ? s.style.width = "" : s.style.height = "";
    }), n.emit("changeDirection"), t && n.update()), n;
  }
  changeLanguageDirection(e) {
    const t = this;
    t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let n = e || t.params.el;
    if (typeof n == "string" && (n = document.querySelector(n)), !n)
      return !1;
    n.swiper = t, n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
    const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(i()) : me(n, i())[0];
    return !l && t.params.createElements && (l = Wt("div", t.params.wrapperClass), n.append(l), me(n, `.${t.params.slideClass}`).forEach((a) => {
      l.append(a);
    })), Object.assign(t, {
      el: n,
      wrapperEl: l,
      slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : l,
      hostEl: t.isElement ? n.parentNode.host : n,
      mounted: !0,
      // RTL
      rtl: n.dir.toLowerCase() === "rtl" || Ee(n, "direction") === "rtl",
      rtlTranslate: t.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || Ee(n, "direction") === "rtl"),
      wrongRTL: Ee(l, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1) return t;
    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
    const i = [...t.el.querySelectorAll('[loading="lazy"]')];
    return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach((s) => {
      s.complete ? Ke(t, s) : s.addEventListener("load", (l) => {
        Ke(t, l.target);
      });
    }), $t(t), t.initialized = !0, $t(t), t.emit("init"), t.emit("afterInit"), t;
  }
  destroy(e, t) {
    e === void 0 && (e = !0), t === void 0 && (t = !0);
    const n = this, {
      params: i,
      el: s,
      wrapperEl: l,
      slides: a
    } = n;
    return typeof n.params > "u" || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), s && typeof s != "string" && s.removeAttribute("style"), l && l.removeAttribute("style"), a && a.length && a.forEach((o) => {
      o.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), o.removeAttribute("style"), o.removeAttribute("data-swiper-slide-index");
    })), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((o) => {
      n.off(o);
    }), e !== !1 && (n.el && typeof n.el != "string" && (n.el.swiper = null), gi(n)), n.destroyed = !0), null;
  }
  static extendDefaults(e) {
    re(Ht, e);
  }
  static get extendedDefaults() {
    return Ht;
  }
  static get defaults() {
    return Jr;
  }
  static installModule(e) {
    ue.prototype.__modules__ || (ue.prototype.__modules__ = []);
    const t = ue.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((t) => ue.installModule(t)), ue) : (ue.installModule(e), ue);
  }
}
Object.keys(qt).forEach((r) => {
  Object.keys(qt[r]).forEach((e) => {
    ue.prototype[e] = qt[r][e];
  });
});
ue.use([xi, Oi]);
De({});
export {
  Ns as DropdownContext,
  Ds as ModalHeader,
  js as OffcanvasContext,
  ks as PlayerContext,
  pi as PlayerState
};
