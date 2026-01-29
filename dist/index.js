"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ActionMenu: () => ActionMenu,
  ChatHeader: () => ChatHeader,
  ChatInput: () => ChatInput,
  ChatInputArea: () => ChatInputArea,
  ChatPanel: () => ChatPanel,
  ConversationInteractiveElements: () => ConversationInteractiveElements,
  EmptyState: () => EmptyState,
  FileAttachmentBadge: () => FileAttachmentBadge,
  MarkdownMessage: () => MarkdownMessage,
  PlanningStatus: () => PlanningStatus,
  QuestionForm: () => QuestionForm,
  SuggestionChips: () => SuggestionChips,
  TypingIndicator: () => TypingIndicator,
  UnifiedProgressIndicator: () => UnifiedProgressIndicator,
  animations: () => animations,
  breakpoints: () => breakpoints,
  chatMessageSchema: () => chatMessageSchema,
  colors: () => colors,
  conversationTurnSchema: () => conversationTurnSchema,
  duration: () => duration,
  easing: () => easing,
  formFieldOptionSchema: () => formFieldOptionSchema,
  formFieldSchema: () => formFieldSchema,
  formFieldValidationSchema: () => formFieldValidationSchema,
  glass: () => glass,
  isFileAttachment: () => isFileAttachment,
  isLibraryAttachment: () => isLibraryAttachment,
  keyframes: () => keyframes,
  panelDimensions: () => panelDimensions,
  questionPayloadSchema: () => questionPayloadSchema,
  quickReplyOptionSchema: () => quickReplyOptionSchema,
  radii: () => radii,
  shadows: () => shadows,
  spacing: () => spacing,
  suggestionChipSchema: () => suggestionChipSchema,
  transitions: () => transitions,
  typography: () => typography,
  useChatAttachments: () => useChatAttachments,
  zIndex: () => zIndex
});
module.exports = __toCommonJS(index_exports);

// src/components/ChatPanel.tsx
var import_react12 = require("react");

// src/components/ChatHeader.tsx
var import_react = require("react");
var import_lucide_react = require("lucide-react");

// src/utils/cn.ts
var import_utils = require("@onegenui/utils");

// src/components/ChatHeader.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ChatHeader = (0, import_react.memo)(function ChatHeader2({
  title = "AI Assistant",
  isStreaming = false,
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false,
  onOpenSettings,
  onClose,
  showClose = false
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: "flex items-center justify-between px-6 py-4 min-h-[60px] border-b border-border bg-black/5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2 text-base font-semibold text-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Bot, { size: 20 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title }),
      isStreaming && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/15 text-primary border border-blue-500/25", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-current animate-pulse" }),
        "Thinking..."
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-1", children: [
      onUndo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          onClick: onUndo,
          disabled: !canUndo,
          className: (0, import_utils.cn)(
            "flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
            !canUndo && "opacity-40 cursor-not-allowed pointer-events-none"
          ),
          title: "Undo (Ctrl+Z)",
          "aria-label": "Undo",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Undo2, { size: 16 })
        }
      ),
      onRedo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          onClick: onRedo,
          disabled: !canRedo,
          className: (0, import_utils.cn)(
            "flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
            !canRedo && "opacity-40 cursor-not-allowed pointer-events-none"
          ),
          title: "Redo (Ctrl+Shift+Z)",
          "aria-label": "Redo",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Redo2, { size: 16 })
        }
      ),
      onOpenSettings && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          onClick: onOpenSettings,
          className: "flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
          title: "Settings",
          "aria-label": "Open settings",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Settings, { size: 16 })
        }
      ),
      showClose && onClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          onClick: onClose,
          className: "flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
          title: "Close",
          "aria-label": "Close chat",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { size: 16 })
        }
      )
    ] })
  ] });
});

// src/components/ChatInput.tsx
var import_react4 = require("react");
var import_lucide_react3 = require("lucide-react");

// src/components/DeepResearch/DeepResearchToggle.tsx
var import_react2 = require("react");
var import_framer_motion = require("framer-motion");
var import_lucide_react2 = require("lucide-react");
var import_react3 = require("@onegenui/react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var EFFORT_CONFIG = {
  standard: {
    icon: import_lucide_react2.Search,
    label: "Standard",
    time: "~3 min",
    color: "text-blue-500"
  },
  deep: {
    icon: import_lucide_react2.Zap,
    label: "Deep",
    time: "~10 min",
    color: "text-amber-500"
  },
  max: {
    icon: import_lucide_react2.Sparkles,
    label: "Max",
    time: "~30 min",
    color: "text-purple-500"
  }
};
var DeepResearchToggle = (0, import_react2.memo)(function DeepResearchToggle2({
  className,
  compact = true
}) {
  const [showOptions, setShowOptions] = (0, import_react2.useState)(false);
  const enabled = (0, import_react3.useStore)((s) => s.deepResearchSettings.enabled);
  const effortLevel = (0, import_react3.useStore)((s) => s.deepResearchSettings.effortLevel);
  const setEnabled = (0, import_react3.useStore)((s) => s.setDeepResearchEnabled);
  const setEffortLevel = (0, import_react3.useStore)((s) => s.setDeepResearchEffortLevel);
  const config = EFFORT_CONFIG[effortLevel];
  const Icon = config.icon;
  const handleToggle = (0, import_react2.useCallback)(() => {
    if (!enabled) {
      setEnabled(true);
    } else {
      setShowOptions((prev) => !prev);
    }
  }, [enabled, setEnabled]);
  const handleDisable = (0, import_react2.useCallback)(
    (e) => {
      e.stopPropagation();
      setEnabled(false);
      setShowOptions(false);
    },
    [setEnabled]
  );
  const handleSelectLevel = (0, import_react2.useCallback)(
    (level) => {
      setEffortLevel(level);
      setShowOptions(false);
    },
    [setEffortLevel]
  );
  if (compact) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: (0, import_utils.cn)("relative", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          type: "button",
          onClick: handleToggle,
          className: (0, import_utils.cn)(
            "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all",
            enabled ? "bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
          ),
          title: enabled ? `Deep Research: ${config.label}` : "Enable Deep Research",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { size: 14, className: enabled ? config.color : "" }),
            enabled && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "hidden sm:inline", children: config.label }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                import_lucide_react2.ChevronUp,
                {
                  size: 12,
                  className: (0, import_utils.cn)(
                    "transition-transform",
                    showOptions ? "rotate-180" : ""
                  )
                }
              )
            ] }),
            !enabled && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "hidden sm:inline", children: "Research" })
          ]
        }
      ),
      enabled && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          onClick: handleDisable,
          className: "absolute -top-1 -right-1 w-4 h-4 rounded-full bg-muted-foreground/20 hover:bg-destructive/20 hover:text-destructive flex items-center justify-center transition-colors",
          title: "Disable Deep Research",
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.X, { size: 10 })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_framer_motion.AnimatePresence, { children: showOptions && enabled && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_framer_motion.motion.div,
        {
          initial: { opacity: 0, y: 8, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 8, scale: 0.95 },
          transition: { duration: 0.15 },
          className: "absolute bottom-full left-0 mb-2 p-1.5 bg-popover border border-border rounded-lg shadow-lg z-50 min-w-[140px]",
          children: Object.keys(EFFORT_CONFIG).map(
            (level) => {
              const levelConfig = EFFORT_CONFIG[level];
              const LevelIcon = levelConfig.icon;
              const isSelected = level === effortLevel;
              return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "button",
                {
                  type: "button",
                  onClick: () => handleSelectLevel(level),
                  className: (0, import_utils.cn)(
                    "flex items-center gap-2 w-full px-2.5 py-2 rounded-md text-xs transition-colors",
                    isSelected ? "bg-primary/15 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LevelIcon, { size: 14, className: levelConfig.color }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "flex-1 text-left font-medium", children: levelConfig.label }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-[10px] opacity-60", children: levelConfig.time })
                  ]
                },
                level
              );
            }
          )
        }
      ) }),
      showOptions && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "div",
        {
          className: "fixed inset-0 z-40",
          onClick: () => setShowOptions(false)
        }
      )
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "flex items-center gap-2 p-2 rounded-lg border",
        enabled ? "border-primary/30 bg-primary/5" : "border-border bg-muted/30",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setEnabled(!enabled),
            className: (0, import_utils.cn)(
              "w-8 h-4 rounded-full transition-colors relative",
              enabled ? "bg-primary" : "bg-muted-foreground/30"
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_framer_motion.motion.span,
              {
                className: "absolute top-0.5 w-3 h-3 rounded-full bg-white shadow",
                animate: { left: enabled ? 16 : 2 },
                transition: { type: "spring", stiffness: 500, damping: 30 }
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center gap-1.5 flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_lucide_react2.Search,
            {
              size: 14,
              className: enabled ? "text-primary" : "text-muted-foreground"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "span",
            {
              className: (0, import_utils.cn)(
                "text-xs font-medium",
                enabled ? "text-foreground" : "text-muted-foreground"
              ),
              children: "Deep Research"
            }
          )
        ] }),
        enabled && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex gap-1", children: Object.keys(EFFORT_CONFIG).map(
          (level) => {
            const levelConfig = EFFORT_CONFIG[level];
            const LevelIcon = levelConfig.icon;
            const isSelected = level === effortLevel;
            return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "button",
                onClick: () => setEffortLevel(level),
                className: (0, import_utils.cn)(
                  "p-1.5 rounded transition-colors",
                  isSelected ? "bg-primary/20 text-primary" : "hover:bg-muted text-muted-foreground"
                ),
                title: `${levelConfig.label} (${levelConfig.time})`,
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LevelIcon, { size: 14 })
              },
              level
            );
          }
        ) })
      ]
    }
  );
});

