"use client";

import {
  memo,
  useState,
  useRef,
  useCallback,
  useEffect,
  type KeyboardEvent,
} from "react";
import { SendHorizontal, Paperclip } from "lucide-react";
import type { ChatInputProps } from "../types";
import { cn } from "../utils/cn";
import { DeepResearchToggle } from "./DeepResearch/DeepResearchToggle";

/**
 * Chat Input Component
 *
 * Text input with auto-resize, Deep Research toggle, attachments, and keyboard shortcuts.
 */
export const ChatInput = memo(function ChatInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Type a message...",
  disabled = false,
  isStreaming = false,
  showDeepResearch = true,
  onAttach,
}: ChatInputProps & {
  showDeepResearch?: boolean;
  onAttach?: () => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
    }
  }, [value]);

  // Handle submit on Enter (without Shift)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (value.trim() && !disabled && !isStreaming) {
          onSubmit();
        }
      }
    },
    [value, disabled, isStreaming, onSubmit],
  );

  const handleSubmit = useCallback(() => {
    if (value.trim() && !disabled && !isStreaming) {
      onSubmit();
    }
  }, [value, disabled, isStreaming, onSubmit]);

  const isDisabled = disabled || isStreaming;
  const canSend = value.trim().length > 0 && !isDisabled;

  return (
    <div className="border-t border-border bg-black/15">
      {/* Input Row */}
      <div className="flex items-end gap-2 p-4">
        {/* Left Actions: Attach + Deep Research */}
        <div className="flex items-center gap-1 shrink-0 self-end mb-1.5">
          {/* Attachment Button */}
          {onAttach && (
            <button
              type="button"
              onClick={onAttach}
              disabled={isDisabled}
              className={cn(
                "flex items-center justify-center w-9 h-9 rounded-lg transition-colors",
                "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                isDisabled && "opacity-50 cursor-not-allowed",
              )}
              title="Attach file"
              aria-label="Attach file"
            >
              <Paperclip size={18} />
            </button>
          )}

          {/* Deep Research Toggle */}
          {showDeepResearch && <DeepResearchToggle compact />}
        </div>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={isDisabled}
          rows={1}
          className={cn(
            "flex-1 min-h-[44px] max-h-[160px] p-3 border border-border rounded-xl bg-card text-foreground text-base resize-none outline-none transition-colors",
            "placeholder:text-muted-foreground",
            isFocused ? "border-ring bg-muted/50" : "",
            isDisabled ? "opacity-60 cursor-not-allowed" : "",
          )}
          aria-label="Message input"
        />

        {/* Send Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSend}
          className={cn(
            "flex items-center justify-center w-11 h-11 p-0 border-none rounded-lg bg-primary text-white transition-all shrink-0 cursor-pointer hover:bg-primary/90 self-end",
            !canSend &&
              "bg-muted text-muted-foreground cursor-not-allowed hover:bg-muted",
          )}
          title="Send message"
          aria-label="Send message"
        >
          <SendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
});
