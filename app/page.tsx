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
import { useEditorStore, TemplateType } from "./store/useEditorStore";
import { FileIcon, HomeIcon, MoreHorizontal, MoreHorizontalIcon, MoreVerticalIcon } from "lucide-react";

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

  const captureSectionHeight = useCallback((id: string, height: number) => {
    sectionHeightsRef.current.set(id, height);
  }, []);

  const {
    zoom, panOffset, activeDevice,
    pages, sections, selectedSectionId, activeTemplate,
    setZoom, setPanOffset, setActiveDevice, setSelectedSection,
    updateSectionLayout, updateSectionData, moveSection, reorderSection,
    loadTemplate, loadTemplateToPage, addPage
  } = useEditorStore();

  // Check if any page has sections
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
      return (
        <div
          className="w-full flex items-center justify-between px-8 backdrop-blur-md bg-opacity-90 sticky top-0 z-50 transition-all duration-300"
          style={{
            height: activeDevice === "mobile" ? "60px" : "80px",
            backgroundColor: sectionId.includes("page-1") ? "rgba(26, 26, 46, 0.95)" : "rgba(255, 255, 255, 0.95)",
            borderBottom: sectionId.includes("page-1") ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.05)"
          }}
        >
          <div className="font-bold text-xl tracking-tight flex items-center gap-2" style={{ color: sectionId.includes("page-1") ? "#fff" : "#1a1a2e" }}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${sectionId.includes("page-1") ? "bg-blue-600" : "bg-blue-600"}`}>
              <span className="text-white font-bold">O</span>
            </div>
            <span>OpenWire</span>
          </div>

          <div className="flex gap-8 items-center">
            {activeDevice !== "mobile" && (
              ["Product", "Solutions", "Resources", "Pricing"].map((item) => (
                <span key={item} className="text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity" style={{ color: sectionId.includes("page-1") ? "#ccc" : "#4b5563" }}>
                  {item}
                </span>
              ))
            )}

            {activeDevice === "mobile" ? (
              <div className="flex flex-col gap-1.5 cursor-pointer">
                <span className={`w-6 h-0.5 rounded-full ${sectionId.includes("page-1") ? "bg-white" : "bg-gray-800"}`}></span>
                <span className={`w-6 h-0.5 rounded-full ${sectionId.includes("page-1") ? "bg-white" : "bg-gray-800"}`}></span>
                <span className={`w-6 h-0.5 rounded-full ${sectionId.includes("page-1") ? "bg-white" : "bg-gray-800"}`}></span>
              </div>
            ) : (
              <button className="px-5 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                Get Started
              </button>
            )}
          </div>
        </div>
      );
    }

    if (section.type === 'hero') {
      return (
        <div
          className="w-full relative overflow-hidden flex items-center bg-[#111827]"
          style={{
            height: activeDevice === "mobile" ? "500px" : "700px"
          }}
        >
          <div className="px-8 w-full relative z-10 max-w-7xl mx-auto">
            <div className="flex gap-12 items-center" style={{ flexDirection: activeDevice === "mobile" ? "column" : "row" }}>
              <div className="flex-1 w-full flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  v2.0 is now live
                </div>
                <h1 className="text-4xl md:text2xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                  Build faster with <span className="text-blue-500">Intelligent Blocks</span>
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                  Create stunning websites in minutes using our intuitive drag-and-drop editor. No coding required, just pure creativity.
                </p>
                <div className="flex gap-4 w-full md:w-auto">
                  <button className="flex-1 md:flex-none px-8 py-3.5 md:px-6 md:py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all">
                    Start Building
                  </button>
                  <button className="flex-1 md:flex-none px-8 py-3.5 rounded-xl bg-gray-800 text-white font-semibold border border-gray-700 hover:bg-gray-700 transition-all">
                    View Demo
                  </button>
                </div>
              </div>
              {activeDevice !== "mobile" && (
                <div className="flex-1 relative">
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 p-2">
                    <div className="rounded-xl overflow-hidden bg-gray-800 aspect-[4/3] flex flex-col items-center justify-center gap-3">
                      <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-500 text-sm font-medium">Image Placeholder</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (section.type === 'features') {
      return (
        <div className="w-full px-8 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Amazing Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Discover what makes our platform stand out from the rest.</p>
            </div>
            <div className={`grid gap-12 ${activeDevice === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'}`}>
              {[
                { title: "Real-time Sync", desc: "Collaborate with your team in real-time.", icon: "🔄" },
                { title: "Global CDN", desc: "Lightning fast content delivery worldwide.", icon: "🌍" },
                { title: "Bank-grade Security", desc: "Your data is safe with us.", icon: "🔒" },
                { title: "24/7 Support", desc: "We are here when you need us.", icon: "💬" },
                { title: "Auto Scaling", desc: "Handle any amount of traffic effortlessly.", icon: "📈" },
                { title: "Custom Domain", desc: "Use your own brand name.", icon: "🔗" }
              ].map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="text-2xl p-3 bg-gray-100 rounded-lg">{f.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (section.type === 'content') {
      return (
        <div
          className="w-full px-8 py-24"
          style={{ backgroundColor: section.backgroundColor || "#ffffff" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">Powerful features to help you grow your business and reach more customers.</p>
            </div>

            <div
              className={`grid gap-8 ${activeDevice === "mobile" ? "grid-cols-1" : activeDevice === "tablet" ? "grid-cols-2" : "grid-cols-3"}`}
            >
              {[
                { title: "Analytics", desc: "Get detailed insights into your users behavior.", color: "bg-blue-500", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                { title: "Security", desc: "Enterprise-grade protection for your data.", color: "bg-purple-500", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
                { title: "Optimization", desc: "Lightning fast load times out of the box.", color: "bg-emerald-500", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              ].map((card, i) => (
                <div key={i} className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-12 h-12 ${card.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <svg className={`w-6 h-6 ${card.color.replace('bg-', 'text-')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (section.type === 'testimonials') {
      return (
        <div className="w-full px-8 py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Trusted by Developers</h2>
            <div className={`grid gap-8 ${activeDevice === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'}`}>
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex text-yellow-400 mb-4">{"★".repeat(5)}</div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"This tool has revolutionized how we build websites. The speed and flexibility are unmatched in the industry."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <div>
                      <div className="font-bold text-gray-900">Alex Johnson</div>
                      <div className="text-sm text-gray-500">CTO, TechStart</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (section.type === 'pricing') {
      return (
        <div className="w-full px-8 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
              <p className="text-gray-600">Start free, upgrade as you grow.</p>
            </div>
            <div className={`grid gap-8 ${activeDevice === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'}`}>
              {[
                { name: "Starter", price: "$0", feats: ["1 Project", "Basic Analytics", "Community Support"] },
                { name: "Pro", price: "$29", feats: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Custom Domain"], highlight: true },
                { name: "Enterprise", price: "$99", feats: ["Dedicated Hosting", "SLA", "Account Manager", "SSO"] }
              ].map((plan, i) => (
                <div key={i} className={`p-8 rounded-2xl border ${plan.highlight ? 'border-blue-600 shadow-xl' : 'border-gray-200'} relative`}>
                  {plan.highlight && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-6">{plan.price}<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                  <button className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>Get Started</button>
                  <ul className="space-y-4">
                    {plan.feats.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-600">
                        <span className="text-green-500">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (section.type === 'cta') {
      return (
        <div className="w-full px-8 py-24 bg-[#1a1a2e] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start building?</h2>
            <p className="text-gray-400 text-lg mb-10">Join thousands of developers building the future of the web today.</p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">Start for Free</button>
              <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      );
    }

    if (section.type === 'footer') {
      return (
        <div className="w-full bg-[#0f172a] px-8 py-16 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12" style={{ gridTemplateColumns: activeDevice === "mobile" ? "1fr" : "2fr 1fr 1fr 1fr" }}>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-2xl">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">O</div>
                  OPENWIRE
                </div>
                <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                  Making web design accessible, powerful, and fun for everyone. Built with modern technology for modern brands.
                </p>
                <div className="flex gap-4 pt-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer transition-colors" />
                  ))}
                </div>
              </div>

              {[
                { title: "Product", links: ["Features", "Templates", "Integrations", "Pricing"] },
                { title: "Resources", links: ["Documentation", "Guides", "Blog", "Support"] },
                { title: "Company", links: ["About Us", "Careers", "Legal", "Privacy"] }
              ].map((col, i) => (
                <div key={i} className={activeDevice === "mobile" ? "hidden" : "block"}>
                  <h4 className="text-white font-semibold mb-6">{col.title}</h4>
                  <ul className="space-y-3">
                    {col.links.map(link => (
                      <li key={link}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{link}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
              <p>&copy; 2024 OpenWire Inc. All rights reserved.</p>
              <div className="flex gap-6">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      );
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
                  <button className="rounded-[var(--radius)] py-2 px-3 hover:bg-accent hover:text-foreground">
                    <MoreHorizontalIcon width={22} className="cursor-pointer" />
                  </button>
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
