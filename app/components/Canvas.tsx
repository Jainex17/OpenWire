import { DragOverlay, defaultDropAnimationSideEffects, type DropAnimation } from "@dnd-kit/core";
import { useEditorStore, TemplateType } from "../store/useEditorStore";
import CanvasToolbar from "./CanvasToolbar";
import SectionCustomizePopup from "./SectionCustomizePopup";
import TemplateSelectionModal from "./TemplateSelectionModal";
import Sidebar from "./Sidebar";
import PageRenderer from "./PageRenderer";
import SectionRenderer from "./SectionRenderer";

const DEVICE_DIMENSIONS = {
  desktop: { width: 1440, height: 900, label: "Desktop" },
  tablet: { width: 768, height: 1024, label: "Tablet" },
  mobile: { width: 375, height: 812, label: "Mobile" },
} as const;

const dropAnimation: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.5",
      },
    },
  }),
  duration: 250,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
};

interface CanvasProps {
  canvasRef: React.RefObject<HTMLDivElement | null>;
  panOffset: { x: number; y: number };
  zoom: number;
  activeDevice: keyof typeof DEVICE_DIMENSIONS;
  activeDragId: string | null;
  overSectionId: string | null;
  activeDragPageId: string | null;
  draggedSectionHeight: number | null;
  selectedSectionId: string | null;
  showTemplateModal: boolean;
  templateModalPageId?: string | null;
  openPageMenuId: string | null;
  onCanvasClick: () => void;
  onSectionSelect: (id: string) => void;
  onHeightCapture: (id: string, height: number) => void;
  onZoomChange: (zoom: number) => void;
  onDeviceChange: (device: keyof typeof DEVICE_DIMENSIONS) => void;
  onReset: () => void;
  onTemplateSelect: (templateType: TemplateType, pageId?: string | null) => void;
  onLayoutSelect: (layoutId: string) => void;
  onUpdateSection: (data: Partial<Record<string, unknown>>) => void;
  onTogglePageMenu: (pageId: string) => void;
  onClosePageMenu: () => void;
  onRenamePage: (pageId: string, newTitle: string) => void;
  onDuplicatePage: (pageId: string) => void;
  onDeletePage: (pageId: string) => void;
  onAddPage: () => void;
  onShowTemplateModal: (pageId: string) => void;
  onCloseTemplateModal: () => void;
}

export default function Canvas({
  canvasRef,
  panOffset,
  zoom,
  activeDevice,
  activeDragId,
  overSectionId,
  activeDragPageId,
  draggedSectionHeight,
  selectedSectionId,
  showTemplateModal,
  templateModalPageId,
  openPageMenuId,
  onCanvasClick,
  onSectionSelect,
  onHeightCapture,
  onZoomChange,
  onDeviceChange,
  onReset,
  onTemplateSelect,
  onLayoutSelect,
  onUpdateSection,
  onTogglePageMenu,
  onClosePageMenu,
  onRenamePage,
  onDuplicatePage,
  onDeletePage,
  onAddPage,
  onShowTemplateModal,
  onCloseTemplateModal,
}: CanvasProps) {
  const { pages, sections } = useEditorStore();
  const currentDevice = DEVICE_DIMENSIONS[activeDevice];
  const selectedSectionData = selectedSectionId ? sections[selectedSectionId] : null;

  return (
    <div
      ref={canvasRef}
      className="relative w-screen h-screen overflow-hidden select-none"
      onClick={onCanvasClick}
    >
      <div
        className="absolute"
        style={{
          transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoom / 100})`,
          transformOrigin: "0 0",
          left: "50%",
          top: "100px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex flex-row"
          style={{
            gap: `${120}px`,
            marginLeft: `-${(pages.length * (currentDevice.width + 120)) / 2}px`
          }}
        >
          {pages.map((page) => (
            <PageRenderer
              key={page.id}
              page={page}
              currentDevice={currentDevice}
              activeDragId={activeDragId}
              overSectionId={overSectionId}
              activeDragPageId={activeDragPageId}
              draggedSectionHeight={draggedSectionHeight}
              selectedSectionId={selectedSectionId}
              openPageMenuId={openPageMenuId}
              onSectionSelect={onSectionSelect}
              onHeightCapture={onHeightCapture}
              onTogglePageMenu={onTogglePageMenu}
              onClosePageMenu={onClosePageMenu}
              onRenamePage={onRenamePage}
              onDuplicatePage={onDuplicatePage}
              onDeletePage={onDeletePage}
              onShowTemplateModal={onShowTemplateModal}
            />
          ))}
        </div>
      </div>

      <Sidebar onAddPage={onAddPage} />

      <SectionCustomizePopup
        key={selectedSectionId || 'popup'}
        isOpen={!!selectedSectionId}
        section={selectedSectionData || null}
        onLayoutSelect={onLayoutSelect}
        onUpdate={onUpdateSection}
        onClose={() => onSectionSelect("")}
      />

      <CanvasToolbar
        zoom={zoom}
        onZoomChange={onZoomChange}
        activeDevice={activeDevice}
        onDeviceChange={onDeviceChange}
        onReset={onReset}
      />

      <DragOverlay dropAnimation={dropAnimation}>
        {activeDragId ? (
          <div
            style={{
              width: currentDevice.width,
              overflow: 'hidden',
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'top left',
            }}
            className="shadow-2xl ring-2 ring-blue-500 rounded-lg bg-white cursor-grabbing"
          >
            <SectionRenderer sectionId={activeDragId} />
          </div>
        ) : null}
      </DragOverlay>

      <TemplateSelectionModal
        isOpen={showTemplateModal}
        onSelect={onTemplateSelect}
        onClose={onCloseTemplateModal}
        pageId={templateModalPageId}
      />
    </div>
  );
}