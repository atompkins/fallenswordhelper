import{a as r}from"./chunk-ODZEMQE7.js";import{a as x}from"./chunk-YYATCEH3.js";import{a as c}from"./chunk-BUIH7NDX.js";import"./chunk-JZUIGPQK.js";import"./chunk-E7LHQKU5.js";import"./chunk-ACUTGVKN.js";import{a as s}from"./chunk-6RYYSQKY.js";import{a as u}from"./chunk-OMKWEQGC.js";import"./chunk-NRM2IEBO.js";import{a as v}from"./chunk-NUYOEPX5.js";import{a as g}from"./chunk-B3EO4UAT.js";import"./chunk-IGSHOHVE.js";import{a as E}from"./chunk-FE2N6NBD.js";import"./chunk-DNX7LBBK.js";import"./chunk-QAXNXWWI.js";import"./chunk-KHAKP3NJ.js";import{a as B}from"./chunk-LJXKCPK7.js";import"./chunk-CDQY3GPS.js";import"./chunk-E66CENYR.js";import"./chunk-7XYKFTOV.js";import"./chunk-EDPHPGYE.js";import{a as p}from"./chunk-6UGBR7LD.js";import{a as d}from"./chunk-BRACYM44.js";import"./chunk-HSGQLATB.js";import{a as l}from"./chunk-ABHYZHAG.js";import"./chunk-JYV3Y4PK.js";import{a as n}from"./chunk-VYOJRJTP.js";import"./chunk-IZEIZGGY.js";import"./chunk-H4RRBTG7.js";import"./chunk-D4RSYPIY.js";import"./chunk-SQ3ABL2K.js";import"./chunk-MIGTOE2L.js";import"./chunk-UYUWQQUH.js";import"./chunk-FMIILUE6.js";import"./chunk-XSTNX5IW.js";import"./chunk-UVCMQZY6.js";import{a as f}from"./chunk-NGIDL4MJ.js";function q(e){let t=g(e);return t?{e:{message:t},s:!1}:{s:!0}}function i(e){return B({cmd:"profile",subcmd:"unequipitem",inventory_id:e}).then(q)}function m(e){return v({subcmd:"unequipitem",inventory_id:e})}function a(e){return E(m,i,e)}var o;function h(e,t){t&&t.s&&p("",e.parentNode)}function k(e){let t=/inventory_id=(\d+)/.exec(e.href)[1];t&&a(t).then(f(h,e))}function y(){l("profile","nekidBtn");let e=o.nextElementSibling;c("a",e).forEach(k)}function I(){let e=u({className:"fshCenter"}),t=x({className:"fshBl fshBls",textContent:"Nekid"});return r(e,"[ "),s(e,t),r(e," ]"),d(t,y),e}function D(){if(o=n("profileCombatSetDiv"),!o)return;let e=o.parentNode.nextElementSibling,t=I();n("profileRightColumn").replaceChild(t,e)}export{D as default};
//# sourceMappingURL=nekidBtn-O73ULWZG.js.map
