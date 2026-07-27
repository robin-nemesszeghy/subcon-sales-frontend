import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Provides from "./components/Provides";
import Methods from "./components/Methods";
import WhyEffective from "./components/WhyEffective";
import Services from "./components/Services";
import SalesModules from "./components/SalesModules";
import WhySubcon from "./components/WhySubcon";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-notebook-bg min-h-screen text-charcoal font-sans selection:bg-accent-blue selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Provides />
        <Methods />
        <WhyEffective />
        <SalesModules />
        <WhySubcon />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
