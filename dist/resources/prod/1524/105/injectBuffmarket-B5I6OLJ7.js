import{a as x}from"./chunk-S2GP43YS.js";import"./chunk-URWUNVTF.js";import{a as B}from"./chunk-I6ZSBYQ3.js";import{a as k}from"./chunk-YQ625XVJ.js";import{a as h}from"./chunk-VMCLSOZO.js";import"./chunk-PBUQY6G2.js";import{a as g}from"./chunk-LGNFNBOW.js";import"./chunk-MHWHHESW.js";import"./chunk-WVO4VYA4.js";import"./chunk-C63Q3HN7.js";import{a as i}from"./chunk-FMA2QB7F.js";import"./chunk-NRW7AT6T.js";import"./chunk-DPECAWNM.js";import"./chunk-NIOVFM2M.js";import"./chunk-6ZCA6D63.js";import"./chunk-YXAOTQ2S.js";import{a as p}from"./chunk-PJWDCLVE.js";import{b as l}from"./chunk-Q3ULPWYK.js";import{a}from"./chunk-SSAI4GAC.js";import{a as b}from"./chunk-JCK66TTB.js";import"./chunk-SY4ES3W2.js";import"./chunk-5ELKH2XV.js";import{a as m}from"./chunk-5ORZS6IQ.js";import{a as d}from"./chunk-BZJZQFW2.js";import"./chunk-VQDTHLUC.js";function n(t){return h({cmd:"buffmarket",...t})}function s(t){return n({subcmd:"buy",id:t})}function u(t){return x({cmd:"buffmarket",subcmd:"buy",id:t},"Request accepted - buffs have automatically been cast.")}function c(t){return k(s,u,t)}async function v(t,r){r.preventDefault(),a('<div class="fshWaiting">Loading...</div>',t);let e=g(new FormData(r.target)),o=await B(e),f=i("#buff-results",o);if(!f)return;let y=f.parentElement.innerHTML;a(y,t)}function w(t){let r=document.forms[0];m(r,"submit",d(v,t.parentNode))}async function F(t){t.stopPropagation();let r=p(/id=(?<id>\d+)/,t.target.getAttribute("onclick"));if(r){let e=t.target.parentNode;e.className="fshActionRow",a('<div class="fshSpin"><span class="fshSpinner"></span></div>',e);let o=await c(r);if(o?.s)a('<span class="fshBuffSuccess">Buffs have been applied</span>',e);else{let f=o?.e?.message??"Failed";a(`<span class="fshBuffFail">${f}</span>`,e)}}}function R(t){t.target.tagName==="INPUT"&&t.target.value==="Buy"&&F(t)}function S(){let t=i("#buff-results");t&&(w(t),b(l(),R,!0))}export{S as default};
//# sourceMappingURL=injectBuffmarket-B5I6OLJ7.js.map