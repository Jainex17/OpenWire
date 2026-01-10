"use client";

import { XIcon, Monitor } from "lucide-react";
import PreviewSectionRenderer from "./PreviewSectionRenderer";
import { PageData, SectionData } from "@/app/store/useEditorStore";
import { PreviewProvider } from "@/app/context/PreviewContext";

interface PagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  page: PageData | null;
  sections: Record<string, SectionData>;
}

export default function PagePreviewModal({
  isOpen,
  onClose,
  page,
  sections,
}: PagePreviewModalProps) {
  if (!isOpen || !page) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="absolute top-12 left-4 right-4 bottom-0 flex flex-col animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 rounded-t-xl">
          <div className="flex items-center gap-2 text-gray-600">
            <Monitor width={18} />
            <span className="text-sm font-medium">Preview: {page.title}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <XIcon width={18} className="text-gray-500" />
          </button>
        </div>
        <div className="flex-1 bg-white overflow-auto shadow-2xl">
          <PreviewProvider isPreview={true}>
            <div className="w-full min-h-full preview-mode">
              {page.sections.map((sectionId) => (
                <PreviewSectionRenderer
                  key={sectionId}
                  sectionId={sectionId}
                  sections={sections}
                />
              ))}
            </div>
          </PreviewProvider>
        </div>
      </div>
    </div>
  );
}
