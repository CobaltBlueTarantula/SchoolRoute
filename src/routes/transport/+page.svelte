<script>
  import SchoolResult from "../../components/transport/RouteMap.svelte";
  import SchoolSelector from "../../components/transport/SchoolSelector.svelte";

  let school = $state("");
</script>

<div class="flex flex-col md:flex-row w-full">
  <section class="card bg-base-100 md:w-96 h-76 shadow-sm drop-shadow-2xl m-4 md:m-8 p-6 md:p-10">
    <div class="flex gap-7 flex-col mb-10">
      <div>
        <h1 class="pb-3">Search Schools</h1>
        <SchoolSelector bind:value={school}/>
      </div>
    </div>
  </section>

  <SchoolResult school={school}/>
</div>