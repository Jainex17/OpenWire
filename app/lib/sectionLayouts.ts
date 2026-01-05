export type SectionType = "navbar" | "hero" | "content" | "footer";

export interface LayoutOption {
    id: string;
    name: string;
    gridTemplate?: string;
}

export const SECTION_LAYOUTS: Record<SectionType, LayoutOption[]> = {
    navbar: [
        { id: "nav-1", name: "Logo Left, Nav Right" },
        { id: "nav-2", name: "Logo Center, Nav Center" },
        { id: "nav-3", name: "Logo Left, Nav Center, CTA Right" },
    ],
    hero: [
        { id: "hero-1", name: "Left Text, Right Image" },
        { id: "hero-2", name: "Center Text, Bottom Image" },
        { id: "hero-3", name: "Full Width Background" },
    ],
    content: [
        { id: "content-1", name: "3 Column Grid" },
        { id: "content-2", name: "2 Column Grid" },
        { id: "content-3", name: "Feature Highlight (Left/Right)" },
    ],
    footer: [
        { id: "footer-1", name: "4 Columns" },
        { id: "footer-2", name: "Simple Concentrated" },
        { id: "footer-3", name: "Logo + Links Horizontal" },
    ],
};
