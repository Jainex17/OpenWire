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
