"use client";

import { memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Settings2,
  Zap,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Link2,
  BarChart3,
  Network,
} from "lucide-react";
import { useStore } from "@onegenui/react";
import type { DeepResearchEffortLevel } from "@onegenui/react";
import { cn } from "../../utils/cn";

interface DeepResearchSettingsProps {
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  className?: string;
}

const EFFORT_LEVELS: {
  value: DeepResearchEffortLevel;
  label: string;
  time: string;
  description: string;
  icon: typeof Zap;
}[] = [
  {
    value: "standard",
    label: "Standard",
    time: "~3 min",
    description: "Comprehensive multi-source analysis",
    icon: Search,
  },
  {
    value: "deep",
    label: "Deep",
    time: "~10 min",
    description: "Advanced exploration with verification",
    icon: Zap,
  },
  {
    value: "max",
    label: "Max",
    time: "~30 min",
    description: "State-of-the-art exhaustive research",
    icon: Sparkles,
  },
];

export const DeepResearchSettings = memo(function DeepResearchSettings({
  isExpanded = false,
  onToggleExpand,
  className,
}: DeepResearchSettingsProps) {
  const settings = useStore((s) => s.deepResearchSettings);
  const setEnabled = useStore((s) => s.setDeepResearchEnabled);
  const setEffortLevel = useStore((s) => s.setDeepResearchEffortLevel);
  const setSettings = useStore((s) => s.setDeepResearchSettings);

  const handleToggle = useCallback(() => {
    setEnabled(!settings.enabled);
  }, [settings.enabled, setEnabled]);

  return (
    <div className={cn("rounded-lg border border-border bg-card", className)}>
      {/* Header with Toggle */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-primary" />
          <span className="font-medium text-sm">Deep Research</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggle}
            className={cn(
              "relative w-10 h-5 rounded-full transition-colors",
              settings.enabled ? "bg-primary" : "bg-muted",
            )}
            aria-label={
              settings.enabled
                ? "Disable Deep Research"
                : "Enable Deep Research"
            }
          >
            <motion.span
              className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow"
              animate={{ left: settings.enabled ? 22 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          {onToggleExpand && (
            <button
              type="button"
              onClick={onToggleExpand}
              className="p-1 rounded hover:bg-muted text-muted-foreground"
              aria-label={isExpanded ? "Collapse settings" : "Expand settings"}
            >
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence>
        {settings.enabled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {/* Effort Level Selection */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">
                  Research Effort Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {EFFORT_LEVELS.map((level) => {
                    const Icon = level.icon;
                    const isSelected = settings.effortLevel === level.value;
                    return (
                      <button
                        key={level.value}
                        type="button"
                        onClick={() => setEffortLevel(level.value)}
                        className={cn(
                          "flex flex-col items-center gap-1 p-3 rounded-lg border transition-all",
                          isSelected
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-muted-foreground/50 text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <Icon size={18} />
                        <span className="text-xs font-medium">
                          {level.label}
                        </span>
                        <span className="text-[10px] opacity-70">
                          {level.time}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-muted-foreground">
                  {
                    EFFORT_LEVELS.find((l) => l.value === settings.effortLevel)
                      ?.description
                  }
                </p>
              </div>

              {/* Advanced Options */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-4 overflow-hidden"
                  >
                    {/* Max Steps Slider */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-medium text-muted-foreground">
                          Max Steps
                        </label>
                        <span className="text-xs text-foreground">
                          {settings.maxSteps}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={10}
                        max={200}
                        step={10}
                        value={settings.maxSteps}
                        onChange={(e) =>
                          setSettings({
                            maxSteps: parseInt(e.target.value, 10),
                          })
                        }
                        className="w-full h-1.5 rounded-full bg-muted appearance-none cursor-pointer accent-primary"
                      />
                    </div>

                    {/* Parallel Requests Slider */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-medium text-muted-foreground">
                          Parallel Requests
                        </label>
                        <span className="text-xs text-foreground">
                          {settings.parallelRequests}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={20}
                        step={1}
                        value={settings.parallelRequests}
                        onChange={(e) =>
                          setSettings({
                            parallelRequests: parseInt(e.target.value, 10),
                          })
                        }
                        className="w-full h-1.5 rounded-full bg-muted appearance-none cursor-pointer accent-primary"
                      />
                    </div>

                    {/* Feature Toggles */}
                    <div className="space-y-2">
                      <FeatureToggle
                        label="Auto-stop on quality threshold"
                        icon={<Zap size={14} />}
                        enabled={settings.autoStopOnQuality}
                        onChange={(enabled) =>
                          setSettings({ autoStopOnQuality: enabled })
                        }
                      />
                      <FeatureToggle
                        label="Include visualizations"
                        icon={<BarChart3 size={14} />}
                        enabled={settings.includeVisualizations}
                        onChange={(enabled) =>
                          setSettings({ includeVisualizations: enabled })
                        }
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

// Feature Toggle Sub-component
interface FeatureToggleProps {
  label: string;
  icon: React.ReactNode;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const FeatureToggle = memo(function FeatureToggle({
  label,
  icon,
  enabled,
  onChange,
}: FeatureToggleProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-muted/50 transition-colors"
    >
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        {icon}
        <span>{label}</span>
      </div>
      <div
        className={cn(
          "w-8 h-4 rounded-full transition-colors relative",
          enabled ? "bg-primary" : "bg-muted",
        )}
      >
        <motion.span
          className="absolute top-0.5 w-3 h-3 rounded-full bg-white shadow"
          animate={{ left: enabled ? 16 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
    </button>
  );
});
