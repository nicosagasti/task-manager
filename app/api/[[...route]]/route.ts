// import { z } from "zod";
// import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";

import tasks from "./tasks";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/tasks", tasks);

export const GET = handle(app);
export const POST = handle(app);
