import Contact from "@/components/portfolio-components/Contact";
import Hero from "@/components/portfolio-components/Hero";
import Projects from "@/components/portfolio-components/Projects";
import About from "@/components/portfolio-components/About";
import AppleDockDemo from "@/components/portfolio-components/AppleDock";

function PortfolioMain() {
  return (
    <>
      <div className="min-h-screen">
        <div className="">
          <Hero />
          <About />
          <Projects />
          <AppleDockDemo />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default PortfolioMain;
