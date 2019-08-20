import {composingFragmentType} from '../../support/constants';
import {createTable} from '../../common/cElement';
import {daUseItem} from '../../_dataAccess/_dataAccess';
import eventHandler5 from '../../common/eventHandler5';
import {getElementById} from '../../common/getElement';
import getInventory from '../../ajax/getInventory';
import {imageServer} from '../../system/system';
import insertElement from '../../common/insertElement';
import jConfirm from '../../common/jConfirm';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import jsonFail from '../../common/jsonFail';
import {keys} from '../../common/keys';
import on from '../../common/on';
import outputResult from '../../common/outputResult';
import {pCC} from '../../support/layout';
import partial from '../../common/partial';
import selfIdIs from '../../common/selfIdIs';

var extTbl;
var playerId;
var extractInv;
var selectST;
var selectMain;
var resourceList;
var buyResult;

function thisItem(invId, el) {return el.inv_id === invId;}

function backpackRemove(invId) {
  var thisIndex = extractInv.findIndex(partial(thisItem, invId));
  if (thisIndex >= 0) {
    extractInv.splice(thisIndex, 1);
  }
}

function expandFrags(frag) {
  return frag.amount + ' x ' + composingFragmentType[frag.type];
}

function processResult(r) {
  if (r.item) {
    return 'You successfully extracted 1 \'' + r.item.n +
      '\' component(s) from 1 resource(s).</span>';
  }
  if (r.frags) {
    return 'You gained ' + r.frags.map(expandFrags).join(', ') +
      ' Fragments by opening the Fragment Stash.';
  }
  return '<span class="fshRed">You failed to extract any components from ' +
    'resource(s).</span>';
}

function quickDoneExtracted(invId, json) {
  if (jsonFail(json, buyResult)) {return;}
  backpackRemove(invId);
  outputResult(processResult(json.r), buyResult);
}

function ajaxExtract(el) {daUseItem(el).then(partial(quickDoneExtracted, el));}

function doExtract(target) {
  var inventoryIDs = resourceList[target.id.replace('fshExtr', '')].invIDs;
  target.parentNode.innerHTML = 'extracting all ' +
    inventoryIDs.length + ' resources';
  inventoryIDs.forEach(ajaxExtract);
}

function extractAllSimilar(self) {
  jConfirm('Extract Resources',
    'Are you sure you want to extract all similar items?',
    partial(doExtract, self)
  );
}

function inMain(item) {
  return selectMain && item.folder_id !== -1;
}

function inSt(item) {
  return !selectST && item.is_in_st;
}

function checkFlags(item) {
  return inMain(item) || inSt(item);
}

function resources(prev, item) {
  if (checkFlags(item)) {return prev;}
  if (prev[item.item_id]) {
    prev[item.item_id].invIDs.push(item.inv_id);
  } else {
    prev[item.item_id] = {
      invIDs: [item.inv_id],
      inv_id: item.inv_id,
      item_name: item.item_name
    };
  }
  return prev;
}

function tableRows(prev, item_id) {
  var res = resourceList[item_id];
  return prev + '<tr><td class="fshCenter"><span class="smallLink"' +
    ' id="fshExtr' + item_id +
    '">Extract all ' + res.invIDs.length + '</span></td>' +
    '<td><img src="' + imageServer + '/items/' +
    item_id + '.gif" class="tip-dynamic" data-tipped="' +
    'fetchitem.php?item_id=' + item_id + '&inv_id=' +
    res.inv_id + '&t=1&p=' + playerId +
    '" border=0></td><td>' + res.item_name + '</td></tr>';
}

function showQuickExtract() {
  if (!extractInv) {return;}
  resourceList = extractInv.reduce(resources, {});
  var output =
    '<tr><th width="20%">Actions</th><th colspan="2">Items</th></tr>' +
    '<tr><td colspan="3"><ol id="qeresult"></ol></td></tr>';
  output += keys(resourceList).reduce(tableRows, '');
  extTbl.innerHTML = output;
  buyResult = getElementById('qeresult');
}

function isExtractable(item) {
  return item.item_name === 'Zombie Coffin' ||
    item.type === 12 ||
    item.type === 16;
}

function prepInv(data) {
  playerId = data.player_id;
  extractInv = data.items.filter(isExtractable);
  showQuickExtract();
}

function toggleSelectSt() {
  selectST = !selectST;
  showQuickExtract();
}

function toggleSelectMain() {
  selectMain = !selectMain;
  showQuickExtract();
}

function extractable(self) {return self.id.startsWith('fshExtr');}

function extractEvents() {
  return [
    [selfIdIs('fshInSt'), toggleSelectSt],
    [selfIdIs('fshInMain'), toggleSelectMain],
    [extractable, extractAllSimilar]
  ];
}

export default function insertQuickExtract(injector) { // jQuery.min
  if (jQueryNotPresent()) {return;}
  var content = injector || pCC;
  content.innerHTML = '<div class="qeHead"><b>Quick Extract</b></div>' +
    'Select which type of plants you wish to extract all of. Only ' +
    'select extractable resources.<br>' +
    '<label><input type="checkbox" id="fshInSt" checked>' +
    ' Select items in ST</label>&nbsp;&nbsp;' +
    '<label><input type="checkbox" id="fshInMain" checked>' +
    ' Only extract items in Main Folder</label>';
  extTbl = createTable({width: '100%'});
  insertElement(content, extTbl);
  selectST = true;
  selectMain = true;
  on(content, 'click', eventHandler5(extractEvents()));
  getInventory().then(prepInv);
}