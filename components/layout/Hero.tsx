import { DeviceType } from "@/app/store/useEditorStore";

interface HeroProps {
    activeDevice: DeviceType;
}

export const Hero1 = ({ activeDevice }: HeroProps) => {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-semibold mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            v2.0 is now live
                        </div>
                        <h1 className="text-4xl md:text2xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                            Build faster with <span className="text-blue-500">Intelligent Blocks</span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Create stunning websites in minutes using our intuitive drag-and-drop editor. No coding required, just pure creativity.
                        </p>
                        <div className="flex gap-4 w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-8 py-3.5 md:px-6 md:py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all">
                                Start Building
                            </button>
                            <button className="flex-1 md:flex-none px-8 py-3.5 rounded-xl bg-gray-800 text-white font-semibold border border-gray-700 hover:bg-gray-700 transition-all">
                                View Demo
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
                                    <span className="text-gray-500 text-sm font-medium">Image Placeholder</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Hero2 = ({ activeDevice }: HeroProps) => {
    return (
        <div
            className="w-full relative overflow-hidden flex flex-col items-center justify-center bg-white text-center"
            style={{
                height: activeDevice === "mobile" ? "600px" : "800px",
                padding: "80px 20px"
            }}
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                    Design Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Limits</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                    Unleash your creativity with a platform aimed to empower designers and developers alike.
                </p>
                <div className="flex gap-4 mb-16">
                    <button className="px-8 py-4 rounded-full bg-black text-white font-bold text-lg hover:scale-105 transition-transform">
                        Get Started
                    </button>
                    <button className="px-8 py-4 rounded-full bg-gray-100 text-black font-bold text-lg hover:bg-gray-200 transition-colors">
                        Learn More
                    </button>
                </div>
                <div className="w-full max-w-4xl rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                     <div className="bg-gray-100 aspect-[16/9] w-full flex items-center justify-center">
                        <span className="text-gray-400 font-medium">Dashboard Preview</span>
                     </div>
                </div>
            </div>
        </div>
    );
};

export const Hero3 = ({ activeDevice }: HeroProps) => {
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Welcome to the Future
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                    Experience innovation like never before.
                </p>
                <button className="px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-black transition-all">
                    Explore Now
                </button>
            </div>
        </div>
    );
};
