"use client";

import { useEffect, useRef, useCallback } from "react";
import CanvasToolbar from "./components/CanvasToolbar";
import ClickableSection from "./components/ClickableSection";
import SectionCustomizePopup from "./components/SectionCustomizePopup";
import { useEditorStore } from "./store/useEditorStore";

const DEVICE_DIMENSIONS = {
  desktop: { width: 1440, height: 900, label: "Desktop" },
  tablet: { width: 768, height: 1024, label: "Tablet" },
  mobile: { width: 375, height: 812, label: "Mobile" },
} as const;

export default function Home() {
  const canvasRef = useRef<HTMLDivElement>(null);

  const {
    zoom, panOffset, activeDevice,
    pages, sections, selectedSectionId,
    setZoom, setPanOffset, setActiveDevice, setSelectedSection,
    updateSectionLayout, updateSectionData
  } = useEditorStore();

  const MIN_ZOOM = 5;
  const MAX_ZOOM = 200;

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
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (e.ctrlKey || e.metaKey) {
        const delta = -e.deltaY;
        const zoomFactor = 1 + delta * 0.001;
        const newZoom = zoom * zoomFactor;
        handleZoomChange(newZoom);
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

  const renderSectionContent = (sectionId: string) => {
    const section = sections[sectionId];
    if (!section) return null;

    if (section.type === 'navbar') {
      return (
        <div
          className="w-full flex items-center justify-between px-8"
          style={{
            height: activeDevice === "mobile" ? "60px" : "80px",
            backgroundColor: sectionId.includes("page-1") ? "#1a1a2e" : "#ffffff",
          }}
        >
          <div
            className="rounded animate-pulse"
            style={{
              width: activeDevice === "mobile" ? "80px" : "120px",
              height: "24px",
              backgroundColor: sectionId.includes("page-1") ? "#ffffff30" : "#e5e5e5",
            }}
          />
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded animate-pulse"
                style={{
                  width: activeDevice === "mobile" ? "0" : "60px",
                  height: "12px",
                  backgroundColor: sectionId.includes("page-1") ? "#ffffff30" : "#e5e5e5",
                  display: activeDevice === "mobile" ? "none" : "block",
                }}
              />
            ))}
            {activeDevice === "mobile" && (
              <div className="flex flex-col gap-1">
                <div className="w-5 h-0.5 bg-gray-400 rounded" />
                <div className="w-5 h-0.5 bg-gray-400 rounded" />
                <div className="w-5 h-0.5 bg-gray-400 rounded" />
              </div>
            )}
          </div>
        </div>
      );
    }

    if (section.type === 'hero') {
      return (
        <div
          className="w-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center"
          style={{ height: activeDevice === "mobile" ? "400px" : "600px" }}
        >
          <div className="px-8 w-full">
            <div className="flex gap-8 items-center" style={{ flexDirection: activeDevice === "mobile" ? "column" : "row" }}>
              <div className="flex-1 w-full">
                <div className="h-8 bg-white/20 rounded w-3/4 mb-4 animate-pulse" />
                <div className="h-6 bg-white/20 rounded w-1/2 mb-6 animate-pulse" />
                <div className="h-4 bg-white/10 rounded w-full mb-2 animate-pulse" />
                <div className="h-4 bg-white/10 rounded w-5/6 mb-6 animate-pulse" />
                <div className="flex gap-3">
                  <div className="h-10 w-32 bg-blue-500 rounded animate-pulse" />
                  <div className="h-10 w-32 bg-white/20 rounded animate-pulse" />
                </div>
              </div>
              {activeDevice !== "mobile" && (
                <div className="flex-1 h-80 bg-white/10 rounded-lg animate-pulse" />
              )}
            </div>
          </div>
        </div>
      );
    }

    if (section.type === 'content') {
      return (
        <div
          className="w-full px-8 py-16"
          style={{ backgroundColor: section.backgroundColor || "#ffffff" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-3 mx-auto animate-pulse" />
            <div className="h-4 bg-gray-100 rounded w-2/3 mb-8 mx-auto animate-pulse" />
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: activeDevice === "mobile"
                  ? "1fr"
                  : activeDevice === "tablet"
                    ? "repeat(2, 1fr)"
                    : "repeat(3, 1fr)"
              }}
            >
              {[1, 2, 3].map((card) => (
                <div key={card} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <div className="h-32 bg-gray-100 rounded mb-4 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
                  <div className="h-3 bg-gray-100 rounded w-full mb-1 animate-pulse" />
                  <div className="h-3 bg-gray-100 rounded w-5/6 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (section.type === 'footer') {
      return (
        <div className="w-full h-64 bg-[#1a1a2e] px-8 py-12">
          <div className="flex gap-8" style={{ flexDirection: activeDevice === "mobile" ? "column" : "row" }}>
            <div className="flex-1">
              <div className="h-6 bg-white/20 rounded w-32 mb-4 animate-pulse" />
              <div className="h-3 bg-white/10 rounded w-48 mb-2 animate-pulse" />
              <div className="h-3 bg-white/10 rounded w-40 animate-pulse" />
            </div>
            {activeDevice !== "mobile" && (
              <>
                <div className="flex-1">
                  <div className="h-4 bg-white/20 rounded w-20 mb-3 animate-pulse" />
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-3 bg-white/10 rounded w-24 mb-2 animate-pulse" />
                  ))}
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-white/20 rounded w-20 mb-3 animate-pulse" />
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-3 bg-white/10 rounded w-28 mb-2 animate-pulse" />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div
      ref={canvasRef}
      className="relative w-screen h-screen bg-[#f5f0e8] overflow-hidden select-none"
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
            gap: `${40}px`,
            marginLeft: `-${(pages.length * (currentDevice.width + 40)) / 2}px`
          }}
        >
          {pages.map((page) => (
            <div key={page.id} className="flex flex-col items-center">
              <div
                className="bg-white rounded-sm overflow-hidden relative shadow-sm"
                style={{
                  width: `${currentDevice.width}px`,
                  minHeight: "800px",
                  height: "fit-content",
                  paddingBottom: "0px"
                }}
              >
                <div className="w-full h-full flex flex-col">
                  {page.sections.map((sectionId) => {
                    const section = sections[sectionId];
                    if (!section) return null;
                    return (
                      <ClickableSection
                        key={sectionId}
                        id={sectionId}
                        type={section.type}
                        isSelected={selectedSectionId === sectionId}
                        onSelect={handleSectionSelect}
                      >
                        {renderSectionContent(sectionId)}
                      </ClickableSection>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed left-4 top-4 flex flex-col gap-2">
        <button className="w-10 h-10 bg-white hover:bg-[#ebe5dc] rounded-lg flex items-center justify-center text-[#5c5347] hover:text-[#3d3529] transition-colors shadow-sm border border-[#e0d9ce]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button className="w-10 h-10 bg-white hover:bg-[#ebe5dc] rounded-lg flex items-center justify-center text-[#5c5347] hover:text-[#3d3529] transition-colors shadow-sm border border-[#e0d9ce]">
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
        onClose={() => setSelectedSection(null)}
      />

      <CanvasToolbar
        zoom={zoom}
        onZoomChange={handleZoomChange}
        activeDevice={activeDevice}
        onDeviceChange={setActiveDevice}
        onReset={handleReset}
      />
    </div>
  );
}
