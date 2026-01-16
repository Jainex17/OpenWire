"use client";

import { DeviceType } from "@/app/store/useEditorStore";
import { EditableText } from "@/components/editor/EditableText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface SectionProps {
    activeDevice: DeviceType;
    sectionId: string;
}

export const Newsletter1 = ({ activeDevice, sectionId }: SectionProps) => {
    return (
        <div className="w-full px-8 py-24 bg-blue-600">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8 hover:outline hover:outline-2 hover:outline-blue-500">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <EditableText sectionId={sectionId} field="badge" defaultValue="Join 25,000+ subscribers" />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="title" defaultValue="Stay in the loop" />
                </h2>
                <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="description" defaultValue="Get the latest updates, tips, and exclusive content delivered straight to your inbox. No spam, ever." />
                </p>

                <div className={`flex gap-4 max-w-xl mx-auto ${activeDevice === 'mobile' ? 'flex-col' : 'flex-row'}`}>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 h-14 px-6 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20"
                    />
                    <Button className="h-14 px-8 rounded-full bg-white text-blue-600 hover:bg-white/90 font-bold text-lg shadow-xl hover:outline hover:outline-2 hover:outline-blue-500">
                        <EditableText sectionId={sectionId} field="cta" defaultValue="Subscribe" />
                    </Button>
                </div>

                <p className="mt-6 text-sm text-blue-200 hover:outline hover:outline-2 hover:outline-blue-500">
                    <EditableText sectionId={sectionId} field="disclaimer" defaultValue="By subscribing, you agree to our Privacy Policy. Unsubscribe at any time." />
                </p>
            </div>
        </div>
    );
};

export const Newsletter2 = ({ activeDevice, sectionId }: SectionProps) => {
    return (
        <div className="w-full px-8 py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <Card className="overflow-hidden border-0 shadow-2xl">
                    <CardContent className="p-0">
                        <div className={`flex ${activeDevice === 'mobile' ? 'flex-col' : 'flex-row'}`}>
                            <div className="flex-1 p-12 bg-white">
                                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field="badge" defaultValue="Newsletter" />
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-4 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field="title" defaultValue="Get product updates" />
                                </h2>
                                <p className="text-gray-600 mb-8 hover:outline hover:outline-2 hover:outline-blue-500">
                                    <EditableText sectionId={sectionId} field="description" defaultValue="Stay updated with the latest features, tips, and industry insights." />
                                </p>

                                <div className="space-y-4">
                                    <Input
                                        type="email"
                                        placeholder="Your email address"
                                        className="h-12 border-gray-200"
                                    />
                                    <Button className="w-full h-12 bg-gray-900 hover:bg-gray-800 font-semibold hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field="cta" defaultValue="Subscribe Now" />
                                    </Button>
                                </div>

                                <div className="flex items-center gap-4 mt-8 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span className="hover:outline hover:outline-2 hover:outline-blue-500">
                                            <EditableText sectionId={sectionId} field="benefit1" defaultValue="Weekly digest" />
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span className="hover:outline hover:outline-2 hover:outline-blue-500">
                                            <EditableText sectionId={sectionId} field="benefit2" defaultValue="No spam" />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className={`flex-1 bg-blue-600 p-12 flex items-center justify-center ${activeDevice === 'mobile' ? 'min-h-[200px]' : ''}`}>
                                <div className="text-center text-white">
                                    <div className="text-6xl mb-4">📧</div>
                                    <p className="font-medium opacity-90 hover:outline hover:outline-2 hover:outline-blue-500">
                                        <EditableText sectionId={sectionId} field="imageText" defaultValue="Join our community" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export const Newsletter3 = ({ activeDevice, sectionId }: SectionProps) => {
    return (
        <div className="w-full px-8 py-16 bg-[#0a0a0a] border-y border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className={`flex items-center justify-between ${activeDevice === 'mobile' ? 'flex-col gap-8 text-center' : 'flex-row'}`}>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-2 hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="title" defaultValue="Ready to level up?" />
                        </h2>
                        <p className="text-gray-400 hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="description" defaultValue="Subscribe for exclusive tips and early access to new features." />
                        </p>
                    </div>

                    <div className={`flex gap-3 ${activeDevice === 'mobile' ? 'flex-col w-full' : 'flex-row'}`}>
                        <Input
                            type="email"
                            placeholder="you@example.com"
                            className="h-12 w-72 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                        />
                        <Button className="h-12 px-6 bg-blue-600 hover:bg-blue-700 font-semibold hover:outline hover:outline-2 hover:outline-blue-500">
                            <EditableText sectionId={sectionId} field="cta" defaultValue="Subscribe" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
