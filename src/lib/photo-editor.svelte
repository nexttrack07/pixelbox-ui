<Modal
  title="Edit your details"
  open={!!url}
  on:close={() => dispatch('close')}
>
  <svelte:fragment slot="body">
    <img src={url} alt="Editing the img" />
  </svelte:fragment>
</Modal>
<script>
import { createEventDispatcher } from 'svelte';

  import Modal from '../shared/modal.svelte'
  export let url

  const dispatch = createEventDispatcher()
</script>
