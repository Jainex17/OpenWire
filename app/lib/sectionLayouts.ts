export type SectionType = "navbar" | "hero" | "features" | "content" | "testimonials" | "pricing" | "cta" | "footer";

export interface LayoutOption {
    id: string;
    name: string;
    gridTemplate?: string;
}

export const SECTION_LAYOUTS: Record<SectionType, LayoutOption[]> = {
    navbar: [
        { id: "nav-1", name: "Standard Full Width" },
        { id: "nav-2", name: "Floating Pill" },
        { id: "nav-3", name: "Logo Left, Nav Center, CTA Right" },
    ],
    hero: [
        { id: "hero-1", name: "Left Text, Right Image" },
        { id: "hero-2", name: "Center Text, Bottom Image" },
        { id: "hero-3", name: "Full Width Background" },
    ],
    features: [
        { id: "features-1", name: "Grid Icons" },
        { id: "features-2", name: "Alternating Side-by-Side" },
        { id: "features-3", name: "List View" },
    ],
    content: [
        { id: "content-1", name: "3 Column Grid" },
        { id: "content-2", name: "2 Column Grid" },
        { id: "content-3", name: "Feature Highlight (Left/Right)" },
    ],
    testimonials: [
        { id: "testimonials-1", name: "3 Cards Row" },
        { id: "testimonials-2", name: "Single Large Quote" },
        { id: "testimonials-3", name: "Masonry Grid" },
    ],
    pricing: [
        { id: "pricing-1", name: "3 Tiers" },
        { id: "pricing-2", name: "2 Tiers with Comparison" },
    ],
    cta: [
        { id: "cta-1", name: "Simple Center" },
        { id: "cta-2", name: "Split Left/Right" },
    ],
    footer: [
        { id: "footer-1", name: "4 Columns" },
        { id: "footer-2", name: "Simple Concentrated" },
        { id: "footer-3", name: "Logo + Links Horizontal" },
    ],
};
