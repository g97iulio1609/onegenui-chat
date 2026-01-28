"use client";

import { useMemo, type CSSProperties } from "react";
import type { ConversationTurn, QuestionPayload } from "@onegenui/react";
import { QuestionForm } from "./QuestionForm";
import { SuggestionChips } from "./SuggestionChips";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface ConversationInteractiveElementsProps {
  /** Full conversation history */
  conversation: ConversationTurn[];
  /** Whether the AI is currently streaming */
  isStreaming?: boolean;
  /** Callback when a question is answered */
  onAnswerQuestion?: (
    turnId: string,
    questionId: string,
    answers: Record<string, unknown>,
  ) => void;
  /** Callback when a suggestion chip is clicked */
  onSuggestionClick?: (prompt: string) => void;
  /** Custom container style */
  style?: CSSProperties;
  /** Custom class name */
  className?: string;
  /** Whether to show suggestions (default: true) */
  showSuggestions?: boolean;
  /** Whether to show questions (default: true) */
  showQuestions?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────

const CONTAINER_STYLE: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

/**
 * ConversationInteractiveElements
 *
 * Extracts and renders all interactive elements (unanswered questions and suggestions)
 * from a conversation. This component can be used independently of the chat panel
 * to show interactive elements in any context (e.g., dashboard when canvas is off).
 *
 * Features:
 * - Shows all unanswered questions from the conversation
 * - Shows suggestions only from the last turn
 * - Handles question submission and suggestion clicks
 * - Automatically hides when there are no interactive elements
 */
export function ConversationInteractiveElements({
  conversation,
  isStreaming = false,
  onAnswerQuestion,
  onSuggestionClick,
  style,
  className,
  showSuggestions = true,
  showQuestions = true,
}: ConversationInteractiveElementsProps) {
  // Extract unanswered questions from all turns
  const unansweredQuestions = useMemo(() => {
    if (!showQuestions) return [];

    const questions: Array<{
      turnId: string;
      question: QuestionPayload;
    }> = [];

    for (const turn of conversation) {
      if (turn.questions && turn.questions.length > 0) {
        for (const question of turn.questions) {
          const isAnswered =
            turn.questionAnswers && question.id in turn.questionAnswers;
          if (!isAnswered) {
            questions.push({ turnId: turn.id, question });
          }
        }
      }
    }

    return questions;
  }, [conversation, showQuestions]);

  // Get suggestions from the last turn only
  const suggestions = useMemo(() => {
    if (!showSuggestions) return [];
    const lastTurn = conversation[conversation.length - 1];
    return lastTurn?.suggestions || [];
  }, [conversation, showSuggestions]);

  // Don't render if there's nothing to show
  if (unansweredQuestions.length === 0 && suggestions.length === 0) {
    return null;
  }

  return (
    <div style={{ ...CONTAINER_STYLE, ...style }} className={className}>
      {/* Unanswered Questions */}
      {unansweredQuestions.map(({ turnId, question }, index) => (
        <QuestionForm
          key={question.id || `q-${index}`}
          question={question}
          onSubmit={(answers) =>
            onAnswerQuestion?.(turnId, question.id, answers)
          }
          onSkip={
            !question.required
              ? () => onAnswerQuestion?.(turnId, question.id, {})
              : undefined
          }
          isSubmitting={isStreaming}
        />
      ))}

      {/* Suggestions (only if not streaming) */}
      {!isStreaming && suggestions.length > 0 && (
        <SuggestionChips
          suggestions={suggestions}
          onClick={(chip) => onSuggestionClick?.(chip.prompt)}
          disabled={isStreaming}
        />
      )}
    </div>
  );
}