// src/components/ChatInput.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var ChatInput = (0, import_react4.memo)(function ChatInput2({
  value,
  onChange,
  onSubmit,
  placeholder = "Type a message...",
  disabled = false,
  isStreaming = false,
  showDeepResearch = true,
  onAttach
}) {
  const textareaRef = (0, import_react4.useRef)(null);
  const [isFocused, setIsFocused] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
    }
  }, [value]);
  const handleKeyDown = (0, import_react4.useCallback)(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (value.trim() && !disabled && !isStreaming) {
          onSubmit();
        }
      }
    },
    [value, disabled, isStreaming, onSubmit]
  );
  const handleSubmit = (0, import_react4.useCallback)(() => {
    if (value.trim() && !disabled && !isStreaming) {
      onSubmit();
    }
  }, [value, disabled, isStreaming, onSubmit]);
  const isDisabled = disabled || isStreaming;
  const canSend = value.trim().length > 0 && !isDisabled;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "border-t border-border bg-black/15", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-end gap-2 p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-1 shrink-0 self-end mb-1.5", children: [
      onAttach && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "button",
        {
          type: "button",
          onClick: onAttach,
          disabled: isDisabled,
          className: (0, import_utils.cn)(
            "flex items-center justify-center w-9 h-9 rounded-lg transition-colors",
            "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            isDisabled && "opacity-50 cursor-not-allowed"
          ),
          title: "Attach file",
          "aria-label": "Attach file",
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react3.Paperclip, { size: 18 })
        }
      ),
      showDeepResearch && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DeepResearchToggle, { compact: true })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "textarea",
      {
        ref: textareaRef,
        value,
        onChange: (e) => onChange(e.target.value),
        onKeyDown: handleKeyDown,
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false),
        placeholder,
        disabled: isDisabled,
        rows: 1,
        className: (0, import_utils.cn)(
          "flex-1 min-h-[44px] max-h-[160px] p-3 border border-border rounded-xl bg-card text-foreground text-base resize-none outline-none transition-colors",
          "placeholder:text-muted-foreground",
          isFocused ? "border-ring bg-muted/50" : "",
          isDisabled ? "opacity-60 cursor-not-allowed" : ""
        ),
        "aria-label": "Message input"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "button",
      {
        type: "button",
        onClick: handleSubmit,
        disabled: !canSend,
        className: (0, import_utils.cn)(
          "flex items-center justify-center w-11 h-11 p-0 border-none rounded-lg bg-primary text-white transition-all shrink-0 cursor-pointer hover:bg-primary/90 self-end",
          !canSend && "bg-muted text-muted-foreground cursor-not-allowed hover:bg-muted"
        ),
        title: "Send message",
        "aria-label": "Send message",
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react3.SendHorizontal, { size: 20 })
      }
    )
  ] }) });
});

// src/components/EmptyState.tsx
var import_react5 = require("react");
var import_lucide_react4 = require("lucide-react");

// src/styles/tokens.ts
var colors = {
  // Panel backgrounds
  panelBg: "rgba(0, 0, 0, 0.4)",
  panelBgLight: "rgba(255, 255, 255, 0.85)",
  // Surfaces
  surface: "rgba(255, 255, 255, 0.05)",
  surfaceHover: "rgba(255, 255, 255, 0.08)",
  surfaceActive: "rgba(255, 255, 255, 0.12)",
  // Borders
  border: "rgba(255, 255, 255, 0.08)",
  borderHover: "rgba(255, 255, 255, 0.15)",
  borderFocus: "rgba(59, 130, 246, 0.5)",
  // Message bubbles
  userBubble: "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(99, 102, 241, 0.9))",
  assistantBubble: "rgba(255, 255, 255, 0.06)",
  // Text
  textPrimary: "rgba(255, 255, 255, 0.95)",
  textSecondary: "rgba(255, 255, 255, 0.65)",
  textMuted: "rgba(255, 255, 255, 0.45)",
  // Accents
  primary: "var(--primary, #3b82f6)",
  success: "#10b981",
  warning: "#f59e0b",
  danger: "#ef4444",
  // Overlays
  overlay: "rgba(0, 0, 0, 0.5)",
  overlayLight: "rgba(0, 0, 0, 0.3)"
};
var spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32
};
var radii = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  xxl: 24,
  full: 9999
};
var typography = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  sizes: {
    xs: 11,
    sm: 13,
    md: 14,
    lg: 16,
    xl: 18
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7
  }
};
var shadows = {
  sm: "0 2px 8px rgba(0, 0, 0, 0.15)",
  md: "0 4px 16px rgba(0, 0, 0, 0.2)",
  lg: "0 8px 32px rgba(0, 0, 0, 0.25)",
  xl: "0 12px 48px rgba(0, 0, 0, 0.3)",
  glow: "0 0 20px rgba(59, 130, 246, 0.3)"
};
var glass = {
  blur: "blur(20px)",
  blurLight: "blur(12px)",
  blurHeavy: "blur(32px)"
};
var zIndex = {
  base: 1,
  dropdown: 10,
  sticky: 20,
  modal: 30,
  popover: 40,
  tooltip: 50,
  chat: 100,
  overlay: 200
};
var breakpoints = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280
};
var panelDimensions = {
  minWidth: 320,
  maxWidth: 600,
  defaultWidth: 400,
  mobileHeight: "85vh",
  headerHeight: 56,
  inputHeight: 60
};

// src/styles/animations.ts
var easing = {
  // Standard easing
  ease: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Spring-like
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  // Smooth
  smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)"
};
var duration = {
  instant: 50,
  fast: 100,
  normal: 200,
  slow: 300,
  slower: 400,
  slowest: 500
};
var transitions = {
  // Common transitions
  default: `all ${duration.normal}ms ${easing.ease}`,
  fast: `all ${duration.fast}ms ${easing.ease}`,
  slow: `all ${duration.slow}ms ${easing.ease}`,
  // Specific properties
  opacity: `opacity ${duration.normal}ms ${easing.ease}`,
  transform: `transform ${duration.normal}ms ${easing.spring}`,
  colors: `background-color ${duration.fast}ms ${easing.ease}, border-color ${duration.fast}ms ${easing.ease}, color ${duration.fast}ms ${easing.ease}`,
  shadow: `box-shadow ${duration.normal}ms ${easing.ease}`,
  // Combined
  interactive: `transform ${duration.fast}ms ${easing.spring}, opacity ${duration.fast}ms ${easing.ease}, background-color ${duration.fast}ms ${easing.ease}`
};
var keyframes = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  fadeOut: `
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `,
  slideUp: `
    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(10px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  slideDown: `
    @keyframes slideDown {
      from { 
        opacity: 0;
        transform: translateY(-10px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  slideInRight: `
    @keyframes slideInRight {
      from { 
        opacity: 0;
        transform: translateX(20px);
      }
      to { 
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
  slideInLeft: `
    @keyframes slideInLeft {
      from { 
        opacity: 0;
        transform: translateX(-20px);
      }
      to { 
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
  scaleIn: `
    @keyframes scaleIn {
      from { 
        opacity: 0;
        transform: scale(0.95);
      }
      to { 
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
  pulse: `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `,
  spin: `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `,
  shimmer: `
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `,
  bounce: `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
  `,
  typingDot: `
    @keyframes typingDot {
      0%, 60%, 100% { 
        opacity: 0.3;
        transform: translateY(0);
      }
      30% { 
        opacity: 1;
        transform: translateY(-4px);
      }
    }
  `
};
var animations = {
  fadeIn: {
    animation: `fadeIn ${duration.normal}ms ${easing.ease} forwards`
  },
  fadeOut: {
    animation: `fadeOut ${duration.fast}ms ${easing.ease} forwards`
  },
  slideUp: {
    animation: `slideUp ${duration.slow}ms ${easing.spring} forwards`
  },
  slideDown: {
    animation: `slideDown ${duration.slow}ms ${easing.spring} forwards`
  },
  slideInRight: {
    animation: `slideInRight ${duration.slow}ms ${easing.spring} forwards`
  },
  slideInLeft: {
    animation: `slideInLeft ${duration.slow}ms ${easing.spring} forwards`
  },
  scaleIn: {
    animation: `scaleIn ${duration.normal}ms ${easing.spring} forwards`
  },
  pulse: {
    animation: `pulse 2s ${easing.ease} infinite`
  },
  spin: {
    animation: `spin 1s linear infinite`
  },
  shimmer: {
    animation: `shimmer 2s linear infinite`,
    backgroundSize: "200% 100%"
  }
};

// src/styles/components.ts
var chatPanelStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    background: colors.panelBg,
    backdropFilter: glass.blur,
    WebkitBackdropFilter: glass.blur,
    borderLeft: `1px solid ${colors.border}`,
    overflow: "hidden"
  },
  containerMobile: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: panelDimensions.mobileHeight,
    borderRadius: `${radii.xxl}px ${radii.xxl}px 0 0`,
    borderLeft: "none",
    borderTop: `1px solid ${colors.border}`,
    boxShadow: shadows.xl
  }
};
var headerStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${spacing.md}px ${spacing.lg}px`,
    minHeight: panelDimensions.headerHeight,
    borderBottom: `1px solid ${colors.border}`,
    background: "rgba(0, 0, 0, 0.2)"
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    color: colors.textPrimary
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    padding: "4px 10px",
    borderRadius: radii.full,
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.medium,
    background: "rgba(59, 130, 246, 0.15)",
    color: colors.primary,
    border: "1px solid rgba(59, 130, 246, 0.25)"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xs
  }
};
var iconButtonStyles = {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    padding: 0,
    border: "none",
    borderRadius: radii.md,
    background: "transparent",
    color: colors.textSecondary,
    cursor: "pointer",
    transition: transitions.interactive
  },
  hover: {
    background: colors.surfaceHover,
    color: colors.textPrimary
  },
  active: {
    background: colors.surfaceActive,
    transform: "scale(0.95)"
  },
  disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    pointerEvents: "none"
  }
};
var messageStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
    padding: spacing.lg,
    overflowY: "auto",
    flex: 1
  },
  userBubble: {
    alignSelf: "flex-end",
    maxWidth: "85%",
    padding: `${spacing.md}px ${spacing.lg}px`,
    borderRadius: `${radii.xl}px ${radii.xl}px ${radii.sm}px ${radii.xl}px`,
    background: colors.userBubble,
    color: "white",
    fontSize: typography.sizes.md,
    lineHeight: typography.lineHeights.normal,
    boxShadow: shadows.md
  },
  assistantBubble: {
    alignSelf: "flex-start",
    maxWidth: "90%",
    padding: `${spacing.md}px ${spacing.lg}px`,
    borderRadius: `${radii.xl}px ${radii.xl}px ${radii.xl}px ${radii.sm}px`,
    background: colors.assistantBubble,
    color: colors.textPrimary,
    fontSize: typography.sizes.md,
    lineHeight: typography.lineHeights.relaxed,
    border: `1px solid ${colors.border}`
  },
  timestamp: {
    fontSize: typography.sizes.xs,
    color: colors.textMuted,
    marginTop: spacing.xs
  }
};
var inputStyles = {
  container: {
    display: "flex",
    alignItems: "flex-end",
    gap: spacing.sm,
    padding: spacing.lg,
    borderTop: `1px solid ${colors.border}`,
    background: "rgba(0, 0, 0, 0.15)"
  },
  textArea: {
    flex: 1,
    minHeight: 44,
    maxHeight: 160,
    padding: `${spacing.md}px ${spacing.lg}px`,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.xl,
    background: colors.surface,
    color: colors.textPrimary,
    fontSize: typography.sizes.md,
    fontFamily: typography.fontFamily,
    lineHeight: typography.lineHeights.normal,
    resize: "none",
    outline: "none",
    transition: transitions.colors
  },
  textAreaFocus: {
    borderColor: colors.borderFocus,
    background: colors.surfaceHover
  },
  sendButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    padding: 0,
    border: "none",
    borderRadius: radii.lg,
    background: colors.primary,
    color: "white",
    cursor: "pointer",
    transition: transitions.interactive,
    flexShrink: 0
  },
  sendButtonDisabled: {
    background: colors.surface,
    color: colors.textMuted,
    cursor: "not-allowed"
  }
};
var emptyStateStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: spacing.xxxl,
    textAlign: "center"
  },
  icon: {
    width: 64,
    height: 64,
    marginBottom: spacing.lg,
    padding: spacing.lg,
    borderRadius: radii.xxl,
    background: "rgba(59, 130, 246, 0.1)",
    color: colors.primary
  },
  title: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.sm
  },
  description: {
    fontSize: typography.sizes.md,
    color: colors.textSecondary,
    maxWidth: 280,
    lineHeight: typography.lineHeights.relaxed
  }
};
var questionFormStyles = {
  container: {
    padding: spacing.lg,
    borderRadius: radii.xl,
    background: "rgba(59, 130, 246, 0.08)",
    border: `1px solid rgba(59, 130, 246, 0.2)`,
    marginTop: spacing.sm
  },
  title: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
    color: colors.textPrimary,
    marginBottom: spacing.md
  },
  field: {
    marginBottom: spacing.md
  },
  label: {
    display: "block",
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.textSecondary,
    marginBottom: spacing.xs
  },
  input: {
    width: "100%",
    padding: `${spacing.sm}px ${spacing.md}px`,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.md,
    background: colors.surface,
    color: colors.textPrimary,
    fontSize: typography.sizes.md,
    outline: "none",
    transition: transitions.colors
  },
  submitButton: {
    width: "100%",
    padding: `${spacing.md}px`,
    border: "none",
    borderRadius: radii.lg,
    background: colors.primary,
    color: "white",
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
    cursor: "pointer",
    transition: transitions.interactive
  }
};
var suggestionChipStyles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: spacing.sm,
    padding: `${spacing.md}px ${spacing.lg}px`
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.xs,
    padding: `${spacing.sm}px ${spacing.md}px`,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.full,
    background: colors.surface,
    color: colors.textSecondary,
    fontSize: typography.sizes.sm,
    cursor: "pointer",
    transition: transitions.interactive
  },
  chipHover: {
    background: colors.surfaceHover,
    borderColor: colors.borderHover,
    color: colors.textPrimary
  },
  chipPrimary: {
    background: "rgba(59, 130, 246, 0.15)",
    borderColor: "rgba(59, 130, 246, 0.3)",
    color: colors.primary
  }
};
var swipeHandleStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: `${spacing.sm}px 0`
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: radii.full,
    background: colors.border
  }
};
var typingIndicatorStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: `${spacing.md}px ${spacing.lg}px`
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: colors.textMuted,
    animation: "typingDot 1.4s ease-in-out infinite"
  }
};

