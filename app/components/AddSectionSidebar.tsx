"use client";

import { useEffect, useState, useRef } from "react";
import { SECTION_LAYOUTS, type SectionType } from "../lib/sectionLayouts";

interface AddSectionSidebarProps {
    onClose: () => void;
    onLayoutSelect: (sectionType: SectionType, layoutId: string) => void;
}

type ViewState = "main" | "layouts";

const SECTION_CATEGORIES: { type: SectionType; name: string; description: string }[] = [
    { type: "navbar", name: "Navbar", description: "Navigation headers" },
    { type: "hero", name: "Hero", description: "Page headers & intros" },
    { type: "features", name: "Features", description: "Highlight key benefits" },
    { type: "content", name: "Content", description: "Text & media blocks" },
    { type: "testimonials", name: "Testimonials", description: "Customer reviews" },
    { type: "pricing", name: "Pricing", description: "Pricing tables" },
    { type: "cta", name: "CTA", description: "Call-to-action sections" },
    { type: "footer", name: "Footer", description: "Page footers" },
    { type: "stats", name: "Stats", description: "Numbers & metrics" },
    { type: "team", name: "Team", description: "Team members" },
    { type: "faq", name: "FAQ", description: "Questions & answers" },
    { type: "contact", name: "Contact", description: "Contact forms" },
    { type: "newsletter", name: "Newsletter", description: "Email signup" },
    { type: "logocloud", name: "Logo Cloud", description: "Client logos" },
];

const getSectionIcon = (type: SectionType) => {
    switch (type) {
        case "navbar":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            );
        case "hero":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            );
        case "features":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        case "content":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            );
        case "testimonials":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            );
        case "pricing":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        case "cta":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
            );
        case "footer":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            );
        case "stats":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            );
        case "team":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            );
        case "faq":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        case "contact":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            );
        case "newsletter":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            );
        case "logocloud":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            );
        default:
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.5} />
                </svg>
            );
    }
};

const AddSectionSidebar = ({ onClose, onLayoutSelect }: AddSectionSidebarProps) => {
    const [view, setView] = useState<ViewState>("main");
    const [selectedType, setSelectedType] = useState<SectionType | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const handleWheel = (e: WheelEvent) => {
            e.stopPropagation();
        };

        el.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            el.removeEventListener("wheel", handleWheel);
        };
    }, []);

    const handleTypeSelect = (type: SectionType) => {
        setSelectedType(type);
        setView("layouts");
    };

    const handleLayoutSelect = (layoutId: string) => {
        if (selectedType) {
            onLayoutSelect(selectedType, layoutId);
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-end"
            onClick={onClose}
        >
            <div
                className="fixed left-[4.5rem] top-4 animate-in fade-in slide-in-from-left-4 duration-200 select-text cursor-default"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-white rounded-lg shadow-xl border border-[#e0d9ce] overflow-hidden w-[280px] flex flex-col max-h-[500px]">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[#f0ebe4] bg-gray-50/50 flex-shrink-0">
                        <div className="flex items-center gap-2">
                            {view !== "main" && (
                                <button
                                    onClick={() => setView("main")}
                                    className="text-[#5c5347] hover:text-[#3d3529] p-1 rounded hover:bg-[#f5f0e8] transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            )}
                            <span className="font-semibold text-[#3d3529]">
                                {view === "main" ? "Add Section" : `Select ${selectedType?.charAt(0).toUpperCase()}${selectedType?.slice(1)} Layout`}
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-[#5c5347] hover:text-[#3d3529] transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div
                        ref={scrollRef}
                        className="p-4 overflow-y-auto"
                    >
                        {view === "main" ? (
                            <div className="flex flex-col gap-2">
                                {SECTION_CATEGORIES.map((category) => (
                                    <button
                                        key={category.type}
                                        onClick={() => handleTypeSelect(category.type)}
                                        className="flex items-center gap-3 p-3 text-left rounded border border-[#e8e2d9] hover:border-blue-400 hover:bg-blue-50 transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded bg-[#f5f0e8] flex-shrink-0 group-hover:bg-blue-100 transition-colors flex items-center justify-center text-[#8c8377] group-hover:text-blue-400">
                                            {getSectionIcon(category.type)}
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-[#5c5347] group-hover:text-[#3d3529]">
                                                {category.name}
                                            </div>
                                            <div className="text-xs text-[#a89f91] mt-0.5">{category.description}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                {selectedType && SECTION_LAYOUTS[selectedType]?.map((layout) => (
                                    <button
                                        key={layout.id}
                                        onClick={() => handleLayoutSelect(layout.id)}
                                        className="flex items-center gap-3 p-3 text-left rounded border border-[#e8e2d9] hover:border-blue-400 hover:bg-blue-50 transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded bg-[#f5f0e8] flex-shrink-0 group-hover:bg-blue-100 transition-colors flex items-center justify-center text-[#8c8377] group-hover:text-blue-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.5} />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-[#5c5347] group-hover:text-[#3d3529]">
                                                {layout.name}
                                            </div>
                                            <div className="text-xs text-[#a89f91] mt-0.5">Click to add</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSectionSidebar;
