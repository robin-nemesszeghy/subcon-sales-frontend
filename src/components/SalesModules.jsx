import { useState } from "react";

export default function SalesModules() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Simplified click handler for single-page smooth scrolling
  const handleGetStartedClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const curriculum = [
    {
      title: "Welcome!",
      lessons: ["Welcome to the Subcon Sales Training! (Read Before Starting)"],
    },
    {
      title: "Module 1: Psychology of Subconscious Sales",
      lessons: [
        "Lesson 1.1: Identity Memberships",
        "Lesson 1.2: Mastering Universal Sales Communication",
        "Lesson 1.3: Science of Subconscious Sales",
        "Lesson 1.4: Why the Membership Model is Non-Negotiable",
        "Lesson 1.5: Capitalizing on the 'FOMO' Effect",
        "Lesson 1.6: 'Guess-O-Meter' & Caveman Brain",
        "Module 1: Mid-Point Knowledge Check",
        "Lesson 1.7: Why Consistency Beats Personality",
        "Lesson 1.8: The 'Pricing' Forum",
        "Lesson 1.9: Social Media Psychology",
        "Lesson 1.10: Pay Station",
        "Lesson 1.11: Trusting the Process",
        "Lesson 1.12: Handling Rejection",
        "Action Prompt: 'Guess-O-Meter' in the Wild",
        "Module 1 Wrap-Up: Knowledge Check",
      ],
    },
    {
      title: "Module 2: Building Rapport",
      lessons: [
        "Lesson 2.1: Visual Rapport",
        "Lesson 2.2: Confidence",
        "Lesson 2.3: Power of Honesty",
        "Lesson 2.4: Visual Cues",
        "Lesson 2.5: Make Them the Star",
        "Module 2: Mid-Point Knowledge Check",
        "Lesson 2.6: Local Ties",
        "Lesson 2.7: Gratitude & Presentation",
        "Lesson 2.8: Mirroring",
        "Lesson 2.9: Cultivating Genuine Curiosity",
        "Lesson 2.10: Ultimate Goal",
        "Lesson 2.11: The 3 'No-Go' Subjects",
        "Action Prompt: Listening With Your Eyes",
        "Module 2 Wrap-Up: Knowledge Check",
      ],
    },
    {
      title: "Module 3: The Pitch",
      lessons: [
        "Lesson 3.1: Professionalism",
        "Lesson 3.2: Normalizing the Menu",
        "Lesson 3.3: Anchoring & Removing Negatives",
        "Lesson 3.4: Refund Rule",
        "Lesson 3.5: First Time Customers",
        "Lesson 3.6: Third-Party Language",
        "Lesson 3.7: Planting the Seed",
        "Lesson 3.8: Clarifying the Charge",
        "Lesson 3.9: Year-Round Retention",
        "Lesson 3.10: Theory of Marginal Gains",
        "Lesson 3.11: 'I'm Not Sure' Rebuttal",
        "Lesson 3.12: How to Pitch Specials",
        "Lesson 3.13: Boosting Specials",
        "Lesson 3.14: Pacing",
        "Lesson 3.15: Cadence & Connection",
        "Lesson 3.16: Handling Zero Interest",
        "Lesson 3.17: Handling the 'Unlimited' Term",
        "Action Prompt: 'Third-Party' Experiment",
        "Module 3 Wrap-Up: Knowledge Check",
      ],
    },
    {
      title: "Module 4: After the Sale",
      lessons: [
        "Lesson 4.1: Creating Advocates",
        "Lesson 4.2: Gathering Information",
        "Lesson 4.3: Keeping the Line Moving",
        "Module 4: Mid-Point Knowledge Check",
        "Lesson 4.4: Managing Polite Questions",
        "Lesson 4.5: Preventing Bad Reviews",
        "Lesson 4.6: Magic of Aesthetics",
        "Lesson 4.7: Building a Tribe",
        "Action Prompt: Planting the Seed",
        "Module 4 Wrap-Up: Knowledge Check",
      ],
    },
    {
      title: "Module 5: Master Sales Strategies & Tips",
      lessons: [
        "Lesson 5.1: 30-Year-Old Car Psychology",
        "Lesson 5.2: Theory of Marginal Gains",
        "Lesson 5.3: Handling Confrontation",
        "Action Prompt: Finding the 1% (Marginal Gains)",
        "Module 5 Wrap-Up: Knowledge Check",
        "Offline Roleplay: Manager Sign-Off",
      ],
    },
    {
      title: "Final Exam (for Certification)",
      lessons: ["Subcon Sales Training Certification Exam"],
    },
    {
      title: "Resources & Wrap Up",
      lessons: [
        "WASH PITCH CHEAT SHEET DOWNLOAD",
        "Graduation: End-of-Course Survey",
      ],
    },
  ];

  return (
    <div id="modules" className="py-20 px-6 bg-notebook-bg min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-leather-dark tracking-tight mb-4">
            Sales Training Curriculum
          </h1>
          {/* UPDATED: Increased text size from text-lg to text-xl sm:text-2xl */}
          <p className="text-xl sm:text-2xl text-leather-medium">
            Explore the complete step-by-step framework taught inside the
            course.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="bg-notebook-card border border-leather-medium/20 rounded-2xl shadow-lg overflow-hidden">
          {/* Header row for context */}
          <div className="flex justify-between items-center px-6 py-4 bg-leather-dark text-notebook-bg border-b border-leather-medium/20">
            <span className="font-bold uppercase tracking-widest text-xs">
              Content
            </span>
            <span className="font-bold uppercase tracking-widest text-xs text-accent-blue">
              {curriculum.length} Sections
            </span>
          </div>

          {/* Map through modules */}
          {curriculum.map((module, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-leather-medium/15 last:border-0"
              >
                {/* Accordion Button */}
                <button
                  onClick={() => toggleModule(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-leather-medium/5 transition duration-200"
                >
                  <div className="flex items-center gap-3">
                    {/* Expand/Collapse Icon */}
                    <svg
                      className={`w-5 h-5 text-accent-blue transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
                    <h2 className="text-lg font-serif font-bold text-leather-dark">
                      {module.title}
                    </h2>
                  </div>
                  <span className="text-sm text-leather-medium hidden sm:block">
                    {module.lessons.length}{" "}
                    {module.lessons.length === 1 ? "lesson" : "lessons"}
                  </span>
                </button>

                {/* Expanded Content list */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="bg-notebook-bg px-6 py-2 pb-4">
                    <ul className="space-y-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li
                          key={lessonIndex}
                          className="flex flex-col sm:flex-row justify-between sm:items-center py-3 border-b border-leather-medium/10 last:border-0 gap-4"
                        >
                          {/* Lesson Title */}
                          <div className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-leather-medium shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <span className="text-leather-dark font-medium text-sm sm:text-base">
                              {lesson}
                            </span>
                          </div>

                          {/* Get Started Button */}
                          <button
                            onClick={handleGetStartedClick}
                            className="shrink-0 bg-accent-blue/10 text-accent-blue border border-accent-blue/30 px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-accent-blue hover:text-white transition duration-200 text-center cursor-pointer"
                          >
                            Get Started
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
