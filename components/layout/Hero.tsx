import { DeviceType } from "@/app/store/useEditorStore";

import { EditableText } from "@/components/editor/EditableText";

interface HeroProps {
    activeDevice: DeviceType;
    sectionId: string;
}

export const Hero1 = ({ activeDevice, sectionId }: HeroProps) => {
    return (
        <div
            className="w-full relative overflow-hidden flex items-center bg-[#111827]"
            style={{
                height: activeDevice === "mobile" ? "500px" : "700px"
            }}
        >
            <div className="px-8 w-full relative z-10 max-w-7xl mx-auto">
                <div className="flex gap-12 items-center" style={{ flexDirection: activeDevice === "mobile" ? "column" : "row" }}>
                    <div className="flex-1 w-full flex flex-col items-start text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-semibold mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            <EditableText sectionId={sectionId} field="badge" defaultValue="v2.0 is now live" />
                        </div>
                        <h1 className="text-4xl md:text2xl font-extrabold tracking-tight text-white mb-6 leading-tight hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="title" defaultValue="Build faster with" /> <span className="text-blue-500 hover:outline hover:outline-2 hover:outline-blue-500"><EditableText sectionId={sectionId} field="highlight" defaultValue="Intelligent Blocks" /></span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="description" defaultValue="Create stunning websites in minutes using our intuitive drag-and-drop editor. No coding required, just pure creativity." />
                        </p>
                        <div className="flex gap-4 w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-8 py-3.5 md:px-6 md:py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field="primaryCta" defaultValue="Start Building" />
                            </button>
                            <button className="flex-1 md:flex-none px-8 py-3.5 rounded-xl bg-gray-800 text-white font-semibold border border-gray-700 hover:bg-gray-700 transition-all hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field="secondaryCta" defaultValue="View Demo" />
                            </button>
                        </div>
                    </div>
                    {activeDevice !== "mobile" && (
                        <div className="flex-1 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 p-2">
                                <div className="rounded-xl overflow-hidden bg-gray-800 aspect-[4/3] flex flex-col items-center justify-center gap-3">
                                    <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-500 text-sm font-medium hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field="placeholder" defaultValue="Image Placeholder" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Hero2 = ({ activeDevice, sectionId }: HeroProps) => {
    return (
        <div
            className="w-full relative overflow-hidden flex flex-col items-center justify-center bg-white text-center"
            style={{
                height: activeDevice === "mobile" ? "600px" : "800px",
                padding: "80px 20px"
            }}
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="title" defaultValue="Design Without" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:outline hover:outline-2 hover:outline-blue-500"><EditableText sectionId={sectionId} field="highlight" defaultValue="Limits" /></span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="description" defaultValue="Unleash your creativity with a platform aimed to empower designers and developers alike." />
                </p>
                <div className="flex gap-4 mb-16">
                    <button className="px-8 py-4 rounded-full bg-black text-white font-bold text-lg hover:scale-105 transition-transform hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="primaryCta" defaultValue="Get Started" />
                    </button>
                    <button className="px-8 py-4 rounded-full bg-gray-100 text-black font-bold text-lg hover:bg-gray-200 transition-colors hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="secondaryCta" defaultValue="Learn More" />
                    </button>
                </div>
                <div className="w-full max-w-4xl rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-100 aspect-[16/9] w-full flex items-center justify-center">
                        <span className="text-gray-400 font-medium hover:outline hover:outline-2 hover:outline-blue-500">Dashboard Preview</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Hero3 = ({ activeDevice, sectionId }: HeroProps) => {
    return (
        <div
            className="w-full relative flex items-center justify-center bg-cover bg-center"
            style={{
                height: "600px",
                backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center text-white px-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="title" defaultValue="Welcome to the Future" />
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="description" defaultValue="Experience innovation like never before." />
                </p>
                <button className="px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-black transition-all hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="cta" defaultValue="Explore Now" />
                </button>
            </div>
        </div>
    );
};

export const Hero4 = ({ activeDevice, sectionId }: HeroProps) => {
    return (
        <div
            className="w-full relative overflow-hidden flex items-center bg-blue-600"
            style={{
                height: activeDevice === "mobile" ? "700px" : "800px"
            }}
        >
            
            <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

            <div className="w-full relative z-10 px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 hover:outline hover:outline-2 hover:outline-blue-500">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <EditableText sectionId={sectionId} field="badge" defaultValue="Currently in Beta — Join the waitlist" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="title" defaultValue="The future of" />
                        <br />
                        <span className="text-blue-100 hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="highlight" defaultValue="web creation" />
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="description" defaultValue="Build stunning websites with AI-powered tools. No code required, just pure imagination." />
                    </p>

                    <div className={`flex gap-4 justify-center ${activeDevice === 'mobile' ? 'flex-col' : 'flex-row'}`}>
                        <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-white/90 transition-all shadow-xl hover:scale-105 hover:outline hover:outline-2 hover:outline-blue-500">
                            <span className="flex items-center gap-2">
                                <EditableText sectionId={sectionId} field="primaryCta" defaultValue="Start for Free" />
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="secondaryCta" defaultValue="Watch Demo" />
                        </button>
                    </div>

                    <div className="mt-16 flex items-center justify-center gap-8 text-white/60 text-sm">
                        <div className="flex items-center gap-2 hover:outline hover:outline-2 hover:outline-blue-500">
                            <span>✓</span>
                            <EditableText sectionId={sectionId} field="feature1" defaultValue="Free forever plan" />
                        </div>
                        <div className="flex items-center gap-2 hover:outline hover:outline-2 hover:outline-blue-500">
                            <span>✓</span>
                            <EditableText sectionId={sectionId} field="feature2" defaultValue="No credit card required" />
                        </div>
                        <div className={`flex items-center gap-2 hover:outline hover:outline-2 hover:outline-blue-500 ${activeDevice === 'mobile' ? 'hidden' : ''}`}>
                            <span>✓</span>
                            <EditableText sectionId={sectionId} field="feature3" defaultValue="Cancel anytime" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Hero5 = ({ activeDevice, sectionId }: HeroProps) => {
    return (
        <div className="w-full relative" style={{ height: activeDevice === "mobile" ? "auto" : "100vh", minHeight: "700px" }}>
            <div className={`flex ${activeDevice === "mobile" ? "flex-col" : "flex-row"} h-full`}>
                
                <div className="flex-1 bg-[#0a0a0a] flex items-center justify-center p-12">
                    <div className="max-w-lg">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl mb-8">
                            O
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="title" defaultValue="Build websites that convert" />
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="description" defaultValue="Turn your ideas into reality with our powerful, intuitive platform. Join over 50,000 creators worldwide." />
                        </p>

                        <div className="flex flex-col gap-4">
                            <button className="w-full py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field="primaryCta" defaultValue="Get Started — It's Free" />
                            </button>
                            <button className="w-full py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field="secondaryCta" defaultValue="Schedule a Demo" />
                            </button>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10">
                            <p className="text-gray-500 text-sm mb-4 hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field="socialProof" defaultValue="Trusted by leading companies" />
                            </p>
                            <div className="flex gap-6">
                                {["Company", "Brand", "Startup", "Agency"].map((name, i) => (
                                    <span key={i} className="text-gray-600 font-semibold hover:text-white transition-colors cursor-pointer hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field={`logo-${i}`} defaultValue={name} />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="flex-1 bg-blue-600 flex items-center justify-center p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
                    <div className="relative z-10 text-center text-white">
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field="cardTitle" defaultValue="Launch in minutes" />
                            </h3>
                            <p className="text-white/80 mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field="cardDesc" defaultValue="From idea to live website in record time. No coding skills required." />
                            </p>
                            <div className="flex justify-center gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field="stat1Value" defaultValue="50K+" />
                                    </div>
                                    <div className="text-sm text-white/70 hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field="stat1Label" defaultValue="Users" />
                                    </div>
                                </div>
                                <div className="w-px bg-white/20" />
                                <div className="text-center">
                                    <div className="text-3xl font-bold hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field="stat2Value" defaultValue="4.9★" />
                                    </div>
                                    <div className="text-sm text-white/70 hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field="stat2Label" defaultValue="Rating" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
