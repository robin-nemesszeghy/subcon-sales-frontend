export default function Methods() {
  const targets = ["Owners", "Managers", "Employees", "Customers"];

  return (
    <section className="py-24 px-6 bg-leather-dark text-notebook-bg overflow-hidden relative border-y border-leather-medium/30">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-center mb-12 leading-tight">
          By Teaching the Simplest & Most Effective{" "}
          <br className="hidden md:block" />
          Methods for Real-World Results
        </h2>

        {/* Checkmark Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {targets.map((target, index) => (
            <div
              key={index}
              className="bg-accent-blue/10 border border-accent-blue/40 text-accent-blue flex items-center gap-2 px-6 py-3 rounded-lg font-bold shadow-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {target}
            </div>
          ))}
        </div>

        {/* Video & Floating Box Container */}
        <div className="relative max-w-4xl mx-auto mt-12 lg:mt-0">
          {/* Floating "Message to Owners" Badge */}
          <div className="lg:absolute -right-6 lg:-right-24 -top-12 lg:top-1/3 lg:-translate-y-1/2 mb-6 lg:mb-0 bg-accent-blue text-white px-6 py-5 rounded-2xl shadow-2xl flex flex-col items-center transform lg:rotate-3 z-10 w-fit mx-auto lg:mx-0 border border-white/20">
            <span className="text-xl md:text-2xl font-bold text-center tracking-wide">
              Message to
              <br />
              Owners
            </span>
            {/* Curved Arrow SVG */}
            <svg
              className="w-10 h-10 mt-3 rotate-90 lg:rotate-0"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M80 20 C 80 60, 50 80, 20 80" />
              <polyline points="40,60 20,80 40,100" />
            </svg>
          </div>

          {/* Vimeo Embed */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-leather-medium/20 bg-black z-0">
            <iframe
              src="https://player.vimeo.com/video/1030481939?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              className="absolute top-0 left-0 w-full h-full"
              title="Lesson 2: The Philosophy of Subcon Sales"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
