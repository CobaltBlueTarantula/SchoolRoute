export async function loadCsv(url) {
  const res = await fetch(url);
  return await res.text();
}

export function parseCsv(text) {
  const rows = text.trim().split('\n');
  const header = rows.shift().split(',');

  return rows.map(row => {
    const values = row.match(/"([^"]*)"|[^,]+/g).map(v => v.replace(/^"|"$/g,'').trim()); // funny regex stuffs i dont understand
    
    const obj = {};
    header.forEach((h,i) => obj[h.trim()] = values[i]);
    return obj;
  });
}

// parse the funny multistring to an array of coordinate arrays [lat, lng]
export function wktToCoords(wkt) {
  const clean = wkt.replace("MULTILINESTRING ((", "").replace("))", ""); // Clean up the input

  // Split into coordinate pairs and swap longitude with latitude
  const coords = clean.split(",").map(pair => {
    const [lng, lat] = pair.trim().split(/\s+/).map(Number);
    return [lat, lng];
  });

  return [coords];
}

export function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 90%, 60%)`;
}

const systemPrompt = `
You are a helpful AI analyst who must assess bus routes in the Australian Capital Territory.
Given school data and route data, provide a concise response in under 80 words on how consistent, reliable, efficient and busy this bus route is for school children to get to that school.
Avoid providing misinformation or using outdated data to ensure responses are factual.
Stating the bus route number, name and the school it goes to in the first sentence of your response.
Do not mention exact coordinates, longitude or latitude, instead make it very easy to understand by using metric distances.
Avoid any styling in your response.
`;

export async function sendRequest(school, route) {
  try {
    const response = await fetch("https://ai-worker.kosta-buntsev.workers.dev/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Chosen route data: ${JSON.stringify(route)}, Chosen school data: ${JSON.stringify(school)}.`}
        ]
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (err) {
    console.error("Error calling chat API:", err);
    return "Failed to call the chat API. Please try again later."
  }
}