import{a as e}from"./addCommas-20414553.js"
import{g as a}from"./getMercStats-050bb634.js"
import{g as t}from"./groupViewStats-9978fcb8.js"
import{x as m,A as s}from"./calfSystem-c91a5c89.js"
import"./intValue-55d66e09.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function c(){m()||(n=t(document),n.attackElement&&a().then(r))}export default c
//# sourceMappingURL=injectGroupStats-ac2b8662.js.map