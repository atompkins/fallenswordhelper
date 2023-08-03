import{a as H}from"./chunk-XE5WLQAI.js";import{a as $}from"./chunk-2HRAQRIC.js";import{a as W}from"./chunk-2O6RAQRQ.js";import{a as V}from"./chunk-YC53X23I.js";import{a as P}from"./chunk-EUPTAZ7I.js";import{b as U}from"./chunk-VOQGUQNO.js";import{a as I}from"./chunk-UGRGRLDG.js";import"./chunk-YHMEPQN6.js";import{a as A}from"./chunk-Y2XJKF35.js";import{a as T}from"./chunk-ZQHXN6JO.js";import"./chunk-7C6CQ5I2.js";import"./chunk-NZ6ZP254.js";import{a as f}from"./chunk-7WQ5UNSS.js";import"./chunk-4IQVGLAY.js";import{a as u}from"./chunk-IAPLFRFL.js";import"./chunk-DQJLU6BH.js";import"./chunk-7YTTTE44.js";import{a as v}from"./chunk-VDABUAVV.js";import"./chunk-YMX6UH45.js";import{a as y}from"./chunk-OSU72WF2.js";import{a as p}from"./chunk-JOI2Z4NP.js";import{a as d}from"./chunk-DSQHKKZ4.js";import"./chunk-IETC7J5T.js";import"./chunk-L4YLDFIV.js";import"./chunk-ILRQGVNQ.js";import"./chunk-QCITHZZO.js";import{a as b}from"./chunk-R63U7AZ3.js";import"./chunk-4BKRRB5O.js";import"./chunk-NZDFBLRQ.js";import{a as D}from"./chunk-IH6ZKMJ6.js";import"./chunk-S4DLXHFF.js";import"./chunk-PR2EAHHE.js";import{b as c}from"./chunk-DLFJWHV6.js";import"./chunk-6SYTCZ5G.js";import"./chunk-7J7MQQGS.js";import"./chunk-4JYNGGXH.js";import"./chunk-SUBR6HFY.js";import"./chunk-V56KALMS.js";import"./chunk-CMXQAXF2.js";import{a as N}from"./chunk-C257UEHM.js";import"./chunk-3XEIZZHC.js";import{a as S}from"./chunk-ZWSICCTU.js";import"./chunk-APLZF2FC.js";import"./chunk-NIE6URWE.js";import"./chunk-VDZHRZJL.js";import"./chunk-KU5JAIEB.js";import{a as m}from"./chunk-N7M4WPYO.js";import{a as C}from"./chunk-BGM7VCLD.js";import"./chunk-ZOICBMHG.js";import"./chunk-EL33JOKC.js";import"./chunk-EOP2LXLP.js";import"./chunk-PCHFEFT4.js";import"./chunk-CEFYYGFM.js";import{a}from"./chunk-ARPRWHND.js";import"./chunk-UXWHPN2C.js";import"./chunk-FBJYO5PW.js";import"./chunk-SASH6XDT.js";import"./chunk-DMJF4GTY.js";import{a as j}from"./chunk-3SG23KH5.js";import"./chunk-J3H3UK4G.js";import"./chunk-LAQFFA4M.js";import{a as R}from"./chunk-3E53RUR7.js";import{a as E}from"./chunk-TTNOFDP6.js";import{c as B}from"./chunk-5D3DZNMD.js";import"./chunk-B3TUML6P.js";import"./chunk-U2JBD6QP.js";import"./chunk-KXXSC5XL.js";import"./chunk-VVTHM3UH.js";import"./chunk-34VPQFZA.js";function s(t){return T({subcmd:"ranks",...t})}function l(){return u(s,I)}function h(t,r){return s({subcmd2:t,rank_id:r})}async function g(t,r){return await S({cmd:"guild",subcmd:"ranks",subcmd2:t,rank_id:r}),{s:!0}}function k(t,r){return u(h,g,t,r)}var x=0,F=t=>["Up","Down"].includes(t.target.value);function q(t,r){return x>=Math.min(t.rowIndex,r)||r<1||r>t.parentNode.rows.length}function G(t){return t==="Up"?-1:2}function O(t){return t==="Up"?-22:22}var Q=/rank_id=(?<rankId>\d+)/;function Z(t,r,o){let i=R(Q,t.target.getAttribute("onclick"));k(D(t.target.value),i);let n=r.parentNode.rows[o];v(r,n);let e=O(t.target.value);window.scrollBy(0,e),t.stopPropagation()}function z(t){p("ranks","overrideUpDown");let r=t.target.parentNode.parentNode.parentNode,o=r.rowIndex+G(t.target.value);q(r,o)||Z(t,r,o)}function J(t){F(t)&&z(t)}function L(){x&&B("ajaxifyRankControls")&&E(c(),J,!0)}function M(t,r){r.includes(b())&&(x=t.rowIndex)}var K=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],X=(t,[,r])=>t+r-1,Y=t=>K.filter(([r])=>V(t,r)).reduce(X,0),tt=t=>t>>>0,rt=t=>tt(t).toString(2),ot=t=>rt(t).split("").map(Number).reduce(H,0),nt=t=>U(Y(t)+ot(t),1);function et(t,r){let[o]=r.children,i=m(o.firstChild),n=t.find(e=>e&&e.name===i);n&&W(o,`<span class="fshBlue">(${nt(n.permissions)}) Tax:(${n.tax||0}%)</span> `)}function it(t,r){p("ranks","fetchRankData"),t.forEach(a(et,r))}function at(t,r,o){let i=A({className:"fsh-weightings",innerHTML:"[ "}),n=P({className:"fshBl fsh-bli",textContent:"Get Rank Weightings",type:"button"});y(n,"click",a(it,t,r)),d(i,n),f(i," ]");let e=o.parentNode.parentNode;d(e,i)}function w(t,r){let o=N('#pCC a[href*="=ranks&subcmd2=add"]');o&&at(t,r,o)}function st(){let t=c().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows;if(t)return C(t)}function mt(t,r){let o=r.children[0],i=m(o),n=t.find(e=>e.name===i);if(n?.members.length){let e=n.members.map(_=>_.name);M(r,e),f(o,` <span class="fshBlue">- ${e.join(", ")}</span>`)}}function ft(t){let r=st();r&&($([3,r,1,a(mt,t)]),w(r,t),L())}async function ct(){if(j())return;let t=await l();t?.s&&ft(t.r)}export{ct as default};
//# sourceMappingURL=rank-R4GKOQBG.js.map
