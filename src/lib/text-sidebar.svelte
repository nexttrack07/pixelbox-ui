<script lang="ts">
  import { addText } from "../stores/canvas.store";

</script>

<div id="text-sidebar" class="flex flex-col">
  <button
    class="text-3xl"
    on:click={() => addText("Add a heading", { fontSize: 45, fontFamily: 'Roboto' })}
  >
    Add a heading
  </button>
  <button
    class="text-xl"
    on:click={() => addText("Add a subheading", { fontSize: 30, fontFamily: 'Roboto'  })}
  >
    Add a subheading
  </button>
  <button
    class=""
    on:click={() => addText("Add a paragraph", { fontSize: 20, fontFamily: 'Roboto'  })}
  >
    Add a paragraph
  </button>
</div>

<style lang="postcss">
  #text-sidebar > button {
    @apply text-blue-50 p-8 border-b border-blue-400;
  }
</style>