// src/components/EmptyState.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var EmptyState = (0, import_react5.memo)(function EmptyState2({
  title = "Start a conversation",
  description = "Ask me anything about your dashboard. I can help you create, modify, and analyze components.",
  icon
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: emptyStateStyles.container, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: emptyStateStyles.icon, children: icon || /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react4.Sparkles, { size: 32 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { style: emptyStateStyles.title, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: emptyStateStyles.description, children: description })
  ] });
});

// src/components/SuggestionChips.tsx
var import_react6 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var SuggestionChips = (0, import_react6.memo)(function SuggestionChips2({
  suggestions,
  onClick,
  disabled = false
}) {
  if (!suggestions || suggestions.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: suggestionChipStyles.container, children: suggestions.map((suggestion, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "button",
    {
      type: "button",
      onClick: () => onClick(suggestion),
      disabled,
      style: {
        ...suggestionChipStyles.chip,
        transition: transitions.interactive,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer"
      },
      "aria-label": suggestion.label,
      children: suggestion.label
    },
    suggestion.id || `suggestion-${index}`
  )) });
});

// src/components/TypingIndicator.tsx
var import_react7 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var TypingIndicator = (0, import_react7.memo)(function TypingIndicator2() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex items-center gap-1 px-4 py-3", children: [0, 1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "span",
    {
      className: "w-2 h-2 rounded-full bg-white/40 animate-bounce",
      style: {
        animationDelay: `${i * 0.15}s`,
        animationDuration: "1s"
      }
    },
    i
  )) });
});

// src/components/QuestionForm/component.tsx
var import_react8 = require("react");

// src/components/QuestionForm/styles.ts
var BUTTON_BASE_CLASS = "px-3 sm:px-4 py-2 rounded-full border text-[12px] sm:text-[13px] font-medium cursor-pointer transition-all disabled:opacity-60 disabled:cursor-not-allowed";
var INPUT_CLASS = "px-3 py-2 sm:py-2.5 rounded-lg border border-white/10 bg-background text-foreground text-[13px] sm:text-sm outline-none transition-colors focus:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed w-full";
var CONTAINER_CLASS = "p-3 sm:p-4 rounded-xl bg-blue-500/5 sm:bg-blue-500/10 border border-blue-500/20 mt-2";
var QUESTION_TEXT_CLASS = "text-[13px] sm:text-sm font-medium text-foreground mb-2 sm:mb-3";
var SUBMIT_BUTTON_CLASS = "px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border-none bg-primary text-primary-foreground text-[13px] sm:text-sm font-medium cursor-pointer transition-all hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed";
function getQuickReplyButtonClass(variant = "default", isSelected) {
  const variants = {
    default: isSelected ? "bg-white/15 border-white/15 text-foreground" : "bg-white/5 border-white/15 text-foreground hover:bg-white/10",
    primary: isSelected ? "bg-blue-500/25 border-blue-500/30 text-foreground" : "bg-blue-500/10 border-blue-500/30 text-foreground hover:bg-blue-500/20",
    success: isSelected ? "bg-green-500/25 border-green-500/30 text-green-500" : "bg-green-500/10 border-green-500/30 text-green-500 hover:bg-green-500/20",
    danger: isSelected ? "bg-red-500/25 border-red-500/30 text-red-500" : "bg-red-500/10 border-red-500/30 text-red-500 hover:bg-red-500/20"
  };
  const variantClass = variants[variant] || variants.default;
  return (0, import_utils.cn)(BUTTON_BASE_CLASS, variantClass);
}

// src/components/QuestionForm/field-renderer.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function FieldRenderer({
  field,
  value,
  isSubmitting,
  isCustomSelected,
  customValue,
  onFieldChange,
  onCustomToggle,
  onCustomValueChange
}) {
  switch (field.type) {
    case "text":
    case "date":
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "input",
        {
          type: field.type,
          value: value || "",
          onChange: (e) => onFieldChange(field.id, e.target.value),
          placeholder: field.placeholder,
          className: INPUT_CLASS,
          disabled: isSubmitting,
          required: field.validation?.required,
          minLength: field.validation?.minLength,
          maxLength: field.validation?.maxLength,
          pattern: field.validation?.pattern
        }
      );
    case "number":
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "input",
        {
          type: "number",
          value: value ?? "",
          onChange: (e) => onFieldChange(field.id, e.target.valueAsNumber || ""),
          placeholder: field.placeholder,
          className: INPUT_CLASS,
          disabled: isSubmitting,
          required: field.validation?.required,
          min: field.validation?.min,
          max: field.validation?.max
        }
      );
    case "textarea":
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "textarea",
        {
          value: value || "",
          onChange: (e) => onFieldChange(field.id, e.target.value),
          placeholder: field.placeholder,
          className: (0, import_utils.cn)(INPUT_CLASS, "min-h-[80px] resize-y"),
          disabled: isSubmitting,
          required: field.validation?.required,
          minLength: field.validation?.minLength,
          maxLength: field.validation?.maxLength
        }
      );
    case "select":
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-col gap-2 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "select",
          {
            value: isCustomSelected ? "__custom__" : value || "",
            onChange: (e) => {
              const val = e.target.value;
              if (val === "__custom__" && field.allowCustom) {
                onCustomToggle(field.id, true);
              } else {
                onFieldChange(field.id, val);
              }
            },
            className: (0, import_utils.cn)(INPUT_CLASS, "cursor-pointer"),
            disabled: isSubmitting,
            required: field.validation?.required && !isCustomSelected,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "", children: field.placeholder || "Select an option..." }),
              field.options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: opt.value, children: opt.label }, opt.value)),
              field.allowCustom && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "__custom__", children: "Other..." })
            ]
          }
        ),
        isCustomSelected && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "input",
          {
            type: "text",
            value: customValue || "",
            onChange: (e) => onCustomValueChange(field.id, e.target.value),
            placeholder: "Type your answer...",
            className: INPUT_CLASS,
            disabled: isSubmitting,
            autoFocus: true,
            required: field.validation?.required
          }
        )
      ] });
    case "checkbox":
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: "flex items-center gap-2 cursor-pointer w-fit select-none", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "input",
          {
            type: "checkbox",
            checked: Boolean(value),
            onChange: (e) => onFieldChange(field.id, e.target.checked),
            disabled: isSubmitting,
            className: "w-4 h-4 cursor-pointer accent-primary form-checkbox rounded"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-sm text-foreground", children: field.label })
      ] });
    case "radio":
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-col gap-1.5", children: [
        field.options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "label",
          {
            className: "flex items-center gap-2 cursor-pointer text-sm text-foreground select-none w-fit",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "input",
                {
                  type: "radio",
                  name: field.id,
                  value: opt.value,
                  checked: value === opt.value && !isCustomSelected,
                  onChange: (e) => onFieldChange(field.id, e.target.value),
                  disabled: isSubmitting,
                  className: "w-4 h-4 accent-primary form-radio"
                }
              ),
              opt.label
            ]
          },
          opt.value
        )),
        field.allowCustom && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: "flex items-center gap-2 cursor-pointer text-sm text-foreground select-none w-fit", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "input",
              {
                type: "radio",
                name: field.id,
                value: "__custom__",
                checked: isCustomSelected,
                onChange: () => onCustomToggle(field.id, true),
                disabled: isSubmitting,
                className: "w-4 h-4 accent-primary form-radio"
              }
            ),
            "Other"
          ] }),
          isCustomSelected && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "input",
            {
              type: "text",
              value: customValue || "",
              onChange: (e) => onCustomValueChange(field.id, e.target.value),
              placeholder: "Type your answer...",
              className: (0, import_utils.cn)(INPUT_CLASS, "ml-6 w-[calc(100%-1.5rem)]"),
              disabled: isSubmitting,
              autoFocus: true,
              required: field.validation?.required
            }
          )
        ] })
      ] });
    default:
      return null;
  }
}

