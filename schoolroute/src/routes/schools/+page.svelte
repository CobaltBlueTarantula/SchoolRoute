<script>
  import { loadCsv, parseCsv } from "$lib/utils";
  import { onMount } from "svelte";

  let columnNames = $state([]);
  let schoolRoutes = $state([]);

  onMount(async () => {
    const routes = await loadCsv("/school_routes.csv");

    // columnNames = routes.split("\n")[0].split(",").filter(col => col !== "Website" && col !== "Location"); // remove fields the user doesnt need
    // Manually set because funny
    columnNames = ["RouteNumber", "Description", "School Name", "StartTime", "Address", "Phone"]

    schoolRoutes = parseCsv(routes);

    console.log(schoolRoutes[0])
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
  <h1 class="font-semibold text-2xl pb-8">School Bus Services</h1>

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
        {#each schoolRoutes as route}
          {@render routeRow(route)}
        {/each}
      </tbody>
    </table>
  </div>
</div>