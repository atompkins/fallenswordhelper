<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTabsPersist from '../../modal/ModalTabsPersist.svelte';
  import AHQuickSeachEditor from './AHQuickSeachEditor.svelte';
  import AHQuickSearch from './AHQuickSearch.svelte';
  import InvCounter from './InvCounter/InvCounter.svelte';
  import QuickWear from './QuickWear.svelte';

  let { visible = $bindable(true) } = $props();

  function close() {
    sendEvent('Quick Wear', 'close');
    visible = false;
  }

  const tabs = [
    {
      component: QuickWear,
      label: 'Quick Wear',
    },
    {
      component: InvCounter,
      label: 'Inventory Counter',
    },
    {
      component: AHQuickSearch,
      label: 'AH Quick Search',
    },
    {
      component: AHQuickSeachEditor,
      label: 'Raw Editor',
    },
  ];
</script>

<ModalTabsPersist {close} {tabs} {visible} />