// src/components/QuestionForm/quick-reply-form.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function QuickReplyForm({
  question,
  selectedOptions,
  isCustomMode,
  customValue,
  isSubmitting,
  onQuickReply,
  onCustomToggle,
  onCustomValueChange,
  onSubmit
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: CONTAINER_CLASS, children: [
    question.text && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: QUESTION_TEXT_CLASS, children: question.text }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-wrap gap-2", children: [
      question.options?.map((opt) => {
        const isSelected = question.multiple ? selectedOptions.includes(opt.value) : false;
        return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "button",
          {
            type: "button",
            onClick: () => onQuickReply(opt.value),
            disabled: isSubmitting,
            className: getQuickReplyButtonClass(opt.variant, isSelected),
            children: opt.label
          },
          opt.id
        );
      }),
      question.allowCustom && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          type: "button",
          onClick: () => onCustomToggle("quick-reply", true),
          disabled: isSubmitting,
          className: getQuickReplyButtonClass("default", isCustomMode),
          children: "Other..."
        }
      )
    ] }),
    isCustomMode && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mt-3 flex gap-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "input",
        {
          type: "text",
          value: customValue || "",
          onChange: (e) => onCustomValueChange("quick-reply", e.target.value),
          placeholder: "Type your answer...",
          className: (0, import_utils.cn)(INPUT_CLASS, "flex-1"),
          disabled: isSubmitting,
          autoFocus: true,
          onKeyDown: (e) => {
            if (e.key === "Enter" && customValue?.trim()) {
              onSubmit({
                selected: customValue.trim(),
                isCustom: true
              });
            }
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          type: "button",
          onClick: () => {
            if (customValue?.trim()) {
              onSubmit({
                selected: customValue.trim(),
                isCustom: true
              });
            }
          },
          disabled: isSubmitting || !customValue?.trim(),
          className: (0, import_utils.cn)(
            "px-5 py-2.5 rounded-lg border-none bg-primary text-primary-foreground text-sm font-medium cursor-pointer transition-all hover:bg-primary/90",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          ),
          children: "Send"
        }
      )
    ] }),
    question.multiple && selectedOptions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-3 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "button",
      {
        type: "button",
        onClick: () => onSubmit({ selected: selectedOptions }),
        disabled: isSubmitting,
        className: (0, import_utils.cn)(
          "px-5 py-2.5 rounded-lg border-none bg-primary text-primary-foreground text-sm font-medium cursor-pointer transition-all hover:bg-primary/90",
          isSubmitting && "opacity-60 cursor-wait"
        ),
        children: [
          "Confirm (",
          selectedOptions.length,
          ")"
        ]
      }
    ) })
  ] });
}

// src/components/QuestionForm/component.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function QuestionForm({
  question,
  onSubmit,
  onSkip,
  isSubmitting = false
}) {
  const [showCustomInput, setShowCustomInput] = (0, import_react8.useState)({});
  const [customValues, setCustomValues] = (0, import_react8.useState)({});
  const [values, setValues] = (0, import_react8.useState)(() => {
    const initial = {};
    if (question.fields) {
      for (const field of question.fields) {
        if (field.defaultValue !== void 0) {
          initial[field.id] = field.defaultValue;
        } else if (field.type === "checkbox") {
          initial[field.id] = false;
        } else {
          initial[field.id] = "";
        }
      }
    }
    if (question.type === "quick-reply" && question.multiple) {
      initial["selected"] = [];
    }
    return initial;
  });
  const handleFieldChange = (0, import_react8.useCallback)((fieldId, value) => {
    setValues((prev) => ({ ...prev, [fieldId]: value }));
    if (value !== "__custom__") {
      setShowCustomInput((prev) => ({ ...prev, [fieldId]: false }));
    }
  }, []);
  const handleCustomToggle = (0, import_react8.useCallback)((fieldId, show) => {
    setShowCustomInput((prev) => ({ ...prev, [fieldId]: show }));
    if (show) {
      setValues((prev) => ({ ...prev, [fieldId]: "__custom__" }));
    }
  }, []);
  const handleCustomValueChange = (0, import_react8.useCallback)(
    (fieldId, value) => {
      setCustomValues((prev) => ({ ...prev, [fieldId]: value }));
    },
    []
  );
  const handleSubmit = (0, import_react8.useCallback)(
    (e) => {
      e.preventDefault();
      const finalValues = { ...values };
      for (const [fieldId, isCustom] of Object.entries(showCustomInput)) {
        if (isCustom && customValues[fieldId]) {
          finalValues[fieldId] = customValues[fieldId];
        }
      }
      onSubmit(finalValues);
    },
    [onSubmit, values, showCustomInput, customValues]
  );
  const handleQuickReply = (0, import_react8.useCallback)(
    (optionValue) => {
      if (question.multiple) {
        setValues((prev) => {
          const selected = prev["selected"] || [];
          if (selected.includes(optionValue)) {
            return {
              ...prev,
              selected: selected.filter((v) => v !== optionValue)
            };
          }
          return { ...prev, selected: [...selected, optionValue] };
        });
      } else {
        onSubmit({ selected: optionValue });
      }
    },
    [question.multiple, onSubmit]
  );
  if (question.type === "text") {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: CONTAINER_CLASS, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: QUESTION_TEXT_CLASS, children: question.text }) });
  }
  if (question.type === "quick-reply") {
    const selectedOptions = question.multiple ? values["selected"] || [] : [];
    const isCustomMode = showCustomInput["quick-reply"];
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      QuickReplyForm,
      {
        question,
        selectedOptions,
        isCustomMode: isCustomMode ?? false,
        customValue: customValues["quick-reply"] || "",
        isSubmitting,
        onQuickReply: handleQuickReply,
        onCustomToggle: handleCustomToggle,
        onCustomValueChange: handleCustomValueChange,
        onSubmit
      }
    );
  }
  const hasFields = question.fields && question.fields.length > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: CONTAINER_CLASS, children: [
    question.text && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: QUESTION_TEXT_CLASS, children: question.text }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("form", { onSubmit: handleSubmit, className: "flex flex-col gap-3", children: [
      hasFields ? question.fields?.map((field) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col gap-1 w-full relative", children: [
        field.type !== "checkbox" && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "text-xs font-medium text-muted-foreground", children: [
          field.label,
          field.validation?.required && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-destructive ml-0.5", children: " *" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          FieldRenderer,
          {
            field,
            value: values[field.id],
            isSubmitting,
            isCustomSelected: showCustomInput[field.id] ?? false,
            customValue: customValues[field.id] || "",
            onFieldChange: handleFieldChange,
            onCustomToggle: handleCustomToggle,
            onCustomValueChange: handleCustomValueChange
          }
        )
      ] }, field.id)) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex flex-col gap-1 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "input",
        {
          type: "text",
          value: values["response"] || "",
          onChange: (e) => handleFieldChange("response", e.target.value),
          placeholder: "Type your response...",
          className: "px-3 py-2.5 rounded-lg border border-white/10 bg-background text-foreground text-sm outline-none transition-colors focus:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed w-full",
          disabled: isSubmitting
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-2 justify-end mt-2", children: [
        !question.required && onSkip && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "button",
          {
            type: "button",
            onClick: onSkip,
            disabled: isSubmitting,
            className: "px-5 py-2.5 rounded-lg border border-white/10 bg-transparent text-muted-foreground text-sm font-medium cursor-pointer transition-all hover:bg-white/5 disabled:opacity-60 disabled:cursor-not-allowed",
            children: "Skip"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: SUBMIT_BUTTON_CLASS,
            children: isSubmitting ? "Submitting..." : "Submit"
          }
        )
      ] })
    ] })
  ] });
}

// src/components/MarkdownMessage.tsx
var import_react9 = require("react");
var import_react10 = require("@onegenui/react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var MarkdownMessage = (0, import_react9.memo)(function MarkdownMessage2({
  content,
  style
}) {
  const renderText = (0, import_react10.useRenderText)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style, children: renderText(content) });
});

