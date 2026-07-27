export default function Provides() {
  const benefits = [
    {
      title: "More Income",
      description: "Increase residual monthly membership income.",
      icon: (
        <svg
          className="w-10 h-10 text-accent-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "More Loyalty",
      description:
        'Reduce churn by creating loyal fans instead of "customers".',
      icon: (
        <svg
          className="w-10 h-10 text-accent-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "More Market Share",
      description:
        'Be the "Alpha" in your area—we help you overcome saturation.',
      icon: (
        <svg
          className="w-10 h-10 text-accent-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h3 className="text-4xl sm:text-5xl font-serif font-black text-leather-dark tracking-tight">
          Subcon Sales Provides
        </h3>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-notebook-card border-2 border-leather-medium/20 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-accent-blue transition duration-300 group"
          >
            {/* Icon Container */}
            <div className="bg-notebook-bg p-5 rounded-full border border-leather-medium/20 mb-6 group-hover:scale-110 group-hover:border-accent-blue/50 transition duration-300 shadow-sm">
              {item.icon}
            </div>

            {/* Content */}
            <h4 className="text-2xl font-serif font-bold text-leather-dark mb-4 group-hover:text-accent-blue transition duration-200">
              {item.title}
            </h4>
            {/* UPDATED: Changed text-base to text-lg md:text-xl */}
            <p className="text-leather-medium text-lg md:text-xl leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
