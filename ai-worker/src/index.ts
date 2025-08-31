import { fromHono } from "chanfana";
import { Hono } from "hono";
import { Chat } from "./endpoints/chatCompletions";

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

// CORS shenanigans
app.options("/api/*", (c) => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
});


// api
const api = fromHono(app, {
	docs_url: "/",
});

api.post("/api/chat", Chat)
app.get('/test', (c) => c.text('Hello world'))

export default app;