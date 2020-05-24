import batch from '../../common/batch';
import partial from '../../common/partial';
import toggleForce from '../../common/toggleForce';

function clearCheck(el) {
  // eslint-disable-next-line no-param-reassign
  el.parentNode.parentNode.previousElementSibling.children[0].checked = false;
}

function displayFolderItems(invItems, folderId, o) {
  const tr = o.injectHere.parentNode;
  const folder = invItems[o.invid].folder_id;
  const force = folderId !== 0 && folderId !== folder;
  toggleForce(tr, force);
  toggleForce(tr.nextElementSibling, force);
}

function updateList(invItems, folderId, o) {
  clearCheck(o.el);
  displayFolderItems(invItems, folderId, o);
}

export default function hideFolders(itemsAry, invItems, target) {
  batch([
    2,
    3,
    itemsAry,
    0,
    partial(updateList, invItems, Number(target.dataset.folder)),
  ]);
}