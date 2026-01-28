"use client";

import { useState, useCallback, useRef, useEffect, memo } from "react";
import type { ChatPanelProps } from "../types";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { EmptyState } from "./EmptyState";
import { SuggestionChips } from "./SuggestionChips";
import { TypingIndicator } from "./TypingIndicator";
import { QuestionForm } from "./QuestionForm";
import { MarkdownMessage } from "./MarkdownMessage";
import { ToolProgressIndicator } from "./ToolProgressIndicator";
import type {
  ChatMessage,
  QuestionPayload,
  SuggestionChip,
  ToolProgress,
} from "@onegenui/react";
import { cn } from "../utils/cn";

/**
 * ChatPanel Component
 *
 * Main chat interface component with conversation display, message input,
 * question forms, and suggestion chips.
 */
export const ChatPanel = memo(function ChatPanel({
  conversation,
  isStreaming = false,
  isOpen = true,
  onOpenChange,
  width,
  onWidthChange,
  onSend,
  onDelete,
  onEdit,
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false,
  selectedElement,
  selectionPrompt = "",
  onSelectionPromptChange,
  onSelectionSubmit,
  onSelectionCancel,
  onSelectionDelete,
  onAnswerQuestion,
  onSuggestionClick,
  onOpenSettings,
  variant = "glass",
  className,
  style,
}: ChatPanelProps) {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when conversation updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation, isStreaming]);

  // Handle send message
  const handleSend = useCallback(() => {
    if (inputValue.trim() && onSend) {
      onSend(inputValue.trim());
      setInputValue("");
    }
  }, [inputValue, onSend]);

  // Handle selection submit
  const handleSelectionSubmit = useCallback(() => {
    if (onSelectionSubmit) {
      onSelectionSubmit();
    }
  }, [onSelectionSubmit]);

  // Check if in selection mode
  const isInSelectionMode = !!selectedElement;

  // Get last turn for suggestions
  const lastTurn = conversation[conversation.length - 1];
  const suggestions = lastTurn?.suggestions || [];
  const hasMessages = conversation.length > 0;

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col h-full bg-background/80 backdrop-blur-3xl border-l border-border transition-all overflow-hidden",
        className,
      )}
      style={{
        width: width ?? undefined,
        ...style,
      }}
    >
      {/* Header */}
      <ChatHeader
        title="AI Assistant"
        isStreaming={isStreaming}
        onUndo={onUndo}
        onRedo={onRedo}
        canUndo={canUndo}
        canRedo={canRedo}
        onOpenSettings={onOpenSettings}
        onClose={() => onOpenChange?.(false)}
        showClose={!!onOpenChange}
      />

      {/* Messages Area */}
      <div className="flex flex-col gap-6 p-6 flex-1 overflow-y-auto">
        {!hasMessages ? (
          <EmptyState />
        ) : (
          <>
            {conversation.map((turn) => (
              <div key={turn.id} className="flex flex-col gap-4">
                {/* User Message */}
                {turn.userMessage && !turn.isProactive && (
                  <div className="self-end max-w-[85%] px-5 py-3 rounded-2xl rounded-br-sm bg-primary text-primary-foreground shadow-md text-base leading-normal">
                    {turn.userMessage}
                  </div>
                )}

                {/* Assistant Messages */}
                {turn.assistantMessages?.map(
                  (msg: ChatMessage, idx: number) => (
                    <div
                      key={`${turn.id}-msg-${idx}`}
                      className="self-start max-w-[90%] px-6 py-4 rounded-2xl rounded-bl-sm bg-muted/50 border border-border text-foreground text-base leading-relaxed"
                    >
                      <MarkdownMessage content={msg.content} />
                    </div>
                  ),
                )}

                {/* Tool Progress Indicator */}
                {turn.toolProgress && turn.toolProgress.length > 0 && (
                  <ToolProgressIndicator toolProgress={turn.toolProgress} />
                )}

                {/* Questions */}
                {turn.questions?.map(
                  (question: QuestionPayload, qIdx: number) => {
                    const isAnswered =
                      turn.questionAnswers &&
                      question.id in turn.questionAnswers;
                    if (isAnswered) return null;

                    return (
                      <QuestionForm
                        key={question.id || `q-${qIdx}`}
                        question={question}
                        onSubmit={(answers: Record<string, unknown>) =>
                          onAnswerQuestion?.(turn.id, question.id, answers)
                        }
                        onSkip={
                          !question.required
                            ? () => onAnswerQuestion?.(turn.id, question.id, {})
                            : undefined
                        }
                        isSubmitting={isStreaming}
                      />
                    );
                  },
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isStreaming && <TypingIndicator />}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Suggestion Chips */}
      {suggestions.length > 0 && !isStreaming && (
        <SuggestionChips
          suggestions={suggestions}
          onClick={(s: SuggestionChip) => onSuggestionClick?.(s)}
          disabled={isStreaming}
        />
      )}

      {/* Input Area */}
      {isInSelectionMode ? (
        <div className="p-6">
          <div className="mb-2 text-xs font-medium text-white/70">
            Editing: {selectedElement?.type}
          </div>
          <ChatInput
            value={selectionPrompt}
            onChange={(v) => onSelectionPromptChange?.(v)}
            onSubmit={handleSelectionSubmit}
            placeholder="Describe changes..."
            isStreaming={isStreaming}
          />
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={onSelectionCancel}
              className="flex-1 px-4 py-2 border border-white/10 rounded-lg bg-transparent text-white/70 cursor-pointer hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            {onSelectionDelete && (
              <button
                type="button"
                onClick={onSelectionDelete}
                className="px-4 py-2 border-none rounded-lg bg-destructive/15 text-destructive cursor-pointer hover:bg-destructive/25 transition-colors"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ) : (
        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleSend}
          placeholder="Ask me anything..."
          isStreaming={isStreaming}
        />
      )}
    </div>
  );
});
