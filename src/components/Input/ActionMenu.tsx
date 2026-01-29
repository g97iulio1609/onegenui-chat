"use client";

import React, { useRef, useEffect } from "react";
import {
  Settings,
  PanelRightOpen,
  PanelRightClose,
  Eye,
  EyeOff,
  Trash2,
  FileEdit,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";

export interface ActionMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSettings?: () => void;
  onToggleCopilotMode?: () => void;
  onToggleHideMessages?: () => void;
  onClear?: () => void;
  canClear?: boolean;
  messagesMode?: "hidden" | "copilot" | "default";
  // Document Editor Canvas
  isDocumentEditorEnabled?: boolean;
  onToggleDocumentEditor?: () => void;
}

export function ActionMenu({
  isOpen,
  onClose,
  onOpenSettings,
  onToggleCopilotMode,
  onToggleHideMessages,
  onClear,
  canClear,
  messagesMode = "default",
  isDocumentEditorEnabled = false,
  onToggleDocumentEditor,
}: ActionMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-0 bottom-full mb-3 min-w-[200px] overflow-hidden rounded-xl bg-[#1e1e23]/95 backdrop-blur-xl border border-white/10 shadow-2xl z-[150]"
        >
          <div className="p-1.5 flex flex-col gap-1">
            {onOpenSettings && (
              <button
                onClick={() => {
                  onOpenSettings();
                  onClose();
                }}
                className="flex items-center gap-3 px-3 py-2.5 text-[14px] text-foreground hover:bg-white/5 rounded-lg transition-colors w-full text-left bg-transparent border-none cursor-pointer"
              >
                <Settings size={16} />
                Settings
              </button>
            )}

            {onToggleDocumentEditor && (
              <button
                onClick={() => {
                  onToggleDocumentEditor();
                  onClose();
                }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-[14px] rounded-lg transition-colors w-full text-left bg-transparent border-none cursor-pointer",
                  isDocumentEditorEnabled
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-white/5",
                )}
              >
                <FileEdit size={16} />
                {isDocumentEditorEnabled
                  ? "Close Document Editor"
                  : "Open Document Editor"}
              </button>
            )}

            {onToggleCopilotMode && (
              <button
                onClick={() => {
                  onToggleCopilotMode();
                  onClose();
                }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-[14px] rounded-lg transition-colors w-full text-left bg-transparent border-none cursor-pointer",
                  messagesMode === "copilot"
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-white/5",
                )}
              >
                {messagesMode === "copilot" ? (
                  <PanelRightClose size={16} />
                ) : (
                  <PanelRightOpen size={16} />
                )}
                {messagesMode === "copilot"
                  ? "Close Copilot Panel"
                  : "Open Copilot Panel"}
              </button>
            )}

            {onToggleHideMessages && (
              <button
                onClick={() => {
                  onToggleHideMessages();
                  onClose();
                }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-[14px] rounded-lg transition-colors w-full text-left bg-transparent border-none cursor-pointer",
                  messagesMode === "hidden"
                    ? "text-muted-foreground"
                    : "text-foreground hover:bg-white/5",
                )}
              >
                {messagesMode === "hidden" ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
                {messagesMode === "hidden" ? "Show Messages" : "Hide Messages"}
              </button>
            )}

            {canClear && onClear && (
              <>
                <div className="h-px bg-white/5 my-1" />
                <button
                  onClick={() => {
                    onClear();
                    onClose();
                  }}
                  disabled={!canClear}
                  className="flex items-center gap-3 px-3 py-2.5 text-[14px] text-destructive hover:bg-destructive/10 rounded-lg transition-colors w-full text-left bg-transparent border-none cursor-pointer"
                >
                  <Trash2 size={16} />
                  Clear Chat
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
