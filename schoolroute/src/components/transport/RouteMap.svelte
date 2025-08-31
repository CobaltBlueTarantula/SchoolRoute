<script>
  import { base } from "$app/paths";
  import { loadCsv, parseCsv, wktToCoords, getRandomColor } from "$lib/utils";
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  let schools;
  let routes;

  let { selectedSchool } = $props();
  let selectedRoute;
  let map;

  //Detect when a school is typed and show it on the map
  $effect(() => {
    if(selectedSchool && schools) {
      const found = schools.find(s => s.name == selectedSchool.name);

      if(found) {
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

    routes = parseCsv(await loadCsv(`${base}/routes.csv`));

    const response = await fetch(`${base}/schools.json`);
    schools = await response.json();
    
    const markers = L.markerClusterGroup();

    schools.forEach(school => {
      const marker = L.marker([school.geo_point.lat, school.geo_point.lon])
        .on("click", (e) => {
          selectedSchool = school;
          dispatch("schoolSelected", school);
        })
        .bindPopup(school.name);
      
      markers.addLayer(marker);
    });

    map.addLayer(markers);

    routes.forEach(route => {
      const points = wktToCoords(route.the_geom);   // array of line arrays??

      points.forEach(coords => {
        L.polyline(coords, { color: getRandomColor(), weight: 5 })
        .on("click", (e) => { 
          selectedRoute = route;
          dispatch("routeSelected", route);
        })
        .addTo(map)
        .bindPopup(route.long_name);
      });
    });
  });
</script>

<div id="map" class="card bg-base-100 h-[80vh] m-4 md:m-8 p-6 md:p-15 shadow-sm drop-shadow-2xl"></div>