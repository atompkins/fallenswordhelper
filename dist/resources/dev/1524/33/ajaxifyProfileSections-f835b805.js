import{o as e,p as t,t as n,ay as o,bc as s,y as a}from"./calfSystem-37f70deb.js"
import{h as r}from"./hideElement-eb117e0e.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function f(e,t){return t(e)}function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){l(5===Number(s(e.search,"section_id"))?(i||(i=a("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return c.every(n(f,e))})(t)&&(u(t),o(t.href),e.preventDefault())}function b(){e(t,m)}export default b
//# sourceMappingURL=ajaxifyProfileSections-f835b805.js.map