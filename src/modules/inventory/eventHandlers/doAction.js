import hideQTip from '../../common/hideQTip';
import {imageServer} from '../../system/system';
import partial from '../../common/partial';

function removeClass(self) {
  self.closest('tr')
    .find('.takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem')
    .removeClass();
}

function clearButtons(td) {
  [
    2, // Where
    12, // BP - GS
    13, // GS - W/U
    14, // W/U - Tag
    15, // Tag - Drop
    16 // ? - Send
  ].forEach(function(i) {td.eq(i).empty();});
}

function killRow(self, data) { // jQuery
  if (data.r === 1) {return;}
  var tr = self.closest('tr');
  var td = $('td', tr);
  clearButtons(td);
  tr.css('text-decoration', 'line-through');
}

function anotherSpinner(self) {
  self.empty().append('<img src="' + imageServer +
    '/skin/loading.gif" width="11" height="11">');
}

export default function doAction(fn, self) { // jQuery
  hideQTip(self);
  removeClass(self);
  fn().done(partial(killRow, self));
  anotherSpinner(self);
}
