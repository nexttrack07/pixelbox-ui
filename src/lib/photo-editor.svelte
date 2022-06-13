<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { getEditorDefaults } from "@pqina/pintura";
  import { PinturaEditor } from "@pqina/svelte-pintura";
  import Modal from "../shared/modal.svelte";

  export let photo: any;
  const dispatch = createEventDispatcher();
</script>

{#if photo}
  <Modal
    title={photo.name}
    open={!!photo}
    on:close={() => dispatch("close")}
  >
    <svelte:fragment slot="body">
      <div class="w-[900px] h-[550px] flex">
        <div class="flex-1 flex flex-col">
          <PinturaEditor
            {...getEditorDefaults()}
            src={photo.url}
            imageCropAspectRatio={1}
          />
        </div>
        <div
          class="w-[250px] flex flex-col border-l border-slate-300 bg-slate-200 px-4 py-8 space-y-6"
        >
          <button
            type="button"
            class="inline-flex justify-center items-center px-4 py-2 border border-blue-900 shadow-sm text-base font-medium rounded-md text-blue-900 bg-transparent hover:border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clip-rule="evenodd"
              />
            </svg>
            Remove Background
          </button>

          <div class="flex flex-col space-y-1">
            <label>Saturation</label>
            <input type="range" min="-50" max="50" value="0" />
          </div>
          <div class="flex flex-col space-y-1">
            <label>Vibrance</label>
            <input type="range" min="-50" max="50" value="0" />
          </div>
          <div class="flex flex-col space-y-1">
            <label>Hue</label>
            <input type="range" min="-50" max="50" value="0" />
          </div>
          <div class="flex-1" />
          <button
            type="button"
            class="inline-flex justify-center items-center px-4 py-2 border border-blue-600 text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >Update existing image</button
          >
          <button
            type="button"
            class="inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >Save as new image</button
          >
        </div>
      </div>
    </svelte:fragment>
  </Modal>
{/if}
