import { f as on, p as pCC, x as getElementById, z as setInnerHtml } from './calfSystem-f6498976.js';
import { a as addCommas } from './addCommas-137b79b9.js';
import './closest-07392fae.js';
import { c as closestTable } from './closestTable-232e79d5.js';

let amt;
let prc;
let warn;

function getAmount() {
  if (!amt) { amt = getElementById('amount'); }
  return amt;
}

function getPrice() {
  if (!prc) { prc = getElementById('price'); }
  return prc;
}

function getWarning() {
  if (!warn) {
    const requestTable = closestTable(getAmount());
    const newRow = requestTable.insertRow(2);
    warn = newRow.insertCell(0);
    warn.colSpan = '2';
    warn.className = 'fshCenter';
  }
  return warn;
}

function totalPrice(amount, sellPrice) {
  const gross = amount * sellPrice;
  return gross + Math.ceil(gross / 200);
}

function marketplaceWarning(sellPrice) {
  const amount = getAmount().value;
  setInnerHtml(`<span class="fshBlue">You are offering to buy <b>${
    amount}</b> FSP for >> <b>${addCommas(sellPrice)}</b> (Total: ${
    addCommas(totalPrice(amount, sellPrice))})</span>`, getWarning());
}

function clearWarning() {
  if (warn && warn.innerHTML !== '') { setInnerHtml('', warn); }
}

function addMarketplaceWarning() {
  const price = getPrice();
  if (price) {
    const sellPrice = price.value;
    if (sellPrice.search(/^[0-9]+$/) !== -1) {
      marketplaceWarning(sellPrice);
    } else { clearWarning(); }
  }
}

function marketplace() {
  on(pCC, 'keyup', addMarketplaceWarning);
}

export default marketplace;
//# sourceMappingURL=marketplace-c904891a.js.map
