"use client";

import { useEffect, useRef } from "react";
import { TemplateType } from "../store/useEditorStore";

interface TemplateOption {
  id: TemplateType;
  name: string;
  description: string;
  preview: string[];
}

const templates: TemplateOption[] = [
  {
    id: "saas",
    name: "SaaS",
    description:
      "Modern software product landing page with pricing, features, and testimonials",
    preview: [
      "Navbar",
      "Hero",
      "Features",
      "Content",
      "Testimonials",
      "Pricing",
      "CTA",
      "Footer",
    ],
  },
  {
    id: "business",
    name: "Business",
    description:
      "Professional corporate website with services, team, and contact sections",
    preview: [
      "Navbar",
      "Hero",
      "Content",
      "Features",
      "Testimonials",
      "CTA",
      "Footer",
    ],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    description: "Creative showcase for designers, developers, and artists",
    preview: ["Navbar", "Hero", "Features", "Content", "CTA", "Footer"],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    description:
      "Online store template with product highlights and promotional sections",
    preview: [
      "Navbar",
      "Hero",
      "Features",
      "Content",
      "Testimonials",
      "CTA",
      "Footer",
    ],
  },
];

interface TemplateSelectionModalProps {
  isOpen: boolean;
  onSelect: (templateType: TemplateType, pageId?: string | null) => void;
  onClose: () => void;
  pageId?: string | null;
}

export default function TemplateSelectionModal({
  isOpen,
  onSelect,
  onClose,
  pageId,
}: TemplateSelectionModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    el.addEventListener("wheel", handleWheel);
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed left-[4.5rem] top-4 z-50 animate-in fade-in slide-in-from-left-4 duration-200 select-text cursor-default"
      onClick={(e) => e.stopPropagation()}
      data-scroll-lock="modal"
    >
      <div className="bg-card rounded-lg shadow-xl border border-border overflow-hidden w-[320px] flex flex-col max-h-[520px]">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-popover">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">
              Choose Template
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 min-h-0 p-4 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => onSelect(template.id, pageId)}
                className="flex flex-col gap-3 p-3 text-left rounded border border-border hover:border-ring hover:bg-secondary transition-all group"
              >
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {template.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {template.description}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {template.preview.slice(0, 5).map((section, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-card rounded-md text-xs text-muted-foreground border border-border"
                    >
                      {section}
                    </span>
                  ))}
                  {template.preview.length > 5 && (
                    <span className="px-2 py-1 bg-card rounded-md text-xs text-muted-foreground border border-border">
                      +{template.preview.length - 5} more
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
