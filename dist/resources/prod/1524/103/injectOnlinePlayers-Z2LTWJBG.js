import{a as B}from"./chunk-BEGY34AV.js";import{a as G,b as S}from"./chunk-OJ5JMZD6.js";import{a as j}from"./chunk-Z7MUAB3C.js";import{a as A,b as F}from"./chunk-SJN7JHIK.js";import{a as _}from"./chunk-DRNSG7B6.js";import"./chunk-77CT6XY6.js";import"./chunk-BENEZ44C.js";import{a as q}from"./chunk-RGELRGTG.js";import{a as H}from"./chunk-ADLGCSQK.js";import"./chunk-DEUGKLOT.js";import"./chunk-EFFTH5LW.js";import{a as N}from"./chunk-W52WF52M.js";import"./chunk-36JS4LCL.js";import{a as I}from"./chunk-7J7MQQGS.js";import"./chunk-LEOMCKME.js";import{a as T}from"./chunk-4JYNGGXH.js";import"./chunk-BWBGYMAI.js";import{a as h}from"./chunk-ZXEZAERI.js";import{a as u}from"./chunk-V4VDCP3C.js";import{a as V}from"./chunk-SUBR6HFY.js";import{c as p}from"./chunk-V56KALMS.js";import{a as O}from"./chunk-CMXQAXF2.js";import"./chunk-C257UEHM.js";import{a as E}from"./chunk-3XEIZZHC.js";import"./chunk-ZWSICCTU.js";import"./chunk-APLZF2FC.js";import"./chunk-NIE6URWE.js";import"./chunk-VDZHRZJL.js";import"./chunk-KU5JAIEB.js";import"./chunk-N7M4WPYO.js";import"./chunk-BGM7VCLD.js";import"./chunk-ZOICBMHG.js";import"./chunk-EL33JOKC.js";import"./chunk-EOP2LXLP.js";import{a as l}from"./chunk-MK3UHL4H.js";import"./chunk-PCHFEFT4.js";import"./chunk-CEFYYGFM.js";import{a as s}from"./chunk-ARPRWHND.js";import{a as k,b as D}from"./chunk-VOI5HXP6.js";import"./chunk-UXWHPN2C.js";import"./chunk-FBJYO5PW.js";import"./chunk-SASH6XDT.js";import"./chunk-DMJF4GTY.js";import{a as C}from"./chunk-3SG23KH5.js";import"./chunk-J3H3UK4G.js";import"./chunk-LAQFFA4M.js";import{a as x}from"./chunk-3E53RUR7.js";import{a as R}from"./chunk-TTNOFDP6.js";import{b as m,c as i}from"./chunk-5D3DZNMD.js";import{h as M}from"./chunk-B3TUML6P.js";import"./chunk-U2JBD6QP.js";import{a as w}from"./chunk-KXXSC5XL.js";import"./chunk-VVTHM3UH.js";import"./chunk-34VPQFZA.js";function ee(e,t){let r=$("<div/>").append(e[t][0]);return $("img",r).addClass("fshImgCntr"),[r.html(),e[t][1],e[t][2],e[t][3]*100+e[t][4]+1]}function v(e){return N(e).map(s(ee,e))}var Q=0,U=0;function te(e){let t=x(M,e);if(t)return Number(t)}var re=[()=>Q,e=>te(e[0])!==T(),e=>u(e[2])>=G(),e=>u(e[2])<=S()];function ne(e){return re.every(t=>t(e))}function ae(e,t){ne(t)&&$("td",e).eq(2).addClass("lvlHighlight")}function ie(e){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:ae,data:e,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}function W(e,t){Q=i("highlightPlayersNearMyLvl"),U=$("#fshInv",e).DataTable(ie(t))}function d(){U.draw()}function g(e){(e.target.id==="fshMinLvl"||e.target.id==="fshMaxLvl")&&d()}function y(){let e=i("lastOnlineCheck");return p()-e>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(p()-e)/1e3)}s ]</span>`}function z(e,t){return parseInt($(e,t).val(),10)}function J(e,t){I(t)||l(e,t)}function oe(e,t,r){let a=z("#fshMinLvl",e),f=z("#fshMaxLvl",e);J("onlinePlayerMinLvl",a),J("onlinePlayerMaxLvl",f);let Z=O(u(r[2]),0);return F(A,Z,a,f)}function P(e){$.fn.dataTable.ext.search.push(s(oe,e)),$("#fshOutput",e).html(`<div align=right>Min lvl:<input value="${i("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${i("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${B(new Date(i("lastOnlineCheck")))}</div>`)}function L(e){l("onlinePlayerMinLvl",m.onlinePlayerMinLvl),l("onlinePlayerMaxLvl",m.onlinePlayerMaxLvl),$("#fshMinLvl",e).val(m.onlinePlayerMinLvl),$("#fshMaxLvl",e).val(m.onlinePlayerMaxLvl),d()}var n=0,o=0,c=0,b=0;function K(e){o=e||{},P(n),W(n,v(o))}function le(){c===b&&(D("fsh_onlinePlayers",o),K(o))}function se(e,t){return o[e]&&o[e][3]>t}function fe(e,t,r){return[r.eq(0).html(),r.eq(1).html(),r.eq(2).text(),e,t]}function me(e,t,r){let a=$("td",$(r)),f=a.eq(1).text();se(f,e)||(o[f]=fe(e,t,a))}function pe(e,t){let r=t.attr("value");$('#pCC img[src$="/world/icon_action_view.png',e).parent().parent().parent().each(s(me,r))}function ue(e){let{page:t}=V(/(?<page>\d+)/,e.parent().text());return parseInt(t,10)}function ce(e,t){b=ue(t);let r=j(b,h).map(async a=>e(await a));return H(r)}function X(e){$("#fshOutput",n).append(e)}function Y(e){X(` ${c+1}`);let t=E(e),r=$("#pCC input.custominput",t).first();pe(t,r),c+=1,c===1&&ce(Y,r),le()}async function de(){$("#fshRefresh",n).hide(),c=0,o={};let e=h(1);l("lastOnlineCheck",p()),X("Parsing online players..."),Y(await e)}var he=[["fshRefresh",de],["fshReset",()=>L(n)]];async function ve(){n.html(`<span><b>Online Players</b></span>${y()}<div id="fshOutput"></div>`);let e=await k("fsh_onlinePlayers");K(e),R(n[0],q(he)),w(n[0],"keyup",g)}async function ge(e){C()||(n=e?$(e):$("#pCC"),await _(),ve())}export{ge as default};
//# sourceMappingURL=injectOnlinePlayers-Z2LTWJBG.js.map