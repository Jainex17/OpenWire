"use client";

import { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { type SectionType } from "../lib/sectionLayouts";

interface ClickableSectionProps {
    id: string;
    type: SectionType;
    isSelected: boolean;
    isDropTarget?: boolean;
    draggedHeight?: number | null;
    onSelect: (id: string, type: SectionType) => void;
    children: ReactNode;
    className?: string;
}

export default function ClickableSection({
    id,
    type,
    isSelected,
    isDropTarget = false,
    draggedHeight = null,
    onSelect,
    children,
    className = "",
}: ClickableSectionProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        isDragging,
    } = useSortable({ id });

    return (
        <div ref={setNodeRef} className="relative">
            {/* When dragging, show a placeholder with exact height */}
            {isDragging ? (
                <div
                    className="border-2 border-dashed border-blue-400 rounded-lg bg-blue-50/50"
                    style={{ height: draggedHeight ? `${draggedHeight}px` : 'auto' }}
                />
            ) : (
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        onSelect(id, type);
                    }}
                    className={`relative group transition-shadow duration-200 cursor-pointer ${isSelected
                        ? "ring-2 ring-blue-500 z-10"
                        : "hover:ring-1 hover:ring-blue-300"
                        } ${className}`}
                >
                    {/* Drag handle - shows on left side when selected */}
                    {isSelected && (
                        <div
                            {...attributes}
                            {...listeners}
                            className="absolute -left-14 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg hover:bg-blue-600 transition-colors z-20"
                        >
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="8" cy="6" r="2" />
                                <circle cx="16" cy="6" r="2" />
                                <circle cx="8" cy="12" r="2" />
                                <circle cx="16" cy="12" r="2" />
                                <circle cx="8" cy="18" r="2" />
                                <circle cx="16" cy="18" r="2" />
                            </svg>
                        </div>
                    )}

                    {children}
                </div>
            )}

            {/* Drop indicator - shows placeholder with exact height where section will be placed */}
            {isDropTarget && draggedHeight && (
                <div
                    className="w-full border-2 border-dashed border-blue-500 rounded-lg bg-blue-100/50"
                    style={{ height: `${draggedHeight + 200}px` }}
                />
            )}
        </div>
    );
}
