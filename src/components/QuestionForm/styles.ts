import { cn } from "../../utils/cn";

export const BUTTON_BASE_CLASS =
  "px-3 sm:px-4 py-2 rounded-full border text-[12px] sm:text-[13px] font-medium cursor-pointer transition-all disabled:opacity-60 disabled:cursor-not-allowed";

export const INPUT_CLASS =
  "px-3 py-2 sm:py-2.5 rounded-lg border border-white/10 bg-background text-foreground text-[13px] sm:text-sm outline-none transition-colors focus:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed w-full";

export const CONTAINER_CLASS =
  "p-3 sm:p-4 rounded-xl bg-blue-500/5 sm:bg-blue-500/10 border border-blue-500/20 mt-2";

export const QUESTION_TEXT_CLASS =
  "text-[13px] sm:text-sm font-medium text-foreground mb-2 sm:mb-3";

export const SUBMIT_BUTTON_CLASS =
  "px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border-none bg-primary text-primary-foreground text-[13px] sm:text-sm font-medium cursor-pointer transition-all hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed";

export function getQuickReplyButtonClass(
  variant: string = "default",
  isSelected: boolean,
): string {
  const variants: Record<string, string> = {
    default: isSelected
      ? "bg-white/15 border-white/15 text-foreground"
      : "bg-white/5 border-white/15 text-foreground hover:bg-white/10",
    primary: isSelected
      ? "bg-blue-500/25 border-blue-500/30 text-foreground"
      : "bg-blue-500/10 border-blue-500/30 text-foreground hover:bg-blue-500/20",
    success: isSelected
      ? "bg-green-500/25 border-green-500/30 text-green-500"
      : "bg-green-500/10 border-green-500/30 text-green-500 hover:bg-green-500/20",
    danger: isSelected
      ? "bg-red-500/25 border-red-500/30 text-red-500"
      : "bg-red-500/10 border-red-500/30 text-red-500 hover:bg-red-500/20",
  };

  const variantClass = variants[variant] || variants.default;
  return cn(BUTTON_BASE_CLASS, variantClass);
}
