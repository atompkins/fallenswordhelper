import{a as d}from"./chunk-V477BLM5.js";import{a as c}from"./chunk-CWXSVY6O.js";import"./chunk-PXS4UF2I.js";import{a as i}from"./chunk-AH6ETHJX.js";import"./chunk-MOKJBRKZ.js";import{a as u}from"./chunk-KOGBQXFO.js";import"./chunk-FZSLHGK7.js";import{a as m}from"./chunk-K62ELWIR.js";import"./chunk-DB7VDZHZ.js";import{a as o}from"./chunk-D7DBYYVV.js";import"./chunk-UFDUIBPU.js";import{a as f}from"./chunk-UCL5WC26.js";import"./chunk-ZUUQECWA.js";import{a as s}from"./chunk-ULCOJYQQ.js";import{a as l}from"./chunk-5JKG2KXO.js";import"./chunk-TJDS7E3Q.js";import"./chunk-KYIDEWAX.js";import"./chunk-JUUMQFPG.js";import"./chunk-OPXVQRDJ.js";import{a}from"./chunk-KQGQROK7.js";import"./chunk-I6XFTTZH.js";function T(t){return t.cells[1]&&l(t.cells[1])}function g(t,e,r){let n=o(e.cells[0]).replace(":","");return n&&(t[n]={ind:r},T(e)&&(t[n].value=Number(o(e.cells[1]).replace("+","")))),t}function h(t,e){return e[t]&&e[t].value?e[t].value:0}function p(t,e){return t.Enhancements?e.rows[t.Enhancements.ind-1]:e.rows[e.rows.length-1]}function x(t,e,r){return e+h(r,t)}function B(t){return["Attack","Defense","Armor","Damage","HP"].reduce(a(x,t),0)}function S(t){let e=d(t),r=s(e.rows).reduce(g,{}),n=B(r);c(p(r,e),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function v(t){let e=u();return i(e,t),f("font",e).filter(m("Bonuses")).forEach(S),e.innerHTML}function D(t){t.url.startsWith("fetchitem")&&(t.dataFilter=v)}function H(){$.ajaxPrefilter(D)}export{H as default};
//# sourceMappingURL=addStatTotalToMouseover-ADA4HCCT.js.map