import{a as I}from"./chunk-OEIQGFB6.js";import{a as U,b as a}from"./chunk-GFDVBBLT.js";import"./chunk-WQZRMCTK.js";import"./chunk-BD6U2K5T.js";import"./chunk-MT2A3HBW.js";import"./chunk-KMUFM4XM.js";import"./chunk-ZUSBLSDR.js";import{a as y}from"./chunk-NFO4O6GG.js";import{a as i}from"./chunk-DDSPWTMT.js";import"./chunk-AIM2MBEX.js";import"./chunk-3XSBFFT3.js";import{a as k}from"./chunk-P55FEXO6.js";import{a as x}from"./chunk-3F6MNCI6.js";import"./chunk-MGC66ZPG.js";import"./chunk-QBN6XFLF.js";import"./chunk-YYCPK2ZW.js";import{a as h}from"./chunk-6OQUMWI5.js";import"./chunk-X2TXN5H7.js";import{a as M}from"./chunk-LSKOHV3I.js";import"./chunk-I4LE4V5X.js";import"./chunk-GQULZ2HO.js";import"./chunk-5T5SVQRR.js";import{a as e}from"./chunk-KTCUHC46.js";import{a as d}from"./chunk-ORWNE4WN.js";import"./chunk-3C5ENJEY.js";import"./chunk-UNRPYWV7.js";import"./chunk-JMVCQWLZ.js";import"./chunk-V5YPTNUP.js";import"./chunk-TANNOBPR.js";import"./chunk-IITGBJS7.js";import"./chunk-BKJXISW2.js";import"./chunk-MZYLPE6K.js";import"./chunk-QRYRLQTR.js";import{a as v}from"./chunk-TQLD7CGE.js";import"./chunk-33AL3TXI.js";import{a as p}from"./chunk-AID3LCGH.js";import"./chunk-VRFSPHR2.js";import"./chunk-GHI2YFAT.js";import"./chunk-NHD5GMUM.js";import{a as f}from"./chunk-6FE7TFOW.js";import"./chunk-BQN7JNLT.js";import"./chunk-3ABW5FNN.js";import"./chunk-3AY3EB3C.js";import"./chunk-46E7CLT6.js";import"./chunk-4TGPNPDH.js";import"./chunk-DGS2WOJV.js";import"./chunk-AXEF7ZPS.js";import"./chunk-GPIGDOJJ.js";import"./chunk-SGSSGBJU.js";import{a as B}from"./chunk-L2F37LJS.js";import"./chunk-RSW3SDQ5.js";import"./chunk-LXCNYPSV.js";import"./chunk-QMO3OQBJ.js";import"./chunk-Q2OGYUCV.js";import"./chunk-SUTTQBC4.js";import"./chunk-26QSBXRQ.js";import"./chunk-332EVHRL.js";import{a as b}from"./chunk-TLM5ASK6.js";import"./chunk-K4FZKNLQ.js";import"./chunk-CSUXSLMM.js";import"./chunk-OHRM7A4V.js";import"./chunk-TDFIT7OX.js";import"./chunk-I42VMRRO.js";import"./chunk-4OB64LT4.js";import"./chunk-UQIKKMNB.js";import"./chunk-UE3DRZE6.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import{a as T}from"./chunk-JFPNT65R.js";import{b as s}from"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import"./chunk-QKN4UTNB.js";import"./chunk-XAE2ZLZO.js";import{A as u,z as g}from"./chunk-L5JB47YP.js";import"./chunk-M4AU23DF.js";function n(t){return f(i(t).children[3].childNodes[0])}var L=(t,r)=>p(r.nicks).includes(b(t));function P(t){let r=v.find(o=>L(t,o));if(r)return r.id}var C=t=>p(t).map(P).filter(r=>r).join(";");function E(t){let r=/`~(.*)~`/.exec(n(t));return r?C(r[1]):""}var S=t=>k(i(t).children[2].children[0].href);function c(t){let{target:r}=t;x(S(r),E(r)),e("privateMsg","Buff")}var w=t=>B(i(t).children[2].children[0]);function N(t){let r=n(t);return r.length>140?`${r.substring(0,140)}...`:r}function R(t){if(!s("enableChatParsing"))return;let{target:r}=t;window.openQuickMsgDialog(w(r),"",N(r)),t.preventDefault(),e("privateMsg","parseReply")}var $=[["pmBuffBtn",c],["fa-reply",R],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]];function A(t){let{target:r}=t,o=$.find(m=>M(r,m));o&&o[1](t)}function l(t){T(t,A)}var D=t=>[f(t.children[2]),t.children[3]];function Q(t){if(!s("privateMsgButtons"))return;y(t,6,0).map(D).forEach(([o,m])=>{d(m,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+o}">Send</a> | <a class="pmSecureUrl" href="${u+o}">Trade</a> ]`)})}function V(){let t=U();t&&(Q(t),I(1),l(t))}function W(){h("type")==="1"?(a("PrivateMsg",1,6),V()):a("OutBox",1,4)}export{W as default};
//# sourceMappingURL=privateMsg-52YPAAMV.js.map
