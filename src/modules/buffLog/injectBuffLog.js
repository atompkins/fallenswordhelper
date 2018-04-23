import {getElementById} from '../common/getElement';
import getForage from '../ajax/getForage';
import jQueryNotPresent from '../common/jQueryNotPresent';
import makePageTemplate from '../lists/makePageTemplate';
import {pCC} from '../support/layout';
import setForage from '../ajax/setForage';

function displayBuffLog(buffLog) {
  getElementById('bufflog').innerHTML = buffLog;
}

function clearBuffLog() {
  setForage('fsh_buffLog', '').done(displayBuffLog);
}

export default function injectBuffLog(injector) { // jQuery.min
  if (jQueryNotPresent()) {return;}
  var content = injector || pCC;
  content.innerHTML = makePageTemplate({
    title: 'Buff Log',
    comment: '',
    spanId: 'clearBuffs',
    button: 'Clear',
    divId: 'bufflog'
  });
  getElementById('clearBuffs').addEventListener('click', clearBuffLog);
  getForage('fsh_buffLog').done(displayBuffLog);
}