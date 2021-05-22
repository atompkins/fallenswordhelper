import{$ as t,c as e,t as n,a4 as i,bk as s,bq as a,e as r,a3 as d,q as c,I as o,br as l,h as f,p as u,E as p,aW as h,ax as m,u as b,B as y,y as v,az as g,a as k,as as _,at as x}from"./calfSystem-a8d582b6.js"
import{a as I}from"./allthen-c5cfa8a4.js"
import{g as R}from"./guild-7b16d85c.js"
import{g as L}from"./takeItem-6c44f04f.js"
import{d as M}from"./daLoadInventory-727fd8a9.js"
import{g as E}from"./getInventory-32842db0.js"
import{i as S}from"./isArray-e57269b2.js"
import{c as j}from"./createTable-3028e219.js"
import{i as T}from"./isSelected-fb883928.js"
import{a as D,e as w,u as N}from"./useItem-77f9bd97.js"
import{d as A}from"./daAjaxSendItemsToRecipient-18e9f477.js"
import{s as q,g as G}from"./idb-d8c9a883.js"
import{c as P}from"./changeMinMax-1ab4ee0d.js"
import{d as U}from"./dialog-e5c57349.js"
import{i as C}from"./indexAjaxJson-f3656c2a.js"
import{m as O}from"./moveItem-3c4cb6ae.js"
import{h as W}from"./htmlResult-1c39a82b.js"
import{e as B}from"./errorDialog-48630d52.js"
import{q as F,a as V}from"./queue-3f7ae5b8.js"
import{e as H}from"./executeAll-4e27c022.js"
import{g as Q}from"./getMembrList-ba181b15.js"
import{l as Y}from"./loadDataTables-b7d1e76f.js"
import{n as z}from"./notLastUpdate-1f197514.js"
import{i as J}from"./intValue-66f66ba9.js"
import{l as X,p as K}from"./lvlTests-85cb2d7f.js"
import"./all-8d04560c.js"
import"./cmdExport-70bb9819.js"
import"./daUseItem-aa7b1f89.js"
import"./numberIsNaN-11f99b26.js"
import"./dialogMsg-227939ed.js"
import"./currentGuildId-6d2e1d9d.js"
function Z(){return R({subcmd:"fetchinv"})}function tt(){return L({subcmd2:"report"})}let et,nt=[]
function it(t){et=t}const st=t=>15===t.t
function at(t){S(t.r)&&(nt=Array.prototype.concat.apply([],t.r.map((t=>t.items))).filter(st))}function rt(t){S(t.r)&&(nt=nt.concat(t.r.filter(st)))}function dt(){return t(Z).then(rt)}function ct(){return t(tt).then(rt)}function ot(t,e){return e.a===t}function lt(t){if(15===t.type){const e=nt.find(n(ot,t.inv_id))
e&&(t.item_name=e.n)}}function ft(){et.items.forEach(lt)}function ut(){const t=[E().then(it)]
return"invmanagernew"===e.subcmd&&t.push(M().then(at)),"guildinvmgr"===e.subcmd&&(t.push(dt()),t.push(ct())),I(t,ft)}function pt(t,e){e.val(""),$(t).DataTable().search("").draw()}function ht(){et.folders&&(et.folders[-1]="Main")}const mt={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},bt='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td><input id="fshMinLvl" size="5" value="1"/></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td><td><input id="fshMaxLvl" size="5" value="9999"/></td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',yt={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},vt={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
function gt(t){return vt[t]?vt[t].abbr:""}function kt(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n)}function _t(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function $t(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${i(t.player_id,et.player_id)}" mode="1" action="recall">GS</span>`}function xt(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function It(t,e,n){return"display"===t?n(e):"GS"}function Rt(t,e){const n=function(t){return-1===t.player_id?4:_t(t)?7:1}(e),i=function(t,e,n){return t||(-1!==e?e:n)}(et.player_id,e.player_id,et.guild_id)
let r=t
e.equipped&&(r=`<b>${t}</b>`)
let d=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(d=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${s}${t}" class="fshInvItem tip-dynamic ${a[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${i}">${r}</a>${d}`}const Lt=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==et.current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===et.current_player_id}(t),(t,e)=>e.c]]
function Mt(t,e){const n=Lt.find((e=>e[0](t)))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function Et(t){return i(t.folder_id,t.player_id)}function St(t){return e.membrList[t]?e.membrList[t].username:"???"}function jt(t,e){return t[0]-e[0]}function Tt(t,e){return`<option value="${e[0]}"${T(Number(e[0]),t)}>${e[1]}</option>`}let Dt,wt,Nt
function At(t){Dt=c({},mt),c(Dt,i(t,{})),wt=o("showQuickDropLinks"),Nt=o("showQuickSendLinks")}const qt=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:Rt(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:Et,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":St(n.player_id)},display:function(t,e,i){return i.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${d}${t.player_id}">${St(t.player_id)}</a>`}(i):i.equipped?"Worn":`<select class="fshMoveItem" data-inv="${i.inv_id}">${s=i.folder_id,a=et.folders,r(a).sort(jt).map(n(Tt,s)).join("")}</select>`
var s,a},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":St(t.player_id)}(n):n.equipped?"Worn":et.folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>l[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>vt[t]?vt[t].index:0,display:gt,filter:gt}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.ceil(n.durability/n.max_durability*100)}},{title:"BP",data:Et,render:function(t,e,n){if(!n.folder_id&&n.player_id!==et.current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:Et,render:function(t,e,n){return _t(n)?It(e,n,$t):function(t){return t.folder_id&&!t.bound}(n)?It(e,n,xt):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const i=[1,1,1,1,1,1,1,1,1,,2,2,,,,2][t]
return 1===i?Mt(n,{a:"wear",b:"Wear",c:"wearItem"}):2===i?Mt(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function Gt(){return"player_id"in et}function Pt(){const t=function(){const t=j({className:"hover fshXSmall",id:Gt()?"fshUserInv":"fshGuildInv"})
return f(u,t),t}()
return function(t){t.column(12).visible("current_player_id"in et),t.column(17).visible(Gt()&&wt),t.column(18).visible(Gt()&&Nt)}(function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:qt,createdRow:kt,data:et.items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)),t}function Ut(t){return A(t).then(D)}function Ct(t){q(`fsh_${e.subcmd}`,t)}function Ot(){p('table.fshInvFilter input[type="checkbox"]').forEach((t=>{t.checked=1===Dt.checkedElements[t.getAttribute("item")]})),Ct(Dt)}function Wt(t){Dt.checkedElements=yt,Ot(),$(t).DataTable().draw(!1)}function Bt(t,e){Dt.fshMinLvl=t,Dt.fshMaxLvl=e,Ct(Dt)}function Ft(t){$(t).DataTable().draw(!1)}function Vt(t){P(Bt,n(Ft,t))}function Ht(t){return Number(t[0])>=100}function Qt(t,e){return t[e[0]]=e[1],t}function Yt(t){var e
Dt.checkedElements=(e=Dt.checkedElements,r(e).filter(Ht).reduce(Qt,{})),Ot(),$(t).DataTable().draw()}function zt(t,e){t.eq(e).empty()}function Jt(t,e){if(1===e.r)return
const i=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(n(zt,t))}($("td",i)),i.css("text-decoration","line-through")}function Xt(t,e){h(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),t().then(n(Jt,e)),function(t){t.empty().append(`<img src="${m}ui/misc/spinner.gif" width="11" height="11">`)}(e)}function Kt(t){return C({cmd:"profile",subcmd:"dodropitems",removeIndex:t,ajax:1}).then(U)}function Zt(t){Dt.checkedElements={},p('table.fshInvFilter input[type="checkbox"][item]:checked').forEach((t=>{Dt.checkedElements[t.getAttribute("item")]=1})),Ct(Dt),$(t).DataTable().draw(!1)}function te(t){Dt.checkedElements=mt.checkedElements,Ot(),$(t).DataTable().draw(!1)}function ee(t){Dt.fshMinLvl=mt.fshMinLvl,Dt.fshMaxLvl=mt.fshMaxLvl,Ct(Dt),$("#fshMinLvl").val(Dt.fshMinLvl),$("#fshMaxLvl").val(Dt.fshMaxLvl),$(t).DataTable().draw(!1)}function ne(t){return L({subcmd2:"dostoreitems",storeIndex:t})}function ie(t){return b({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t}).then(W)}function se(e){return function(e){return t(ne,ie,e)}(e).then(B).then(D)}function ae(t,e){$(t).DataTable().search($(e.target).attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function re(t){const e=$(t.target)
Xt(n(F,e.attr("invid"),e.attr("action")),e)}function de(t){const e=$(t.target)
Xt(n(V,e.attr("invid"),e.attr("playerid"),e.attr("mode"),e.attr("action")),e)}function ce(t){const e=$(t.target)
Xt(n(w,e.attr("invid")),e)}function oe(t){const e=$(t.target)
Xt(n(N,e.attr("invid")),e)}function le(t){const e=$(t.target)
O([e.data("inv")],e.val())}function fe(t){const e=$(t.target)
Xt(n(se,[e.attr("invid")]),e)}function ue(t){const e=$(t.target)
Xt(n(Kt,[e.data("inv")]),e)}function pe(t){const e=$(t.target)
Xt(n(Ut,[e.data("inv")]),e)}function he(t,e){$(e[0]).on("click",n(e[1],t))}function me(t,e){$(t).on("click",`span.${e[0]}`,e[1])}function be(t){!function(t){[["#fshReset",ee],["#fshAll",Wt],["#fshNone",Yt],["#fshDefault",te]].forEach(n(he,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',n(Zt,t)),function(t){[["setName",n(ae,t)],["takeItem",re],["recallItem",de],["wearItem",ce],["useItem",oe],["dropItem",ue],["sendItem",pe],["storeItem",fe]].forEach(n(me,t))}(t)}function ye(){let t
t=et.player_id?`<b>&nbsp;Inventory Manager</b> ${et.items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${et.items.length} items (maroon = in BP, blue=guild store)`,y(bt.replace("@@reportTitle@@",t),u)}function ve(){$("#fshMinLvl").val(Dt.fshMinLvl),$("#fshMaxLvl").val(Dt.fshMaxLvl)}let ge
function ke(t,e){return X(ge,J(e[1]),Dt.fshMinLvl,Dt.fshMaxLvl)}function _e(){ge=[t=>0===t].concat(K),$.fn.dataTable.ext.search.push(ke)}function $e(){$.fn.dataTable.ext.search.push(((t,e,n,i)=>!Dt.checkedElements||Dt.checkedElements[i.type]))}function xe(){$.fn.dataTable.ext.search.push(((t,e,n,i)=>!Dt.checkedElements||!Dt.checkedElements[-1]||function(t){return Dt.checkedElements[-1]&&t.stats&&-1!==t.stats.set_id}(i)))}function Ie(){$.fn.dataTable.ext.search.push(((t,e,n,i)=>{const s=(parseInt(i.rarity,10)+100).toString()
return!Dt.checkedElements||Dt.checkedElements[s]}))}function Re(t,e){return t[e[1].id]=e[1],t}function Le(){e.membrList=r(e.membrList).filter(z).reduce(Re,{})}function Me(){H([ht,_e,$e,xe,Ie,ye,Ot,ve])
const t=Pt()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",n(Vt,t)),$(t).on("change","select.fshMoveItem",le),be(t)}(t),$("#fshRefresh").on("click",je),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const i=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(i),i.on("click",n(pt,t,e))}(t)}function Ee(){_("inventory.getInvMan"),Me(),x("inventory.getInvMan")}function Se(){k(3,Ee)}function je(){v()||(y(`<span id="fshInvMan"><img src = "${g}">&nbsp;Getting inventory data...</span>`,u),function(){const t=[Y(),ut()]
"guildinvmgr"===e.subcmd&&t.push(Q(!1).then(Le)),t.push(G(`fsh_${e.subcmd}`).then(At)),I(t,Se)}())}export default je
//# sourceMappingURL=inventory-103ba44b.js.map
