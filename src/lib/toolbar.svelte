<script lang="ts">
  import { fabric } from "fabric";
  import Dropdown from "../shared/dropdown.svelte";
  import {
    canvasState,
    removeActiveObject,
    updateTextObject,
  } from "../stores/canvas.store";

  let fonts = [
    "Roboto",
    "Oswald",
    "Lobster",
    "Fontdiner Swanky",
    "Craft Girls",
    "Pacifico",
    "Satisfy",
    "Gloria Hallelujah",
    "Audiowide",
    "Sacramento",
  ];
  let value: string;
  let fontSize = 20;

  function isFabricText(text: unknown): text is fabric.Text {
    return text instanceof fabric.Text;
  }

  $: if (isFabricText($canvasState.activeObject) && fonts) {
    const fontFam = $canvasState.activeObject.fontFamily;
    console.log("font-family: ", fontFam);
    const currentFont = fonts.find((f) => f === fontFam);
    value = currentFont;
    fontSize = $canvasState.activeObject.fontSize;
  }

  function onFontChange(e: CustomEvent) {
    if (isFabricText($canvasState.activeObject)) {
      updateTextObject("fontFamily", e.detail);
    }
  }

  function updateFontValue(value: string | number) {
    if (isFabricText($canvasState.activeObject)) {
      $canvasState.activeObject.set(
        "fontSize",
        typeof value == "string" ? parseInt(value) : value
      );
      $canvasState.canvas.renderAll();
    }
  }

  function onFontSizeChange(
    e: Event & { currentTarget: EventTarget & HTMLInputElement }
  ) {
    const { value } = e.currentTarget;
    updateFontValue(value);
  }
</script>

<svelte:head>
  <link href="https://pagecdn.io/lib/easyfonts/fonts.css" rel="stylesheet" />
  <link
    href="http://fonts.googleapis.com/css?family=Roboto|Oswald|Lobster|Fontdiner+Swanky|Crafty+Girls|Pacifico|Satisfy|Gloria+Hallelujah|Bangers|Audiowide|Sacramento"
    rel="stylesheet"
    type="text/css"
  />
</svelte:head>

<div class="flex space-x-4">
  {#if isFabricText($canvasState.activeObject)}
    <Dropdown
      let:option
      let:value
      options={fonts}
      {value}
      on:change={onFontChange}
    >
      <span slot="value" class={`font-${value.toLowerCase()}`}>{value}</span>
      <span slot="option" class={`font-${option.toLowerCase()}`}>{option}</span>
    </Dropdown>
    <input
      class="w-[70px] px-2 py-1 rounded border border-gray-400"
      type="number"
      value={fontSize}
      on:change={onFontSizeChange}
    />
  {/if}
  <div class="flex-1" />
  <button
    class="disabled:cursor-not-allowed disabled:text-gray-500"
    disabled={!$canvasState.activeObject}
    on:click={removeActiveObject}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  </button>
</div>
