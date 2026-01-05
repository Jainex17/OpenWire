import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SectionType } from '@/app/lib/sectionLayouts';

export type DeviceType = "desktop" | "tablet" | "mobile";

export interface CanvasState {
    zoom: number;
    panOffset: { x: number; y: number };
    activeDevice: DeviceType;
    isDragging: boolean;
}

export interface SectionData {
    id: string;
    type: SectionType;
    layoutId: string;
    name?: string;
    backgroundColor?: string;
    content: Record<string, unknown>;
}

export interface PageData {
    id: string;
    title: string;
    sections: string[];
}

export interface ProjectState {
    pages: PageData[];
    sections: Record<string, SectionData>;
    selectedSectionId: string | null;
}

export interface EditorState extends CanvasState, ProjectState {
    setZoom: (zoom: number) => void;
    setPanOffset: (offset: { x: number; y: number }) => void;
    setActiveDevice: (device: DeviceType) => void;
    setSelectedSection: (id: string | null) => void;
    updateSectionLayout: (sectionId: string, layoutId: string) => void;
    updateSectionData: (sectionId: string, data: Partial<SectionData>) => void;
    addSection: (pageId: string, section: SectionData, index?: number) => void;
    removeSection: (pageId: string, sectionId: string) => void;
}

const generateInitialState = (): Pick<ProjectState, 'pages' | 'sections' | 'selectedSectionId'> => {
    const pages: PageData[] = [
        { id: "page-1", title: "Home", sections: [] },
        { id: "page-2", title: "About", sections: [] },
        { id: "page-3", title: "Services", sections: [] },
    ];

    const sections: Record<string, SectionData> = {};

    pages.forEach(page => {
        const headerId = `header-${page.id}`;
        sections[headerId] = { id: headerId, type: 'navbar', layoutId: 'nav-1', content: {} };
        page.sections.push(headerId);

        if (page.id === 'page-1') {
            const heroId = `hero-${page.id}`;
            sections[heroId] = { id: heroId, type: 'hero', layoutId: 'hero-1', content: {} };
            page.sections.push(heroId);
        }

        const contentCount = page.id === 'page-1' ? 8 : (page.id === 'page-2' ? 6 : 5);

        for (let i = 0; i < contentCount; i++) {
            const contentId = `content-${page.id}-${i}`;
            sections[contentId] = {
                id: contentId,
                type: 'content',
                layoutId: 'content-1',
                backgroundColor: i % 2 === 0 ? "#ffffff" : "#f8f8f8",
                content: {}
            };
            page.sections.push(contentId);
        }

        const footerId = `footer-${page.id}`;
        sections[footerId] = { id: footerId, type: 'footer', layoutId: 'footer-1', content: {} };
        page.sections.push(footerId);
    });

    return { pages, sections, selectedSectionId: null };
};

const DEFAULT_CANVAS_STATE = {
    zoom: 20,
    panOffset: { x: 0, y: 0 },
    activeDevice: "desktop" as DeviceType,
    isDragging: false,
};

export const useEditorStore = create<EditorState>()(
    persist(
        (set) => ({
            ...DEFAULT_CANVAS_STATE,
            ...generateInitialState(),

            setZoom: (zoom) => set({ zoom }),
            setPanOffset: (panOffset) => set({ panOffset }),
            setActiveDevice: (activeDevice) => set({ activeDevice }),
            setSelectedSection: (selectedSectionId) => set({ selectedSectionId }),

            updateSectionLayout: (sectionId, layoutId) => set((state) => ({
                sections: {
                    ...state.sections,
                    [sectionId]: { ...state.sections[sectionId], layoutId }
                }
            })),

            updateSectionData: (sectionId, data) => set((state) => ({
                sections: {
                    ...state.sections,
                    [sectionId]: { ...state.sections[sectionId], ...data }
                }
            })),

            addSection: (pageId, section, index) => set((state) => {
                const pageIndex = state.pages.findIndex(p => p.id === pageId);
                if (pageIndex === -1) return state;

                const newPages = [...state.pages];
                const newSectionsList = [...newPages[pageIndex].sections];

                if (typeof index === 'number') {
                    newSectionsList.splice(index, 0, section.id);
                } else {
                    newSectionsList.push(section.id);
                }

                newPages[pageIndex] = { ...newPages[pageIndex], sections: newSectionsList };

                return {
                    pages: newPages,
                    sections: { ...state.sections, [section.id]: section }
                };
            }),

            removeSection: (pageId, sectionId) => set((state) => {
                const pageIndex = state.pages.findIndex(p => p.id === pageId);
                if (pageIndex === -1) return state;

                const newPages = [...state.pages];
                newPages[pageIndex] = {
                    ...newPages[pageIndex],
                    sections: newPages[pageIndex].sections.filter(id => id !== sectionId)
                };

                const newSections = { ...state.sections };
                delete newSections[sectionId];

                return {
                    pages: newPages,
                    sections: newSections
                };
            }),
        }),
        {
            name: 'openwire-editor-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                pages: state.pages,
                sections: state.sections,
            })
        }
    )
);
