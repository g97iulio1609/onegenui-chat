/**
 * Schema definitions for @onegenui/chat components
 *
 * These schemas define the structure and validation for chat-related data.
 */

import { z } from "zod";

// ─────────────────────────────────────────────────────────────────────────────
// Chat Message Schema
// ─────────────────────────────────────────────────────────────────────────────

export const chatMessageSchema = z.object({
  id: z.string(),
  role: z.enum(["user", "assistant", "system"]),
  content: z.string(),
  timestamp: z.number().optional(),
});

export type ChatMessageSchema = z.infer<typeof chatMessageSchema>;

// ─────────────────────────────────────────────────────────────────────────────
// Form Field Schema
// ─────────────────────────────────────────────────────────────────────────────

export const formFieldOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const formFieldValidationSchema = z.object({
  required: z.boolean().optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  pattern: z.string().optional(),
  message: z.string().optional(),
});

export const formFieldSchema = z.object({
  id: z.string(),
  label: z.string(),
  type: z.enum([
    "text",
    "textarea",
    "number",
    "email",
    "date",
    "time",
    "datetime",
    "select",
    "radio",
    "checkbox",
    "slider",
  ]),
  placeholder: z.string().optional(),
  defaultValue: z.unknown().optional(),
  options: z.array(formFieldOptionSchema).optional(),
  validation: formFieldValidationSchema.optional(),
  allowCustom: z.boolean().optional(),
});

export type FormFieldSchema = z.infer<typeof formFieldSchema>;

// ─────────────────────────────────────────────────────────────────────────────
// Question Schema
// ─────────────────────────────────────────────────────────────────────────────

export const quickReplyOptionSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string().optional(),
  icon: z.string().optional(),
  primary: z.boolean().optional(),
});

export const questionPayloadSchema = z.object({
  id: z.string(),
  text: z.string(),
  type: z.enum(["text", "form", "quick-reply"]),
  fields: z.array(formFieldSchema).optional(),
  options: z.array(quickReplyOptionSchema).optional(),
  multiple: z.boolean().optional(),
  allowCustom: z.boolean().optional(),
  required: z.boolean().optional(),
});

export type QuestionPayloadSchema = z.infer<typeof questionPayloadSchema>;

// ─────────────────────────────────────────────────────────────────────────────
// Suggestion Chip Schema
// ─────────────────────────────────────────────────────────────────────────────

export const suggestionChipSchema = z.object({
  id: z.string(),
  label: z.string(),
  action: z.string().optional(),
  icon: z.string().optional(),
  primary: z.boolean().optional(),
});

export type SuggestionChipSchema = z.infer<typeof suggestionChipSchema>;

// ─────────────────────────────────────────────────────────────────────────────
// Conversation Turn Schema
// ─────────────────────────────────────────────────────────────────────────────

export const conversationTurnSchema = z.object({
  id: z.string(),
  userMessage: z.string().optional(),
  assistantMessages: z.array(chatMessageSchema).optional(),
  questions: z.array(questionPayloadSchema).optional(),
  questionAnswers: z.record(z.unknown()).optional(),
  suggestions: z.array(suggestionChipSchema).optional(),
  isProactive: z.boolean().optional(),
  timestamp: z.number().optional(),
});

export type ConversationTurnSchema = z.infer<typeof conversationTurnSchema>;
