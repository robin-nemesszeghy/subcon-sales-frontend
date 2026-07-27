import logo from "../assets/logo-main.png";
import jasonAndAlex from "../assets/Jason-and-Alex_Subcon-Sales.png";

export default function WhyEffective() {
  // Smooth scroll handler for the Read More button
  const handleReadMoreClick = (e) => {
    e.preventDefault();
    const whySubconSection = document.getElementById("why-subcon");
    if (whySubconSection) {
      whySubconSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative py-24 px-6 min-h-[75vh] flex items-center justify-center bg-cover bg-center bg-no-repeat border-b border-leather-medium/20"
      style={{ backgroundImage: `url(${jasonAndAlex})` }}
    >
      {/* Subtle overlay to ensure the card stands out, but keeps Jason and Alex visible */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="mx-auto flex flex-col justify-center items-center relative z-10 w-full max-w-lg">
        {/* Centered Dark Content Card */}
        <div className="w-full bg-leather-dark text-notebook-bg p-10 md:p-12 rounded-3xl shadow-2xl border border-leather-medium/20 text-left">
          {/* Logo Badge */}
          <div className="mb-6 bg-white inline-flex items-center justify-center p-2 rounded-xl shadow-md border border-leather-medium/10">
            <img
              src={logo}
              alt="Subcon Sales Logo"
              className="h-10 w-10 object-contain rounded-lg"
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-6 leading-tight text-white">
            Why is Our System the <br />
            <span className="text-accent-blue">Most Effective?</span>
          </h2>

          {/* Paragraph */}
          <p className="text-notebook-card/90 text-base md:text-lg leading-relaxed mb-10 font-normal">
            Experts agree that over **90%** of our decision-making is
            subconscious. Our training specifically targets how to sell to the
            subconscious of the customers and—just as important—target the
            subconscious of the employees to sell more effectively.
          </p>

          {/* Read More Button */}
          <button
            onClick={handleReadMoreClick}
            className="inline-block bg-accent-blue text-white px-8 py-3 rounded-full font-bold tracking-wider uppercase text-sm shadow-md hover:shadow-lg hover:brightness-110 transition duration-200 cursor-pointer"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
