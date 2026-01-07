"use client";

import { TemplateType } from "../store/useEditorStore";

interface TemplateOption {
    id: TemplateType;
    name: string;
    description: string;
    preview: string[];
}

const templates: TemplateOption[] = [
    {
        id: "saas",
        name: "SaaS",
        description: "Modern software product landing page with pricing, features, and testimonials",
        preview: ["Navbar", "Hero", "Features", "Content", "Testimonials", "Pricing", "CTA", "Footer"]
    },
    {
        id: "business",
        name: "Business",
        description: "Professional corporate website with services, team, and contact sections",
        preview: ["Navbar", "Hero", "Content", "Features", "Testimonials", "CTA", "Footer"]
    },
    {
        id: "portfolio",
        name: "Portfolio",
        description: "Creative showcase for designers, developers, and artists",
        preview: ["Navbar", "Hero", "Features", "Content", "CTA", "Footer"]
    },
    {
        id: "ecommerce",
        name: "E-Commerce",
        description: "Online store template with product highlights and promotional sections",
        preview: ["Navbar", "Hero", "Features", "Content", "Testimonials", "CTA", "Footer"]
    }
];

interface TemplateSelectionModalProps {
    isOpen: boolean;
    onSelect: (templateType: TemplateType) => void;
    onClose: () => void;
}

export default function TemplateSelectionModal({ isOpen, onSelect, onClose }: TemplateSelectionModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden">
                <div className="px-8 py-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Choose a Template</h2>
                            <p className="text-gray-500 mt-1">Select a starting point for your website</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {templates.map((template) => (
                            <button
                                key={template.id}
                                onClick={() => onSelect(template.id)}
                                className="group relative bg-gray-50 rounded-xl p-6 text-left hover:bg-gray-100 transition-all duration-200 border-2 border-transparent hover:border-blue-500 hover:shadow-lg"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{template.name}</h3>
                                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{template.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {template.preview.slice(0, 5).map((section, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-white rounded-md text-xs text-gray-600 border border-gray-200"
                                        >
                                            {section}
                                        </span>
                                    ))}
                                    {template.preview.length > 5 && (
                                        <span className="px-2 py-1 bg-white rounded-md text-xs text-gray-400 border border-gray-200">
                                            +{template.preview.length - 5} more
                                        </span>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
