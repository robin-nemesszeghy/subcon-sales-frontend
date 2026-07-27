import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Simplified click handler for single-page smooth scrolling
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      question: "What exactly is 'Subconscious Sales'?",
      answer:
        "Research shows that over 90% of human decision-making happens subconsciously. Our training leverages this reality. Instead of teaching pushy, traditional sales tactics, we train your team on how to communicate with the subconscious mind of the consumer. This reduces friction, normalizes the membership model, and makes the 'pitch' feel completely natural to both the employee and the customer.",
    },
    {
      question:
        "What is the difference between the Owner Club and Certification Access?",
      answer:
        "The Owner Club ($250/month) is designed specifically for Owners and General Managers. It focuses on high-level business philosophy, menu structure, pricing strategy, and leadership accountability. The Certification Access ($19/month) is built for your staff—it provides your employees with direct access to our step-by-step sales training modules, scripts, and the final certification exam.",
    },
    {
      question: "How long does it take for employees to complete the training?",
      answer:
        "The employee curriculum is broken down into 5 highly focused modules, followed by a final certification exam. It is designed to be self-paced and easy to digest. Most employees can comfortably complete the video training and action prompts within a few hours, though they retain full access to revisit the material and scripts whenever they need a refresher.",
    },
    {
      question: "Do you offer 1-on-1 help for my specific car wash?",
      answer:
        "Yes! We offer IBA & Tunnel Consulting sessions for $495 per session. You can book a direct 1-on-1 strategy call with Jason Hayes to run a site-specific operational audit, dial in your custom pricing strategy, and get immediate answers to your biggest bottlenecks.",
    },
    {
      question: "How do I get my employees started?",
      answer:
        "Simply navigate to our Services section and select the 'Subcon Sales Training Certification Access' tier. Once registered, your employees will gain immediate access to the community, the video modules, the Wash Pitch Cheat Sheet, and the final exam.",
    },
    {
      question:
        "Will this training work for In-Bay Automatics (IBAs) as well as Tunnels?",
      answer:
        "Absolutely. While the volume and pacing may differ, the psychology of the consumer is exactly the same. The principles of identity memberships, marginal gains, and subconscious communication apply universally across all car wash models.",
    },
  ];

  return (
    <div
      id="faq"
      className="py-24 px-6 bg-notebook-bg min-h-screen border-t border-leather-medium/15"
    >
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-leather-dark tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1.5 bg-accent-blue mx-auto rounded-full mb-6"></div>
          <p className="text-xl sm:text-2xl text-leather-medium">
            Everything you need to know about Subcon Sales, our methodology, and
            how our training tiers work.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-notebook-card border border-leather-medium/20 rounded-xl shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-leather-medium/5 transition duration-200"
                >
                  <h3 className="text-lg font-serif font-bold text-leather-dark pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-accent-blue shrink-0 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 text-leather-medium leading-relaxed">
                    <div className="pt-2 border-t border-leather-medium/10">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center bg-leather-dark rounded-2xl p-8 shadow-xl">
          {/* UPDATED: Increased text size from text-2xl to text-3xl sm:text-4xl */}
          <h4 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Still have questions?
          </h4>
          {/* UPDATED: Increased text size by adding text-lg sm:text-xl */}
          <p className="text-lg sm:text-xl text-notebook-card/80 mb-8">
            We're here to help you dial in your sales strategy.
          </p>

          <button
            onClick={handleContactClick}
            className="inline-block bg-accent-blue text-white px-8 py-3 rounded-md font-bold text-sm shadow hover:brightness-110 hover:shadow-md transition duration-200 uppercase tracking-wider cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
