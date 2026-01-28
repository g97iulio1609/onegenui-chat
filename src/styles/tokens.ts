/**
 * Design Tokens for @onegenui/chat
 *
 * Centralized design system tokens for consistent styling.
 * Supports both light and dark themes with CSS custom properties.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Colors
// ─────────────────────────────────────────────────────────────────────────────

export const colors = {
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
  userBubble:
    "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(99, 102, 241, 0.9))",
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
  overlayLight: "rgba(0, 0, 0, 0.3)",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Spacing
// ─────────────────────────────────────────────────────────────────────────────

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Border Radius
// ─────────────────────────────────────────────────────────────────────────────

export const radii = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  xxl: 24,
  full: 9999,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Typography
// ─────────────────────────────────────────────────────────────────────────────

export const typography = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

  sizes: {
    xs: 11,
    sm: 13,
    md: 14,
    lg: 16,
    xl: 18,
  },

  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Shadows
// ─────────────────────────────────────────────────────────────────────────────

export const shadows = {
  sm: "0 2px 8px rgba(0, 0, 0, 0.15)",
  md: "0 4px 16px rgba(0, 0, 0, 0.2)",
  lg: "0 8px 32px rgba(0, 0, 0, 0.25)",
  xl: "0 12px 48px rgba(0, 0, 0, 0.3)",
  glow: "0 0 20px rgba(59, 130, 246, 0.3)",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Glassmorphism
// ─────────────────────────────────────────────────────────────────────────────

export const glass = {
  blur: "blur(20px)",
  blurLight: "blur(12px)",
  blurHeavy: "blur(32px)",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Z-Index
// ─────────────────────────────────────────────────────────────────────────────

export const zIndex = {
  base: 1,
  dropdown: 10,
  sticky: 20,
  modal: 30,
  popover: 40,
  tooltip: 50,
  chat: 100,
  overlay: 200,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Breakpoints
// ─────────────────────────────────────────────────────────────────────────────

export const breakpoints = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Panel Dimensions
// ─────────────────────────────────────────────────────────────────────────────

export const panelDimensions = {
  minWidth: 320,
  maxWidth: 600,
  defaultWidth: 400,
  mobileHeight: "85vh",
  headerHeight: 56,
  inputHeight: 60,
} as const;
