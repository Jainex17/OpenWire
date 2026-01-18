import React from "react";
import { FileIcon, HomeIcon, PlusIcon } from "lucide-react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useEditorStore } from "../store/useEditorStore";
import PageOptionsMenu from "./PageOptionsMenu";
import ClickableSection from "./ClickableSection";
import SectionRenderer from "./SectionRenderer";
import EmptyPageState from "./EmptyPageState";
import { Button } from "@/components/ui/button";
import type { SectionType } from "../lib/sectionLayouts";

interface PageRendererProps {
  page: {
    id: string;
    title: string;
    sections: string[];
  };
  currentDevice: {
    width: number;
    height: number;
    label: string;
  };
  activeDragId: string | null;
  overSectionId: string | null;
  activeDragPageId: string | null;
  selectedSectionId: string | null;
  openPageMenuId: string | null;
  draggedSectionHeight: number | null;
  onSectionSelect: (id: string) => void;
  onHeightCapture: (id: string, height: number) => void;
  onTogglePageMenu: (pageId: string) => void;
  onClosePageMenu: () => void;
  onRenamePage: (pageId: string, newTitle: string) => void;
  onDuplicatePage: (pageId: string) => void;
  onDeletePage: (pageId: string) => void;
  onShowTemplateModal: (pageId: string) => void;
  onPreviewPage: (pageId: string) => void;
}

export default React.memo(function PageRenderer({
  page,
  currentDevice,
  activeDragId,
  overSectionId,
  activeDragPageId,
  selectedSectionId,
  openPageMenuId,
  draggedSectionHeight,
  onSectionSelect,
  onHeightCapture,
  onTogglePageMenu,
  onClosePageMenu,
  onRenamePage,
  onDuplicatePage,
  onDeletePage,
  onShowTemplateModal,
  onPreviewPage,
}: PageRendererProps) {
  const sections = useEditorStore((state) => state.sections);
  const pages = useEditorStore((state) => state.pages);
  const addSectionSidebar = useEditorStore((state) => state.addSectionSidebar);
  const setAddSectionSidebar = useEditorStore(
    (state) => state.setAddSectionSidebar,
  );
  const addSectionToStore = useEditorStore((state) => state.addSection);

  const isDraggingOnPage = activeDragId && activeDragPageId === page.id;

  const handleAddSection = (sectionType: SectionType, layoutId: string) => {
    const sectionId = `${sectionType}-${page.id}-${Date.now()}`;
    addSectionToStore(
      page.id,
      {
        id: sectionId,
        type: sectionType,
        layoutId,
        content: {},
      },
      addSectionSidebar.position,
    );
    setAddSectionSidebar({ isOpen: false });
  };

  const openAddSectionSidebar = (position?: number) => {
    setAddSectionSidebar({ isOpen: true, position, pageId: page.id });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full h-[50px] flex items-center pl-4 pr-2 mb-4 rounded-[var(--radius)] justify-between bg-secondary">
          <p className="text-foreground font-medium text-md flex items-center gap-3">
            {page.title === "Home" ? (
              <HomeIcon width={20} />
            ) : (
              <FileIcon width={20} />
            )}{" "}
            {page.title}
          </p>
          <PageOptionsMenu
            pageId={page.id}
            pageTitle={page.title}
            isOpen={openPageMenuId === page.id}
            isOnlyPage={pages.length <= 1}
            onToggle={() => onTogglePageMenu(page.id)}
            onClose={onClosePageMenu}
            onRename={(newTitle) => onRenamePage(page.id, newTitle)}
            onDuplicate={() => onDuplicatePage(page.id)}
            onDelete={() => onDeletePage(page.id)}
            onPreview={() => onPreviewPage(page.id)}
          />
        </div>

        <div
          className="bg-white rounded-[var(--radius)] relative"
          style={{
            width: `${currentDevice.width}px`,
            minHeight: "800px",
            height: "fit-content",
            paddingBottom: "0px",
            overflow: "visible",
          }}
        >
          {page.sections.length === 0 ? (
            <EmptyPageState
              onShowTemplateModal={() => onShowTemplateModal(page.id)}
            />
          ) : (
            <SortableContext
              items={page.sections}
              strategy={verticalListSortingStrategy}
            >
              <div className="w-full h-full flex flex-col overflow-visible">
                {page.sections.map((sectionId, index) => {
                  const section = sections[sectionId];
                  if (!section) return null;

                  const showPlaceholder =
                    isDraggingOnPage &&
                    sectionId === overSectionId &&
                    sectionId !== activeDragId;

                  return (
                    <div key={sectionId} className="relative">
                      <ClickableSection
                        id={sectionId}
                        type={section.type}
                        isSelected={
                          !!selectedSectionId && selectedSectionId === sectionId
                        }
                        showPlaceholder={!!showPlaceholder}
                        draggedSectionHeight={draggedSectionHeight}
                        onSelect={onSectionSelect}
                        onHeightCapture={onHeightCapture}
                        className="group"
                      >
                        <Button
                          size="icon"
                          className="absolute -top-4 left-0 right-0 m-auto z-100 cursor-pointer bg-blue-500 group-hover:flex hidden"
                          onClick={(e) => {
                            e.stopPropagation();
                            openAddSectionSidebar(index);
                          }}
                        >
                          <PlusIcon />
                        </Button>
                        <SectionRenderer sectionId={sectionId} />
                        <Button
                          size="icon"
                          className="absolute -bottom-5 left-0 right-0 m-auto z-100 cursor-pointer bg-blue-500 group-hover:flex hidden"
                          onClick={(e) => {
                            e.stopPropagation();
                            openAddSectionSidebar(index + 1);
                          }}
                        >
                          <PlusIcon />
                        </Button>
                      </ClickableSection>
                    </div>
                  );
                })}
              </div>
            </SortableContext>
          )}
        </div>
      </div>
    </>
  );
});
