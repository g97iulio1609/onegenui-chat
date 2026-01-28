"use client";

import { useCallback } from "react";
import type { FormField } from "@onegenui/react";
import { cn } from "../../utils/cn";
import { INPUT_CLASS } from "./styles";

interface FieldRendererProps {
  field: FormField;
  value: unknown;
  isSubmitting: boolean;
  isCustomSelected: boolean;
  customValue: string;
  onFieldChange: (fieldId: string, value: unknown) => void;
  onCustomToggle: (fieldId: string, show: boolean) => void;
  onCustomValueChange: (fieldId: string, value: string) => void;
}

export function FieldRenderer({
  field,
  value,
  isSubmitting,
  isCustomSelected,
  customValue,
  onFieldChange,
  onCustomToggle,
  onCustomValueChange,
}: FieldRendererProps) {
  switch (field.type) {
    case "text":
    case "date":
      return (
        <input
          type={field.type}
          value={(value as string) || ""}
          onChange={(e) => onFieldChange(field.id, e.target.value)}
          placeholder={field.placeholder}
          className={INPUT_CLASS}
          disabled={isSubmitting}
          required={field.validation?.required}
          minLength={field.validation?.minLength}
          maxLength={field.validation?.maxLength}
          pattern={field.validation?.pattern}
        />
      );

    case "number":
      return (
        <input
          type="number"
          value={(value as number) ?? ""}
          onChange={(e) =>
            onFieldChange(field.id, e.target.valueAsNumber || "")
          }
          placeholder={field.placeholder}
          className={INPUT_CLASS}
          disabled={isSubmitting}
          required={field.validation?.required}
          min={field.validation?.min}
          max={field.validation?.max}
        />
      );

    case "textarea":
      return (
        <textarea
          value={(value as string) || ""}
          onChange={(e) => onFieldChange(field.id, e.target.value)}
          placeholder={field.placeholder}
          className={cn(INPUT_CLASS, "min-h-[80px] resize-y")}
          disabled={isSubmitting}
          required={field.validation?.required}
          minLength={field.validation?.minLength}
          maxLength={field.validation?.maxLength}
        />
      );

    case "select":
      return (
        <div className="flex flex-col gap-2 w-full">
          <select
            value={isCustomSelected ? "__custom__" : (value as string) || ""}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "__custom__" && field.allowCustom) {
                onCustomToggle(field.id, true);
              } else {
                onFieldChange(field.id, val);
              }
            }}
            className={cn(INPUT_CLASS, "cursor-pointer")}
            disabled={isSubmitting}
            required={field.validation?.required && !isCustomSelected}
          >
            <option value="">
              {field.placeholder || "Select an option..."}
            </option>
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
            {field.allowCustom && <option value="__custom__">Other...</option>}
          </select>
          {isCustomSelected && (
            <input
              type="text"
              value={customValue || ""}
              onChange={(e) => onCustomValueChange(field.id, e.target.value)}
              placeholder="Type your answer..."
              className={INPUT_CLASS}
              disabled={isSubmitting}
              autoFocus
              required={field.validation?.required}
            />
          )}
        </div>
      );

    case "checkbox":
      return (
        <label className="flex items-center gap-2 cursor-pointer w-fit select-none">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onFieldChange(field.id, e.target.checked)}
            disabled={isSubmitting}
            className="w-4 h-4 cursor-pointer accent-primary form-checkbox rounded"
          />
          <span className="text-sm text-foreground">{field.label}</span>
        </label>
      );

    case "radio":
      return (
        <div className="flex flex-col gap-1.5">
          {field.options?.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer text-sm text-foreground select-none w-fit"
            >
              <input
                type="radio"
                name={field.id}
                value={opt.value}
                checked={value === opt.value && !isCustomSelected}
                onChange={(e) => onFieldChange(field.id, e.target.value)}
                disabled={isSubmitting}
                className="w-4 h-4 accent-primary form-radio"
              />
              {opt.label}
            </label>
          ))}
          {field.allowCustom && (
            <>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground select-none w-fit">
                <input
                  type="radio"
                  name={field.id}
                  value="__custom__"
                  checked={isCustomSelected}
                  onChange={() => onCustomToggle(field.id, true)}
                  disabled={isSubmitting}
                  className="w-4 h-4 accent-primary form-radio"
                />
                Other
              </label>
              {isCustomSelected && (
                <input
                  type="text"
                  value={customValue || ""}
                  onChange={(e) =>
                    onCustomValueChange(field.id, e.target.value)
                  }
                  placeholder="Type your answer..."
                  className={cn(INPUT_CLASS, "ml-6 w-[calc(100%-1.5rem)]")}
                  disabled={isSubmitting}
                  autoFocus
                  required={field.validation?.required}
                />
              )}
            </>
          )}
        </div>
      );

    default:
      return null;
  }
}
