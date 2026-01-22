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
        <header className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="722" viewBox="0 0 1440 722" fill="none" className="absolute z-0 ">
                <g clipPath="url(#clip0_244_74)">
                    <rect width="1440" height="769" fill="black" />
                    <g style={{ mixBlendMode: 'lighten' }} opacity="0.1">
                        <rect width="1440" height="770" fill="url(#paint0_linear_244_74)" />
                    </g>
                    <mask id="mask0_244_74" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="769">
                        <rect width="1440" height="769" fill="black" />
                    </mask>
                    <g mask="url(#mask0_244_74)">
                        <g opacity="0.12">
                            <mask id="mask1_244_74" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="384" width="1466" height="385">
                                <rect y="384.5" width="1465.23" height="384.5" fill="url(#paint1_linear_244_74)" />
                            </mask>
                            <g mask="url(#mask1_244_74)">
                                <path d="M1889.71 735.388L1705.9 644.162H1598.19H1490.47H1382.76H1275.06H1167.35H1059.63L1017.31 578.407L985.331 528.752L960.328 489.917L940.258 458.746L923.779 433.146L910.005 411.765L898.322 393.635H847.886H797.449H747.012H696.553H646.116H595.679L582.473 411.765L566.927 433.146L548.288 458.746L525.604 489.917L497.374 528.752L461.234 578.407L413.412 644.162H305.696H197.981H90.2891H-17.4257H-125.141H-232.833L-424.306 735.388" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M-295.749 735.386L-125.141 644.16L-2.12896 578.405H90.5392H183.207H275.898H368.566L416.048 528.75H497.374H578.7H660.026H741.352H822.679H904.004H985.331H1066.66L1109.98 578.405H1202.65H1295.34H1388.01H1480.67L1598.19 644.16L1761.16 735.386" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M-167.19 735.386L-17.4253 644.159L90.5397 578.404L172.07 528.749L235.804 489.915H308.242H380.704L417.639 458.743H482.964H548.289H613.636H678.96H744.285H809.61H874.934H940.259H1005.58H1070.91L1105.25 489.915H1177.69H1250.15L1310.64 528.749L1388.01 578.404L1490.47 644.159L1632.6 735.386" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M-232.833 644.159L-94.8192 578.404H-2.12825L90.7444 528.749H172.071H253.396H334.723H416.049L453.166 489.915L482.964 458.743L507.444 433.144H566.927H626.388H685.87H745.354H804.836H864.297H923.78H983.263L1005.58 458.743L1032.79 489.915L1066.66 528.749H1147.98H1229.31H1310.64H1391.96L1480.67 578.404H1573.37L1705.9 644.159" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M-38.6328 735.385L90.2887 644.158L183.207 578.403L253.396 528.748L308.242 489.914L352.314 458.743L388.5 433.143H447.96L473.303 411.761H527.9H582.473H637.069H691.666H746.239H800.835H855.409H910.005H964.601H1019.17H1073.77H1128.34L1161.69 433.143H1221.15L1266.88 458.743H1332.23L1395.05 489.914" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1889.71 735.386H1761.16H1632.6H1504.04H1375.48H1246.92H1118.39H989.831L951.941 644.159L924.62 578.404L904.005 528.749L887.889 489.915L874.934 458.744L864.296 433.144L855.409 411.762L847.886 393.633L841.408 378.048L835.793 364.522H792.017H748.217H704.44H660.64L653.89 378.048L646.116 393.633L637.07 411.762L626.387 433.144L613.635 458.744L598.066 489.915L578.7 528.749L553.925 578.404L521.104 644.159L475.599 735.386H347.042H218.483H89.9256H-38.6324H-167.19H-295.748H-424.306" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M89.9268 735.388L197.983 644.161L275.899 578.406L334.723 528.751L380.705 489.917H453.166H525.605H598.067H670.529H742.967H815.429H887.891H960.329H1032.79H1105.25L1147.98 528.751L1202.65 578.406L1275.06 644.161L1375.48 735.388" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M-94.8198 578.406L9.41755 528.751H90.7437L163.342 489.917H235.803L286.99 458.745H352.314H417.639L447.96 433.145H507.443L527.9 411.764L545.242 393.634H595.679L607.021 378.049H653.889H700.78H747.649H794.539H841.408H888.299L898.322 393.634H948.759L964.602 411.764L983.262 433.145H1042.72L1070.91 458.745H1136.23H1201.56L1250.15 489.917H1322.61L1391.96 528.751H1473.29L1573.36 578.406" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M218.483 735.386L305.696 644.159L368.566 578.404H461.234H553.925H646.593H739.284H831.952H924.62H1017.31H1109.98L1167.35 644.159L1246.92 735.386" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M347.042 735.386L413.412 644.159H521.105H628.82H736.535H844.227H951.942H1059.63L1118.39 735.386" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.41895 528.75L90.8813 489.916H163.343L221.667 458.745H286.991L329.018 433.145H388.501L418.709 411.763H473.305L494.807 393.634H545.244L560.132 378.049L573.065 364.523H616.842H660.641" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M90.8809 489.916L156.342 458.745H221.666L269.535 433.145H329.018L364.135 411.763H418.708L444.347 393.634H494.807L513.263 378.049H560.131H607.022L616.841 364.523" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M604.157 735.387L628.818 644.16L646.593 578.405L660.026 528.75L670.527 489.916L678.959 458.745L685.869 433.145L691.665 411.763L696.552 393.634L700.78 378.049L704.439 364.523" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M156.341 458.745L210.074 433.145H269.534L309.538 411.763H364.134L393.91 393.634H444.346L466.371 378.049L485.487 364.523H529.264H573.063" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M210.073 433.145L254.963 411.763H309.537L343.472 393.634H393.909L419.479 378.049H466.37H513.261L529.263 364.523" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1054.75 364.523H1098.52H1142.32L1169.58 378.049L1200.97 393.634" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M835.794 364.523H879.593L888.299 378.049H935.167L948.759 393.634H999.196L1019.18 411.763L1042.72 433.145H1102.21L1136.23 458.745L1177.69 489.916L1229.31 528.75L1295.34 578.405L1382.76 644.16L1504.04 735.387" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M967.171 364.523H1010.95H1054.75L1075.82 378.049L1100.09 393.634H1150.53L1182.94 411.763H1237.54L1280.63 433.145" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M879.595 364.523H923.372H967.171L982.059 378.049L999.198 393.634H1049.66L1073.77 411.763L1102.21 433.145H1161.69L1201.56 458.745H1266.88L1322.62 489.916H1395.05L1473.29 528.75" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M254.964 411.763L293.036 393.634H343.472L372.612 378.049L397.91 364.523H441.687H485.486" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M293.036 393.634L325.721 378.049H372.612H419.48L441.687 364.523" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1010.95 364.523L1028.93 378.049H1075.82H1122.69L1150.53 393.634H1200.97L1237.54 411.763" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M923.371 364.523L935.167 378.049H982.058H1028.93L1049.66 393.634H1100.09L1128.34 411.763H1182.94L1221.15 433.145H1280.63L1332.23 458.745" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M792.016 364.523L794.539 378.049L797.448 393.634L800.835 411.763L804.835 433.145L809.609 458.745L815.427 489.916L822.678 528.75L831.952 578.405L844.226 644.16L861.273 735.387" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M748.217 364.523L747.649 378.049L747.013 393.634L746.24 411.763L745.354 433.145L744.285 458.745L742.967 489.916L741.353 528.75L739.285 578.405L736.534 644.16L732.716 735.387" stroke="white" stroke-width="1.08501" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </g>
                        <rect width="1440" height="80" fill="url(#paint2_linear_244_74)" />
                    </g>
                    <g opacity="0.6" filter="url(#filter0_b_244_74)">
                        <rect y="398" width="1440" height="488" fill="url(#paint3_linear_244_74)" />
                    </g>
                    <g opacity="0.16" filter="url(#filter1_f_244_74)">
                        <circle cx="719.5" cy="1399.5" r="644.5" fill="#C9FD02" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_b_244_74" x="-4" y="394" width="1448" height="496" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_244_74" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_244_74" result="shape" />
                    </filter>
                    <filter id="filter1_f_244_74" x="-185" y="495" width="1809" height="1809" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur_244_74" />
                    </filter>
                    <linearGradient id="paint0_linear_244_74" x1="720" y1="0" x2="720" y2="770" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E9D4BC" stop-opacity="0" />
                        <stop offset="1" stop-color="#E9D4BC" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_244_74" x1="732.615" y1="384.5" x2="732.615" y2="769" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_244_74" x1="720" y1="0" x2="720" y2="80" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_244_74" x1="720" y1="398" x2="720" y2="886" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0B0A09" stop-opacity="0" />
                        <stop offset="1" stop-color="#0B0A09" />
                    </linearGradient>
                    <clipPath id="clip0_244_74">
                        <rect width="1440" height="722" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 relative ">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
                        <EditableText sectionId={sectionId} field="title" defaultValue="The Website You Want Without The Dev Time." />
                    </h1>
                    <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
                        <EditableText sectionId={sectionId} field="description" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus" />
                    </p>
                    <a href="#" className="inline-block rounded-full bg-[#c9fd02] px-8 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white">
                        <EditableText sectionId={sectionId} field="button_text" defaultValue="Get Started" />
                    </a>
                </div>
                <div className="mx-auto mt-16 grid max-w-[1040px] grid-cols-2 gap-8 py-20 sm:grid-cols-3 sm:gap-12 md:grid-cols-5">
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
