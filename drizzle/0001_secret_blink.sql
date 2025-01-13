CREATE TABLE IF NOT EXISTS "tasks" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"deadline" date NOT NULL,
	"status" text NOT NULL,
	"impact" text NOT NULL,
	"automate" boolean NOT NULL,
	"tags" jsonb,
	"dependencies" jsonb,
	"description" text
);
--> statement-breakpoint
DROP TABLE "accounts";