import './fastCompose.css';
import backgroundCreate from './backgroundCreate';
import contains from '../common/contains';
import getArrayByClassName from '../common/getArrayByClassName';
import insertElement from '../common/insertElement';
import insertElementAfter from '../common/insertElementAfter';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import on from '../common/on';
import once from '../common/once';
import {pCC} from '../support/layout';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import querySelectorAll from '../common/querySelectorAll';
import querySelectorArray from '../common/querySelectorArray';
import {sendEvent} from '../support/fshGa';
import setText from '../common/setText';
import {subscribe} from '../support/pubsub';
import {createDiv, createInput, createTable} from '../common/cElement';

function doTableClass(myTable, slotsLeft) {
  myTable.classList.add('left-' + slotsLeft.toString());
}

function quickcreate(myTable) {
  var openTemplates = querySelectorAll('.quickCreate .sendLink');
  doTableClass(myTable, openTemplates.length);
}

function composePots(button, templateId) {
  sendEvent('composing', 'FastComposeButton');
  var openTemplates = querySelectorAll(
    '[id|="composing-template"]:not(#composing-template-multi)');
  if (openTemplates.length < button.value) {return;}
  for (var i = 0; i < button.value; i += 1) {
    openTemplates[i].value = templateId;
    backgroundCreate(openTemplates[i].nextElementSibling.nextElementSibling,
      openTemplates[i]);
  }
}

function handleClick(evt) {
  var button = evt.target;
  var templateId = button.dataset.templateId;
  if (templateId) {composePots(button, templateId);}
}

function buildButton(val, templateId) {
  return createInput({
    className: 'awesome orange',
    dataset: {templateId: templateId},
    type: 'button',
    value: val
  });
}

function buildCells(template, myRow, compSlot, i) {
  if (i === 0) {
    setText(template[1], myRow.insertCell(-1));
  }
  insertElement(
    myRow.insertCell(-1),
    buildButton((i + 1).toString(), template[0])
  );
  return myRow;
}

function buildRows(compSlots, openSlots, myTable, template) {
  compSlots.reduce(partial(buildCells, template), myTable.insertRow(-1));
  return myTable;
}

function buildTable(templates, compSlots, openSlots) {
  var myTable = createTable({id: 'fshFastCompose'});
  doTableClass(myTable, openSlots);
  return templates.reduce(partial(buildRows, compSlots, openSlots), myTable);
}

function keyValuePairs(el) {return [el.value, el.text];}

function setupFastCompose(fcDiv, compSlots, openSlots) {
  var templates = querySelectorArray('#composing-template-multi option')
    .map(keyValuePairs);
  var myTable = buildTable(templates, compSlots, openSlots);
  insertElement(fcDiv, myTable);
  on(pCC, 'click', handleClick);
  subscribe('quickcreate', partial(quickcreate, myTable));
}

function drawList(fcDiv) {
  sendEvent('composing', 'FastCompose');
  insertHtmlBeforeEnd(fcDiv, '<br>');
  var compSlots = getArrayByClassName('composing-potion-time', document);
  var openSlots = compSlots.filter(contains('ETA: n/a')).length;
  if (openSlots > 0) {
    setupFastCompose(fcDiv, compSlots, openSlots);
  } else {
    insertHtmlBeforeEnd(fcDiv, 'No open slots!');
  }
}

export default function fastCompose() {
  var buttonDiv = querySelector('#pCC div.centered');
  insertHtmlAfterEnd(buttonDiv.children[1],
    ' | <label for="fast-compose"><span class="sendLink">' +
    'Fast Compose</span></label>');
  var fcDiv = createDiv({className: 'centered'});
  insertElementAfter(fcDiv, buttonDiv);
  var fcCheck = createInput({id: 'fast-compose', type: 'checkbox'});
  insertElementAfter(fcCheck, buttonDiv);
  once(fcCheck, 'change', partial(drawList, fcDiv));
}
