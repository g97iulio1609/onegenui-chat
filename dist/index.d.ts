import * as react from 'react';
import react__default, { ReactNode, CSSProperties, RefObject, ChangeEvent } from 'react';
import { ConversationTurn, SuggestionChip, QuestionPayload } from '@onegenui/react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { z } from 'zod';

/**
 * Chat Types for @onegenui/chat
 */

interface ChatPanelProps {
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
    /** Answer a question from AI */
    onAnswerQuestion?: (turnId: string, questionId: string, answers: Record<string, unknown>) => void;
    /** Click a suggestion chip */
    onSuggestionClick?: (suggestion: SuggestionChip) => void;
    /** Open settings dialog */
    onOpenSettings?: () => void;
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
interface SelectedElement {
    key: string;
    type: string;
    props?: Record<string, unknown>;
}
interface ChatMessage {
    id: string;
    role: "user" | "assistant" | "system";
    content: string;
    timestamp?: number;
}
interface ChatHeaderProps {
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
interface ChatInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    placeholder?: string;
    disabled?: boolean;
    isStreaming?: boolean;
}
interface MessageBubbleProps {
    message: ChatMessage;
    isLast?: boolean;
    onEdit?: () => void;
    onDelete?: () => void;
    onCopy?: () => void;
}
interface ConversationListProps {
    conversation: ConversationTurn[];
    isStreaming?: boolean;
    onEdit?: (turnId: string, message: string) => void;
    onDelete?: (turnId: string) => void;
    onAnswerQuestion?: (turnId: string, questionId: string, answers: Record<string, unknown>) => void;
    onSuggestionClick?: (suggestion: SuggestionChip) => void;
}
interface QuestionFormProps$1 {
    question: QuestionPayload;
    onSubmit: (answers: Record<string, unknown>) => void;
    onSkip?: () => void;
    isSubmitting?: boolean;
}
interface SuggestionChipsProps {
    suggestions: SuggestionChip[];
    onClick: (suggestion: SuggestionChip) => void;
    disabled?: boolean;
}
interface EmptyStateProps {
    title?: string;
    description?: string;
    icon?: ReactNode;
}
interface EditModeInputProps {
    selectedElement: SelectedElement;
    prompt: string;
    onPromptChange: (prompt: string) => void;
    onSubmit: () => void;
    onCancel: () => void;
    onDelete?: () => void;
    isStreaming?: boolean;
}

/**
 * Attachment Types
 */
interface FileAttachment {
    id: string;
    file: File;
    type: "document" | "image" | "spreadsheet" | "presentation" | "other";
    preview?: string;
}
/** Server-cached document attachment (from library) */
interface LibraryAttachment {
    id: string;
    documentId: string;
    fileName: string;
    mimeType: string;
    pageCount?: number;
    type: "library-document";
}
type Attachment = FileAttachment | LibraryAttachment;
declare function isLibraryAttachment(a: Attachment): a is LibraryAttachment;
declare function isFileAttachment(a: Attachment): a is FileAttachment;

/**
 * ChatPanel Component
 *
 * Main chat interface component with conversation display, message input,
 * question forms, and suggestion chips.
 */
declare const ChatPanel: react.NamedExoticComponent<ChatPanelProps>;

/**
 * Chat Header Component
 *
 * Displays the chat panel header with title, streaming indicator, and action buttons.
 */
declare const ChatHeader: react.NamedExoticComponent<ChatHeaderProps>;

/**
 * Chat Input Component
 *
 * Text input with auto-resize, Deep Research toggle, attachments, and keyboard shortcuts.
 */
declare const ChatInput: react.NamedExoticComponent<ChatInputProps & {
    showDeepResearch?: boolean;
    onAttach?: () => void;
}>;

/**
 * Empty State Component
 *
 * Displayed when there are no messages in the conversation.
 */
declare const EmptyState: react.NamedExoticComponent<EmptyStateProps>;

/**
 * Suggestion Chips Component
 *
 * Quick action buttons suggested by the AI.
 */
declare const SuggestionChips: react.NamedExoticComponent<SuggestionChipsProps>;

/**
 * Typing Indicator Component
 *
 * Animated dots shown when AI is generating a response.
 */
declare const TypingIndicator: react.NamedExoticComponent<object>;

interface QuestionFormProps {
    question: QuestionPayload;
    onSubmit: (answers: Record<string, unknown>) => void;
    onSkip?: () => void;
    isSubmitting?: boolean;
}
declare function QuestionForm({ question, onSubmit, onSkip, isSubmitting, }: QuestionFormProps): react_jsx_runtime.JSX.Element;

interface MarkdownMessageProps {
    content: string;
    style?: CSSProperties;
}
/**
 * Core markdown rendering via MarkdownProvider (no local markdown config).
 */
declare const MarkdownMessage: react.NamedExoticComponent<MarkdownMessageProps>;

interface ConversationInteractiveElementsProps {
    /** Full conversation history */
    conversation: ConversationTurn[];
    /** Whether the AI is currently streaming */
    isStreaming?: boolean;
    /** Callback when a question is answered */
    onAnswerQuestion?: (turnId: string, questionId: string, answers: Record<string, unknown>) => void;
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
declare function ConversationInteractiveElements({ conversation, isStreaming, onAnswerQuestion, onSuggestionClick, style, className, showSuggestions, showQuestions, }: ConversationInteractiveElementsProps): react_jsx_runtime.JSX.Element | null;

interface PlanStep {
    id: number;
    task: string;
    agent: string;
    parallel?: boolean;
    subtasks?: PlanStep[];
}
interface ExecutionPlan {
    goal: string;
    steps: PlanStep[];
}
interface PlanningStatusProps {
    plan: ExecutionPlan | null;
    activeStepId?: number | null;
    activeSubtaskId?: number | null;
    completedSteps: number[];
    completedSubtasks?: number[];
    parallelLevel?: number | null;
}

declare const PlanningStatus: react.NamedExoticComponent<PlanningStatusProps>;

/**
 * Props for UnifiedProgressIndicator
 */
interface UnifiedProgressIndicatorProps {
    /** Optional CSS class name */
    className?: string;
}

/**
 * Unified progress indicator component
 * Reads directly from Zustand store and shows plan + tool progress
 */
declare const UnifiedProgressIndicator: react__default.NamedExoticComponent<UnifiedProgressIndicatorProps>;

interface ActionMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenSettings?: () => void;
    onToggleCopilotMode?: () => void;
    onToggleHideMessages?: () => void;
    onClear?: () => void;
    canClear?: boolean;
    messagesMode?: "hidden" | "copilot" | "default";
    isDocumentEditorEnabled?: boolean;
    onToggleDocumentEditor?: () => void;
}
declare function ActionMenu({ isOpen, onClose, onOpenSettings, onToggleCopilotMode, onToggleHideMessages, onClear, canClear, messagesMode, isDocumentEditorEnabled, onToggleDocumentEditor, }: ActionMenuProps): react_jsx_runtime.JSX.Element;

interface ChatInputAreaProps {
    input: string;
    setInput: (value: string) => void;
    onSend: () => void;
    isStreaming?: boolean;
    placeholder?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    isFocused?: boolean;
    className?: string;
    attachments: Attachment[];
    onRemoveAttachment: (id: string) => void;
    onAttachClick: () => void;
    fileInputRef: RefObject<HTMLInputElement | null>;
    handleFileSelect: (e: react__default.ChangeEvent<HTMLInputElement>) => void;
    onFilesDrop?: (files: File[]) => void;
    isDragActive?: boolean;
    menuProps?: Omit<ActionMenuProps, "isOpen" | "onClose">;
    showDeepResearch?: boolean;
    leftSlot?: react__default.ReactNode;
}
declare function ChatInputArea({ input, setInput, onSend, isStreaming, placeholder, onFocus, onBlur, isFocused, className, attachments, onRemoveAttachment, onAttachClick, fileInputRef, handleFileSelect, onFilesDrop, isDragActive, menuProps, showDeepResearch, leftSlot, }: ChatInputAreaProps): react_jsx_runtime.JSX.Element;

interface FileAttachmentBadgeProps {
    attachment: Attachment;
    onRemove: (id: string) => void;
}
declare function FileAttachmentBadge({ attachment, onRemove, }: FileAttachmentBadgeProps): react_jsx_runtime.JSX.Element;

declare function useChatAttachments(): {
    attachments: Attachment[];
    fileInputRef: react.RefObject<HTMLInputElement | null>;
    handleFileSelect: (e: ChangeEvent<HTMLInputElement>) => void;
    addFiles: (files: FileList | File[]) => void;
    addLibraryDocument: (doc: {
        id: string;
        fileName: string;
        mimeType: string;
        pageCount?: number;
    }) => void;
    removeAttachment: (id: string) => void;
    triggerFileSelect: () => void;
    clearAttachments: () => void;
};

/**
 * Design Tokens for @onegenui/chat
 *
 * Centralized design system tokens for consistent styling.
 * Supports both light and dark themes with CSS custom properties.
 */
declare const colors: {
    readonly panelBg: "rgba(0, 0, 0, 0.4)";
    readonly panelBgLight: "rgba(255, 255, 255, 0.85)";
    readonly surface: "rgba(255, 255, 255, 0.05)";
    readonly surfaceHover: "rgba(255, 255, 255, 0.08)";
    readonly surfaceActive: "rgba(255, 255, 255, 0.12)";
    readonly border: "rgba(255, 255, 255, 0.08)";
    readonly borderHover: "rgba(255, 255, 255, 0.15)";
    readonly borderFocus: "rgba(59, 130, 246, 0.5)";
    readonly userBubble: "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(99, 102, 241, 0.9))";
    readonly assistantBubble: "rgba(255, 255, 255, 0.06)";
    readonly textPrimary: "rgba(255, 255, 255, 0.95)";
    readonly textSecondary: "rgba(255, 255, 255, 0.65)";
    readonly textMuted: "rgba(255, 255, 255, 0.45)";
    readonly primary: "var(--primary, #3b82f6)";
    readonly success: "#10b981";
    readonly warning: "#f59e0b";
    readonly danger: "#ef4444";
    readonly overlay: "rgba(0, 0, 0, 0.5)";
    readonly overlayLight: "rgba(0, 0, 0, 0.3)";
};
declare const spacing: {
    readonly xs: 4;
    readonly sm: 8;
    readonly md: 12;
    readonly lg: 16;
    readonly xl: 20;
    readonly xxl: 24;
    readonly xxxl: 32;
};
declare const radii: {
    readonly sm: 6;
    readonly md: 10;
    readonly lg: 14;
    readonly xl: 18;
    readonly xxl: 24;
    readonly full: 9999;
};
declare const typography: {
    readonly fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif";
    readonly sizes: {
        readonly xs: 11;
        readonly sm: 13;
        readonly md: 14;
        readonly lg: 16;
        readonly xl: 18;
    };
    readonly weights: {
        readonly normal: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
    };
    readonly lineHeights: {
        readonly tight: 1.2;
        readonly normal: 1.5;
        readonly relaxed: 1.7;
    };
};
declare const shadows: {
    readonly sm: "0 2px 8px rgba(0, 0, 0, 0.15)";
    readonly md: "0 4px 16px rgba(0, 0, 0, 0.2)";
    readonly lg: "0 8px 32px rgba(0, 0, 0, 0.25)";
    readonly xl: "0 12px 48px rgba(0, 0, 0, 0.3)";
    readonly glow: "0 0 20px rgba(59, 130, 246, 0.3)";
};
declare const glass: {
    readonly blur: "blur(20px)";
    readonly blurLight: "blur(12px)";
    readonly blurHeavy: "blur(32px)";
};
declare const zIndex: {
    readonly base: 1;
    readonly dropdown: 10;
    readonly sticky: 20;
    readonly modal: 30;
    readonly popover: 40;
    readonly tooltip: 50;
    readonly chat: 100;
    readonly overlay: 200;
};
declare const breakpoints: {
    readonly mobile: 640;
    readonly tablet: 768;
    readonly desktop: 1024;
    readonly wide: 1280;
};
declare const panelDimensions: {
    readonly minWidth: 320;
    readonly maxWidth: 600;
    readonly defaultWidth: 400;
    readonly mobileHeight: "85vh";
    readonly headerHeight: 56;
    readonly inputHeight: 60;
};

/**
 * Animation definitions for @onegenui/chat
 *
 * Smooth, purposeful animations that enhance UX without being distracting.
 * Uses CSS keyframes and spring physics for natural motion.
 */

declare const easing: {
    readonly ease: "cubic-bezier(0.4, 0, 0.2, 1)";
    readonly easeIn: "cubic-bezier(0.4, 0, 1, 1)";
    readonly easeOut: "cubic-bezier(0, 0, 0.2, 1)";
    readonly easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)";
    readonly spring: "cubic-bezier(0.34, 1.56, 0.64, 1)";
    readonly bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    readonly smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)";
};
declare const duration: {
    readonly instant: 50;
    readonly fast: 100;
    readonly normal: 200;
    readonly slow: 300;
    readonly slower: 400;
    readonly slowest: 500;
};
declare const transitions: {
    readonly default: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)";
    readonly fast: "all 100ms cubic-bezier(0.4, 0, 0.2, 1)";
    readonly slow: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)";
    readonly opacity: "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)";
    readonly transform: "transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1)";
    readonly colors: "background-color 100ms cubic-bezier(0.4, 0, 0.2, 1), border-color 100ms cubic-bezier(0.4, 0, 0.2, 1), color 100ms cubic-bezier(0.4, 0, 0.2, 1)";
    readonly shadow: "box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)";
    readonly interactive: "transform 100ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 100ms cubic-bezier(0.4, 0, 0.2, 1), background-color 100ms cubic-bezier(0.4, 0, 0.2, 1)";
};
declare const keyframes: {
    readonly fadeIn: "\n    @keyframes fadeIn {\n      from { opacity: 0; }\n      to { opacity: 1; }\n    }\n  ";
    readonly fadeOut: "\n    @keyframes fadeOut {\n      from { opacity: 1; }\n      to { opacity: 0; }\n    }\n  ";
    readonly slideUp: "\n    @keyframes slideUp {\n      from { \n        opacity: 0;\n        transform: translateY(10px);\n      }\n      to { \n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n  ";
    readonly slideDown: "\n    @keyframes slideDown {\n      from { \n        opacity: 0;\n        transform: translateY(-10px);\n      }\n      to { \n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n  ";
    readonly slideInRight: "\n    @keyframes slideInRight {\n      from { \n        opacity: 0;\n        transform: translateX(20px);\n      }\n      to { \n        opacity: 1;\n        transform: translateX(0);\n      }\n    }\n  ";
    readonly slideInLeft: "\n    @keyframes slideInLeft {\n      from { \n        opacity: 0;\n        transform: translateX(-20px);\n      }\n      to { \n        opacity: 1;\n        transform: translateX(0);\n      }\n    }\n  ";
    readonly scaleIn: "\n    @keyframes scaleIn {\n      from { \n        opacity: 0;\n        transform: scale(0.95);\n      }\n      to { \n        opacity: 1;\n        transform: scale(1);\n      }\n    }\n  ";
    readonly pulse: "\n    @keyframes pulse {\n      0%, 100% { opacity: 1; }\n      50% { opacity: 0.5; }\n    }\n  ";
    readonly spin: "\n    @keyframes spin {\n      from { transform: rotate(0deg); }\n      to { transform: rotate(360deg); }\n    }\n  ";
    readonly shimmer: "\n    @keyframes shimmer {\n      0% { background-position: -200% 0; }\n      100% { background-position: 200% 0; }\n    }\n  ";
    readonly bounce: "\n    @keyframes bounce {\n      0%, 100% { transform: translateY(0); }\n      50% { transform: translateY(-5px); }\n    }\n  ";
    readonly typingDot: "\n    @keyframes typingDot {\n      0%, 60%, 100% { \n        opacity: 0.3;\n        transform: translateY(0);\n      }\n      30% { \n        opacity: 1;\n        transform: translateY(-4px);\n      }\n    }\n  ";
};
declare const animations: Record<string, CSSProperties>;

