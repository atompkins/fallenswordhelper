import{u as e,v as t,E as r,t as n,b8 as a,aO as u}from"./calfSystem-e7bde0c3.js"
function c(e,t,r){return t+Math.round(Number(a[r].exec(e)[1])*u)}function s(e,t){return e.map(n(c,t.dataset.tipped))}function m(e){const n=t(e)
return function(e){return{attack:e[0],defense:e[1],armor:e[2],damage:e[3],hp:e[4]}}(function(e){return e.reduce(s,[0,0,0,0,0])}(r('#pCC img[src*="/merc/"]',n)))}function o(){return e({cmd:"guild",subcmd:"mercs"}).then(m)}export{o as g}
//# sourceMappingURL=getMercStats-d176ad26.js.map
