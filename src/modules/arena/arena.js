import doLvlFilter from './doLvlFilter';
import filterHeader from './filterHeader';
import getForage from '../ajax/getForage';
import jQueryNotPresent from '../common/jQueryNotPresent';
import orderData from './orderData';
import partial from '../common/partial';
import redoSort from './redoSort';
import {dontPost, tableOpts} from './assets';
import {
  setOpts,
  storeOpts
} from './setOpts';
import {time, timeEnd} from '../support/debug';

var theTables;

function redoHead(i, e) { // jQuery
  var firstRow = $('tr', e).first();
  $('a', firstRow).contents().unwrap();
  $(e).prepend($('<thead/>').append(firstRow));
}

function process(tabs, arena) { // jQuery

  time('arena.process');

  theTables.each(redoHead);
  setOpts(arena);
  orderData(theTables);
  filterHeader();
  storeOpts();
  doLvlFilter();
  theTables.DataTable(tableOpts);
  redoSort(tabs);
  tabs.on('click', 'input.custombutton[type="submit"]', dontPost);

  timeEnd('arena.process');

}

export function injectArena() { // jQuery
  if (jQueryNotPresent()) {return;}
  var tabs = $('#arenaTypeTabs');
  if (tabs.length !== 1) {return;} // Join error screen
  theTables = $('table[width="635"]', tabs);
  getForage('fsh_arena').done(partial(process, tabs));
}