// src/components/ToolProgressIndicator.tsx
var import_react11 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var toolLabels = {
  "web-search": "Web Search",
  "web-scrape": "Reading Page",
  "search-flight": "Flight Search",
  "search-hotel": "Hotel Search",
  "deep-research": "Deep Research",
  calendar: "Calendar",
  gmail: "Email"
};
var ToolProgressIndicator = (0, import_react11.memo)(function ToolProgressIndicator2({
  toolProgress,
  className
}) {
  if (!toolProgress || toolProgress.length === 0) {
    return null;
  }
  const latestByCallId = /* @__PURE__ */ new Map();
  for (const progress of toolProgress) {
    latestByCallId.set(progress.toolCallId, progress);
  }
  const activeTools = Array.from(latestByCallId.values()).filter(
    (p) => p.status !== "complete" && p.status !== "error"
  );
  if (activeTools.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: (0, import_utils.cn)("flex flex-col gap-2 px-4 py-3", className), children: activeTools.map((progress) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ToolProgressItem, { progress }, progress.toolCallId)) });
});
var ToolProgressItem = (0, import_react11.memo)(function ToolProgressItem2({
  progress
}) {
  const label = toolLabels[progress.toolName] || progress.toolName;
  const isStarting = progress.status === "starting";
  const isProgress = progress.status === "progress";
  const isDeepResearch = progress.toolName === "deep-research";
  const progressPercent = progress.progress ?? 0;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "flex items-center gap-3 px-4 py-2.5 rounded-xl",
        "bg-white/5 border border-white/10 backdrop-blur-sm",
        "animate-in fade-in-0 slide-in-from-bottom-2 duration-300"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "div",
            {
              className: (0, import_utils.cn)(
                "w-8 h-8 rounded-lg flex items-center justify-center",
                "bg-primary/20 text-primary"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ToolIcon, { toolName: progress.toolName })
            }
          ),
          (isStarting || isProgress) && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary animate-pulse" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-sm font-medium text-foreground", children: label }),
            (isStarting || isProgress) && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "flex gap-0.5", children: [0, 1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "span",
              {
                className: "w-1 h-1 rounded-full bg-primary/60 animate-bounce",
                style: {
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: "1s"
                }
              },
              i
            )) })
          ] }),
          progress.message && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-xs text-muted-foreground truncate mt-0.5", children: progress.message }),
          isDeepResearch && isProgress && progressPercent > 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-2 h-1.5 w-full bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "div",
            {
              className: "h-full bg-primary rounded-full transition-all duration-300",
              style: { width: `${progressPercent}%` }
            }
          ) })
        ] })
      ]
    }
  );
});
var ToolIcon = (0, import_react11.memo)(function ToolIcon2({ toolName }) {
  switch (toolName) {
    case "web-search":
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "m21 21-4.3-4.3" })
          ]
        }
      );
    case "web-scrape":
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("polyline", { points: "14,2 14,8 20,8" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
          ]
        }
      );
    case "search-flight":
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" })
        }
      );
    case "search-hotel":
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M10 6h4" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M10 10h4" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M10 14h4" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M10 18h4" })
          ]
        }
      );
    case "deep-research":
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("circle", { cx: "12", cy: "12", r: "1" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" })
          ]
        }
      );
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("polygon", { points: "13,2 3,14 12,14 11,22 21,10 12,10 13,2" })
        }
      );
  }
});

// src/components/ChatPanel.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var ChatPanel = (0, import_react12.memo)(function ChatPanel2({
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
  style
}) {
  const [inputValue, setInputValue] = (0, import_react12.useState)("");
  const messagesEndRef = (0, import_react12.useRef)(null);
  const containerRef = (0, import_react12.useRef)(null);
  (0, import_react12.useEffect)(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation, isStreaming]);
  const handleSend = (0, import_react12.useCallback)(() => {
    if (inputValue.trim() && onSend) {
      onSend(inputValue.trim());
      setInputValue("");
    }
  }, [inputValue, onSend]);
  const handleSelectionSubmit = (0, import_react12.useCallback)(() => {
    if (onSelectionSubmit) {
      onSelectionSubmit();
    }
  }, [onSelectionSubmit]);
  const isInSelectionMode = !!selectedElement;
  const lastTurn = conversation[conversation.length - 1];
  const suggestions = lastTurn?.suggestions || [];
  const hasMessages = conversation.length > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      ref: containerRef,
      className: (0, import_utils.cn)(
        "flex flex-col h-full bg-background/80 backdrop-blur-3xl border-l border-border transition-all overflow-hidden",
        className
      ),
      style: {
        width: width ?? void 0,
        ...style
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          ChatHeader,
          {
            title: "AI Assistant",
            isStreaming,
            onUndo,
            onRedo,
            canUndo,
            canRedo,
            onOpenSettings,
            onClose: () => onOpenChange?.(false),
            showClose: !!onOpenChange
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex flex-col gap-6 p-6 flex-1 overflow-y-auto", children: !hasMessages ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(EmptyState, {}) : /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
          conversation.map((turn) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex flex-col gap-4", children: [
            turn.userMessage && !turn.isProactive && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "self-end max-w-[85%] px-5 py-3 rounded-2xl rounded-br-sm bg-primary text-primary-foreground shadow-md text-base leading-normal", children: turn.userMessage }),
            turn.assistantMessages?.map(
              (msg, idx) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "div",
                {
                  className: "self-start max-w-[90%] px-6 py-4 rounded-2xl rounded-bl-sm bg-muted/50 border border-border text-foreground text-base leading-relaxed",
                  children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MarkdownMessage, { content: msg.content })
                },
                `${turn.id}-msg-${idx}`
              )
            ),
            turn.toolProgress && turn.toolProgress.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ToolProgressIndicator, { toolProgress: turn.toolProgress }),
            turn.questions?.map(
              (question, qIdx) => {
                const isAnswered = turn.questionAnswers && question.id in turn.questionAnswers;
                if (isAnswered) return null;
                return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  QuestionForm,
                  {
                    question,
                    onSubmit: (answers) => onAnswerQuestion?.(turn.id, question.id, answers),
                    onSkip: !question.required ? () => onAnswerQuestion?.(turn.id, question.id, {}) : void 0,
                    isSubmitting: isStreaming
                  },
                  question.id || `q-${qIdx}`
                );
              }
            )
          ] }, turn.id)),
          isStreaming && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TypingIndicator, {}),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { ref: messagesEndRef })
        ] }) }),
        suggestions.length > 0 && !isStreaming && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          SuggestionChips,
          {
            suggestions,
            onClick: (s) => onSuggestionClick?.(s),
            disabled: isStreaming
          }
        ),
        isInSelectionMode ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "p-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mb-2 text-xs font-medium text-white/70", children: [
            "Editing: ",
            selectedElement?.type
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            ChatInput,
            {
              value: selectionPrompt,
              onChange: (v) => onSelectionPromptChange?.(v),
              onSubmit: handleSelectionSubmit,
              placeholder: "Describe changes...",
              isStreaming
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex gap-2 mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              "button",
              {
                type: "button",
                onClick: onSelectionCancel,
                className: "flex-1 px-4 py-2 border border-white/10 rounded-lg bg-transparent text-white/70 cursor-pointer hover:bg-white/5 transition-colors",
                children: "Cancel"
              }
            ),
            onSelectionDelete && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              "button",
              {
                type: "button",
                onClick: onSelectionDelete,
                className: "px-4 py-2 border-none rounded-lg bg-destructive/15 text-destructive cursor-pointer hover:bg-destructive/25 transition-colors",
                children: "Delete"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          ChatInput,
          {
            value: inputValue,
            onChange: setInputValue,
            onSubmit: handleSend,
            placeholder: "Ask me anything...",
            isStreaming
          }
        )
      ]
    }
  );
});

// src/components/ConversationInteractiveElements.tsx
var import_react13 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var CONTAINER_STYLE = {
  display: "flex",
  flexDirection: "column",
  gap: 12
};
function ConversationInteractiveElements({
  conversation,
  isStreaming = false,
  onAnswerQuestion,
  onSuggestionClick,
  style,
  className,
  showSuggestions = true,
  showQuestions = true
}) {
  const unansweredQuestions = (0, import_react13.useMemo)(() => {
    if (!showQuestions) return [];
    const questions = [];
    for (const turn of conversation) {
      if (turn.questions && turn.questions.length > 0) {
        for (const question of turn.questions) {
          const isAnswered = turn.questionAnswers && question.id in turn.questionAnswers;
          if (!isAnswered) {
            questions.push({ turnId: turn.id, question });
          }
        }
      }
    }
    return questions;
  }, [conversation, showQuestions]);
  const suggestions = (0, import_react13.useMemo)(() => {
    if (!showSuggestions) return [];
    const lastTurn = conversation[conversation.length - 1];
    return lastTurn?.suggestions || [];
  }, [conversation, showSuggestions]);
  if (unansweredQuestions.length === 0 && suggestions.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { ...CONTAINER_STYLE, ...style }, className, children: [
    unansweredQuestions.map(({ turnId, question }, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      QuestionForm,
      {
        question,
        onSubmit: (answers) => onAnswerQuestion?.(turnId, question.id, answers),
        onSkip: !question.required ? () => onAnswerQuestion?.(turnId, question.id, {}) : void 0,
        isSubmitting: isStreaming
      },
      question.id || `q-${index}`
    )),
    !isStreaming && suggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      SuggestionChips,
      {
        suggestions,
        onClick: (chip) => onSuggestionClick?.(chip.prompt),
        disabled: isStreaming
      }
    )
  ] });
}

// src/components/PlanningStatus/component.tsx
var import_react14 = require("react");

// src/components/PlanningStatus/icons.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var icons = {
  plan: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("polyline", { points: "14,2 14,8 20,8" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
      ]
    }
  ),
  check: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("polyline", { points: "20,6 9,17 4,12" })
    }
  ),
  loading: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { animation: "spin 1s linear infinite" },
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
    }
  ),
  pending: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("circle", { cx: "12", cy: "12", r: "10", opacity: "0.3" })
    }
  ),
  research: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "m21 21-4.3-4.3" })
      ]
    }
  ),
  coding: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("polyline", { points: "16,18 22,12 16,6" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("polyline", { points: "8,6 2,12 8,18" })
      ]
    }
  ),
  review: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("circle", { cx: "12", cy: "12", r: "3" })
      ]
    }
  ),
  parallel: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M8 6h13" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M8 12h13" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M8 18h13" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M3 6h.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M3 12h.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M3 18h.01" })
      ]
    }
  )
};
function getAgentIcon(agent) {
  switch (agent.toLowerCase()) {
    case "research":
      return icons.research;
    case "coding":
      return icons.coding;
    case "review":
      return icons.review;
    default:
      return icons.pending;
  }
}

