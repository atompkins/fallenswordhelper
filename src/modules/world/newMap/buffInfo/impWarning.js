import {createSpan} from '../../../common/cElement';
import {def_fetch_playerBuffs} from '../../../support/constants';
import getBuff from './getBuff';
import insertElement from '../../../common/insertElement';
import insertHtmlBeforeEnd from '../../../common/insertHtmlBeforeEnd';
import on from '../../../common/on';
import playerName from '../../../common/playerName';
import quickbuff from '../../../app/quickbuff';
import quickbuffSuccess from '../../../common/quickbuffSuccess';
import toggleForce from '../../../common/toggleForce';

var impDiv;
var impRemainingSpan;

function refreshBuffs(json) {
  if (quickbuffSuccess(json)) {
    GameData.fetch(def_fetch_playerBuffs);
  }
}

function recastClick() {
  if (getBuff('Summon Shield Imp')) {return;}
  quickbuff([playerName()], [55]).done(refreshBuffs);
}

function getImpsRemaining(imp) {
  if (imp) {
    return Number(imp.stack);
  }
  return 0;
}

var impStyles = [
  'imp-0',
  'imp-1',
  'imp-1'
];

function getImpWarningStyle(impsRem) {
  return impStyles[impsRem] || 'fshGreen';
}

function initImpDiv(containerDiv) {
  impDiv = containerDiv.children[0];
  impDiv.textContent = 'Shield Imps Remaining: ';
  impRemainingSpan = createSpan();
  insertElement(impDiv, impRemainingSpan);
  insertHtmlBeforeEnd(impDiv, '&nbsp;');
  var recast = createSpan({className: 'xSmallLink', textContent: 'Recast'});
  insertElement(impDiv, recast);
  on(recast, 'click', recastClick);
}

function hasImp(containerDiv, imp) {
  if (impDiv) {
    toggleForce(impDiv, false);
  } else {
    initImpDiv(containerDiv);
  }
  var impsRem = getImpsRemaining(imp);
  impDiv.className = getImpWarningStyle(impsRem);
  impRemainingSpan.textContent = impsRem.toString();
}

function hideImpWarning() {
  if (impDiv) {
    toggleForce(impDiv, true);
  }
}

export default function impWarning(containerDiv, imp, dd) {
  if (imp || dd) {
    hasImp(containerDiv, imp);
  } else {
    hideImpWarning();
  }
}
