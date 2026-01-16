"use client";

import { DeviceType } from "@/app/store/useEditorStore";
import { EditableText } from "@/components/editor/EditableText";
import { Card, CardContent } from "@/components/ui/card";

interface SectionProps {
    activeDevice: DeviceType;
    sectionId: string;
}

export const Team1 = ({ activeDevice, sectionId }: SectionProps) => {
    const team = [
        { name: "Sarah Chen", role: "CEO & Founder", bio: "10+ years building startups" },
        { name: "Marcus Johnson", role: "CTO", bio: "Ex-Google, ML specialist" },
        { name: "Emily Rodriguez", role: "Head of Design", bio: "Award-winning designer" },
        { name: "Alex Thompson", role: "Head of Engineering", bio: "Open source contributor" },
    ];

    return (
        <div className="w-full px-8 py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="title" defaultValue="Meet our team" />
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="description" defaultValue="A group of passionate individuals dedicated to building the future of web development." />
                    </p>
                </div>

                <div className={`grid gap-8 ${activeDevice === 'mobile' ? 'grid-cols-1' : activeDevice === 'tablet' ? 'grid-cols-2' : 'grid-cols-4'}`}>
                    {team.map((member, i) => (
                        <Card key={i} className="group overflow-hidden border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="aspect-square bg-gray-100 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-blue-500 opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all" />
                                </div>
                            </div>
                            <CardContent className="p-6 text-center">
                                <h3 className="font-bold text-lg text-gray-900 mb-1 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field={`member-${i}-name`} defaultValue={member.name} />
                                </h3>
                                <p className="text-blue-600 font-medium text-sm mb-3 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field={`member-${i}-role`} defaultValue={member.role} />
                                </p>
                                <p className="text-gray-500 text-sm hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field={`member-${i}-bio`} defaultValue={member.bio} />
                                </p>
                                <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center cursor-pointer transition-colors">
                                        <span className="text-xs">🐦</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center cursor-pointer transition-colors">
                                        <span className="text-xs">💼</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Team2 = ({ activeDevice, sectionId }: SectionProps) => {
    const team = [
        { name: "David Kim", role: "Engineering Lead", quote: "Building tools that empower creators" },
        { name: "Lisa Wang", role: "Product Manager", quote: "Obsessed with user experience" },
        { name: "James Miller", role: "Designer", quote: "Pixels are my passion" },
    ];

    return (
        <div className="w-full px-8 py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className={`flex ${activeDevice === 'mobile' ? 'flex-col gap-12' : 'items-start gap-16'}`}>
                    <div className="flex-shrink-0 max-w-sm">
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="badge" defaultValue="Our Team" />
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="title" defaultValue="The people behind the product" />
                        </h2>
                        <p className="text-gray-600 hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="description" defaultValue="We're a small but mighty team of builders, dreamers, and doers." />
                        </p>
                    </div>

                    <div className="flex-1 space-y-6">
                        {team.map((member, i) => (
                            <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex-shrink-0" />
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <h3 className="font-bold text-gray-900 hover:outline hover:outline-2 hover:outline-blue-500">
                                            <EditableText sectionId={sectionId} field={`member-${i}-name`} defaultValue={member.name} />
                                        </h3>
                                        <span className="text-sm text-gray-500 hover:outline hover:outline-2 hover:outline-blue-500">
                                            <EditableText sectionId={sectionId} field={`member-${i}-role`} defaultValue={member.role} />
                                        </span>
                                    </div>
                                    <p className="text-gray-600 italic hover:outline hover:outline-2 hover:outline-blue-500">
                                        &ldquo;<EditableText sectionId={sectionId} field={`member-${i}-quote`} defaultValue={member.quote} />&rdquo;
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Team3 = ({ activeDevice, sectionId }: SectionProps) => {
    const team = [
        { name: "Ana Martinez", role: "Founder", color: "bg-pink-500" },
        { name: "Tom Wilson", role: "Tech Lead", color: "bg-blue-500" },
        { name: "Sophie Brown", role: "Designer", color: "bg-purple-500" },
        { name: "Mike Davis", role: "Developer", color: "bg-amber-500" },
        { name: "Emma Lee", role: "Marketing", color: "bg-emerald-500" },
        { name: "Chris Park", role: "Support", color: "bg-violet-500" },
    ];

    return (
        <div className="w-full px-8 py-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="title" defaultValue="World-class team" />
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="description" defaultValue="Backed by experience from top tech companies around the globe" />
                    </p>
                </div>

                <div className={`grid gap-6 ${activeDevice === 'mobile' ? 'grid-cols-2' : 'grid-cols-3 md:grid-cols-6'}`}>
                    {team.map((member, i) => (
                        <div key={i} className="group text-center">
                            <div className={`w-full aspect-square rounded-2xl ${member.color} mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300`} />
                            <h3 className="font-semibold text-white hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field={`member-${i}-name`} defaultValue={member.name} />
                            </h3>
                            <p className="text-gray-500 text-sm hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field={`member-${i}-role`} defaultValue={member.role} />
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="joinText" defaultValue="We're always looking for talented people" />
                    </p>
                    <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="joinCta" defaultValue="View Open Positions" />
                    </button>
                </div>
            </div>
        </div>
    );
};
