import{bF as e,z as t,C as s,aT as o,A as n,b4 as a,av as r,v as c,G as i,p as l,a4 as u}from"./calfSystem-c91e004c.js"
import{d as f}from"./dialogMsg-b1aec560.js"
function g(e,t){u(t,e[t])}function d(){const e=o(n("HelperfshSettings").value)
if(a(e)){const t=e
r(t).forEach(c(g,t)),f("Settings loaded successfully!")}}function p(e,t){return e[t]=i(t),e}export default function(){if(t())return
const o=function(){const t=[],s=new RegExp(`^${e}`)
for(let o=0,n=window.localStorage.length;o<n;o+=1){const n=window.localStorage.key(o)
n.match(s)&&t.push(n.replace(e,""))}return t}().reduce(p,{})
!function(e,t){s('<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,\'Lucida Console\',\'Courier New\',monospace;" '+`id="HelperfshSettings" name="fshSettings">${JSON.stringify(t)}</textarea>`+'<br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>',e)}(l,o),$("#HelperLoadSettings").on("click",d)}
//# sourceMappingURL=load-c814e6e9.js.map
