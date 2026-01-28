"use client";

import { memo, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  FileText,
  Quote,
  Network,
  BarChart3,
  Clock,
  Users,
  AlertTriangle,
  Lightbulb,
  Copy,
  Check,
} from "lucide-react";
import { cn } from "../../utils/cn";

// =============================================================================
// Types
// =============================================================================

interface Citation {
  id: string;
  number: number;
  url: string;
  title: string;
  domain: string;
  snippet?: string;
  authors?: string[];
  date?: string;
}

interface ReportSection {
  id: string;
  title: string;
  content: string;
  citations: number[];
}

interface KeyFinding {
  id: string;
  title: string;
  description: string;
  confidence: number;
  citations: number[];
}

interface RelatedQuestion {
  id: string;
  question: string;
}

export interface DeepResearchReportData {
  id: string;
  query: string;
  summary: string;
  sections: ReportSection[];
  keyFindings: KeyFinding[];
  citations: Citation[];
  relatedQuestions: RelatedQuestion[];
  generatedAt: number;
  sourcesCount: number;
  qualityScore: number;
  // Optional visualizations
  mindMap?: unknown;
  charts?: unknown[];
  timeline?: unknown[];
}

interface DeepResearchReportProps {
  report: DeepResearchReportData;
  className?: string;
  onRelatedQuestionClick?: (question: string) => void;
}

// =============================================================================
// Main Component
// =============================================================================

export const DeepResearchReport = memo(function DeepResearchReport({
  report,
  className,
  onRelatedQuestionClick,
}: DeepResearchReportProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(report.sections.slice(0, 2).map((s) => s.id)),
  );
  const [showAllCitations, setShowAllCitations] = useState(false);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const citationMap = useMemo(() => {
    const map = new Map<number, Citation>();
    for (const citation of report.citations) {
      map.set(citation.number, citation);
    }
    return map;
  }, [report.citations]);

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card overflow-hidden",
        className,
      )}
    >
      {/* Header */}
      <ReportHeader report={report} />

      {/* Summary */}
      <div className="px-6 py-4 border-b border-border">
        <h3 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
          <BookOpen size={16} className="text-primary" />
          Summary
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {report.summary}
        </p>
      </div>

      {/* Key Findings */}
      {report.keyFindings.length > 0 && (
        <KeyFindingsSection
          findings={report.keyFindings}
          citationMap={citationMap}
        />
      )}

      {/* Sections */}
      <div className="divide-y divide-border">
        {report.sections.map((section) => (
          <ReportSectionItem
            key={section.id}
            section={section}
            isExpanded={expandedSections.has(section.id)}
            onToggle={() => toggleSection(section.id)}
            citationMap={citationMap}
          />
        ))}
      </div>

      {/* Citations */}
      <CitationsSection
        citations={report.citations}
        showAll={showAllCitations}
        onToggleShowAll={() => setShowAllCitations(!showAllCitations)}
      />

      {/* Related Questions */}
      {report.relatedQuestions.length > 0 && (
        <RelatedQuestionsSection
          questions={report.relatedQuestions}
          onQuestionClick={onRelatedQuestionClick}
        />
      )}
    </div>
  );
});

// =============================================================================
// Sub-components
// =============================================================================

