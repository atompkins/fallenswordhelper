import{A as V,C as E,D as U,K as x,P as H,Q as D,R as J,U as z,X as d,Y as a,d as C,ea as M,fa as R,ga as S,ha as h,i as Z,ia as F,j as B,ja as A,k as f,l as Q,t as W,u as v,w as Y}from"./chunk-TVNPLL64.js";import{a as j}from"./chunk-V45UJIF2.js";import{a as N}from"./chunk-QCTVAEOV.js";function P(t,l,s){if(l)l.$set(t);else return new s({props:t,target:document.body});return l}function K(t){let l,s,o,c,b=t[2].default,e=Z(b,t,t[1],null);return{c(){l=Y("div"),e&&e.c(),U(l,"class","svelte-ydj9je"),x(l,"visible",t[0])},m(i,n){W(i,l,n),e&&e.m(l,null),s=!0,o||(c=V(l,"click",E(t[3])),o=!0)},p(i,[n]){e&&e.p&&(!s||n&2)&&f(e,b,i,i[1],s?B(b,i[1],n,null):Q(i[1]),null),(!s||n&1)&&x(l,"visible",i[0])},i(i){s||(d(e,i),s=!0)},o(i){a(e,i),s=!1},d(i){i&&v(l),e&&e.d(i),o=!1,c()}}}function q(t,l,s){let{$$slots:o={},$$scope:c}=l,{visible:b=!0}=l,e,i,n;function m(){document.body.classList.contains("noscroll")||(e=!0,i=window.scrollY,n=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${i}px`)}function G(){e&&(document.body.classList.remove("noscroll"),document.body.style.top=n||"",window.scrollTo(0,i))}function r(I){D.call(this,t,I)}return t.$$set=I=>{"visible"in I&&s(0,b=I.visible),"$$scope"in I&&s(1,c=I.$$scope)},t.$$.update=()=>{t.$$.dirty&1&&(b?m():G())},[b,c,o,r]}var y=class extends A{constructor(l){super(),F(this,l,q,K,C,{visible:0})}},T=y;function $(t){let l,s,o,c,b=t[7].default,e=Z(b,t,t[6],null);return{c(){l=Y("div"),e&&e.c(),U(l,"class","ui-dialog svelte-61qae0"),U(l,"role","dialog"),U(l,"aria-modal","true"),x(l,"modalVisible",t[1])},m(i,n){W(i,l,n),e&&e.m(l,null),t[8](l),s=!0,o||(c=V(window,"keydown",t[2]),o=!0)},p(i,[n]){e&&e.p&&(!s||n&64)&&f(e,b,i,i[6],s?B(b,i[6],n,null):Q(i[6]),null),(!s||n&2)&&x(l,"modalVisible",i[1])},i(i){s||(d(e,i),s=!0)},o(i){a(e,i),s=!1},d(i){i&&v(l),e&&e.d(i),t[8](null),o=!1,c()}}}var k;function ll(t,l,s){let o,{$$slots:c={},$$scope:b}=l,{modal:e}=l,{visible:i=!0}=l,n=H(),m=()=>n("close"),G,r,I=g=>g.tabIndex>=0&&g.offsetWidth>0&&g.offsetHeight>0&&!g.disabled;function L(g){if(i){if(g.key==="Escape"&&k===e){m();return}if(g.key==="Tab"){let X=j("*",e).filter(I),p=X.indexOf(document.activeElement);p===-1&&g.shiftKey&&(p=0),p+=X.length+(g.shiftKey?-1:1),p%=X.length,X[p].focus(),g.preventDefault()}}}function u(g){J[g?"unshift":"push"](()=>{e=g,s(0,e)})}return t.$$set=g=>{"modal"in g&&s(0,e=g.modal),"visible"in g&&s(3,i=g.visible),"$$scope"in g&&s(6,b=g.$$scope)},t.$$.update=()=>{t.$$.dirty&8&&s(1,o=i),t.$$.dirty&9&&e&&i&&(s(5,r=k),k=e),t.$$.dirty&41&&e&&!i&&(k=r),t.$$.dirty&24&&(i?s(4,G=document?.activeElement):G?.focus())},[e,o,L,i,G,r,b,c,u]}var _=class extends A{constructor(l){super(),F(this,l,ll,$,C,{modal:0,visible:3})}},O=_;function el(t){let l,s=t[3].default,o=Z(s,t,t[6],null);return{c(){o&&o.c()},m(c,b){o&&o.m(c,b),l=!0},p(c,b){o&&o.p&&(!l||b&64)&&f(o,s,c,c[6],l?B(s,c[6],b,null):Q(c[6]),null)},i(c){l||(d(o,c),l=!0)},o(c){a(o,c),l=!1},d(c){o&&o.d(c)}}}function tl(t){let l,s,o;function c(e){t[4](e)}let b={visible:t[1],$$slots:{default:[el]},$$scope:{ctx:t}};return t[0]!==void 0&&(b.modal=t[0]),l=new O({props:b}),J.push(()=>M(l,"modal",c)),l.$on("close",t[5]),{c(){R(l.$$.fragment)},m(e,i){S(l,e,i),o=!0},p(e,i){let n={};i&2&&(n.visible=e[1]),i&64&&(n.$$scope={dirty:i,ctx:e}),!s&&i&1&&(s=!0,n.modal=e[0],z(()=>s=!1)),l.$set(n)},i(e){o||(d(l.$$.fragment,e),o=!0)},o(e){a(l.$$.fragment,e),o=!1},d(e){h(l,e)}}}function il(t){let l,s;return l=new T({props:{visible:t[1],$$slots:{default:[tl]},$$scope:{ctx:t}}}),l.$on("click",t[2]),{c(){R(l.$$.fragment)},m(o,c){S(l,o,c),s=!0},p(o,[c]){let b={};c&2&&(b.visible=o[1]),c&67&&(b.$$scope={dirty:c,ctx:o}),l.$set(b)},i(o){s||(d(l.$$.fragment,o),s=!0)},o(o){a(l.$$.fragment,o),s=!1},d(o){h(l,o)}}}function sl(t,l,s){let{$$slots:o={},$$scope:c}=l,{modal:b}=l,{visible:e=!0}=l,i=H(),n=()=>i("close"),m;function G(){N.dialogIsClosed&&(m=N.dialogIsClosed),N.dialogIsClosed=()=>!e}function r(){m&&(N.dialogIsClosed=m)}function I(u){b=u,s(0,b)}function L(u){D.call(this,t,u)}return t.$$set=u=>{"modal"in u&&s(0,b=u.modal),"visible"in u&&s(1,e=u.visible),"$$scope"in u&&s(6,c=u.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&(e?G():r())},[b,e,n,o,I,L,c]}var w=class extends A{constructor(l){super(),F(this,l,sl,il,C,{modal:0,visible:1})}},pl=w;export{P as a,pl as b};
//# sourceMappingURL=chunk-NP3VZEO6.js.map