import { DeviceType } from "@/app/store/useEditorStore";

interface FooterProps {
    activeDevice: DeviceType;
}

export const Footer1 = ({ activeDevice }: FooterProps) => {
    return (
        <div className="w-full bg-[#0f172a] px-8 py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-12" style={{ gridTemplateColumns: activeDevice === "mobile" ? "1fr" : "2fr 1fr 1fr 1fr" }}>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white font-bold text-2xl">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">O</div>
                            OPENWIRE
                        </div>
                        <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                            Making web design accessible, powerful, and fun for everyone. Built with modern technology for modern brands.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer transition-colors" />
                            ))}
                        </div>
                    </div>

                    {[
                        { title: "Product", links: ["Features", "Templates", "Integrations", "Pricing"] },
                        { title: "Resources", links: ["Documentation", "Guides", "Blog", "Support"] },
                        { title: "Company", links: ["About Us", "Careers", "Legal", "Privacy"] }
                    ].map((col, i) => (
                        <div key={i} className={activeDevice === "mobile" ? "hidden" : "block"}>
                            <h4 className="text-white font-semibold mb-6">{col.title}</h4>
                            <ul className="space-y-3">
                                {col.links.map(link => (
                                    <li key={link}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>&copy; 2024 OpenWire Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Footer2 = ({ activeDevice }: FooterProps) => {
    return (
        <div className="w-full bg-white border-t border-gray-100 py-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="font-bold text-2xl tracking-tighter text-gray-900">OpenWire</span>
                </div>
                <ul className="flex flex-wrap justify-center gap-6 mb-8 text-gray-600 font-medium">
                    <li><a href="#" className="hover:text-black">Home</a></li>
                    <li><a href="#" className="hover:text-black">About</a></li>
                    <li><a href="#" className="hover:text-black">Services</a></li>
                    <li><a href="#" className="hover:text-black">Contact</a></li>
                </ul>
                <div className="flex justify-center gap-4 mb-8">
                    {/* Social Icons Placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 text-gray-500">t</div>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 text-gray-500">ig</div>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 text-gray-500">li</div>
                </div>
                <p className="text-gray-400 text-sm">© 2024 OpenWire. All rights reserved.</p>
            </div>
        </div>
    );
};

export const Footer3 = ({ activeDevice }: FooterProps) => {
    return (
        <div className="w-full bg-black text-white py-10 px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                    <span className="font-bold text-xl">OpenWire</span>
                </div>
                <div className="flex gap-8 text-sm text-gray-300">
                    <a href="#" className="hover:text-white">Terms</a>
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Cookies</a>
                </div>
            </div>
        </div>
    );
};
