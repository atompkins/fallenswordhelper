import getValue from '../system/getValue';
import jQueryNotPresent from '../common/jQueryNotPresent';
import {pCC} from '../support/layout';

function hasTextEntry() { // jQuery
  $('#pCC form').first().attr('id', 'dochat');
  $('#pCC input').slice(0, 7).each(function(i, e) {
    $(e).attr('form', 'dochat');
  });
  var theTable = $('#pCC table table').first();
  theTable.append('<tr id="fshMass"></tr>');
  $('td', theTable).eq(0).remove();
  var btnMass = $('input[value="Send As Mass"]', theTable);
  if (btnMass.length === 1) {
    btnMass.appendTo('#fshMass', theTable);
  }
  var ourTd = $('td', theTable).eq(0);
  ourTd.attr('rowspan', '2');
  $('input', ourTd).replaceWith('<textarea id="fshTxt" name="msg" cols' +
    '="72" rows="2" form="dochat" style="resize: none"></textarea>');
  var fshTxt = $('#fshTxt', ourTd);
  fshTxt.keydown(function(e) {
    if (e.keyCode === 13 && fshTxt.val() !== '') {
      $('input[value=Send]', theTable).click();
      return false;
    }
  });
}

var tests = [
  function() {return !getValue('enhanceChatTextEntry');},
  function() {return !pCC;},
  function() {return jQueryNotPresent();}
];

export default function addChatTextArea() {
  if (tests.some(function(el) {return el();})) {return;}
  hasTextEntry();
}