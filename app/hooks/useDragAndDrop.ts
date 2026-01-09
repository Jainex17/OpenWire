import { useCallback, useState } from "react";
import {
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { useEditorStore } from "../store/useEditorStore";

export function useDragAndDrop() {
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const [activeDragPageId, setActiveDragPageId] = useState<string | null>(null);
  const [overSectionId, setOverSectionId] = useState<string | null>(null);

  const { pages, reorderSection } = useEditorStore();

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const { active } = event;
    const sectionId = active.id as string;
    setActiveDragId(sectionId);

    for (const page of pages) {
      if (page.sections.includes(sectionId)) {
        setActiveDragPageId(page.id);
        break;
      }
    }
  }, [pages]);

  const handleDragOver = useCallback((event: DragOverEvent) => {
    const { over } = event;
    const overId = over?.id as string | null;
    setOverSectionId(overId);
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    const pageId = activeDragPageId;

    setActiveDragId(null);
    setActiveDragPageId(null);
    setOverSectionId(null);

    if (over && active.id !== over.id && pageId) {
      const page = pages.find(p => p.id === pageId);
      if (!page) return;

      const oldIndex = page.sections.indexOf(active.id as string);
      const newIndex = page.sections.indexOf(over.id as string);

      if (oldIndex !== -1 && newIndex !== -1) {
        reorderSection(pageId, active.id as string, newIndex);
      }
    }
  }, [activeDragPageId, pages, reorderSection]);

  return {
    activeDragId,
    activeDragPageId,
    overSectionId,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  };
}