import{a as _e,b as Re,c as Ie}from"./chunk-ZUEAJPWV.js";import"./chunk-CRAE2FG7.js";import{a as ve,b as ge,c as xe,d as ke}from"./chunk-4LR2GJWD.js";import{a as he,b as N,c as ye}from"./chunk-N6NM46I6.js";import{a as be}from"./chunk-UH2R3CLD.js";import{a as D}from"./chunk-KNZIAHWZ.js";import"./chunk-KV7KVJON.js";import"./chunk-PAIJPPAP.js";import{a as me}from"./chunk-OMZHILQQ.js";import{a as ue}from"./chunk-F2PP5XBI.js";import{a as le}from"./chunk-6BFTLDJP.js";import{a as se}from"./chunk-4BHK4YC3.js";import{a as de}from"./chunk-6KCBEGNP.js";import{a as ce}from"./chunk-NL2VZXJ7.js";import{a as fe}from"./chunk-YPHBHMKN.js";import"./chunk-LJLHNYN6.js";import{a as pe}from"./chunk-55UU32NB.js";import{a as ie}from"./chunk-KJVXDXBJ.js";import"./chunk-ZBYHF7IJ.js";import"./chunk-EK4HQ4KS.js";import"./chunk-6346UB6L.js";import"./chunk-7WHQNAGA.js";import{b as Et,c as Mt}from"./chunk-K572UUUE.js";import{a as ae}from"./chunk-ILKDG53B.js";import{a as qt}from"./chunk-K7XSORZB.js";import"./chunk-EVJH72OA.js";import"./chunk-DGBEEUA5.js";import"./chunk-GFXI54IF.js";import"./chunk-X6LLQZN7.js";import{a as oe}from"./chunk-6PQFRUHW.js";import{a as k}from"./chunk-Q5PEDYJB.js";import"./chunk-VJNUTBRD.js";import"./chunk-BDSEVGHU.js";import"./chunk-5GSNCPTD.js";import{a as B}from"./chunk-RGCESRKS.js";import"./chunk-XVEYCRE7.js";import{a as zt}from"./chunk-4LUQSMNM.js";import{a as Xt}from"./chunk-ROTCIKTR.js";import{A as P,D as g,a as C,b as Ut,d as Pt,ha as Ht,ia as jt,s as v,t as wt,u as Bt,w as L,y as U}from"./chunk-HPOEZKZ4.js";import{a as w}from"./chunk-6QEKDVOV.js";import{a as Vt}from"./chunk-B2YROL26.js";import"./chunk-UHGSE7LB.js";import{a as q}from"./chunk-K25CWRN6.js";import{a as Qt}from"./chunk-6MJKEXGN.js";import"./chunk-YQXIMIAT.js";import{a as l}from"./chunk-4X57LHCN.js";import"./chunk-6QG6UGYA.js";import{b as p}from"./chunk-JMO45TBP.js";import{a as E}from"./chunk-DYLMNQVQ.js";import"./chunk-JEN6RTKA.js";import{a as re,b as ne}from"./chunk-K5FOITKN.js";import{a as ee}from"./chunk-J647VSQJ.js";import{a as M}from"./chunk-SQCHG7QA.js";import"./chunk-P3AGAHUP.js";import"./chunk-AGN2GYZS.js";import{a as Kt}from"./chunk-7TJHGKXN.js";import{a as te}from"./chunk-HEAZTX7Q.js";import"./chunk-M4CFJGZO.js";import{a as y}from"./chunk-FC2T2RFK.js";import"./chunk-F3LQDOUE.js";import"./chunk-ZRLD7TYA.js";import{a as Zt}from"./chunk-WJQ3A2NI.js";import"./chunk-EAEJ7O2I.js";import"./chunk-UPYTFADC.js";import"./chunk-UERPKMG4.js";import"./chunk-FUB7QZZI.js";import"./chunk-F6AV4QWO.js";import"./chunk-C54IMWL7.js";import"./chunk-7XNCVM7C.js";import"./chunk-S5YTVKJ4.js";import{a as x}from"./chunk-7PPLM4HV.js";import"./chunk-QLD5CDI7.js";import{a}from"./chunk-ZKTRQIGV.js";import{a as Yt,b as Jt}from"./chunk-F53JTC3Q.js";import"./chunk-I2K74DRD.js";import"./chunk-YI3QHXMF.js";import"./chunk-NR3OO2TM.js";import"./chunk-RGYUH6OH.js";import{a as Wt}from"./chunk-DPMNQ3O4.js";import"./chunk-J6FMYNIK.js";import"./chunk-YCWZIL7K.js";import"./chunk-CPJOSTWF.js";import{c as I}from"./chunk-O3NTOCCL.js";import{Ka as Ft,La as Gt,b as Dt,c as Nt,u as Ot,y as At}from"./chunk-RBVLOJQS.js";import"./chunk-G4AQ6G7L.js";import"./chunk-IYSXGPFG.js";import{a as s}from"./chunk-B2AFMQVU.js";import"./chunk-7D7WYX4S.js";function H([t]){return t!=="lastUpdate"}function j(){return ie({subcmd:"fetchinv"})}function Ye(t){let e={a:Number(t.a),b:Number(t.b),l:Number(t.l),n:t.extra?t.extra.name:t.n,t:Number(t.t)};return{...t,...e}}function Je(t){return{r:t.map(Ye),s:!0}}async function Q(){let t=await zt({cmd:"guild",subcmd:"fetchinv"});return Je(t)}function V(){return k(j,Q)}function W(){return D({subcmd2:"report"})}function Xe(t){if(!t.children[0].href)return{a:-1,n:"-1",t:-1};let e=Number(xe(t.children[0].href)),r=Qt(t.previousElementSibling),o={a:e};return r.endsWith(" (Potion)")?(o.n=r.slice(0,-9),o.t=15):(o.n=r,o.t=-1),o}function ze(t){return{r:l("#pCC table table td:nth-of-type(3n)",t).map(Xe),s:!0}}async function Y(){return ze(await oe({cmd:"guild",subcmd:"inventory",subcmd2:"report"}))}function J(){return k(W,Y)}var O=[],X={},i=()=>X;function Ke(t){X=t}async function Ze(){let t=await ue();Ke(t)}var $e=t=>t.t===15;function tr(t){q(t?.r?.inventories)&&(O=t?.r?.inventories.flatMap(e=>e.items).filter($e))}async function er(){let t=await ce();tr(t)}function Le(t){q(t.r)&&(O=O.concat(t.r.filter($e)))}async function rr(){let t=await V();Le(t)}async function nr(){let t=await J();Le(t)}function ir(t,e){return e.a===t}function or(t){if(t.type===15){let e=O.find(a(ir,t.inv_id));e&&(t.item_name=e.n)}}function ar(){X.items.forEach(or)}async function Se(){let t=[Ze()];s.subcmd==="invmanagernew"&&t.push(er()),s.subcmd==="guildinvmgr"&&(t.push(rr()),t.push(nr())),await M(t),ar()}function sr(t,e){e.val(""),$(t).DataTable().search("").draw()}function z(t){let e=$(`#${t.id}_filter input`);e.prop("type","text");let r=$("<span>&times;</span>");e.wrap($('<span class="text-input-wrapper"/>')),e.after(r),r.on("click",a(sr,t,e))}function K(){i().folders&&(i().folders[-1]="Main")}var m={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},Te='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1" min="0"><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999" min="0"></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',Ce={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},_={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}};var Ee={},Me=0,De=0,n=()=>Ee,Ne=()=>Me,Oe=()=>De;async function Ae(){let t=await Yt(`fsh_${s.subcmd}`);Ee={...ke(m),...y(t,{})},Me=I("showQuickDropLinks"),De=I("showQuickSendLinks")}function dr(t,e){return t!=="display"?"BP":e.player_id===-1?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}function Z(t,e,r){if(!(r.folder_id||r.player_id===i().current_player_id))return dr(e,r)}function A(t){return _[t]?_[t].abbr:""}function lr(t){return t.equipped?"fshGreen":"fshNavy"}function pr(t){return t.player_id===-1?"fshNavy":"fshMaroon"}function cr(t){return t.folder_id?lr(t):pr(t)}function tt(t,e){let r=cr(e);t.classList.add(r)}function fr(t){return t.guild_tag!==-1||t.equipped}function et(t,e,r){if(!fr(r))return e!=="display"?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${r.inv_id}">Drop</span>`}function rt(t,e,r){if(r.type<9&&r.max_durability>0)return Math.ceil(r.durability/r.max_durability*100)}function nt(t,e,r){if(r.type<9)return r.forge}function mr(t){return t.player_id&&t.player_id!==-1}function ur(t){return t.folder_id&&t.guild_tag!==-1}function S(t){return mr(t)||ur(t)}function hr(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${y(t.player_id,i().player_id)}" mode="1" action="recall">GS</span>`}function br(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function Fe(t,e,r){return t==="display"?r(e):"GS"}function yr(t){return t.folder_id&&!t.bound}function it(t,e,r){if(S(r))return Fe(e,r,hr);if(yr(r))return Fe(e,r,br)}function vr(t){return t.player_id===-1?4:S(t)?7:1}function gr(t,e,r){return t||(e!==-1?e:r)}function xr(t){return t.stats&&t.stats.set_name!==""}function kr(t,e){let r=vr(e),o=gr(i().player_id,e.player_id,i().guild_id),d=t;e.equipped&&(d=`<b>${t}</b>`);let R="";return xr(e)&&(R=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${Ot}${t}" class="fshInvItem tip-dynamic ${Nt[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${r}&p=${o}">${d}</a>${R}`}function ot(t,e,r){return e!=="display"?t:kr(t,r)}function _r(t){return t.equipped||t.guild_tag===-1&&t.bound}function at(t,e,r){if(!_r(r))return e!=="display"?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${r.inv_id}">Send</span>`}function Rr(t){return t.folder_id&&!t.equipped}function Ir(t){return t.player_id&&!t.equipped&&t.player_id===i().current_player_id}var $r=[[t=>t.player_id&&t.player_id===-1,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==i().current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>Rr(t)||Ir(t),(t,e)=>e.c]];function Ge(t,e){let r=$r.find(([o])=>o(t));return r?`<span class="fshLink ${r[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function st(t,e,r){let o=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t];if(o===1)return Ge(r,{a:"wear",b:"Wear",c:"wearItem"});if(o===2)return Ge(r,{a:"use",b:"Use",c:"useItem"})}function T(t){return y(t.folder_id,t.player_id)}function u(t){return s.membrList[t]?s.membrList[t].username:"???"}function Lr(t){return t.equipped?-2:t.folder_id}function dt(t,e,r){return r.folder_id?Lr(r):r.player_id===-1?"~":u(r.player_id)}function Sr(t){return t.player_id===-1?"Guild Store":`<a class="fshMaroon" href="${At}${t.player_id}">${u(t.player_id)}</a>`}function Tr(t,e){return t[0]-e[0]}function Cr(t,e){return`<option value="${e[0]}"${le(Number(e[0]),t)}>${e[1]}</option>`}function Er(t,e){return x(e).sort(Tr).map(a(Cr,t)).join("")}function lt(t,e,r){return r.player_id?Sr(r):r.equipped?"Worn":`<select class="fshMoveItem" data-inv="${r.inv_id}">${Er(r.folder_id,i().folders)}</select>`}function Mr(t){return t.player_id===-1?"Guild Store":u(t.player_id)}function pt(t,e,r){return r.player_id?Mr(r):r.equipped?"Worn":i().folders[r.folder_id]}var Dr=[{title:"Name",data:"item_name",render:ot},{title:"Level",data:"stats.min_level"},{title:"Where",data:T,render:{_:dt,display:lt,filter:pt}},{title:"Type",data:"type",render(t){return Ft[t]}},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:nt},{title:"Craft",data:"craft",render:{_(t){return _[t]?_[t].index:0},display:A,filter:A}},{title:"Du%",data:"durability",render:rt},{title:"BP",data:T,render:Z},{title:"GS",data:T,render:it},{title:"W/U",data:"type",render:st},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render(t){return t===-1?"No":"Yes"}},{title:"Drop",data:"type",render:et},{title:"Send",data:"type",render:at}];function ct(){return"player_id"in i()}function Nr(){return ct()?"fshUserInv":"fshGuildInv"}function Or(){let t=de({className:"hover fshXSmall",id:Nr()});return Vt(p(),t),t}function Ar(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:Dr,createdRow:tt,data:i().items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}function Fr(t){[[12,"current_player_id"in i()],[17,ct()&&Ne()],[18,ct()&&Oe()]].forEach(([e,r])=>t.column(e).visible(r))}function ft(){let t=Or(),e=Ar(t);return Fr(e),t}async function mt(t){let e=await Re(t);return N(e)}function ut(t){return D({subcmd2:"dostoreitems",items:t})}async function ht(t){let e=await Zt({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t});return fe(e)}function bt(t){return k(ut,ht,t)}async function yt(t){let e=await bt(t);return be(e),N(e)}function c(t){Jt(`fsh_${s.subcmd}`,t)}function f(){l('table.fshInvFilter input[type="checkbox"]').forEach(t=>{t.checked=n().checkedElements[t.getAttribute("item")]===1}),c(n())}function vt(t){n().checkedElements=Ce,f(),$(t).DataTable().draw(!1)}function Gr(t,e){n().fshMinLvl=t,n().fshMaxLvl=e,c(n())}function qr(t){$(t).DataTable().draw(!1)}function gt(t){pe(Gr,a(qr,t))}function Ur(t){return Number(t[0])>=100}function Pr(t,e){return t[e[0]]=e[1],t}function wr(t){return x(t).filter(Ur).reduce(Pr,{})}function xt(t){n().checkedElements=wr(n().checkedElements),f(),$(t).DataTable().draw()}function Br(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}function Hr(t,e){t.eq(e).empty()}function jr(t){[2,12,13,14,15,16].forEach(a(Hr,t))}function Qr(t,e){if(e.r===1)return;let r=t.closest("tr"),o=$("td",r);jr(o),r.css("text-decoration","line-through")}function Vr(t){t.empty().append(`<img src="${Dt}ui/misc/spinner.gif" width="11" height="11">`)}async function h(t,e){ae(e),Br(e),Vr(e);let r=await t();Qr(e,r)}function kt(t){n().checkedElements={},l('table.fshInvFilter input[type="checkbox"][item]:checked').forEach(e=>{n().checkedElements[e.getAttribute("item")]=1}),c(n()),$(t).DataTable().draw(!1)}function _t(t){n().checkedElements=m.checkedElements,f(),$(t).DataTable().draw(!1)}function Wr(t){$("#fshMinLvl").val(n().fshMinLvl),$("#fshMaxLvl").val(n().fshMaxLvl),$(t).DataTable().draw(!1)}function Rt(t){n().fshMinLvl=m.fshMinLvl,n().fshMaxLvl=m.fshMaxLvl,c(n()),Wr(t)}function Yr(t,e){$(t).DataTable().search($(e.target).attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Jr(t){let e=$(t.target);h(a(ve,e.attr("invid"),e.attr("action")),e)}function Xr(t){let e=$(t.target);h(a(ge,e.attr("invid"),e.attr("playerid"),e.attr("mode"),e.attr("action")),e)}function qe(t,e){let r=$(t.target);h(a(e,r.attr("invid")),r)}function zr(t){let e=$(t.target);_e([e.data("inv")],e.val())}function Kr(t){let e=$(t.target);h(a(yt,[e.attr("invid")]),e)}function Ue(t,e){let r=$(t.target);h(a(e,[r.data("inv")]),r)}function Zr(t,e){$(e[0]).on("click",a(e[1],t))}function tn(t){[["#fshReset",Rt],["#fshAll",vt],["#fshNone",xt],["#fshDefault",_t]].forEach(a(Zr,t))}function en(t,e){$(t).on("click",`span.${e[0]}`,e[1])}function rn(t){[["setName",a(Yr,t)],["takeItem",Jr],["recallItem",Xr],["wearItem",e=>qe(e,he)],["useItem",e=>qe(e,ye)],["dropItem",e=>Ue(e,Ie)],["sendItem",e=>Ue(e,mt)],["storeItem",Kr]].forEach(a(en,t))}function nn(t){tn(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',a(kt,t)),rn(t)}function It(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",a(gt,t)),$(t).on("change","select.fshMoveItem",zr),nn(t)}var Pe=0;function on(t,e){return ne(Pe,te(e[1]),n().fshMinLvl,n().fshMaxLvl)}function we(){Pe=[(t,e,r)=>r===0,...re],$.fn.dataTable.ext.search.push(on)}function Be(){$.fn.dataTable.ext.search.push((t,e,r,o)=>!n().checkedElements||n().checkedElements[o.type])}function an(t){return n().checkedElements[-1]&&t.stats&&t.stats.set_id!==-1}function He(){$.fn.dataTable.ext.search.push((t,e,r,o)=>!n().checkedElements||!n().checkedElements[-1]||an(o))}function je(){$.fn.dataTable.ext.search.push((t,e,r,o)=>{let d=(parseInt(o.rarity,10)+100).toString();return!n().checkedElements||n().checkedElements[d]})}function $t(){let t="";i().player_id?t=`<b>&nbsp;Inventory Manager</b> ${i().items.length} items (green = worn, blue = backpack)`:t=`<b>&nbsp;Guild Inventory Manager</b> ${i().items.length} items (maroon = in BP, blue=guild store)`,E(Te.replace("@@reportTitle@@",t),p())}function sn(t){let e,r,o,d,R,b,F,Ct;return{c(){e=L("div"),r=L("span"),r.textContent="Recall all visible to:",o=U(),d=L("button"),d.textContent="BP",R=U(),b=L("button"),b.textContent="GS",g(d,"class","custombutton svelte-dlcnix"),g(d,"type","button"),g(b,"class","custombutton svelte-dlcnix"),g(b,"type","button"),g(e,"class","svelte-dlcnix")},m(G,We){wt(G,e,We),v(e,r),v(e,o),v(e,d),v(e,R),v(e,b),F||(Ct=[P(d,"click",t[0]),P(b,"click",t[1])],F=!0)},p:C,i:C,o:C,d(G){G&&Bt(e),F=!1,Ut(Ct)}}}var dn='span[action="take"]',ln='span[mode="0"][action="recall"]',pn='span[mode="1"][action="recall"]';function cn(t){function e(){w("Inventory","Recall All","toBp"),[...l(dn),...l(ln)].forEach(B)}function r(){w("Inventory","Recall All","toGs"),l(pn).forEach(B)}return[e,r]}var Lt=class extends jt{constructor(e){super(),Ht(this,e,cn,sn,Pt,{})}},Qe=Lt;function fn(){return new Qe({target:p()})}function St(){s.subcmd==="guildinvmgr"&&fn()}function Tt(){$("#fshMinLvl").val(n().fshMinLvl),$("#fshMaxLvl").val(n().fshMaxLvl)}var mn=([,t])=>[t.id,t];function un(){E(`<span id="fshInvMan"><img src = "${Gt}">&nbsp;Getting inventory data...</span>`,p())}async function hn(){await me(!1),s.membrList=Xt(x(s.membrList).filter(H).map(mn))}function bn(){se([K,we,Be,He,je,$t,f,Tt])}function yn(t){bn();let e=ft();It(e),$("#fshRefresh").on("click",t),z(e),St()}function vn(t){let e=I("betaOptIn");e&&Et("inventory.getInvMan"),yn(t),e&&Mt("inventory.getInvMan")}function gn(t){qt(3,vn,[t])}async function xn(t){let e=[ee(),Se()];s.subcmd==="guildinvmgr"&&e.push(hn()),e.push(Ae()),await M(e),gn(t)}function Ve(){Wt()||!p()||s.subcmd==="guildinvmgr"&&!Kt()||(un(),xn(Ve))}export{Ve as default};
//# sourceMappingURL=inventory-XEH5L5AN.js.map