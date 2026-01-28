/**
 * Attachment Types
 */

export interface FileAttachment {
  id: string;
  file: File;
  type: "document" | "image" | "spreadsheet" | "presentation" | "other";
  preview?: string;
}

/** Server-cached document attachment (from library) */
export interface LibraryAttachment {
  id: string;
  documentId: string;
  fileName: string;
  mimeType: string;
  pageCount?: number;
  type: "library-document";
}

export type Attachment = FileAttachment | LibraryAttachment;

export function isLibraryAttachment(a: Attachment): a is LibraryAttachment {
  return a.type === "library-document";
}

export function isFileAttachment(a: Attachment): a is FileAttachment {
  return a.type !== "library-document";
}
