<script>
  import { getData } from "$lib/getdata";
  import SchoolResult from "../../components/transport/SchoolResult.svelte";
  import SchoolSelector from "../../components/transport/SchoolSelector.svelte";

  let school = $state("");
  let time = $state();

  let data = $state();

  const handleSubmit = async () => {
    await getData(school, time);
  };
</script>

<div class="flex flex-col md:flex-row">
  <section class="card bg-base-100 md:w-2xl shadow-sm drop-shadow-2xl m-4 md:m-8 p-6 md:p-15">
    <form onsubmit={handleSubmit} preventDefault>
      <div class="flex gap-7 flex-col mb-10">
        <div>
          <h1 class="pb-3">School</h1>
          <SchoolSelector bind:value={school}/>
        </div>
        <div>
          <h1 class="pb-3">Arrival Time</h1>
          <input type="time" class="input" bind:value={time} />
        </div>
      </div>

      <button type="submit" class="btn" disabled={!school || !time}>Search</button>
    </form>
  </section>

  {#if data}
    <SchoolResult/>
  {:else}
    <div class="skeleton md:w-2xl shadow-sm drop-shadow-2xl m-4 md:m-8 p-6 md:p-15"></div>
  {/if}
</div>