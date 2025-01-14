import { Hono } from "hono";
import { handle } from "hono/vercel";

import tasks from "./tasks";

export const runtime = "edge";

const app = new Hono().basePath("/api");

//RPC

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route("/tasks", tasks);

export const GET = handle(app);
export const POST = handle(app);

//useful for react query:
export type AppType = typeof routes;
