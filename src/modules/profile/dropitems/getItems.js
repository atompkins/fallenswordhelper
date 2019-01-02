import addStatTotalToMouseover from '../../common/addStatTotalToMouseover';
import doToggleButtons from './doToggleButtons';
import getElementsByTagName from '../../common/getElementsByTagName';
import {pCC} from '../../support/layout';
import {def_table, itemRE} from '../../support/constants';
import {
  getPrefs,
  showExtraLinks,
  showQuickDropLinks
} from './getPrefs';

export var itemsAry;
export var itemsHash;

function getItemImg() {
  var allTables = getElementsByTagName(def_table, pCC);
  var lastTable = allTables[allTables.length - 1];
  return getElementsByTagName('img', lastTable);
}

export function getItems() {
  addStatTotalToMouseover();
  getPrefs();
  doToggleButtons(showExtraLinks, showQuickDropLinks);
  var imgList = getItemImg();
  itemsAry = [];
  itemsHash = {};
  Array.prototype.forEach.call(imgList, function(el) {
    var tipped = el.dataset.tipped;
    if (tipped) {
      var matches = tipped.match(itemRE);
      itemsHash[matches[1]] = (itemsHash[matches[1]] || 0) + 1;
      var injectHere = el.parentNode.parentNode.nextElementSibling;
      itemsAry.push({
        el: el,
        invid: matches[2],
        injectHere: injectHere
      });
    }
  });
  // Exclude composed pots
  itemsHash[13699] = 1;
}
