import{c as t}from"./createTr-2af648e3.js"
import{I as o,D as s,h as r,A as a,B as n,a6 as e,a7 as i}from"./calfSystem-03050396.js"
import{i as f}from"./interceptSubmit-3f95205d.js"
import{o as c}from"./outputFormat-4b739d33.js"
import"./formToUrl-ef9a2d78.js"
function u(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${c(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,a("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(u(),o)}(o),o}function m(){f(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
r(t,o)}()}export default m
//# sourceMappingURL=ladder-4f230dd4.js.map
