import{ap as o,t as n,o as t,a5 as e,z as c,f as r,_ as a,aL as f}from"./calfSystem-f7cf24f6.js"
import{h as s}from"./hideElement-3be61495.js"
import{t as i}from"./toggleForce-46f497a3.js"
const u=[]
let h,d
function p(o){s(o.row)}function w(o){o.rows.forEach(p),o.open=!1}function m(o){o.open&&w(o)}function l(){u.forEach(m)}function g(o){i(o.row,!1)}function E(o){o.rows.forEach(g),o.open=!0}function x(o){o.open||E(o)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%d==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function T(o){h&&function(o){const n=I(o.target)
if(!n)return
const t=n.rowIndex/d,e=u[t]
!1===e.open?(l(),E(e)):w(e)}(o)}function L(o,n,t,c){0===n&&(t.header=o,function(o){h&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(c.extraFn,o)),c.articleTest(n)&&(t.rows[n]=e(t[n],{}),t.rows[n].row=o,function(o,n){h?(s(o),n.open=!1):n.open=!0}(o,t))}function N(o,n){const t=n.rowIndex%d,c=(n.rowIndex-t)/d
u[c]=e(u[c],{})
const r=u[c]
r.rows=r.rows||[],L(n,t,r,o)}function b(o){o.header.classList.toggle("fshPoint")}function j(o){h=!h,a(o,h),h?l():u.forEach(x),u.forEach(b)}function F(e){d=e.headInd,function(o){const t=c(o)
h=t.checked,r(c(o),"change",n(j,o))}(e.prefName),o(e.theTable.rows).forEach(n(N,e)),t(e.theTable,T)}export{F as c}
//# sourceMappingURL=collapse-d106baba.js.map
