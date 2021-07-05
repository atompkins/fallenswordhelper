import{a as n}from"./allthen-f7cedfa7.js"
import{c as t}from"./closestTr-3eb9ff66.js"
import{ak as e,E as a,e as s,t as r,au as o,d as i,x as c,q as f,y as l,S as d,I as u,av as m,aw as p}from"./calfSystem-2172498b.js"
import{s as v,g as h}from"./idb-35c610a0.js"
import{i as b}from"./intValue-f11572ef.js"
import{c as g}from"./changeMinMax-98de10ec.js"
import{f as x,a as y,m as L,t as M}from"./assets-f2535d93.js"
import{l as T,p as j}from"./lvlTests-4de98bd5.js"
import{i as _}from"./interceptSubmit-2a47b722.js"
import{l as k}from"./loadDataTables-58c1f40d.js"
import{c as w}from"./currentGuildId-7d9d343b.js"
import{i as q}from"./isArray-be6d57af.js"
import{s as E}from"./setTipped-11c01061.js"
function F(n,e,[a,s]){const r=n.find((([,n])=>n===a))
return r&&(t(r[0]).style.backgroundColor="#ff0000",e[a]=s),e}let S,C
function D(){v(x,S)}function N(n,t){S=S||{},S.minLvl=n,S.maxLvl=t,D()}function I(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function A(){g(N,I)}function G(){N(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(S.minLvl),$("#fshMaxLvl").val(S.maxLvl),I()}function J(n){S=S||{},S.hideMoves=n.target.checked,D(),$(".moveMax").toggle(!n.target.checked)}function O(n,t){return!S||function(n,t){const e=S.minLvl,a=S.maxLvl,s=b(t[7])
return T(j,s,e,a)}(0,t)}function R(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(y)
!function(n){const t=$("#fshHideMoves",n)
S&&"hideMoves"in S&&(t.prop("checked",S.hideMoves),$(".moveMax").toggle(!S.hideMoves)),t.on("click",J)}(t),function(n){const t=$("#fshMinLvl",n)
S&&"minLvl"in S?t.val(S.minLvl):t.val(o.arenaMinLvl)}(t),function(n){const t=$("#fshMaxLvl",n)
S&&"maxLvl"in S?t.val(S.maxLvl):t.val(o.arenaMaxLvl)}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",A),$("#fshReset",n).on("click",G)}(t),$("td",n).append(t)}function z(n,t){const a=/#\s(\d+)/.exec(t.eq(0).text());[a,S,S.id].every(e)&&(S.id[a[1]]=a[1],function(n,t){C&&!C[t]&&(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,a[1]))}function B(n,t){const e=/(\d)\.png/.exec($("img",t).attr("src"))
e&&$(t).attr("data-order",e[1])}function H(n,t){const e=L.exec($("img",n).attr("src"))
e&&(!function(n,t){S.moves[n[1]]&&3===S.moves[n[1]]&&t.addClass("moveMax")}(e,t),n.attr("data-order",e[1]))}function V(n,t){const e=$(t),a=e.children()
z(e,a),function(n){const t=n.eq(1),e=/(\d+)\s\/\s(\d+)/.exec(t.text())
e&&t.attr("data-order",100*(Number(e[1])-Number(e[2]))+Number(e[2]))}(a),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(a),function(n){n.slice(4,7).each(B)}(a),function(n,t){const e=n.eq(8)
S&&S.moves&&H(e,t)}(a,e),function(n){const t=n.eq(8)
1===t.children(i).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(a)}const K=n=>[n,Number(n.previousElementSibling.value)]
function P(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function Q(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function U(n){n&&n.classList&&n.classList.add("fshGray")}function W(n,[t,,e]){e&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(e=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t))&&3===e.max
var e})(n,e)&&U(t)}function X(n,t,e){E(e.players.map(r(Q,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,e){e.players.filter((t=>t.guild_id===n)).length===e.max_players/4&&U(t)}(n,t,e)}const Y=[e,n=>q(n.players),n=>n.players.length>0]
function Z(n,[t,,e]){Y.every((n=>n(e)))&&X(n,t,e)}function nn(n){if(!n||!n.s||!e(n.r))return
const t=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(K).map(r(P,n))}(n)
t.forEach(r(Z,w())),t.forEach(r(W,n))}const tn="td.sorting, td.sorting_asc, td.sorting_desc"
function en(n){const t=$(n.target).closest("td"),e=function(n){const t=n.attr("class"),e=/sorting([^\s]+)/.exec(t)
return e&&"_desc"===e[1]?"asc":"desc"}(t)
!function(n,t,e){const a=n.closest(i).DataTable()
3!==t?a.order([3,"asc"],[t,e]).draw():a.order([3,e]).draw()}(t,t.index(),e)}function an(n){return c(f({cmd:"arena"},n))}function sn(){return an({subcmd:"view"})}function rn(n,t){const e=$("tr",t).first()
$("a",e).contents().unwrap(),$(t).prepend($("<thead/>").append(e))}function on(){R(),D(),$.fn.dataTable.ext.search.push(O)}function cn(n,[t,o,i]){const c=$('table[width="635"]',n)
c.each(rn),function(n){S=n||{},C=S.id||{},S.id={}}(t),function(n){n.children("tbody").children("tr").each(V)}(c),function(n){if(!e(n))return
const t=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=s(n).reduce(r(F,t),{})
v("fsh_arenaFull",o)}(o),nn(i),on(),c.DataTable(M),function(n){$(tn,n).off("click"),n.on("click",tn,en)}(n)}function fn(n,t){const e=u("betaOptIn")
e&&m("arena.process"),a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),cn(n,t),_(),e&&p("arena.process")}function ln(){if(l())return
const t=$("#arenaTypeTabs")
1===t.length?function(t){n([h(x),h("fsh_arenaFull"),sn().catch((()=>({}))),k()],r(fn,t))}(t):d("arena","Join error screen ?")}var dn=Object.freeze({__proto__:null,default:ln})
export{an as a,dn as b,ln as i,sn as v}
//# sourceMappingURL=arena-52c6b605.js.map
