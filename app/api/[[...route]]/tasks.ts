import { Hono } from "hono";

import { db } from "@/database/drizzle";
import { insertTaskSchema, tasks } from "@/database/schema";

import { createId } from "@paralleldrive/cuid2";

import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { HTTPException } from "hono/http-exception";

import { eq } from "drizzle-orm";

import { zValidator } from "@hono/zod-validator";

const app = new Hono()
  .get("/", clerkMiddleware(), async (c) => {
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
      .from(tasks)
      .where(eq(tasks.userId, auth.userId))

    return c.json({ data });
  })
  .post(
    "/",
    clerkMiddleware(),
    zValidator("json", insertTaskSchema),

    // zValidator(
    //   "json",
    //   insertTaskSchema.pick({
    //     name: true,
    //   })
    // ),
    
    async (c) => {
      const auth = getAuth(c);
      const values = c.req.valid("json");

      if (!auth?.userId) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      const [data] = await db
        .insert(tasks)
        .values({
          ...values,
          id: createId(),
          userId: auth.userId,
        })
        .returning();

      return c.json({ data });
    }
  );

export default app;
