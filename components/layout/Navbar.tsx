"use client";

import { useState } from "react";
import { DeviceType } from "@/app/store/useEditorStore";
import { EditableText } from "@/components/editor/EditableText";

export const Navbar1 = ({ activeDevice, sectionId }: { activeDevice: DeviceType; sectionId: string }) => {
    return (
        <div
            className="w-full flex items-center justify-between px-8 backdrop-blur-md bg-opacity-90 sticky top-0 z-50 transition-all duration-300"
            style={{
                height: activeDevice === "mobile" ? "60px" : "80px",
                backgroundColor: sectionId.includes("page-1") ? "rgba(26, 26, 46, 0.95)" : "rgba(255, 255, 255, 0.95)",
                borderBottom: sectionId.includes("page-1") ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.05)"
            }}
        >
            <div className="font-bold text-xl tracking-tight flex items-center gap-2" style={{ color: sectionId.includes("page-1") ? "#fff" : "#1a1a2e" }}>
                <span className="hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="logo" defaultValue="OpenWire" />
                </span>
            </div>

            <div className="flex gap-8 items-center">
                {activeDevice !== "mobile" && (
                    ["Product", "Solutions", "Resources", "Pricing"].map((item, index) => (
                        <span key={item} className="text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity hover:outline hover:outline-2 hover:outline-blue-500" style={{ color: sectionId.includes("page-1") ? "#ccc" : "#4b5563" }}>
                            <EditableText sectionId={sectionId} field={`link-${index}`} defaultValue={item} />
                        </span>
                    ))
                )}

                {activeDevice === "mobile" ? (
                    <div className="flex flex-col gap-1.5 cursor-pointer">
                        <span className={`w-6 h-0.5 rounded-full ${sectionId.includes("page-1") ? "bg-white" : "bg-gray-800"}`}></span>
                        <span className={`w-6 h-0.5 rounded-full ${sectionId.includes("page-1") ? "bg-white" : "bg-gray-800"}`}></span>
                        <span className={`w-6 h-0.5 rounded-full ${sectionId.includes("page-1") ? "bg-white" : "bg-gray-800"}`}></span>
                    </div>
                ) : (
                    <button className="px-5 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="cta" defaultValue="Get Started" />
                    </button>
                )}
            </div>
        </div >
    );
};

export const Navbar2 = ({ activeDevice, sectionId }: { activeDevice: DeviceType; sectionId: string }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const isDark = sectionId.includes("page-1");
    const isMobile = activeDevice === "mobile";

    return (
        <header
            className="left-0 right-0 z-[51] top-4"
            style={{ padding: isMobile ? "0 8px" : "0 16px" }}
        >
            <nav
                className="p-2 mx-auto w-full rounded-full border backdrop-blur-md h-fit shadow-lg transition-all duration-300"
                style={{
                    backgroundColor: isDark ? "rgba(26, 26, 46, 0.9)" : "rgba(255, 255, 255, 0.95)",
                    borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                    maxWidth: isMobile ? "100%" : "fit-content",
                }}
            >
                <div className="flex gap-8 justify-between items-center mx-auto h-full transition-all">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <span
                                className="font-bold text-lg transition-colors duration-200 hover:outline hover:outline-2 hover:outline-blue-500"
                                style={{ color: isDark ? "#fff" : "#1a1a2e" }}
                            >
                                <EditableText sectionId={sectionId} field="logo" defaultValue="OpenWire" />
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        {!isMobile && (
                            <div className="flex ml-6">
                                <ul className="flex items-center space-x-1">
                                    {["Product", "Solutions", "Resources", "Pricing"].map((item) => (
                                        <li key={item}>
                                            <span
                                                className="px-3 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 rounded-lg hover:outline hover:outline-2 hover:outline-blue-500"
                                                style={{
                                                    color: isDark ? "#ccc" : "#4b5563",
                                                }}
                                            >
                                                <EditableText sectionId={sectionId} field={`link-${item}`} defaultValue={item} />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Desktop Action Button */}
                    {!isMobile && (
                        <div className="flex items-center">
                            <button
                                className="px-5 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 hover:outline hover:outline-2 hover:outline-blue-500"
                            >
                                <EditableText sectionId={sectionId} field="cta" defaultValue="Get Started" />
                            </button>
                        </div>
                    )}

                    {/* Mobile Menu Toggle */}
                    {isMobile && (
                        <button
                            type="button"
                            className="flex p-2"
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col gap-[5px]">
                                <div
                                    className="w-6 h-0.5 transition-all duration-200 origin-center rounded-full"
                                    style={{
                                        backgroundColor: isDark ? "#fff" : "#1a1a2e",
                                        transform: showMobileMenu ? "rotate(45deg) translateY(7px)" : "rotate(0) translateY(0)",
                                    }}
                                />
                                <div
                                    className="w-6 h-0.5 transition-all duration-200 rounded-full"
                                    style={{
                                        backgroundColor: isDark ? "#fff" : "#1a1a2e",
                                        opacity: showMobileMenu ? 0 : 1,
                                        transform: showMobileMenu ? "translateX(-5px)" : "translateX(0)",
                                    }}
                                />
                                <div
                                    className="w-6 h-0.5 transition-all duration-200 origin-center rounded-full"
                                    style={{
                                        backgroundColor: isDark ? "#fff" : "#1a1a2e",
                                        transform: showMobileMenu ? "rotate(-45deg) translateY(-7px)" : "rotate(0) translateY(0)",
                                    }}
                                />
                            </div>
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobile && showMobileMenu && (
                <div
                    className="mt-2 mx-auto w-full rounded-2xl border p-4 shadow-lg transition-all duration-200"
                    style={{
                        backgroundColor: isDark ? "rgba(26, 26, 46, 0.95)" : "rgba(255, 255, 255, 0.95)",
                        borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                    }}
                >
                    <ul className="flex flex-col space-y-1">
                        {["Product", "Solutions", "Resources", "Pricing"].map((item) => (
                            <li key={item}>
                                <span
                                    className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer hover:outline hover:outline-2 hover:outline-blue-500"
                                    style={{ color: isDark ? "#ccc" : "#4b5563" }}
                                >
                                    <EditableText sectionId={sectionId} field={`mobile-link-${item}`} defaultValue={item} />
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div
                        className="mt-4 pt-4 flex flex-col space-y-2"
                        style={{ borderTop: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)" }}
                    >
                        <button
                            className="w-full px-5 py-2.5 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors hover:outline hover:outline-2 hover:outline-blue-500"
                        >
                            <EditableText sectionId={sectionId} field="mobile-cta" defaultValue="Get Started" />
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};