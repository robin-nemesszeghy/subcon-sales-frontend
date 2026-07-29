import { useState } from "react";
import logoMain from "../assets/logo-main.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-leather-dark border-b border-leather-medium/20 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center bg-notebook-bg px-3 py-1.5 rounded-lg shadow-sm border border-leather-medium/20">
            <a href="#" onClick={closeMobileMenu}>
              <img
                src={logoMain}
                alt="Subcon Sales Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-notebook-card/90 hover:text-accent-blue font-semibold text-sm uppercase tracking-wider transition duration-200"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-notebook-card/90 hover:text-accent-blue font-semibold text-sm uppercase tracking-wider transition duration-200"
            >
              Services
            </a>
            <a
              href="#modules"
              className="text-notebook-card/90 hover:text-accent-blue font-semibold text-sm uppercase tracking-wider transition duration-200"
            >
              Sales Modules
            </a>
            <a
              href="#faq"
              className="text-notebook-card/90 hover:text-accent-blue font-semibold text-sm uppercase tracking-wider transition duration-200"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-notebook-card/90 hover:text-accent-blue font-semibold text-sm uppercase tracking-wider transition duration-200"
            >
              Contact
            </a>

            <a
              href="https://car-wash-club.circle.so/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-blue text-white px-7 py-3 rounded-md font-bold text-sm shadow hover:brightness-110 hover:shadow-md transition duration-200 uppercase tracking-wider"
            >
              Member Login
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-notebook-card/90 hover:text-accent-blue focus:outline-none transition duration-200"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-leather-dark border-t border-leather-medium/20 shadow-xl absolute w-full left-0">
          <div className="px-6 pt-4 pb-8 space-y-2 flex flex-col">
            <a
              href="#"
              onClick={closeMobileMenu}
              className="text-notebook-card/90 hover:text-accent-blue block px-3 py-3 rounded-md text-base font-semibold uppercase tracking-wider text-center"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={closeMobileMenu}
              className="text-notebook-card/90 hover:text-accent-blue block px-3 py-3 rounded-md text-base font-semibold uppercase tracking-wider text-center"
            >
              Services
            </a>
            <a
              href="#modules"
              onClick={closeMobileMenu}
              className="text-notebook-card/90 hover:text-accent-blue block px-3 py-3 rounded-md text-base font-semibold uppercase tracking-wider text-center"
            >
              Sales Modules
            </a>
            <a
              href="#faq"
              onClick={closeMobileMenu}
              className="text-notebook-card/90 hover:text-accent-blue block px-3 py-3 rounded-md text-base font-semibold uppercase tracking-wider text-center"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="text-notebook-card/90 hover:text-accent-blue block px-3 py-3 rounded-md text-base font-semibold uppercase tracking-wider text-center"
            >
              Contact
            </a>

            <div className="pt-6 pb-2">
              <a
                href="https://car-wash-club.circle.so/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="w-full text-center bg-accent-blue text-white px-6 py-4 rounded-md font-bold text-sm shadow hover:brightness-110 transition duration-200 uppercase tracking-wider block"
              >
                Member Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
