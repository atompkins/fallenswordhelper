import { o as onclick, p as pCC, z as getElementById, s as partial, bd as getCustomUrlParameter, aA as retryAjax } from './calfSystem-06ff1f7b.js';
import { h as hideElement } from './hideElement-2c661b2e.js';

let bpc;

function bp() {
  if (!bpc) {
    bpc = getElementById('backpackContainer');
  }
  return bpc;
}

const elementTests = [
  (target) => target.tagName === 'A',
  (target) => Boolean(target.href),
  (target) => target.href.includes('togglesection'),
];

function condition(target, fn) { return fn(target); }

function isSectionToggle(target) {
  return elementTests.every(partial(condition, target));
}

function oldStyleDiv(target) {
  if (target.style.display === 'block') {
    hideElement(target);
  }
  target.removeAttribute('style');
}

function toggleTarget(target) {
  if (target.hasAttribute('style')) {
    oldStyleDiv(target);
  } else {
    target.classList.toggle('fshHide');
  }
}

function toggleSection(target) {
  const sectionId = Number(getCustomUrlParameter(target.search, 'section_id'));
  if (sectionId === 5) {
    toggleTarget(bp());
  } else {
    toggleTarget(target.parentNode.parentNode.nextElementSibling);
  }
}

function testForSection(evt) {
  const { target } = evt;
  if (isSectionToggle(target)) {
    toggleSection(target);
    retryAjax(target.href);
    evt.preventDefault();
  }
}

function ajaxifyProfileSections() {
  onclick(pCC, testForSection);
}

export default ajaxifyProfileSections;
//# sourceMappingURL=ajaxifyProfileSections-9e3cafb0.js.map