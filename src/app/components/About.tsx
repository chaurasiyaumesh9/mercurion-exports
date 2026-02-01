import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";

const highlights = [
    "Independent supplier verification and due diligence",
    "Full documentation and compliance transparency",
    "Secure transaction governance and payment protection",
    "End-to-end trade accountability from India",
];

export function About() {
    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
            aria-labelledby="about-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1663801563712-ebf3c6a78239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbnxlbnwxfHx8fDE3NjkzMTY4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="International cargo vessel representing global trade execution"
                            className="rounded-lg shadow-xl w-full h-auto"
                        />
                    </div>

                    <article>
                        <h2
                            id="about-heading"
                            className="text-3xl md:text-4xl mb-6 text-gray-900"
                        >
                            Your India Trade Execution Office
                        </h2>

                        <p className="text-lg text-gray-600 mb-6">
                            Mercurion Exports operates as an independent international trade
                            facilitation firm. We are not a brokerage or commission agency.
                            <br />
                            <br />
                            We provide structured export execution services that allow foreign
                            companies to source from India with full operational control and
                            compliance assurance.
                        </p>

                        <p className="text-lg text-gray-600 mb-6">
                            For our international clients, we function as an extension of your
                            supply chain team—managing sourcing, compliance, logistics, and
                            transaction governance from within India.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Core Commitments
                        </h3>

                        <ul className="space-y-3" aria-label="Core commitments">
                            {highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle
                                        className="text-green-600 flex-shrink-0 mt-1"
                                        size={20}
                                        aria-hidden="true"
                                    />
                                    <span className="text-gray-700">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
