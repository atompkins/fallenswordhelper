import{a as T}from"./chunk-KRLUSBSB.js";import{a as l}from"./chunk-TKD5JPSI.js";import{a}from"./chunk-IWEQS4A6.js";import{a as c}from"./chunk-AJAH6JFS.js";import{a as u}from"./chunk-PHWG56X4.js";import{a as y}from"./chunk-XVF2CJMZ.js";import{a as s}from"./chunk-N5SZHZZP.js";import{q as m}from"./chunk-P5UJIVHH.js";import{a as f}from"./chunk-HTAFW3N3.js";import{a as d}from"./chunk-U7JQSSPD.js";import{a as r}from"./chunk-VZNGURHD.js";function o(t){s("needToPray",t),s("lastTempleCheck",new Date().setUTCHours(23,59,59,999)+1)}var p=0,g='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',P=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${m}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`;async function G(t){let e=t.target.getAttribute("praytype");e&&(d("notification","prayToGods"),T(t.target),await y({cmd:"temple",subcmd:"pray",type:e}),p.outerHTML=g,o(!1))}function i(){l(a("notifications"),P),p=a("helperPrayToGods"),f(p,"click",G)}function b(t){let e=document;r.cmd!=="temple"&&(e=u(t));let h=c('input[value="Pray to Osverin"]',e),n=!1;h&&(i(),n=!0),o(n)}function v(t){r.enableTempleAlert&&b(t)}export{i as a,v as b};
//# sourceMappingURL=chunk-TNBW4PBI.js.map