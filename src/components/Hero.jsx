import beforeCars from "../assets/before-cars.mp4";
import afterCars from "../assets/after-cars.mp4";

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
          <video
            src={beforeCars}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[220px] object-contain mix-blend-multiply opacity-80 contrast-125 hue-rotate-[160deg] grayscale-[30%]"
          />
        </div>

        {/* CENTER COLUMN: Main Content */}
        <div className="text-center w-full lg:w-1/2 flex flex-col items-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-leather-dark tracking-tight leading-none mb-6">
            <span className="text-accent-blue">Car Wash Owners,</span> Master
            the Psychology of <br className="hidden sm:inline" />
            <span className="underline decoration-accent-blue decoration-4 underline-offset-8">
              Subconscious Sales.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-leather-medium max-w-xl mx-auto font-normal leading-relaxed mb-10">
            True growth starts with understanding the people driving your
            business. We give you the psychological frameworks to meet customers
            and employees exactly where they are—and deliver exactly what they
            want.
          </p>

          {/* Action Button - Updated to smooth scroll */}
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
          <video
            src={afterCars}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[220px] object-contain mix-blend-multiply opacity-90 contrast-125 hue-rotate-[160deg]"
          />
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
          <video
            src={beforeCars}
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-contain mix-blend-multiply opacity-80 hue-rotate-[160deg] grayscale-[30%]"
          />
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
          <video
            src={afterCars}
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-contain mix-blend-multiply opacity-90 hue-rotate-[160deg]"
          />
        </div>
      </div>
    </section>
  );
}
