<script>
  import { sendRequest } from "$lib/utils";

  let { selectedRoute, selectedSchool } = $props();
  let responeContent = $state("");

  let currentRequest = 0;

  $effect(async () => {
    if (selectedRoute && selectedSchool) {
      responeContent = "";
      const requestId = ++currentRequest;
      const response = await sendRequest(selectedSchool, selectedRoute);

      // Only update if this is the latest request
      if (requestId === currentRequest) {
        responeContent = response;
      }
    }
  });
</script>

{#if selectedRoute && selectedSchool}
  <h1 class="font-semibold text-[18px] pb-2">
    Route: <span class="text-[#237CC9]">{selectedRoute.long_name}</span>
  </h1>
  <h2 class="font-semibold text-[18px] pb-6">
    School: <span class="text-[#237CC9]">{selectedSchool.name}</span>
  </h2>
  <section class="mt-5 flex flex-col gap-6">
    {#if responeContent}
      <p>{responeContent}</p>
    {:else}
      <div class="skeleton h-4 w-3/5"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-5/6"></div>
    {/if}
  </section>
{:else}
  <div
    class="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded"
  >
    <h2 class="font-semibold text-lg mb-2">Please select:</h2>
    <ul class="list-disc ml-6">
      {#if !selectedSchool}
        <li>A <span class="font-bold">school</span></li>
      {/if}
      {#if !selectedRoute}
        <li>A <span class="font-bold">route</span> on the map</li>
      {/if}
    </ul>
  </div>
{/if}
