<script>
  import { loadCsv, parseCsv } from '$lib/utils';
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  export let value = "";

  let schoolNames = [];

  onMount(async () => {
    const response = await fetch("/schools.json");
    const schools = await response.json()
    const schoolSet = new Set();

    schools.forEach(school => {
      schoolSet.add(school.name);
    });

    schoolNames = Array.from(schoolSet).sort();
  });
</script>

<input type="text" class="input" placeholder="Select a school" list="schools" bind:value={value} on:input={(e) => dispatch("input", e.target.value)}/>
<datalist id="schools">
  {#each schoolNames as school}
    <option value={school}></option>
  {/each}
</datalist>