import{i as e}from"./Modal-BueFqMNE.js"
import{S as t,O as i,P as s,bF as n,bG as a,bA as d,bD as l,bH as v,R as c,a7 as r,T as o,U as u,W as m,X as f,a8 as g,a4 as b,s as p,br as h,b5 as x,_ as y,a5 as C,a3 as $,Q as D,av as A,bp as w,ce as M}from"./calfSystem-ChzN4Q-P.js"
import{m as T,v as H}from"./view-BCMlZtL4.js"
import{M as k}from"./ModalTitled-C-7Cgn78.js"
import{a as S}from"./addCommas-C_h2HN8s.js"
function L(e,t,i){const s=e.slice()
return s[20]=t[i].attributes,s[21]=t[i].class,s[22]=t[i].id,s[23]=t[i].level,s[24]=t[i].name,s[25]=t[i].type,s[26]=t[i].hours,s[27]=t[i].mins,s}function P(e){let t,i,s,n,a,d,l
return{c(){t=c("button"),i=r("Accept Offer"),s=r("\n         \n        "),n=c("button"),a=r("Decline Offer"),u(t,"class","custombutton svelte-hxs3gy"),t.disabled=e[1],u(t,"type","button"),u(n,"class","custombutton svelte-hxs3gy"),n.disabled=e[1],u(n,"type","button")},m(v,c){m(v,t,c),f(t,i),m(v,s,c),m(v,n,c),f(n,a),d||(l=[y(t,"click",e[11]),y(n,"click",e[10])],d=!0)},p(e,i){2&i&&(t.disabled=e[1]),2&i&&(n.disabled=e[1])},d(e){e&&(b(t),b(s),b(n)),d=!1,C(l)}}}function _(e){let t,i,s,n,a,d
return{c(){t=c("button"),i=r("Send Expedition ("),s=r(e[5]),n=r("g)"),u(t,"class","custombutton svelte-hxs3gy"),t.disabled=e[1],u(t,"type","button")},m(l,v){m(l,t,v),f(t,i),f(t,s),f(t,n),a||(d=y(t,"click",e[12]),a=!0)},p(e,i){32&i&&g(s,e[5]),2&i&&(t.disabled=e[1])},d(e){e&&b(t),a=!1,d()}}}function j(e){let t,i,s,n,a,d,l,v,p,y,C,$,D,A,w,M,T,H,k,L,P,_,j,O,E,G,N,R,F,U,q,z,B,Q,V,W,X,Y,I,J,K,Z,ee,te,ie,se,ne,ae,de,le,ve,ce,re,oe,ue,me,fe,ge,be,pe,he,xe,ye,Ce,$e,De,Ae,we,Me,Te,He,ke,Se,Le,Pe,_e,je=e[2].name+"",Oe=S(e[2].gold)+"",Ee=e[2].hire_time/3600+"",Ge=e[2].hours+"",Ne=e[2].mins+"",Re=e[2].level+"",Fe=e[8][e[2].class]+"",Ue=e[7][e[2].type]+"",qe=e[2].attributes[0].value+"",ze=e[2].attributes[1].value+"",Be=e[2].attributes[2].value+"",Qe=e[2].attributes[3].value+"",Ve=e[2].attributes[4].value+""
return{c(){t=c("div"),i=c("div"),s=c("b"),n=r(je),a=o(),d=c("div"),l=c("img"),p=o(),y=c("div"),C=c("div"),C.textContent="Hire Price:",$=o(),D=c("div"),A=c("b"),w=r(Oe),M=o(),T=c("img"),k=o(),L=c("div"),L.textContent="Hire Time:",P=o(),_=c("div"),j=c("b"),O=r(Ee),E=r(" hour(s)"),G=o(),N=c("div"),N.textContent="Offer Time Left:",R=o(),F=c("div"),U=c("b"),q=r(Ge),z=r(" hour(s) "),B=c("b"),Q=r(Ne),V=r(" min(s)"),W=o(),X=c("div"),Y=c("div"),Y.textContent="Level:",I=o(),J=c("div"),K=r(Re),Z=o(),ee=c("div"),ee.textContent="Classification:",te=o(),ie=c("div"),se=r(Fe),ne=o(),ae=c("div"),ae.textContent="Type:",de=o(),le=c("div"),ve=r(Ue),ce=o(),re=c("div"),re.textContent="Attack:",oe=o(),ue=c("div"),me=r(qe),fe=o(),ge=c("div"),ge.textContent="Defense:",be=o(),pe=c("div"),he=r(ze),xe=o(),ye=c("div"),ye.textContent="Armor:",Ce=o(),$e=c("div"),De=r(Be),Ae=o(),we=c("div"),we.textContent="HP:",Me=o(),Te=c("div"),He=r(Qe),ke=o(),Se=c("div"),Se.textContent="Damage:",Le=o(),Pe=c("div"),_e=r(Ve),u(l,"alt","alt"),u(l,"height","125"),h(l.src,v=x+"mercs/"+e[2].id+".png")||u(l,"src",v),u(l,"width","125"),u(C,"class","svelte-hxs3gy"),u(T,"alt","Gold"),u(T,"class","gold svelte-hxs3gy"),h(T.src,H=x+"currency/0.png")||u(T,"src",H),u(D,"class","svelte-hxs3gy"),u(L,"class","svelte-hxs3gy"),u(_,"class","svelte-hxs3gy"),u(N,"class","svelte-hxs3gy"),u(F,"class","svelte-hxs3gy"),u(y,"class","offer svelte-hxs3gy"),u(t,"class","merc svelte-hxs3gy"),u(X,"class","attribs svelte-hxs3gy")},m(e,v){m(e,t,v),f(t,i),f(i,s),f(s,n),f(t,a),f(t,d),f(d,l),f(t,p),f(t,y),f(y,C),f(y,$),f(y,D),f(D,A),f(A,w),f(D,M),f(D,T),f(y,k),f(y,L),f(y,P),f(y,_),f(_,j),f(j,O),f(_,E),f(y,G),f(y,N),f(y,R),f(y,F),f(F,U),f(U,q),f(F,z),f(F,B),f(B,Q),f(F,V),m(e,W,v),m(e,X,v),f(X,Y),f(X,I),f(X,J),f(J,K),f(X,Z),f(X,ee),f(X,te),f(X,ie),f(ie,se),f(X,ne),f(X,ae),f(X,de),f(X,le),f(le,ve),f(X,ce),f(X,re),f(X,oe),f(X,ue),f(ue,me),f(X,fe),f(X,ge),f(X,be),f(X,pe),f(pe,he),f(X,xe),f(X,ye),f(X,Ce),f(X,$e),f($e,De),f(X,Ae),f(X,we),f(X,Me),f(X,Te),f(Te,He),f(X,ke),f(X,Se),f(X,Le),f(X,Pe),f(Pe,_e)},p(e,t){4&t&&je!==(je=e[2].name+"")&&g(n,je),4&t&&!h(l.src,v=x+"mercs/"+e[2].id+".png")&&u(l,"src",v),4&t&&Oe!==(Oe=S(e[2].gold)+"")&&g(w,Oe),4&t&&Ee!==(Ee=e[2].hire_time/3600+"")&&g(O,Ee),4&t&&Ge!==(Ge=e[2].hours+"")&&g(q,Ge),4&t&&Ne!==(Ne=e[2].mins+"")&&g(Q,Ne),4&t&&Re!==(Re=e[2].level+"")&&g(K,Re),4&t&&Fe!==(Fe=e[8][e[2].class]+"")&&g(se,Fe),4&t&&Ue!==(Ue=e[7][e[2].type]+"")&&g(ve,Ue),4&t&&qe!==(qe=e[2].attributes[0].value+"")&&g(me,qe),4&t&&ze!==(ze=e[2].attributes[1].value+"")&&g(he,ze),4&t&&Be!==(Be=e[2].attributes[2].value+"")&&g(De,Be),4&t&&Qe!==(Qe=e[2].attributes[3].value+"")&&g(He,Qe),4&t&&Ve!==(Ve=e[2].attributes[4].value+"")&&g(_e,Ve)},d(e){e&&(b(t),b(W),b(X))}}}function O(e){let t
return{c(){t=c("div"),t.textContent="Your expedition returned without finding any mercenaries.",u(t,"class","no-offer svelte-hxs3gy")},m(e,i){m(e,t,i)},d(e){e&&b(t)}}}function E(e){let t
return{c(){t=c("div"),t.textContent="[ no active mercenaries ]",u(t,"class","no-active svelte-hxs3gy")},m(e,i){m(e,t,i)},p:$,d(e){e&&b(t)}}}function G(e){let t,i=D(e[6]),s=[]
for(let t=0;t<i.length;t+=1)s[t]=N(L(e,i,t))
return{c(){for(let e=0;e<s.length;e+=1)s[e].c()
t=A()},m(e,i){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,i)
m(e,t,i)},p(e,n){if(8642&n){let a
for(i=D(e[6]),a=0;a<i.length;a+=1){const d=L(e,i,a)
s[a]?s[a].p(d,n):(s[a]=N(d),s[a].c(),s[a].m(t.parentNode,t))}for(;a<s.length;a+=1)s[a].d(1)
s.length=i.length}},d(e){e&&b(t),w(s,e)}}}function N(e){let t,i,s,n,a,d,l,v,p,C,$,D,A,w,M,T,H,k,S,L,P,_,j,O,E,G,N=e[24]+"",R=e[26]+"",F=e[27]+""
function U(){return e[14](e[22])}return{c(){t=c("div"),i=c("div"),s=c("b"),n=r(N),a=o(),d=c("div"),l=c("img"),C=o(),$=c("div"),$.textContent="Time Remaining",D=o(),A=c("div"),w=c("b"),M=r(R),T=r(" hour(s) "),H=c("b"),k=r(F),S=r(" min(s)"),L=o(),P=c("div"),_=c("button"),j=r("Disband"),O=o(),u(l,"alt","alt"),u(l,"class","tip-static"),u(l,"data-tipped",v='<div style="column-gap: 2px; display: grid;\n                    grid-template-columns: repeat(2, 1fr);">\n                    <div>Name:</div><div>'+e[24]+"</div>\n                      <div>Level:</div><div>"+e[23]+"</div>\n                      <div>Classification:</div><div>"+e[8][e[21]]+"</div>\n                      <div>Type:</div><div>"+e[7][e[25]]+"</div>\n                      <div>Attack:</div><div>"+e[20][0].value+"</div>\n                      <div>Defense:</div><div>"+e[20][1].value+"</div>\n                      <div>Armor:</div><div>"+e[20][2].value+"</div>\n                      <div>HP:</div><div>"+e[20][3].value+"</div>\n                      <div>Damage:</div><div>"+e[20][4].value+"</div>\n                      </div>"),u(l,"height","125"),h(l.src,p=x+"mercs/"+e[22]+".png")||u(l,"src",p),u(l,"width","125"),u(_,"class","custombutton svelte-hxs3gy"),_.disabled=e[1],u(_,"type","button"),u(P,"class","disband svelte-hxs3gy"),u(t,"class","active-merc svelte-hxs3gy")},m(e,v){m(e,t,v),f(t,i),f(i,s),f(s,n),f(t,a),f(t,d),f(d,l),f(t,C),f(t,$),f(t,D),f(t,A),f(A,w),f(w,M),f(A,T),f(A,H),f(H,k),f(A,S),f(t,L),f(t,P),f(P,_),f(_,j),f(t,O),E||(G=y(_,"click",U),E=!0)},p(t,i){e=t,64&i&&N!==(N=e[24]+"")&&g(n,N),64&i&&v!==(v='<div style="column-gap: 2px; display: grid;\n                    grid-template-columns: repeat(2, 1fr);">\n                    <div>Name:</div><div>'+e[24]+"</div>\n                      <div>Level:</div><div>"+e[23]+"</div>\n                      <div>Classification:</div><div>"+e[8][e[21]]+"</div>\n                      <div>Type:</div><div>"+e[7][e[25]]+"</div>\n                      <div>Attack:</div><div>"+e[20][0].value+"</div>\n                      <div>Defense:</div><div>"+e[20][1].value+"</div>\n                      <div>Armor:</div><div>"+e[20][2].value+"</div>\n                      <div>HP:</div><div>"+e[20][3].value+"</div>\n                      <div>Damage:</div><div>"+e[20][4].value+"</div>\n                      </div>")&&u(l,"data-tipped",v),64&i&&!h(l.src,p=x+"mercs/"+e[22]+".png")&&u(l,"src",p),64&i&&R!==(R=e[26]+"")&&g(M,R),64&i&&F!==(F=e[27]+"")&&g(k,F),2&i&&(_.disabled=e[1])},d(e){e&&b(t),E=!1,G()}}}function R(e){let t,i,s,n,a,d,l,v,p,h,x,y,C,$,D,A,w,M,T
function H(e,t){return e[2]?P:_}let k=H(e),S=k(e),L=e[2]&&j(e),N=e[3]&&O()
function R(e,t){return e[6].length?G:E}let F=R(e),U=F(e)
return{c(){t=c("div"),i=c("div"),s=r("("),n=c("b"),a=r(e[4]),d=r(" available for hire)"),l=o(),v=c("div"),S.c(),p=o(),h=c("div"),x=c("div"),L&&L.c(),y=o(),N&&N.c(),C=o(),$=c("div"),D=o(),A=c("div"),A.innerHTML="<b>Active Mercenaries</b>",w=o(),M=c("div"),T=c("div"),U.c(),u(i,"class","top-div svelte-hxs3gy"),u(v,"class","button-div svelte-hxs3gy"),u($,"class","auto-decline svelte-hxs3gy"),u(x,"class","cols svelte-hxs3gy"),u(h,"class","result-div svelte-hxs3gy"),u(A,"class","active-title svelte-hxs3gy"),u(T,"class","active svelte-hxs3gy"),u(M,"class","lower-div svelte-hxs3gy"),u(t,"class","merc-hunter svelte-hxs3gy")},m(e,c){m(e,t,c),f(t,i),f(i,s),f(i,n),f(n,a),f(i,d),f(t,l),f(t,v),S.m(v,null),f(t,p),f(t,h),f(h,x),L&&L.m(x,null),f(x,y),N&&N.m(x,null),f(x,C),f(x,$),f(t,D),f(t,A),f(t,w),f(t,M),f(M,T),U.m(T,null)},p(e,t){16&t&&g(a,e[4]),k===(k=H(e))&&S?S.p(e,t):(S.d(1),S=k(e),S&&(S.c(),S.m(v,null))),e[2]?L?L.p(e,t):(L=j(e),L.c(),L.m(x,y)):L&&(L.d(1),L=null),e[3]?N||(N=O(),N.c(),N.m(x,C)):N&&(N.d(1),N=null),F===(F=R(e))&&U?U.p(e,t):(U.d(1),U=F(e),U&&(U.c(),U.m(T,null)))},d(e){e&&b(t),S.d(),L&&L.d(),N&&N.d(),U.d()}}}function F(e){let t
return{c(){t=r("Merc Hunter")},m(e,i){m(e,t,i)},d(e){e&&b(t)}}}function U(e){let t,i
return t=new k({props:{visible:e[0],$$slots:{title:[F],default:[R]},$$scope:{ctx:e}}}),t.$on("close",e[9]),{c(){n(t.$$.fragment)},m(e,s){a(t,e,s),i=!0},p(e,[i]){const s={}
1&i&&(s.visible=e[0]),1073741950&i&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){l(t.$$.fragment,e),i=!1},d(e){v(t,e)}}}function q(e,t,i){let{visible:s=!0}=t,n=1,a=0,d=0,l="?",v="?",c=[]
function r(e){let t=Math.floor((e-M())/60)
const i=Math.floor(t/60)
return t%=60,{hours:i,mins:t}}const o=e=>({...e,...r(e.expires)})
function u(e){i(2,a=o(e.r)),i(1,n=0)}async function m(e){var t
p("mercs","doDisband"),i(1,n=1),await(t=e,T({subcmd2:"disband",merc_id:t})),i(6,c=c.filter((({id:t})=>t!==e))),i(1,n=0)}!async function(){const e=await H()
i(6,c=e.r.mercs?.map(o)||[]),i(4,l=e.r.mercs_available.toString()),i(5,v=e.r.gold.toString()),e.r.offer?u({r:e.r.offer}):i(1,n=0)}()
return e.$$set=e=>{"visible"in e&&i(0,s=e.visible)},[s,n,a,d,l,v,c,["Normal","Champion","Elite","Super Elite","Titan","Legendary"],["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"],function(){p("mercs","close"),i(0,s=!1)},async function(){p("mercs","doDecline"),i(1,n=1),await T({subcmd2:"declineoffer"}),i(2,a=0),i(1,n=0)},async function(){p("mercs","doAccept"),i(1,n=1)
const e=await T({subcmd2:"acceptoffer"})
i(6,c=[...c,o({...a,expires:e.r.expires})]),i(4,l=e.r.mercs_available.toString()),i(2,a=0),i(1,n=0)},async function(){p("mercs","getOffer"),i(1,n=1),i(3,d=0)
const e=await T({subcmd2:"search"})
e.r?u(e):(i(2,a=0),i(3,d=1),i(1,n=0))},m,e=>m(e)]}class z extends t{constructor(e){super(),i(this,e,q,U,s,{visible:0})}}const B={visible:!0}
let Q=0
function V(){Q=e(B,Q,z)}export{V as default}
//# sourceMappingURL=mercs-Dl7ZCPCx.js.map