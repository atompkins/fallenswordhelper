import{b as ot}from"./chunk-MPJKBPXS.js";import{a as et}from"./chunk-QVBAWVNK.js";import{a as tt}from"./chunk-3K2T5RZS.js";import"./chunk-MN2NVYRQ.js";import{a as x}from"./chunk-SBZF5EAO.js";import{a as D}from"./chunk-B6OR3VYQ.js";import{a as y}from"./chunk-UH6AOJVT.js";import{a as z}from"./chunk-4A4S5E2G.js";import"./chunk-RQWL3XFM.js";import"./chunk-V2RDFCFO.js";import"./chunk-ZOM4M5CL.js";import{a as H}from"./chunk-LQQVP5PF.js";import"./chunk-OUMJ2TZS.js";import"./chunk-TF3NOQ6H.js";import{a as V}from"./chunk-CJDIJW63.js";import"./chunk-X4QNMHIE.js";import{A as k,C as g,F as o,K as X,a as h,c as K,e as W,na as Y,oa as Z,u as i,v as G,w,y as p,z as _}from"./chunk-UM32QR7D.js";import{a as F}from"./chunk-HXA7GMHU.js";import"./chunk-2WBVUEHT.js";import"./chunk-ZOQAMPPO.js";import"./chunk-SGC5GHRN.js";import{b as O}from"./chunk-2I26BJ52.js";import"./chunk-QMYGD3GE.js";import{B as P,G as R,K as L,b as M,t as N}from"./chunk-6MEG5PHL.js";import"./chunk-Q6PVLDNZ.js";import{a as U}from"./chunk-VVJVMGW6.js";function nt(e){let t,n,a,u,r;return{c(){t=p("button"),n=_("\xA0"),o(t,"class","fshTempleThree svelte-1xo8gqh"),o(t,"type","button"),o(t,"data-tooltip",a="Recall items from "+e[2])},m(l,s){G(l,t,s),i(t,n),u||(r=g(t,"click",e[7]),u=!0)},p:h,d(l){l&&w(t),u=!1,r()}}}function rt(e){let t,n,a,u,r;return{c(){t=p("button"),n=_("\xA0"),X(t,"background-image","url('"+M+"guilds/"+H()+"_mini.png')"),o(t,"type","button"),o(t,"data-tooltip",a="Rank "+e[2]),o(t,"class","svelte-1xo8gqh")},m(l,s){G(l,t,s),i(t,n),u||(r=g(t,"click",e[8]),u=!0)},p:h,d(l){l&&w(t),u=!1,r()}}}function ut(e){let t,n,a,u,r,l,s,S,q,f,$,v,B,m,J,it,A,C,E=e[1]&&O("showAdmin"),I,Q,c=e[1]&&nt(e),d=E&&rt(e);return{c(){t=p("div"),n=p("button"),a=_("\xA0"),r=k(),l=p("button"),s=_("\xA0"),q=k(),f=p("button"),$=_("\xA0"),B=k(),m=p("button"),J=_("\xA0"),A=k(),c&&c.c(),C=k(),d&&d.c(),o(n,"class","fshQuickBuff svelte-1xo8gqh"),o(n,"type","button"),o(n,"data-tooltip",u="Buff "+e[2]),o(l,"class","fshJoin svelte-1xo8gqh"),o(l,"type","button"),o(l,"data-tooltip",S="Join All Groups"+e[0]),o(f,"class","fshGold svelte-1xo8gqh"),o(f,"type","button"),o(f,"data-tooltip",v="Go to "+e[2]+"'s auctions"),o(m,"class","fshTempleTwo svelte-1xo8gqh"),o(m,"type","button"),o(m,"data-tooltip",it="Create Secure Trade to "+e[2])},m(b,T){G(b,t,T),i(t,n),i(n,a),i(t,r),i(t,l),i(l,s),i(t,q),i(t,f),i(f,$),i(t,B),i(t,m),i(m,J),i(t,A),c&&c.m(t,null),i(t,C),d&&d.m(t,null),I||(Q=[g(n,"click",e[3]),g(l,"click",e[4]),g(f,"click",e[5]),g(m,"click",e[6])],I=!0)},p(b,[T]){b[1]&&c.p(b,T),E&&d.p(b,T)},i:h,o:h,d(b){b&&w(t),c&&c.d(),d&&d.d(),I=!1,K(Q)}}}function at(e){let t=U.enableMaxGroupSizeToJoin?` < ${U.maxGroupSizeToJoin} Members`:"",n=ot(),a=D("player_id")||z(),u=et();function r(v){F("profile","quick button",v)}function l(v){v.target.blur(),r("quickbuff"),tt(a)}function s(){r("join groups"),x()}function S(){r("auctions"),y(`${N}&type=-3&tid=${a}`)}function q(){r("secure trade"),y(`${P}${u}`)}function f(){r("recall items"),y(`${L}${u}`)}function $(){r("rank"),y(`${R}members&subcmd2=changerank&member_id=${a}`)}return[t,n,u,l,s,S,q,f,$]}var j=class extends Z{constructor(t){super(),Y(this,t,at,ut,W,{})}},lt=j;function ft(e,t){return new lt({anchor:e,target:t})}function st(){let e=V('#profileLeftColumn img[src*="/avatars/"][width="200"]');e&&ft(e.nextElementSibling,e.parentNode)}export{st as default};
//# sourceMappingURL=profileInjectQuickButton-6AWCW3FY.js.map
