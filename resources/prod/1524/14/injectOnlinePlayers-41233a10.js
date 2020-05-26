import{au as n,u as e,F as t,b2 as a,H as s,aK as l,a9 as i,a3 as r,bb as o,y as f,ag as u,o as c,e as h,w as d,ai as p}from"./calfSystem-d587d232.js"
import{n as v}from"./numberIsNaN-054e0c59.js"
import{b as m,p as g,c as y}from"./levelHighlight-5c499030.js"
import"./all-39781966.js"
import{l as M,p as L}from"./lvlTests-e4cca5f4.js"
import{l as P}from"./loadDataTables-043f4b86.js"
import{o as b}from"./onlinePlayersPage-653c2b05.js"
function x(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let C,R
const j=[()=>C,n=>function(n){const e=n.match(/;guild_id=([0-9]+)"/)
if(e)return Number(e[1])}(n[0])!==a(),n=>s(n[2])>=m,n=>s(n[2])<=g]
function w(n,e){(function(n){return j.every(e=>e(n))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}function I(n,e){C=t("highlightPlayersNearMyLvl"),R=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:w,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e))}function O(){R.draw()}function k(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||O()}function q(n,e){return parseInt($(n,e).val(),10)}function N(n,e){v(e)||r(n,e)}function _(n,e,t){const a=q("#fshMinLvl",n),l=q("#fshMaxLvl",n)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",l)
const r=i(s(t[2]),0)
return M(L,r,a,l)}let T,D,H,z
function S(a){D=a||{},function(n){$.fn.dataTable.ext.search.push(e(_,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(T),y(),I(T,function(t){return n(t).map(e(x,t))}(D))}function A(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return D[n]&&D[n][3]>e})(s,n)||(D[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function F(n,e){z=function(n){return parseInt(n.parent().text().match(/(\d+)/g)[0],10)}(e)
for(let e=2;e<=z;e+=1)b(e).then(n)}function G(n){$("#fshOutput",T).append(n)}function K(n){G(" "+(H+1))
const t=d(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(A,a))}(t,a),H+=1,1===H&&F(K,a),H===z&&(p("fsh_onlinePlayers",D),S(D))}function W(n){"fshRefresh"===n.target.id&&($("#fshRefresh",T).hide(),H=0,D={},b(1).then(K),r("lastOnlineCheck",l),G("Parsing online players...")),"fshReset"===n.target.id&&function(n){r("onlinePlayerMinLvl",o.onlinePlayerMinLvl),r("onlinePlayerMaxLvl",o.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(o.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(o.onlinePlayerMaxLvl),O()}(T)}function B(){T.html(`<span><b>Online Players</b></span>${function(){const n=t("lastOnlineCheck")
return l-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(l-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),u("fsh_onlinePlayers").then(S),c(T[0],W),h(T[0],"keyup",k)}export default function(n){f()||(T=n?$(n):$("#pCC"),P().then(B))}
//# sourceMappingURL=injectOnlinePlayers-41233a10.js.map