// src/components/PlanningStatus/styles.ts
function countAllSteps(steps) {
  return steps.reduce(
    (sum, s) => sum + 1 + (s.subtasks ? countAllSteps(s.subtasks) : 0),
    0
  );
}
var keyframes2 = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;
var styles = {
  container: {
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)",
    backdropFilter: "blur(12px)",
    borderRadius: 16,
    border: "1px solid rgba(148, 163, 184, 0.15)",
    padding: 16,
    marginBottom: 16,
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: 10,
    background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
    color: "#fff",
    flexShrink: 0
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    gap: 2
  },
  label: {
    fontSize: 11,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    color: "rgba(148, 163, 184, 0.8)"
  },
  goal: {
    fontSize: 14,
    fontWeight: 600,
    color: "#f1f5f9",
    lineHeight: 1.3
  },
  progressBadge: {
    fontSize: 12,
    fontWeight: 600,
    padding: "4px 10px",
    borderRadius: 20,
    background: "rgba(59, 130, 246, 0.2)",
    color: "#60a5fa",
    border: "1px solid rgba(59, 130, 246, 0.3)"
  },
  progressBar: {
    height: 3,
    borderRadius: 2,
    background: "rgba(148, 163, 184, 0.1)",
    marginBottom: 14,
    overflow: "hidden"
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
    background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
    transition: "width 0.4s ease"
  },
  steps: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  step: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 10,
    background: "rgba(30, 41, 59, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    transition: "all 0.25s ease"
  },
  stepActive: {
    background: "rgba(59, 130, 246, 0.12)",
    borderColor: "rgba(59, 130, 246, 0.4)",
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.15)"
  },
  stepCompleted: {
    opacity: 0.6
  },
  stepNumber: {
    fontSize: 10,
    fontWeight: 700,
    width: 20,
    height: 20,
    borderRadius: 6,
    background: "rgba(148, 163, 184, 0.15)",
    color: "rgba(148, 163, 184, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  },
  stepStatus: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    borderRadius: 12,
    background: "rgba(148, 163, 184, 0.1)",
    color: "rgba(148, 163, 184, 0.5)",
    flexShrink: 0
  },
  stepStatusActive: {
    background: "rgba(59, 130, 246, 0.2)",
    color: "#60a5fa"
  },
  stepStatusCompleted: {
    background: "rgba(34, 197, 94, 0.2)",
    color: "#4ade80"
  },
  stepContent: {
    flex: 1,
    minWidth: 0
  },
  stepTask: {
    fontSize: 13,
    fontWeight: 500,
    color: "#e2e8f0",
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  agentBadge: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    fontSize: 10,
    fontWeight: 600,
    padding: "4px 8px",
    borderRadius: 6,
    background: "rgba(148, 163, 184, 0.1)",
    color: "rgba(148, 163, 184, 0.7)",
    textTransform: "uppercase",
    letterSpacing: "0.3px",
    flexShrink: 0
  },
  agentBadgeActive: {
    background: "rgba(59, 130, 246, 0.15)",
    color: "#60a5fa"
  },
  subtask: {
    marginLeft: 32,
    padding: "6px 10px",
    background: "rgba(30, 41, 59, 0.3)",
    borderRadius: 8
  },
  subtasksContainer: {
    marginTop: 4,
    marginLeft: 12,
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftStyle: "solid",
    borderLeftColor: "rgba(148, 163, 184, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: 4
  },
  parallelBadge: {
    marginLeft: 8,
    padding: "2px 6px",
    borderRadius: 4,
    background: "rgba(139, 92, 246, 0.2)",
    color: "#a78bfa",
    fontSize: 9,
    fontWeight: 600
  }
};

// src/components/PlanningStatus/step-item.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var StepItem = ({
  step,
  index,
  isCompleted,
  isActive,
  isSubtask = false
}) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
  "div",
  {
    style: {
      ...styles.step,
      ...isActive ? styles.stepActive : {},
      ...isCompleted ? styles.stepCompleted : {},
      ...isSubtask ? styles.subtask : {}
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: styles.stepNumber, children: isSubtask ? "\u2022" : index + 1 }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "div",
        {
          style: {
            ...styles.stepStatus,
            ...isActive ? styles.stepStatusActive : {},
            ...isCompleted ? styles.stepStatusCompleted : {}
          },
          children: isCompleted ? icons.check : isActive ? icons.loading : icons.pending
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: styles.stepContent, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { style: styles.stepTask, children: step.task }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
        "div",
        {
          style: {
            ...styles.agentBadge,
            ...isActive ? styles.agentBadgeActive : {}
          },
          children: [
            step.parallel && icons.parallel,
            getAgentIcon(step.agent),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: step.agent })
          ]
        }
      )
    ]
  }
);

// src/components/PlanningStatus/component.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var PlanningStatus = (0, import_react14.memo)(
  function PlanningStatus2({
    plan,
    activeStepId,
    activeSubtaskId,
    completedSteps,
    completedSubtasks = [],
    parallelLevel
  }) {
    if (!plan) return null;
    const completedCount = completedSteps.length + completedSubtasks.length;
    const totalSteps = countAllSteps(plan.steps);
    const progress = totalSteps > 0 ? completedCount / totalSteps * 100 : 0;
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: styles.container, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("style", { children: keyframes2 }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: styles.header, children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: styles.headerLeft, children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: styles.iconWrapper, children: icons.plan }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: styles.headerContent, children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { style: styles.label, children: [
              "Execution Plan",
              parallelLevel !== null && parallelLevel !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { style: styles.parallelBadge, children: [
                "\u26A1 Parallel L",
                parallelLevel
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { style: styles.goal, children: plan.goal })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: styles.progressBadge, children: [
          completedCount,
          "/",
          totalSteps
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: styles.progressBar, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { ...styles.progressFill, width: `${progress}%` } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: styles.steps, children: plan.steps.map((step, index) => {
        const isCompleted = completedSteps.includes(step.id);
        const isActive = activeStepId === step.id;
        return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            StepItem,
            {
              step,
              index,
              isCompleted,
              isActive,
              completedSubtasks,
              activeSubtaskId
            }
          ),
          step.subtasks && step.subtasks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: styles.subtasksContainer, children: step.subtasks.map((subtask, subIndex) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            StepItem,
            {
              step: subtask,
              index: subIndex,
              isCompleted: completedSubtasks.includes(subtask.id),
              isActive: activeSubtaskId === subtask.id,
              isSubtask: true,
              completedSubtasks,
              activeSubtaskId
            },
            subtask.id
          )) })
        ] }, step.id);
      }) })
    ] });
  }
);

// src/components/UnifiedProgress/component.tsx
var import_react15 = require("react");
var import_react16 = require("@onegenui/react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var UnifiedProgressIndicator = (0, import_react15.memo)(
  function UnifiedProgressIndicator2({ className }) {
    const planExecution = (0, import_react16.useStore)(import_react16.selectPlanExecution);
    const activeTools = (0, import_react16.useActiveToolProgress)();
    const plan = planExecution.plan;
    const isOrchestrating = planExecution.isOrchestrating;
    const parallelLevel = planExecution.parallelLevel;
    const metrics = (0, import_react15.useMemo)(() => {
      if (!plan) return null;
      return computePlanMetrics(plan.steps);
    }, [plan]);
    if (!isOrchestrating && activeTools.length === 0) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: (0, import_utils.cn)("unified-progress", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("style", { children: KEYFRAMES }),
      isOrchestrating && plan && metrics && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        PlanSection,
        {
          plan,
          metrics,
          parallelLevel
        }
      ),
      activeTools.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ToolSection, { tools: activeTools, hasPlan: Boolean(plan) })
    ] });
  }
);
var PlanSection = (0, import_react15.memo)(function PlanSection2({
  plan,
  metrics,
  parallelLevel
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "plan-section", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "plan-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "plan-header-left", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "plan-icon", children: ICONS.plan }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "plan-header-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "plan-label", children: [
            "Generating",
            parallelLevel !== null && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "parallel-badge", children: [
              "Parallel L",
              parallelLevel
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "plan-goal", children: plan.goal })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "progress-badge", children: [
        metrics.completed,
        "/",
        metrics.total
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "progress-bar", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "div",
      {
        className: "progress-fill",
        style: { width: `${metrics.progress}%` }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(StepsList, { steps: plan.steps })
  ] });
});
var StepsList = (0, import_react15.memo)(function StepsList2({ steps }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "steps-list", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(StepItem2, { step, index }, step.id)) });
});
var StepItem2 = (0, import_react15.memo)(function StepItem3({ step, index }) {
  const isActive = step.status === "running";
  const isCompleted = step.status === "complete";
  const isPending = step.status === "pending";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "step-item",
        isActive && "step-active",
        isCompleted && "step-completed",
        isPending && "step-pending"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "div",
          {
            className: (0, import_utils.cn)(
              "step-status",
              isActive && "status-active",
              isCompleted && "status-completed"
            ),
            children: [
              isActive && ICONS.spinner,
              isCompleted && ICONS.check,
              isPending && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "step-number", children: index + 1 })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "step-content", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "step-task", children: step.task }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: (0, import_utils.cn)("agent-badge", isActive && "badge-active"), children: step.agent })
      ]
    }
  );
});
var ToolSection = (0, import_react15.memo)(function ToolSection2({
  tools,
  hasPlan
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: (0, import_utils.cn)("tool-section", hasPlan && "tool-section-nested"), children: tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ToolItem, { tool }, tool.toolCallId)) });
});
var ToolItem = (0, import_react15.memo)(function ToolItem2({ tool }) {
  const isActive = tool.status !== "complete" && tool.status !== "error";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "tool-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "tool-icon", children: getToolIcon(tool.toolName) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "tool-content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "tool-name", children: formatToolName(tool.toolName) }),
      tool.message && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "tool-message", children: tool.message })
    ] }),
    isActive && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "tool-indicator", children: [0, 1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "span",
      {
        className: "dot",
        style: { animationDelay: `${i * 0.15}s` }
      },
      i
    )) })
  ] });
});
function computePlanMetrics(steps) {
  let total = 0;
  let completed = 0;
  let running = 0;
  function countStep(step) {
    total++;
    if (step.status === "complete") completed++;
    if (step.status === "running") running++;
    if (step.subtasks) {
      step.subtasks.forEach((st) => {
        total++;
        if (st.status === "complete") completed++;
        if (st.status === "running") running++;
      });
    }
  }
  steps.forEach(countStep);
  return {
    total,
    completed,
    running,
    progress: total > 0 ? completed / total * 100 : 0
  };
}
var TOOL_LABELS = {
  "web-search": "Web Search",
  "web-scrape": "Reading Page",
  "search-flight": "Flight Search",
  "search-hotel": "Hotel Search",
  calendar: "Calendar",
  gmail: "Email",
  "document-index": "Indexing Document",
  "document-index-cache": "Loading Cached Index",
  "document-search": "Searching Sections",
  "document-toc": "Detecting TOC",
  "document-structure": "Extracting Structure"
};
function formatToolName(name) {
  return TOOL_LABELS[name] || name.replace(/-/g, " ");
}
function getToolIcon(toolName) {
  switch (toolName) {
    case "web-search":
      return ICONS.search;
    case "web-scrape":
      return ICONS.document;
    case "search-flight":
      return ICONS.plane;
    case "search-hotel":
      return ICONS.building;
    case "document-index":
    case "document-index-cache":
    case "document-toc":
    case "document-structure":
      return ICONS.document;
    case "document-search":
      return ICONS.search;
    default:
      return ICONS.zap;
  }
}
var ICONS = {
  plan: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
    }
  ),
  spinner: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      className: "spinner",
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
    }
  ),
  check: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("polyline", { points: "20,6 9,17 4,12" })
    }
  ),
  search: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "m21 21-4.3-4.3" })
      ]
    }
  ),
  document: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("polyline", { points: "14,2 14,8 20,8" })
      ]
    }
  ),
  plane: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" })
    }
  ),
  building: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" })
      ]
    }
  ),
  zap: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("polygon", { points: "13,2 3,14 12,14 11,22 21,10 12,10 13,2" })
    }
  )
};
var KEYFRAMES = `
  @keyframes unified-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes unified-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  .unified-progress {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .plan-section {
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    border: 1px solid rgba(148, 163, 184, 0.15);
    padding: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .plan-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .plan-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .plan-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
    color: #fff;
    flex-shrink: 0;
  }

  .plan-header-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .plan-label {
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: rgba(148, 163, 184, 0.8);
  }

  .plan-goal {
    font-size: 14px;
    font-weight: 600;
    color: #f1f5f9;
    line-height: 1.3;
  }

  .parallel-badge {
    margin-left: 8px;
    padding: 2px 6px;
    border-radius: 4px;
    background: rgba(139, 92, 246, 0.2);
    color: #a78bfa;
    font-size: 9px;
    font-weight: 600;
  }

  .progress-badge {
    font-size: 12px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 20px;
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
    border: 1px solid rgba(59, 130, 246, 0.3);
  }

  .progress-bar {
    height: 3px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.1);
    margin-bottom: 14px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 2px;
    background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
    transition: width 0.4s ease;
  }

  .steps-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .step-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid transparent;
    transition: all 0.25s ease;
  }

  .step-active {
    background: rgba(59, 130, 246, 0.12);
    border-color: rgba(59, 130, 246, 0.4);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
  }

  .step-completed {
    opacity: 0.6;
  }

  .step-pending {
    opacity: 0.75;
  }

  .step-status {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 11px;
    background: rgba(148, 163, 184, 0.1);
    color: rgba(148, 163, 184, 0.5);
    flex-shrink: 0;
  }

  .status-active {
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
  }

  .status-completed {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
  }

  .step-number {
    font-size: 10px;
    font-weight: 700;
  }

  .step-content {
    flex: 1;
    min-width: 0;
  }

  .step-task {
    font-size: 12px;
    font-weight: 500;
    color: #e2e8f0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .agent-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 9px;
    font-weight: 600;
    padding: 3px 6px;
    border-radius: 5px;
    background: rgba(148, 163, 184, 0.1);
    color: rgba(148, 163, 184, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.3px;
    flex-shrink: 0;
  }

  .badge-active {
    background: rgba(59, 130, 246, 0.15);
    color: #60a5fa;
  }

  .spinner {
    animation: unified-spin 1s linear infinite;
  }

  /* Tool section */
  .tool-section {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .tool-section-nested {
    margin-top: 4px;
    padding-left: 16px;
    border-left: 2px solid rgba(59, 130, 246, 0.3);
  }

  .tool-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
  }

  .tool-icon {
    width: 28px;
    height: 28px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
    flex-shrink: 0;
  }

  .tool-content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .tool-name {
    font-size: 13px;
    font-weight: 500;
    color: #f1f5f9;
  }

  .tool-message {
    font-size: 11px;
    color: rgba(148, 163, 184, 0.8);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tool-indicator {
    display: flex;
    gap: 3px;
  }

  .tool-indicator .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #60a5fa;
    animation: unified-bounce 1s ease-in-out infinite;
  }
`;