/**
 * Schema definitions for @onegenui/chat components
 *
 * These schemas define the structure and validation for chat-related data.
 */

declare const chatMessageSchema: z.ZodObject<{
    id: z.ZodString;
    role: z.ZodEnum<["user", "assistant", "system"]>;
    content: z.ZodString;
    timestamp: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    role: "system" | "user" | "assistant";
    content: string;
    timestamp?: number | undefined;
}, {
    id: string;
    role: "system" | "user" | "assistant";
    content: string;
    timestamp?: number | undefined;
}>;
type ChatMessageSchema = z.infer<typeof chatMessageSchema>;
declare const formFieldOptionSchema: z.ZodObject<{
    value: z.ZodString;
    label: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: string;
    value: string;
}, {
    label: string;
    value: string;
}>;
declare const formFieldValidationSchema: z.ZodObject<{
    required: z.ZodOptional<z.ZodBoolean>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    pattern: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    max?: number | undefined;
    min?: number | undefined;
    pattern?: string | undefined;
    required?: boolean | undefined;
    message?: string | undefined;
}, {
    max?: number | undefined;
    min?: number | undefined;
    pattern?: string | undefined;
    required?: boolean | undefined;
    message?: string | undefined;
}>;
declare const formFieldSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    type: z.ZodEnum<["text", "textarea", "number", "email", "date", "time", "datetime", "select", "radio", "checkbox", "slider"]>;
    placeholder: z.ZodOptional<z.ZodString>;
    defaultValue: z.ZodOptional<z.ZodUnknown>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        value: string;
    }, {
        label: string;
        value: string;
    }>, "many">>;
    validation: z.ZodOptional<z.ZodObject<{
        required: z.ZodOptional<z.ZodBoolean>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        pattern: z.ZodOptional<z.ZodString>;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        max?: number | undefined;
        min?: number | undefined;
        pattern?: string | undefined;
        required?: boolean | undefined;
        message?: string | undefined;
    }, {
        max?: number | undefined;
        min?: number | undefined;
        pattern?: string | undefined;
        required?: boolean | undefined;
        message?: string | undefined;
    }>>;
    allowCustom: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
    label: string;
    defaultValue?: unknown;
    placeholder?: string | undefined;
    options?: {
        label: string;
        value: string;
    }[] | undefined;
    validation?: {
        max?: number | undefined;
        min?: number | undefined;
        pattern?: string | undefined;
        required?: boolean | undefined;
        message?: string | undefined;
    } | undefined;
    allowCustom?: boolean | undefined;
}, {
    id: string;
    type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
    label: string;
    defaultValue?: unknown;
    placeholder?: string | undefined;
    options?: {
        label: string;
        value: string;
    }[] | undefined;
    validation?: {
        max?: number | undefined;
        min?: number | undefined;
        pattern?: string | undefined;
        required?: boolean | undefined;
        message?: string | undefined;
    } | undefined;
    allowCustom?: boolean | undefined;
}>;
type FormFieldSchema = z.infer<typeof formFieldSchema>;
declare const quickReplyOptionSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    value: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    primary: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    label: string;
    value?: string | undefined;
    icon?: string | undefined;
    primary?: boolean | undefined;
}, {
    id: string;
    label: string;
    value?: string | undefined;
    icon?: string | undefined;
    primary?: boolean | undefined;
}>;
declare const questionPayloadSchema: z.ZodObject<{
    id: z.ZodString;
    text: z.ZodString;
    type: z.ZodEnum<["text", "form", "quick-reply"]>;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<["text", "textarea", "number", "email", "date", "time", "datetime", "select", "radio", "checkbox", "slider"]>;
        placeholder: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodUnknown>;
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }>, "many">>;
        validation: z.ZodOptional<z.ZodObject<{
            required: z.ZodOptional<z.ZodBoolean>;
            min: z.ZodOptional<z.ZodNumber>;
            max: z.ZodOptional<z.ZodNumber>;
            pattern: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            max?: number | undefined;
            min?: number | undefined;
            pattern?: string | undefined;
            required?: boolean | undefined;
            message?: string | undefined;
        }, {
            max?: number | undefined;
            min?: number | undefined;
            pattern?: string | undefined;
            required?: boolean | undefined;
            message?: string | undefined;
        }>>;
        allowCustom: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
        label: string;
        defaultValue?: unknown;
        placeholder?: string | undefined;
        options?: {
            label: string;
            value: string;
        }[] | undefined;
        validation?: {
            max?: number | undefined;
            min?: number | undefined;
            pattern?: string | undefined;
            required?: boolean | undefined;
            message?: string | undefined;
        } | undefined;
        allowCustom?: boolean | undefined;
    }, {
        id: string;
        type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
        label: string;
        defaultValue?: unknown;
        placeholder?: string | undefined;
        options?: {
            label: string;
            value: string;
        }[] | undefined;
        validation?: {
            max?: number | undefined;
            min?: number | undefined;
            pattern?: string | undefined;
            required?: boolean | undefined;
            message?: string | undefined;
        } | undefined;
        allowCustom?: boolean | undefined;
    }>, "many">>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        value: z.ZodOptional<z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        primary: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        value?: string | undefined;
        icon?: string | undefined;
        primary?: boolean | undefined;
    }, {
        id: string;
        label: string;
        value?: string | undefined;
        icon?: string | undefined;
        primary?: boolean | undefined;
    }>, "many">>;
    multiple: z.ZodOptional<z.ZodBoolean>;
    allowCustom: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "form" | "text" | "quick-reply";
    text: string;
    multiple?: boolean | undefined;
    required?: boolean | undefined;
    options?: {
        id: string;
        label: string;
        value?: string | undefined;
        icon?: string | undefined;
        primary?: boolean | undefined;
    }[] | undefined;
    allowCustom?: boolean | undefined;
    fields?: {
        id: string;
        type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
        label: string;
        defaultValue?: unknown;
        placeholder?: string | undefined;
        options?: {
            label: string;
            value: string;
        }[] | undefined;
        validation?: {
            max?: number | undefined;
            min?: number | undefined;
            pattern?: string | undefined;
            required?: boolean | undefined;
            message?: string | undefined;
        } | undefined;
        allowCustom?: boolean | undefined;
    }[] | undefined;
}, {
    id: string;
    type: "form" | "text" | "quick-reply";
    text: string;
    multiple?: boolean | undefined;
    required?: boolean | undefined;
    options?: {
        id: string;
        label: string;
        value?: string | undefined;
        icon?: string | undefined;
        primary?: boolean | undefined;
    }[] | undefined;
    allowCustom?: boolean | undefined;
    fields?: {
        id: string;
        type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
        label: string;
        defaultValue?: unknown;
        placeholder?: string | undefined;
        options?: {
            label: string;
            value: string;
        }[] | undefined;
        validation?: {
            max?: number | undefined;
            min?: number | undefined;
            pattern?: string | undefined;
            required?: boolean | undefined;
            message?: string | undefined;
        } | undefined;
        allowCustom?: boolean | undefined;
    }[] | undefined;
}>;
type QuestionPayloadSchema = z.infer<typeof questionPayloadSchema>;
declare const suggestionChipSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    action: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    primary: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    label: string;
    icon?: string | undefined;
    primary?: boolean | undefined;
    action?: string | undefined;
}, {
    id: string;
    label: string;
    icon?: string | undefined;
    primary?: boolean | undefined;
    action?: string | undefined;
}>;
type SuggestionChipSchema = z.infer<typeof suggestionChipSchema>;
declare const conversationTurnSchema: z.ZodObject<{
    id: z.ZodString;
    userMessage: z.ZodOptional<z.ZodString>;
    assistantMessages: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        role: z.ZodEnum<["user", "assistant", "system"]>;
        content: z.ZodString;
        timestamp: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        role: "system" | "user" | "assistant";
        content: string;
        timestamp?: number | undefined;
    }, {
        id: string;
        role: "system" | "user" | "assistant";
        content: string;
        timestamp?: number | undefined;
    }>, "many">>;
    questions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
        type: z.ZodEnum<["text", "form", "quick-reply"]>;
        fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<["text", "textarea", "number", "email", "date", "time", "datetime", "select", "radio", "checkbox", "slider"]>;
            placeholder: z.ZodOptional<z.ZodString>;
            defaultValue: z.ZodOptional<z.ZodUnknown>;
            options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                label: string;
                value: string;
            }, {
                label: string;
                value: string;
            }>, "many">>;
            validation: z.ZodOptional<z.ZodObject<{
                required: z.ZodOptional<z.ZodBoolean>;
                min: z.ZodOptional<z.ZodNumber>;
                max: z.ZodOptional<z.ZodNumber>;
                pattern: z.ZodOptional<z.ZodString>;
                message: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                max?: number | undefined;
                min?: number | undefined;
                pattern?: string | undefined;
                required?: boolean | undefined;
                message?: string | undefined;
            }, {
                max?: number | undefined;
                min?: number | undefined;
                pattern?: string | undefined;
                required?: boolean | undefined;
                message?: string | undefined;
            }>>;
            allowCustom: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
            label: string;
            defaultValue?: unknown;
            placeholder?: string | undefined;
            options?: {
                label: string;
                value: string;
            }[] | undefined;
            validation?: {
                max?: number | undefined;
                min?: number | undefined;
                pattern?: string | undefined;
                required?: boolean | undefined;
                message?: string | undefined;
            } | undefined;
            allowCustom?: boolean | undefined;
        }, {
            id: string;
            type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
            label: string;
            defaultValue?: unknown;
            placeholder?: string | undefined;
            options?: {
                label: string;
                value: string;
            }[] | undefined;
            validation?: {
                max?: number | undefined;
                min?: number | undefined;
                pattern?: string | undefined;
                required?: boolean | undefined;
                message?: string | undefined;
            } | undefined;
            allowCustom?: boolean | undefined;
        }>, "many">>;
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            value: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            primary: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            label: string;
            value?: string | undefined;
            icon?: string | undefined;
            primary?: boolean | undefined;
        }, {
            id: string;
            label: string;
            value?: string | undefined;
            icon?: string | undefined;
            primary?: boolean | undefined;
        }>, "many">>;
        multiple: z.ZodOptional<z.ZodBoolean>;
        allowCustom: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "form" | "text" | "quick-reply";
        text: string;
        multiple?: boolean | undefined;
        required?: boolean | undefined;
        options?: {
            id: string;
            label: string;
            value?: string | undefined;
            icon?: string | undefined;
            primary?: boolean | undefined;
        }[] | undefined;
        allowCustom?: boolean | undefined;
        fields?: {
            id: string;
            type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
            label: string;
            defaultValue?: unknown;
            placeholder?: string | undefined;
            options?: {
                label: string;
                value: string;
            }[] | undefined;
            validation?: {
                max?: number | undefined;
                min?: number | undefined;
                pattern?: string | undefined;
                required?: boolean | undefined;
                message?: string | undefined;
            } | undefined;
            allowCustom?: boolean | undefined;
        }[] | undefined;
    }, {
        id: string;
        type: "form" | "text" | "quick-reply";
        text: string;
        multiple?: boolean | undefined;
        required?: boolean | undefined;
        options?: {
            id: string;
            label: string;
            value?: string | undefined;
            icon?: string | undefined;
            primary?: boolean | undefined;
        }[] | undefined;
        allowCustom?: boolean | undefined;
        fields?: {
            id: string;
            type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
            label: string;
            defaultValue?: unknown;
            placeholder?: string | undefined;
            options?: {
                label: string;
                value: string;
            }[] | undefined;
            validation?: {
                max?: number | undefined;
                min?: number | undefined;
                pattern?: string | undefined;
                required?: boolean | undefined;
                message?: string | undefined;
            } | undefined;
            allowCustom?: boolean | undefined;
        }[] | undefined;
    }>, "many">>;
    questionAnswers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        action: z.ZodOptional<z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        primary: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        icon?: string | undefined;
        primary?: boolean | undefined;
        action?: string | undefined;
    }, {
        id: string;
        label: string;
        icon?: string | undefined;
        primary?: boolean | undefined;
        action?: string | undefined;
    }>, "many">>;
    isProactive: z.ZodOptional<z.ZodBoolean>;
    timestamp: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    suggestions?: {
        id: string;
        label: string;
        icon?: string | undefined;
        primary?: boolean | undefined;
        action?: string | undefined;
    }[] | undefined;
    timestamp?: number | undefined;
    userMessage?: string | undefined;
    assistantMessages?: {
        id: string;
        role: "system" | "user" | "assistant";
        content: string;
        timestamp?: number | undefined;
    }[] | undefined;
    questions?: {
        id: string;
        type: "form" | "text" | "quick-reply";
        text: string;
        multiple?: boolean | undefined;
        required?: boolean | undefined;
        options?: {
            id: string;
            label: string;
            value?: string | undefined;
            icon?: string | undefined;
            primary?: boolean | undefined;
        }[] | undefined;
        allowCustom?: boolean | undefined;
        fields?: {
            id: string;
            type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
            label: string;
            defaultValue?: unknown;
            placeholder?: string | undefined;
            options?: {
                label: string;
                value: string;
            }[] | undefined;
            validation?: {
                max?: number | undefined;
                min?: number | undefined;
                pattern?: string | undefined;
                required?: boolean | undefined;
                message?: string | undefined;
            } | undefined;
            allowCustom?: boolean | undefined;
        }[] | undefined;
    }[] | undefined;
    questionAnswers?: Record<string, unknown> | undefined;
    isProactive?: boolean | undefined;
}, {
    id: string;
    suggestions?: {
        id: string;
        label: string;
        icon?: string | undefined;
        primary?: boolean | undefined;
        action?: string | undefined;
    }[] | undefined;
    timestamp?: number | undefined;
    userMessage?: string | undefined;
    assistantMessages?: {
        id: string;
        role: "system" | "user" | "assistant";
        content: string;
        timestamp?: number | undefined;
    }[] | undefined;
    questions?: {
        id: string;
        type: "form" | "text" | "quick-reply";
        text: string;
        multiple?: boolean | undefined;
        required?: boolean | undefined;
        options?: {
            id: string;
            label: string;
            value?: string | undefined;
            icon?: string | undefined;
            primary?: boolean | undefined;
        }[] | undefined;
        allowCustom?: boolean | undefined;
        fields?: {
            id: string;
            type: "number" | "select" | "textarea" | "time" | "text" | "checkbox" | "radio" | "date" | "email" | "datetime" | "slider";
            label: string;
            defaultValue?: unknown;
            placeholder?: string | undefined;
            options?: {
                label: string;
                value: string;
            }[] | undefined;
            validation?: {
                max?: number | undefined;
                min?: number | undefined;
                pattern?: string | undefined;
                required?: boolean | undefined;
                message?: string | undefined;
            } | undefined;
            allowCustom?: boolean | undefined;
        }[] | undefined;
    }[] | undefined;
    questionAnswers?: Record<string, unknown> | undefined;
    isProactive?: boolean | undefined;
}>;
type ConversationTurnSchema = z.infer<typeof conversationTurnSchema>;

