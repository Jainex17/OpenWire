"use client";

import { DeviceType } from "@/app/store/useEditorStore";
import { EditableText } from "@/components/editor/EditableText";
import { Card, CardContent } from "@/components/ui/card";

interface SectionProps {
    activeDevice: DeviceType;
    sectionId: string;
}

export const Stats1 = ({ activeDevice, sectionId }: SectionProps) => {
    const stats = [
        { value: "10M+", label: "Active Users", icon: "👥" },
        { value: "99.9%", label: "Uptime", icon: "⚡" },
        { value: "150+", label: "Countries", icon: "🌍" },
        { value: "24/7", label: "Support", icon: "💬" },
    ];

    return (
        <div className="w-full px-8 py-24 bg-[#1a1a2e]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30 hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="badge" defaultValue="BY THE NUMBERS" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="title" defaultValue="Trusted by millions worldwide" />
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="description" defaultValue="Join the fastest-growing community of developers and designers building the future." />
                    </p>
                </div>
                <div className={`grid gap-6 ${activeDevice === 'mobile' ? 'grid-cols-2' : 'grid-cols-4'}`}>
                    {stats.map((stat, i) => (
                        <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                            <CardContent className="p-8 text-center">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field={`stat-${i}-value`} defaultValue={stat.value} />
                                </div>
                                <div className="text-gray-400 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field={`stat-${i}-label`} defaultValue={stat.label} />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Stats2 = ({ activeDevice, sectionId }: SectionProps) => {
    const stats = [
        { value: "$2.5B", label: "Total Revenue Generated", growth: "+127%" },
        { value: "45K+", label: "Companies Served", growth: "+89%" },
        { value: "12M", label: "Transactions Daily", growth: "+256%" },
    ];

    return (
        <div className="w-full px-8 py-24 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className={`flex ${activeDevice === 'mobile' ? 'flex-col gap-12' : 'items-center gap-16'}`}>
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="title" defaultValue="Real results, real impact" />
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="description" defaultValue="Our platform has helped thousands of businesses scale to new heights with measurable outcomes." />
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white"
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500 hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field="avatarText" defaultValue="Join 10,000+ happy customers" />
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 space-y-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className="flex items-end justify-between mb-2">
                                    <span className="text-4xl font-bold text-gray-900 hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field={`stat-${i}-value`} defaultValue={stat.value} />
                                    </span>
                                    <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field={`stat-${i}-growth`} defaultValue={stat.growth} />
                                    </span>
                                </div>
                                <p className="text-gray-500 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field={`stat-${i}-label`} defaultValue={stat.label} />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Stats3 = ({ activeDevice, sectionId }: SectionProps) => {
    const stats = [
        { value: "500K", label: "Downloads", suffix: "+" },
        { value: "98", label: "Customer Satisfaction", suffix: "%" },
        { value: "4.9", label: "App Store Rating", suffix: "★" },
        { value: "50", label: "Team Members", suffix: "+" },
    ];

    return (
        <div className="w-full px-8 py-20 bg-blue-600">
            <div className="max-w-7xl mx-auto">
                <div className={`grid gap-8 ${activeDevice === 'mobile' ? 'grid-cols-2' : 'grid-cols-4'} text-center`}>
                    {stats.map((stat, i) => (
                        <div key={i} className="relative group">
                            <div className="absolute inset-0 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors" />
                            <div className="relative p-8">
                                <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                                    <span className="hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field={`stat-${i}-value`} defaultValue={stat.value} />
                                    </span>
                                    <span className="text-blue-200 hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field={`stat-${i}-suffix`} defaultValue={stat.suffix} />
                                    </span>
                                </div>
                                <div className="text-blue-100 font-medium hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field={`stat-${i}-label`} defaultValue={stat.label} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
