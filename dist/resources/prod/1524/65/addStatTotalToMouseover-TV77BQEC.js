import{a as d}from"./chunk-MUWGTARO.js";import"./chunk-P77B3UDN.js";import{a as c}from"./chunk-BHS5MMCL.js";import{a as i}from"./chunk-6F7QE44M.js";import"./chunk-DLQ3WG6P.js";import{a as u}from"./chunk-7XGA3GAK.js";import"./chunk-7YFKPLW2.js";import{a as m}from"./chunk-WOS23ZVA.js";import"./chunk-VQXNK7CC.js";import{a as o}from"./chunk-SGEJ7TQZ.js";import"./chunk-FPDB6HHT.js";import{a as f}from"./chunk-UZ5IF7X7.js";import"./chunk-BT4GCRJE.js";import{a as l}from"./chunk-ABZ54ON2.js";import"./chunk-KR2SDNOK.js";import"./chunk-KM3BDUKX.js";import"./chunk-UZF2DPM4.js";import"./chunk-PFETQSML.js";import{a}from"./chunk-E2LRFPD6.js";import{a as s}from"./chunk-R5WQFHT3.js";import"./chunk-3IHZF2GE.js";function T(t){return t.cells[1]&&l(t.cells[1])}function g(t,e,r){let n=o(e.cells[0]).replace(":","");return n&&(t[n]={ind:r},T(e)&&(t[n].value=Number(o(e.cells[1]).replace("+","")))),t}function h(t,e){return e[t]&&e[t].value?e[t].value:0}function p(t,e){return t.Enhancements?e.rows[t.Enhancements.ind-1]:e.rows[e.rows.length-1]}function x(t,e,r){return e+h(r,t)}function B(t){return["Attack","Defense","Armor","Damage","HP"].reduce(a(x,t),0)}function S(t){let e=d(t),r=s(e.rows).reduce(g,{}),n=B(r);c(p(r,e),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function v(t){let e=u();return i(e,t),f("font",e).filter(m("Bonuses")).forEach(S),e.innerHTML}function D(t){t.url.startsWith("fetchitem")&&(t.dataFilter=v)}function H(){$.ajaxPrefilter(D)}export{H as default};
//# sourceMappingURL=addStatTotalToMouseover-TV77BQEC.js.map