"use client";

import { DeviceType } from "@/app/store/useEditorStore";
import { EditableText } from "@/components/editor/EditableText";

interface SectionProps {
    activeDevice: DeviceType;
    sectionId: string;
}

export const LogoCloud1 = ({ activeDevice, sectionId }: SectionProps) => {
    const logos = ["Vercel", "Stripe", "GitHub", "Notion", "Slack", "Linear"];

    return (
        <div className="w-full px-8 py-16 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto">
                <p className="text-center text-sm font-medium text-gray-500 mb-10 uppercase tracking-widest hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="title" defaultValue="Trusted by industry leaders" />
                </p>
                <div className={`grid gap-8 items-center justify-items-center ${activeDevice === 'mobile' ? 'grid-cols-3' : 'grid-cols-6'}`}>
                    {logos.map((logo, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center h-12 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
                        >
                            <span className="text-xl font-bold text-gray-400 hover:text-gray-900 transition-colors hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field={`logo-${i}`} defaultValue={logo} />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const LogoCloud2 = ({ activeDevice, sectionId }: SectionProps) => {
    const logos = ["Microsoft", "Google", "Amazon", "Meta", "Apple"];

    return (
        <div className="w-full px-8 py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="title" defaultValue="Powering the world's best teams" />
                    </h3>
                    <p className="text-gray-500 hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="subtitle" defaultValue="From startups to Fortune 500 companies" />
                    </p>
                </div>
                <div className={`flex flex-wrap justify-center gap-12 ${activeDevice === 'mobile' ? 'gap-6' : 'gap-16'}`}>
                    {logos.map((logo, i) => (
                        <div
                            key={i}
                            className="group relative flex items-center justify-center px-8 py-4"
                        >
                            <div className="absolute inset-0 bg-gray-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100" />
                            <span className="relative text-2xl font-black text-gray-300 group-hover:text-gray-900 transition-colors hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field={`logo-${i}`} defaultValue={logo} />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const LogoCloud3 = ({ activeDevice, sectionId }: SectionProps) => {
    const logos = ["Spotify", "Netflix", "Uber", "Airbnb", "Shopify", "Twitch"];

    return (
        <div className="w-full px-8 py-16 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 text-sm hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="prefix" defaultValue="Trusted by" />
                        </p>
                        <p className="text-white font-bold text-2xl hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="highlight" defaultValue="2,000+ companies" />
                        </p>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div className={`flex items-center justify-end gap-12 ${activeDevice === 'mobile' ? 'flex-wrap justify-center gap-6' : ''}`}>
                            {logos.map((logo, i) => (
                                <span
                                    key={i}
                                    className="text-lg font-bold text-gray-600 hover:text-white transition-colors whitespace-nowrap hover:outline hover:outline-2 hover:outline-blue-500"
                                >
                                    <EditableText sectionId={sectionId} field={`logo-${i}`} defaultValue={logo} />
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
