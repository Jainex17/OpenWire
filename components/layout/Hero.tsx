import { DeviceType } from "@/app/store/useEditorStore";

import { EditableText } from "@/components/editor/EditableText";

interface HeroProps {
    activeDevice: DeviceType;
    sectionId: string;
}

export const Hero1 = ({ activeDevice, sectionId }: HeroProps) => {
    return (
        <div
            className="w-full relative overflow-hidden flex items-center"
            style={{
                height: activeDevice === "mobile" ? "500px" : "700px"
            }}
        >
            <div className="px-8 w-full relative z-10 max-w-7xl mx-auto">
                <div className="flex gap-12 items-center" style={{ flexDirection: activeDevice === "mobile" ? "column" : "row" }}>
                    <div className="flex-1 w-full flex flex-col items-start text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-black text-xs font-semibold mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            <EditableText sectionId={sectionId} field="badge" defaultValue="v2.0 is now live" />
                        </div>
                        <h1 className="text-4xl md:text2xl font-extrabold tracking-tight text-black mb-6 leading-tight hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="title" defaultValue="Build faster with" /> <span className="text-black hover:outline hover:outline-2 hover:outline-blue-500"><EditableText sectionId={sectionId} field="highlight" defaultValue="Intelligent Blocks" /></span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="description" defaultValue="Create stunning websites in minutes using our intuitive drag-and-drop editor. No coding required, just pure creativity." />
                        </p>
                        <div className="flex gap-4 w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-8 py-3.5 md:px-6 md:py-2 rounded-xl bg-blue-600 text-black font-semibold hover:bg-blue-700 transition-all hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field="primaryCta" defaultValue="Start Building" />
                            </button>
                            <button className="flex-1 md:flex-none px-8 py-3.5 rounded-xl bg-gray-800 text-black font-semibold border border-gray-700 hover:bg-gray-700 transition-all hover:outline hover:outline-2 hover:outline-blue-500">
                                <EditableText sectionId={sectionId} field="secondaryCta" defaultValue="View Demo" />
                            </button>
                        </div>
                    </div>
                    {activeDevice !== "mobile" && (
                        <div className="flex-1 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 p-2">
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
        <header className="relative min-h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-6 pb-4 text-4xl font-bold md:text-6xl">
                        <EditableText sectionId={sectionId} field="title" defaultValue="The Website You Want Without The Dev Time." />
                    </h1>
                    <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
                        <EditableText sectionId={sectionId} field="description" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus" />
                    </p>
                    <a href="#" className="inline-block rounded-full bg-[#c9fd02] px-8 py-4 text-center font-bold text-black transition hover:border-black">
                        <EditableText sectionId={sectionId} field="button_text" defaultValue="Get Started" />
                    </a>
                </div>
            </div>

            <div className="pb-12 px-4">
                <div className="mx-auto max-w-6xl grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 md:grid-cols-5">
                    <div className="mx-auto">
                        <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a267_Microsoft%20Logo.svg" alt="" className="inline-block" />
                    </div>
                    <div className="mx-auto">
                        <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26a_PayPal%20Logo.svg" alt="" className="inline-block" />
                    </div>
                    <div className="mx-auto">
                        <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a268_Google%20Logo.svg" alt="" className="inline-block" />
                    </div>
                    <div className="mx-auto">
                        <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a269_Chase%20Logo.svg" alt="" className="inline-block" />
                    </div>
                    <div className="mx-auto">
                        <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26b_Walmart%20Logo.svg" alt="" className="inline-block" />
                    </div>
                </div>
            </div>
        </header>
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
            <div className="relative z-10 text-center text-black px-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="title" defaultValue="Welcome to the Future" />
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="description" defaultValue="Experience innovation like never before." />
                </p>
                <button className="px-8 py-3 border-2 border-white text-black font-bold rounded hover:bg-white hover:text-black transition-all hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="cta" defaultValue="Explore Now" />
                </button>
            </div>
        </div>
    );
};

export const Hero4 = ({ activeDevice, sectionId }: HeroProps) => {
    return (
        <div
            className="w-full relative overflow-hidden flex items-center"
            style={{
                height: activeDevice === "mobile" ? "700px" : "800px"
            }}
        >

            <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

            <div className="w-full relative z-10 px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-black mb-8 hover:outline hover:outline-2 hover:outline-blue-500">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <EditableText sectionId={sectionId} field="badge" defaultValue="Currently in Beta" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-black mb-8 leading-tight tracking-tight hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="title" defaultValue="The future of" />
                        <br />
                        <span className="text-black hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="highlight" defaultValue="web creation" />
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-2xl mx-auto leading-relaxed hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="description" defaultValue="Build stunning websites with AI-powered tools. No code required, just pure imagination." />
                    </p>

                    <div className={`flex gap-4 justify-center ${activeDevice === 'mobile' ? 'flex-col' : 'flex-row'}`}>
                        <button className="px-8 py-4 bg-blue-500 text-white font-bold rounded-2xl hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="secondaryCta" defaultValue="Watch Demo" />
                        </button>
                    </div>

                    <div className="mt-16 flex items-center justify-center gap-8 text-black/60 text-sm">
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
