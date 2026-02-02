"use client";

import { memo } from "react";
import { Sparkles } from "lucide-react";
import { EmptyState as SharedEmptyState } from "@onegenui/components";
import type { EmptyStateProps } from "../types";

/**
 * Empty State Component
 *
 * Displayed when there are no messages in the conversation.
 */
export const EmptyState = memo(function EmptyState({
  title = "Start a conversation",
  description = "Ask me anything about your dashboard. I can help you create, modify, and analyze components.",
  icon,
}: EmptyStateProps) {
  return (
    <SharedEmptyState
      icon={icon || <Sparkles size={32} />}
      title={title}
      description={description}
      className="flex-1 border border-dashed border-border/60 bg-muted/10 py-16"
    />
  );
});
