import { Hono } from "hono";
import { db } from "@/database/drizzle";
import { tasks } from "@/database/schema";

import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import { HTTPException } from "hono/http-exception";

const app = new Hono().get("/", clerkMiddleware(), async (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    throw new HTTPException(401, {
      res: c.json({ error: "Unauthorized" }),
    });
  }

  const data = await db
    .select({
      id: tasks.id,
      name: tasks.name,
      description: tasks.description,
      status: tasks.status,
      impact: tasks.impact,
    })
    .from(tasks);

  return c.json({ data });
});

export default app;
