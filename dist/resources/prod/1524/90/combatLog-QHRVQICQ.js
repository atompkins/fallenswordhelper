import{a as l}from"./chunk-LOP2NQCA.js";import"./chunk-R3HP63GC.js";import"./chunk-YADORND2.js";import"./chunk-OPQD2S4Z.js";import"./chunk-XOOBRZTW.js";import{a as g}from"./chunk-35K6UKHZ.js";import{b as c}from"./chunk-HWIYLISZ.js";import{a as m}from"./chunk-73375NDG.js";import{a as o}from"./chunk-3MHFN2TP.js";import"./chunk-NCJHTPUM.js";import"./chunk-VH2S7CSB.js";import"./chunk-3LPJKV5E.js";import{a as s,b as u}from"./chunk-HARH5SDM.js";import"./chunk-RBX575YR.js";import{a as i}from"./chunk-52J4EBAW.js";import"./chunk-KY6XDBV6.js";import"./chunk-5JFQS7E5.js";import{a as n}from"./chunk-YM2P45BP.js";import"./chunk-LHP5V3M7.js";import"./chunk-57B6SJJP.js";import"./chunk-5BQ45OC2.js";import"./chunk-PJNUKY76.js";import"./chunk-7BHYTCY7.js";import"./chunk-QXT6DFLJ.js";import"./chunk-DCMPLE27.js";import"./chunk-SHG4I62I.js";import"./chunk-MA33RQLF.js";import"./chunk-CHNXGBZZ.js";var e=[],r=0;function f(){r.focus(),r.select()}function p(){e=[],r.value="[]",u("fsh_combatLog",e)}function b(){l("Clear Combat Log","Are you sure you want to clear your log?",p)}function L(a,t){t&&(e=t),m(`<h1>Combat Logs</h1><br><div align="center"><textarea class="fshCombatLog" readonly id="combatLog" name="logs">${g(e)}</textarea><br><br><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr></table></div>`,a),r=o("combatLog"),n(o("copyLog"),f),n(o("clearLog"),b)}async function d(a){if(i())return;let t=await s("fsh_combatLog");L(a||c(),t)}export{d as default};
//# sourceMappingURL=combatLog-QHRVQICQ.js.map
