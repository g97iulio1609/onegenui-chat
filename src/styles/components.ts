/**
 * Component Styles for @onegenui/chat
 *
 * Pre-built style objects for chat components using design tokens.
 */

import type { CSSProperties } from "react";
import {
  colors,
  spacing,
  radii,
  typography,
  shadows,
  glass,
  panelDimensions,
} from "./tokens";
import { transitions } from "./animations";

// ─────────────────────────────────────────────────────────────────────────────
// Chat Panel
// ─────────────────────────────────────────────────────────────────────────────

export const chatPanelStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    background: colors.panelBg,
    backdropFilter: glass.blur,
    WebkitBackdropFilter: glass.blur,
    borderLeft: `1px solid ${colors.border}`,
    overflow: "hidden",
  } as CSSProperties,

  containerMobile: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: panelDimensions.mobileHeight,
    borderRadius: `${radii.xxl}px ${radii.xxl}px 0 0`,
    borderLeft: "none",
    borderTop: `1px solid ${colors.border}`,
    boxShadow: shadows.xl,
  } as CSSProperties,
};

// ─────────────────────────────────────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────────────────────────────────────

export const headerStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${spacing.md}px ${spacing.lg}px`,
    minHeight: panelDimensions.headerHeight,
    borderBottom: `1px solid ${colors.border}`,
    background: "rgba(0, 0, 0, 0.2)",
  } as CSSProperties,

  title: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    color: colors.textPrimary,
  } as CSSProperties,

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
    border: "1px solid rgba(59, 130, 246, 0.25)",
  } as CSSProperties,

  controls: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xs,
  } as CSSProperties,
};

// ─────────────────────────────────────────────────────────────────────────────
// Icon Button
// ─────────────────────────────────────────────────────────────────────────────

export const iconButtonStyles = {
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
    transition: transitions.interactive,
  } as CSSProperties,

  hover: {
    background: colors.surfaceHover,
    color: colors.textPrimary,
  } as CSSProperties,

  active: {
    background: colors.surfaceActive,
    transform: "scale(0.95)",
  } as CSSProperties,

  disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    pointerEvents: "none" as const,
  } as CSSProperties,
};

// ─────────────────────────────────────────────────────────────────────────────
// Messages
// ─────────────────────────────────────────────────────────────────────────────

export const messageStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
    padding: spacing.lg,
    overflowY: "auto",
    flex: 1,
  } as CSSProperties,

  userBubble: {
    alignSelf: "flex-end",
    maxWidth: "85%",
    padding: `${spacing.md}px ${spacing.lg}px`,
    borderRadius: `${radii.xl}px ${radii.xl}px ${radii.sm}px ${radii.xl}px`,
    background: colors.userBubble,
    color: "white",
    fontSize: typography.sizes.md,
    lineHeight: typography.lineHeights.normal,
    boxShadow: shadows.md,
  } as CSSProperties,

  assistantBubble: {
    alignSelf: "flex-start",
    maxWidth: "90%",
    padding: `${spacing.md}px ${spacing.lg}px`,
    borderRadius: `${radii.xl}px ${radii.xl}px ${radii.xl}px ${radii.sm}px`,
    background: colors.assistantBubble,
    color: colors.textPrimary,
    fontSize: typography.sizes.md,
    lineHeight: typography.lineHeights.relaxed,
    border: `1px solid ${colors.border}`,
  } as CSSProperties,

  timestamp: {
    fontSize: typography.sizes.xs,
    color: colors.textMuted,
    marginTop: spacing.xs,
  } as CSSProperties,
};

// ─────────────────────────────────────────────────────────────────────────────
// Input Area
// ─────────────────────────────────────────────────────────────────────────────

export const inputStyles = {
  container: {
    display: "flex",
    alignItems: "flex-end",
    gap: spacing.sm,
    padding: spacing.lg,
    borderTop: `1px solid ${colors.border}`,
    background: "rgba(0, 0, 0, 0.15)",
  } as CSSProperties,

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
    resize: "none" as const,
    outline: "none",
    transition: transitions.colors,
  } as CSSProperties,

  textAreaFocus: {
    borderColor: colors.borderFocus,
    background: colors.surfaceHover,
  } as CSSProperties,

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
    flexShrink: 0,
  } as CSSProperties,

  sendButtonDisabled: {
    background: colors.surface,
    color: colors.textMuted,
    cursor: "not-allowed",
  } as CSSProperties,
};

// ─────────────────────────────────────────────────────────────────────────────
// Empty State
// ─────────────────────────────────────────────────────────────────────────────

export const emptyStateStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: spacing.xxxl,
    textAlign: "center" as const,
  } as CSSProperties,

  icon: {
    width: 64,
    height: 64,
    marginBottom: spacing.lg,
    padding: spacing.lg,
    borderRadius: radii.xxl,
    background: "rgba(59, 130, 246, 0.1)",
    color: colors.primary,
  } as CSSProperties,

  title: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  } as CSSProperties,

  description: {
    fontSize: typography.sizes.md,
    color: colors.textSecondary,
    maxWidth: 280,
    lineHeight: typography.lineHeights.relaxed,
  } as CSSProperties,
};

// ─────────────────────────────────────────────────────────────────────────────
// Question Form
// ─────────────────────────────────────────────────────────────────────────────

export const questionFormStyles = {
  container: {
    padding: spacing.lg,
    borderRadius: radii.xl,
    background: "rgba(59, 130, 246, 0.08)",
    border: `1px solid rgba(59, 130, 246, 0.2)`,
    marginTop: spacing.sm,
  } as CSSProperties,

  title: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  } as CSSProperties,

  field: {
    marginBottom: spacing.md,
  } as CSSProperties,

  label: {
    display: "block",
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  } as CSSProperties,

  input: {
    width: "100%",
    padding: `${spacing.sm}px ${spacing.md}px`,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.md,
    background: colors.surface,
    color: colors.textPrimary,
    fontSize: typography.sizes.md,
    outline: "none",
    transition: transitions.colors,
  } as CSSProperties,

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
    transition: transitions.interactive,
  } as CSSProperties,
};

// ─────────────────────────────────────────────────────────────────────────────
// Suggestion Chips
// ─────────────────────────────────────────────────────────────────────────────

export const suggestionChipStyles = {
  container: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: spacing.sm,
    padding: `${spacing.md}px ${spacing.lg}px`,
  } as CSSProperties,

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
    transition: transitions.interactive,
  } as CSSProperties,

  chipHover: {
    background: colors.surfaceHover,
    borderColor: colors.borderHover,
    color: colors.textPrimary,
  } as CSSProperties,

  chipPrimary: {
    background: "rgba(59, 130, 246, 0.15)",
    borderColor: "rgba(59, 130, 246, 0.3)",
    color: colors.primary,
  } as CSSProperties,
};

// ─────────────────────────────────────────────────────────────────────────────
// Mobile Swipe Handle
// ─────────────────────────────────────────────────────────────────────────────

export const swipeHandleStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: `${spacing.sm}px 0`,
  } as CSSProperties,

  handle: {
    width: 40,
    height: 4,
    borderRadius: radii.full,
    background: colors.border,
  } as CSSProperties,
};

// ─────────────────────────────────────────────────────────────────────────────
// Typing Indicator
// ─────────────────────────────────────────────────────────────────────────────

export const typingIndicatorStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: `${spacing.md}px ${spacing.lg}px`,
  } as CSSProperties,

  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: colors.textMuted,
    animation: "typingDot 1.4s ease-in-out infinite",
  } as CSSProperties,
};
