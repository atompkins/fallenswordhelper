import{a as L}from"./chunk-VEEK4BTZ.js";import"./chunk-72OSEI3B.js";import{a as o}from"./chunk-FFBGTIJ7.js";import{a as B}from"./chunk-KE4QRM6M.js";import{a as T}from"./chunk-GE4YEU5P.js";import{a as S}from"./chunk-TMZFBRLM.js";import{a as w}from"./chunk-IUCTMPLV.js";import"./chunk-CCQL6GVV.js";import"./chunk-JKF5PGCM.js";import"./chunk-LQQTECLM.js";import{a as d}from"./chunk-2KD24UDH.js";import"./chunk-TGZKSQRP.js";import{a as C}from"./chunk-F3VUN2ON.js";import"./chunk-YNVS32OD.js";import{a as l}from"./chunk-6F7QE44M.js";import"./chunk-DLQ3WG6P.js";import{a as u}from"./chunk-7XGA3GAK.js";import{a as n}from"./chunk-U2VGMJIO.js";import"./chunk-7YFKPLW2.js";import"./chunk-QNHSKY7C.js";import{a as F}from"./chunk-UZ5IF7X7.js";import{a as E}from"./chunk-BT4GCRJE.js";import"./chunk-55L4ZDU3.js";import"./chunk-QWDVXKTR.js";import"./chunk-KR2SDNOK.js";import{a as b}from"./chunk-MQBCOMUU.js";import"./chunk-LHBSBOBO.js";import{b as p}from"./chunk-ALGYGCJU.js";import"./chunk-2COHD5H3.js";import"./chunk-2AO2GDV5.js";import"./chunk-YJHAM7BA.js";import"./chunk-UZF2DPM4.js";import{a as k}from"./chunk-PFETQSML.js";import"./chunk-E2LRFPD6.js";import"./chunk-IK52CCEJ.js";import{a as y}from"./chunk-OJ42IKEN.js";import"./chunk-YMWUQMPF.js";import"./chunk-RRWRGO3F.js";import"./chunk-3E35A5QB.js";import{a as v}from"./chunk-3ODBLJBA.js";import"./chunk-MIAGY67V.js";import"./chunk-2OH7AKYH.js";import{a as g}from"./chunk-LP5DJPCW.js";import"./chunk-R5WQFHT3.js";import{i as I,ua as N}from"./chunk-3IHZF2GE.js";import{a as s}from"./chunk-WZXZ6YXZ.js";function A(e){return e?o("-2","Worn"):""}function D(e){return o(e[0],e[1])}function h(e,t){return o("0","All")+A(t)+o("-1","Main")+k(e).map(D).join("")}var r,f,P,m=0,i,a;function H(){let e=E(N,p.lastElementChild);return s.cmd==="crafting"?e[1]:e[0]}function M(e){let t=u(),c=e[0].parentNode;n(t,c),n(a,t)}function j(){a||(a=u({className:"fshItemGrid"}),f.forEach(M),C(r.parentNode,a),w(r))}function G(e){return m!==0&&e[2]!==m}function V(e){return i.checked&&e[3]!=="Perfect"}function W(e){let t=e[0].parentNode.parentNode;S(t,G(e)||V(e))}function x(){j(),f.forEach(W)}function q(e){if(!b("fshFolder",e.target))return;let t=Number(e.target.dataset.folder);t!==m&&(m=t,x())}function Q(e){return e.equipped?-2:e.folder_id}function R(e){let t=P[e[1]];t&&e.push(Q(t),t.craft)}function _(){f.forEach(R)}function z(e){let t=r.parentNode.parentNode.previousElementSibling.children[0];return t.classList.add("fshCenter"),v(t,q),l(t,h(e,!0)),t}function J(e){if(s.cmd==="crafting"){i={checked:!1};return}let t=B({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '});i=T({className:"fshVMid",type:"checkbox"}),g(i,"change",x),n(t,i),l(e," &ensp;"),n(e,t)}function K(e){if(e.items&&r){P=e.items,d(4,_);let t=z(e.folders);J(t)}}function O(e){let{tipped:t}=e.dataset,c=t.match(I);return[e,c[2]]}function U(){r=H(),f=F("img",r).map(O)}function X(){y()&&p&&(L().then(K),d(3,U))}export{X as default};
//# sourceMappingURL=craftForge-D2THMQXP.js.map