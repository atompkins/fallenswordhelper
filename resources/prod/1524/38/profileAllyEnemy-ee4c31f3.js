import{E as t,as as n,t as e,b as s,d as a,i as o,I as l}from"./calfSystem-7a1cce43.js"
function i(t,n){const e=n.parentNode,i=s(a,e.nextElementSibling).length-1
o(e,`<span class="fshBlue">&nbsp;${i.toString()}${function(t,n){return n&&n>=t?`/${n}`:""}(i,l(function(t){return t?"alliestotal":"enemiestotal"}(t)))}</span>`)}function r(){const s=t("#profileLeftColumn strong")
s.filter(n("Allies")).forEach(e(i,!0)),s.filter(n("Enemies")).forEach(e(i,!1))}export default r
//# sourceMappingURL=profileAllyEnemy-ee4c31f3.js.map
