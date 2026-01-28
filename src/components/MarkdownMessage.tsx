"use client";

import { memo, type CSSProperties } from "react";
import { useRenderText } from "@onegenui/react";

interface MarkdownMessageProps {
  content: string;
  style?: CSSProperties;
}

/**
 * Core markdown rendering via MarkdownProvider (no local markdown config).
 */
export const MarkdownMessage = memo(function MarkdownMessage({
  content,
  style,
}: MarkdownMessageProps) {
  const renderText = useRenderText();
  return <div style={style}>{renderText(content)}</div>;
});
