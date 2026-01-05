"use client";

import { useState, useEffect } from "react";
import { type SectionType, SECTION_LAYOUTS } from "../lib/sectionLayouts";

interface SectionCustomizePopupProps {
    isOpen: boolean;
    selectedSectionType: SectionType | null;
    onLayoutSelect: (layoutId: string) => void;
    onClose: () => void;
}

type ViewState = "main" | "layout" | "scheme";

const COLOR_SCHEMES = [
    { id: "scheme-1", name: "Light Modern", colors: ["#ffffff", "#f5f5f5", "#333333"] },
    { id: "scheme-2", name: "Dark Elegant", colors: ["#1a1a2e", "#16213e", "#ffffff"] },
    { id: "scheme-3", name: "Warm Earth", colors: ["#fdfcf8", "#e6e2dd", "#5c5347"] },
    { id: "scheme-4", name: "Vibrant", colors: ["#ffffff", "#eff6ff", "#3b82f6"] },
];

export default function SectionCustomizePopup({
    isOpen,
    selectedSectionType,
    onLayoutSelect,
    onClose,
}: SectionCustomizePopupProps) {
    const [view, setView] = useState<ViewState>("main");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setView("main");
        if (selectedSectionType) {
            setName(selectedSectionType.charAt(0).toUpperCase() + selectedSectionType.slice(1));
            setDescription(`Enter a description for this ${selectedSectionType} section...`);
        }
    }, [isOpen, selectedSectionType]);

    if (!isOpen || !selectedSectionType) return null;

    const layouts = SECTION_LAYOUTS[selectedSectionType];

    return (
        <div
            className="fixed left-20 top-4 z-50 animate-in fade-in slide-in-from-left-4 duration-200 select-text cursor-default"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-white rounded-lg shadow-xl border border-[#e0d9ce] overflow-hidden w-[280px] flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#f0ebe4] bg-gray-50/50">
                    <div className="flex items-center gap-2">
                        {view !== "main" && (
                            <button
                                onClick={() => setView("main")}
                                className="text-[#8c8377] hover:text-[#3d3529] p-1 rounded hover:bg-black/5 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}
                        <span className="font-semibold text-[#3d3529] capitalize">
                            {view === "main" ? selectedSectionType : view === "layout" ? "Select Layout" : "Select Scheme"}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-[#8c8377] hover:text-[#5c5347] transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-4">
                    {view === "main" ? (
                        <div className="flex flex-col gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-[#8c8377] uppercase tracking-wide">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3 py-2 bg-white border border-[#e0d9ce] rounded text-sm text-[#3d3529] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all font-medium"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-[#8c8377] uppercase tracking-wide">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    className="w-full px-3 py-2 bg-white border border-[#e0d9ce] rounded text-sm text-[#5c5347] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3 mt-2">
                                <button
                                    onClick={() => setView("layout")}
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-[#e0d9ce] rounded hover:border-blue-400 hover:text-blue-600 transition-all group"
                                >
                                    <svg className="w-4 h-4 text-[#8c8377] group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
                                        <line x1="3" y1="9" x2="21" y2="9" strokeWidth={1.5} />
                                    </svg>
                                    <span className="text-sm font-medium">Layout</span>
                                </button>
                                <button
                                    onClick={() => setView("scheme")}
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-[#e0d9ce] rounded hover:border-blue-400 hover:text-blue-600 transition-all group"
                                >
                                    <div className="flex -space-x-1">
                                        <div className="w-3 h-3 rounded-full bg-blue-500 border border-white" />
                                        <div className="w-3 h-3 rounded-full bg-purple-500 border border-white" />
                                    </div>
                                    <span className="text-sm font-medium">Scheme</span>
                                </button>
                            </div>
                        </div>
                    ) : view === "layout" ? (
                        <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-1">
                            {layouts.map((layout) => (
                                <button
                                    key={layout.id}
                                    onClick={() => onLayoutSelect(layout.id)}
                                    className="flex items-center gap-3 p-3 text-left rounded border border-[#e8e2d9] hover:border-blue-400 hover:bg-blue-50 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded bg-[#f5f0e8] flex-shrink-0 group-hover:bg-blue-100 transition-colors flex items-center justify-center text-[#8c8377] group-hover:text-blue-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.5} /></svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-[#3d3529] group-hover:text-blue-700">
                                            {layout.name}
                                        </div>
                                        <div className="text-xs text-[#8c8377] mt-0.5">Click to apply</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            {COLOR_SCHEMES.map((scheme) => (
                                <button
                                    key={scheme.id}
                                    className="flex items-center gap-3 p-3 text-left rounded border border-[#e8e2d9] hover:border-blue-400 hover:bg-blue-50 transition-all group"
                                >
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-1">
                                            {scheme.colors.map(color => (
                                                <div key={color} className="w-6 h-6 rounded-full border border-black/10 shadow-sm" style={{ backgroundColor: color }} />
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-[#3d3529] ml-auto group-hover:text-blue-700">
                                        {scheme.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
