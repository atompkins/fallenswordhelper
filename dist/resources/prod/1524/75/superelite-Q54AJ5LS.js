import{a as B,b as L}from"./chunk-YOETQD6J.js";import{a as n,b as U,c as i,d as y}from"./chunk-J7OHLYT6.js";import"./chunk-NFO4O6GG.js";import{a as S}from"./chunk-HELZQNK5.js";import{a as b}from"./chunk-EM37UHQT.js";import{a as w}from"./chunk-PUFMFHIM.js";import{a as d}from"./chunk-ORWNE4WN.js";import"./chunk-UNRPYWV7.js";import"./chunk-JMVCQWLZ.js";import"./chunk-V5YPTNUP.js";import"./chunk-TANNOBPR.js";import{a}from"./chunk-MZYLPE6K.js";import"./chunk-QRYRLQTR.js";import{f as k}from"./chunk-SZSLBMHU.js";import"./chunk-VRFSPHR2.js";import"./chunk-6FE7TFOW.js";import"./chunk-BQN7JNLT.js";import"./chunk-LYLU7224.js";import"./chunk-JIDHIHQ2.js";import"./chunk-4TGPNPDH.js";import"./chunk-DGS2WOJV.js";import"./chunk-AXEF7ZPS.js";import"./chunk-GPIGDOJJ.js";import"./chunk-SGSSGBJU.js";import"./chunk-L2F37LJS.js";import"./chunk-RSW3SDQ5.js";import{a as g}from"./chunk-LXCNYPSV.js";import"./chunk-QMO3OQBJ.js";import"./chunk-Q2OGYUCV.js";import{a as h}from"./chunk-SUTTQBC4.js";import{b as p}from"./chunk-46TQQDHW.js";import{a as T}from"./chunk-O7BO2JV6.js";import"./chunk-K4FZKNLQ.js";import"./chunk-5CGQ343C.js";import"./chunk-CSUXSLMM.js";import{a as C}from"./chunk-OHRM7A4V.js";import{a as u}from"./chunk-TDFIT7OX.js";import"./chunk-I42VMRRO.js";import"./chunk-4OB64LT4.js";import"./chunk-UQIKKMNB.js";import"./chunk-UE3DRZE6.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import{a as s}from"./chunk-QKN4UTNB.js";import"./chunk-XAE2ZLZO.js";import"./chunk-L5JB47YP.js";import{a as r}from"./chunk-M4AU23DF.js";function H(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(S)}function P(e){return[e.getUTCFullYear().toString()].concat(H(e))}function l(e){if(L(e))return B(P(e))}var f="enableSeTracker",o;function R(e,t){d(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${l(new Date(t[1]*1e3))}</td></tr>`)}function E(e){let t=w({className:"fshTTracker"}),m=b({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'});return a(t,m),e.forEach(u(R,m)),t}function c(){let t=p.lastElementChild.insertRow(-1).insertCell(-1);return t.colSpan=3,t}function x(e){let t=E(e);o=c(),a(o,t)}function F(e,t){return e[1]-t[1]}function N(){n&&n.se&&x(C(n.se).sort(F))}function M(){r.enableSeTracker?i().finally(N):(o&&(o.parentNode.remove(),o=!1),U())}function v(e){e.target.id===f&&(r.enableSeTracker=!r.enableSeTracker,g(f,r.enableSeTracker),M())}function D(){i().finally(N)}function $(){if(h())return;let e=c();e.height=20,e=c(),e.className="fshCenter",T(k(f),e),s(e,"change",v),r.enableSeTracker&&y().then(D)}export{$ as default};
//# sourceMappingURL=superelite-Q54AJ5LS.js.map