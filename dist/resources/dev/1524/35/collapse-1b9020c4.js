import{N as o,t as n,o as t,a6 as e,z as c,f as r,a0 as a,aB as s}from"./calfSystem-186455ab.js"
import{h as f}from"./hideElement-2c661b2e.js"
import{t as i}from"./toggleForce-e38cb2b0.js"
const u=[]
let h,d
function w(o){f(o.row)}function p(o){o.rows.forEach(w),o.open=!1}function m(o){o.open&&p(o)}function l(){u.forEach(m)}function g(o){i(o.row,!1)}function E(o){o.rows.forEach(g),o.open=!0}function b(o){o.open||E(o)}function x(o){return"TR"===o.tagName?function(o){if(o.rowIndex%d==0)return o}(o):"TABLE"!==o.tagName?x(o.parentNode):void 0}function I(o){h&&function(o){const n=x(o.target)
if(!n)return
const t=n.rowIndex/d,e=u[t]
!1===e.open?(l(),E(e)):p(e)}(o)}function N(o,n,t,c){0===n&&(t.header=o,function(o){h&&o.classList.add("fshPoint")}(o),function(o,n){s(o)&&o(n)}(c.extraFn,o)),c.articleTest(n)&&(t.rows[n]=e(t[n],{}),t.rows[n].row=o,function(o,n){h?(f(o),n.open=!1):n.open=!0}(o,t))}function T(o,n){const t=n.rowIndex%d,c=(n.rowIndex-t)/d
u[c]=e(u[c],{})
const r=u[c]
r.rows=r.rows||[],N(n,t,r,o)}function j(o){o.header.classList.toggle("fshPoint")}function L(o){h=!h,a(o,h),h?l():u.forEach(b),u.forEach(j)}function B(e){d=e.headInd,function(o){const t=c(o)
h=t.checked,r(c(o),"change",n(L,o))}(e.prefName),o(e.theTable.rows).forEach(n(T,e)),t(e.theTable,I)}export{B as c}
//# sourceMappingURL=collapse-1b9020c4.js.map
