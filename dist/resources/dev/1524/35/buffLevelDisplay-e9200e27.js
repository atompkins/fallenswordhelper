import{E as e,ab as t}from"./calfSystem-186455ab.js"
function n(e){const n=/Level: (\d+)/.exec(e.dataset.tipped)
if(!n)return
const i=n[1]
let l=e.nextElementSibling
e.nextElementSibling||(l=e.parentNode.nextElementSibling),t(l,`<b>(${i})</b><br>`)}function i(){e('#profileRightColumn img[src*="/skills/"]').forEach(n)}export default i
//# sourceMappingURL=buffLevelDisplay-e9200e27.js.map
