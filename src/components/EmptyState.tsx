"use client";

import { memo } from "react";
import { Sparkles } from "lucide-react";
import type { EmptyStateProps } from "../types";
import { emptyStateStyles } from "../styles";

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
    <div style={emptyStateStyles.container}>
      <div style={emptyStateStyles.icon}>{icon || <Sparkles size={32} />}</div>
      <h3 style={emptyStateStyles.title}>{title}</h3>
      <p style={emptyStateStyles.description}>{description}</p>
    </div>
  );
});
