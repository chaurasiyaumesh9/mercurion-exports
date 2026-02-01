import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 id="contact-heading" className="text-3xl md:text-4xl mb-4 text-gray-900">Start Your India Trade Program</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Speak with our export operations team to structure a compliant, secure, and scalable sourcing model from India.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <article>
            <h3 className="text-2xl mb-6 text-gray-900">Contact Information</h3>
            <address className="space-y-6 not-italic">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-700" size={24} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Phone</div>
                  <a href="tel:+918407907092" className="text-gray-600 hover:text-blue-700 transition-colors">
                    +91-8407907092
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-700" size={24} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Email</div>
                  <a href="mailto:info@mercurionexports.com" className="text-gray-600 hover:text-blue-700 transition-colors">
                    info@mercurionexports.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-700" size={24} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Address</div>
                  <p className="text-gray-600">
                    Mumbai, Maharashtra<br />
                    India - 401303
                  </p>
                </div>
              </div>
            </address>
          </article>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none resize-none"
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}