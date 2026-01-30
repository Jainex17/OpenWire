import React, { Suspense } from "react";
import { useEditorStore } from "../store/useEditorStore";

const Navbar1 = React.lazy(() =>
  import("@/components/layout/Navbar").then((m) => ({ default: m.Navbar1 })),
);
const Navbar2 = React.lazy(() =>
  import("@/components/layout/Navbar").then((m) => ({ default: m.Navbar2 })),
);
const Navbar3 = React.lazy(() =>
  import("@/components/layout/Navbar").then((m) => ({ default: m.Navbar3 })),
);
const Navbar4 = React.lazy(() =>
  import("@/components/layout/Navbar").then((m) => ({ default: m.Navbar4 })),
);

const Hero1 = React.lazy(() =>
  import("@/components/layout/Hero").then((m) => ({ default: m.Hero1 })),
);
const Hero2 = React.lazy(() =>
  import("@/components/layout/Hero").then((m) => ({ default: m.Hero2 })),
);
const Hero3 = React.lazy(() =>
  import("@/components/layout/Hero").then((m) => ({ default: m.Hero3 })),
);
const Hero4 = React.lazy(() =>
  import("@/components/layout/Hero").then((m) => ({ default: m.Hero4 })),
);

const Footer1 = React.lazy(() =>
  import("@/components/layout/Footer").then((m) => ({ default: m.Footer1 })),
);
const Footer2 = React.lazy(() =>
  import("@/components/layout/Footer").then((m) => ({ default: m.Footer2 })),
);
const Footer3 = React.lazy(() =>
  import("@/components/layout/Footer").then((m) => ({ default: m.Footer3 })),
);

const Features1 = React.lazy(() =>
  import("@/components/layout/Features").then((m) => ({
    default: m.Features1,
  })),
);
const Features2 = React.lazy(() =>
  import("@/components/layout/Features").then((m) => ({
    default: m.Features2,
  })),
);
const Features3 = React.lazy(() =>
  import("@/components/layout/Features").then((m) => ({
    default: m.Features3,
  })),
);
const Features4 = React.lazy(() =>
  import("@/components/layout/Features").then((m) => ({
    default: m.Features4,
  })),
);
const Features5 = React.lazy(() =>
  import("@/components/layout/Features").then((m) => ({
    default: m.Features5,
  })),
);

const Content1 = React.lazy(() =>
  import("@/components/layout/Content").then((m) => ({ default: m.Content1 })),
);
const Content2 = React.lazy(() =>
  import("@/components/layout/Content").then((m) => ({ default: m.Content2 })),
);
const Content3 = React.lazy(() =>
  import("@/components/layout/Content").then((m) => ({ default: m.Content3 })),
);

const Testimonials1 = React.lazy(() =>
  import("@/components/layout/Testimonials").then((m) => ({
    default: m.Testimonials1,
  })),
);
const Testimonials2 = React.lazy(() =>
  import("@/components/layout/Testimonials").then((m) => ({
    default: m.Testimonials2,
  })),
);
const Testimonials3 = React.lazy(() =>
  import("@/components/layout/Testimonials").then((m) => ({
    default: m.Testimonials3,
  })),
);

const Pricing1 = React.lazy(() =>
  import("@/components/layout/Pricing").then((m) => ({ default: m.Pricing1 })),
);
const Pricing2 = React.lazy(() =>
  import("@/components/layout/Pricing").then((m) => ({ default: m.Pricing2 })),
);

const CTA1 = React.lazy(() =>
  import("@/components/layout/CTA").then((m) => ({ default: m.CTA1 })),
);
const CTA2 = React.lazy(() =>
  import("@/components/layout/CTA").then((m) => ({ default: m.CTA2 })),
);
const CTA3 = React.lazy(() =>
  import("@/components/layout/CTA").then((m) => ({ default: m.CTA3 })),
);
const CTA4 = React.lazy(() =>
  import("@/components/layout/CTA").then((m) => ({ default: m.CTA4 })),
);

const Stats1 = React.lazy(() =>
  import("@/components/layout/Stats").then((m) => ({ default: m.Stats1 })),
);
const Stats2 = React.lazy(() =>
  import("@/components/layout/Stats").then((m) => ({ default: m.Stats2 })),
);
const Stats3 = React.lazy(() =>
  import("@/components/layout/Stats").then((m) => ({ default: m.Stats3 })),
);

const Team1 = React.lazy(() =>
  import("@/components/layout/Team").then((m) => ({ default: m.Team1 })),
);
const Team2 = React.lazy(() =>
  import("@/components/layout/Team").then((m) => ({ default: m.Team2 })),
);
const Team3 = React.lazy(() =>
  import("@/components/layout/Team").then((m) => ({ default: m.Team3 })),
);

const FAQ1 = React.lazy(() =>
  import("@/components/layout/FAQ").then((m) => ({ default: m.FAQ1 })),
);
const FAQ2 = React.lazy(() =>
  import("@/components/layout/FAQ").then((m) => ({ default: m.FAQ2 })),
);
const FAQ3 = React.lazy(() =>
  import("@/components/layout/FAQ").then((m) => ({ default: m.FAQ3 })),
);

