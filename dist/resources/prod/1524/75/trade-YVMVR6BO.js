import{a as y}from"./chunk-GXNBALOA.js";import{c as I}from"./chunk-GHPCVBVH.js";import"./chunk-5W3FOPG3.js";import{a as G,b as V}from"./chunk-JEXLPQAJ.js";import{a as q}from"./chunk-4ZPTRNXM.js";import"./chunk-Z4G67MEM.js";import{a as S}from"./chunk-TA7EPVWH.js";import{a as P}from"./chunk-YIGQ7UVP.js";import"./chunk-UPWFTYJL.js";import{a as W}from"./chunk-DDSPWTMT.js";import"./chunk-AIM2MBEX.js";import{a as _}from"./chunk-HTPGZJOU.js";import{a as j}from"./chunk-XE4T577G.js";import"./chunk-7VFVU7N7.js";import"./chunk-LMUWET65.js";import"./chunk-RVA5MDER.js";import{a as O}from"./chunk-PDAHONUA.js";import{a as M}from"./chunk-HGOBQD7Z.js";import"./chunk-TB5GXATW.js";import"./chunk-X2TXN5H7.js";import{b as D,c as R}from"./chunk-JUFLO3BT.js";import"./chunk-RS7ZYNTC.js";import"./chunk-7DA5YTG5.js";import{a as m}from"./chunk-IQ2Y3PFE.js";import"./chunk-GQULZ2HO.js";import"./chunk-5T5SVQRR.js";import{a as l}from"./chunk-KTCUHC46.js";import{a as d}from"./chunk-2GIEZTJU.js";import"./chunk-ORWNE4WN.js";import{a as x}from"./chunk-UNRPYWV7.js";import"./chunk-JMVCQWLZ.js";import"./chunk-V5YPTNUP.js";import"./chunk-TANNOBPR.js";import{a as u}from"./chunk-BKJXISW2.js";import{a as w}from"./chunk-MZYLPE6K.js";import"./chunk-QRYRLQTR.js";import"./chunk-AZCQFCTF.js";import"./chunk-HMR4RPVO.js";import{a as k}from"./chunk-VRFSPHR2.js";import{a as h}from"./chunk-GHI2YFAT.js";import"./chunk-NHD5GMUM.js";import{a as $}from"./chunk-JIDHIHQ2.js";import{a as g}from"./chunk-3AY3EB3C.js";import{a as H}from"./chunk-46E7CLT6.js";import"./chunk-4TGPNPDH.js";import"./chunk-DGS2WOJV.js";import"./chunk-GPIGDOJJ.js";import"./chunk-SGSSGBJU.js";import"./chunk-RSW3SDQ5.js";import{a as F}from"./chunk-SUTTQBC4.js";import{a as i}from"./chunk-332EVHRL.js";import{a as n}from"./chunk-K4FZKNLQ.js";import{a as N}from"./chunk-5CGQ343C.js";import"./chunk-CSUXSLMM.js";import{a as b}from"./chunk-OHRM7A4V.js";import{a as c}from"./chunk-TDFIT7OX.js";import"./chunk-4OB64LT4.js";import"./chunk-UQIKKMNB.js";import"./chunk-UE3DRZE6.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import{a}from"./chunk-JFPNT65R.js";import{a as A,b as p}from"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import"./chunk-QKN4UTNB.js";import"./chunk-XAE2ZLZO.js";import{ua as f}from"./chunk-L5JB47YP.js";import{a as E}from"./chunk-M4AU23DF.js";var U=(e,t,s)=>e&&N(t,s),z=(e,t,s)=>!e&&!t&&!s,K=(e,t)=>{t.is_in_st&&e.classList.add("isInST")},L={};function X(){let e=n("item-div");if(!e){e=u({id:"item-div",className:"itemDiv"});let t=n("item-list"),s=H(f,t);for(;s.length;)s[0].classList.add("fshBlock"),w(e,s[0]);d(e,t)}return e}function Y(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1;let s=i("fshHide",t),o=e==="folderid0",r=i(e,t);U(s,o,r)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),z(s,o,r)&&(t.classList.remove("fshBlock"),M(t))}function Z(e){l("trade","doHideFolder"),g(f,X()).forEach(c(Y,e.target.id))}function ee(e){e.target.nodeName==="SPAN"&&e.target.id.indexOf("folderid")!==-1&&Z(e)}function te(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function se(e){let t=y({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${b(e).map(te).join("")}`});a(t,ee);let s=n("item-list").parentNode.parentNode;j(s,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),d(t,s)}function ne(e,t,s){e.classList.add(`folderid${s.folder_id}`),L.fshHasST&&K(e,s),t.classList.add(`itemid${s.item_id}`),t.classList.add(`itemtype${s.type}`),s.guild_tag!==-1&&t.classList.add("isGuildTagged")}function ie(e){let t=e.children[0]?.lastElementChild.children[0]?.children[0];if(!t)return;let s=L[t.value];s&&ne(e,t,s)}function oe(e){let t=p("betaOptIn");t&&D("trade.processTrade"),L=e.items,g(f,n("item-list")).forEach(ie),se(e.folders),t&&R("trade.processTrade")}async function v(){if(F())return;let e=await P();m(3,oe,[e])}function B(e,t){return x(G,V,e,t)}var re=e=>W(e).previousElementSibling.children[0].children[0].children[0],me=e=>re(e).remove();function ae(e,t,s){s.s?(me(e),e.classList.remove("fshSpinner")):e.replaceWith(t)}async function le(e,t){let s=await e;if(s.s){let o=u({className:"fshSpinner fshSpinner12 fshRelative",style:{height:"16px"}}),[r]=t;r.replaceWith(o);let C=await B(t[1],t[2]);return ae(o,r,C),C}return s}function ce(e){e.s?I("Items sent successfully!"):I(e.e.message)}var de=()=>h('[name="sendItemList[]"]:checked'),fe=()=>k('form[name="sendItemForm"] [name="target_username"]').value,pe=e=>de().map(t=>[t,e,[t.value]]),he=e=>e.reduce(le,Promise.resolve({s:1}));async function ue(e,t){l("trade","oneByOne");let s=O({className:"fshSpinner fshRelative",style:{marginLeft:"40px"}}),o=e.target;o.replaceWith(s);let r=await he(t);ce(r),s.replaceWith(o)}function ye(e){let t=pe(fe());t.length&&ue(e,t)}function T(){let e=k('form[name="sendItemForm"] input[value="Send"]'),t=q({className:"fshBl",id:"oneByOneBtn",textContent:"OneByOne",type:"button"});_(t,e),a(t,ye)}var ge=[e=>e==="itemid-1",(e,t)=>e==="itemid-2"&&i("itemtype12",t),(e,t)=>e==="itemid-3"&&i("isGuildTagged",t),i],ke=(e,t)=>ge.some(s=>s(e,t)),Se=()=>n("itemsInSt")?.checked,Ie=(e,t)=>e||!i("isInST",t),J=e=>e.children[0].lastElementChild.children[0].children[0],Q=(e,t)=>{t.checked=e},Le=e=>{Q(!1,e)},ve=e=>{Q(!0,e)},Be=e=>` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`;function Te(e){let t=parseInt(n("fshSendHowMany").value,10);return $(t)?e.length:E.subcmd!=="-"?Math.min(100,t):t}function Ce(e,t){t.filter(c(Ie,Se())).map(J).filter(c(ke,e)).slice(0,Te(t)).forEach(ve)}function Ee(e){l("trade","doCheckAll");let t=n("item-div")||n("item-list"),s=h("table:not(.fshHide)",t);s.map(J).forEach(Le),Ce(e.target.id,s)}function Ae(e){i("fshCheckAll",e.target)&&Ee(e)}function Ne(){let e=p("sendClasses");return S(e)||S(A.sendClasses)}function He(e){let t=y({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span> &ensp;<span id="itemid-3" class="fshCheckAll fshLink fshNoWrap">Guild Tagged</span>${Ne().map(Be).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput fshHowMany" value="all"></td>`});a(t,Ae),d(t,e.parentNode.parentNode)}function be(){let e=n("item-list");!e||(m(3,v),m(3,He,[e]),m(3,T))}export{be as default};
//# sourceMappingURL=trade-YVMVR6BO.js.map