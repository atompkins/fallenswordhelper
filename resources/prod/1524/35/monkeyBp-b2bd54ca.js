import{ay as a}from"./calfSystem-fe0ebf32.js"
let t
function n(){return t||(t=$("#backpackContainer").data("hcsBackpack")),t}const c=[]
let o
function e(a){const t=a._showPage
a._showPage=function(n,o){a.tabData&&(t.call(a,n,o),function(a){c.length>0&&c.forEach((t=>t(a)))}(a))},o=!0}function s(t,n){c.includes(n)||(o||e(t),a(n)&&c.push(n))}export{n as g,s as m}
//# sourceMappingURL=monkeyBp-b2bd54ca.js.map
