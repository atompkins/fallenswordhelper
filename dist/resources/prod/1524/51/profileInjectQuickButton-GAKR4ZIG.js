import{D as x,E as tt,a as h,b as X,c as Y,d as n,e as T,f as $,h as c,i as _,j as k,l as g,n as o,r as Z}from"./chunk-ZHHJEY5V.js";import{b as W}from"./chunk-TGRNZ24C.js";import{a as F}from"./chunk-TEAKNM2K.js";import{a as et}from"./chunk-FH46L66F.js";import{a as K}from"./chunk-42GQPN6K.js";import{a as L}from"./chunk-E7MKAKV7.js";import"./chunk-V3H5BBPU.js";import{a as H}from"./chunk-OFZ4M2H7.js";import{a as O}from"./chunk-NPQLLSM5.js";import"./chunk-OFLIN3VT.js";import{a as D}from"./chunk-VYP6BYDA.js";import"./chunk-MHANGBVH.js";import"./chunk-57PZ6XJI.js";import{a as y}from"./chunk-UNW33QGP.js";import"./chunk-UWAT3VA7.js";import{a as V}from"./chunk-N2KVYLIG.js";import"./chunk-PKDG64MH.js";import"./chunk-2B42SRXB.js";import"./chunk-TDNJGM62.js";import"./chunk-TP7JP7VV.js";import{b as M}from"./chunk-HAINOYE5.js";import{a as Q}from"./chunk-AN5TC666.js";import"./chunk-B7PLPUHK.js";import{D as z,H as A,q as C,y as R}from"./chunk-YNXRNCRL.js";import{b as P}from"./chunk-7DPOBF7C.js";function it(e){let t,i,a,u,r;return{c(){t=c("button"),i=_("\xA0"),o(t,"class","fshTempleThree svelte-1xo8gqh"),o(t,"type","button"),o(t,"data-tooltip",a="Recall items from "+e[2])},m(l,m){T(l,t,m),n(t,i),u||(r=g(t,"click",e[7]),u=!0)},p:h,d(l){l&&$(t),u=!1,r()}}}function rt(e){let t,i,a,u,r;return{c(){t=c("button"),i=_("\xA0"),Z(t,"background-image","url('"+P+"guilds/"+H()+"_mini.png')"),o(t,"type","button"),o(t,"data-tooltip",a="Rank "+e[2]),o(t,"class","svelte-1xo8gqh")},m(l,m){T(l,t,m),n(t,i),u||(r=g(t,"click",e[8]),u=!0)},p:h,d(l){l&&$(t),u=!1,r()}}}function ut(e){let t,i,a,u,r,l,m,w,q,s,G,v,S,f,j,nt,U,N,E=e[1]&&M("showAdmin"),I,J,p=e[1]&&it(e),d=E&&rt(e);return{c(){t=c("div"),i=c("button"),a=_("\xA0"),r=k(),l=c("button"),m=_("\xA0"),q=k(),s=c("button"),G=_("\xA0"),S=k(),f=c("button"),j=_("\xA0"),U=k(),p&&p.c(),N=k(),d&&d.c(),o(i,"class","fshQuickBuff svelte-1xo8gqh"),o(i,"type","button"),o(i,"data-tooltip",u="Buff "+e[2]),o(l,"class","fshJoin svelte-1xo8gqh"),o(l,"type","button"),o(l,"data-tooltip",w="Join All Groups"+e[0]),o(s,"class","fshGold svelte-1xo8gqh"),o(s,"type","button"),o(s,"data-tooltip",v="Go to "+e[2]+"'s auctions"),o(f,"class","fshTempleTwo svelte-1xo8gqh"),o(f,"type","button"),o(f,"data-tooltip",nt="Create Secure Trade to "+e[2])},m(b,B){T(b,t,B),n(t,i),n(i,a),n(t,r),n(t,l),n(l,m),n(t,q),n(t,s),n(s,G),n(t,S),n(t,f),n(f,j),n(t,U),p&&p.m(t,null),n(t,N),d&&d.m(t,null),I||(J=[g(i,"click",e[3]),g(l,"click",e[4]),g(s,"click",e[5]),g(f,"click",e[6])],I=!0)},p(b,[B]){b[1]&&p.p(b,B),E&&d.p(b,B)},i:h,o:h,d(b){b&&$(t),p&&p.d(),d&&d.d(),I=!1,X(J)}}}function at(e){let t=Q.enableMaxGroupSizeToJoin?` < ${Q.maxGroupSizeToJoin} Members`:"",i=W(),a=O("player_id")||K(),u=F();function r(v){V("profile","quick button",v)}function l(v){v.target.blur(),r("quickbuff"),L(u)}function m(){r("join groups"),et()}function w(){r("auctions"),y(`${C}&type=-3&tid=${a}`)}function q(){r("secure trade"),y(`${R}${u}`)}function s(){r("recall items"),y(`${A}${u}`)}function G(){r("rank"),y(`${z}members&subcmd2=changerank&member_id=${a}`)}return[t,i,u,l,m,w,q,s,G]}var ot=class extends tt{constructor(t){super();x(this,t,at,ut,Y,{})}},lt=ot;function st(){let e=D('#profileLeftColumn img[src*="/avatars/"][width="200"]');!e||new lt({anchor:e.nextElementSibling,target:e.parentNode})}export{st as default};
//# sourceMappingURL=profileInjectQuickButton-GAKR4ZIG.js.map