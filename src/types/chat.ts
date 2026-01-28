/**
 * Chat Types for @onegenui/chat
 */

import type { ReactNode } from "react";
import type {
  ConversationTurn,
  QuestionPayload,
  SuggestionChip,
} from "@onegenui/react";

// ─────────────────────────────────────────────────────────────────────────────
// Chat Panel Props
// ─────────────────────────────────────────────────────────────────────────────

export interface ChatPanelProps {
  /** Conversation history */
  conversation: ConversationTurn[];

  /** Whether AI is currently streaming a response */
  isStreaming?: boolean;

  /** Panel open/close state (for mobile) */
  isOpen?: boolean;

  /** Callback when panel open state changes */
  onOpenChange?: (open: boolean) => void;

  /** Panel width (desktop) */
  width?: number;

  /** Callback when width changes */
  onWidthChange?: (width: number) => void;

  // ─────────────────────────────────────────────────────────────────────────
  // Actions
  // ─────────────────────────────────────────────────────────────────────────

  /** Send a new message */
  onSend?: (message: string, context?: Record<string, unknown>) => void;

  /** Delete a conversation turn */
  onDelete?: (turnId: string) => void;

  /** Edit a conversation turn */
  onEdit?: (turnId: string, newMessage: string) => Promise<void>;

  /** Undo last action */
  onUndo?: () => void;

  /** Redo last undone action */
  onRedo?: () => void;

  /** Whether undo is available */
  canUndo?: boolean;

  /** Whether redo is available */
  canRedo?: boolean;

  // ─────────────────────────────────────────────────────────────────────────
  // Selection Integration
  // ─────────────────────────────────────────────────────────────────────────

  /** Currently selected element from dashboard */
  selectedElement?: SelectedElement | null;

  /** Prompt for selection edit mode */
  selectionPrompt?: string;

  /** Callback when selection prompt changes */
  onSelectionPromptChange?: (prompt: string) => void;

  /** Submit selection with prompt */
  onSelectionSubmit?: () => void;

  /** Cancel selection mode */
  onSelectionCancel?: () => void;

  /** Delete selected element */
  onSelectionDelete?: () => void;

  // ─────────────────────────────────────────────────────────────────────────
  // Interactive Features
  // ─────────────────────────────────────────────────────────────────────────

  /** Answer a question from AI */
  onAnswerQuestion?: (
    turnId: string,
    questionId: string,
    answers: Record<string, unknown>,
  ) => void;

  /** Click a suggestion chip */
  onSuggestionClick?: (suggestion: SuggestionChip) => void;

  /** Open settings dialog */
  onOpenSettings?: () => void;

  // ─────────────────────────────────────────────────────────────────────────
  // Theming
  // ─────────────────────────────────────────────────────────────────────────

  /** Visual theme */
  theme?: "dark" | "light" | "system";

  /** Visual variant */
  variant?: "glass" | "solid" | "minimal";

  /** Position on screen */
  position?: "left" | "right" | "floating";

  /** Custom class name */
  className?: string;

  /** Custom inline styles */
  style?: React.CSSProperties;
}

// ─────────────────────────────────────────────────────────────────────────────
// Selected Element
// ─────────────────────────────────────────────────────────────────────────────

export interface SelectedElement {
  key: string;
  type: string;
  props?: Record<string, unknown>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Message Types
// ─────────────────────────────────────────────────────────────────────────────

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component Props
// ─────────────────────────────────────────────────────────────────────────────

export interface ChatHeaderProps {
  title?: string;
  isStreaming?: boolean;
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
  onOpenSettings?: () => void;
  onClose?: () => void;
  showClose?: boolean;
}

export interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  disabled?: boolean;
  isStreaming?: boolean;
}

export interface MessageBubbleProps {
  message: ChatMessage;
  isLast?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onCopy?: () => void;
}

export interface ConversationListProps {
  conversation: ConversationTurn[];
  isStreaming?: boolean;
  onEdit?: (turnId: string, message: string) => void;
  onDelete?: (turnId: string) => void;
  onAnswerQuestion?: (
    turnId: string,
    questionId: string,
    answers: Record<string, unknown>,
  ) => void;
  onSuggestionClick?: (suggestion: SuggestionChip) => void;
}

export interface QuestionFormProps {
  question: QuestionPayload;
  onSubmit: (answers: Record<string, unknown>) => void;
  onSkip?: () => void;
  isSubmitting?: boolean;
}

export interface SuggestionChipsProps {
  suggestions: SuggestionChip[];
  onClick: (suggestion: SuggestionChip) => void;
  disabled?: boolean;
}

export interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
}

export interface EditModeInputProps {
  selectedElement: SelectedElement;
  prompt: string;
  onPromptChange: (prompt: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
  onDelete?: () => void;
  isStreaming?: boolean;
}
