import { e as element, t as text, c as attr, i as insert, l as listen, n as noop, d as detach, j as createEventDispatcher, S as SvelteComponent, m as init, o as safe_not_equal, a as append, s as set_data, b as space, h as destroy_each, r as run_all } from './index-d49fd9c7.js';
import { i as injectStoreItems, g as getCheckboxesArray, b as getInv, c as getCheckboxesVisible } from './injectStoreItems-5456302d.js';
import { Y as sendEvent, e as entries, j as jQueryPresent, I as getValue, s as partial, N as arrayFrom } from './calfSystem-06ff1f7b.js';
import { b as batch } from './batch-a1d0ca14.js';
import { c as closestTr } from './closestTr-6b51642d.js';
import { t as toggleForce } from './toggleForce-e38cb2b0.js';
import './daAjaxSendItemsToRecipient-6c27e925.js';
import './sendItems-31115f84.js';
import './htmlResult-c8dfcf5f.js';
import './errorDialog-f7744f6f.js';
import './dialogMsg-eb4e9d8f.js';
import './getInventoryById-78c8ae82.js';
import './getInventory-9828133d.js';
import './guildStore-4c8301e1.js';
import './cmdExport-a7eb27a8.js';
import './indexAjaxJson-d3f06031.js';
import './doStatTotal-8cc90e1b.js';
import './closest-1ff01e01.js';

var css$1 = "button.svelte-1recp8w{font-size:12px}";
var modules_edcb02ae = {};

/* src\modules\guild\inventory\storeitems\CheckAll.svelte generated by Svelte v3.35.0 */

function create_fragment$1(ctx) {
	let button;
	let t1;
	let mounted;
	let dispose;

	return {
		c() {
			button = element("button");
			button.textContent = "Check All";
			t1 = text(" ");
			attr(button, "class", "custombutton svelte-1recp8w");
			attr(button, "type", "button");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			insert(target, t1, anchor);

			if (!mounted) {
				dispose = listen(button, "click", /*doCheckAll*/ ctx[0]);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(button);
			if (detaching) detach(t1);
			mounted = false;
			dispose();
		}
	};
}

function instance$1($$self) {
	const dispatch = createEventDispatcher();

	function doCheckAll() {
		sendEvent("storeitems", "Check All");
		dispatch("checkall");
	}

	return [doCheckAll];
}

class CheckAll extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
	}
}

var css = "button.svelte-1gvij2s{background:transparent;border:none;cursor:pointer;font-family:inherit;font-size:12px;margin:auto 3px;padding:0;text-decoration:underline;user-select:text}";
var modules_848f0607 = {};

/* src\modules\guild\inventory\storeitems\FolderFilter.svelte generated by Svelte v3.35.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i][0];
	child_ctx[7] = list[i][1];
	return child_ctx;
}

// (33:4) {#each entries(inv.folders) as [id, name]}
function create_each_block(ctx) {
	let button;
	let t_value = /*name*/ ctx[7] + "";
	let t;
	let mounted;
	let dispose;

	function click_handler_2() {
		return /*click_handler_2*/ ctx[4](/*id*/ ctx[6]);
	}

	return {
		c() {
			button = element("button");
			t = text(t_value);
			attr(button, "type", "button");
			attr(button, "class", "svelte-1gvij2s");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			append(button, t);

			if (!mounted) {
				dispose = listen(button, "click", click_handler_2);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*inv*/ 1 && t_value !== (t_value = /*name*/ ctx[7] + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let tr;
	let td;
	let button0;
	let t1;
	let button1;
	let t3;
	let mounted;
	let dispose;
	let each_value = entries(/*inv*/ ctx[0].folders);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			tr = element("tr");
			td = element("td");
			button0 = element("button");
			button0.textContent = "All";
			t1 = space();
			button1 = element("button");
			button1.textContent = "Main";
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(button0, "type", "button");
			attr(button0, "class", "svelte-1gvij2s");
			attr(button1, "type", "button");
			attr(button1, "class", "svelte-1gvij2s");
			attr(td, "colspan", "3");
			attr(tr, "class", "fshCenter");
		},
		m(target, anchor) {
			insert(target, tr, anchor);
			append(tr, td);
			append(td, button0);
			append(td, t1);
			append(td, button1);
			append(td, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(td, null);
			}

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*click_handler*/ ctx[2]),
					listen(button1, "click", /*click_handler_1*/ ctx[3])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*doFilter, entries, inv*/ 3) {
				each_value = entries(/*inv*/ ctx[0].folders);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(td, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(tr);
			destroy_each(each_blocks, detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	let { inv = { folders: {} } } = $$props;

	function doFilter(id) {
		sendEvent("storeitems", "Filter Folder");
		dispatch("filter", id);
	}

	const click_handler = () => doFilter("-2");
	const click_handler_1 = () => doFilter("-1");
	const click_handler_2 = id => doFilter(id);

	$$self.$$set = $$props => {
		if ("inv" in $$props) $$invalidate(0, inv = $$props.inv);
	};

	return [inv, doFilter, click_handler, click_handler_1, click_handler_2];
}

class FolderFilter extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { inv: 0 });
	}
}

function updateList(inv, id, ctx) {
  ctx.checked = false;
  const tr = closestTr(ctx);
  const folder = inv.items[ctx.value].folder_id;
  const force = id !== -2 && id !== folder;
  toggleForce(tr, force);
  toggleForce(tr.nextElementSibling, force);
}

function doFilter(inv, e) {
  batch([
    5,
    3,
    getCheckboxesArray(),
    0,
    partial(updateList, inv, Number(e.detail)),
  ]);
}

async function doFolders() {
  const inv = await getInv();
  if (!inv || !inv.folders) { return; }
  const form = document.forms[0];
  const folderFilter = new FolderFilter({
    anchor: form,
    props: { inv },
    target: form.parentNode,
  });
  folderFilter.$on('filter', partial(doFilter, inv));
}

function doCheckAll() {
  getCheckboxesVisible()
    .forEach((ctx) => { ctx.checked = !ctx.disabled && !ctx.checked; });
}

function addCheckAll() {
  const submitButton = arrayFrom(document.forms[0].elements).filter((e) => e.type === 'submit')[0];
  const checkAll = new CheckAll({
    anchor: submitButton,
    target: submitButton.parentNode,
  });
  checkAll.$on('checkall', doCheckAll);
}

function storeitems() {
  if (jQueryPresent() && getValue('enableFolderFilter')) { doFolders(); }
  addCheckAll();
  injectStoreItems();
}

export default storeitems;
//# sourceMappingURL=storeitems-ffde104a.js.map