"use client";

import type { QuestionPayload } from "@onegenui/react";
import { cn } from "../../utils/cn";
import {
  INPUT_CLASS,
  CONTAINER_CLASS,
  QUESTION_TEXT_CLASS,
  getQuickReplyButtonClass,
} from "./styles";

interface QuickReplyFormProps {
  question: QuestionPayload;
  selectedOptions: string[];
  isCustomMode: boolean;
  customValue: string;
  isSubmitting: boolean;
  onQuickReply: (optionValue: string) => void;
  onCustomToggle: (fieldId: string, show: boolean) => void;
  onCustomValueChange: (fieldId: string, value: string) => void;
  onSubmit: (answers: Record<string, unknown>) => void;
}

export function QuickReplyForm({
  question,
  selectedOptions,
  isCustomMode,
  customValue,
  isSubmitting,
  onQuickReply,
  onCustomToggle,
  onCustomValueChange,
  onSubmit,
}: QuickReplyFormProps) {
  return (
    <div className={CONTAINER_CLASS}>
      {question.text && (
        <div className={QUESTION_TEXT_CLASS}>{question.text}</div>
      )}
      <div className="flex flex-wrap gap-2">
        {question.options?.map((opt) => {
          const isSelected = question.multiple
            ? selectedOptions.includes(opt.value)
            : false;

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onQuickReply(opt.value)}
              disabled={isSubmitting}
              className={getQuickReplyButtonClass(opt.variant, isSelected)}
            >
              {opt.label}
            </button>
          );
        })}
        {question.allowCustom && (
          <button
            type="button"
            onClick={() => onCustomToggle("quick-reply", true)}
            disabled={isSubmitting}
            className={getQuickReplyButtonClass("default", isCustomMode)}
          >
            Other...
          </button>
        )}
      </div>

      {isCustomMode && (
        <div className="mt-3 flex gap-2 w-full">
          <input
            type="text"
            value={customValue || ""}
            onChange={(e) => onCustomValueChange("quick-reply", e.target.value)}
            placeholder="Type your answer..."
            className={cn(INPUT_CLASS, "flex-1")}
            disabled={isSubmitting}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && customValue?.trim()) {
                onSubmit({
                  selected: customValue.trim(),
                  isCustom: true,
                });
              }
            }}
          />
          <button
            type="button"
            onClick={() => {
              if (customValue?.trim()) {
                onSubmit({
                  selected: customValue.trim(),
                  isCustom: true,
                });
              }
            }}
            disabled={isSubmitting || !customValue?.trim()}
            className={cn(
              "px-5 py-2.5 rounded-lg border-none bg-primary text-primary-foreground text-sm font-medium cursor-pointer transition-all hover:bg-primary/90",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            )}
          >
            Send
          </button>
        </div>
      )}

      {question.multiple && selectedOptions.length > 0 && (
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={() => onSubmit({ selected: selectedOptions })}
            disabled={isSubmitting}
            className={cn(
              "px-5 py-2.5 rounded-lg border-none bg-primary text-primary-foreground text-sm font-medium cursor-pointer transition-all hover:bg-primary/90",
              isSubmitting && "opacity-60 cursor-wait",
            )}
          >
            Confirm ({selectedOptions.length})
          </button>
        </div>
      )}
    </div>
  );
}
