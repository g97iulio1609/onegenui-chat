/**
 * @onegenui/chat
 *
 * Beautiful, responsive AI chat interface for OneGenUI dashboards.
 */

// Components
export { ChatPanel } from "./components/ChatPanel";
export { ChatHeader } from "./components/ChatHeader";
export { ChatInput } from "./components/ChatInput";
export { EmptyState } from "./components/EmptyState";
export { SuggestionChips } from "./components/SuggestionChips";
export { TypingIndicator } from "./components/TypingIndicator";
export { QuestionForm } from "./components/QuestionForm";
export { MarkdownMessage } from "./components/MarkdownMessage";
export {
  ConversationInteractiveElements,
  type ConversationInteractiveElementsProps,
} from "./components/ConversationInteractiveElements";
export {
  PlanningStatus,
  type PlanningStatusProps,
} from "./components/PlanningStatus";
export {
  UnifiedProgressIndicator,
  type UnifiedProgressIndicatorProps,
} from "./components/UnifiedProgress";

// Components - Input
export {
  ChatInputArea,
  type ChatInputAreaProps,
} from "./components/Input/ChatInputArea";
export {
  ActionMenu,
  type ActionMenuProps,
} from "./components/Input/ActionMenu";
export {
  FileAttachmentBadge,
  type FileAttachmentBadgeProps,
} from "./components/Input/FileAttachmentBadge";

// Hooks
export { useChatAttachments } from "./hooks/useChatAttachments";

// Types
export type {
  ChatPanelProps,
  ChatHeaderProps,
  ChatInputProps,
  EmptyStateProps,
  SuggestionChipsProps,
  QuestionFormProps,
  EditModeInputProps,
  SelectedElement,
  ChatMessage,
  ConversationListProps,
  MessageBubbleProps,
} from "./types/chat";
export * from "./types/attachments";

// Styles (for customization)
export {
  colors,
  spacing,
  radii,
  typography,
  shadows,
  glass,
  zIndex,
  breakpoints,
  panelDimensions,
} from "./styles/tokens";

export {
  easing,
  duration,
  transitions,
  keyframes,
  animations,
} from "./styles/animations";

// Schemas (for validation and registration)
export {
  chatMessageSchema,
  formFieldSchema,
  formFieldOptionSchema,
  formFieldValidationSchema,
  questionPayloadSchema,
  quickReplyOptionSchema,
  suggestionChipSchema,
  conversationTurnSchema,
  type ChatMessageSchema,
  type FormFieldSchema,
  type QuestionPayloadSchema,
  type SuggestionChipSchema,
  type ConversationTurnSchema,
} from "./schema";
