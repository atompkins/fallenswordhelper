function n(n){return n.replace(" (Titan)","").replace(" (STF Titan)","").replace(" (Xmas Titan)","")}function e(n,e){return 0===n?0:100*e/n}function a(n,e,a){const s=Math.ceil(e/2+1)
if(n>=s)return"Secured"
const t=s-n
return t>a?'<span class="fshRed">Cannot Secure</span>':`<span class="fshRed">${t}</span> to secure`}export{e as a,a as g,n as t}
//# sourceMappingURL=getTitanString-DrmoKrfx.js.map
