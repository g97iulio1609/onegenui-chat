import { useState, useCallback, useRef, type ChangeEvent } from "react";
import type {
  FileAttachment,
  LibraryAttachment,
  Attachment,
} from "../types/attachments";

export function useChatAttachments() {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((files: FileList | File[]) => {
    if (!files || files.length === 0) return;

    const newAttachments: FileAttachment[] = [];
    Array.from(files).forEach((file) => {
      const id = Math.random().toString(36).substring(7);
      let type: FileAttachment["type"] = "other";

      if (file.type.startsWith("image/")) type = "image";
      else if (file.type === "application/pdf" || file.type.includes("word"))
        type = "document";
      else if (file.type.includes("sheet") || file.type.includes("csv"))
        type = "spreadsheet";
      else if (file.type.includes("presentation")) type = "presentation";

      const attachment: FileAttachment = { id, file, type };

      if (type === "image") {
        const reader = new FileReader();
        reader.onload = (e) => {
          attachment.preview = e.target?.result as string;
          setAttachments((prev) => [...prev]); // Trigger re-render update
        };
        reader.readAsDataURL(file);
      }

      newAttachments.push(attachment);
    });

    setAttachments((prev) => [...prev, ...newAttachments]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const addLibraryDocument = useCallback(
    (doc: {
      id: string;
      fileName: string;
      mimeType: string;
      pageCount?: number;
    }) => {
      const attachment: LibraryAttachment = {
        id: Math.random().toString(36).substring(7),
        documentId: doc.id,
        fileName: doc.fileName,
        mimeType: doc.mimeType,
        pageCount: doc.pageCount,
        type: "library-document",
      };
      setAttachments((prev) => [...prev, attachment]);
    },
    [],
  );

  const handleFileSelect = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        addFiles(e.target.files);
      }
    },
    [addFiles],
  );

  const removeAttachment = useCallback((id: string) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const triggerFileSelect = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const clearAttachments = useCallback(() => {
    setAttachments([]);
  }, []);

  return {
    attachments,
    fileInputRef,
    handleFileSelect,
    addFiles,
    addLibraryDocument,
    removeAttachment,
    triggerFileSelect,
    clearAttachments,
  };
}
