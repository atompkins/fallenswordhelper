import{y as t,B as o,z as e,o as a,p as n}from"./calfSystem-fe0ebf32.js"
import{j as r}from"./jConfirm-5ea2b231.js"
import{g as s,s as l}from"./idb-b0de0ac7.js"
let i,c,u=[]
function p(){c.focus(),c.select()}function g(){u=[],c.value="[]",l("fsh_combatLog",u)}function b(){r("Clear Combat Log","Are you sure you want to clear your log?",g)}function d(t){t&&(u=t),o(`<h1>Combat Logs</h1><br /><form action="http://evolutions.yvong.com/fshlogparser.php" method="post" target="_blank"><div align="center"><textarea align="center" cols="80" rows="25" readonly style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="combatLog" name="logs">${JSON.stringify(u)}</textarea></div><br /><br /><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr><tr><td align="center" colspan="4"><b>Log Parser</b></td></tr><tr><td colspan="4" align="center">WARNING: this links to an external site not related to HCS.<br />If you wish to visit site directly URL is: http://evolutions.yvong.com/fshlogparser.php<br /><tr><td colspan=4 align="center"><input type="hidden" value="true" name="submit"><input type="submit" value="Analyze!"></td></tr></table></div></form>`,i),c=e("combatLog"),a(e("copyLog"),p),a(e("clearLog"),b)}function m(o){t()||(i=o||n,s("fsh_combatLog").then(d))}export default m
//# sourceMappingURL=combatLog-78697ca9.js.map
