import LottiePackage from "lottie-react";
import beforeCarsData from "../assets/before-cars.json";
import afterCarsData from "../assets/after-cars.json";

// This intercepts Vite's module object and extracts the actual React component
const Lottie = LottiePackage.default || LottiePackage;

export default function Hero() {
  // Custom click handler for smooth scrolling
  const handleServicesScroll = (e) => {
    e.preventDefault(); // Prevents the default instant jump
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-12 pb-12 md:pt-20 md:pb-20 px-6 overflow-hidden border-b border-leather-medium/15">
      {/* DESKTOP LAYOUT: 3 Columns */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 w-full">
        {/* LEFT COLUMN: Before Graphic */}
        <div className="hidden lg:flex flex-col items-center w-1/4">
          <h3 className="text-5xl font-serif font-black text-leather-dark mb-2 text-center">
            Before
          </h3>
          <span className="text-base font-bold text-leather-medium uppercase tracking-widest mb-6 text-center">
            The Rest
          </span>
          <div className="w-full max-w-[220px]">
            <Lottie animationData={beforeCarsData} loop={true} />
          </div>
        </div>

        {/* CENTER COLUMN: Main Content */}
        <div className="text-center w-full lg:w-1/2 flex flex-col items-center">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-leather-dark tracking-tight leading-tight mb-6">
            {/* Single line on desktop/tablet, clean wrap on mobile */}
            <span className="block text-accent-blue uppercase tracking-wider mb-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-normal break-words sm:whitespace-nowrap max-w-full">
              Car Wash Owners
            </span>
            Master the Psychology of <br className="hidden sm:inline" />
            <span className="underline decoration-accent-blue decoration-4 underline-offset-8">
              Subconscious Sales.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-leather-medium max-w-xl mx-auto font-normal leading-relaxed mb-10">
            90% of decision making is subconscious. That’s what we target.
          </p>

          {/* Action Button */}
          <div className="flex justify-center w-full max-w-md mx-auto">
            <button
              onClick={handleServicesScroll}
              className="bg-leather-dark text-notebook-bg px-10 py-4 rounded-lg font-bold text-base shadow-lg hover:bg-leather-medium transition duration-200 text-center w-full sm:w-auto border border-transparent tracking-wide cursor-pointer"
            >
              Services
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: After Graphic */}
        <div className="hidden lg:flex flex-col items-center w-1/4">
          <h3 className="text-5xl font-serif font-black text-accent-blue mb-2 text-center">
            After
          </h3>
          <span className="text-base font-bold text-accent-blue uppercase tracking-widest mb-6 text-center">
            Subcon Sales
          </span>
          <div className="w-full max-w-[220px]">
            <Lottie animationData={afterCarsData} loop={true} />
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT: Side-by-Side Graphics */}
      <div className="flex lg:hidden justify-center items-end gap-6 mt-16 w-full max-w-md mx-auto relative z-10">
        <div className="flex flex-col items-center w-1/2">
          <h3 className="text-3xl font-serif font-black text-leather-dark mb-1 text-center">
            Before
          </h3>
          <span className="text-xs font-bold text-leather-medium uppercase tracking-widest mb-4 text-center">
            The Rest
          </span>
          <div className="w-full">
            <Lottie animationData={beforeCarsData} loop={true} />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-px h-32 bg-leather-medium/20 self-end mb-4"></div>

        <div className="flex flex-col items-center w-1/2">
          <h3 className="text-3xl font-serif font-black text-accent-blue mb-1 text-center">
            After
          </h3>
          <span className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-4 text-center">
            Subcon Sales
          </span>
          <div className="w-full">
            <Lottie animationData={afterCarsData} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
