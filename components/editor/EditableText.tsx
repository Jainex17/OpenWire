"use client";

import { useEffect, useState, useRef } from "react";
import { useEditorStore } from "@/app/store/useEditorStore";
import { sanitizeText, sanitizeHtml } from "@/lib/sanitize";
import { usePreview } from "@/app/context/PreviewContext";

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
    const { isPreview } = usePreview();
    const { sections, updateSectionData } = useEditorStore();
    const section = sections[sectionId];
    const contentValue = (section?.content?.[field] as string) || defaultValue;

    const [localValue, setLocalValue] = useState(contentValue);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setLocalValue(contentValue);
    }, [contentValue]);

    const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
        const rawValue = e.target.innerText;
        const sanitizedValue = sanitizeText(rawValue);
        setLocalValue(sanitizedValue);

        if (!section) return;

        const currentContent = section?.content || {};
        updateSectionData(sectionId, {
            content: {
                ...currentContent,
                [field]: sanitizedValue
            }
        });
    };

    if (isPreview) {
        return (
            <Component
                className={className}
                style={style}
            >
                <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(localValue) }} />
            </Component>
        );
    }

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
            <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(localValue) }} />
        </Component>
    );
};
