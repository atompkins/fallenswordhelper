import{a as n,aI as o}from"./calfSystem-e76f1a7d.js"
function e(n,o,e){return e&&performance.now()<n&&o<e.length}function t([r,a,f,c,s,m]){const i=performance.now()+r
let l=c
for(;e(i,l,f);)s(f[l],l,f),l+=1
l<f.length?n(a,t,[[r,a,f,l,s,m]]):function(e,t){o(t)&&n(e,t)}(a,m)}export{t as b}
//# sourceMappingURL=batch-64f65e71.js.map
