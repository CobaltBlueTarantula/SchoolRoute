<script>
  import { onMount } from 'svelte';

  export let value = "";
  let schoolNames = [];

  onMount(async () => {
    const res = await fetch('/schools.csv');
    const text = await res.text();

    const lines = text.trim().split("\n");
    const schoolSet = new Set();

    lines.forEach(line => {
      const cols = line.split('","').map(c => c.replace(/(^"|"$)/g, ''));
      schoolSet.add(cols[1]); // column 2 is school name
    });

    schoolNames = Array.from(schoolSet).sort();
  });
</script>

<input type="text" class="input" placeholder="Select a school" list="schools" bind:value={value} on:input={(e) => { value = e.target.value; }}/>
<datalist id="schools">
  {#each schoolNames as school}
    <option value={school}></option>
  {/each}
</datalist>