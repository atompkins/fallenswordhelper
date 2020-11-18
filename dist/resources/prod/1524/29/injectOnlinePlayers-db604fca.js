import{aq as e,t as n,H as t,bg as a,a4 as s,a2 as l,Y as i,aT as r,x as o,o as f,f as u,v as c}from"./calfSystem-57628ebe.js"
import{n as h}from"./numberIsNaN-d1ebf732.js"
import{c as d}from"./currentGuildId-909a3fed.js"
import{i as p}from"./intValue-f94761c7.js"
import"./valueText-a430d398.js"
import{a as v,g as m}from"./levelHighlight-fdd81b7c.js"
import{g,s as y}from"./idb-5c863a6f.js"
import{l as M,p as L}from"./lvlTests-e021fa96.js"
import"./all-01203f8c.js"
import{l as x}from"./loadDataTables-5af23ae2.js"
import{o as P}from"./onlinePlayersPage-98bf6029.js"
function b(e,n){const t=$("<div/>").append(e[n][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),e[n][1],e[n][2],100*e[n][3]+e[n][4]+1]}let j,C
const R=[()=>j,e=>function(e){const n=e.match(a)
if(n)return Number(n[1])}(e[0])!==d(),e=>p(e[2])>=v(),e=>p(e[2])<=m()]
function I(e,n){(function(e){return R.every(n=>n(e))})(n)&&$("td",e).eq(2).addClass("lvlHighlight")}function q(e,n){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",e).DataTable(function(e){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:I,data:e,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(n))}function w(){C.draw()}function O(e){"fshMinLvl"!==e.target.id&&"fshMaxLvl"!==e.target.id||w()}function T(e,n){return parseInt($(e,n).val(),10)}function k(e,n){h(n)||i(e,n)}function N(e,n,t){const a=T("#fshMinLvl",e),s=T("#fshMaxLvl",e)
k("onlinePlayerMinLvl",a),k("onlinePlayerMaxLvl",s)
const i=l(p(t[2]),0)
return M(L,i,a,s)}let _,D,H,z
function G(a){D=a||{},function(e){$.fn.dataTable.ext.search.push(n(N,e)),$("#fshOutput",e).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(_),q(_,function(t){return e(t).map(n(b,t))}(D))}function S(e,n,t){const a=$("td",$(t)),s=a.eq(1).text();(function(e,n){return D[e]&&D[e][3]>n})(s,e)||(D[s]=function(e,n,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),e,n]}(e,n,a))}function A(e,n){z=function(e){return parseInt(e.parent().text().match(/(\d+)/g)[0],10)}(n)
for(let n=2;n<=z;n+=1)P(n).then(e)}function V(e){$("#fshOutput",_).append(e)}function W(e){V(" "+(H+1))
const t=c(e),a=$("#pCC input.custominput",t).first()
!function(e,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',e).parent().parent().parent().each(n(S,a))}(t,a),H+=1,1===H&&A(W,a),H===z&&(y("fsh_onlinePlayers",D),G(D))}function Y(e){"fshRefresh"===e.target.id&&($("#fshRefresh",_).hide(),H=0,D={},P(1).then(W),i("lastOnlineCheck",s),V("Parsing online players...")),"fshReset"===e.target.id&&function(e){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",e).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",e).val(r.onlinePlayerMaxLvl),w()}(_)}function B(){_.html(`<span><b>Online Players</b></span>${function(){const e=t("lastOnlineCheck")
return s-e>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-e)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),g("fsh_onlinePlayers").then(G),f(_[0],Y),u(_[0],"keyup",O)}function E(e){o()||(_=e?$(e):$("#pCC"),x().then(B))}export default E
//# sourceMappingURL=injectOnlinePlayers-db604fca.js.map
