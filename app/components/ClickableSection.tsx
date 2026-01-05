"use client";

import { ReactNode } from "react";
import { type SectionType } from "../lib/sectionLayouts";

interface ClickableSectionProps {
    id: string;
    type: SectionType;
    isSelected: boolean;
    onSelect: (id: string, type: SectionType) => void;
    children: ReactNode;
    className?: string;
}

export default function ClickableSection({
    id,
    type,
    isSelected,
    onSelect,
    children,
    className = "",
}: ClickableSectionProps) {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                onSelect(id, type);
            }}
            className={`relative group transition-all duration-200 cursor-pointer ${isSelected
                    ? "ring-2 ring-blue-500 z-10"
                    : "hover:ring-1 hover:ring-blue-300"
                } ${className}`}
        >
            <div
                className={`absolute left-4 top-0 -translate-y-1/2 px-2 py-0.5 text-xs font-medium rounded text-white bg-blue-500 transition-opacity ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
            >
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>

            {children}
        </div>
    );
}