// src/components/Input/ChatInputArea.tsx
var import_react18 = require("react");
var import_lucide_react7 = require("lucide-react");

// src/components/Input/FileAttachmentBadge.tsx
var import_lucide_react5 = require("lucide-react");

// src/types/attachments.ts
function isLibraryAttachment(a) {
  return a.type === "library-document";
}
function isFileAttachment(a) {
  return a.type !== "library-document";
}

// src/components/Input/FileAttachmentBadge.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var getIconForType = (type) => {
  switch (type) {
    case "document":
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.FileText, { size: 14 });
    case "spreadsheet":
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.FileSpreadsheet, { size: 14 });
    case "presentation":
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.Presentation, { size: 14 });
    case "image":
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.Image, { size: 14 });
    case "library-document":
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.Library, { size: 14, className: "text-blue-400" });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.File, { size: 14 });
  }
};
function FileAttachmentBadge({
  attachment,
  onRemove
}) {
  const isLibrary = isLibraryAttachment(attachment);
  const fileName = isLibrary ? attachment.fileName : attachment.file.name;
  const preview = isFileAttachment(attachment) ? attachment.preview : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "div",
    {
      className: `inline-flex items-center gap-2 px-2 py-1 rounded-lg border max-w-[200px] text-[13px] text-foreground select-none transition-colors ${isLibrary ? "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/15" : "bg-white/10 border-white/10 hover:bg-white/15"}`,
      children: [
        preview ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "img",
          {
            src: preview,
            alt: fileName,
            className: "w-5 h-5 object-cover rounded"
          }
        ) : getIconForType(attachment.type),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "truncate flex-1", children: fileName }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "button",
          {
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              onRemove(attachment.id);
            },
            className: "flex items-center justify-center w-4 h-4 rounded-full bg-white/10 text-muted-foreground hover:text-foreground hover:bg-white/20 ml-1 p-0 transition-colors border-none cursor-pointer",
            title: "Remove attachment",
            children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.X, { size: 10 })
          }
        )
      ]
    }
  );
}

// src/components/Input/ActionMenu.tsx
var import_react17 = require("react");
var import_lucide_react6 = require("lucide-react");
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime19 = require("react/jsx-runtime");
function ActionMenu({
  isOpen,
  onClose,
  onOpenSettings,
  onToggleCopilotMode,
  onToggleHideMessages,
  onClear,
  canClear,
  messagesMode = "default",
  isDocumentEditorEnabled = false,
  onToggleDocumentEditor
}) {
  const menuRef = (0, import_react17.useRef)(null);
  (0, import_react17.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_framer_motion2.AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_framer_motion2.motion.div,
    {
      ref: menuRef,
      initial: { opacity: 0, scale: 0.95, y: 10 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95, y: 10 },
      transition: { duration: 0.2, ease: "easeOut" },
      className: "absolute left-0 bottom-full mb-3 min-w-[200px] overflow-hidden rounded-xl bg-[#1e1e23]/95 backdrop-blur-xl border border-white/10 shadow-2xl z-[150]",
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "p-1.5 flex flex-col gap-1", children: [
        onOpenSettings && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
          "button",
          {
            onClick: () => {
              onOpenSettings();
              onClose();
            },
            className: "flex items-center gap-3 px-3 py-2.5 text-[14px] text-foreground hover:bg-white/5 rounded-lg transition-colors w-full text-left bg-transparent border-none cursor-pointer",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react6.Settings, { size: 16 }),
              "Settings"
            ]
          }
        ),
        onToggleDocumentEditor && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
          "button",
          {
            onClick: () => {
              onToggleDocumentEditor();
              onClose();
            },
            className: (0, import_utils.cn)(
              "flex items-center gap-3 px-3 py-2.5 text-[14px] rounded-lg transition-colors w-full text-left bg-transparent border-none cursor-pointer",
              isDocumentEditorEnabled ? "text-primary bg-primary/10" : "text-foreground hover:bg-white/5"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react6.FileEdit, { size: 16 }),
              isDocumentEditorEnabled ? "Close Document Editor" : "Open Document Editor"
            ]
          }
        ),
        onToggleCopilotMode && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
          "button",
          {
            onClick: () => {
              onToggleCopilotMode();
              onClose();
            },
            className: (0, import_utils.cn)(
              "flex items-center gap-3 px-3 py-2.5 text-[14px] rounded-lg transition-colors w-full text-left bg-transparent border-none cursor-pointer",
              messagesMode === "copilot" ? "text-primary bg-primary/10" : "text-foreground hover:bg-white/5"
            ),
            children: [
              messagesMode === "copilot" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react6.PanelRightClose, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react6.PanelRightOpen, { size: 16 }),
              messagesMode === "copilot" ? "Close Copilot Panel" : "Open Copilot Panel"
            ]
          }
        ),
        onToggleHideMessages && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
          "button",
          {
            onClick: () => {
              onToggleHideMessages();
              onClose();
            },
            className: (0, import_utils.cn)(
              "flex items-center gap-3 px-3 py-2.5 text-[14px] rounded-lg transition-colors w-full text-left bg-transparent border-none cursor-pointer",
              messagesMode === "hidden" ? "text-muted-foreground" : "text-foreground hover:bg-white/5"
            ),
            children: [
              messagesMode === "hidden" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react6.EyeOff, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react6.Eye, { size: 16 }),
              messagesMode === "hidden" ? "Show Messages" : "Hide Messages"
            ]
          }
        ),
        canClear && onClear && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "h-px bg-white/5 my-1" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
            "button",
            {
              onClick: () => {
                onClear();
                onClose();
              },
              disabled: !canClear,
              className: "flex items-center gap-3 px-3 py-2.5 text-[14px] text-destructive hover:bg-destructive/10 rounded-lg transition-colors w-full text-left bg-transparent border-none cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react6.Trash2, { size: 16 }),
                "Clear Chat"
              ]
            }
          )
        ] })
      ] })
    }
  ) });
}

