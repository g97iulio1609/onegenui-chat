"use client";

import React, { memo, useMemo } from "react";
import {
  useStore,
  useActiveToolProgress,
  selectPlanExecution,
  type PlanStep,
  type ToolProgressEvent,
} from "@onegenui/react";
import { cn } from "../../utils/cn";
import type { UnifiedProgressIndicatorProps, ExecutionPlan } from "./types";
import { ICONS } from "./icons";
import { KEYFRAMES } from "./styles";

/**
 * Unified progress indicator component
 * Reads directly from Zustand store and shows plan + tool progress
 */
export const UnifiedProgressIndicator = memo<UnifiedProgressIndicatorProps>(
  function UnifiedProgressIndicator({ className }) {
    // Read plan execution state from store
    const planExecution = useStore(selectPlanExecution);
    // Get active tool progress
    const activeTools = useActiveToolProgress();

    // Extract plan data
    const plan = planExecution.plan;
    const isOrchestrating = planExecution.isOrchestrating;
    const parallelLevel = planExecution.parallelLevel;

    // Compute progress metrics
    const metrics = useMemo(() => {
      if (!plan) return null;
      return computePlanMetrics(plan.steps);
    }, [plan]);

    // Don't render if nothing to show
    if (!isOrchestrating && activeTools.length === 0) {
      return null;
    }

    return (
      <div className={cn("unified-progress", className)}>
        <style>{KEYFRAMES}</style>

        {/* Plan section - shown during orchestration */}
        {isOrchestrating && plan && metrics && (
          <PlanSection
            plan={plan}
            metrics={metrics}
            parallelLevel={parallelLevel}
          />
        )}

        {/* Tool section - shown when tools are active */}
        {activeTools.length > 0 && (
          <ToolSection tools={activeTools} hasPlan={Boolean(plan)} />
        )}
      </div>
    );
  },
);

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

interface PlanMetrics {
  total: number;
  completed: number;
  running: number;
  progress: number;
}

interface PlanSectionProps {
  plan: ExecutionPlan;
  metrics: PlanMetrics;
  parallelLevel: number | null;
}

const PlanSection = memo<PlanSectionProps>(function PlanSection({
  plan,
  metrics,
  parallelLevel,
}) {
  return (
    <div className="plan-section">
      {/* Header */}
      <div className="plan-header">
        <div className="plan-header-left">
          <div className="plan-icon">{ICONS.plan}</div>
          <div className="plan-header-content">
            <span className="plan-label">
              Generating
              {parallelLevel !== null && (
                <span className="parallel-badge">
                  Parallel L{parallelLevel}
                </span>
              )}
            </span>
            <span className="plan-goal">{plan.goal}</span>
          </div>
        </div>
        <div className="progress-badge">
          {metrics.completed}/{metrics.total}
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${metrics.progress}%` }}
        />
      </div>

      {/* Steps (collapsed view showing only active) */}
      <StepsList steps={plan.steps} />
    </div>
  );
});

interface StepsListProps {
  steps: PlanStep[];
}

const StepsList = memo<StepsListProps>(function StepsList({ steps }) {
  return (
    <div className="steps-list">
      {steps.map((step, index) => (
        <StepItem key={step.id} step={step} index={index} />
      ))}
    </div>
  );
});

interface StepItemProps {
  step: PlanStep;
  index: number;
}

const StepItem = memo<StepItemProps>(function StepItem({ step, index }) {
  const isActive = step.status === "running";
  const isCompleted = step.status === "complete";
  const isPending = step.status === "pending";

  return (
    <div
      className={cn(
        "step-item",
        isActive && "step-active",
        isCompleted && "step-completed",
        isPending && "step-pending",
      )}
    >
      {/* Status icon */}
      <div
        className={cn(
          "step-status",
          isActive && "status-active",
          isCompleted && "status-completed",
        )}
      >
        {isActive && ICONS.spinner}
        {isCompleted && ICONS.check}
        {isPending && <span className="step-number">{index + 1}</span>}
      </div>

      {/* Content */}
      <div className="step-content">
        <span className="step-task">{step.task}</span>
      </div>

      {/* Agent badge */}
      <span className={cn("agent-badge", isActive && "badge-active")}>
        {step.agent}
      </span>
    </div>
  );
});

interface ToolSectionProps {
  tools: ToolProgressEvent[];
  hasPlan: boolean;
}

const ToolSection = memo<ToolSectionProps>(function ToolSection({
  tools,
  hasPlan,
}) {
  return (
    <div className={cn("tool-section", hasPlan && "tool-section-nested")}>
      {tools.map((tool) => (
        <ToolItem key={tool.toolCallId} tool={tool} />
      ))}
    </div>
  );
});

interface ToolItemProps {
  tool: ToolProgressEvent;
}

const ToolItem = memo<ToolItemProps>(function ToolItem({ tool }) {
  const isActive = tool.status !== "complete" && tool.status !== "error";

  return (
    <div className="tool-item">
      <div className="tool-icon">{getToolIcon(tool.toolName)}</div>
      <div className="tool-content">
        <span className="tool-name">{formatToolName(tool.toolName)}</span>
        {tool.message && <span className="tool-message">{tool.message}</span>}
      </div>
      {isActive && (
        <span className="tool-indicator">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="dot"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </span>
      )}
    </div>
  );
});

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

interface StepLike {
  status: string;
  subtasks?: Array<{ status: string }>;
}

function computePlanMetrics(steps: StepLike[]): PlanMetrics {
  let total = 0;
  let completed = 0;
  let running = 0;

  function countStep(step: StepLike) {
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
    progress: total > 0 ? (completed / total) * 100 : 0,
  };
}

const TOOL_LABELS: Record<string, string> = {
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
  "document-structure": "Extracting Structure",
};

function formatToolName(name: string): string {
  return TOOL_LABELS[name] || name.replace(/-/g, " ");
}

function getToolIcon(toolName: string): React.ReactElement {
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
