import{a as e}from"./addCommas-37fb94e0.js"
import{g as a}from"./getMercStats-5e49a7e4.js"
import{g as t}from"./groupViewStats-4d2391ce.js"
import{y as m,B as s}from"./calfSystem-b31aba65.js"
import"./intValue-f6303c59.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-de9e82e2.js.map