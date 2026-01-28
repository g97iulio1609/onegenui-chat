"use client";

import { memo } from "react";
import { icons } from "./icons";
import { StepItem } from "./step-item";
import {
  styles,
  keyframes,
  countAllSteps,
  type PlanningStatusProps,
} from "./styles";

export const PlanningStatus = memo<PlanningStatusProps>(
  function PlanningStatus({
    plan,
    activeStepId,
    activeSubtaskId,
    completedSteps,
    completedSubtasks = [],
    parallelLevel,
  }: PlanningStatusProps) {
    if (!plan) return null;

    const completedCount = completedSteps.length + completedSubtasks.length;
    const totalSteps = countAllSteps(plan.steps);
    const progress = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0;

    return (
      <div style={styles.container}>
        <style>{keyframes}</style>

        {/* Header with goal */}
        <div style={styles.header}>
          <div style={styles.headerLeft}>
            <div style={styles.iconWrapper}>{icons.plan}</div>
            <div style={styles.headerContent}>
              <span style={styles.label}>
                Execution Plan
                {parallelLevel !== null && parallelLevel !== undefined && (
                  <span style={styles.parallelBadge}>
                    ⚡ Parallel L{parallelLevel}
                  </span>
                )}
              </span>
              <span style={styles.goal}>{plan.goal}</span>
            </div>
          </div>
          <div style={styles.progressBadge}>
            {completedCount}/{totalSteps}
          </div>
        </div>

        {/* Progress bar */}
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>

        {/* Steps */}
        <div style={styles.steps}>
          {plan.steps.map((step, index) => {
            const isCompleted = completedSteps.includes(step.id);
            const isActive = activeStepId === step.id;

            return (
              <div key={step.id}>
                <StepItem
                  step={step}
                  index={index}
                  isCompleted={isCompleted}
                  isActive={isActive}
                  completedSubtasks={completedSubtasks}
                  activeSubtaskId={activeSubtaskId}
                />
                {/* Render subtasks if present */}
                {step.subtasks && step.subtasks.length > 0 && (
                  <div style={styles.subtasksContainer}>
                    {step.subtasks.map((subtask, subIndex) => (
                      <StepItem
                        key={subtask.id}
                        step={subtask}
                        index={subIndex}
                        isCompleted={completedSubtasks.includes(subtask.id)}
                        isActive={activeSubtaskId === subtask.id}
                        isSubtask
                        completedSubtasks={completedSubtasks}
                        activeSubtaskId={activeSubtaskId}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
