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

// -----------------------------------------------------------------------------
// Icons
// -----------------------------------------------------------------------------

const ICONS = {
  plan: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  spinner: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="spinner"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  check: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="20,6 9,17 4,12" />
    </svg>
  ),
  search: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  document: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14,2 14,8 20,8" />
    </svg>
  ),
  plane: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  ),
  building: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    </svg>
  ),
  zap: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
    </svg>
  ),
};

// -----------------------------------------------------------------------------
// Styles (CSS-in-JS for portability)
// -----------------------------------------------------------------------------

const KEYFRAMES = `
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
