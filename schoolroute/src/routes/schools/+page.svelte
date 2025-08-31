<script>
  import { loadCsv, parseCsv } from "$lib/utils";
  import { onMount } from "svelte";

  let columnNames = [];
  let schoolRoutes = [];
  let searchQuery = "";

  onMount(async () => {
    const routes = await loadCsv("/school_routes.csv");

    // Manually set because funny
    columnNames = ["RouteNumber", "Description", "School Name", "StartTime", "Address", "Phone"];

    schoolRoutes = parseCsv(routes);
  });

  // reactive filtered list
  let filteredRoutes = [];
  $: filteredRoutes = schoolRoutes.filter(route => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return columnNames.some(col =>
      (route[col] || "").toLowerCase().includes(query)
    );
  });
</script>

{#snippet routeRow(routeInfo)}
  <tr>
    {#each columnNames as column, i}
      {#if (i == 0)}
        <th class="text-[0.75rem]">{routeInfo[column]}</th>
      {:else}
        <td class="text-[0.75rem]">{routeInfo[column]}</td>
      {/if}
    {/each}
  </tr>
{/snippet}

<div class="card p-8 m-8 shadow-sm drop-shadow-3xl">
  <h1 class="font-semibold text-2xl pb-4">School Bus Services</h1>

  <!-- Search bar -->
  <div class="pb-6">
    <input
      type="text"
      placeholder="Search routes, schools, addresses..."
      bind:value={searchQuery}
      class="input input-bordered w-full max-w-lg"
    />
  </div>

  <div class="overflow-x-auto">
    <table class="table table-xs">
      <thead>
        <tr>
          {#each columnNames as column}
            <th>{column}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#if filteredRoutes.length > 0}
          {#each filteredRoutes as route}
            {@render routeRow(route)}
          {/each}
        {:else}
          <tr>
            <td colspan={columnNames.length} class="text-center text-gray-500 py-4">
              No routes found
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
</div>
