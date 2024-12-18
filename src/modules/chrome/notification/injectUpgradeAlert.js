import upgradesGold from '../../ajax/upgradesGold';
import jQueryPresent from '../../common/jQueryPresent';
import calf from '../../support/calf';
import { now } from '../../support/now';
import task from '../../support/task';
import getValue from '../../system/getValue';
import displayUpgradeMsg from './displayUpgradeMsg';
import notGoldUpgradesPage from './notGoldUpgradesPage';
import parseGoldUpgrades from './parseGoldUpgrades';

function asyncParse(data) {
  task(3, parseGoldUpgrades, [data]);
}

async function checkLastUpgrade() {
  const lastUpgradeCheck = getValue('lastUpgradeCheck');
  if (lastUpgradeCheck && now() < lastUpgradeCheck) {
    return;
  }
  const data = await upgradesGold();
  asyncParse(data);
}

function notUpgradesPage() {
  if (getValue('needToDoUpgrade')) {
    displayUpgradeMsg();
    return;
  }
  checkLastUpgrade();
}

export default function injectUpgradeAlert() {
  if (calf.enableUpgradeAlert && jQueryPresent() && notGoldUpgradesPage()) {
    notUpgradesPage();
  }
}
