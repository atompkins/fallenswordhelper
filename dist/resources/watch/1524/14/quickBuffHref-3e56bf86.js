import { O as quickbuffUrl } from './calfSystem-43606e5e.js';

function quickBuffHref(aPlayerId, buffList) { // Bad Pattern
  let passthru = '';
  if (buffList) { passthru = `&blist=${buffList}`; }
  return `href='javascript:window.openWindow("${quickbuffUrl}&tid=${
    aPlayerId}${passthru}", "fsQuickBuff", 618, 1000, ",scrollbars")'`;
}

export { quickBuffHref as q };
//# sourceMappingURL=quickBuffHref-3e56bf86.js.map