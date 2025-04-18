<script>
  import daComponents from '../../_dataAccess/daComponents';
  import daLoadInventory from '../../_dataAccess/daLoadInventory';
  import flattenItems from '../../_dataAccess/export/flattenItems';
  import indexAjaxDoc from '../../ajax/indexAjaxDoc';
  import sendEvent from '../../analytics/sendEvent';
  import all from '../../common/all';
  import alpha from '../../common/alpha';
  import arrayFrom from '../../common/arrayFrom';
  import csvSplit from '../../common/csvSplit';
  import fromEntries from '../../common/fromEntries';
  import getTextTrim from '../../common/getTextTrim';
  import isArray from '../../common/isArray';
  import LinkBtn from '../../common/LinkBtn.svelte';
  import LinkBtnBracketed from '../../common/LinkBtnBracketed.svelte';
  import querySelector from '../../common/querySelector';
  import querySelectorAll from '../../common/querySelectorAll';
  import querySelectorArray from '../../common/querySelectorArray';
  import toLowerCase from '../../common/toLowerCase';
  import uniq from '../../common/uniq';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import { viewRecipeUrl } from '../../support/constants';
  import getValue from '../../system/getValue';
  import { get, set } from '../../system/idb';
  import { cdn } from '../../system/system';

  let { visible = $bindable(true) } = $props();

  let compTally = $state({});
  let invTally = $state({});
  let progressLog = $state([]);
  let recipeBook = $state([]);
  let sortDirection = 1;

  function recipeMgrEvent(type) {
    sendEvent('Recipe Manager', type);
  }

  function close() {
    recipeMgrEvent('close');
    visible = false;
  }

  const getPage = (fid = -1, page = 0) =>
    indexAjaxDoc({ cmd: 'inventing', folder_id: fid, page });
  const nameSort = ([, a], [, b]) => sortDirection * alpha(a, b);

  function sortByName() {
    recipeMgrEvent('sort by name');
    recipeBook = recipeBook.slice().sort(nameSort);
    sortDirection *= -1;
  }

  function addToProgressLog(ary) {
    progressLog = ary.concat(progressLog);
  }

  const itemInfo = (doc, bgGif) =>
    querySelectorArray(`#pCC td[background*="${bgGif}"]`, doc)
      .map((bg) => [
        bg.children[0].children[0].dataset.tipped.split(/[?&=]/),
        bg.parentNode.nextElementSibling,
      ])
      .map(([parts, tr]) => [
        parts[2],
        parts[10],
        ...(tr ? [Number(getTextTrim(tr).split('/')[1])] : []),
      ]);

  async function getParts([id, n, image]) {
    const doc = await indexAjaxDoc({
      cmd: 'inventing',
      subcmd: 'viewrecipe',
      recipe_id: id,
    });
    addToProgressLog([`Parsing blueprint ${n}...`]);
    if (doc) {
      return [
        id,
        n,
        image,
        itemInfo(doc, '/inventory/2x3.'),
        itemInfo(doc, '/inventory/1x1mini.'),
        ...itemInfo(doc, '/hellforge/2x3.'),
      ];
    }
    return [id, n, image];
  }

  const makeTally = (byId) => (uid) => [
    uid,
    byId.filter((iid) => iid === uid).length,
  ];
  const buildObj = (invById) =>
    fromEntries(uniq(invById).map(makeTally(invById)));

  async function getInv() {
    addToProgressLog(['Updating inventory.']);
    const invJson = await daLoadInventory();
    if (invJson?.s) {
      const invById = flattenItems(invJson.r).map(({ b }) => b);
      invTally = buildObj(invById);
    } else addToProgressLog('No inventory.');
  }

  async function getComp() {
    addToProgressLog(['Updating components.']);
    const compJson = await daComponents();
    if (isArray(compJson.r)) {
      const compById = compJson.r.map(({ b }) => b);
      compTally = buildObj(compById);
    } else addToProgressLog('No components.');
  }

  async function getInventory() {
    await all([getInv(), getComp()]);
    progressLog = [];
  }

  async function parseRecipes(toCheck) {
    recipeBook = await all(toCheck.map(getParts));
    set('fsh_recipeMgr', $state.snapshot(recipeBook));
    getInventory();
  }

  async function getFirstPage([href, name]) {
    const fid = href.split('=').at(-1);
    const doc = await getPage(fid);
    addToProgressLog([`Parsing folder "${name}"...`]);
    return [fid, doc];
  }

  const validFolderResponse = (doc) => doc;
  const findRecipes = (doc) =>
    arrayFrom(querySelectorAll('#pCC a[href*="&recipe_id="]', doc));
  const recipeValues = (a) => [
    a.href.split('=').at(-1),
    getTextTrim(a),
    a.parentNode.previousElementSibling.children[0].src.split('/').at(-1),
  ];
  const shouldHide = (rName) => (hName) => hName === rName;
  const isHidden = (hideNames, rName) => hideNames.some(shouldHide(rName));
  const hidden =
    (hideNames) =>
    ([, rName]) =>
      isHidden(hideNames, rName);
  const notHidden =
    (hideNames) =>
    ([, rName]) =>
      !isHidden(hideNames, rName);
  const hiding = (toHide) =>
    toHide.map(([, name]) => `Skipping blueprint "${name}" as it is hidden.`);
  const found = (toCheck) =>
    toCheck.map(([, name]) => `Found blueprint "${name}".`);

  function parseFolders(folders) {
    const hideNames = csvSplit(getValue('hideRecipeNames'));
    const foundRecipes = folders
      .filter(validFolderResponse)
      .flatMap(findRecipes)
      .map(recipeValues);
    addToProgressLog(hiding(foundRecipes.filter(hidden(hideNames))));
    const toCheck = foundRecipes.filter(notHidden(hideNames));
    addToProgressLog(found(toCheck));
    parseRecipes(toCheck);
  }

  const validPageResponse = ([, doc]) => doc;
  const getOptions = ([fid, doc]) => [
    fid,
    arrayFrom(querySelector('#pCC select[name="page"]', doc).options)
      .slice(1)
      .map((opt) => opt.value),
  ];
  const folderHasOtherPages = ([, pages]) => pages.length;
  const eachPage = ([fid, pages]) => pages.map((page) => [fid, page]);
  const getOtherPage = ([fid, page]) => getPage(fid, page);

  async function eachFolder(prmAry) {
    const firstPages = await all(prmAry);
    const otherPages = firstPages
      .filter(validPageResponse)
      .map(getOptions)
      .filter(folderHasOtherPages)
      .flatMap(eachPage)
      .map(getOtherPage);
    const otherDocs = await all(otherPages);
    parseFolders(firstPages.map(([, doc]) => doc).concat(otherDocs));
  }

  const hasQuest = (n) => toLowerCase(n).includes('quest');
  const withQuest = ([, n]) => hasQuest(n);
  const skipped = (folders) =>
    folders
      .filter(withQuest)
      .map(
        ([, n]) =>
          `Skipping folder "${n}" as it has the word "quest" in folder name.`,
      );
  const withoutQuest = ([, n]) => !hasQuest(n);
  const toFolderHref = ([div, name]) => [
    div.previousElementSibling.children[0].href,
    name,
  ];

  function parseUnassigned(unassigned) {
    addToProgressLog(['Parsing folder "Unassigned"...']);
    const otherFolderDivs = querySelectorArray(
      'div[id^="folder_name_"]',
      unassigned,
    ).map((div) => [div, getTextTrim(div)]);
    addToProgressLog(skipped(otherFolderDivs));
    const remainder = otherFolderDivs
      .filter(withoutQuest)
      .map(toFolderHref)
      .map(getFirstPage);
    eachFolder([['-1', unassigned], ...remainder]);
  }

  async function refresh() {
    progressLog = ['Parsing inventing screen ...'];
    const unassigned = await getPage();
    if (unassigned) parseUnassigned(unassigned);
    else addToProgressLog(['Server Error.']);
  }

  async function init() {
    const rb = await get('fsh_recipeMgr');
    if (!rb) refresh();
    recipeBook = rb;
    getInventory();
  }

  function nav() {
    recipeMgrEvent('Navigate to recipe');
  }

  function refreshBtn() {
    recipeMgrEvent('refresh button');
    refresh();
  }
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Recipe Manager
    <LinkBtnBracketed
      --button-color="#494437"
      --button-size="10px"
      onclick={refreshBtn}
    >
      Refresh
    </LinkBtnBracketed>
  {/snippet}
  {#await init() then}
    {#if progressLog.length}
      <div class="progress-log">
        {#each progressLog as txt, index (index)}
          {txt}
          <br />
        {/each}
      </div>
    {:else if recipeBook}
      <div class="recipes ui-widget-content">
        <div class="innerColumnHeader item-container">Recipe</div>
        <div class="innerColumnHeader item-container">
          <LinkBtn --button-color="#383838" onclick={sortByName}>
            Name
          </LinkBtn>
        </div>
        <div class="innerColumnHeader item-container">Items</div>
        <div class="innerColumnHeader item-container">Components</div>
        <div class="innerColumnHeader item-container">Target</div>
        {#each recipeBook as [id, name, recipe, items, components, [targetId, vcode]], index (index)}
          <div class="item-container">
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <a href="{viewRecipeUrl}{id}" onclick={nav}>
              <div
                class="image"
                style:background-image="url('{cdn}recipes/{recipe}')"
              ></div>
            </a>
          </div>
          <div class="item-container">
            <a href="{viewRecipeUrl}{id}" onclick={nav}>
              {name}
            </a>
          </div>
          <div class="item-container">
            {#each items as [itemId, itemVcode, itemReq], x (x)}
              <div>
                <div
                  data-tipped="fetchitem.php?item_id={itemId}&t=2&vcode={itemVcode}"
                  class="small-image tip-dynamic"
                  style:background-image="url('{cdn}items/{itemId}.gif')"
                ></div>
                <div>{invTally[itemId] ?? 0}/{itemReq}</div>
              </div>
            {/each}
          </div>
          <div class="item-container">
            {#each components as [itemId, itemVcode, itemReq], x (x)}
              <div>
                <div
                  data-tipped="fetchitem.php?item_id={itemId}&t=2&vcode={itemVcode}"
                  class="small-image tip-dynamic"
                  style:background-image="url('{cdn}items/{itemId}.gif')"
                ></div>
                <div>{compTally[itemId] ?? 0}/{itemReq}</div>
              </div>
            {/each}
          </div>
          <div class="item-container">
            <div
              data-tipped="fetchitem.php?item_id={targetId}&t=2&vcode={vcode}"
              class="image tip-dynamic"
              style:background-image="url('{cdn}items/{targetId}.gif')"
            ></div>
          </div>
        {/each}
      </div>
    {/if}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</ModalTitled>

<style>
  .progress-log,
  .recipes {
    width: 620px;
  }
  .recipes {
    background-size: contain;
    border-style: none;
    display: grid;
    grid-template-columns: 45px 210px 160px 160px 45px;
    row-gap: 2px;
  }
  .recipes > div:nth-child(n + 6):not(:nth-last-child(-n + 5)) {
    border-bottom-color: #cd9e4b;
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
  .innerColumnHeader {
    width: auto;
  }
  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 30px;
    width: 30px;
  }
  .item-container {
    align-items: center;
    column-gap: 3px;
    display: flex;
    justify-content: center;
  }
  .small-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 20px;
    width: 20px;
  }
  a {
    color: #383838;
  }
</style>
