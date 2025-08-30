<script>
  import { loadCsv, parseCsv } from '$lib/utils';
  import { onMount } from 'svelte';

  export let value = "";
  let schoolNames = [];

  onMount(async () => {
    const response = await fetch("/schools.json");
    const schools = await response.json();
    const schoolSet = new Set();

    schools.forEach(school => {
      schoolSet.add(school.name);
    });

    schoolNames = Array.from(schoolSet).sort();
  });
</script>

<input type="text" class="input" placeholder="Select a school" list="schools" bind:value={value}/>
<datalist id="schools">
  {#each schoolNames as school}
    <option value={school}></option>
  {/each}
</datalist>