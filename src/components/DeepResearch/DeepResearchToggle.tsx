"use client";

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Zap, Sparkles, ChevronUp, X } from "lucide-react";
import { useStore } from "@onegenui/react";
import type { DeepResearchEffortLevel } from "@onegenui/react";
import { cn } from "../../utils/cn";

interface DeepResearchToggleProps {
  className?: string;
  compact?: boolean;
}

const EFFORT_CONFIG: Record<
  DeepResearchEffortLevel,
  { icon: typeof Search; label: string; time: string; color: string }
> = {
  standard: {
    icon: Search,
    label: "Standard",
    time: "~3 min",
    color: "text-blue-500",
  },
  deep: {
    icon: Zap,
    label: "Deep",
    time: "~10 min",
    color: "text-amber-500",
  },
  max: {
    icon: Sparkles,
    label: "Max",
    time: "~30 min",
    color: "text-purple-500",
  },
};

/**
 * Compact Deep Research toggle for chat input bar
 */
export const DeepResearchToggle = memo(function DeepResearchToggle({
  className,
  compact = true,
}: DeepResearchToggleProps) {
  const [showOptions, setShowOptions] = useState(false);

  const enabled = useStore((s) => s.deepResearchSettings.enabled);
  const effortLevel = useStore((s) => s.deepResearchSettings.effortLevel);
  const setEnabled = useStore((s) => s.setDeepResearchEnabled);
  const setEffortLevel = useStore((s) => s.setDeepResearchEffortLevel);

  const config = EFFORT_CONFIG[effortLevel];
  const Icon = config.icon;

  const handleToggle = useCallback(() => {
    if (!enabled) {
      setEnabled(true);
    } else {
      setShowOptions((prev) => !prev);
    }
  }, [enabled, setEnabled]);

  const handleDisable = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setEnabled(false);
      setShowOptions(false);
    },
    [setEnabled],
  );

  const handleSelectLevel = useCallback(
    (level: DeepResearchEffortLevel) => {
      setEffortLevel(level);
      setShowOptions(false);
    },
    [setEffortLevel],
  );

  if (compact) {
    return (
      <div className={cn("relative", className)}>
        {/* Main Toggle Button */}
        <button
          type="button"
          onClick={handleToggle}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all",
            enabled
              ? "bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25"
              : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent",
          )}
          title={
            enabled ? `Deep Research: ${config.label}` : "Enable Deep Research"
          }
        >
          <Icon size={14} className={enabled ? config.color : ""} />
          {enabled && (
            <>
              <span className="hidden sm:inline">{config.label}</span>
              <ChevronUp
                size={12}
                className={cn(
                  "transition-transform",
                  showOptions ? "rotate-180" : "",
                )}
              />
            </>
          )}
          {!enabled && <span className="hidden sm:inline">Research</span>}
        </button>

        {/* Disable button when enabled */}
        {enabled && (
          <button
            type="button"
            onClick={handleDisable}
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-muted-foreground/20 hover:bg-destructive/20 hover:text-destructive flex items-center justify-center transition-colors"
            title="Disable Deep Research"
          >
            <X size={10} />
          </button>
        )}

        {/* Effort Level Popup */}
        <AnimatePresence>
          {showOptions && enabled && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute bottom-full left-0 mb-2 p-1.5 bg-popover border border-border rounded-lg shadow-lg z-50 min-w-[140px]"
            >
              {(Object.keys(EFFORT_CONFIG) as DeepResearchEffortLevel[]).map(
                (level) => {
                  const levelConfig = EFFORT_CONFIG[level];
                  const LevelIcon = levelConfig.icon;
                  const isSelected = level === effortLevel;

                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => handleSelectLevel(level)}
                      className={cn(
                        "flex items-center gap-2 w-full px-2.5 py-2 rounded-md text-xs transition-colors",
                        isSelected
                          ? "bg-primary/15 text-primary"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <LevelIcon size={14} className={levelConfig.color} />
                      <span className="flex-1 text-left font-medium">
                        {levelConfig.label}
                      </span>
                      <span className="text-[10px] opacity-60">
                        {levelConfig.time}
                      </span>
                    </button>
                  );
                },
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click outside to close */}
        {showOptions && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowOptions(false)}
          />
        )}
      </div>
    );
  }

  // Non-compact version (full width)
  return (
    <div
      className={cn(
        "flex items-center gap-2 p-2 rounded-lg border",
        enabled
          ? "border-primary/30 bg-primary/5"
          : "border-border bg-muted/30",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setEnabled(!enabled)}
        className={cn(
          "w-8 h-4 rounded-full transition-colors relative",
          enabled ? "bg-primary" : "bg-muted-foreground/30",
        )}
      >
        <motion.span
          className="absolute top-0.5 w-3 h-3 rounded-full bg-white shadow"
          animate={{ left: enabled ? 16 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>

      <div className="flex items-center gap-1.5 flex-1">
        <Search
          size={14}
          className={enabled ? "text-primary" : "text-muted-foreground"}
        />
        <span
          className={cn(
            "text-xs font-medium",
            enabled ? "text-foreground" : "text-muted-foreground",
          )}
        >
          Deep Research
        </span>
      </div>

      {enabled && (
        <div className="flex gap-1">
          {(Object.keys(EFFORT_CONFIG) as DeepResearchEffortLevel[]).map(
            (level) => {
              const levelConfig = EFFORT_CONFIG[level];
              const LevelIcon = levelConfig.icon;
              const isSelected = level === effortLevel;

              return (
                <button
                  key={level}
                  type="button"
                  onClick={() => setEffortLevel(level)}
                  className={cn(
                    "p-1.5 rounded transition-colors",
                    isSelected
                      ? "bg-primary/20 text-primary"
                      : "hover:bg-muted text-muted-foreground",
                  )}
                  title={`${levelConfig.label} (${levelConfig.time})`}
                >
                  <LevelIcon size={14} />
                </button>
              );
            },
          )}
        </div>
      )}
    </div>
  );
});
