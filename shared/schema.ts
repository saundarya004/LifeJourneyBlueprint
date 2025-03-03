import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const aiImages = pgTable("ai_images", {
  id: serial("id").primaryKey(),
  prompt: text("prompt").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertAiImageSchema = createInsertSchema(aiImages).pick({
  prompt: true,
  imageUrl: true,
});

export type InsertAiImage = z.infer<typeof insertAiImageSchema>;
export type AiImage = typeof aiImages.$inferSelect;
