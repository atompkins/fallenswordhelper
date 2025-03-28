import daComposing from '../../_dataAccess/daComposing';
import jQueryPresent from '../../common/jQueryPresent';
import calf from '../../support/calf';
import { defLastComposeCheck, defNeedToCompose } from '../../support/constants';
import { now } from '../../support/now';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';
import displayComposeMsg from './displayComposeMsg';

function getTime(pot) {
  return pot.time_remaining;
}

function displayAlert() {
  displayComposeMsg();
  setValue(defNeedToCompose, true);
}

function potsBrewing(potions) {
  const minTimeInSecs = Math.min.apply(null, potions.map(getTime));
  if (minTimeInSecs > 0) {
    setValue(defNeedToCompose, false);
    setValue(defLastComposeCheck, now() + minTimeInSecs * 1000);
  } else {
    displayAlert();
  }
}

const hUDLocalPlayerTypeMaxComposingPotions = 52;

function parseComposingApp(json) {
  const maxPotions = json.h.p.find(
    ({ k }) => k === hUDLocalPlayerTypeMaxComposingPotions,
  )?.v;
  if (json.r.potions.length !== maxPotions) {
    displayAlert();
  } else {
    potsBrewing(json.r.potions);
  }
}

async function checkLastCompose() {
  const lastComposeCheck = getValue(defLastComposeCheck);
  if (lastComposeCheck && now() < lastComposeCheck) return;
  const json = await daComposing();
  if (json?.s) parseComposingApp(json);
}

function composeAlert() {
  if (getValue(defNeedToCompose)) {
    displayComposeMsg();
  } else {
    checkLastCompose();
  }
}

export default function injectComposeAlert() {
  if (
    calf.enableComposingAlert &&
    calf.cmd !== 'composing' &&
    jQueryPresent()
  ) {
    composeAlert();
  }
}
