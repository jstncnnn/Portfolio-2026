import DownloadIcon from "../ui/download-icon";

export default function About() {
  return (
    <section id="about" className="bg-slate-100 px-6 py-24 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <img
            src="/workspace.jpg"
            alt="workspace"
            className="h-64 w-120 rounded-2xl object-cover shadow-md md:h-80"
          />
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold uppercase text-slate-900 mb-2">
            About Me
          </h3>

          <h4 className="text-xl font-bold uppercase text-slate-900 mb-4">
            Junior React Developer
          </h4>

          <p className="text-slate-700 leading-relaxed text-lg">
            As a starting front-end developer, I possess foundational knowledge
            in HTML, CSS, and JavaScript. Currently, I'm expanding my skill set
            with ReactJS to establish a strong and fulfilling career in web
            development. My ambition is to apply my technical skills and
            contribute to the development of aesthetically pleasing and
            user-centric web applications. I'm excited to work with teams,
            making sure designs become websites that work well and look good,
            all while keeping projects on schedule.
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            <a href="Resume.pdf" download>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800 text-slate-100 hover:bg-slate-100 hover:text-slate-900 border border-slate-700 transition-all duration-300 shadow-sm">
                Resume
                <DownloadIcon />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