const Contact1 = React.lazy(() =>
  import("@/components/layout/Contact").then((m) => ({ default: m.Contact1 })),
);
const Contact2 = React.lazy(() =>
  import("@/components/layout/Contact").then((m) => ({ default: m.Contact2 })),
);
const Contact3 = React.lazy(() =>
  import("@/components/layout/Contact").then((m) => ({ default: m.Contact3 })),
);

const Newsletter1 = React.lazy(() =>
  import("@/components/layout/Newsletter").then((m) => ({
    default: m.Newsletter1,
  })),
);
const Newsletter2 = React.lazy(() =>
  import("@/components/layout/Newsletter").then((m) => ({
    default: m.Newsletter2,
  })),
);
const Newsletter3 = React.lazy(() =>
  import("@/components/layout/Newsletter").then((m) => ({
    default: m.Newsletter3,
  })),
);

const LogoCloud1 = React.lazy(() =>
  import("@/components/layout/LogoCloud").then((m) => ({
    default: m.LogoCloud1,
  })),
);
const LogoCloud2 = React.lazy(() =>
  import("@/components/layout/LogoCloud").then((m) => ({
    default: m.LogoCloud2,
  })),
);
const LogoCloud3 = React.lazy(() =>
  import("@/components/layout/LogoCloud").then((m) => ({
    default: m.LogoCloud3,
  })),
);

import { SectionSkeleton } from "./SectionSkeleton";

interface SectionRendererProps {
  sectionId: string;
}

export default React.memo(function SectionRenderer({
  sectionId,
}: SectionRendererProps) {
  const section = useEditorStore((state) => state.sections[sectionId]);
  const activeDevice = useEditorStore((state) => state.activeDevice);

  if (!section) return null;

  let Component;

  switch (section.type) {
    case "navbar":
      if (section.layoutId === "nav-2") Component = Navbar2;
      else if (section.layoutId === "nav-3") Component = Navbar3;
      else if (section.layoutId === "nav-4") Component = Navbar4;
      else Component = Navbar1;
      break;

    case "hero":
      if (section.layoutId === "hero-2") Component = Hero2;
      else if (section.layoutId === "hero-3") Component = Hero3;
      else if (section.layoutId === "hero-4") Component = Hero4;
      else Component = Hero1;
      break;

    case "features":
      if (section.layoutId === "features-2") Component = Features2;
      else if (section.layoutId === "features-3") Component = Features3;
      else if (section.layoutId === "features-4") Component = Features4;
      else if (section.layoutId === "features-5") Component = Features5;
      else Component = Features1;
      break;

    case "content":
      if (section.layoutId === "content-2") Component = Content2;
      else if (section.layoutId === "content-3") Component = Content3;
      else Component = Content1;
      break;

    case "testimonials":
      if (section.layoutId === "testimonials-2") Component = Testimonials2;
      else if (section.layoutId === "testimonials-3") Component = Testimonials3;
      else Component = Testimonials1;
      break;

    case "pricing":
      if (section.layoutId === "pricing-2") Component = Pricing2;
      else Component = Pricing1;
      break;

    case "cta":
      if (section.layoutId === "cta-2") Component = CTA2;
      else if (section.layoutId === "cta-3") Component = CTA3;
      else if (section.layoutId === "cta-4") Component = CTA4;
      else Component = CTA1;
      break;

    case "footer":
      if (section.layoutId === "footer-2") Component = Footer2;
      else if (section.layoutId === "footer-3") Component = Footer3;
      else Component = Footer1;
      break;

    case "stats":
      if (section.layoutId === "stats-2") Component = Stats2;
      else if (section.layoutId === "stats-3") Component = Stats3;
      else Component = Stats1;
      break;

    case "team":
      if (section.layoutId === "team-2") Component = Team2;
      else if (section.layoutId === "team-3") Component = Team3;
      else Component = Team1;
      break;

    case "faq":
      if (section.layoutId === "faq-2") Component = FAQ2;
      else if (section.layoutId === "faq-3") Component = FAQ3;
      else Component = FAQ1;
      break;

    case "contact":
      if (section.layoutId === "contact-2") Component = Contact2;
      else if (section.layoutId === "contact-3") Component = Contact3;
      else Component = Contact1;
      break;

    case "newsletter":
      if (section.layoutId === "newsletter-2") Component = Newsletter2;
      else if (section.layoutId === "newsletter-3") Component = Newsletter3;
      else Component = Newsletter1;
      break;

    case "logocloud":
      if (section.layoutId === "logocloud-2") Component = LogoCloud2;
      else if (section.layoutId === "logocloud-3") Component = LogoCloud3;
      else Component = LogoCloud1;
      break;

    default:
      return null;
  }

  if (!Component) return null;

  return (
    <Suspense fallback={<SectionSkeleton type={section.type} />}>
      <Component activeDevice={activeDevice} sectionId={sectionId} />
    </Suspense>
  );
});
