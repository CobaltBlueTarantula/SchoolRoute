<script>
  import { loadCsv, parseCsv, wktToCoords, getRandomColor } from "$lib/utils";
  import { onMount } from "svelte";

  let schools;
  let routes;

  let { school } = $props();
  let map;

  $effect(() => {
    if(school && schools) {
      const found = schools.find(s => s.name === school);
      if(found && map) {
        map.setView([found.geo_point.lat, found.geo_point.lon], 17)
      }
    }
  });

  onMount(async () => {
    const L = (await import('leaflet')).default;
    await import('leaflet/dist/leaflet.css');
    await import('leaflet.markercluster');

    // Initialize map and set origin to Canberra
    map = L.map('map').setView([-35.2, 149.1], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    routes = parseCsv(await loadCsv("/routes.csv"));
    
    const response = await fetch("/schools.json");
    schools = await response.json();
    
    const markers = L.markerClusterGroup();

    // schools.forEach(school => {
    //   const marker = L.marker([school.geo_point.lat, school.geo_point.lon])
    //     .bindPopup(school.name);
    //   markers.addLayer(marker);
    // });

    map.addLayer(markers);

    routes.forEach(route => {
      const lines = wktToCoords(route.the_geom);   // array of line arrays??

      lines.forEach(coords => {
        L.polyline(coords, { color: getRandomColor(), weight: 5 })
        .addTo(map)
        .bindPopup(route.long_name);
      });
    });
  });
</script>

<div id="map" class="card bg-base-100 w-7xl h-[80vh] m-4 md:m-8 p-6 md:p-15 shadow-sm drop-shadow-2xl"/>