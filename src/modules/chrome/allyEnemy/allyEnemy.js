import './allyEnemy.css';
import myStats from '../../ajax/myStats';
import sendEvent from '../../analytics/sendEvent';
import createDiv from '../../common/cElement/createDiv';
import classHandler from '../../common/classHandler';
import getArrayByClassName from '../../common/getArrayByClassName';
import getElementById from '../../common/getElementById';
import getPlayerId from '../../common/getPlayerId';
import getText from '../../common/getText';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import onclick from '../../common/onclick';
import openQuickBuffById from '../../common/openQuickBuffById';
import partial from '../../common/partial';
import setInnerHtml from '../../dom/setInnerHtml';
import calf from '../../support/calf';
import { pcl } from '../../support/layout';
import task from '../../support/task';
import fallback from '../../system/fallback';
import addContacts from './addContacts';
import {
  enemyBuffCheckOff,
  enemyBuffCheckOn,
  enemyQuickbuff,
  enemySelectedBuff,
  enemySendMessage,
} from './constants';

const noAlliesTests = [
  (allies, enemies) => allies.length + enemies.length,
  (_allies, enemies) => {
    if (!calf.enableAllyOnlineList) {
      return enemies.length;
    }
  },
  (allies) => {
    if (!calf.enableEnemyOnlineList) {
      return allies.length;
    }
  },
];

function sendAllyEvent(label) {
  sendEvent('allyEnemy', label);
}

function condition(allies, enemies, e) {
  return e(allies, enemies) === 0;
}

function noAllies(allies, enemies) {
  return noAlliesTests.every(partial(condition, allies, enemies));
}

function hazAllies(allies, enemies) {
  let output = '';
  if (calf.enableAllyOnlineList) {
    output += addContacts(allies, true);
  }
  if (calf.enableEnemyOnlineList) {
    output += addContacts(enemies, false);
  }
  const fshContactList = getElementById('fshContactList');
  setInnerHtml('', fshContactList);
  insertHtmlBeforeEnd(fshContactList, output);
}

function injectAllyEnemyList(data) {
  const allies = fallback(data._allies, []);
  const enemies = fallback(data._enemies, []);
  if (noAllies(allies, enemies)) {
    return;
  }
  hazAllies(allies, enemies);
}

async function resetList() {
  sendAllyEvent('resetList');
  const data = await myStats(true);
  injectAllyEnemyList(data);
}

function toggleBuffSelected(target) {
  sendAllyEvent('toggleBuffSelected');
  target.classList.toggle(enemyBuffCheckOn);
  target.classList.toggle(enemyBuffCheckOff);
}

function msgPlayer(target) {
  sendAllyEvent('msgPlayer');
  window.openQuickMsgDialog(
    getText(target.parentNode.previousElementSibling.lastElementChild),
  );
}

function buffPlayer(target) {
  sendAllyEvent('buffPlayer');
  openQuickBuffById(
    getPlayerId(target.parentNode.previousElementSibling.lastElementChild.href),
  );
}

function selectedBuff() {
  sendAllyEvent('selectedBuff');
  const buffBalls = getArrayByClassName(
    enemyBuffCheckOn,
    getElementById('fshContactList'),
  );
  const sendstring = buffBalls
    .map((el) => getPlayerId(el.nextElementSibling.href))
    .join(',');
  openQuickBuffById(sendstring);
}

const classEvt = [
  [enemyBuffCheckOn, toggleBuffSelected],
  [enemyBuffCheckOff, toggleBuffSelected],
  [enemySendMessage, msgPlayer],
  [enemyQuickbuff, buffPlayer],
  [enemySelectedBuff, selectedBuff],
];

function eventHandler(evt) {
  const { target } = evt;
  if (target.id === 'fshResetEnemy') {
    resetList();
    return;
  }
  classHandler(classEvt)(evt);
}

function makeDiv(data) {
  const fshAllyEnemy = createDiv({
    id: 'fshAllyEnemy',
    className: 'minibox',
  });
  let wrapper =
    '<h3>Allies/Enemies</h3><div class="minibox-content">' +
    '<h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4>' +
    '<div class="minibox-enemy"><ul id="fshContactList"></ul>';
  if (!calf.hideBuffSelected) {
    wrapper += `<ul class="${enemySelectedBuff}">Quick Buff Selected</ul>`;
  }
  wrapper += '</div></div>';
  insertHtmlBeforeEnd(fshAllyEnemy, wrapper);
  insertElement(pcl(), fshAllyEnemy);
  onclick(fshAllyEnemy, eventHandler);
  injectAllyEnemyList(data);
}

function nextTick(data) {
  if (data) {
    task(3, makeDiv, [data]);
  }
}

export default async function allyEnemy() {
  if (
    (!calf.enableAllyOnlineList && !calf.enableEnemyOnlineList) ||
    jQueryNotPresent()
  ) {
    return;
  }
  const data = await myStats(false);
  nextTick(data);
}
