"use client";

import { memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  StopCircle,
  CheckCircle2,
  XCircle,
  Clock,
  FileText,
  Loader2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { useStore } from "@onegenui/react";
import type { ResearchPhase, ResearchSource } from "@onegenui/react";
import { cn } from "../../utils/cn";

interface DeepResearchProgressProps {
  className?: string;
  showSources?: boolean;
}

const PHASE_ICONS: Record<string, typeof Search> = {
  "Query Decomposition": Search,
  "Source Discovery": FileText,
  "Content Extraction": FileText,
  Analysis: Search,
  Synthesis: FileText,
  Visualization: FileText,
};

export const DeepResearchProgress = memo(function DeepResearchProgress({
  className,
  showSources = true,
}: DeepResearchProgressProps) {
  const activeResearch = useStore((s) => s.activeResearch);
  const stopResearch = useStore((s) => s.stopResearch);

  if (!activeResearch) return null;

  const {
    query,
    effortLevel,
    status,
    startTime,
    estimatedTime,
    progress,
    currentPhase,
    phases,
    sources,
    sourcesTarget,
    error,
  } = activeResearch;

  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  const remainingTime = Math.max(0, estimatedTime - elapsedTime);

  const isComplete = status === "complete";
  const isError = status === "error";
  const isStopped = status === "stopped";
  const isActive = !isComplete && !isError && !isStopped;

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card overflow-hidden",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          {isActive ? (
            <Loader2 className="w-4 h-4 text-primary animate-spin" />
          ) : isComplete ? (
            <CheckCircle2 className="w-4 h-4 text-green-500" />
          ) : isError ? (
            <XCircle className="w-4 h-4 text-destructive" />
          ) : (
            <StopCircle className="w-4 h-4 text-yellow-500" />
          )}
          <span className="font-medium text-sm">Deep Research</span>
          <span className="text-xs text-muted-foreground capitalize px-2 py-0.5 rounded bg-muted">
            {effortLevel}
          </span>
        </div>
        {isActive && (
          <button
            type="button"
            onClick={stopResearch}
            className="flex items-center gap-1 px-2 py-1 text-xs text-destructive hover:bg-destructive/10 rounded transition-colors"
          >
            <StopCircle size={14} />
            Stop
          </button>
        )}
      </div>

      {/* Query */}
      <div className="px-4 py-2 border-b border-border">
        <p className="text-sm text-foreground line-clamp-2">{query}</p>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-3 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{currentPhase}</span>
          <span className="text-foreground font-medium">{progress}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className={cn(
              "h-full rounded-full",
              isError
                ? "bg-destructive"
                : isComplete
                  ? "bg-green-500"
                  : "bg-primary",
            )}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        {isActive && (
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>~{formatTime(remainingTime)} remaining</span>
            </div>
            <span>
              {sources.length}/{sourcesTarget} sources
            </span>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="px-4 py-2 bg-destructive/10 border-t border-destructive/20">
          <p className="text-xs text-destructive">{error}</p>
        </div>
      )}

      {/* Phases */}
      <PhaseList phases={phases} />

      {/* Sources */}
      {showSources && sources.length > 0 && <SourceList sources={sources} />}
    </div>
  );
});

// Phase List Sub-component
const PhaseList = memo(function PhaseList({
  phases,
}: {
  phases: ResearchPhase[];
}) {
  return (
    <div className="px-4 py-3 border-t border-border space-y-2">
      {phases.map((phase) => {
        const Icon = PHASE_ICONS[phase.name] || Search;
        return (
          <div key={phase.name} className="flex items-center gap-2">
            <PhaseIcon status={phase.status} Icon={Icon} />
            <span
              className={cn(
                "text-xs flex-1",
                phase.status === "complete"
                  ? "text-muted-foreground"
                  : phase.status === "running"
                    ? "text-foreground font-medium"
                    : "text-muted-foreground/60",
              )}
            >
              {phase.name}
            </span>
            {phase.status === "running" && (
              <span className="text-[10px] text-primary">
                {phase.progress}%
              </span>
            )}
            {phase.status === "complete" &&
              phase.endTime &&
              phase.startTime && (
                <span className="text-[10px] text-muted-foreground">
                  {((phase.endTime - phase.startTime) / 1000).toFixed(1)}s
                </span>
              )}
          </div>
        );
      })}
    </div>
  );
});

// Phase Icon Sub-component
const PhaseIcon = memo(function PhaseIcon({
  status,
  Icon,
}: {
  status: ResearchPhase["status"];
  Icon: typeof Search;
}) {
  if (status === "complete") {
    return <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />;
  }
  if (status === "running") {
    return <Loader2 className="w-3.5 h-3.5 text-primary animate-spin" />;
  }
  if (status === "error") {
    return <XCircle className="w-3.5 h-3.5 text-destructive" />;
  }
  return <Icon className="w-3.5 h-3.5 text-muted-foreground/40" />;
});

// Source List Sub-component
const SourceList = memo(function SourceList({
  sources,
}: {
  sources: ResearchSource[];
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleSources = expanded ? sources : sources.slice(0, 5);

  return (
    <div className="border-t border-border">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full px-4 py-2 text-xs text-muted-foreground hover:bg-muted/30 transition-colors"
      >
        <span>Sources ({sources.length})</span>
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      <AnimatePresence>
        {(expanded || sources.length <= 5) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 space-y-1.5">
              {visibleSources.map((source) => (
                <SourceItem key={source.id} source={source} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

// Source Item Sub-component
const SourceItem = memo(function SourceItem({
  source,
}: {
  source: ResearchSource;
}) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <SourceStatusIcon status={source.status} />
      <span className="flex-1 truncate text-muted-foreground">
        {source.domain}
      </span>
      <div className="flex items-center gap-1">
        <span
          className={cn(
            "px-1.5 py-0.5 rounded text-[10px]",
            source.credibility >= 0.8
              ? "bg-green-500/10 text-green-600"
              : source.credibility >= 0.6
                ? "bg-yellow-500/10 text-yellow-600"
                : "bg-muted text-muted-foreground",
          )}
        >
          {Math.round(source.credibility * 100)}%
        </span>
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-0.5 hover:text-primary transition-colors"
        >
          <ExternalLink size={10} />
        </a>
      </div>
    </div>
  );
});

// Source Status Icon
const SourceStatusIcon = memo(function SourceStatusIcon({
  status,
}: {
  status: ResearchSource["status"];
}) {
  switch (status) {
    case "complete":
      return <CheckCircle2 className="w-3 h-3 text-green-500" />;
    case "fetching":
    case "analyzing":
      return <Loader2 className="w-3 h-3 text-primary animate-spin" />;
    case "error":
      return <XCircle className="w-3 h-3 text-destructive" />;
    default:
      return <div className="w-3 h-3 rounded-full bg-muted" />;
  }
});

// Helper to format time
function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
}

// Need useState for SourceList
import { useState } from "react";
