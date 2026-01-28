"use client";

import { memo } from "react";
import type { SuggestionChipsProps } from "../types";
import { suggestionChipStyles, transitions } from "../styles";

/**
 * Suggestion Chips Component
 *
 * Quick action buttons suggested by the AI.
 */
export const SuggestionChips = memo(function SuggestionChips({
  suggestions,
  onClick,
  disabled = false,
}: SuggestionChipsProps) {
  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <div style={suggestionChipStyles.container}>
      {suggestions.map((suggestion, index) => (
        <button
          key={suggestion.id || `suggestion-${index}`}
          type="button"
          onClick={() => onClick(suggestion)}
          disabled={disabled}
          style={{
            ...suggestionChipStyles.chip,
            transition: transitions.interactive,
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          aria-label={suggestion.label}
        >
          {suggestion.label}
        </button>
      ))}
    </div>
  );
});
