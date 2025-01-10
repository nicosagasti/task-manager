import { pgTable, text } from "drizzle-orm/pg-core";

/* TODO:
/* What should be  the tasks properties stored in db? 
*/
export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
});
