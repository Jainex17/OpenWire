"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverEvent,
  DragOverlay,
  defaultDropAnimationSideEffects,
  type DropAnimation,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import CanvasToolbar from "./components/CanvasToolbar";
import ClickableSection from "./components/ClickableSection";
import SectionCustomizePopup from "./components/SectionCustomizePopup";
import TemplateSelectionModal from "./components/TemplateSelectionModal";
import PageOptionsMenu from "./components/PageOptionsMenu";
import { useEditorStore, TemplateType } from "./store/useEditorStore";
import { FileIcon, HomeIcon } from "lucide-react";
import { Navbar1, Navbar2 } from "@/components/layout/Navbar";
import { Hero1, Hero2, Hero3 } from "@/components/layout/Hero";
import { Footer1, Footer2, Footer3 } from "@/components/layout/Footer";
import { Features1, Features2, Features3 } from "@/components/layout/Features";
import { Content1, Content2, Content3 } from "@/components/layout/Content";
import { Testimonials1, Testimonials2, Testimonials3 } from "@/components/layout/Testimonials";
import { Pricing1, Pricing2 } from "@/components/layout/Pricing";
import { CTA1, CTA2 } from "@/components/layout/CTA";

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

export default function Home() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sectionHeightsRef = useRef<Map<string, number>>(new Map());
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const [activeDragPageId, setActiveDragPageId] = useState<string | null>(null);
  const [overSectionId, setOverSectionId] = useState<string | null>(null);
  const [dragDimensions, setDragDimensions] = useState<{ width: number; height: number } | null>(null);
  const [draggedSectionHeight, setDraggedSectionHeight] = useState<number | null>(null);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [templateModalPageId, setTemplateModalPageId] = useState<string | null>(null);
  const [openPageMenuId, setOpenPageMenuId] = useState<string | null>(null);

  const captureSectionHeight = useCallback((id: string, height: number) => {
    sectionHeightsRef.current.set(id, height);
  }, []);

  const {
    zoom, panOffset, activeDevice,
    pages, sections, selectedSectionId, activeTemplate,
    setZoom, setPanOffset, setActiveDevice, setSelectedSection,
    updateSectionLayout, updateSectionData, moveSection, reorderSection,
    loadTemplate, loadTemplateToPage, addPage, deletePage, duplicatePage, renamePage
  } = useEditorStore();

  const hasContent = pages.some(page => page.sections.length > 0);

  const handleTemplateSelect = (templateType: TemplateType) => {
    if (templateModalPageId) {
      loadTemplateToPage(templateModalPageId, templateType);
    } else {
      loadTemplate(templateType);
    }
    setShowTemplateModal(false);
    setTemplateModalPageId(null);
  };

  const MIN_ZOOM = 5;
  const MAX_ZOOM = 200;

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleZoomChange = useCallback((newZoom: number) => {
    setZoom(Math.min(Math.max(newZoom, MIN_ZOOM), MAX_ZOOM));
  }, [setZoom]);

  const handleReset = useCallback(() => {
    setZoom(11);
    setPanOffset({ x: 0, y: 0 });
  }, [setZoom, setPanOffset]);

  const handleSectionSelect = (id: string) => {
    setSelectedSection(id);
  };

  const handleLayoutSelect = (layoutId: string) => {
    if (selectedSectionId) {
      updateSectionLayout(selectedSectionId, layoutId);
    }
  };

  const handleUpdateSection = (data: Partial<typeof sections[string]>) => {
    if (selectedSectionId) {
      updateSectionData(selectedSectionId, data);
    }
  };

  const handleCanvasClick = () => {
    setSelectedSection(null);
    setOpenPageMenuId(null);
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const sectionId = active.id as string;
    setActiveDragId(sectionId);

    for (const page of pages) {
      if (page.sections.includes(sectionId)) {
        setActiveDragPageId(page.id);
        break;
      }
    }

    const storedHeight = sectionHeightsRef.current.get(sectionId);
    if (storedHeight) {
      setDraggedSectionHeight(storedHeight);
    }

    if (active.rect.current.initial) {
      setDragDimensions({
        width: active.rect.current.initial.width,
        height: active.rect.current.initial.height,
      });
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { over } = event;
    const overId = over?.id as string | null;
    setOverSectionId(overId);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const pageId = activeDragPageId;

    setActiveDragId(null);
    setActiveDragPageId(null);
    setOverSectionId(null);
    setDragDimensions(null);
    setDraggedSectionHeight(null);

    if (over && active.id !== over.id && pageId) {
      const page = pages.find(p => p.id === pageId);
      if (!page) return;

      const oldIndex = page.sections.indexOf(active.id as string);
      const newIndex = page.sections.indexOf(over.id as string);

      if (oldIndex !== -1 && newIndex !== -1) {
        reorderSection(pageId, active.id as string, newIndex);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (e.ctrlKey || e.metaKey) {
        const delta = -e.deltaY;
        const zoomFactor = 1 + delta * 0.001;
        const newZoom = Math.min(Math.max(zoom * zoomFactor, MIN_ZOOM), MAX_ZOOM);

        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const canvasCenterX = rect.width / 2;
        const canvasTopOffset = 100;

        const contentX = (mouseX - canvasCenterX - panOffset.x) / (zoom / 100);
        const contentY = (mouseY - canvasTopOffset - panOffset.y) / (zoom / 100);

        const newPanX = mouseX - canvasCenterX - contentX * (newZoom / 100);
        const newPanY = mouseY - canvasTopOffset - contentY * (newZoom / 100);

        setZoom(newZoom);
        setPanOffset({ x: newPanX, y: newPanY });
      } else {
        setPanOffset({
          x: panOffset.x - (e.deltaX * 0.6),
          y: panOffset.y - (e.deltaY * 0.6),
        });
      }
    };

    canvas.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, [zoom, panOffset, handleZoomChange, setPanOffset]);

  const currentDevice = DEVICE_DIMENSIONS[activeDevice];
  const selectedSectionData = selectedSectionId ? sections[selectedSectionId] : null;

  const selectedSectionInfo = selectedSectionId ? (() => {
    for (const page of pages) {
      const index = page.sections.indexOf(selectedSectionId);
      if (index !== -1) {
        return {
          pageId: page.id,
          index,
          canMoveUp: index > 0,
          canMoveDown: index < page.sections.length - 1
        };
      }
    }
    return null;
  })() : null;

  const handleMoveUp = () => {
    if (selectedSectionId && selectedSectionInfo) {
      moveSection(selectedSectionInfo.pageId, selectedSectionId, 'up');
    }
  };

  const handleMoveDown = () => {
    if (selectedSectionId && selectedSectionInfo) {
      moveSection(selectedSectionInfo.pageId, selectedSectionId, 'down');
    }
  };

  const renderSectionContent = (sectionId: string) => {
    const section = sections[sectionId];
    if (!section) return null;

    if (section.type === 'navbar') {
      if (section.layoutId === 'nav-2') {
        return <Navbar2 activeDevice={activeDevice} sectionId={sectionId} />;
      }
      return <Navbar1 activeDevice={activeDevice} sectionId={sectionId} />;
    }

    if (section.type === 'hero') {
      if (section.layoutId === 'hero-2') return <Hero2 activeDevice={activeDevice} sectionId={sectionId} />;
      if (section.layoutId === 'hero-3') return <Hero3 activeDevice={activeDevice} sectionId={sectionId} />;
      return <Hero1 activeDevice={activeDevice} sectionId={sectionId} />;
    }

    if (section.type === 'features') {
      if (section.layoutId === 'features-2') return <Features2 activeDevice={activeDevice} sectionId={sectionId} />;
      if (section.layoutId === 'features-3') return <Features3 activeDevice={activeDevice} sectionId={sectionId} />;
      return <Features1 activeDevice={activeDevice} sectionId={sectionId} />;
    }

    if (section.type === 'content') {
      if (section.layoutId === 'content-2') return <Content2 activeDevice={activeDevice} sectionId={sectionId} />;
      if (section.layoutId === 'content-3') return <Content3 activeDevice={activeDevice} sectionId={sectionId} />;
      return <Content1 activeDevice={activeDevice} sectionId={sectionId} />;
    }

    if (section.type === 'testimonials') {
      if (section.layoutId === 'testimonials-2') return <Testimonials2 activeDevice={activeDevice} sectionId={sectionId} />;
      if (section.layoutId === 'testimonials-3') return <Testimonials3 activeDevice={activeDevice} sectionId={sectionId} />;
      return <Testimonials1 activeDevice={activeDevice} sectionId={sectionId} />;
    }

    if (section.type === 'pricing') {
      if (section.layoutId === 'pricing-2') return <Pricing2 activeDevice={activeDevice} sectionId={sectionId} />;
      return <Pricing1 activeDevice={activeDevice} sectionId={sectionId} />;
    }

    if (section.type === 'cta') {
      if (section.layoutId === 'cta-2') return <CTA2 activeDevice={activeDevice} sectionId={sectionId} />;
      return <CTA1 activeDevice={activeDevice} sectionId={sectionId} />;
    }

    if (section.type === 'footer') {
      if (section.layoutId === 'footer-2') return <Footer2 activeDevice={activeDevice} sectionId={sectionId} />;
      if (section.layoutId === 'footer-3') return <Footer3 activeDevice={activeDevice} sectionId={sectionId} />;
      return <Footer1 activeDevice={activeDevice} sectionId={sectionId} />;
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div
        ref={canvasRef}
        className="relative w-screen h-screen overflow-hidden select-none"
        onClick={handleCanvasClick}
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
              <div key={page.id} className="flex flex-col items-center">
                <div className="w-full h-[50px] flex items-center pl-4 pr-2 mb-4 rounded-[var(--radius)] justify-between bg-secondary">
                  <p className="text-foreground font-medium text-md flex items-center gap-3">{page.title == "Home" ? <HomeIcon width={20} /> : <FileIcon width={20} />} {page.title}</p>
                  <PageOptionsMenu
                    pageId={page.id}
                    pageTitle={page.title}
                    isOpen={openPageMenuId === page.id}
                    isOnlyPage={pages.length <= 1}
                    onToggle={() => setOpenPageMenuId(openPageMenuId === page.id ? null : page.id)}
                    onClose={() => setOpenPageMenuId(null)}
                    onRename={(newTitle) => renamePage(page.id, newTitle)}
                    onDuplicate={() => duplicatePage(page.id)}
                    onDelete={() => deletePage(page.id)}
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
                    <div className="w-full h-[800px] flex flex-col items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTemplateModalPageId(page.id);
                          setShowTemplateModal(true);
                        }}
                        className="group flex flex-col items-center gap-6 p-12 rounded-2xl transition-all duration-300"
                      >
                        <div className="w-24 h-24 rounded-full bg-blue-500 cursor-pointer flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Choose a Template</h3>
                          <p className="text-gray-500 max-w-xs">
                            Start with a pre-built template and customize it to match your brand
                          </p>
                        </div>
                      </button>
                    </div>
                  ) : (
                    <SortableContext
                      items={page.sections}
                      strategy={verticalListSortingStrategy}
                    >
                      <div className="w-full h-full flex flex-col overflow-visible">
                        {page.sections.map((sectionId) => {
                          const section = sections[sectionId];
                          if (!section) return null;
                          return (
                            <ClickableSection
                              key={sectionId}
                              id={sectionId}
                              type={section.type}
                              isSelected={selectedSectionId === sectionId}
                              isDropTarget={overSectionId === sectionId && activeDragId !== sectionId && activeDragPageId === page.id}
                              draggedHeight={draggedSectionHeight}
                              onSelect={handleSectionSelect}
                              onHeightCapture={captureSectionHeight}
                            >
                              {renderSectionContent(sectionId)}
                            </ClickableSection>
                          );
                        })}
                      </div>
                    </SortableContext>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

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
              {renderSectionContent(activeDragId)}
            </div>
          ) : null}
        </DragOverlay>

        <div className="fixed left-4 top-4 flex flex-col gap-2">
          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary text-foreground cursor-pointer transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button
            onClick={() => addPage()}
            className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer bg-secondary text-foreground"
            title="Add new page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        <SectionCustomizePopup
          key={selectedSectionId || 'popup'}
          isOpen={!!selectedSectionId}
          section={selectedSectionData || null}
          onLayoutSelect={handleLayoutSelect}
          onUpdate={handleUpdateSection}
          onMoveUp={handleMoveUp}
          onMoveDown={handleMoveDown}
          canMoveUp={selectedSectionInfo?.canMoveUp ?? false}
          canMoveDown={selectedSectionInfo?.canMoveDown ?? false}
          onClose={() => setSelectedSection(null)}
        />

        <CanvasToolbar
          zoom={zoom}
          onZoomChange={handleZoomChange}
          activeDevice={activeDevice}
          onDeviceChange={setActiveDevice}
          onReset={handleReset}
        />

        <TemplateSelectionModal
          isOpen={showTemplateModal}
          onSelect={handleTemplateSelect}
          onClose={() => {
            setShowTemplateModal(false);
            setTemplateModalPageId(null);
          }}
        />
      </div>
    </DndContext>
  );
}
