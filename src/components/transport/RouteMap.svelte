<script>
  import { onMount } from 'svelte';

  let map;
  const csvUrl = '/busses.csv'; // path to your CSV file

  // Load CSV file
  async function loadCsv(url) {
    const res = await fetch(url);
    return await res.text();
  }

  // Parse CSV
  function parseCsv(text) {
    const rows = text.trim().split('\n');
    const header = rows.shift().split(',');
    return rows.map(row => {
      const values = row.match(/"([^"]*)"|[^,]+/g).map(v => v.replace(/^"|"$/g,'').trim());
      const obj = {};
      header.forEach((h,i) => obj[h.trim()] = values[i]);
      return obj;
    });
  }

  // Convert POINT(lng lat) to [lat, lng]
  function pointToLatLng(pointStr) {
    const match = pointStr.match(/POINT \((-?\d+\.?\d*) (-?\d+\.?\d*)\)/);
    if (!match) return [0,0];
    const [, lng, lat] = match;
    return [+lat, +lng];
  }

  onMount(async () => {
    // Dynamically import Leaflet (runs only in browser)
    const L = (await import('leaflet')).default;
    await import('leaflet/dist/leaflet.css');

    // Initialize map
    map = L.map('map').setView([-35.2, 149.1], 13); // Canberra
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Load and parse CSV
    const csvText = await loadCsv(csvUrl);
    const routes = parseCsv(csvText);

    // Plot markers
    routes.slice(0, 5).forEach(route => {
      const [lat, lng] = pointToLatLng(route.Location);
      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`
          <strong>Route ${route.RouteNumber}</strong><br/>
          School: ${route['School Name']}<br/>
          Start: ${route.StartTime}<br/>
          Vehicle: ${route.VehicleStyle}
        `);
    });
  });
</script>

<div
  id="map"
  class="card bg-base-100 w-5xl h-[80vh] m-4 md:m-8 p-6 md:p-15 shadow-sm drop-shadow-2xl">
</div>