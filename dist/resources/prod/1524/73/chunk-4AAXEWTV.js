import{a as o}from"./chunk-S4FS7DHJ.js";import{a as t}from"./chunk-SIQKD6OY.js";var r,n=["Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'","The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'","Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."];function i(){r||(r=new RegExp(n.join("|")))}function f(e){return r.exec(e)}function l(e){return i(),o("#quickbuff-report font:not(font *)",e).map(t).map(f)}export{l as a};
//# sourceMappingURL=chunk-4AAXEWTV.js.map
