import{a as z}from"./chunk-YTNAFSD6.js";import{a as k,b as M}from"./chunk-4FID2LJZ.js";import{a as O}from"./chunk-NZU3F3TP.js";import{a as G,b as J}from"./chunk-JHUQMMV3.js";import{a as h}from"./chunk-YSCPHF6A.js";import{a as S}from"./chunk-RS76XO2J.js";import{a as $}from"./chunk-IXDXLPIY.js";import"./chunk-NQS57V2C.js";import{a as g}from"./chunk-SRVOPMOR.js";import{a as f}from"./chunk-DU4LUWGY.js";import"./chunk-N4PCIVE3.js";import{a as V}from"./chunk-P3IWSBOB.js";import{a as L}from"./chunk-NBYXTQFH.js";import{a as b}from"./chunk-XVTH24AL.js";import"./chunk-5AWGL262.js";import"./chunk-BNH2OXS3.js";import{a as _}from"./chunk-RBTBDUJC.js";import"./chunk-KX7QOYLT.js";import"./chunk-D4AVXNRB.js";import"./chunk-W5AN4HHX.js";import{b as i}from"./chunk-FJXTYPNU.js";import{a as s}from"./chunk-ACOFHTYC.js";import{a as E}from"./chunk-RVP3BZF7.js";import{a as Q}from"./chunk-X7GADBEU.js";import{a as R}from"./chunk-74REC633.js";import"./chunk-7UPTHGH3.js";import{a as P}from"./chunk-4GU2HJD7.js";import{a as w}from"./chunk-HNXEOKKJ.js";import{a as N}from"./chunk-PJX66I2Y.js";import"./chunk-WLWXTJVR.js";import"./chunk-YYW2XVVC.js";import"./chunk-LGXHSUMA.js";import{a}from"./chunk-N7DXDYBU.js";import"./chunk-DZSOBYW3.js";import"./chunk-OHH2RJOZ.js";import"./chunk-QLE5SOQY.js";import{a as j}from"./chunk-J4Q2WCPP.js";import"./chunk-PIMWUW3S.js";import{a as d}from"./chunk-HCQKHTWX.js";import{a as F}from"./chunk-D3IEQVYM.js";import{a as m}from"./chunk-RIAQP6AM.js";import{a as C}from"./chunk-DARUUDAY.js";import{a as c}from"./chunk-2T7366JB.js";import{a as H}from"./chunk-O2JBL2UU.js";import"./chunk-RGSHZW7Q.js";import"./chunk-232WRRJZ.js";import"./chunk-7VVRRHE4.js";import{a as n}from"./chunk-OQC4RYIZ.js";import"./chunk-WGISVX7D.js";import"./chunk-PC7TOLHT.js";import"./chunk-NVWIQHSW.js";import{b as I}from"./chunk-AVWEVNGS.js";import"./chunk-6C22U5JX.js";import"./chunk-VSTJBSW7.js";import{b as A,f as B,qa as u,ra as q}from"./chunk-3DLQUZR2.js";import"./chunk-BUBKPU26.js";import{a as T}from"./chunk-4P22QABU.js";function v(e){return w({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:e,fshrnd:M()}})}function U(){return`url(${A}composing/${k(1,11)}_${k(1,51)}.png)`}function W(e,t){s("",e.children[0]),e.children[0].classList.add("fshPot"),e.children[0].style.backgroundImage=U(),s(`Creating '<span class="fshBold">${t}</span>' Potion`,e.children[2]),s("",e.children[3])}function X(){c('[id|="composing-template"]:not(#composing-template-multi)').length===0&&a(u,!1)}function Y(e){let t=e.parentNode;t&&(s('<div class="fshScs">Success</div>',t),W(t.previousElementSibling.previousElementSibling,e[e.selectedIndex].text),X())}function Z(e,t){let o=e.parentNode;!o||!t||(t.error?s(`<div class="fshScs">${t.error}</div>`,o):Y(e))}function ee(e){v(e.value).then(n(Z,e))}function p(e,t){t.id=`proc-${t.id}`,s("",e),e.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),ee(t),G("quickcreate")}function D(e,t){e.classList.add(`left-${t.toString()}`)}function te(e){let t=c(".quickCreate .sendLink");D(e,t.length)}function oe(e,t){m("composing","FastComposeButton");let o=c('[id|="composing-template"]:not(#composing-template-multi)');if(!(o.length<e.value))for(let r=0;r<e.value;r+=1)o[r].value=t,p(o[r].nextElementSibling.nextElementSibling,o[r])}function re(e){let t=e.target,{templateId:o}=t.dataset;o&&oe(t,o)}function ne(e,t){return h({className:"awesome orange",dataset:{templateId:t},type:"button",value:e})}function ie(e,t,o,r){return r===0&&V(e[1],t.insertCell(-1)),b(t.insertCell(-1),ne((r+1).toString(),e[0])),t}function se(e,t,o){return e.reduce(n(ie,o),t.insertRow(-1)),t}function me(e,t,o){let r=O({id:"fshFastCompose"});return D(r,o),e.reduce(n(se,t),r)}function ae(e){return[e.value,e.text]}function ce(e,t,o){let r=C("#composing-template-multi option").map(ae),l=me(r,t,o);b(e,l),d(i(),re),J("quickcreate",n(te,l))}function pe(e){m("composing","FastCompose"),f(e,"<br>");let t=g("composing-potion-time",document),o=t.filter(_("ETA: n/a")).length;o>0?ce(e,t,o):f(e,"No open slots!")}function y(){let e=P("#pCC div.centered");f(e,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>');let t=L({className:"centered"});S(t,e);let o=h({id:"fast-compose",type:"checkbox"});S(o,e),F(o,"change",n(pe,t))}function le(e){let t=R(B,N(e));if(t){let{h:o,m:r,s:l}=t;return(o*3600+r*60+Number(l))*1e3+H()}return 0}function K(e){a(u,e)}function x(){if(!T.enableComposingAlert)return;let e=g("composing-potion-time",document),t=Math.min(...e.map(le));t===0?K(!0):(K(!1),a(q,t))}function fe(){if(I("moveComposingButtons")){let e=E("composing-error-dialog").previousElementSibling;e.setAttribute("style","text-align: right; padding: 0 38px 0 0");let t=Q("composing-level",i())[0].parentNode;$(e,t)}}function ue(e){z(e,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function de(e){return e.tagName==="SPAN"&&e.className==="quickCreate"}function ge(e){let t=e.previousElementSibling.previousElementSibling;t&&t.value!=="none"&&(p(e,t),m("composing","QuickCreate"))}function Ce(e){let t=e.target.parentNode;de(t)&&ge(t)}function be(){x(),C("input[id^=create-]:not(#create-multi)",i()).forEach(ue),d(i(),Ce),fe(),y()}function he(){j()&&i()&&be()}export{he as default};
//# sourceMappingURL=composing-3SLFQPVE.js.map