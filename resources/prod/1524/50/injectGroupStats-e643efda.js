import{a as e}from"./addCommas-b66fde4c.js"
import{g as t}from"./getMercStats-8cb42401.js"
import{g as a}from"./groupViewStats-f2211e30.js"
import{y as m,B as s}from"./calfSystem-365d90f3.js"
import"./intValue-76dfee09.js"
let n
function o(t,a,m){s(`<span class="fshBlue">${e(a)}</span> ( ${e(a-m)} )`,t)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=a(document),n.attackElement&&t().then(r))}export default f
//# sourceMappingURL=injectGroupStats-e643efda.js.map
