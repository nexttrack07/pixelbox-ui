<script lang="ts">
  import { uploadService } from "../services/uploads.service";
  import PhotoEditor from "./photo-editor.svelte";

  let url = ''
  let fileInput: HTMLInputElement;
  let photosPromise = uploadService.getPhotos();

  const handleEditPhoto = (photo: { url: string }) => {
    url = photo.url
  }
  const handleUploadPhoto = async (e: Event) => {
    const image = (e.target as HTMLInputElement).files[0];
    const formData = new FormData();
    formData.append("photo", image);

    try {
      await uploadService.uploadPhoto(formData);
      photosPromise = uploadService.getPhotos();
    } catch (err) {
      console.error(`Error uploading photo...${err}`);
    }
  };
</script>

<input
  bind:this={fileInput}
  class="hidden"
  on:change={handleUploadPhoto}
  type="file"
/>
<button
  on:click={() => fileInput.click()}
  class="block w-9/12 rounded shadow bg-blue-600 text-blue-200 text-md mx-auto my-6 p-4"
>
  Upload photo
</button>

{#await photosPromise}
  <p>Loader goes here...</p>
{:then photos}
  <div
    class="flex flex-wrap justify-center items-center space-x-2 space-y-2 px-4"
  >
    {#each photos as photo (photo.id)}
      <div id="image-container" class="relative">
        <img
          class="w-[150px] h-[110px] rounded border border-neutral-300"
          src={photo.thumbnail}
          alt={photo.name}
        />
        <div
          id="image-buttons"
          class="hidden absolute p-4 top-0 bottom-0 left-0 right-0 items-center justify-center"
        >
          <button
            class="bg-blue-600 text-zinc-50 text-sm px-2 py-1 w-full rounded"
            >Insert</button
          >
          <button
            on:click={() => handleEditPhoto(photo)}
            class="bg-sky-800 text-zinc-50 text-sm px-2 py-1 w-full rounded"
            >Edit</button
          >
        </div>
      </div>
    {/each}
  </div>
{/await}

<PhotoEditor on:close={() => { url = '' }} {url} />

<style lang="postcss">
  #image-container:hover > #image-buttons {
    @apply flex flex-col space-y-1;
  }

  #image-container:hover > img {
    @apply opacity-60;
  }
</style>
