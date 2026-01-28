import type {
  PlanStep as StorePlanStep,
  PlanSubtask as StorePlanSubtask,
} from "@onegenui/react";

/**
 * Props for UnifiedProgressIndicator
 */
export interface UnifiedProgressIndicatorProps {
  /** Optional CSS class name */
  className?: string;
}

/**
 * Plan step type (from store)
 */
export type PlanStep = StorePlanStep;

/**
 * Plan subtask type (from store)
 */
export type PlanSubtask = StorePlanSubtask;

/**
 * Execution plan structure
 */
export interface ExecutionPlan {
  goal: string;
  steps: PlanStep[];
}
