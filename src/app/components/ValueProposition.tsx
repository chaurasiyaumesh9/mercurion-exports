import { Users, ShoppingCart } from "lucide-react";

export function ValueProposition() {
    return (
        <section className="py-20 bg-white" aria-labelledby="value-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <h2
                        id="value-heading"
                        className="text-3xl md:text-4xl mb-4 text-gray-900"
                    >
                        Tailored Trade Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Structured export execution for international buyers and Indian
                        manufacturers
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* For International Buyers */}
                    <article className="border-2 border-blue-200 p-8 bg-gradient-to-br from-blue-50 to-white">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-blue-700 flex items-center justify-center">
                                <ShoppingCart
                                    className="text-white"
                                    size={28}
                                    aria-hidden="true"
                                />
                            </div>
                            <h3 className="text-2xl text-gray-900">
                                For International Buyers
                            </h3>
                        </div>

                        <p className="text-gray-700 font-medium mb-2">
                            Operate in India without operational risk
                        </p>
                        <p className="text-gray-600 mb-6">
                            Mercurion Exports acts as your on-ground export management partner
                            in India. We control the trade process from supplier onboarding to
                            shipment delivery—ensuring compliance, quality, and transaction
                            security.
                        </p>

                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Verified Manufacturers:</strong> Factory-audited
                                    suppliers across India
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Quality & Compliance:</strong> Pre-shipment inspection
                                    and technical conformity checks
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Export Governance:</strong> Documentation, customs, and
                                    regulatory coordination
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Secure Trade:</strong> Contract administration and
                                    payment protection
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Global Logistics:</strong> International freight
                                    planning and delivery coordination
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Dedicated Account Team:</strong> Continuous trade
                                    oversight and reporting
                                </span>
                            </li>
                        </ul>
                    </article>

                    {/* For Indian Manufacturers */}
                    <article className="border-2 border-green-200 p-8 bg-gradient-to-br from-green-50 to-white">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-green-700 flex items-center justify-center">
                                <Users className="text-white" size={28} aria-hidden="true" />
                            </div>
                            <h3 className="text-2xl text-gray-900">
                                For Indian Manufacturers
                            </h3>
                        </div>

                        <p className="text-gray-700 font-medium mb-2">
                            Access global buyers through a controlled export structure
                        </p>
                        <p className="text-gray-600 mb-6">
                            We integrate Indian producers into regulated international supply
                            chains—handling buyer requirements, compliance, and shipment
                            execution.
                        </p>

                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-green-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Buyer Qualification:</strong> Onboarding of verified
                                    international buyers
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Compliance Alignment:</strong> Export documentation and
                                    regulatory management
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Trade & FX Handling:</strong> Pricing, contracts, and
                                    foreign exchange support
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Freight & Customs:</strong> End-to-end logistics and
                                    clearance coordination
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Standards & Certification:</strong> Guidance for
                                    international compliance
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-700 flex-shrink-0 mt-1">✓</span>
                                <span>
                                    <strong>Long-Term Growth:</strong> Dedicated export account
                                    management
                                </span>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
