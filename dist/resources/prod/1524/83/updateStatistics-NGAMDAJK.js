import{a as l}from"./chunk-4AXBZNTF.js";import{a as d}from"./chunk-KW4JDCFK.js";import"./chunk-LTRYMJWK.js";import{a as f}from"./chunk-AP6R76CB.js";import{a}from"./chunk-T6VFD3IX.js";import{a as m}from"./chunk-2U7PEDGC.js";import{a as n}from"./chunk-A4HIMH5N.js";import{a as r}from"./chunk-FIS7ZMBK.js";import"./chunk-5BP4JVZE.js";import"./chunk-LDDO6FQI.js";import"./chunk-FQ2MS6MU.js";import"./chunk-VGN4AH67.js";import"./chunk-PVNYCWKC.js";import{a as s}from"./chunk-V4PGHHTG.js";import"./chunk-BG6TMPV6.js";import"./chunk-KA75H6XT.js";import"./chunk-E2T4BRJB.js";import{va as i}from"./chunk-XMFVZQFS.js";var c=`.profile-stat-bonus { font-size: x-small; }
.fshCharStats { table-layout: fixed; }
.fshCharStats td:first-of-type { width: 22%; }
.fshCharStats td:nth-of-type(2) { width: 25%; }
.fshCharStats td:nth-of-type(3) { width: 18%; }
.fshCharStats td:nth-of-type(4) { width: 35%; }`;function u(t){let e=f(t);return e?` <div class="profile-stat-bonus">${e}</div>`:""}function y(t){let[e,o]=n("td",t);m(`<span id="${e.id}">${a(e.innerHTML.replace(/&nbsp;/g," "))}</span>${u(o)}`,t.parentNode)}var p=(t,e,o)=>s(`${e}[${o}]`,t).forEach(h=>h.removeAttribute(o));function b(t){p(t,"tr","style"),p(t,"td","width"),r("td[colspan]",t)?.removeAttribute("colspan")}function S(t){t.classList.add("fshCharStats"),b(t),s(i,t).forEach(y),d(l(c),t)}function C(){let t=r("#profileLeftColumn table");t&&S(t)}export{C as default};
//# sourceMappingURL=updateStatistics-NGAMDAJK.js.map