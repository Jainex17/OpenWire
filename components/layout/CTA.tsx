import { DeviceType } from "@/app/store/useEditorStore";

interface SectionProps {
    activeDevice: DeviceType;
}

export const CTA1 = ({ activeDevice }: SectionProps) => {
    return (
        <div className="w-full px-8 py-24 bg-[#1a1a2e] text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start building?</h2>
                <p className="text-gray-400 text-lg mb-10">Join thousands of developers building the future of the web today.</p>
                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">Start for Free</button>
                    <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export const CTA2 = ({ activeDevice }: SectionProps) => {
    return (
        <div className="w-full px-8 py-20 bg-blue-600">
            <div className={`max-w-6xl mx-auto flex items-center justify-between gap-12 ${activeDevice === 'mobile' ? 'flex-col text-center' : 'flex-row text-left'}`}>
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stop wasting time on boilerplate.</h2>
                    <p className="text-blue-100 text-lg max-w-xl">
                        Get instant access to our library of pro components and ship your next project in record time.
                    </p>
                </div>
                <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                        Get All-Access Pass
                    </button>
                </div>
            </div>
        </div>
    );
};
