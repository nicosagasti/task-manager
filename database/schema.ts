import { pgTable, text, date, boolean, jsonb } from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: text("id").primaryKey(), // Unique identifier for each task
  name: text("name").notNull(), // Name of the task
  deadline: date("deadline").notNull(), // Task deadline
  status: text("status").notNull(), // Status: "completed", "in_progress", or "not_started"
  impact: text("impact").notNull(), // Impact: "none", "minor", "major", or "critical"
  automate: boolean("automate").notNull(), // Whether the task is automated
  tags: jsonb("tags"), // Tags stored as a JSONB array
  dependencies: jsonb("dependencies"), // Dependencies stored as a JSONB array
  description: text("description"), // Additional task details or notes
});

/* TODO:
/* Fix tags and dependecies to be arrays of strings (?)
*/
