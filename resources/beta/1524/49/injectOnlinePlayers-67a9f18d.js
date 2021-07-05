import{a$ as n,t as e,I as t,bF as a,a9 as s,a5 as l,_ as i,av as r,y as o,o as f,f as u,v as c}from"./calfSystem-42f137cb.js"
import{c as d}from"./currentGuildId-d1f28a3b.js"
import{i as h}from"./intValue-f11572ef.js"
import{a as p,g as v}from"./levelHighlight-a04aadb3.js"
import{n as m}from"./numberIsNaN-9a364388.js"
import{l as g,p as y}from"./lvlTests-52345e92.js"
import{l as M}from"./loadDataTables-a189ddcc.js"
import{o as L}from"./onlinePlayersPage-f8824cef.js"
import{g as b,s as P}from"./idb-6beadc2c.js"
import"./asInt-ddca3e00.js"
import"./valueText-17fb88d7.js"
import"./all-bb953856.js"
function x(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let j,C
const I=[()=>j,n=>function(n){const e=n.match(a)
if(e)return Number(e[1])}(n[0])!==d(),n=>h(n[2])>=p(),n=>h(n[2])<=v()]
function R(n,e){(function(n){return I.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}function w(n,e){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:R,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e))}function O(){C.draw()}function k(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||O()}function q(n,e){return parseInt($(n,e).val(),10)}function N(n,e){m(e)||i(n,e)}function T(n,e,t){const a=q("#fshMinLvl",n),s=q("#fshMaxLvl",n)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",s)
const i=l(h(t[2]),0)
return g(y,i,a,s)}let _,D,z,G
function H(a){D=a||{},function(n){$.fn.dataTable.ext.search.push(e(T,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(_),w(_,function(t){return n(t).map(e(x,t))}(D))}function S(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return D[n]&&D[n][3]>e})(s,n)||(D[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function A(n,e){G=function(n){return parseInt(n.parent().text().match(/(\d+)/g)[0],10)}(e)
for(let e=2;e<=G;e+=1)L(e).then(n)}function F(n){$("#fshOutput",_).append(n)}function V(n){F(` ${z+1}`)
const t=c(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(S,a))}(t,a),z+=1,1===z&&A(V,a),z===G&&(P("fsh_onlinePlayers",D),H(D))}function W(n){"fshRefresh"===n.target.id&&($("#fshRefresh",_).hide(),z=0,D={},L(1).then(V),i("lastOnlineCheck",s),F("Parsing online players...")),"fshReset"===n.target.id&&function(n){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(r.onlinePlayerMaxLvl),O()}(_)}function B(){_.html(`<span><b>Online Players</b></span>${function(){const n=t("lastOnlineCheck")
return s-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),b("fsh_onlinePlayers").then(H),f(_[0],W),u(_[0],"keyup",k)}function E(n){o()||(_=n?$(n):$("#pCC"),M().then(B))}export default E
//# sourceMappingURL=injectOnlinePlayers-67a9f18d.js.map
