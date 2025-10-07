import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>
        </div>
      </div>

      {/* Fixed navbar sits above everything */}
      <Navbar />

      {/* Page content: add top padding to clear the fixed nav (adjust if you change nav height) */}
      <div className="container mx-auto px-8 pt-24">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education />
        </section>

        <section id="tech" className="scroll-mt-24">
          <Technologies />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
