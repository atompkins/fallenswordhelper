import{u as n,v as t,x as e,$ as r}from"./calfSystem-26fbeaeb.js"
import{g as s,b as u}from"./getBuff-a12f30b7.js"
function a(n){const t=s(n)
return t?t.id:-1}function i(n,t){const e=(r=t)[3]||r[6]||r[7]
var r
let s=n.find((n=>n.player.name===e))
return s||(s={player:{name:e},casts:[],failed:[]},n.push(s)),t[1]?s.casts.push((n=>({id:a(n[1]),level:Number(n[2])}))(t)):s.failed.push(function(n){return n[4]?{id:a(n[4]),reason:n[5]}:{id:a(n[9]),reason:n[8]}}(t)),n}function c(n){return function(n){return{r:n.reduce(i,[]),s:!0}}(u(t(n)))}function f(t,e){return n({cmd:"quickbuff",subcmd:"activate",targetPlayers:t.join(),skills:e}).then(c)}function o(n,t){return e({cmd:"quickbuff",subcmd:"activate",username:n,skill:t})}function l(n,t){return r(o,f,n,t)}function d(n){return n.s&&1===n.r[0].casts.length}export{l as d,d as q}
//# sourceMappingURL=quickbuffSuccess-2c227824.js.map