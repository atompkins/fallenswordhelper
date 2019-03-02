import getText from '../../common/getText';
import toLowerCase from '../../common/toLowerCase';

var numRE = /[^a-zA-Z0-9.,+\- ]/g;
var priceRE =
  /([+-]{0,1}[.\d]+ *k)|([+-]{0,1}[.\d]+ *fsp)|([+-]{0,1}[.\d]+ *stam)/;

function thisLine(node) {
  return node && node.nodeName !== 'BR';
}

function formatPrice(text) {
  return toLowerCase(text.replace(numRE, '')).match(priceRE);
}

function priceAfterName(buffNameNode) {
  var text = '';
  var node = buffNameNode;
  // get the whole line from the buff name towards the end (even after
  // the ',', in case of 'AL, Lib, Mer: 10k each'
  while (thisLine(node)) {
    var newtext = getText(node);
    node = node.nextSibling; // Text Node
    text += newtext;
  }
  return formatPrice(text);
}

function priceBeforeName(buffNameNode) {
  var text = '';
  var node = buffNameNode;
  while (thisLine(node)) {
    var newtext = getText(node);
    node = node.previousSibling; // Text Node
    text = newtext + text;
  }
  return formatPrice(text);
}

export default function getPrice(buffNameNode) {
  var price = priceAfterName(buffNameNode);
  if (!price) { // some players have prices BEFORE the buff names
    price = priceBeforeName(buffNameNode);
  }
  return price;
}
