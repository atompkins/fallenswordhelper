import{a as n,b as B,c as a,d as E}from"./chunk-KAXMF3XG.js";import{a as w,b as S}from"./chunk-YS53NYJW.js";import{a as y}from"./chunk-QBDSJF4P.js";import{a as k}from"./chunk-IGQKMDGJ.js";import{a as b}from"./chunk-PGNGZ7BH.js";import"./chunk-ABBYVZE2.js";import{f as h}from"./chunk-XP7MEXYI.js";import"./chunk-GKC6CNA3.js";import"./chunk-LXZINSYK.js";import"./chunk-XQ5CNAXG.js";import{a as U}from"./chunk-WNGRECU2.js";import"./chunk-7H3CUBDO.js";import"./chunk-5HIH63DD.js";import"./chunk-HPL7UHIJ.js";import{a as g}from"./chunk-YZLKCQP2.js";import"./chunk-KXW7HYGX.js";import{b as p}from"./chunk-IYHXDIFW.js";import"./chunk-RC4NT5JT.js";import"./chunk-AIP6BPK2.js";import"./chunk-EQPMHYZD.js";import{a as d}from"./chunk-C34SKZ6F.js";import"./chunk-TMODYEZT.js";import"./chunk-4AN7KDFP.js";import"./chunk-WERDHZX6.js";import"./chunk-7RQZYKTJ.js";import{a as m}from"./chunk-XJ4CM2CH.js";import"./chunk-6LZRRVCI.js";import"./chunk-2A4DWP7Z.js";import"./chunk-X7LACEVL.js";import"./chunk-UG6Q3XWI.js";import"./chunk-D5AS4V7F.js";import"./chunk-WUYDXKAM.js";import"./chunk-5XAAMTXP.js";import"./chunk-O5LMDCSL.js";import"./chunk-T5PPVP6C.js";import"./chunk-4LLJDNLH.js";import{a as T}from"./chunk-J3KBZ4ZI.js";import{a as f}from"./chunk-PYNBBPHV.js";import"./chunk-BPFW3H66.js";import"./chunk-SRX5YX5V.js";import"./chunk-YZX6UUEO.js";import"./chunk-RLHOQMY5.js";import{a as C}from"./chunk-EGDIV5JD.js";import"./chunk-A6IIWQBH.js";import"./chunk-MC5JUWDN.js";import"./chunk-AACPE6UD.js";import{a as r}from"./chunk-SCZYWGQD.js";import"./chunk-AMPLIILU.js";import"./chunk-7JEA3TWT.js";import"./chunk-5BRYW4V3.js";import{a as u}from"./chunk-MJT5TAYX.js";function L(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(y)}function N(e){return[e.getUTCFullYear().toString()].concat(L(e))}function i(e){if(S(e))return w(N(e))}var l="enableSeTracker",o;function P(e,t){d(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${i(new Date(t[1]*1e3))}</td></tr>`)}function D(e){let t=b({className:"fshTTracker"}),s=k({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'});return m(t,s),e.forEach(u(P,s)),t}function c(){let t=p.lastElementChild.insertRow(-1).insertCell(-1);return t.colSpan=3,t}function R(e){let t=D(e);o=c(),m(o,t)}function x(e,t){return e[1]-t[1]}function H(){n&&n.se&&R(C(n.se).sort(x))}function F(){r.enableSeTracker?a().finally(H):(o&&(o.parentNode.remove(),o=!1),B())}function M(e){e.target.id===l&&(r.enableSeTracker=!r.enableSeTracker,g(l,r.enableSeTracker),F())}function j(){a().finally(H)}function v(){if(U())return;let e=c();e.height=20,e=c(),e.className="fshCenter",T(h(l),e),f(e,"change",M),r.enableSeTracker&&E().then(j)}export{v as default};
//# sourceMappingURL=superelite-5FU57O2G.js.map
