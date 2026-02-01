import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <article>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
              Your India Trade Operations Partner
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We enable international companies to source from India through a structured, compliance-driven export framework. Mercurion Exports operates as your local trade execution office—managing suppliers, documentation, logistics, and transaction risk with institutional transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
              >
                Request Trade Assessment
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Our Export Framework
              </a>
            </div>
          </article>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1672870152741-e526cfe5419b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBwb3J0fGVufDF8fHx8MTc2OTM2NTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Shipping containers at international port representing global export services"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}