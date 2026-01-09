"use client";

import { useEffect, useState, useRef } from "react";
import { useEditorStore } from "@/app/store/useEditorStore";

interface EditableTextProps {
    sectionId: string;
    field: string;
    defaultValue: string;
    className?: string;
    style?: React.CSSProperties;
    as?: React.ElementType;
}

export const EditableText = ({
    sectionId,
    field,
    defaultValue,
    className = "",
    style,
    as: Component = "span"
}: EditableTextProps) => {
    const { sections, updateSectionData } = useEditorStore();
    const section = sections[sectionId];
    const contentValue = (section?.content?.[field] as string) || defaultValue;

    const [localValue, setLocalValue] = useState(contentValue);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setLocalValue(contentValue);
    }, [contentValue]);

    const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
        const newValue = e.target.innerText;
        setLocalValue(newValue);

        const currentContent = section?.content || {};
        updateSectionData(sectionId, {
            content: {
                ...currentContent,
                [field]: newValue
            }
        });
    };

    return (
        <Component
            ref={containerRef}
            contentEditable
            suppressContentEditableWarning
            className={`focus:outline-none cursor-text ${className}`}
            style={style}
            onBlur={handleBlur}
            onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            {localValue}
        </Component>
    );
};
