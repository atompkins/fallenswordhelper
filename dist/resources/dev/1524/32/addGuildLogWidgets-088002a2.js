import{H as s,g as e,p as a,ay as n,aB as r,M as o,B as i,A as t}from"./calfSystem-19a5d332.js"
import{d as c}from"./dataRows-22fc1a62.js"
import{p as l}from"./playerName-09521e4e.js"
import{s as f}from"./searchPlayerHref-abc9726c.js"
function d(s){return s?Number(s[1]):0}function p(s){s.className=""}function m(s){(function(s){const e=s.cells[2].innerHTML,a=/member\s<a\shref="index\.php\?cmd=profile&amp;player_id=(\d+)/.exec(e),n=/<a\shref="index\.php\?cmd=profile&amp;player_id=(\d+)/.exec(e),o=d(n),i=d(a)
return n&&o!==r()&&i!==r()})(s)&&(o(s.cells).forEach(p),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function u(s,e){const a=s.cells[2].innerHTML.split("'"),n=a[1]
a[1]=f(n),t(a.join("'"),s.cells[2]),function(s,e,a){e||a===l()||($(s).find("td").removeClass("row").css("font-size","xx-small"),s.style.color="gray")}(s,e,n)}function h(s){m(s),function(s){const e=i(s.cells[2]),a=e.includes("has invited the player");("'"===e.charAt(0)||a)&&u(s,a)}(s)}function y(){const s=e("td",a).find(n("Message"))
if(!s)return
const r=s.parentNode.parentNode.parentNode
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',c(r.rows,3,0).forEach(h)}function g(){s("hideNonPlayerGuildLogMessages")&&y()}export{g as a}
//# sourceMappingURL=addGuildLogWidgets-088002a2.js.map