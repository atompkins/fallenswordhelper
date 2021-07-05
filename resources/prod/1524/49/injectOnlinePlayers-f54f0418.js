import{a_ as n,t,I as e,bE as a,a8 as s,a4 as l,Z as i,au as r,y as o,o as f,f as u,v as c}from"./calfSystem-2172498b.js"
import{c as d}from"./currentGuildId-7d9d343b.js"
import{i as h}from"./intValue-f11572ef.js"
import{a as p,g as v}from"./levelHighlight-58b71263.js"
import{n as m}from"./numberIsNaN-9a364388.js"
import{l as g,p as y}from"./lvlTests-4de98bd5.js"
import{l as M}from"./loadDataTables-58c1f40d.js"
import{o as L}from"./onlinePlayersPage-b3d56f36.js"
import{g as b,s as P}from"./idb-35c610a0.js"
import"./asInt-c78388ed.js"
import"./valueText-c5773d3b.js"
import"./all-bb953856.js"
function x(n,t){const e=$("<div/>").append(n[t][0])
return $("img",e).addClass("fshImgCntr"),[e.html(),n[t][1],n[t][2],100*n[t][3]+n[t][4]+1]}let j,C
const I=[()=>j,n=>function(n){const t=n.match(a)
if(t)return Number(t[1])}(n[0])!==d(),n=>h(n[2])>=p(),n=>h(n[2])<=v()]
function R(n,t){(function(n){return I.every((t=>t(n)))})(t)&&$("td",n).eq(2).addClass("lvlHighlight")}function w(n,t){j=e("highlightPlayersNearMyLvl"),C=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:R,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(t))}function O(){C.draw()}function k(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||O()}function q(n,t){return parseInt($(n,t).val(),10)}function N(n,t){m(t)||i(n,t)}function T(n,t,e){const a=q("#fshMinLvl",n),s=q("#fshMaxLvl",n)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",s)
const i=l(h(e[2]),0)
return g(y,i,a,s)}let _,D,z,G
function H(a){D=a||{},function(n){$.fn.dataTable.ext.search.push(t(T,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${e("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${e("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(_),w(_,function(e){return n(e).map(t(x,e))}(D))}function S(n,t,e){const a=$("td",$(e)),s=a.eq(1).text();(function(n,t){return D[n]&&D[n][3]>t})(s,n)||(D[s]=function(n,t,e){return[e.eq(0).html(),e.eq(1).html(),e.eq(2).text(),n,t]}(n,t,a))}function A(n,t){G=function(n){return parseInt(n.parent().text().match(/(\d+)/g)[0],10)}(t)
for(let t=2;t<=G;t+=1)L(t).then(n)}function E(n){$("#fshOutput",_).append(n)}function V(n){E(` ${z+1}`)
const e=c(n),a=$("#pCC input.custominput",e).first()
!function(n,e){const a=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(t(S,a))}(e,a),z+=1,1===z&&A(V,a),z===G&&(P("fsh_onlinePlayers",D),H(D))}function W(n){"fshRefresh"===n.target.id&&($("#fshRefresh",_).hide(),z=0,D={},L(1).then(V),i("lastOnlineCheck",s),E("Parsing online players...")),"fshReset"===n.target.id&&function(n){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(r.onlinePlayerMaxLvl),O()}(_)}function Z(){_.html(`<span><b>Online Players</b></span>${function(){const n=e("lastOnlineCheck")
return s-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),b("fsh_onlinePlayers").then(H),f(_[0],W),u(_[0],"keyup",k)}function B(n){o()||(_=n?$(n):$("#pCC"),M().then(Z))}export default B
//# sourceMappingURL=injectOnlinePlayers-f54f0418.js.map
