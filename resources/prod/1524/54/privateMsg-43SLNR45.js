import{a as P}from"./chunk-UCUOZKSO.js";import{a as k,b as c}from"./chunk-M4YE7I5N.js";import"./chunk-DF4YLZSF.js";import"./chunk-2BMCEOPL.js";import{a as x}from"./chunk-SQJI3M2R.js";import"./chunk-V3ZBUCAP.js";import"./chunk-XT45MXLG.js";import"./chunk-WURFVU32.js";import"./chunk-BF7ESUWU.js";import{a as p}from"./chunk-QFB2KHMU.js";import{a as M}from"./chunk-QXCRSUUX.js";import"./chunk-47W6APH5.js";import"./chunk-NVOYJGJA.js";import"./chunk-LHUEXIVY.js";import"./chunk-FTISKLUQ.js";import"./chunk-LJNI24RX.js";import"./chunk-WHB77CI2.js";import{a}from"./chunk-K4SYXXXK.js";import{a as L}from"./chunk-RJHXDCMG.js";import{a as h}from"./chunk-TQKI2CVR.js";import"./chunk-GYS6JAFZ.js";import"./chunk-YEGYUZNB.js";import"./chunk-OHOH67XG.js";import"./chunk-XNGQGTQC.js";import"./chunk-S5PNJEX5.js";import{a as B}from"./chunk-DOGXLUG7.js";import"./chunk-BG5SGDVW.js";import"./chunk-SDLEVN3U.js";import"./chunk-UBK43KQH.js";import{a as v}from"./chunk-DEPIZODT.js";import"./chunk-X5WGZB5F.js";import"./chunk-ELYJB6VC.js";import"./chunk-OJ3R4IZK.js";import"./chunk-T5SOXK6H.js";import{a as i}from"./chunk-AKFTWN4L.js";import"./chunk-JHBW2WEU.js";import{a as T}from"./chunk-6YCYI5QI.js";import"./chunk-N6OIOPGP.js";import"./chunk-4BGELNLW.js";import"./chunk-PQN2YZV3.js";import"./chunk-UUCRRVRT.js";import"./chunk-ZGR2D6YK.js";import"./chunk-MU27BHL6.js";import"./chunk-KJFFVIXC.js";import"./chunk-AA2SS673.js";import"./chunk-FJRQCZWN.js";import"./chunk-UTDTWSR5.js";import"./chunk-6AI4EA3G.js";import"./chunk-PTVVXABI.js";import"./chunk-OEVQOGQE.js";import"./chunk-ZKGIRUUN.js";import"./chunk-IZT3DORW.js";import"./chunk-REJ57ZO4.js";import"./chunk-VI6Y3FZI.js";import"./chunk-LAXTQMR6.js";import"./chunk-AOLXKWOL.js";import"./chunk-2WRNIMPS.js";import"./chunk-DVEUT6SI.js";import{a as b}from"./chunk-LKZ3ZEU4.js";import"./chunk-KTSA4HUA.js";import{a as r}from"./chunk-MF5QCESC.js";import"./chunk-3WWWYMDW.js";import"./chunk-ZKT3V6EP.js";import"./chunk-562FJNCP.js";import"./chunk-OSE7TXVS.js";import"./chunk-AEOIQGDY.js";import"./chunk-JFH2ANYQ.js";import{a as y}from"./chunk-4RUOSMIM.js";import{b as m}from"./chunk-3PFYPJ7R.js";import"./chunk-6U4GCDKS.js";import"./chunk-C6Z346VW.js";import{x as u,y as d}from"./chunk-4X7HEDV6.js";import"./chunk-XZ2D5B2Y.js";import"./chunk-HGTLDLGM.js";function s(t){return i(a(t).children[3].childNodes[0])}function n(t){return y(a(t).children[2].children[0])}var U=(t,e)=>p(e.nicks).includes(v(t));function N(t){let e=x.find(o=>U(t,o));if(e)return e.id}var C=t=>p(t).map(N).filter(e=>e).join(";");function E(t){let e=/`~(.*)~`/.exec(s(t));return e?C(e[1]):""}function l(t){let{target:e}=t;h(n(e),E(e)),r("privateMsg","Buff")}function w(t){let e=s(t);return e.length>140?`${e.substring(0,140)}...`:e}function S(t){if(!m("enableChatParsing"))return;let{target:e}=t;window.openQuickMsgDialog(n(e),"",w(e)),t.preventDefault(),r("privateMsg","parseReply")}var I=[["pmBuffBtn",l],["fa-reply",S],["pmTradeUrl",()=>r("privateMsg","Trade")],["pmSecureUrl",()=>r("privateMsg","ST")],["pmAttackUrl",()=>r("privateMsg","Attack")],["pmIgnoreUrl",()=>r("privateMsg","Ignore")]];function W(t){let{target:e}=t,o=I.find(f=>M(e,f));o&&o[1](t)}function g(t){b(t,W)}var R=t=>[i(t.children[2]),t.children[3]];function V(t){if(!m("privateMsgButtons"))return;L(t.rows,6,0).map(R).forEach(([o,f])=>{T(f,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+o}">Send</a> | <a class="pmSecureUrl" href="${d+o}">Trade</a> ]`)})}function j(){let t=k();t&&(V(t),P(1),g(t))}function Q(){B("type")==="1"?(c("PrivateMsg",1,6),j()):c("OutBox",1,4)}export{Q as default};
//# sourceMappingURL=privateMsg-43SLNR45.js.map
