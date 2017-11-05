import add from '../../support/task';
import alpha from '../../common/alpha';
import formatDateTime from '../../common/formatDateTime';
import {act, cur, gxp, lvl, max, utc, vl} from './indexConstants';
import {
  createDiv,
  createTBody,
  createTable,
  createTh,
} from '../../common/cElement';

var actBody;
var selMember;
var tgCont;
var memberSelect;
var myMembers;

function buildOptions() {
  return '<select name="member">' +
    '<option value="- All -" selected>- All -</option>' +
    Object.keys(myMembers).sort(alpha).reduce(function(prev, member) {
      return prev + '<option value="' + member + '">' + member + '</option>';
    }, '') + '</select>';
}

function toText(val) {
  if (typeof val === 'undefined') {return '#DEF';}
  return val.toLocaleString();
}

function memberRows() {
  return Object.keys(myMembers).reduce(function(outside, memberKey) {
    if (selMember &&
        selMember !== '- All -' &&
        selMember !== memberKey) {return outside;}
    return outside + myMembers[memberKey].reduce(
      function(inside, activity) {
        return inside + '<tr>' +
          '<td>' +
          formatDateTime(new Date(activity[utc] * 1000)) +
          '</td>' +
          '<td>' + memberKey + '</td>' +
          '<td class="fshRight">' + toText(activity[lvl]) + '</td>' +
          '<td class="fshRight">' + toText(activity[vl]) + '</td>' +
          '<td class="fshRight">' + toText(activity[cur]) + '</td>' +
          '<td class="fshRight">' + toText(activity[max]) + '</td>' +
          '<td class="fshRight">' +
            Math.floor(activity[cur] / activity[max] * 100) +
          '</td>' +
          '<td class="fshRight">' + activity[act] + '</td>' +
          '<td class="fshRight">' + toText(activity[gxp]) + '</td>' +
          '</tr>';
      }, '');
  }, '');
}

function drawRows() {
  actBody.innerHTML = memberRows();
  tgCont.classList.remove('fshSpinner');
}

function queueDrawRows() {
  add(3, drawRows);
}

function myChange(e) {
  selMember = e.target.value;
  queueDrawRows();
}

export function initTable(theMembers) {
  myMembers = theMembers;
  memberSelect.innerHTML = buildOptions();
  queueDrawRows();
}

export function makeTg() {
  var tg = createTable({id: 'tg'});
  var hrow = tg.createTHead().insertRow(-1);
  hrow.insertAdjacentHTML('beforeend', '<th>Date</th>');

  var memberHead = createTh({textContent: 'Member'});
  memberSelect = createDiv();
  memberHead.appendChild(memberSelect);
  hrow.appendChild(memberHead);

  hrow.insertAdjacentHTML('beforeend', '<th>Level</th><th>VL</th>' +
  '<th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th>' +
  '<th>Last<br>Activity<br>(Days)</th><th>GXP</th>');

  actBody = createTBody();
  tg.appendChild(actBody);
  tg.addEventListener('change', myChange);
  tgCont = createDiv({className: 'tgCont fshSpinner fshSpinner64'});
  tgCont.appendChild(tg);
  return tgCont;
}