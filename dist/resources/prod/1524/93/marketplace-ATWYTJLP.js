import{a as u}from"./chunk-FIMBYO62.js";import"./chunk-FSSBYC3E.js";import{b as s}from"./chunk-PWSQLISA.js";import{a as o}from"./chunk-HPU5ZEP3.js";import{a as r}from"./chunk-5HI4ILOP.js";import{a}from"./chunk-VATGSWZQ.js";import{a as l}from"./chunk-E53ZSUER.js";import"./chunk-UYN3LUIY.js";var i=0,c=0,n=0;function m(){return i||(i=r("amount")),i}function p(){return c||(c=r("price")),c}function g(){return n||(n=u(m()).insertRow(2).insertCell(0),n.colSpan="2",n.className="fshCenter"),n}function b(e,t){let f=e*t;return f+Math.ceil(f/200)}function d(e){let t=m().value;o(`<span class="fshBlue">You are offering to buy <b>${t}</b> FSP for >> <b>${a(e)}</b> (Total: ${a(b(t,e))})</span>`,g())}function w(){n&&n.innerHTML!==""&&o("",n)}function T(){let e=p();if(e){let t=e.value;t.search(/^\d+$/)!==-1?d(t):w()}}function h(){l(s(),"keyup",T)}export{h as default};
//# sourceMappingURL=marketplace-ATWYTJLP.js.map