export { ActionMenu, type ActionMenuProps, type Attachment, ChatHeader, type ChatHeaderProps, ChatInput, ChatInputArea, type ChatInputAreaProps, type ChatInputProps, type ChatMessage, type ChatMessageSchema, ChatPanel, type ChatPanelProps, ConversationInteractiveElements, type ConversationInteractiveElementsProps, type ConversationListProps, type ConversationTurnSchema, type EditModeInputProps, EmptyState, type EmptyStateProps, type FileAttachment, FileAttachmentBadge, type FileAttachmentBadgeProps, type FormFieldSchema, type LibraryAttachment, MarkdownMessage, type MessageBubbleProps, PlanningStatus, type PlanningStatusProps, QuestionForm, type QuestionFormProps$1 as QuestionFormProps, type QuestionPayloadSchema, type SelectedElement, type SuggestionChipSchema, SuggestionChips, type SuggestionChipsProps, TypingIndicator, UnifiedProgressIndicator, type UnifiedProgressIndicatorProps, animations, breakpoints, chatMessageSchema, colors, conversationTurnSchema, duration, easing, formFieldOptionSchema, formFieldSchema, formFieldValidationSchema, glass, isFileAttachment, isLibraryAttachment, keyframes, panelDimensions, questionPayloadSchema, quickReplyOptionSchema, radii, shadows, spacing, suggestionChipSchema, transitions, typography, useChatAttachments, zIndex };
