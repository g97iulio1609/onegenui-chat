"use client";

import { memo } from "react";
import type { ToolProgress } from "@onegenui/react";
import { cn } from "../utils/cn";

export interface ToolProgressIndicatorProps {
  toolProgress: ToolProgress[];
  className?: string;
}

const toolIcons: Record<string, string> = {
  "web-search": "search",
  "web-scrape": "file-text",
  "search-flight": "plane",
  "search-hotel": "building",
  "deep-research": "microscope",
  calendar: "calendar",
  gmail: "mail",
  default: "zap",
};

const toolLabels: Record<string, string> = {
  "web-search": "Web Search",
  "web-scrape": "Reading Page",
  "search-flight": "Flight Search",
  "search-hotel": "Hotel Search",
  "deep-research": "Deep Research",
  calendar: "Calendar",
  gmail: "Email",
};

/**
 * ToolProgressIndicator Component
 *
 * Shows real-time progress of tool executions (web search, flights, etc.)
 */
export const ToolProgressIndicator = memo(function ToolProgressIndicator({
  toolProgress,
  className,
}: ToolProgressIndicatorProps) {
  if (!toolProgress || toolProgress.length === 0) {
    return null;
  }

  // Get unique tools by toolCallId, keeping only the latest status
  const latestByCallId = new Map<string, ToolProgress>();
  for (const progress of toolProgress) {
    latestByCallId.set(progress.toolCallId, progress);
  }

  // Filter to show only active (non-complete) tools, or the most recent complete
  const activeTools = Array.from(latestByCallId.values()).filter(
    (p) => p.status !== "complete" && p.status !== "error",
  );

  // If no active tools, show nothing (completed tools don't need indicator)
  if (activeTools.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-col gap-2 px-4 py-3", className)}>
      {activeTools.map((progress) => (
        <ToolProgressItem key={progress.toolCallId} progress={progress} />
      ))}
    </div>
  );
});

const ToolProgressItem = memo(function ToolProgressItem({
  progress,
}: {
  progress: ToolProgress;
}) {
  const label = toolLabels[progress.toolName] || progress.toolName;
  const isStarting = progress.status === "starting";
  const isProgress = progress.status === "progress";
  const isDeepResearch = progress.toolName === "deep-research";
  const progressPercent = progress.progress ?? 0;

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-2.5 rounded-xl",
        "bg-white/5 border border-white/10 backdrop-blur-sm",
        "animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
      )}
    >
      {/* Animated icon */}
      <div className="relative">
        <div
          className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center",
            "bg-primary/20 text-primary",
          )}
        >
          <ToolIcon toolName={progress.toolName} />
        </div>
        {(isStarting || isProgress) && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">{label}</span>
          {(isStarting || isProgress) && (
            <span className="flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1 h-1 rounded-full bg-primary/60 animate-bounce"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: "1s",
                  }}
                />
              ))}
            </span>
          )}
        </div>
        {progress.message && (
          <p className="text-xs text-muted-foreground truncate mt-0.5">
            {progress.message}
          </p>
        )}
        {/* Progress bar for deep research */}
        {isDeepResearch && isProgress && progressPercent > 0 && (
          <div className="mt-2 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
});

const ToolIcon = memo(function ToolIcon({ toolName }: { toolName: string }) {
  // Simple SVG icons for common tools
  switch (toolName) {
    case "web-search":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "web-scrape":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case "search-flight":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      );
    case "search-hotel":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path d="M10 6h4" />
          <path d="M10 10h4" />
          <path d="M10 14h4" />
          <path d="M10 18h4" />
        </svg>
      );
    case "deep-research":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="1" />
          <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
          <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
        </svg>
      );
    default:
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
        </svg>
      );
  }
});
