import{bz as t,y as e,B as s,bg as o,z as n,al as a,a$ as r,t as c,W as i,I as l,p as u,_ as f}from"./calfSystem-42f137cb.js"
function g(t,e){f(e,t[e])}function p(){const t=o(n("HelperfshSettings").value)
if(a(t)){const e=t
r(e).forEach(c(g,e)),i("Settings loaded successfully!")}}function d(t,e){return t[e]=l(e),t}function h(){if(e())return
const o=function(){const e=[],s=new RegExp(`^${t}`)
for(let o=0,n=window.localStorage.length;o<n;o+=1){const n=window.localStorage.key(o)
n.match(s)&&e.push(n.replace(t,""))}return e}().reduce(d,{})
!function(t,e){s(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${JSON.stringify(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}(u,o),$("#HelperLoadSettings").on("click",p)}export default h
//# sourceMappingURL=load-6363ffdb.js.map
