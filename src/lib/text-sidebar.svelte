<script lang="ts">
  import { canvasStore } from "../stores/canvas.store";

  const { addText } = canvasStore;
</script>

<div id="text-sidebar" class="flex flex-col">
  <button
    class="text-3xl"
    on:click={() => addText("Add a heading", { fontSize: 45 })}
  >
    Add a heading
  </button>
  <button
    class="text-xl"
    on:click={() => addText("Add a subheading", { fontSize: 30 })}
  >
    Add a subheading
  </button>
  <button
    class=""
    on:click={() => addText("Add a paragraph", { fontSize: 20 })}
  >
    Add a paragraph
  </button>
</div>

<style lang="postcss">
  #text-sidebar > button {
    @apply text-blue-50 p-8 border-b border-blue-400;
  }
</style>
