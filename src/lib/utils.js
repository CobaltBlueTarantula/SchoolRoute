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
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



const systemPrompt = "Always answer in rhymes. Today is Thursday"

export async function getData(school, time) {
  const url = "http://api.palmforest.space/v1/chat/completions";

  const payload = {
    model: "openai/gpt-oss-20b",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: "What day is it today?" }
    ],
    temperature: 0.7,
    max_tokens: -1,
    stream: false
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}