import calf from '../../../support/calf';
import getArrayByClassName from '../../../common/getArrayByClassName';
import {getElementById} from '../../../common/getElement';
import getText from '../../../common/getText';

function doNotKillBlue(el) {
  el.classList.toggle('fshBlue', calf.doNotKillList.includes(getText(el)));
}

export default function afterUpdateActionList() {
  // color the critters in the do no kill list blue
  var act = getElementById('actionList');
  getArrayByClassName('creature', act).forEach(doNotKillBlue);
}
