import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as m,q as f}from"./index-4e7b84b7.js"
import{I as d,S as b,ax as h,an as g,c as j,c9 as x,O as k,ca as y,bN as T,bC as q,s as v,W as S,D as $}from"./calfSystem-03050396.js"
import{c as G}from"./currentGuildId-4235046f.js"
import{a as w}from"./getIsOwnGuild-80414820.js"
import{a as B}from"./profile-45520c62.js"
import{o as J}from"./openQuickBuffByName-37d4d190.js"
import"./colouredDots-5998101c.js"
import"./batch-003cd06a.js"
import"./onlineDot-77b2d184.js"
import"./doStatTotal-5e9c51fd.js"
import"./executeAll-19d23fbc.js"
import"./playerName-3ca7fe81.js"
import"./intValue-1ce02c09.js"
import"./valueText-c92275e2.js"
import"./interceptSubmit-3f95205d.js"
import"./formToUrl-ef9a2d78.js"
import"./fshOpen-363b7f52.js"
function N(t){let o,e,b,h,j,x,k,y,T,q,v,S,$,w,B,J,N=t[1]&&d("showAdmin"),A=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),C=N&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),x=a(" "),k=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),S=a(" "),$=p(),A&&A.c(),w=p(),C&&C.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,b),c(o,h),c(o,j),c(j,x),c(o,k),c(o,y),c(y,T),c(o,q),c(o,v),c(v,S),c(o,$),A&&A.m(o,null),c(o,w),C&&C.m(o,null),B||(J=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&A.p(t,o),N&&C.p(t,o)},i:l,o:l,d(t){t&&u(o),A&&A.d(),C&&C.d(),B=!1,m(J)}}}function A(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=B()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),J(a)},function(){i("join groups"),x()},function(){i("auctions"),k(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),k(`${T}${a}`)},function(){i("recall items"),k(`${q}${a}`)},function(){i("rank"),k(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class C extends t{constructor(t){super(),o(this,t,A,N,e,{})}}function D(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new C({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-111b26c4.js.map
