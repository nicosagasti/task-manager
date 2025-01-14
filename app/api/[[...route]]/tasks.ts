import { Hono } from "hono";
import { db } from "@/database/drizzle";
import { tasks } from "@/database/schema";

const app = new Hono().get("/", async (c) => {
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
