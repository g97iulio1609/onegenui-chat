"use client";

import { memo } from "react";
import { Bot, Redo2, Settings, Undo2, X } from "lucide-react";
import type { ChatHeaderProps } from "../types";
import { cn } from "../utils/cn";

/**
 * Chat Header Component
 *
 * Displays the chat panel header with title, streaming indicator, and action buttons.
 */
export const ChatHeader = memo(function ChatHeader({
  title = "AI Assistant",
  isStreaming = false,
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false,
  onOpenSettings,
  onClose,
  showClose = false,
}: ChatHeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 min-h-[60px] border-b border-border bg-black/5">
      {/* Title and Status */}
      <div className="flex items-center gap-2 text-base font-semibold text-foreground">
        <Bot size={20} />
        <span>{title}</span>
        {isStreaming && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/15 text-primary border border-blue-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Thinking...
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1">
        {/* Undo */}
        {onUndo && (
          <button
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              !canUndo && "opacity-40 cursor-not-allowed pointer-events-none",
            )}
            title="Undo (Ctrl+Z)"
            aria-label="Undo"
          >
            <Undo2 size={16} />
          </button>
        )}

        {/* Redo */}
        {onRedo && (
          <button
            type="button"
            onClick={onRedo}
            disabled={!canRedo}
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              !canRedo && "opacity-40 cursor-not-allowed pointer-events-none",
            )}
            title="Redo (Ctrl+Shift+Z)"
            aria-label="Redo"
          >
            <Redo2 size={16} />
          </button>
        )}

        {/* Settings */}
        {onOpenSettings && (
          <button
            type="button"
            onClick={onOpenSettings}
            className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="Settings"
            aria-label="Open settings"
          >
            <Settings size={16} />
          </button>
        )}

        {/* Close */}
        {showClose && onClose && (
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="Close"
            aria-label="Close chat"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </header>
  );
});
