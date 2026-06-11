import ProjectCard from "./proj/ProjectCard";
import ProjectCard2 from "./proj/ProjectCard2";
import ProjectCard3 from "./proj/ProjectCard3";

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-slate-100 text-3xl font-semibold mb-10 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard />
          <ProjectCard2 />
          <ProjectCard3 />
        </div>
      </div>
    </section>
  );
}

export default Projects;
