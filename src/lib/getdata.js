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