"use client";

import { memo } from "react";
import { LoadingIndicator } from "@onegenui/components";

/**
 * Typing Indicator Component
 *
 * Animated dots shown when AI is generating a response.
 */
export const TypingIndicator = memo(function TypingIndicator() {
  return (
    <div className="px-4 py-3">
      <LoadingIndicator />
    </div>
  );
});