const ReportHeader = memo(function ReportHeader({
  report,
}: {
  report: DeepResearchReportData;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `${report.query}\n\n${report.summary}\n\n${report.sections.map((s) => `## ${s.title}\n${s.content}`).join("\n\n")}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-6 py-4 bg-muted/30 border-b border-border">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-semibold text-foreground mb-2">
            {report.query}
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <FileText size={12} />
              {report.sourcesCount} sources
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {new Date(report.generatedAt).toLocaleDateString()}
            </span>
            <span
              className={cn(
                "flex items-center gap-1 px-1.5 py-0.5 rounded",
                report.qualityScore >= 0.85
                  ? "bg-green-500/10 text-green-600"
                  : report.qualityScore >= 0.7
                    ? "bg-yellow-500/10 text-yellow-600"
                    : "bg-muted text-muted-foreground",
              )}
            >
              Quality: {Math.round(report.qualityScore * 100)}%
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
        >
          {copied ? (
            <Check size={14} className="text-green-500" />
          ) : (
            <Copy size={14} />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
});

const KeyFindingsSection = memo(function KeyFindingsSection({
  findings,
  citationMap,
}: {
  findings: KeyFinding[];
  citationMap: Map<number, Citation>;
}) {
  return (
    <div className="px-6 py-4 border-b border-border bg-primary/5">
      <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
        <Lightbulb size={16} className="text-primary" />
        Key Findings
      </h3>
      <div className="space-y-3">
        {findings.map((finding) => (
          <div key={finding.id} className="flex gap-3">
            <div
              className={cn(
                "w-1 rounded-full flex-shrink-0",
                finding.confidence >= 0.8
                  ? "bg-green-500"
                  : finding.confidence >= 0.6
                    ? "bg-yellow-500"
                    : "bg-muted-foreground",
              )}
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-foreground">
                {finding.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                {finding.description}
              </p>
              {finding.citations.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {finding.citations.map((num) => (
                    <CitationBadge
                      key={num}
                      number={num}
                      citation={citationMap.get(num)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

const ReportSectionItem = memo(function ReportSectionItem({
  section,
  isExpanded,
  onToggle,
  citationMap,
}: {
  section: ReportSection;
  isExpanded: boolean;
  onToggle: () => void;
  citationMap: Map<number, Citation>;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-2 w-full px-6 py-3 text-left hover:bg-muted/30 transition-colors"
      >
        {isExpanded ? (
          <ChevronDown size={16} className="text-muted-foreground" />
        ) : (
          <ChevronRight size={16} className="text-muted-foreground" />
        )}
        <span className="text-sm font-medium text-foreground">
          {section.title}
        </span>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pl-12">
              <ContentWithCitations
                content={section.content}
                citationMap={citationMap}
              />
              {section.citations.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-border/50">
                  {section.citations.map((num) => (
                    <CitationBadge
                      key={num}
                      number={num}
                      citation={citationMap.get(num)}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

const ContentWithCitations = memo(function ContentWithCitations({
  content,
  citationMap,
}: {
  content: string;
  citationMap: Map<number, Citation>;
}) {
  // Parse content for citation references like [1], [2,3], etc.
  const parts = content.split(/(\[\d+(?:,\s*\d+)*\])/g);

  return (
    <p className="text-sm text-muted-foreground leading-relaxed">
      {parts.map((part, i) => {
        const match = part.match(/^\[(\d+(?:,\s*\d+)*)\]$/);
        if (match) {
          const nums = match[1]!.split(/,\s*/).map(Number);
          return (
            <span key={i} className="inline-flex gap-0.5">
              {nums.map((num) => (
                <CitationBadge
                  key={num}
                  number={num}
                  citation={citationMap.get(num)}
                  inline
                />
              ))}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
});

const CitationBadge = memo(function CitationBadge({
  number,
  citation,
  inline = false,
}: {
  number: number;
  citation?: Citation;
  inline?: boolean;
}) {
  if (!citation) {
    return (
      <span
        className={cn(
          "text-[10px] text-primary",
          inline ? "align-super" : "px-1.5 py-0.5 rounded bg-primary/10",
        )}
      >
        [{number}]
      </span>
    );
  }

  return (
    <a
      href={citation.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${citation.title} (${citation.domain})`}
      className={cn(
        "text-[10px] text-primary hover:text-primary/80 transition-colors",
        inline
          ? "align-super"
          : "px-1.5 py-0.5 rounded bg-primary/10 hover:bg-primary/20",
      )}
    >
      [{number}]
    </a>
  );
});

const CitationsSection = memo(function CitationsSection({
  citations,
  showAll,
  onToggleShowAll,
}: {
  citations: Citation[];
  showAll: boolean;
  onToggleShowAll: () => void;
}) {
  const visibleCitations = showAll ? citations : citations.slice(0, 5);

  return (
    <div className="border-t border-border">
      <div className="px-6 py-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
          <Quote size={16} className="text-muted-foreground" />
          Sources ({citations.length})
        </h3>
        {citations.length > 5 && (
          <button
            type="button"
            onClick={onToggleShowAll}
            className="text-xs text-primary hover:text-primary/80"
          >
            {showAll ? "Show less" : `Show all ${citations.length}`}
          </button>
        )}
      </div>
      <div className="px-6 pb-4 space-y-2">
        {visibleCitations.map((citation) => (
          <a
            key={citation.id}
            href={citation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors group"
          >
            <span className="text-xs text-primary font-medium">
              [{citation.number}]
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {citation.title}
                </span>
                <ExternalLink
                  size={12}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="text-xs text-muted-foreground">
                {citation.domain}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
});

const RelatedQuestionsSection = memo(function RelatedQuestionsSection({
  questions,
  onQuestionClick,
}: {
  questions: RelatedQuestion[];
  onQuestionClick?: (question: string) => void;
}) {
  return (
    <div className="px-6 py-4 border-t border-border bg-muted/20">
      <h3 className="text-sm font-medium text-foreground mb-3">
        Related Questions
      </h3>
      <div className="flex flex-wrap gap-2">
        {questions.map((q) => (
          <button
            key={q.id}
            type="button"
            onClick={() => onQuestionClick?.(q.question)}
            disabled={!onQuestionClick}
            className={cn(
              "px-3 py-1.5 text-xs rounded-full border border-border",
              onQuestionClick
                ? "hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors cursor-pointer"
                : "cursor-default",
            )}
          >
            {q.question}
          </button>
        ))}
      </div>
    </div>
  );
});
