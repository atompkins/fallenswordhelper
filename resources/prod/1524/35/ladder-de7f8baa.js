import{c as t}from"./createTr-5b195f27.js"
import{I as o,D as s,h as r,A as n,B as e,a6 as a,a7 as i}from"./calfSystem-fe0ebf32.js"
import{i as c}from"./interceptSubmit-1425876c.js"
import{o as f}from"./outputFormat-4b739d33.js"
import"./formToUrl-487e3c2d.js"
function u(){const t=o(a)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,n("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",e(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
r(t,o)}()}export default m
//# sourceMappingURL=ladder-de7f8baa.js.map
