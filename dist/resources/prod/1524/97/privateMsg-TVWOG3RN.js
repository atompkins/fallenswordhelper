import{a as C}from"./chunk-IQQ2IU4T.js";import"./chunk-GWUTVVPH.js";import"./chunk-JELZOWRY.js";import{a as I,b as a}from"./chunk-43MJUTGK.js";import"./chunk-ZWXMYKLP.js";import"./chunk-U6GTWC2Q.js";import"./chunk-QTPL3DYF.js";import"./chunk-HEOZYA76.js";import"./chunk-SHWOYOJX.js";import"./chunk-Y7WVLTFC.js";import"./chunk-LXZC2VLP.js";import"./chunk-NIL7WR54.js";import"./chunk-VUWPXPFS.js";import{a as U}from"./chunk-5KEIQUIC.js";import{a as i}from"./chunk-RIVS3SLC.js";import{a as x}from"./chunk-ENTXQFEJ.js";import{a as y}from"./chunk-QQ63LZNN.js";import"./chunk-64TOS6NK.js";import"./chunk-HYGMXHNU.js";import"./chunk-6N6Q5324.js";import{a as M}from"./chunk-3U4TACK3.js";import"./chunk-UPZ3AKMZ.js";import"./chunk-HBQKZNOT.js";import"./chunk-KMMYFSVA.js";import{a as T}from"./chunk-MROIH62D.js";import"./chunk-CUQDXMMQ.js";import"./chunk-HISPWLCY.js";import"./chunk-JDKUHI2H.js";import"./chunk-Z5G3WLWA.js";import{a as d}from"./chunk-TKD5JPSI.js";import"./chunk-FKJWOE7J.js";import"./chunk-3OZPF3EM.js";import"./chunk-7WFBZC7L.js";import"./chunk-GHM7FGTO.js";import"./chunk-ORHGY3QB.js";import{a as b}from"./chunk-ABBHYTZL.js";import"./chunk-A6RBQFLE.js";import{a as p}from"./chunk-QE3HYJIL.js";import{a as k}from"./chunk-RFDJTSZ7.js";import{a as f}from"./chunk-DS5TO6ZD.js";import"./chunk-YCL7L6ZB.js";import"./chunk-IWEQS4A6.js";import"./chunk-QVZVZ2TH.js";import"./chunk-HOCDVTA7.js";import"./chunk-EKYTM7J4.js";import"./chunk-AJAH6JFS.js";import"./chunk-PHWG56X4.js";import"./chunk-XVF2CJMZ.js";import"./chunk-KRBDNKGY.js";import{a as g}from"./chunk-OA25OZFH.js";import"./chunk-42DDVEBL.js";import"./chunk-IGPEYEWI.js";import"./chunk-VNYEAL6H.js";import"./chunk-N5SZHZZP.js";import"./chunk-K6EM5QMC.js";import"./chunk-EH4A6QLQ.js";import"./chunk-RIFWXPPJ.js";import"./chunk-W73Y4JTB.js";import"./chunk-RBU3GVPY.js";import"./chunk-C33NXJNH.js";import"./chunk-5H2KFPOD.js";import"./chunk-EBO5CZG3.js";import"./chunk-WX24VINF.js";import{a as v}from"./chunk-OCKAGFKQ.js";import{b as s}from"./chunk-IE7HJE6I.js";import{A as h,B}from"./chunk-P5UJIVHH.js";import"./chunk-VCUJM2P2.js";import"./chunk-PNTQJ5ZY.js";import"./chunk-P45OKA3D.js";import{a as e}from"./chunk-U7JQSSPD.js";import"./chunk-VV2IBFUQ.js";import"./chunk-6AYZ2ZVW.js";import"./chunk-EOMEBOYD.js";import"./chunk-2TPDHRRV.js";import"./chunk-KQN5ZURG.js";import"./chunk-UB5XWXZZ.js";import"./chunk-Y7Z3DYSJ.js";import"./chunk-XS7UUVPQ.js";import{a as u}from"./chunk-GOZAE5SK.js";import"./chunk-GVTLUYA2.js";import"./chunk-BHGUITJJ.js";import"./chunk-VZNGURHD.js";import"./chunk-LGFZXCM7.js";function n(t){return f(i(t).children[3].childNodes[0])}var L=(t,r)=>p(r.nicks).includes(k(t));function P(t){let r=b.find(o=>L(t,o));if(r)return r.id}var E=t=>p(t).map(P).filter(r=>r).join(";");function S(t){let r=u(/`~(?<buffs>.*)~`/,n(t));return r?E(r):""}var w=t=>x(i(t).children[2].children[0].href);function c(t){let{target:r}=t;y(w(r),S(r)),e("privateMsg","Buff")}var N=t=>g(i(t).children[2].children[0]);function R(t){let r=n(t);return r.length>140?`${r.substring(0,140)}...`:r}function $(t){if(!s("enableChatParsing"))return;let{target:r}=t;window.openQuickMsgDialog(N(r),"",R(r)),t.preventDefault(),e("privateMsg","parseReply")}var A=[["pmBuffBtn",c],["fa-reply",$],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]];function D(t){let{target:r}=t,o=A.find(m=>T(r,m));o&&o[1](t)}function l(t){v(t,D)}var Q=t=>[f(t.children[2]),t.children[3]];function V(t){if(!s("privateMsgButtons"))return;U(t,6,0).map(Q).forEach(([o,m])=>{d(m,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${h+o}">Send</a> | <a class="pmSecureUrl" href="${B+o}">Trade</a> ]`)})}function W(){let t=I();t&&(V(t),C(1),l(t))}function j(){M("type")==="1"?(a("PrivateMsg",1,6),W()):a("OutBox",1,4)}export{j as default};
//# sourceMappingURL=privateMsg-TVWOG3RN.js.map