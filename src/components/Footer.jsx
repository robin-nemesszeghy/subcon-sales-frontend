import logoFull from "../assets/logo-full.png";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-leather-dark text-notebook-bg flex flex-col">
      <button
        onClick={scrollToTop}
        className="w-full bg-accent-blue/10 hover:bg-accent-blue/20 text-accent-blue py-4 flex flex-col items-center justify-center transition duration-200 border-t border-b border-accent-blue/20 group"
      >
        <svg
          className="w-6 h-6 mb-1 transform group-hover:-translate-y-1 transition duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <span className="text-xs font-bold uppercase tracking-widest">
          Return To Top
        </span>
      </button>

      <div className="max-w-7xl mx-auto w-full px-6 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row justify-between items-center pb-12 border-b border-leather-medium/20 gap-10 lg:gap-0">
          <div className="bg-notebook-bg px-4 py-2 rounded-xl shadow-md border border-leather-medium/20">
            <img
              src={logoFull}
              alt="Subcon Sales Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold tracking-wider uppercase text-notebook-card/80">
            <a
              href="#"
              className="hover:text-accent-blue transition duration-200"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-accent-blue transition duration-200"
            >
              Services
            </a>
            <a
              href="#modules"
              className="hover:text-accent-blue transition duration-200"
            >
              Sales Modules
            </a>
            <a
              href="#faq"
              className="hover:text-accent-blue transition duration-200"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:text-accent-blue transition duration-200"
            >
              Contact
            </a>
          </nav>

          <div>
            <a
              href="https://car-wash-club.circle.so/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-blue text-white px-8 py-3 rounded-md font-bold text-sm shadow hover:brightness-110 hover:shadow-md transition duration-200 uppercase tracking-wider inline-block"
            >
              Member Login
            </a>
          </div>
        </div>

        {/* ... (Keep the rest of the existing bottom section with Socials/Copyright here) ... */}
      </div>
    </footer>
  );
}
