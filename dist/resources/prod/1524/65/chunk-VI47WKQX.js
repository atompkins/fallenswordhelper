import{a as d}from"./chunk-VOYQUMQS.js";import{a as p}from"./chunk-X4OUUFVF.js";import{a as n}from"./chunk-E2LRFPD6.js";import{a as l}from"./chunk-OJ42IKEN.js";import{F as c,ua as r}from"./chunk-3IHZF2GE.js";var f="#pH #statbar-gold",s="#pH #statbar-gold-tooltip-general dd",i="#pCC b",m="#pCC #info-msg",h="#pCC #withdraw_amount",u="#pCC #deposit_amount",x="disabled",C='#pCC input[value="Deposit"]';function w(t){let o=$(m);o.length===0?$("#pCC").prepend(t.closest(r)):o.closest(r).replaceWith(t.closest(r))}function D(t,o){return $(s,t).eq(o).text()}function B(t){$(f).text($(f,t).text()),$(s).text(n(D,t))}function q(t,o,e){return $(i,t).slice(o).eq(e).text()}function G(t,o){$(i).slice(o).text(n(q,t,o))}function A(t){$(i).eq(t).text()==="0"&&$(C).prop(x,!0)}function T(t,o){t.data.amount!=="1"?$(u).val($(u,o).val()):$(u).val("1")}function j(t,o,e){w(e),B(o),G(o,t.balPos),A(t.depoPos),T(t,o),$(h).val(t.initWithdraw)}function P(t,o){let e=d(o),a=$(m,e);a.length!==0&&j(t,e,a)}function W(t,o){return $(i).eq(t.depoPos).text()==="0"||!$.isNumeric(o)||o<1}function v(t){p(t.data).then(n(P,t))}function y(t,o){o.preventDefault();let e=$(u).val();W(t,e)||(t.data.mode="deposit",t.data.amount=e,v(t))}function H(t,o){o.preventDefault();let e=$(h).val();!$.isNumeric(e)||e<1||(t.data.mode="withdraw",t.data.amount=e,v(t))}function L(t,o){t.appLink&&o.after(`<div class="fshCenter"><a href="${c}bank">Go to Guild Bank</a></div>`)}function N(t,o,e){$(i).eq(t.depoPos).text()==="0"?o.prop(x,!0):o.on("click",n(y,t)),e.on("click",n(H,t))}function V(t,o){L(t,o);let e=$(C);if(e.length!==1)return;let a=$('#pCC input[value="Withdraw"]');a.length===1&&N(t,e,a)}function _(t){let o=$(t.headSelector);o.length!==0&&o.eq(0).text()===t.headText&&V(t,o)}function I(t){l()&&_(t)}export{I as a};
//# sourceMappingURL=chunk-VI47WKQX.js.map