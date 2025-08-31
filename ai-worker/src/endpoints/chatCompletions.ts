import { z } from "zod";
import type { AppContext } from "../types";

export const Chat = async (c: AppContext) => {
  const url = "http://api.palmforest.space:25565/v1/chat/completions";
  const body = await c.req.json();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${c.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-20b",
      messages: body.messages,
    }),
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};