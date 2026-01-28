"use client";

import { memo } from "react";

/**
 * Typing Indicator Component
 *
 * Animated dots shown when AI is generating a response.
 */
export const TypingIndicator = memo(function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-white/40 animate-bounce"
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: "1s",
          }}
        />
      ))}
    </div>
  );
});
