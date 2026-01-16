import { DeviceType } from "@/app/store/useEditorStore";

import { EditableText } from "@/components/editor/EditableText";

interface SectionProps {
    activeDevice: DeviceType;
    sectionId: string;
}

export const CTA1 = ({ activeDevice, sectionId }: SectionProps) => {
    return (
        <div className="w-full px-8 py-24 bg-[#1a1a2e] text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="title" defaultValue="Ready to start building?" />
                </h2>
                <p className="text-gray-400 text-lg mb-10 hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="description" defaultValue="Join thousands of developers building the future of the web today." />
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="primaryCta" defaultValue="Start for Free" />
                    </button>
                    <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="secondaryCta" defaultValue="Contact Sales" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export const CTA2 = ({ activeDevice, sectionId }: SectionProps) => {
    return (
        <div className="w-full px-8 py-20 bg-blue-600">
            <div className={`max-w-6xl mx-auto flex items-center justify-between gap-12 ${activeDevice === 'mobile' ? 'flex-col text-center' : 'flex-row text-left'}`}>
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="title" defaultValue="Stop wasting time on boilerplate." />
                    </h2>
                    <p className="text-blue-100 text-lg max-w-xl hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="description" defaultValue="Get instant access to our library of pro components and ship your next project in record time." />
                    </p>
                </div>
                <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="cta" defaultValue="Get All-Access Pass" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export const CTA3 = ({ activeDevice, sectionId }: SectionProps) => {
    return (
        <div className="w-full px-8 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-[#1a1a2e] p-12 md:p-16">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <div className={`flex ${activeDevice === 'mobile' ? 'flex-col gap-10' : 'items-center justify-between gap-16'}`}>
                            <div className="flex-1">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field="badge" defaultValue="Limited Time Offer" />
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field="title" defaultValue="Ready to transform your workflow?" />
                                </h2>
                                <p className="text-lg text-gray-300 mb-8 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field="description" defaultValue="Join thousands of teams who have already made the switch. Start your free trial today." />
                                </p>

                                <div className="flex flex-wrap gap-6 mb-8">
                                    {["No credit card", "14-day trial", "Cancel anytime"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-gray-300 hover:outline hover:outline-2 hover:outline-blue-500">
                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <EditableText sectionId={sectionId} field={`feature-${i}`} defaultValue={item} />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-xl hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field="primaryCta" defaultValue="Start Free Trial" />
                                    </button>
                                    <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-colors hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field="secondaryCta" defaultValue="Talk to Sales" />
                                    </button>
                                </div>
                            </div>

                            {activeDevice !== 'mobile' && (
                                <div className="flex-shrink-0">
                                    <div className="w-64 h-64 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-6xl font-black text-white mb-2 hover:outline hover:outline-2 hover:outline-blue-500">
                                                <EditableText sectionId={sectionId} field="promoValue" defaultValue="50%" />
                                            </div>
                                            <div className="text-purple-300 font-medium hover:outline hover:outline-2 hover:outline-blue-500">
                                                <EditableText sectionId={sectionId} field="promoLabel" defaultValue="OFF First Year" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CTA4 = ({ activeDevice, sectionId }: SectionProps) => {
    return (
        <div className="w-full px-8 py-32 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8 hover:outline hover:outline-2 hover:outline-blue-500">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <EditableText sectionId={sectionId} field="badge" defaultValue="Early Access Available" />
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="title" defaultValue="Start building today" />
                </h2>

                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="description" defaultValue="Be among the first to experience our revolutionary platform. Limited spots available." />
                </p>

                <div className="flex flex-col items-center gap-6">
                    <div className={`flex gap-4 ${activeDevice === 'mobile' ? 'flex-col w-full' : 'flex-row'}`}>
                        <button className="px-10 py-5 bg-gray-900 text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all hover:scale-105 shadow-2xl shadow-gray-900/30 hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="primaryCta" defaultValue="Join the Waitlist" />
                        </button>
                        <button className="px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="secondaryCta" defaultValue="Learn More" />
                        </button>
                    </div>

                    <div className="flex items-center gap-3 text-gray-500 hover:outline hover:outline-2 hover:outline-blue-500">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white" />
                            ))}
                        </div>
                        <span className="text-sm">
                            <EditableText sectionId={sectionId} field="socialProof" defaultValue="2,847 people joined this week" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
