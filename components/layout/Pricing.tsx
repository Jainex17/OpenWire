import { DeviceType } from "@/app/store/useEditorStore";

interface SectionProps {
    activeDevice: DeviceType;
}

export const Pricing1 = ({ activeDevice }: SectionProps) => {
    return (
        <div className="w-full px-8 py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
                    <p className="text-gray-600">Start free, upgrade as you grow.</p>
                </div>
                <div className={`grid gap-8 ${activeDevice === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'}`}>
                    {[
                        { name: "Starter", price: "$0", feats: ["1 Project", "Basic Analytics", "Community Support"] },
                        { name: "Pro", price: "$29", feats: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Custom Domain"], highlight: true },
                        { name: "Enterprise", price: "$99", feats: ["Dedicated Hosting", "SLA", "Account Manager", "SSO"] }
                    ].map((plan, i) => (
                        <div key={i} className={`p-8 rounded-2xl border ${plan.highlight ? 'border-blue-600 shadow-xl' : 'border-gray-200'} relative`}>
                            {plan.highlight && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold text-gray-900 mb-6">{plan.price}<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                            <button className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>Get Started</button>
                            <ul className="space-y-4">
                                {plan.feats.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-3 text-gray-600">
                                        <span className="text-green-500">✓</span> {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Pricing2 = ({ activeDevice }: SectionProps) => {
    return (
        <div className="w-full px-8 py-24 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose your plan</h2>
                    <div className="inline-flex bg-gray-200 p-1 rounded-full">
                        <button className="px-6 py-2 bg-white rounded-full shadow-sm text-sm font-semibold text-gray-900">Monthly</button>
                        <button className="px-6 py-2 rounded-full text-sm font-semibold text-gray-500 hover:text-gray-900">Yearly (-20%)</button>
                    </div>
                </div>

                <div className={`grid gap-8 ${activeDevice === 'mobile' ? 'grid-cols-1' : 'grid-cols-2'}`}>
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                        <p className="text-gray-500 mb-6">Perfect for small teams and startups.</p>
                        <div className="text-5xl font-bold text-gray-900 mb-8">$49<span className="text-xl text-gray-400 font-normal">/mo</span></div>
                        <button className="w-full py-4 rounded-xl bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors mb-8">Start Free Trial</button>
                        <div className="space-y-4">
                            <div className="font-semibold text-gray-900">Everything in Standard:</div>
                            {["Up to 5 team members", "10GB Storage", "Basic Support", "API Access"].map((f, i) => (
                                <div key={i} className="flex gap-3 text-gray-600">
                                    <div className="text-blue-500">✓</div> {f}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#1a1a2e] p-10 rounded-3xl shadow-xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">BEST VALUE</div>
                        <h3 className="text-2xl font-bold mb-2">Premium</h3>
                        <p className="text-gray-400 mb-6">For scaling businesses with advanced needs.</p>
                        <div className="text-5xl font-bold mb-8">$99<span className="text-xl text-gray-500 font-normal">/mo</span></div>
                        <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors mb-8">Get Started Now</button>
                        <div className="space-y-4">
                            <div className="font-semibold text-white">Everything in Standard, plus:</div>
                            {["Unlimited team members", "Unlimited Storage", "24/7 Priority Support", "SSO & Audit Logs", "Custom Reporting"].map((f, i) => (
                                <div key={i} className="flex gap-3 text-gray-300">
                                    <div className="text-blue-400">✓</div> {f}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
