import{c as e}from"./calfSystem-8af1dca2.js"
import{h as n}from"./simpleCheckbox-1071aa74.js"
import{i as t}from"./isChecked-b16dd421.js"
import{i as o}from"./isSelected-77d835f5.js"
function s(){return`Hunting Buffs${n("Hunting Buffs","Customize which buffs are designated as hunting buffs. You must type the full name of each buff, separated by commas. Use the checkbox to enable/disable them.")}:`}function i(){return`<input name="showHuntingBuffs" class="fshVMid" type="checkbox" value="on"${t(e.showBuffs)}>`}function a(){return`Enabled Hunting Mode${n("Enabled Hunting Mode","This will determine which list of buffs gets checked on the world screen.")}:<select name="enabledHuntingMode"><option value="1"${o(e.enabledHuntingMode,"1")}>${e.buffsName}</option><option value="2"${o(e.enabledHuntingMode,"2")}>${e.buffs2Name}</option><option value="3"${o(e.enabledHuntingMode,"3")}>${e.buffs3Name}</option></select>`}function u(){return`${s()+i()} ${a()}`}function f(){return`<tr><td class="fshRight">${s()}</td><td colspan="3">${i()} ${a()}</td></tr>`}export{u as a,f as h}
//# sourceMappingURL=huntingBuffs-2bdb364f.js.map
