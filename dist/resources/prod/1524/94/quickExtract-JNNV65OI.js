import{a as Ce}from"./chunk-FQHQWJBB.js";import{a as Fe}from"./chunk-ZEC4BMCM.js";import{a as je}from"./chunk-CR7VCHPG.js";import{a as Le}from"./chunk-WBSDKEBX.js";import{a as ze}from"./chunk-GBN6T2CB.js";import{a as Ie}from"./chunk-BR6IUQ4T.js";import{a as Be}from"./chunk-L2EYY2V3.js";import"./chunk-SBRQ2775.js";import"./chunk-2BSE7TQB.js";import"./chunk-NH2AECXJ.js";import"./chunk-3YHDDTO4.js";import"./chunk-ZO2TAKNY.js";import"./chunk-G4JTBCFK.js";import{a as be}from"./chunk-TSB4P6VC.js";import"./chunk-Q7YJZKAM.js";import"./chunk-ZOM4M5CL.js";import{a as ke}from"./chunk-NVUMFPIJ.js";import"./chunk-KPBHOIFO.js";import"./chunk-ZG3H6FNG.js";import"./chunk-COFS3IJQ.js";import"./chunk-X7VSJFUB.js";import"./chunk-RDJGNWAB.js";import"./chunk-7IZ75EHU.js";import{a as re}from"./chunk-SGZWLSNX.js";import"./chunk-AOINEH4F.js";import{a as qe}from"./chunk-IB6LV2N5.js";import{a as $e}from"./chunk-Z2PZ6TEO.js";import"./chunk-U6X4SZSH.js";import{$ as le,A as B,B as ie,C as G,F as b,I as se,O as ae,W as ye,Z as Ee,_ as ne,a as h,aa as P,ba as z,c as ve,da as ue,e as Se,ea as we,ja as Me,ka as J,la as K,ma as W,na as Pe,oa as Te,u,v as I,w as C,x as ce,y as _,z as q}from"./chunk-UM32QR7D.js";import"./chunk-FAJS25QJ.js";import"./chunk-LZRXEQDU.js";import"./chunk-LB3PYE2H.js";import"./chunk-HFVVQWWN.js";import{a as x}from"./chunk-HXA7GMHU.js";import"./chunk-XEUJY3TQ.js";import"./chunk-TCL2J57P.js";import"./chunk-2WBVUEHT.js";import"./chunk-FXTQ547Y.js";import"./chunk-7IR54LMC.js";import"./chunk-P2XVC4S5.js";import"./chunk-JWWQOZPD.js";import"./chunk-ZOQAMPPO.js";import"./chunk-SGC5GHRN.js";import{b as oe}from"./chunk-2I26BJ52.js";import"./chunk-QMYGD3GE.js";import"./chunk-X4CA4ODK.js";import{Ja as ge,b as he}from"./chunk-6MEG5PHL.js";import"./chunk-Q6PVLDNZ.js";import"./chunk-VVJVMGW6.js";function Qe(n){return`${n.amount} x ${ge[n.type]}`}var Ve=[[n=>n.components?.length,n=>`You successfully extracted 1 '${n.components?.[0].n}' component(s) from 1 resource(s).`],[n=>n.frags,n=>`You gained ${n.frags.map(Qe).join(", ")} Fragments by opening the Fragment Stash.`],[n=>n.mailbox_items?.length,n=>`You received 1 x '${n.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>'<span class="fshRed">You failed to extract any components from resource(s).</span>']];function fe(n){return Ve.find(([e])=>e(n))[1](n)}var Ue=(n,e,t)=>`fetchitem.php?item_id=${e}&inv_id=${t}&t=1&p=${n}`,Ze=n=>`background-image: url(${he}items/${n}.gif)`;function pe(n,e){return Be(e,"item_name").map(t=>({...t,count:e.filter(l=>l.item_name===t.item_name).length,delPending:!1,extractIds:e.filter(l=>l.item_name===t.item_name).map(l=>l.inv_id),style:Ze(t.item_id),tip:Ue(n,t.item_id,t.inv_id)}))}function Re(n,e,t){let l=n.slice();return l[28]=e[t].count,l[29]=e[t].delPending,l[30]=e[t].item_name,l[31]=e[t].style,l[32]=e[t].tip,l[34]=t,l}function Ye(n,e,t){let l=n.slice();return l[35]=e[t],l}function Ge(n){let e;return{c(){e=q("Refresh")},m(t,l){I(t,e,l)},d(t){t&&C(e)}}}function De(n){let e,t=n[35]+"";return{c(){e=_("li"),b(e,"class","svelte-11rzj5c")},m(l,o){I(l,e,o),e.innerHTML=t},p(l,o){o[0]&64&&t!==(t=l[35]+"")&&(e.innerHTML=t)},d(l){l&&C(e)}}}function Je(n){return{c:h,m:h,p:h,i:h,o:h,d:h}}function Ke(n){let e,t,l=n[5],o=[];for(let c=0;c<l.length;c+=1)o[c]=He(Re(n,l,c));let i=c=>z(o[c],1,1,()=>{o[c]=null});return{c(){for(let c=0;c<o.length;c+=1)o[c].c();e=ie()},m(c,a){for(let r=0;r<o.length;r+=1)o[r].m(c,a);I(c,e,a),t=!0},p(c,a){if(a[0]&4128){l=c[5];let r;for(r=0;r<l.length;r+=1){let f=Re(c,l,r);o[r]?(o[r].p(f,a),P(o[r],1)):(o[r]=He(f),o[r].c(),P(o[r],1),o[r].m(e.parentNode,e))}for(ne(),r=l.length;r<o.length;r+=1)i(r);le()}},i(c){if(!t){for(let a=0;a<l.length;a+=1)P(o[a]);t=!0}},o(c){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)z(o[a]);t=!1},d(c){ce(o,c),c&&C(e)}}}function We(n){let e;return{c(){e=q("Done")},m(t,l){I(t,e,l)},p:h,i:h,o:h,d(t){t&&C(e)}}}function Xe(n){let e,t,l,o,i=[tt,et],c=[];function a(r,f){return r[29]?0:1}return e=a(n,[-1,-1]),t=c[e]=i[e](n),{c(){t.c(),l=ie()},m(r,f){c[e].m(r,f),I(r,l,f),o=!0},p(r,f){let g=e;e=a(r,f),e===g?c[e].p(r,f):(ne(),z(c[g],1,1,()=>{c[g]=null}),le(),t=c[e],t?t.p(r,f):(t=c[e]=i[e](r),t.c()),P(t,1),t.m(l.parentNode,l))},i(r){o||(P(t),o=!0)},o(r){z(t),o=!1},d(r){c[e].d(r),r&&C(l)}}}function et(n){let e,t;function l(){return n[16](n[34])}return e=new Ie({props:{$$slots:{default:[nt]},$$scope:{ctx:n}}}),e.$on("click",l),{c(){J(e.$$.fragment)},m(o,i){K(e,o,i),t=!0},p(o,i){n=o;let c={};i[0]&32|i[1]&128&&(c.$$scope={dirty:i,ctx:n}),e.$set(c)},i(o){t||(P(e.$$.fragment,o),t=!0)},o(o){z(e.$$.fragment,o),t=!1},d(o){W(e,o)}}}function tt(n){let e;return{c(){e=_("span"),b(e,"class","fshSpinner fshSpinner12")},m(t,l){I(t,e,l)},p:h,i:h,o:h,d(t){t&&C(e)}}}function nt(n){let e,t=n[28]+"",l;return{c(){e=q("Extract "),l=q(t)},m(o,i){I(o,e,i),I(o,l,i)},p(o,i){i[0]&32&&t!==(t=o[28]+"")&&se(l,t)},d(o){o&&C(e),o&&C(l)}}}function He(n){let e,t,l,o,i,c,a,r,f,g,v,j=n[30]+"",S,Y,w,M=[Xe,We],k=[];function D(m,d){return m[28]?0:1}return l=D(n,[-1,-1]),o=k[l]=M[l](n),{c(){e=_("tr"),t=_("td"),o.c(),i=B(),c=_("td"),a=_("span"),g=B(),v=_("td"),S=q(j),Y=B(),b(t,"class","svelte-11rzj5c"),ae(t,"delPending",n[29]),b(a,"class","imgSpan tip-dynamic svelte-11rzj5c"),b(a,"data-tipped",r=n[32]),b(a,"style",f=n[31]),b(c,"class","imgCol svelte-11rzj5c")},m(m,d){I(m,e,d),u(e,t),k[l].m(t,null),u(e,i),u(e,c),u(c,a),u(e,g),u(e,v),u(v,S),u(e,Y),w=!0},p(m,d){let F=l;l=D(m,d),l===F?k[l].p(m,d):(ne(),z(k[F],1,1,()=>{k[F]=null}),le(),o=k[l],o?o.p(m,d):(o=k[l]=M[l](m),o.c()),P(o,1),o.m(t,null)),(!w||d[0]&32)&&ae(t,"delPending",m[29]),(!w||d[0]&32&&r!==(r=m[32]))&&b(a,"data-tipped",r),(!w||d[0]&32&&f!==(f=m[31]))&&b(a,"style",f),(!w||d[0]&32)&&j!==(j=m[30]+"")&&se(S,j)},i(m){w||(P(o),w=!0)},o(m){z(o),w=!1},d(m){m&&C(e),k[l].d()}}}function lt(n){return{c:h,m:h,p:h,i:h,o:h,d:h}}function ot(n){let e,t,l,o,i,c,a,r,f,g,v,j,S,Y,w,M,k,D,m,d,F,X,L,U,A,H,ee,O,Q,Z,s;function N(p){n[13](p)}let te={};n[2]!==void 0&&(te.inSt=n[2]),i=new Fe({props:te}),ye.push(()=>Me(i,"inSt",N)),i.$on("toggle",n[8]),M=new Ce({props:{$$slots:{default:[Ge]},$$scope:{ctx:n}}}),M.$on("click",n[11]);let V=n[6],y=[];for(let p=0;p<V.length;p+=1)y[p]=De(Ye(n,V,p));let E={ctx:n,current:null,token:null,hasCatch:!1,pending:lt,then:Ke,catch:Je,blocks:[,,,]};return ue(O=n[1],E),{c(){e=_("div"),t=q(`Select which type of plants you wish to extract all of. Only select extractable resources.
    `),l=_("br"),o=B(),J(i.$$.fragment),a=q(`\xA0
    `),r=_("label"),f=_("input"),g=q(`
      Main Folder Only`),v=q(`\xA0
    `),j=_("label"),S=_("input"),Y=q(`
      Disable Prompts`),w=q(`\xA0
    `),J(M.$$.fragment),k=B(),D=_("br"),m=B(),d=_("table"),F=_("thead"),F.innerHTML=`<tr><th class="actionCol svelte-11rzj5c">Actions</th> 
          <th colspan="2">Items</th></tr>`,X=B(),L=_("tbody"),U=_("tr"),A=_("td"),H=_("ol");for(let p=0;p<y.length;p+=1)y[p].c();ee=B(),E.block.c(),b(f,"type","checkbox"),b(f,"class","svelte-11rzj5c"),b(S,"type","checkbox"),b(S,"class","svelte-11rzj5c"),b(A,"colspan","3"),b(d,"class","svelte-11rzj5c"),b(e,"class","svelte-11rzj5c")},m(p,$){I(p,e,$),u(e,t),u(e,l),u(e,o),K(i,e,null),u(e,a),u(e,r),u(r,f),f.checked=n[3],u(r,g),u(e,v),u(e,j),u(j,S),S.checked=n[4],u(j,Y),u(e,w),K(M,e,null),u(e,k),u(e,D),u(e,m),u(e,d),u(d,F),u(d,X),u(d,L),u(L,U),u(U,A),u(A,H);for(let R=0;R<y.length;R+=1)y[R].m(H,null);u(L,ee),E.block.m(L,E.anchor=null),E.mount=()=>L,E.anchor=null,Q=!0,Z||(s=[G(f,"change",n[14]),G(f,"change",n[9]),G(S,"change",n[15]),G(S,"change",n[10])],Z=!0)},p(p,$){n=p;let R={};!c&&$[0]&4&&(c=!0,R.inSt=n[2],Ee(()=>c=!1)),i.$set(R),$[0]&8&&(f.checked=n[3]),$[0]&16&&(S.checked=n[4]);let _e={};if($[1]&128&&(_e.$$scope={dirty:$,ctx:n}),M.$set(_e),$[0]&64){V=n[6];let T;for(T=0;T<V.length;T+=1){let de=Ye(n,V,T);y[T]?y[T].p(de,$):(y[T]=De(de),y[T].c(),y[T].m(H,null))}for(;T<y.length;T+=1)y[T].d(1);y.length=V.length}E.ctx=n,$[0]&2&&O!==(O=n[1])&&ue(O,E)||we(E,n,$)},i(p){Q||(P(i.$$.fragment,p),P(M.$$.fragment,p),P(E.block),Q=!0)},o(p){z(i.$$.fragment,p),z(M.$$.fragment,p);for(let $=0;$<3;$+=1){let R=E.blocks[$];z(R)}Q=!1},d(p){p&&C(e),W(i),W(M),ce(y,p),E.block.d(),E.token=null,E=null,Z=!1,ve(s)}}}function rt(n){let e,t;return e=new qe({props:{visible:n[0],title:"Quick Extract",$$slots:{default:[ot]},$$scope:{ctx:n}}}),e.$on("close",n[7]),{c(){J(e.$$.fragment)},m(l,o){K(e,l,o),t=!0},p(l,o){let i={};o[0]&1&&(i.visible=l[0]),o[0]&126|o[1]&128&&(i.$$scope={dirty:o,ctx:l}),e.$set(i)},i(l){t||(P(e.$$.fragment,l),t=!0)},o(l){z(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}var ct="Are you sure you want to extract all similar items?",Ne="selectMain",xe="disableQuickExtractPrompts";function it(n,e,t){let{visible:l=!0}=e,o=null,i=null,c=null,a=oe(Ne),r=oe(xe),f=null,g=null,v=[],j=s=>s.item_name==="Zombie Coffin"||s.type===12||s.type===16,S=(s,N)=>be(s.item_name,N.item_name),Y=s=>c||!s.is_in_st,w=s=>!a||s.folder_id===-1;function M(){x("quickExtract","close"),t(0,l=!1)}function k(){t(5,g=pe(i,f.filter(Y).filter(w)))}function D(){x("quickExtract","toggleSelectST"),k()}function m(){x("quickExtract","toggleSelectMain"),re(Ne,a),k()}function d(){x("quickExtract","togglePrompts"),re(xe,r)}async function F(){let s=await je();i=s.player_id,f=s.items.filter(j).sort(S),k()}function X(){x("quickExtract","refresh"),t(6,v=[]),t(1,o=F())}let L;function U(s){return!s.s&&L!==s.e.message&&(L=s.e.message,t(6,v=[...v,s.e.message])),s.s}async function A(s){let N=await ze(s);U(N)&&(t(6,v=[...v,fe(N.r)]),f=f.filter(te=>te.inv_id!==s))}async function H(s){x("quickExtract","extract",r),(r?!0:await Le(ct))&&(t(5,g[s].delPending=!0,g),await ke(g[s].extractIds.map(A)),t(5,g[s].count=0,g))}function ee(s){c=s,t(2,c)}function O(){a=this.checked,t(3,a)}function Q(){r=this.checked,t(4,r)}let Z=s=>H(s);return n.$$set=s=>{"visible"in s&&t(0,l=s.visible)},n.$$.update=()=>{if(n.$$.dirty[0]&1){e:l&&(t(6,v=[]),t(1,o=F()))}},[l,o,c,a,r,g,v,M,D,m,d,X,H,ee,O,Q,Z]}var me=class extends Te{constructor(e){super(),Pe(this,e,it,rt,Se,{visible:0},null,[-1,-1])}},Ae=me;var st={visible:!0},Oe=0;function at(){Oe=$e(st,Oe,Ae)}export{at as default};
//# sourceMappingURL=quickExtract-JNNV65OI.js.map
