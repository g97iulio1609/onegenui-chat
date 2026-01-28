"use client";

import type { PlanStep } from "./styles";
import { icons, getAgentIcon } from "./icons";
import { styles } from "./styles";

export const StepItem = ({
  step,
  index,
  isCompleted,
  isActive,
  isSubtask = false,
}: {
  step: PlanStep;
  index: number;
  isCompleted: boolean;
  isActive: boolean;
  isSubtask?: boolean;
  completedSubtasks?: number[];
  activeSubtaskId?: number | null;
}) => (
  <div
    style={{
      ...styles.step,
      ...(isActive ? styles.stepActive : {}),
      ...(isCompleted ? styles.stepCompleted : {}),
      ...(isSubtask ? styles.subtask : {}),
    }}
  >
    <div style={styles.stepNumber}>{isSubtask ? "•" : index + 1}</div>
    <div
      style={{
        ...styles.stepStatus,
        ...(isActive ? styles.stepStatusActive : {}),
        ...(isCompleted ? styles.stepStatusCompleted : {}),
      }}
    >
      {isCompleted ? icons.check : isActive ? icons.loading : icons.pending}
    </div>
    <div style={styles.stepContent}>
      <span style={styles.stepTask}>{step.task}</span>
    </div>
    <div
      style={{
        ...styles.agentBadge,
        ...(isActive ? styles.agentBadgeActive : {}),
      }}
    >
      {step.parallel && icons.parallel}
      {getAgentIcon(step.agent)}
      <span>{step.agent}</span>
    </div>
  </div>
);