// src/components/Input/ChatInputArea.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function ChatInputArea({
  input,
  setInput,
  onSend,
  isStreaming = false,
  placeholder = "Message AI...",
  onFocus,
  onBlur,
  isFocused = false,
  className,
  attachments,
  onRemoveAttachment,
  onAttachClick,
  fileInputRef,
  handleFileSelect,
  onFilesDrop,
  isDragActive = false,
  menuProps,
  showDeepResearch = true,
  leftSlot
}) {
  const [isMenuOpen, setIsMenuOpen] = (0, import_react18.useState)(false);
  const inputRef = (0, import_react18.useRef)(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };
  const canSubmit = (input.trim().length > 0 || attachments.length > 0) && !isStreaming;
  const handleDrop = (0, import_react18.useCallback)(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!onFilesDrop || isStreaming) return;
      const files = Array.from(event.dataTransfer.files || []);
      if (files.length > 0) {
        onFilesDrop(files);
      }
    },
    [onFilesDrop, isStreaming]
  );
  const handleDragOver = (0, import_react18.useCallback)(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
    },
    []
  );
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)("relative w-full", className),
      onDrop: handleDrop,
      onDragOver: handleDragOver,
      children: [
        menuProps && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          ActionMenu,
          {
            ...menuProps,
            isOpen: isMenuOpen,
            onClose: () => setIsMenuOpen(false)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
          "div",
          {
            className: (0, import_utils.cn)(
              "flex flex-col p-2 sm:p-2.5 rounded-[18px] sm:rounded-[20px] bg-[#1e1e23]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-200 z-[50] relative",
              isFocused ? "border-primary shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25),0_8px_32px_rgba(0,0,0,0.2)]" : "hover:border-white/20",
              isDragActive && "border-primary/80 bg-primary/5"
            ),
            children: [
              isDragActive && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "absolute inset-0 rounded-[18px] sm:rounded-[20px] border border-primary/60 pointer-events-none flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-xs uppercase tracking-widest text-primary font-semibold", children: "Drop files to attach" }) }),
              attachments.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex gap-2 p-1 pb-2 w-full overflow-x-auto", children: attachments.map((attachment) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                FileAttachmentBadge,
                {
                  attachment,
                  onRemove: onRemoveAttachment
                },
                attachment.id
              )) }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3 w-full", children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-0.5 sm:gap-1 shrink-0", children: [
                  leftSlot,
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    "button",
                    {
                      type: "button",
                      onClick: () => setIsMenuOpen(!isMenuOpen),
                      className: (0, import_utils.cn)(
                        "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors duration-200 bg-transparent border-none text-muted-foreground hover:bg-white/10 hover:text-foreground",
                        isMenuOpen && "bg-white/10 text-foreground"
                      ),
                      title: "Actions",
                      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react7.Plus, { size: 18, className: "sm:w-5 sm:h-5" })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    "button",
                    {
                      type: "button",
                      onClick: onAttachClick,
                      className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 text-muted-foreground bg-transparent border-none hover:bg-white/10 hover:text-foreground",
                      title: "Attach files",
                      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react7.Paperclip, { size: 18, className: "sm:w-5 sm:h-5" })
                    }
                  ),
                  showDeepResearch && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DeepResearchToggle, { compact: true })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  "input",
                  {
                    type: "file",
                    ref: fileInputRef,
                    onChange: handleFileSelect,
                    className: "hidden",
                    multiple: true,
                    accept: ".pdf,.doc,.docx,.xls,.xlsx,.csv,.ppt,.pptx,.png,.jpg,.jpeg,.gif,.webp"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  "input",
                  {
                    ref: inputRef,
                    type: "text",
                    value: input,
                    onChange: (e) => setInput(e.target.value),
                    onKeyDown: handleKeyDown,
                    onFocus,
                    onBlur,
                    placeholder,
                    className: "flex-1 bg-transparent border-none outline-none text-foreground text-[14px] sm:text-[15px] leading-relaxed py-1 min-w-[100px] sm:min-w-[150px]",
                    disabled: isStreaming,
                    autoFocus: true
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  "button",
                  {
                    onClick: onSend,
                    disabled: !canSubmit,
                    className: (0, import_utils.cn)(
                      "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border-none transition-all duration-200",
                      canSubmit ? "bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(var(--primary-rgb),0.3)] cursor-pointer hover:bg-primary/90" : "bg-white/5 text-muted-foreground opacity-50 cursor-not-allowed"
                    ),
                    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react7.SendHorizontal, { size: 16, className: "sm:w-[18px] sm:h-[18px]" })
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}

// src/hooks/useChatAttachments.ts
var import_react19 = require("react");
function useChatAttachments() {
  const [attachments, setAttachments] = (0, import_react19.useState)([]);
  const fileInputRef = (0, import_react19.useRef)(null);
  const addFiles = (0, import_react19.useCallback)((files) => {
    if (!files || files.length === 0) return;
    const newAttachments = [];
    Array.from(files).forEach((file) => {
      const id = Math.random().toString(36).substring(7);
      let type = "other";
      if (file.type.startsWith("image/")) type = "image";
      else if (file.type === "application/pdf" || file.type.includes("word"))
        type = "document";
      else if (file.type.includes("sheet") || file.type.includes("csv"))
        type = "spreadsheet";
      else if (file.type.includes("presentation")) type = "presentation";
      const attachment = { id, file, type };
      if (type === "image") {
        const reader = new FileReader();
        reader.onload = (e) => {
          attachment.preview = e.target?.result;
          setAttachments((prev) => [...prev]);
        };
        reader.readAsDataURL(file);
      }
      newAttachments.push(attachment);
    });
    setAttachments((prev) => [...prev, ...newAttachments]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);
  const addLibraryDocument = (0, import_react19.useCallback)(
    (doc) => {
      const attachment = {
        id: Math.random().toString(36).substring(7),
        documentId: doc.id,
        fileName: doc.fileName,
        mimeType: doc.mimeType,
        pageCount: doc.pageCount,
        type: "library-document"
      };
      setAttachments((prev) => [...prev, attachment]);
    },
    []
  );
  const handleFileSelect = (0, import_react19.useCallback)(
    (e) => {
      if (e.target.files && e.target.files.length > 0) {
        addFiles(e.target.files);
      }
    },
    [addFiles]
  );
  const removeAttachment = (0, import_react19.useCallback)((id) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  }, []);
  const triggerFileSelect = (0, import_react19.useCallback)(() => {
    fileInputRef.current?.click();
  }, []);
  const clearAttachments = (0, import_react19.useCallback)(() => {
    setAttachments([]);
  }, []);
  return {
    attachments,
    fileInputRef,
    handleFileSelect,
    addFiles,
    addLibraryDocument,
    removeAttachment,
    triggerFileSelect,
    clearAttachments
  };
}

// src/schema.ts
var import_zod = require("zod");
var chatMessageSchema = import_zod.z.object({
  id: import_zod.z.string(),
  role: import_zod.z.enum(["user", "assistant", "system"]),
  content: import_zod.z.string(),
  timestamp: import_zod.z.number().optional()
});
var formFieldOptionSchema = import_zod.z.object({
  value: import_zod.z.string(),
  label: import_zod.z.string()
});
var formFieldValidationSchema = import_zod.z.object({
  required: import_zod.z.boolean().optional(),
  min: import_zod.z.number().optional(),
  max: import_zod.z.number().optional(),
  pattern: import_zod.z.string().optional(),
  message: import_zod.z.string().optional()
});
var formFieldSchema = import_zod.z.object({
  id: import_zod.z.string(),
  label: import_zod.z.string(),
  type: import_zod.z.enum([
    "text",
    "textarea",
    "number",
    "email",
    "date",
    "time",
    "datetime",
    "select",
    "radio",
    "checkbox",
    "slider"
  ]),
  placeholder: import_zod.z.string().optional(),
  defaultValue: import_zod.z.unknown().optional(),
  options: import_zod.z.array(formFieldOptionSchema).optional(),
  validation: formFieldValidationSchema.optional(),
  allowCustom: import_zod.z.boolean().optional()
});
var quickReplyOptionSchema = import_zod.z.object({
  id: import_zod.z.string(),
  label: import_zod.z.string(),
  value: import_zod.z.string().optional(),
  icon: import_zod.z.string().optional(),
  primary: import_zod.z.boolean().optional()
});
var questionPayloadSchema = import_zod.z.object({
  id: import_zod.z.string(),
  text: import_zod.z.string(),
  type: import_zod.z.enum(["text", "form", "quick-reply"]),
  fields: import_zod.z.array(formFieldSchema).optional(),
  options: import_zod.z.array(quickReplyOptionSchema).optional(),
  multiple: import_zod.z.boolean().optional(),
  allowCustom: import_zod.z.boolean().optional(),
  required: import_zod.z.boolean().optional()
});
var suggestionChipSchema = import_zod.z.object({
  id: import_zod.z.string(),
  label: import_zod.z.string(),
  action: import_zod.z.string().optional(),
  icon: import_zod.z.string().optional(),
  primary: import_zod.z.boolean().optional()
});
var conversationTurnSchema = import_zod.z.object({
  id: import_zod.z.string(),
  userMessage: import_zod.z.string().optional(),
  assistantMessages: import_zod.z.array(chatMessageSchema).optional(),
  questions: import_zod.z.array(questionPayloadSchema).optional(),
  questionAnswers: import_zod.z.record(import_zod.z.unknown()).optional(),
  suggestions: import_zod.z.array(suggestionChipSchema).optional(),
  isProactive: import_zod.z.boolean().optional(),
  timestamp: import_zod.z.number().optional()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActionMenu,
  ChatHeader,
  ChatInput,
  ChatInputArea,
  ChatPanel,
  ConversationInteractiveElements,
  EmptyState,
  FileAttachmentBadge,
  MarkdownMessage,
  PlanningStatus,
  QuestionForm,
  SuggestionChips,
  TypingIndicator,
  UnifiedProgressIndicator,
  animations,
  breakpoints,
  chatMessageSchema,
  colors,
  conversationTurnSchema,
  duration,
  easing,
  formFieldOptionSchema,
  formFieldSchema,
  formFieldValidationSchema,
  glass,
  isFileAttachment,
  isLibraryAttachment,
  keyframes,
  panelDimensions,
  questionPayloadSchema,
  quickReplyOptionSchema,
  radii,
  shadows,
  spacing,
  suggestionChipSchema,
  transitions,
  typography,
  useChatAttachments,
  zIndex
});
//# sourceMappingURL=index.js.map