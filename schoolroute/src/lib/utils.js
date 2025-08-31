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
You are a helpful AI analyst.
You will be provided the name of a school and a bus route in the Australian Capital Territory.
Provide a concise response in under 90 words on how consistent, reliable, efficient and busy this bus route is for school children to get to that school.
Make sure your responses are honest, factual, and objective and avoid providing misinformation or using outdated data.
In the first sentence of your response you must provide context by saing the bus route number, name and the school it goes to.
Avoid any styling in your responses.
`;

export async function sendChatMessage(message) {
  try {
    const response = await fetch("https://ai-worker.kosta-buntsev.workers.dev/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
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
    return null;
  }
}