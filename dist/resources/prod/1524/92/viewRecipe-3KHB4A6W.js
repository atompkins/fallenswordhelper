import{a as Te}from"./chunk-YIW7EPY6.js";import{a as je}from"./chunk-365YBLX6.js";import{b as K}from"./chunk-ZS6UHCXU.js";import{a as Se}from"./chunk-H4446FYY.js";import{a as De}from"./chunk-4U7T7HTS.js";import"./chunk-EVIGSOCH.js";import{a as Fe}from"./chunk-ZK3AGOF2.js";import{a as Ee}from"./chunk-X7JOTTVY.js";import{a as ge}from"./chunk-W7IQPAFJ.js";import{a as de}from"./chunk-4NGCZM3S.js";import"./chunk-AOZMZP5H.js";import{b as pe}from"./chunk-MY4OO5AP.js";import"./chunk-DI3XCMNE.js";import"./chunk-33GAZWWN.js";import{a as S}from"./chunk-7H5ET4BP.js";import"./chunk-WCTHIQU3.js";import{a as he}from"./chunk-WA4H3QPQ.js";import"./chunk-DKWH62CP.js";import{a as fe}from"./chunk-2IOAHVVN.js";import"./chunk-GALQGYEO.js";import"./chunk-T4ZSWDX2.js";import"./chunk-WE2GCAKX.js";import{a as ve}from"./chunk-JDAAN4LA.js";import"./chunk-IQ37ZVMO.js";import{A as Ie,C as a,D as H,E,F as U,G as r,S as ke,U as we,V as Ce,W as T,X as G,Y as J,b as _e,d as be,da as ye,ea as Re,fa as qe,ga as xe,ha as Ae,r as i,s as N,t as B,v as c,w as I,x as k,z}from"./chunk-OB44S7IV.js";import"./chunk-OI7KRNQS.js";import"./chunk-C7L2X63R.js";import{a as V}from"./chunk-WTCWPEJX.js";import{a as L}from"./chunk-H2ANYIFW.js";import"./chunk-KUIVOAMB.js";import"./chunk-O6E23IRT.js";import"./chunk-TLAXHTSP.js";import"./chunk-RUEPLNRL.js";import"./chunk-O7K3SHEW.js";import"./chunk-EZQ2GDBH.js";import{a as le}from"./chunk-GVTRKM2F.js";import"./chunk-EZ536MXS.js";import"./chunk-LVBWHS3E.js";import"./chunk-OR37OWF3.js";import{Y as ae,b as me,r as ce}from"./chunk-FQGZN2JL.js";import"./chunk-BYAZQWO5.js";import"./chunk-MR322WHU.js";function Ge(t){let[e,n]=fe(S("tr:nth-child(2) td",t)).split("/").map(m=>parseInt(m,10));return{have:e,need:n}}function Me(){return L(`#pCC td[background^="${me}ui/inventory/"]`).map(e=>e.parentElement.parentElement).map(Ge)}function W(){return Me().reduce((e,n)=>Math.min(e,Math.floor(n.have/n.need)),1/0)}function X(t){return je({subcmd:"doinvent",recipe_id:t})}function Qe(t){let e=De(t);return e.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:e},s:!1}}function Y(t){return he({cmd:"inventing",subcmd:"doinvent",recipe_id:t}).then(Qe)}function Z(t){return Fe(X,Y,t)}function Pe(t){let e;return{c(){e=I("(max)")},m(n,m){N(n,e,m)},d(n){n&&B(e)}}}function Le(t){let e,n,m,s,p,o,d;return{c(){e=c("div"),n=c("div"),n.textContent="INFORMATION",m=k(),s=c("div"),p=I(t[4]),r(n,"background","#8E8668"),r(n,"color","#FFF"),r(n,"font-size","smaller"),r(e,"border","2px solid #FFF"),r(e,"margin","10px auto"),r(e,"width","80%"),r(e,"background","#D3CFC1")},m(u,_){N(u,e,_),i(e,n),i(e,m),i(e,s),i(s,p),d=!0},p(u,_){(!d||_&16)&&E(p,u[4])},i(u){d||(u&&ke(()=>{o||(o=J(e,K,{},!0)),o.run(1)}),d=!0)},o(u){u&&(o||(o=J(e,K,{},!1)),o.run(0)),d=!1},d(u){u&&B(e),u&&o&&o.end()}}}function Oe(t){let e,n,m,s,p,o,d,u,_,b,j,g,h,C,y,F=t[1]+t[2]+"",R,q,M,ne,D,x,ie,Q,re,A,oe,P,w,O,se;o=new Se({props:{$$slots:{default:[Pe]},$$scope:{ctx:t}}}),o.$on("click",t[5]);let f=t[4]&&Le(t);return{c(){e=c("form"),n=c("label"),n.textContent="Select how many to quick invent",m=k(),s=c("input"),p=k(),ye(o.$$.fragment),d=k(),u=c("input"),_=k(),b=c("div"),f&&f.c(),j=k(),g=c("div"),h=c("div"),C=k(),y=c("p"),R=I(F),q=I(" / "),M=I(t[0]),ne=k(),D=c("div"),x=c("div"),ie=I("Successes: "),Q=I(t[1]),re=k(),A=c("div"),oe=I("Failures: "),P=I(t[2]),a(n,"for","quick-invent-amount"),a(s,"type","number"),a(s,"id","quick-invent-amount"),a(s,"name","quick-invent-amount"),a(s,"min","0"),a(s,"step","1"),a(s,"class","custominput fshNumberInput"),s.required=!0,a(u,"class","custombutton"),a(u,"type","submit"),u.value="Quick Invent",r(u,"margin-left","8px"),a(h,"class","composing-progress-bar"),r(h,"background-position","right top"),r(h,"width",t[3]+"%"),r(h,"transition","width 0.4s ease-out"),r(h,"position","absolute"),r(h,"top","0px"),r(y,"position","relative"),a(g,"class","composing-progress"),r(g,"margin","0px auto"),r(g,"font-weight","bold"),r(g,"color","#fff"),r(g,"left","0px"),r(x,"display","inline-block"),r(x,"width","250px"),a(x,"class","fshQs fshGreen"),r(A,"display","inline-block"),r(A,"width","250px"),a(A,"class","fshQs fshRed"),r(D,"margin-top","36px"),a(e,"class","fshCenter"),r(e,"margin-top","12px")},m(l,v){N(l,e,v),i(e,n),i(e,m),i(e,s),U(s,t[0]),i(e,p),Re(o,e,null),i(e,d),i(e,u),i(e,_),i(e,b),f&&f.m(b,null),i(b,j),i(b,g),i(g,h),i(g,C),i(g,y),i(y,R),i(y,q),i(y,M),i(b,ne),i(b,D),i(D,x),i(x,ie),i(x,Q),i(D,re),i(D,A),i(A,oe),i(A,P),w=!0,O||(se=[z(s,"input",t[9]),z(e,"submit",Ie(t[6]))],O=!0)},p(l,[v]){v&1&&H(s.value)!==l[0]&&U(s,l[0]);let ue={};v&2048&&(ue.$$scope={dirty:v,ctx:l}),o.$set(ue),l[4]?f?(f.p(l,v),v&16&&T(f,1)):(f=Le(l),f.c(),T(f,1),f.m(b,j)):f&&(we(),G(f,1,1,()=>{f=null}),Ce()),(!w||v&8)&&r(h,"width",l[3]+"%"),(!w||v&6)&&F!==(F=l[1]+l[2]+"")&&E(R,F),(!w||v&1)&&E(M,l[0]),(!w||v&2)&&E(Q,l[1]),(!w||v&4)&&E(P,l[2])},i(l){w||(T(o.$$.fragment,l),T(f),w=!0)},o(l){G(o.$$.fragment,l),G(f),w=!1},d(l){l&&B(e),qe(o),f&&f.d(),O=!1,_e(se)}}}function Ve(t,e,n){let{max:m}=e,{recipeID:s}=e,p=1,o=0,d=0,u=0,_="";function b(){n(1,o=0),n(2,d=0),n(3,u=0),n(4,_="")}function j(){n(0,p=m),V("inventing","maxInventButton")}async function g(){if(V("inventing","quickInvent"),!p)return;b(),Array(p).fill(s).reduce(async(y,F)=>{let R=await y;if(!R||R.s===!0){let q=await Z(F);return q.s===!1?n(4,_=q.e.message):q.r.success_count>0?n(1,o+=1):n(2,d+=1),n(3,u=100*((o+d)/p)),q}return R},Promise.resolve())}function h(){p=H(this.value),n(0,p)}return t.$$set=C=>{"max"in C&&n(7,m=C.max),"recipeID"in C&&n(8,s=C.recipeID)},[p,o,d,u,_,j,g,m,s,h]}var $=class extends Ae{constructor(e){super(),xe(this,e,Ve,Oe,be,{max:7,recipeID:8})}},Ne=$;function ze(t,e){return new Ne({props:t,target:e})}function He(t){let n=t.insertRow(-1).insertCell(-1);n.className="header",n.setAttribute("height","1")}function Ue(t){let n=t.insertRow(-1).insertCell(-1);return n.className="fshCenter",n}function ee(){let t=S('input[name="recipe_id"]');if(!t)return;let e=W(),n=pe().lastElementChild;He(n),ze({max:e,recipeID:t.value},Ue(n))}function Je(t){if(!t)return;let e=le(/\/items\/(?<id>\d+)\.gif/,t.src);if(e)return e}function Ke(t){return`${ae}items${ce}view&item_id=${t}`}function We(t){return Ee({href:Ke(t),target:"_blank"})}function Be(t,e){let n=Je(e);if(!n)return;let m=We(n);ge(m,t),de(m,t)}function Xe(t){Be(t,t)}function Ye(){let t=Te('.//b[.="Target Invention"]/../../following-sibling::*[1]//img'),e=S("#pCC b");Be(e,t)}function Ze(){L('#pCC img[src*="/items/"]').forEach(Xe)}function te(){Ye(),Ze()}function $e(){ve()&&(te(),ee())}export{$e as default};
//# sourceMappingURL=viewRecipe-3KHB4A6W.js.map
