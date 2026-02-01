import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl text-blue-700">Mercurion Exports</h1>
              <p className="text-xs text-gray-600">Accelerating global commerce</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
            <a href="#home" className="text-gray-700 hover:text-blue-700 transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200" aria-label="Mobile navigation">
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}