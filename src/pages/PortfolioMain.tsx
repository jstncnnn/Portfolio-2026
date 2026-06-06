import Contact from "@/components/portfolio-components/Contact";
import Hero from "@/components/portfolio-components/Hero";
import Projects from "@/components/portfolio-components/Projects";
import About from "@/components/portfolio-components/About";
import AppleDockDemo from "@/components/portfolio-components/AppleDock";

function PortfolioMain() {
  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <div className="hidden lg:block">
          <AppleDockDemo />
        </div>
      </div>
    </>
  );
}

export default PortfolioMain;
