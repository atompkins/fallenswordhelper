import{a as l}from"./chunk-GEXXQEPL.js";import"./chunk-FZSGE2W2.js";import"./chunk-3EH7LBGV.js";import"./chunk-DL6GUQIM.js";import"./chunk-LTRYMJWK.js";import{a as g}from"./chunk-WNBTLKBT.js";import{b as c}from"./chunk-DA5WSKUB.js";import{a as m}from"./chunk-2U7PEDGC.js";import{a as o}from"./chunk-SDVU75NC.js";import"./chunk-LDDO6FQI.js";import"./chunk-FQ2MS6MU.js";import"./chunk-VGN4AH67.js";import{a as s,b as u}from"./chunk-BIVP4DQA.js";import"./chunk-YSZQHKVC.js";import{a as i}from"./chunk-F4XKSAVO.js";import"./chunk-NNKWIEAR.js";import"./chunk-2URCAZZ2.js";import{a as n}from"./chunk-36R4KBE3.js";import"./chunk-E2T4BRJB.js";import"./chunk-42ECWD5I.js";import"./chunk-I3GZAXF5.js";import"./chunk-6IDEFJE7.js";import"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import"./chunk-NIRCQTAI.js";import"./chunk-XMFVZQFS.js";import"./chunk-7R4PXCUB.js";import"./chunk-63CI2ODV.js";var e=[],r=0;function f(){r.focus(),r.select()}function p(){e=[],r.value="[]",u("fsh_combatLog",e)}function b(){l("Clear Combat Log","Are you sure you want to clear your log?",p)}function L(a,t){t&&(e=t),m(`<h1>Combat Logs</h1><br><div align="center"><textarea class="fshCombatLog" readonly id="combatLog" name="logs">${g(e)}</textarea><br><br><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr></table></div>`,a),r=o("combatLog"),n(o("copyLog"),f),n(o("clearLog"),b)}async function d(a){if(i())return;let t=await s("fsh_combatLog");L(a||c(),t)}export{d as default};
//# sourceMappingURL=combatLog-MBZPRYDF.js.map