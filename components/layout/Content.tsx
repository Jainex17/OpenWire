import { DeviceType } from "@/app/store/useEditorStore";

import { EditableText } from "@/components/editor/EditableText";

interface SectionProps {
    activeDevice: DeviceType;
    sectionId: string;
}

export const Content1 = ({ activeDevice, sectionId }: SectionProps) => {
    return (
        <div className="w-full px-8 py-24 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="title" defaultValue="Everything you need" />
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="description" defaultValue="Powerful features to help you grow your business and reach more customers." />
                    </p>
                </div>

                <div className={`grid gap-8 ${activeDevice === "mobile" ? "grid-cols-1" : activeDevice === "tablet" ? "grid-cols-2" : "grid-cols-3"}`}>
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
                            <h3 className="text-xl font-bold text-gray-900 mb-3 hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field={`card-${i}-title`} defaultValue={card.title} />
                            </h3>
                            <p className="text-gray-500 leading-relaxed hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field={`card-${i}-desc`} defaultValue={card.desc} />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Content2 = ({ activeDevice, sectionId }: SectionProps) => {
    return (
        <div className="w-full px-8 py-24 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="title" defaultValue="Latest Updates" />
                    </h2>
                </div>
                <div className={`grid gap-12 ${activeDevice === "mobile" ? "grid-cols-1" : "grid-cols-2"}`}>
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400">Image Cover</div>
                            <div className="p-8">
                                <div className="text-sm font-semibold text-blue-600 mb-2 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field={`post-${i}-tag`} defaultValue="Tutorial" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field={`post-${i}-title`} defaultValue="Getting started with the new editor" />
                                </h3>
                                <p className="text-gray-600 mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field={`post-${i}-desc`} defaultValue="Learn how to make the most out of our new features in this comprehensive guide." />
                                </p>
                                <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field={`post-${i}-link`} defaultValue="Read Article →" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Content3 = ({ activeDevice, sectionId }: SectionProps) => {
    return (
        <div className="w-full px-8 py-24 bg-white text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="spotlight" defaultValue="Spotlight" />
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="title" defaultValue="Master your workflow" />
                </h3>
                <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="description" defaultValue="Our tools are designed to work together, so you can focus on building what matters most." />
                </p>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 aspect-video flex items-center justify-center">
                    <span className="text-gray-400 font-medium hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="preview" defaultValue="Product Demo Video" />
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur cursor-pointer hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-blue-600 border-b-[10px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
