import{a as D,b as J}from"./chunk-CRAE2FG7.js";import{a as W}from"./chunk-4L6DULK6.js";import"./chunk-3QQLACHP.js";import"./chunk-F2PP5XBI.js";import"./chunk-KT35GFEE.js";import"./chunk-YPHBHMKN.js";import"./chunk-LJLHNYN6.js";import"./chunk-XT5XONGY.js";import"./chunk-ZBYHF7IJ.js";import{a as R}from"./chunk-LG6BDR3I.js";import{a as T}from"./chunk-MHT7HD4B.js";import"./chunk-7WHQNAGA.js";import{a as O}from"./chunk-K7XSORZB.js";import"./chunk-DGBEEUA5.js";import"./chunk-BQXMFU6E.js";import"./chunk-LERCGRM4.js";import{a as Q}from"./chunk-Q5PEDYJB.js";import"./chunk-VJNUTBRD.js";import"./chunk-BDSEVGHU.js";import{a as j}from"./chunk-WIQ6XRGI.js";import{a as P}from"./chunk-XFPCR5GW.js";import{a as F}from"./chunk-RGCESRKS.js";import"./chunk-XVEYCRE7.js";import"./chunk-4LUQSMNM.js";import"./chunk-SOHEEUVK.js";import"./chunk-ROTCIKTR.js";import{D as A,X as d,Y as p,a as q,d as f,ea as u,fa as g,ga as $,ha as _,ia as h,t as v,u as S,w as E,x}from"./chunk-HPOEZKZ4.js";import{a as i}from"./chunk-6QEKDVOV.js";import"./chunk-B2YROL26.js";import"./chunk-UHGSE7LB.js";import"./chunk-K25CWRN6.js";import"./chunk-RRWHRVGA.js";import"./chunk-4X57LHCN.js";import"./chunk-6QG6UGYA.js";import{b as N}from"./chunk-JMO45TBP.js";import{a as y}from"./chunk-JEN6RTKA.js";import"./chunk-3LGJ7KIX.js";import"./chunk-AGN2GYZS.js";import"./chunk-FC2T2RFK.js";import"./chunk-ZRLD7TYA.js";import"./chunk-WJQ3A2NI.js";import"./chunk-EAEJ7O2I.js";import"./chunk-UPYTFADC.js";import"./chunk-C54IMWL7.js";import"./chunk-7XNCVM7C.js";import"./chunk-S5YTVKJ4.js";import"./chunk-7PPLM4HV.js";import"./chunk-SLJOWJGX.js";import"./chunk-QLD5CDI7.js";import"./chunk-ULD7YHXO.js";import{a as C}from"./chunk-ZKTRQIGV.js";import"./chunk-I2K74DRD.js";import"./chunk-YI3QHXMF.js";import"./chunk-NR3OO2TM.js";import"./chunk-RGYUH6OH.js";import"./chunk-YCWZIL7K.js";import"./chunk-CPJOSTWF.js";import"./chunk-O3NTOCCL.js";import"./chunk-RBVLOJQS.js";import"./chunk-G4AQ6G7L.js";import"./chunk-IYSXGPFG.js";import"./chunk-B2AFMQVU.js";import"./chunk-7D7WYX4S.js";function k(n,e){return Q(D,J,n,e)}function ee(n){let e;return{c(){e=x("OneByOne")},m(t,o){v(t,e,o)},d(t){t&&S(e)}}}function te(n){let e,t,o;return t=new R({props:{disabled:n[0],$$slots:{default:[ee]},$$scope:{ctx:n}}}),t.$on("click",n[1]),{c(){e=E("span"),u(t.$$.fragment),A(e,"class","svelte-erebu9")},m(r,a){v(r,e,a),g(t,e,null),o=!0},p(r,[a]){let c={};a&1&&(c.disabled=r[0]),a&8192&&(c.$$scope={dirty:a,ctx:r}),t.$set(c)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){r&&S(e),$(t)}}}function ne(n,e,t){let o=0,r=P({className:"fshSpinner fshRelative",style:{height:"90px"}}),a=s=>F(s.children[0]),c=s=>s.id.split("-").at(-1),G=()=>Promise.resolve({s:1}),H=()=>j("trade-create-selected"),K=()=>document.forms.sendItemForm.elements.target_username.value;function M(s,m){m.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(s),a(s))}async function U(s,m,l){let w=await m;if(w.s){a(l),l.replaceWith(r);let B=await k(s,[c(l)]);return M(l,B),B}return w}let V=()=>C(U,K()),X=s=>s.reduce(V(),G());function Y(s){s.s?T("Items sent successfully!"):T(s.e.message)}async function Z(){let s=H();if(!s.length)return;i("Trade","oneByOne"),t(0,o=1);let m=await X(s);Y(m),t(0,o=0)}return[o,Z]}var I=class extends h{constructor(e){super(),_(this,e,ne,te,f,{})}},L=I;function re(n){let e,t;return e=new W({props:{wantsTagged:"1"}}),e.$on("perf",n[0]),e.$on("select",n[1]),e.$on("toggle",n[2]),{c(){u(e.$$.fragment)},m(o,r){g(e,o,r),t=!0},p:q,i(o){t||(d(e.$$.fragment,o),t=!0)},o(o){p(e.$$.fragment,o),t=!1},d(o){$(e,o)}}}function oe(n){return[()=>i("Trade","doPerf"),r=>i("Trade","doSelect",r.detail),()=>i("Trade","toggleSelectST")]}var b=class extends h{constructor(e){super(),_(this,e,oe,re,f,{})}},z=b;var se=n=>new L({target:n.parentNode});function ae(){let n=y("send-items");n&&se(n)}var ie=()=>new z({target:N()});function ce(){y("trade-items")&&(O(3,ae),ie())}export{ce as default};
//# sourceMappingURL=trade-P2WGP7OL.js.map