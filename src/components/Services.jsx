export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-notebook-bg border-b border-leather-medium/15"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-black text-leather-dark tracking-tight leading-tight">
            Services Tailored to Your Interest and Roles
          </h2>
          {/* UPDATED: Increased text size from text-lg to text-xl sm:text-2xl */}
          <p className="mt-4 text-xl sm:text-2xl text-leather-medium">
            Select an option, or book a consultation.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Card 1: Owner Club */}
          <div className="bg-notebook-card rounded-2xl p-8 shadow-lg border border-leather-medium/20 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-2 bg-leather-dark"></div>

            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-serif font-bold text-leather-dark mb-2">
                IBA Owner Club
              </h3>
              <p className="text-sm text-leather-medium italic mb-6">
                Designed for IBA Owners and General Managers (Tunnel coming
                soon)
              </p>
              <div className="text-4xl font-black text-accent-blue mb-1">
                $250
                <span className="text-lg text-leather-medium font-normal">
                  /month
                </span>
              </div>
            </div>

            {/* Circle.so Owner Club Link */}
            <a
              href="https://car-wash-club.circle.so/owner-club"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-leather-dark text-notebook-bg py-3 px-4 rounded-lg font-bold uppercase tracking-wider text-sm shadow-md hover:bg-leather-medium transition mb-8"
            >
              Get Started
            </a>

            <div className="flex-grow">
              <p className="text-xs font-bold uppercase tracking-widest text-leather-medium mb-4 text-center">
                What's Included
              </p>
              <ul className="space-y-3 text-sm text-leather-dark font-medium">
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Unlimited
                  Community Access
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Full Sales
                  Training + All Courses
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Exclusive
                  Strategies and Resources
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Monthly Car
                  Wash Leadership Call
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span>{" "}
                  Accountability
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Business
                  Philosophy
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Pricing and
                  Menu Structure
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Hiring Tips
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Management
                  Philosophy
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Social Media
                  Tips
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Certification Access */}
          <div className="bg-leather-dark rounded-2xl p-8 shadow-2xl border border-accent-blue/40 flex flex-col h-full relative overflow-hidden transform md:-translate-y-4 transition-all duration-300 hover:-translate-y-6">
            <div className="absolute top-0 left-0 w-full h-2 bg-accent-blue"></div>

            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Subcon Sales Training <br />
                Certification Access
              </h3>
              <p className="text-sm text-notebook-card/70 italic mb-6">
                Designed to Teach Employees to Sell
              </p>
              <div className="text-4xl font-black text-accent-blue mb-1">
                $19
                <span className="text-lg text-notebook-card/60 font-normal">
                  /month
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {/* Circle.so Employee Club Link */}
              <a
                href="https://car-wash-club.circle.so/employee-club"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-accent-blue text-white py-3 px-4 rounded-lg font-bold uppercase tracking-wider text-sm shadow-md hover:brightness-110 transition"
              >
                Get Started
              </a>
              <a
                href="#modules"
                className="w-full block text-center bg-transparent border border-accent-blue text-accent-blue py-3 px-4 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-accent-blue/10 transition"
              >
                View Sales Modules
              </a>
            </div>

            <div className="flex-grow">
              <p className="text-xs font-bold uppercase tracking-widest text-notebook-card/70 mb-4 text-center">
                What's Included
              </p>
              <ul className="space-y-3 text-sm text-white font-medium">
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Employee
                  Sales Training Courses
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Full Sales
                  Training Script
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Consulting */}
          <div className="bg-notebook-card rounded-2xl p-8 shadow-lg border border-leather-medium/20 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-2 bg-leather-dark"></div>

            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-serif font-bold text-leather-dark mb-2">
                IBA & Tunnel Consulting
              </h3>
              <p className="text-sm text-leather-medium italic mb-6">
                1-on-1 Strategy & Troubleshooting
              </p>
              <div className="text-4xl font-black text-accent-blue mb-1">
                $150
                <span className="text-lg text-leather-medium font-normal">
                  /initial session
                </span>
              </div>
            </div>

            <a
              href="https://calendly.com/carwashjason/phone-zoom-consult-with-jason"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-leather-dark text-notebook-bg py-3 px-4 rounded-lg font-bold uppercase tracking-wider text-sm shadow-md hover:bg-leather-medium transition mb-8"
            >
              Book on Calendar
            </a>

            <div className="flex-grow">
              <p className="text-xs font-bold uppercase tracking-widest text-leather-medium mb-4 text-center">
                What's Included
              </p>
              <ul className="space-y-3 text-sm text-leather-dark font-medium">
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> 1-on-1
                  Strategy Call with Jason Hayes
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Site-Specific
                  Operational Audit
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Custom
                  Membership Pricing Strategy
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">✓</span> Direct Q&A &
                  Action Plan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
