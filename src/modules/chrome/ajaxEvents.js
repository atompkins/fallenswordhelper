import jQueryNotPresent from '../common/jQueryNotPresent';

export default function ajaxEvents() {
  if (jQueryNotPresent()) return;
  $(document).on('ajaxComplete', (event, xhr, settings) => {
    console.log('ajaxComplete', event, xhr, settings);
  });
  $(document).on('ajaxSend', (event, xhr, settings) => {
    console.log('ajaxSend', event, xhr, settings);
  });
}
