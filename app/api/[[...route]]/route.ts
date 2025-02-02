import { Hono } from "hono";
import { handle } from "hono/vercel";

import tasks from "./tasks";
import { HTTPException } from "hono/http-exception";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.onError((error, c) => {
  if (error instanceof HTTPException) {
    return error.getResponse();
  }

  return c.json({ error: "Internal error" }, 500);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route("/tasks", tasks);

export const GET = handle(app);
export const POST = handle(app);

//useful for react query:
export type AppType = typeof routes;
