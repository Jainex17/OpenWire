import { Navbar1, Navbar2 } from "@/components/layout/Navbar";
import { Hero1, Hero2, Hero3 } from "@/components/layout/Hero";
import { Footer1, Footer2, Footer3 } from "@/components/layout/Footer";
import { Features1, Features2, Features3 } from "@/components/layout/Features";
import { Content1, Content2, Content3 } from "@/components/layout/Content";
import { Testimonials1, Testimonials2, Testimonials3 } from "@/components/layout/Testimonials";
import { Pricing1, Pricing2 } from "@/components/layout/Pricing";
import { CTA1, CTA2 } from "@/components/layout/CTA";
import { SectionData } from "@/app/store/useEditorStore";

interface PreviewSectionRendererProps {
  sectionId: string;
  sections: Record<string, SectionData>;
}

export default function PreviewSectionRenderer({ sectionId, sections }: PreviewSectionRendererProps) {
  const section = sections[sectionId];

  if (!section) return null;

  if (section.type === 'navbar') {
    if (section.layoutId === 'nav-2') {
      return <Navbar2 activeDevice="desktop" sectionId={sectionId} />;
    }
    return <Navbar1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'hero') {
    if (section.layoutId === 'hero-2') return <Hero2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'hero-3') return <Hero3 activeDevice="desktop" sectionId={sectionId} />;
    return <Hero1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'features') {
    if (section.layoutId === 'features-2') return <Features2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'features-3') return <Features3 activeDevice="desktop" sectionId={sectionId} />;
    return <Features1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'content') {
    if (section.layoutId === 'content-2') return <Content2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'content-3') return <Content3 activeDevice="desktop" sectionId={sectionId} />;
    return <Content1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'testimonials') {
    if (section.layoutId === 'testimonials-2') return <Testimonials2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'testimonials-3') return <Testimonials3 activeDevice="desktop" sectionId={sectionId} />;
    return <Testimonials1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'pricing') {
    if (section.layoutId === 'pricing-2') return <Pricing2 activeDevice="desktop" sectionId={sectionId} />;
    return <Pricing1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'cta') {
    if (section.layoutId === 'cta-2') return <CTA2 activeDevice="desktop" sectionId={sectionId} />;
    return <CTA1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'footer') {
    if (section.layoutId === 'footer-2') return <Footer2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'footer-3') return <Footer3 activeDevice="desktop" sectionId={sectionId} />;
    return <Footer1 activeDevice="desktop" sectionId={sectionId} />;
  }

  return null;
}
