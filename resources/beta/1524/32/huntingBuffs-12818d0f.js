import{c as e}from"./calfSystem-26bcf570.js"
import{h as n}from"./simpleCheckbox-f2f41121.js"
import{i as t}from"./isChecked-00f5c23d.js"
import{i as o}from"./isSelected-64b9fca7.js"
function s(){return`Hunting Buffs${n("Hunting Buffs","Customize which buffs are designated as hunting buffs. You must type the full name of each buff, separated by commas. Use the checkbox to enable/disable them.")}:`}function f(){return`<input name="showHuntingBuffs" class="fshVMid" type="checkbox" value="on"${t(e.showBuffs)}>`}function i(){return`Enabled Hunting Mode${n("Enabled Hunting Mode","This will determine which list of buffs gets checked on the world screen.")}:<select name="enabledHuntingMode"><option value="1"${o(e.enabledHuntingMode,"1")}>${e.buffsName}</option><option value="2"${o(e.enabledHuntingMode,"2")}>${e.buffs2Name}</option><option value="3"${o(e.enabledHuntingMode,"3")}>${e.buffs3Name}</option></select>`}function u(){return`${s()+f()} ${i()}`}function a(){return`<tr><td class="fshRight">${s()}</td><td colspan="3">${f()} ${i()}</td></tr>`}export{u as a,a as h}
//# sourceMappingURL=huntingBuffs-12818d0f.js.map
