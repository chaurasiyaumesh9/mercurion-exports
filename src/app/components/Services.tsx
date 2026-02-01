import {
    Ship,
    FileCheck,
    Package,
    TrendingUp,
    Globe,
    HeadphonesIcon,
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Supplier Due Diligence",
        description:
            "Factory verification, capability audits, compliance checks, and production risk assessment to ensure reliable sourcing from India.",
    },
    {
        icon: FileCheck,
        title: "Export Compliance Management",
        description:
            "HS classification, customs filings, certificates, and country-specific regulatory alignment for seamless cross-border trade.",
    },
    {
        icon: Ship,
        title: "Logistics & Delivery Control",
        description:
            "Freight planning, container consolidation, customs clearance, and final delivery coordination across global trade lanes.",
    },
    {
        icon: TrendingUp,
        title: "Quality & Conformity",
        description:
            "Third-party inspections, shipment audits, and traceability protocols to meet buyer technical and regulatory standards.",
    },
    {
        icon: Package,
        title: "Trade & Payment Security",
        description:
            "Escrow support, contract enforcement, and payment milestone governance to protect all parties.",
    },
    {
        icon: HeadphonesIcon,
        title: "Continuous Oversight",
        description:
            "Dedicated trade managers monitoring every transaction lifecycle with real-time communication and issue resolution.",
    },
];

export function Services() {
    return (
        <section
            id="services"
            className="py-20 bg-white"
            aria-labelledby="services-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <h2
                        id="services-heading"
                        className="text-3xl md:text-4xl mb-4 text-gray-900"
                    >
                        How We Execute International Trade
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A structured, compliance-driven framework that allows international
                        buyers to source from India with confidence.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <article
                                key={index}
                                className="p-6 rounded-lg border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all bg-white"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <Icon
                                        className="text-blue-700"
                                        size={24}
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="text-xl mb-3 text-gray-900">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.description}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
