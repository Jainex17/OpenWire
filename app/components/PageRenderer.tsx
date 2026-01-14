import { FileIcon, HomeIcon } from "lucide-react";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useEditorStore } from "../store/useEditorStore";
import PageOptionsMenu from "./PageOptionsMenu";
import ClickableSection from "./ClickableSection";
import SectionRenderer from "./SectionRenderer";
import EmptyPageState from "./EmptyPageState";

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

export default function PageRenderer({
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
  const { sections, pages } = useEditorStore();

  const isDraggingOnPage = activeDragId && activeDragPageId === page.id;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[50px] flex items-center pl-4 pr-2 mb-4 rounded-[var(--radius)] justify-between bg-secondary">
        <p className="text-foreground font-medium text-md flex items-center gap-3">
          {page.title === "Home" ? <HomeIcon width={20} /> : <FileIcon width={20} />} {page.title}
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
          overflow: "visible"
        }}
      >
        {page.sections.length === 0 ? (
          <EmptyPageState onShowTemplateModal={() => onShowTemplateModal(page.id)} />
        ) : (
          <SortableContext
            items={page.sections}
            strategy={verticalListSortingStrategy}
          >
            <div className="w-full h-full flex flex-col overflow-visible">
              {page.sections.map((sectionId) => {
                const section = sections[sectionId];
                if (!section) return null;

                const showPlaceholder = isDraggingOnPage &&
                  sectionId === overSectionId &&
                  sectionId !== activeDragId;

                return (
                  <ClickableSection
                    key={sectionId}
                    id={sectionId}
                    type={section.type}
                    isSelected={!!selectedSectionId && selectedSectionId === sectionId}
                    showPlaceholder={!!showPlaceholder}
                    draggedSectionHeight={draggedSectionHeight}
                    onSelect={onSectionSelect}
                    onHeightCapture={onHeightCapture}
                  >
                    <SectionRenderer sectionId={sectionId} />
                  </ClickableSection>
                );
              })}
            </div>
          </SortableContext>
        )}
      </div>
    </div>
  );
}
