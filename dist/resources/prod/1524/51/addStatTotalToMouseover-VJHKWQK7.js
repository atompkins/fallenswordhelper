import{a as d}from"./chunk-73DVOOSI.js";import{a as u}from"./chunk-YWERNJPH.js";import"./chunk-WPSD22KE.js";import{a as s}from"./chunk-57PZ6XJI.js";import{a as m}from"./chunk-IRFQ4Q6M.js";import"./chunk-FXN5JGBL.js";import{a}from"./chunk-AN443625.js";import"./chunk-UICWONBW.js";import{a as i}from"./chunk-ZLI5KJBW.js";import"./chunk-EUBCJC2U.js";import"./chunk-UWAT3VA7.js";import{a as c}from"./chunk-XQ3ZEJ26.js";import"./chunk-PO34EML4.js";import"./chunk-QFSH2B2J.js";import"./chunk-2PFHY365.js";import"./chunk-3IGXKFMQ.js";import{a as l}from"./chunk-TDNJGM62.js";import{a as f}from"./chunk-TP7JP7VV.js";import"./chunk-YNXRNCRL.js";import"./chunk-7DPOBF7C.js";import{a as o}from"./chunk-DEDCEYVR.js";function T(t){return t.cells[1]&&f(t.cells[1])}function g(t,e,r){let n=a(e.cells[0]).replace(":","");return n&&(t[n]={ind:r},T(e)&&(t[n].value=Number(a(e.cells[1]).replace("+","")))),t}function p(t,e){return e[t]&&e[t].value?e[t].value:0}function h(t,e){return t.Enhancements?e.rows[t.Enhancements.ind-1]:e.rows[e.rows.length-1]}function B(t,e,r){return e+p(r,t)}function x(t){return["Attack","Defense","Armor","Damage","HP"].reduce(o(B,t),0)}function y(t){let e=u(t),r=l(e.rows).reduce(g,{}),n=x(r);d(h(r,e),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function H(t){let e=c();return i(e,t),s("font",e).filter(m("Bonuses")).forEach(y),e.innerHTML}function v(t){t.url.startsWith("fetchitem")&&(t.dataFilter=H)}function D(){$.ajaxPrefilter(v)}export{D as default};
//# sourceMappingURL=addStatTotalToMouseover-VJHKWQK7.js.map