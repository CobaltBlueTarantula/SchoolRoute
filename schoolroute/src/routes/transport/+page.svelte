<script>
  import { onMount } from "svelte";
  import RouteInfo from "../../components/transport/RouteInfo.svelte";
  import RouteMap from "../../components/transport/RouteMap.svelte";
  import SchoolSelector from "../../components/transport/SchoolSelector.svelte";
  import { base } from "$app/paths";

  let selectedSchool = $state();
  let selectedRoute = $state();

  let schools = [];
  let schoolInput = $state("");

  onMount(async () => {
    const response = await fetch(`${base}/schools.json`);
    schools = await response.json();
  });
  
  function handleSchoolInput(e) {
    schoolInput = e.detail;
    const found = schools.find(s => s.name === schoolInput);
    
    if(found) {
      selectedRoute = undefined;
      selectedSchool = found;
    }
  }
</script>

<div class="flex flex-col md:flex-row w-full">
  <section class="md:w-1/3 h-76">
    <div class="mb-10 shadow-sm drop-shadow-2xl m-4 md:m-8 p-6 md:p-10 card bg-base-100">
      <h1 class="font-semibold text-2xl pb-6">Public Transport Services</h1>
      <h2 class="pb-3">Search Schools</h2>
      <SchoolSelector value={schoolInput} on:input={handleSchoolInput}/>
    </div>
    <div class="mb-10 shadow-sm drop-shadow-2xl m-4 md:m-8 p-6 md:p-10 card bg-base-100">
      <RouteInfo {selectedRoute} {selectedSchool}/>
    </div>
  </section>
  <section class="md:w-2/3 md:mt-0 mt-32 w-1xl">
    <RouteMap on:schoolSelected={e => {
      selectedRoute = undefined;
      selectedSchool = e.detail;
      schoolInput = selectedSchool.name;
    }}
    on:routeSelected={e => 
      selectedRoute = e.detail
    } {selectedSchool}/>
  </section>
</div>