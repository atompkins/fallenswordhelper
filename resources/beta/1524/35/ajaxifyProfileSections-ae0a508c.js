import{o as e,p as t,t as n,az as o,bc as s,z as a}from"./calfSystem-03050396.js"
import{h as r}from"./hideElement-2c661b2e.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function l(e,t){return t(e)}function f(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){f(5===Number(s(e.search,"section_id"))?(i||(i=a("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return c.every(n(l,e))})(t)&&(u(t),o(t.href),e.preventDefault())}function p(){e(t,m)}export default p
//# sourceMappingURL=ajaxifyProfileSections-ae0a508c.js.map
