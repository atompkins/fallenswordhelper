import './hasTitan.css';
import { createDiv } from '../../../common/cElement';
import getElementById from '../../../common/getElement';
import insertElement from '../../../common/insertElement';
import toggleForce from '../../../common/toggleForce';
import {
  buildTitanInfoTable,
  clearMemberRows,
  titanTbl,
} from './buildTitanInfoTable';
import { clearTitanDiv, initVars } from './placeholders';

export let titanDiv;
export let titanId;

export function hideTitanDiv() {
  titanId = null;
  if (titanDiv && !titanDiv.classList.contains('fshHide')) {
    toggleForce(titanDiv, true);
    clearTitanDiv();
    clearMemberRows();
  }
}

export function hasTitan(el) {
  if (el.type === 0) {
    titanId = el.base_creature_id;
    return true;
  }
  return false;
}

export function setupTitanDiv() {
  if (titanDiv) {
    toggleForce(titanDiv, false);
  } else {
    const actCont = getElementById('actionContainer');
    titanDiv = createDiv({ className: 'fshActionBox titanInfo' });
    initVars();
    buildTitanInfoTable();
    insertElement(titanDiv, titanTbl);
    insertElement(actCont, titanDiv);
  }
}
