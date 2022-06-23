<script lang="ts">
  import { initCanvas } from "../stores/canvas.store";
  import { onMount } from "svelte";

  onMount(() => {
    initCanvas("canvas", { width: 700, height: 550, preserveObjectStacking: true });
  });
</script>

<div class="w-[700px] h-[550px] bg-gray-50 shadow rounded">
  <canvas id="canvas" />
</div>
