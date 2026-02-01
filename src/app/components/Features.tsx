import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const stats = [
    { value: "100%", label: "Verified Suppliers" },
    { value: "Secure", label: "Trade Execution" },
    { value: "24/7", label: "International Support" },
    { value: "Global", label: "Trade Coverage" },
];

export function Features() {
    return (
        <section
            className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white"
            aria-labelledby="features-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <article>
                        <h2
                            id="features-heading"
                            className="text-3xl md:text-4xl mb-6"
                        >
                            Why Choose Mercurion Exports
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl mb-2 text-blue-100">
                                    Governance & Transparency
                                </h3>
                                <p className="text-blue-100">
                                    All trade flows are documented, auditable, and managed under
                                    defined operational standards to ensure full visibility and
                                    accountability.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl mb-2 text-blue-100">
                                    Risk Control
                                </h3>
                                <p className="text-blue-100">
                                    Compliance checks, quality audits, contract enforcement, and
                                    secure payment frameworks protect your commercial and
                                    operational interests.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl mb-2 text-blue-100">
                                    Execution Excellence
                                </h3>
                                <p className="text-blue-100">
                                    We manage the entire export lifecycle—so you gain Indian
                                    sourcing capability without building a local office.
                                </p>
                            </div>
                        </div>
                    </article>

                    <div>
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1644079446600-219068676743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY5MzI0MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Global logistics and trade operations center"
                            className="rounded-lg shadow-xl w-full h-auto"
                        />
                    </div>
                </div>

                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    role="list"
                    aria-label="Trust indicators"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center" role="listitem">
                            <div className="text-4xl md:text-5xl mb-2">
                                {stat.value}
                            </div>
                            <div className="text-blue-200">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
