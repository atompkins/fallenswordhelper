import{a as T}from"./chunk-DZRO2VFW.js";import"./chunk-ZS6UHCXU.js";import{a as D,b as J}from"./chunk-FSEVADPT.js";import"./chunk-HJ4E6JLN.js";import{a as W}from"./chunk-KWZ7JWWO.js";import"./chunk-X4IV7YTI.js";import"./chunk-E3RCZIKM.js";import"./chunk-4AGIFBOY.js";import"./chunk-SO2EGR4N.js";import"./chunk-IIKYETGI.js";import"./chunk-YRPFIZYM.js";import{a as Q}from"./chunk-H4446FYY.js";import"./chunk-NG4HKLH6.js";import{a as R}from"./chunk-CXJHL2KO.js";import"./chunk-JO3N2T2B.js";import"./chunk-4U7T7HTS.js";import"./chunk-EVIGSOCH.js";import{a as F}from"./chunk-ZK3AGOF2.js";import"./chunk-MD6UYHMZ.js";import{a as O}from"./chunk-NTTJB2O5.js";import"./chunk-WRHTWSD6.js";import{a as A}from"./chunk-B4DZ2JJW.js";import{a as x}from"./chunk-NJN6T7TI.js";import"./chunk-4NGCZM3S.js";import"./chunk-AOZMZP5H.js";import"./chunk-MB2DX4ZC.js";import"./chunk-NQ7NIM5V.js";import{b as E}from"./chunk-MY4OO5AP.js";import{a as y}from"./chunk-DI3XCMNE.js";import"./chunk-PVHDKJRP.js";import"./chunk-KF2BXDH2.js";import"./chunk-33GAZWWN.js";import"./chunk-WCTHIQU3.js";import"./chunk-WA4H3QPQ.js";import"./chunk-DKWH62CP.js";import"./chunk-GALQGYEO.js";import"./chunk-T4ZSWDX2.js";import"./chunk-WE2GCAKX.js";import"./chunk-BQPBQ4WG.js";import"./chunk-N3ED3R2T.js";import"./chunk-TKVEOBDL.js";import"./chunk-3V3LTFJF.js";import"./chunk-IQ37ZVMO.js";import"./chunk-JKEV6NM2.js";import{C as j,W as d,X as p,a as C,d as f,da as u,ea as g,fa as $,ga as _,ha as h,s as v,t as S,v as N,w as P}from"./chunk-OB44S7IV.js";import"./chunk-OI7KRNQS.js";import"./chunk-C7L2X63R.js";import{a as i}from"./chunk-WTCWPEJX.js";import"./chunk-H2ANYIFW.js";import"./chunk-KUIVOAMB.js";import"./chunk-O6E23IRT.js";import"./chunk-TLAXHTSP.js";import"./chunk-CKRPJ7HI.js";import{a as q}from"./chunk-RUEPLNRL.js";import"./chunk-O7K3SHEW.js";import"./chunk-EZQ2GDBH.js";import"./chunk-GVTRKM2F.js";import"./chunk-EZ536MXS.js";import"./chunk-LVBWHS3E.js";import"./chunk-OR37OWF3.js";import"./chunk-FQGZN2JL.js";import"./chunk-BYAZQWO5.js";import"./chunk-MR322WHU.js";function k(n,e){return F(D,J,n,e)}function ee(n){let e;return{c(){e=P("OneByOne")},m(t,o){v(t,e,o)},d(t){t&&S(e)}}}function te(n){let e,t,o;return t=new Q({props:{disabled:n[0],$$slots:{default:[ee]},$$scope:{ctx:n}}}),t.$on("click",n[1]),{c(){e=N("span"),u(t.$$.fragment),j(e,"class","svelte-erebu9")},m(r,a){v(r,e,a),g(t,e,null),o=!0},p(r,[a]){let c={};a&1&&(c.disabled=r[0]),a&8192&&(c.$$scope={dirty:a,ctx:r}),t.$set(c)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){r&&S(e),$(t)}}}function ne(n,e,t){let o=0,r=x({className:"fshSpinner fshRelative",style:{height:"90px"}}),a=s=>R(s.children[0]),c=s=>s.id.split("-").at(-1),G=()=>Promise.resolve({s:1}),H=()=>A("trade-create-selected"),K=()=>document.forms.sendItemForm.elements.target_username.value;function M(s,m){m.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(s),a(s))}async function U(s,m,l){let w=await m;if(w.s){a(l),l.replaceWith(r);let B=await k(s,[c(l)]);return M(l,B),B}return w}let V=()=>q(U,K()),X=s=>s.reduce(V(),G());function Y(s){s.s?T("Items sent successfully!"):T(s.e.message)}async function Z(){let s=H();if(!s.length)return;i("Trade","oneByOne"),t(0,o=1);let m=await X(s);Y(m),t(0,o=0)}return[o,Z]}var I=class extends h{constructor(e){super(),_(this,e,ne,te,f,{})}},L=I;function re(n){let e,t;return e=new W({props:{wantsTagged:"1"}}),e.$on("perf",n[0]),e.$on("select",n[1]),e.$on("toggle",n[2]),{c(){u(e.$$.fragment)},m(o,r){g(e,o,r),t=!0},p:C,i(o){t||(d(e.$$.fragment,o),t=!0)},o(o){p(e.$$.fragment,o),t=!1},d(o){$(e,o)}}}function oe(n){return[()=>i("Trade","doPerf"),r=>i("Trade","doSelect",r.detail),()=>i("Trade","toggleSelectST")]}var b=class extends h{constructor(e){super(),_(this,e,oe,re,f,{})}},z=b;var se=n=>new L({target:n.parentNode});function ae(){let n=y("send-items");n&&se(n)}var ie=()=>new z({target:E()});function ce(){!y("trade-items")||(O(3,ae),ie())}export{ce as default};
//# sourceMappingURL=trade-ZKOJG65X.js.map