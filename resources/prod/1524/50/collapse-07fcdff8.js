import{ar as o,t as n,o as t,a4 as e,z as c,f as r,Z as a,aN as f}from"./calfSystem-365d90f3.js"
import{h as s}from"./hideElement-e21a7422.js"
import{t as i}from"./toggleForce-a9d00c58.js"
const u=[]
let h,d
function w(o){s(o.row)}function p(o){o.rows.forEach(w),o.open=!1}function m(o){o.open&&p(o)}function l(){u.forEach(m)}function g(o){i(o.row,!1)}function E(o){o.rows.forEach(g),o.open=!0}function x(o){o.open||E(o)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%d==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function N(o){h&&function(o){const n=I(o.target)
if(!n)return
const t=n.rowIndex/d,e=u[t]
!1===e.open?(l(),E(e)):p(e)}(o)}function T(o,n,t,c){0===n&&(t.header=o,function(o){h&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(c.extraFn,o)),c.articleTest(n)&&(t.rows[n]=e(t[n],{}),t.rows[n].row=o,function(o,n){h?(s(o),n.open=!1):n.open=!0}(o,t))}function j(o,n){const t=n.rowIndex%d,c=(n.rowIndex-t)/d
u[c]=e(u[c],{})
const r=u[c]
r.rows=r.rows||[],T(n,t,r,o)}function L(o){o.header.classList.toggle("fshPoint")}function b(o){h=!h,a(o,h),h?l():u.forEach(x),u.forEach(L)}function F(e){d=e.headInd,function(o){const t=c(o)
h=t.checked,r(c(o),"change",n(b,o))}(e.prefName),o(e.theTable.rows).forEach(n(j,e)),t(e.theTable,N)}export{F as c}
//# sourceMappingURL=collapse-07fcdff8.js.map
