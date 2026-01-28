"use client";

import { useState, useCallback, type FormEvent } from "react";
import type { QuestionPayload, FormField } from "@onegenui/react";
import {
  CONTAINER_CLASS,
  QUESTION_TEXT_CLASS,
  SUBMIT_BUTTON_CLASS,
} from "./styles";
import { FieldRenderer } from "./field-renderer";
import { QuickReplyForm } from "./quick-reply-form";

interface QuestionFormProps {
  question: QuestionPayload;
  onSubmit: (answers: Record<string, unknown>) => void;
  onSkip?: () => void;
  isSubmitting?: boolean;
}

export function QuestionForm({
  question,
  onSubmit,
  onSkip,
  isSubmitting = false,
}: QuestionFormProps) {
  const [showCustomInput, setShowCustomInput] = useState<
    Record<string, boolean>
  >({});
  const [customValues, setCustomValues] = useState<Record<string, string>>({});

  const [values, setValues] = useState<Record<string, unknown>>(() => {
    const initial: Record<string, unknown> = {};
    if (question.fields) {
      for (const field of question.fields) {
        if (field.defaultValue !== undefined) {
          initial[field.id] = field.defaultValue;
        } else if (field.type === "checkbox") {
          initial[field.id] = false;
        } else {
          initial[field.id] = "";
        }
      }
    }
    if (question.type === "quick-reply" && question.multiple) {
      initial["selected"] = [];
    }
    return initial;
  });

  const handleFieldChange = useCallback((fieldId: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [fieldId]: value }));
    if (value !== "__custom__") {
      setShowCustomInput((prev) => ({ ...prev, [fieldId]: false }));
    }
  }, []);

  const handleCustomToggle = useCallback((fieldId: string, show: boolean) => {
    setShowCustomInput((prev) => ({ ...prev, [fieldId]: show }));
    if (show) {
      setValues((prev) => ({ ...prev, [fieldId]: "__custom__" }));
    }
  }, []);

  const handleCustomValueChange = useCallback(
    (fieldId: string, value: string) => {
      setCustomValues((prev) => ({ ...prev, [fieldId]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const finalValues = { ...values };
      for (const [fieldId, isCustom] of Object.entries(showCustomInput)) {
        if (isCustom && customValues[fieldId]) {
          finalValues[fieldId] = customValues[fieldId];
        }
      }
      onSubmit(finalValues);
    },
    [onSubmit, values, showCustomInput, customValues],
  );

  const handleQuickReply = useCallback(
    (optionValue: string) => {
      if (question.multiple) {
        setValues((prev) => {
          const selected = (prev["selected"] as string[]) || [];
          if (selected.includes(optionValue)) {
            return {
              ...prev,
              selected: selected.filter((v) => v !== optionValue),
            };
          }
          return { ...prev, selected: [...selected, optionValue] };
        });
      } else {
        onSubmit({ selected: optionValue });
      }
    },
    [question.multiple, onSubmit],
  );

  // Text-based question (informational only)
  if (question.type === "text") {
    return (
      <div className={CONTAINER_CLASS}>
        <div className={QUESTION_TEXT_CLASS}>{question.text}</div>
      </div>
    );
  }

  // Quick Reply
  if (question.type === "quick-reply") {
    const selectedOptions = question.multiple
      ? (values["selected"] as string[]) || []
      : [];
    const isCustomMode = showCustomInput["quick-reply"];

    return (
      <QuickReplyForm
        question={question}
        selectedOptions={selectedOptions}
        isCustomMode={isCustomMode ?? false}
        customValue={customValues["quick-reply"] || ""}
        isSubmitting={isSubmitting}
        onQuickReply={handleQuickReply}
        onCustomToggle={handleCustomToggle}
        onCustomValueChange={handleCustomValueChange}
        onSubmit={onSubmit}
      />
    );
  }

  // Form-based question (default)
  const hasFields = question.fields && question.fields.length > 0;

  return (
    <div className={CONTAINER_CLASS}>
      {question.text && (
        <div className={QUESTION_TEXT_CLASS}>{question.text}</div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {hasFields ? (
          question.fields?.map((field) => (
            <div key={field.id} className="flex flex-col gap-1 w-full relative">
              {field.type !== "checkbox" && (
                <label className="text-xs font-medium text-muted-foreground">
                  {field.label}
                  {field.validation?.required && (
                    <span className="text-destructive ml-0.5"> *</span>
                  )}
                </label>
              )}
              <FieldRenderer
                field={field}
                value={values[field.id]}
                isSubmitting={isSubmitting}
                isCustomSelected={showCustomInput[field.id] ?? false}
                customValue={customValues[field.id] || ""}
                onFieldChange={handleFieldChange}
                onCustomToggle={handleCustomToggle}
                onCustomValueChange={handleCustomValueChange}
              />
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-1 w-full">
            <input
              type="text"
              value={(values["response"] as string) || ""}
              onChange={(e) => handleFieldChange("response", e.target.value)}
              placeholder="Type your response..."
              className="px-3 py-2.5 rounded-lg border border-white/10 bg-background text-foreground text-sm outline-none transition-colors focus:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed w-full"
              disabled={isSubmitting}
            />
          </div>
        )}
        <div className="flex gap-2 justify-end mt-2">
          {!question.required && onSkip && (
            <button
              type="button"
              onClick={onSkip}
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-lg border border-white/10 bg-transparent text-muted-foreground text-sm font-medium cursor-pointer transition-all hover:bg-white/5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Skip
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={SUBMIT_BUTTON_CLASS}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
