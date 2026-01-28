"use client";

import React, {
  useState,
  useRef,
  useCallback,
  type KeyboardEvent,
  type RefObject,
} from "react";
import { SendHorizontal, Paperclip, Plus } from "lucide-react";
import { cn } from "../../utils/cn";
import { FileAttachmentBadge } from "./FileAttachmentBadge";
import { ActionMenu, type ActionMenuProps } from "./ActionMenu";
import { DeepResearchToggle } from "../DeepResearch/DeepResearchToggle";
import type { Attachment } from "../../types/attachments";

export interface ChatInputAreaProps {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  isStreaming?: boolean;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  isFocused?: boolean;
  className?: string;
  // Attachments
  attachments: Attachment[];
  onRemoveAttachment: (id: string) => void;
  onAttachClick: () => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilesDrop?: (files: File[]) => void;
  isDragActive?: boolean;
  // Menu
  menuProps?: Omit<ActionMenuProps, "isOpen" | "onClose">;
  // Deep Research
  showDeepResearch?: boolean;
  // Custom slot for additional elements (e.g., user menu)
  leftSlot?: React.ReactNode;
}

export function ChatInputArea({
  input,
  setInput,
  onSend,
  isStreaming = false,
  placeholder = "Message AI...",
  onFocus,
  onBlur,
  isFocused = false,
  className,
  attachments,
  onRemoveAttachment,
  onAttachClick,
  fileInputRef,
  handleFileSelect,
  onFilesDrop,
  isDragActive = false,
  menuProps,
  showDeepResearch = true,
  leftSlot,
}: ChatInputAreaProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const canSubmit =
    (input.trim().length > 0 || attachments.length > 0) && !isStreaming;

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      if (!onFilesDrop || isStreaming) return;

      const files = Array.from(event.dataTransfer.files || []);
      if (files.length > 0) {
        onFilesDrop(files);
      }
    },
    [onFilesDrop, isStreaming],
  );

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
    },
    [],
  );

  return (
    <div
      className={cn("relative w-full", className)}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* Action Menu Component */}
      {menuProps && (
        <ActionMenu
          {...menuProps}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={cn(
          "flex flex-col p-2 sm:p-2.5 rounded-[18px] sm:rounded-[20px] bg-[#1e1e23]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-200 z-[50] relative",
          isFocused
            ? "border-primary shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25),0_8px_32px_rgba(0,0,0,0.2)]"
            : "hover:border-white/20",
          isDragActive && "border-primary/80 bg-primary/5",
        )}
      >
        {isDragActive && (
          <div className="absolute inset-0 rounded-[18px] sm:rounded-[20px] border border-primary/60 pointer-events-none flex items-center justify-center">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              Drop files to attach
            </span>
          </div>
        )}
        {/* Attachments Area */}
        {attachments.length > 0 && (
          <div className="flex gap-2 p-1 pb-2 w-full overflow-x-auto">
            {attachments.map((attachment) => (
              <FileAttachmentBadge
                key={attachment.id}
                attachment={attachment}
                onRemove={onRemoveAttachment}
              />
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 sm:gap-3 w-full">
          <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
            {/* Custom left slot (e.g., user menu) */}
            {leftSlot}

            {/* Action Menu Trigger */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors duration-200 bg-transparent border-none text-muted-foreground hover:bg-white/10 hover:text-foreground",
                isMenuOpen && "bg-white/10 text-foreground",
              )}
              title="Actions"
            >
              <Plus size={18} className="sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              onClick={onAttachClick}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 text-muted-foreground bg-transparent border-none hover:bg-white/10 hover:text-foreground"
              title="Attach files"
            >
              <Paperclip size={18} className="sm:w-5 sm:h-5" />
            </button>

            {/* Deep Research Toggle */}
            {showDeepResearch && <DeepResearchToggle compact />}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden"
            multiple
            accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.ppt,.pptx,.png,.jpg,.jpeg,.gif,.webp"
          />

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-foreground text-[14px] sm:text-[15px] leading-relaxed py-1 min-w-[100px] sm:min-w-[150px]"
            disabled={isStreaming}
            autoFocus
          />

          <button
            onClick={onSend}
            disabled={!canSubmit}
            className={cn(
              "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border-none transition-all duration-200",
              canSubmit
                ? "bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(var(--primary-rgb),0.3)] cursor-pointer hover:bg-primary/90"
                : "bg-white/5 text-muted-foreground opacity-50 cursor-not-allowed",
            )}
          >
            <SendHorizontal size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
