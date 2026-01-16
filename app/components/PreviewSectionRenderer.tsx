import { Navbar1, Navbar2, Navbar3, Navbar4 } from "@/components/layout/Navbar";
import { Hero1, Hero2, Hero3, Hero4, Hero5 } from "@/components/layout/Hero";
import { Footer1, Footer2, Footer3 } from "@/components/layout/Footer";
import { Features1, Features2, Features3, Features4, Features5 } from "@/components/layout/Features";
import { Content1, Content2, Content3 } from "@/components/layout/Content";
import { Testimonials1, Testimonials2, Testimonials3 } from "@/components/layout/Testimonials";
import { Pricing1, Pricing2 } from "@/components/layout/Pricing";
import { CTA1, CTA2, CTA3, CTA4 } from "@/components/layout/CTA";
import { Stats1, Stats2, Stats3 } from "@/components/layout/Stats";
import { Team1, Team2, Team3 } from "@/components/layout/Team";
import { FAQ1, FAQ2, FAQ3 } from "@/components/layout/FAQ";
import { Contact1, Contact2, Contact3 } from "@/components/layout/Contact";
import { Newsletter1, Newsletter2, Newsletter3 } from "@/components/layout/Newsletter";
import { LogoCloud1, LogoCloud2, LogoCloud3 } from "@/components/layout/LogoCloud";
import { SectionData } from "@/app/store/useEditorStore";

interface PreviewSectionRendererProps {
  sectionId: string;
  sections: Record<string, SectionData>;
}

export default function PreviewSectionRenderer({ sectionId, sections }: PreviewSectionRendererProps) {
  const section = sections[sectionId];

  if (!section) return null;

  if (section.type === 'navbar') {
    if (section.layoutId === 'nav-2') return <Navbar2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'nav-3') return <Navbar3 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'nav-4') return <Navbar4 activeDevice="desktop" sectionId={sectionId} />;
    return <Navbar1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'hero') {
    if (section.layoutId === 'hero-2') return <Hero2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'hero-3') return <Hero3 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'hero-4') return <Hero4 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'hero-5') return <Hero5 activeDevice="desktop" sectionId={sectionId} />;
    return <Hero1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'features') {
    if (section.layoutId === 'features-2') return <Features2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'features-3') return <Features3 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'features-4') return <Features4 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'features-5') return <Features5 activeDevice="desktop" sectionId={sectionId} />;
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
    if (section.layoutId === 'cta-3') return <CTA3 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'cta-4') return <CTA4 activeDevice="desktop" sectionId={sectionId} />;
    return <CTA1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'footer') {
    if (section.layoutId === 'footer-2') return <Footer2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'footer-3') return <Footer3 activeDevice="desktop" sectionId={sectionId} />;
    return <Footer1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'stats') {
    if (section.layoutId === 'stats-2') return <Stats2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'stats-3') return <Stats3 activeDevice="desktop" sectionId={sectionId} />;
    return <Stats1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'team') {
    if (section.layoutId === 'team-2') return <Team2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'team-3') return <Team3 activeDevice="desktop" sectionId={sectionId} />;
    return <Team1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'faq') {
    if (section.layoutId === 'faq-2') return <FAQ2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'faq-3') return <FAQ3 activeDevice="desktop" sectionId={sectionId} />;
    return <FAQ1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'contact') {
    if (section.layoutId === 'contact-2') return <Contact2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'contact-3') return <Contact3 activeDevice="desktop" sectionId={sectionId} />;
    return <Contact1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'newsletter') {
    if (section.layoutId === 'newsletter-2') return <Newsletter2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'newsletter-3') return <Newsletter3 activeDevice="desktop" sectionId={sectionId} />;
    return <Newsletter1 activeDevice="desktop" sectionId={sectionId} />;
  }

  if (section.type === 'logocloud') {
    if (section.layoutId === 'logocloud-2') return <LogoCloud2 activeDevice="desktop" sectionId={sectionId} />;
    if (section.layoutId === 'logocloud-3') return <LogoCloud3 activeDevice="desktop" sectionId={sectionId} />;
    return <LogoCloud1 activeDevice="desktop" sectionId={sectionId} />;
  }

  return null;
}

