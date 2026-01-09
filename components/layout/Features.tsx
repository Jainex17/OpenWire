import { DeviceType } from "@/app/store/useEditorStore";

interface SectionProps {
    activeDevice: DeviceType;
}

export const Features1 = ({ activeDevice }: SectionProps) => {
    return (
        <div className="w-full px-8 py-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Amazing Features</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Discover what makes our platform stand out from the rest.</p>
                </div>
                <div className={`grid gap-12 ${activeDevice === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'}`}>
                    {[
                        { title: "Real-time Sync", desc: "Collaborate with your team in real-time.", icon: "🔄" },
                        { title: "Global CDN", desc: "Lightning fast content delivery worldwide.", icon: "🌍" },
                        { title: "Bank-grade Security", desc: "Your data is safe with us.", icon: "🔒" },
                        { title: "24/7 Support", desc: "We are here when you need us.", icon: "💬" },
                        { title: "Auto Scaling", desc: "Handle any amount of traffic effortlessly.", icon: "📈" },
                        { title: "Custom Domain", desc: "Use your own brand name.", icon: "🔗" }
                    ].map((f, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <div className="text-2xl p-3 bg-gray-100 rounded-lg">{f.icon}</div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-gray-900">{f.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Features2 = ({ activeDevice }: SectionProps) => {
    return (
        <div className="w-full px-8 py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto space-y-24">
                {[
                    { title: "Seamless Integration", desc: "Connect with your favorite tools in seconds.", icon: "🔌", align: "right" },
                    { title: "Advanced Analytics", desc: "Track every metric that matters to your growth.", icon: "📊", align: "left" },
                    { title: "Team Collaboration", desc: "Work together without stepping on toes.", icon: "👥", align: "right" }
                ].map((f, i) => (
                    <div key={i} className={`flex items-center gap-12 ${activeDevice === 'mobile' ? 'flex-col' : f.align === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="flex-1 space-y-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">
                                {f.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">{f.title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">{f.desc}</p>
                            <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                                Learn more <span>→</span>
                            </button>
                        </div>
                        <div className="flex-1 bg-white rounded-3xl shadow-xl h-[300px] w-full flex items-center justify-center text-gray-300 font-medium border border-gray-100">
                            Image Preview
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Features3 = ({ activeDevice }: SectionProps) => {
    return (
        <div className="w-full px-8 py-24 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                    <div className="text-center pb-12 border-b border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
                    </div>
                    {[
                        { title: "Performance First", desc: "Built for speed and reliability from the ground up." },
                        { title: "Secure by Design", desc: "Security is not an afterthought, it is our foundation." },
                        { title: "Developer Friendly", desc: "API-first approach with extensive documentation." },
                        { title: "24/7 Expert Support", desc: "Get help from engineers, not bots." }
                    ].map((f, i) => (
                        <div key={i} className="flex gap-6 group hover:bg-gray-50 p-6 rounded-xl transition-colors">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                                {i + 1}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{f.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
