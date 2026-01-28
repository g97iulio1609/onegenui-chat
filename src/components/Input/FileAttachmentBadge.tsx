"use client";

import React from "react";
import {
  FileText,
  FileSpreadsheet,
  File as FileIcon,
  X,
  Image as ImageIcon,
  Presentation,
  Library,
} from "lucide-react";
import type { Attachment } from "../../types/attachments";
import { isLibraryAttachment, isFileAttachment } from "../../types/attachments";

export interface FileAttachmentBadgeProps {
  attachment: Attachment;
  onRemove: (id: string) => void;
}

const getIconForType = (type: string) => {
  switch (type) {
    case "document":
      return <FileText size={14} />;
    case "spreadsheet":
      return <FileSpreadsheet size={14} />;
    case "presentation":
      return <Presentation size={14} />;
    case "image":
      return <ImageIcon size={14} />;
    case "library-document":
      return <Library size={14} className="text-blue-400" />;
    default:
      return <FileIcon size={14} />;
  }
};

export function FileAttachmentBadge({
  attachment,
  onRemove,
}: FileAttachmentBadgeProps) {
  const isLibrary = isLibraryAttachment(attachment);
  const fileName = isLibrary ? attachment.fileName : attachment.file.name;
  const preview = isFileAttachment(attachment) ? attachment.preview : undefined;

  return (
    <div
      className={`inline-flex items-center gap-2 px-2 py-1 rounded-lg border max-w-[200px] text-[13px] text-foreground select-none transition-colors ${
        isLibrary
          ? "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/15"
          : "bg-white/10 border-white/10 hover:bg-white/15"
      }`}
    >
      {preview ? (
        <img
          src={preview}
          alt={fileName}
          className="w-5 h-5 object-cover rounded"
        />
      ) : (
        getIconForType(attachment.type)
      )}

      <span className="truncate flex-1">{fileName}</span>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(attachment.id);
        }}
        className="flex items-center justify-center w-4 h-4 rounded-full bg-white/10 text-muted-foreground hover:text-foreground hover:bg-white/20 ml-1 p-0 transition-colors border-none cursor-pointer"
        title="Remove attachment"
      >
        <X size={10} />
      </button>
    </div>
  );
}
