import jasonPhoto from "../assets/jason-photo.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-notebook-bg border-t border-leather-medium/15"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-leather-dark tracking-tight mb-4">
            Let’s Get Started!
          </h2>
          <div className="w-24 h-1.5 bg-accent-blue mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row bg-notebook-card border border-leather-medium/20 rounded-2xl shadow-xl overflow-hidden">
          {/* Left Column: Image and Profile */}
          <div className="w-full md:w-5/12 bg-leather-dark p-10 flex flex-col items-center justify-center text-center relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-blue to-transparent"></div>

            <div className="relative z-10">
              <img
                src={jasonPhoto}
                alt="Jason Hayes"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-2xl border-4 border-leather-medium/20 mb-6 mx-auto"
              />
              <h3 className="text-2xl font-serif font-bold text-white mb-1">
                Jason Hayes
              </h3>
              <p className="text-accent-blue text-sm uppercase tracking-widest font-bold">
                Founder & President
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full md:w-7/12 p-8 md:p-12">
            <p className="text-leather-dark text-lg mb-8 leading-relaxed font-medium">
              Have a question, comment, or need assistance? We’re excited to
              hear from you and discuss how we can help with your project.
              Please use the form below, and we'll get back to you as soon as
              possible.
            </p>

            <form
              action="https://formspree.io/f/meeyvbjn"
              method="POST"
              className="space-y-5"
            >
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="FULL NAME"
                  className="w-full bg-transparent border-2 border-leather-medium/30 rounded-lg p-4 text-leather-dark font-medium placeholder-leather-medium/70 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition duration-200"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-2 border-leather-medium/30 rounded-lg p-4 text-leather-dark font-medium placeholder-leather-medium/70 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition duration-200"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="PHONE NUMBER"
                  className="w-full bg-transparent border-2 border-leather-medium/30 rounded-lg p-4 text-leather-dark font-medium placeholder-leather-medium/70 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="YOUR MESSAGE"
                  className="w-full bg-transparent border-2 border-leather-medium/30 rounded-lg p-4 text-leather-dark font-medium placeholder-leather-medium/70 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition duration-200 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-accent-blue text-white px-10 py-4 rounded-lg font-bold uppercase tracking-wider text-sm shadow-md hover:brightness-110 hover:shadow-lg transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
