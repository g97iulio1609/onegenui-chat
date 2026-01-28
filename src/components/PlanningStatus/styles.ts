import type React from "react";

// =============================================================================
// Types
// =============================================================================

export interface PlanStep {
  id: number;
  task: string;
  agent: string;
  parallel?: boolean;
  subtasks?: PlanStep[];
}

export interface ExecutionPlan {
  goal: string;
  steps: PlanStep[];
}

export interface PlanningStatusProps {
  plan: ExecutionPlan | null;
  activeStepId?: number | null;
  activeSubtaskId?: number | null;
  completedSteps: number[];
  completedSubtasks?: number[];
  parallelLevel?: number | null;
}

// =============================================================================
// Utility Functions
// =============================================================================

export function countAllSteps(steps: PlanStep[]): number {
  return steps.reduce(
    (sum, s) => sum + 1 + (s.subtasks ? countAllSteps(s.subtasks) : 0),
    0,
  );
}

// =============================================================================
// Keyframes
// =============================================================================

export const keyframes = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

// =============================================================================
// Styles
// =============================================================================

export const styles: Record<string, React.CSSProperties> = {
  container: {
    background:
      "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)",
    backdropFilter: "blur(12px)",
    borderRadius: 16,
    border: "1px solid rgba(148, 163, 184, 0.15)",
    padding: 16,
    marginBottom: 16,
    boxShadow:
      "0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12,
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
    flexShrink: 0,
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  label: {
    fontSize: 11,
    fontWeight: 500,
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
    color: "rgba(148, 163, 184, 0.8)",
  },
  goal: {
    fontSize: 14,
    fontWeight: 600,
    color: "#f1f5f9",
    lineHeight: 1.3,
  },
  progressBadge: {
    fontSize: 12,
    fontWeight: 600,
    padding: "4px 10px",
    borderRadius: 20,
    background: "rgba(59, 130, 246, 0.2)",
    color: "#60a5fa",
    border: "1px solid rgba(59, 130, 246, 0.3)",
  },
  progressBar: {
    height: 3,
    borderRadius: 2,
    background: "rgba(148, 163, 184, 0.1)",
    marginBottom: 14,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
    background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
    transition: "width 0.4s ease",
  },
  steps: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
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
    transition: "all 0.25s ease",
  },
  stepActive: {
    background: "rgba(59, 130, 246, 0.12)",
    borderColor: "rgba(59, 130, 246, 0.4)",
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.15)",
  },
  stepCompleted: {
    opacity: 0.6,
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
    flexShrink: 0,
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
    flexShrink: 0,
  },
  stepStatusActive: {
    background: "rgba(59, 130, 246, 0.2)",
    color: "#60a5fa",
  },
  stepStatusCompleted: {
    background: "rgba(34, 197, 94, 0.2)",
    color: "#4ade80",
  },
  stepContent: {
    flex: 1,
    minWidth: 0,
  },
  stepTask: {
    fontSize: 13,
    fontWeight: 500,
    color: "#e2e8f0",
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap" as const,
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
    textTransform: "uppercase" as const,
    letterSpacing: "0.3px",
    flexShrink: 0,
  },
  agentBadgeActive: {
    background: "rgba(59, 130, 246, 0.15)",
    color: "#60a5fa",
  },
  subtask: {
    marginLeft: 32,
    padding: "6px 10px",
    background: "rgba(30, 41, 59, 0.3)",
    borderRadius: 8,
  },
  subtasksContainer: {
    marginTop: 4,
    marginLeft: 12,
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftStyle: "solid" as const,
    borderLeftColor: "rgba(148, 163, 184, 0.1)",
    display: "flex",
    flexDirection: "column" as const,
    gap: 4,
  },
  parallelBadge: {
    marginLeft: 8,
    padding: "2px 6px",
    borderRadius: 4,
    background: "rgba(139, 92, 246, 0.2)",
    color: "#a78bfa",
    fontSize: 9,
    fontWeight: 600,
  },
};
