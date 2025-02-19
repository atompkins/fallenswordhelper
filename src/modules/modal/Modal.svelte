<script>
  import calf from '../support/calf';
  import ModalBackground from './ModalBackground.svelte';
  import ModalDialog from './ModalDialog.svelte';

  let { children, close, modal = $bindable(), visible = true } = $props();

  let oldDialogIsClosed;

  function replaceDialogIsClosed() {
    if (calf.dialogIsClosed) {
      oldDialogIsClosed = calf.dialogIsClosed;
    }
    calf.dialogIsClosed = () => !visible;
  }

  function restoreDialogIsClosed() {
    if (oldDialogIsClosed) {
      calf.dialogIsClosed = oldDialogIsClosed;
    }
  }

  $effect(() => {
    if (visible) {
      replaceDialogIsClosed();
    } else {
      restoreDialogIsClosed();
    }
  });
</script>

<ModalBackground {close} {visible}>
  <ModalDialog bind:modal {close} {visible}>
    {@render children?.()}
  </ModalDialog>
</ModalBackground>
