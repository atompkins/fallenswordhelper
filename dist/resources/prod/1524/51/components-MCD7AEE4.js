import{a as d}from"./chunk-KC3JUT6W.js";import"./chunk-YW6SRUBN.js";import{a as rt}from"./chunk-NHXMBUTR.js";import{a as nt}from"./chunk-EMRQXJIT.js";import{a as tt}from"./chunk-PDMDZU7Y.js";import"./chunk-D6UIKMDE.js";import"./chunk-45LL44ZG.js";import{a as mt}from"./chunk-ZAUIJHD6.js";import{p as at}from"./chunk-HXGZXAAM.js";import"./chunk-5ITL5FDM.js";import{a as ot}from"./chunk-EDGUKKB5.js";import{a as et}from"./chunk-42GQPN6K.js";import{a as O}from"./chunk-BXDTTZDJ.js";import{a as z}from"./chunk-GCEMRPTW.js";import{a as M}from"./chunk-WYSBQHH4.js";import{a as W}from"./chunk-PQ3EMI2B.js";import{a as v}from"./chunk-X5ZSXFJV.js";import{a as X}from"./chunk-MF5UI2DL.js";import{a as J}from"./chunk-WDK5KJW5.js";import{a as G}from"./chunk-VYP6BYDA.js";import{a as P}from"./chunk-VXT65ZUM.js";import{a as b}from"./chunk-57PZ6XJI.js";import{a as p}from"./chunk-ZLI5KJBW.js";import"./chunk-EUBCJC2U.js";import"./chunk-UWAT3VA7.js";import{a as l}from"./chunk-GVLE3LCU.js";import{a as Z}from"./chunk-YYZHVDZH.js";import"./chunk-VI3RZM5G.js";import{a as B}from"./chunk-WV4YXE4F.js";import{a as C}from"./chunk-74YALW75.js";import{a as k}from"./chunk-WPRJK6Q2.js";import{a as E}from"./chunk-PJ32ASZ7.js";import"./chunk-F5QOVYT2.js";import"./chunk-CT4SVZHO.js";import{a as m}from"./chunk-R5ZZQ5HH.js";import{a as D}from"./chunk-XQ3ZEJ26.js";import"./chunk-PO34EML4.js";import"./chunk-QFSH2B2J.js";import"./chunk-2PFHY365.js";import{a as Y}from"./chunk-YABTPUUA.js";import{a as N}from"./chunk-QVQPQPMX.js";import"./chunk-ZDFDMUO4.js";import"./chunk-2V5OQ7JE.js";import"./chunk-V6CXAOJZ.js";import{a as K}from"./chunk-GGKSIQST.js";import"./chunk-JSWEJZHY.js";import"./chunk-JZLUF437.js";import{a}from"./chunk-4OJTKSB2.js";import{a as F}from"./chunk-G3O526VI.js";import"./chunk-GHQYBWLT.js";import{a as s}from"./chunk-N2KVYLIG.js";import"./chunk-PKDG64MH.js";import{a as V}from"./chunk-2B42SRXB.js";import"./chunk-3IGXKFMQ.js";import{a as x}from"./chunk-GLHEJYH7.js";import"./chunk-EPYDL6MF.js";import"./chunk-TDNJGM62.js";import{a as T}from"./chunk-TP7JP7VV.js";import"./chunk-HAINOYE5.js";import"./chunk-AN5TC666.js";import"./chunk-B7PLPUHK.js";import{g}from"./chunk-YNXRNCRL.js";import{b as h}from"./chunk-7DPOBF7C.js";import{a as r}from"./chunk-DEDCEYVR.js";var ct=/\?item_id=(\d+)&inv_id=(\d+)&.*&vcode=([0-9a-f]+)/;function pt(t){let o=t.children[0].dataset.tipped.match(ct);return{a:Number(o[2]),b:Number(o[1]),v:o[3]}}var st=t=>x('a[href*="=destroycomponent&"]',t).map(pt),lt=t=>x('td[background*="1x1mini"]',t).length;function dt(t){let o=t.map(k),e=o.map(st),n=[].concat(...e);return{h:{cm:o.map(lt).reduce(z,0)},r:n}}function ft(t){let o=k(t),n=x('a[href*="profile&component_page="]',o).map(c=>K(c.href));return d(n,dt)}function I(){return E({cmd:"profile"}).then(ft)}function H(){return N({subcmd:"loadcomponents"})}function S(){return B(H,I)}var f;function ut(t,o){return t[o.b]=t[o.b]||{a:o.a,b:o.b,count:0,del:[],v:o.v},t[o.b].count+=1,t[o.b].del.push(o.a),t}function it(t){f=t.r.reduce(ut,{})}function yt(t,o){return`${t}<tr><td><img src="${h}items/${o.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${o.b}&inv_id=${o.a}&t=2&p=${et()}&vcode=${o.v}"></td><td>${o.count}</td><td>[<span class="sendLink compDelType" data-compid="${o.b}">Del</span>]</td></tr>`}function Ct(t){let o=M();return it(t),p(o,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(f).reduce(yt,"")}`),o}function ht(t){let o=t.insertRow(-1);p(o,"<td>Total:</td>");let e=o.insertCell(-1);return e.colSpan=2,e}function gt(t){let o=t.r.length,e=v();return a(o,e),e}function bt(t,o){let e=ht(t);m(e,gt(o)),O(e," / TODO")}function Tt(t){let o=W({className:"fshTblCenter",id:"fshTally"});return m(o,Ct(t)),bt(o,t),o}function xt(t,o){if(!C(o.r))return;let e=t.parentNode;e&&(a("",e),m(e,Tt(o)))}function L(t){s("components","countComponent"),S().then(r(xt,t))}function A(t){let o=D(),e=v({className:`sendLink ${P(t).replace(/ /g,"-")}`,textContent:t});return l("[",o),m(o,e),p(o,"]"),o}function $(t){return N({subcmd:"destroycomponent",removeIndex:t})}function Dt(t,o){let e=Z(o),n=1;return e==="Component destroyed."&&(n=0),{r:n,m:e,c:t}}function Et(t){return E({cmd:"profile",subcmd:"destroycomponent",component_id:t}).then(r(Dt,t))}function vt(t){let o=t.filter(n=>n.r===0),e=t.filter(n=>n.r===1);return o.length>0?{r:o.map(n=>n.c),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}function j(t){return d(t.map(Et),vt)}function u(t){return B($,j,t)}var R;function i(){if(!R){let t=J("inventory-table",V("profileRightColumn"));t.length===2&&([,R]=t)}return R}var _;function Nt(t,o){let e=o.dataset.tipped.match(g);return t[e[2]]=o.parentNode.parentNode,t}function Bt(){return _||(_=b("img",i()).reduce(Nt,{})),_}function At(t,o){t[o]&&a("",t[o])}function w(t){t.forEach(r(At,Bt()))}function y(t){let o=i().parentNode;if(!o)return;let e=o.children[2].children[1].children[0];if(!e||e.tagName!=="TABLE")return;let n=e.rows,c=n[n.length-1].cells[1].children[0],U=Number(T(c));U-=t,l(U,c)}function kt(t){a("",t),t.className="guildTagSpinner",t.style.backgroundImage=`url('${h}ui/misc/spinner.gif')`}function It(t){t.s&&C(t.r)&&(w(t.r),y(t.r.length))}function Ht(t){t.parentNode.remove()}function St(t){return u(t).then(It)}function q(t){let o=f[t.dataset.compid].del,e=t.parentNode;kt(e);let n=nt(30,o).map(St);d(n,r(Ht,e))}function Lt(t){let o=G(`#fshTally [data-compid="${t}"]`);if(!o)return;let e=o.parentNode.parentNode.children[1],n=Number(T(e))-1;l(n,e)}function $t(t,o,e){e.s&&(Lt(o),y(1),t.parentNode&&a("",t.parentNode))}function Q(t){let{tipped:o}=t.parentNode.children[0].children[0].dataset,e=o.match(g),n=e[1],c=e[2];u([c]).then(Y).then(r($t,t,n))}var jt=["Enable Quick Del","Count Components","Quick Extract Components"];function Rt(t,o){return m(t,A(o)),t}function _t(){return jt.reduce(Rt,D({className:"fshCenter"}))}function wt(){s("components","insertQuickExtract"),mt(at)}function qt(t){p(t.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}function Qt(t){s("components","enableDelComponent");let o=t.parentNode;X(o);let e=o.parentNode;m(e,A("Delete All Visible")),b("img",i()).forEach(qt)}function Ut(t){s("components","delAllComponent");let o=t.parentNode.parentNode.parentNode.children[0];rt("compDelBtn",o).forEach(ot)}var Vt=[["quick-extract-components",wt],["enable-quick-del",Qt],["delete-all-visible",Ut],["compDelBtn",Q],["count-components",L],["compDelType",q]];function Pt(t){let o=t.parentNode;m(o,_t()),F(o,tt(Vt))}function Ot(){let t=i();!t||Pt(t)}export{Ot as default};
//# sourceMappingURL=components-MCD7AEE4.js.map