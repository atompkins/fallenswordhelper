import{R as t,p as n,o as s,h as o,B as e,C as a,G as r,aL as i,Z as f}from"./calfSystem-3956a623.js"
import{d as c}from"./dontPost-e1ef8cf2.js"
import{c as u}from"./createTr-b5bd7f1d.js"
function l(t){t.preventDefault(),c(n)}function p(){const t=r("lastLadderReset")
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let n=Math.floor((i-t)/6e4)
const s=Math.floor(n/60)
return n%=60,`${f(s," hours, ")+n} mins`}(t)}function d(){const t=u()
return function(t){const n=t.insertCell(-1)
n.height=25,e("Last Reset:",n)}(t),function(t){const n=t.insertCell(-1)
n.align="right",a(p(),n)}(t),t}export default function(){!function(){const o=t('input[type="submit"]',n)
o&&s(o,l)}(),function(){const n=t("#pCC table"),s=d()
o(n,s)}()}
//# sourceMappingURL=ladder-51c27c15.js.map
