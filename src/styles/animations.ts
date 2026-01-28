/**
 * Animation definitions for @onegenui/chat
 *
 * Smooth, purposeful animations that enhance UX without being distracting.
 * Uses CSS keyframes and spring physics for natural motion.
 */

import type { CSSProperties } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Timing Functions
// ─────────────────────────────────────────────────────────────────────────────

export const easing = {
  // Standard easing
  ease: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",

  // Spring-like
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",

  // Smooth
  smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Durations
// ─────────────────────────────────────────────────────────────────────────────

export const duration = {
  instant: 50,
  fast: 100,
  normal: 200,
  slow: 300,
  slower: 400,
  slowest: 500,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Transition Presets
// ─────────────────────────────────────────────────────────────────────────────

export const transitions = {
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
  interactive: `transform ${duration.fast}ms ${easing.spring}, opacity ${duration.fast}ms ${easing.ease}, background-color ${duration.fast}ms ${easing.ease}`,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Animation Keyframes (as CSS strings for injection)
// ─────────────────────────────────────────────────────────────────────────────

export const keyframes = {
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
  `,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Animation Styles
// ─────────────────────────────────────────────────────────────────────────────

export const animations: Record<string, CSSProperties> = {
  fadeIn: {
    animation: `fadeIn ${duration.normal}ms ${easing.ease} forwards`,
  },

  fadeOut: {
    animation: `fadeOut ${duration.fast}ms ${easing.ease} forwards`,
  },

  slideUp: {
    animation: `slideUp ${duration.slow}ms ${easing.spring} forwards`,
  },

  slideDown: {
    animation: `slideDown ${duration.slow}ms ${easing.spring} forwards`,
  },

  slideInRight: {
    animation: `slideInRight ${duration.slow}ms ${easing.spring} forwards`,
  },

  slideInLeft: {
    animation: `slideInLeft ${duration.slow}ms ${easing.spring} forwards`,
  },

  scaleIn: {
    animation: `scaleIn ${duration.normal}ms ${easing.spring} forwards`,
  },

  pulse: {
    animation: `pulse 2s ${easing.ease} infinite`,
  },

  spin: {
    animation: `spin 1s linear infinite`,
  },

  shimmer: {
    animation: `shimmer 2s linear infinite`,
    backgroundSize: "200% 100%",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Hover States
// ─────────────────────────────────────────────────────────────────────────────

export const hoverStyles = {
  lift: {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },

  scale: {
    transform: "scale(1.02)",
  },

  glow: {
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
  },

  brighten: {
    filter: "brightness(1.1)",
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Active/Press States
// ─────────────────────────────────────────────────────────────────────────────

export const activeStyles = {
  press: {
    transform: "scale(0.98)",
  },

  sink: {
    transform: "translateY(1px)",
  },
} as const;
