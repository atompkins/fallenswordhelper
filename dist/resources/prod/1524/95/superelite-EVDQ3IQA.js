import{a as L}from"./chunk-XR7MRUEK.js";import{a,b as U,c as l,d as y}from"./chunk-HQ257OF6.js";import"./chunk-ASBA3QDL.js";import{a as B}from"./chunk-NZU3F3TP.js";import"./chunk-WYMEZBL7.js";import"./chunk-2UL3S6G6.js";import"./chunk-TWHHUG4E.js";import{a as u}from"./chunk-DU4LUWGY.js";import"./chunk-N4PCIVE3.js";import{a as i}from"./chunk-XVTH24AL.js";import"./chunk-5AWGL262.js";import{c as k}from"./chunk-6NEU6UCN.js";import"./chunk-F5O454QA.js";import"./chunk-D4AVXNRB.js";import"./chunk-W5AN4HHX.js";import"./chunk-HEK53YUZ.js";import{b as n}from"./chunk-FJXTYPNU.js";import{a as g}from"./chunk-ACOFHTYC.js";import"./chunk-RVP3BZF7.js";import{a as w,b as S}from"./chunk-43ZAPYJX.js";import{a as b}from"./chunk-PK7Z5EJN.js";import"./chunk-FL4AZPOF.js";import"./chunk-7UPTHGH3.js";import"./chunk-4GU2HJD7.js";import"./chunk-BMHVDIFE.js";import"./chunk-XNL3JTED.js";import"./chunk-HNXEOKKJ.js";import"./chunk-PJX66I2Y.js";import"./chunk-WLWXTJVR.js";import"./chunk-YYW2XVVC.js";import{a as T}from"./chunk-LGXHSUMA.js";import{a as C}from"./chunk-N7DXDYBU.js";import"./chunk-DZSOBYW3.js";import"./chunk-2UTU3226.js";import"./chunk-OHH2RJOZ.js";import"./chunk-QLE5SOQY.js";import{a as h}from"./chunk-LGQTZIMH.js";import"./chunk-J4Q2WCPP.js";import"./chunk-PIMWUW3S.js";import"./chunk-S5SWZJQ4.js";import"./chunk-MEWLLVXN.js";import"./chunk-O2JBL2UU.js";import"./chunk-RGSHZW7Q.js";import"./chunk-232WRRJZ.js";import"./chunk-7VVRRHE4.js";import{a as p}from"./chunk-OQC4RYIZ.js";import"./chunk-WGISVX7D.js";import"./chunk-PC7TOLHT.js";import"./chunk-NVWIQHSW.js";import"./chunk-AVWEVNGS.js";import"./chunk-6C22U5JX.js";import{a as d}from"./chunk-VSTJBSW7.js";import"./chunk-3DLQUZR2.js";import"./chunk-BUBKPU26.js";import{a as r}from"./chunk-4P22QABU.js";function P(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(b)}function H(e){return[e.getUTCFullYear().toString()].concat(P(e))}function c(e){if(S(e))return w(H(e))}var f="enableSeTracker",o=0;function R(e,t){u(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${c(new Date(t[1]*1e3))}</td></tr>`)}function E(e){let t=B({className:"fshTTracker"}),s=L({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'});return i(t,s),e.forEach(p(R,s)),t}function m(){let t=n().lastElementChild.insertRow(-1).insertCell(-1);return t.colSpan=3,t}function x(e){let t=E(e);o=m(),i(o,t)}function F(e,t){return e[1]-t[1]}function N(){a()?.se&&x(T(a().se).sort(F))}function M(){r.enableSeTracker?l().finally(N):(o&&(o.parentNode.remove(),o=!1),U())}function j(e){e.target.id===f&&(r.enableSeTracker=!r.enableSeTracker,C(f,r.enableSeTracker),M())}function v(){l().finally(N)}function D(){let e=m();e.height=20,e=m(),e.className="fshCenter",g(k(f),e),d(e,"change",j)}function $(){h()||!n()||(D(),r.enableSeTracker&&y().then(v))}export{$ as default};
//# sourceMappingURL=superelite-EVDQ3IQA.js.map