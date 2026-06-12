import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const activityLogsTable = pgTable("activity_logs", {
  id: serial("id").primaryKey(),
  userId: text("user_id"),
  userEmail: text("user_email"),
  action: text("action").notNull(),
  module: text("module").notNull(),
  description: text("description"),
  ipAddress: text("ip_address"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type ActivityLog = typeof activityLogsTable.$inferSelect;
