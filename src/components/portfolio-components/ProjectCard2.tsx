import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard2() {
  return (
    <div className="max-w-2xl">
      <Card className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 hover:scale-[1.02] transition-all duration-300">
        <div className="h-60 w-full overflow-hidden">
          <img
            src="three-proj.png"
            alt="Simple Dashboard"
            className="h-full w-full object-cover group-hover:scale-110 group-hover:brightness-75 transition duration-300"
          />
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-slate-100 text-xl font-semibold group-hover:text-sky-400 transition">
              3 Simple JS Projects
            </h3>
            <p className="text-slate-200 text-sm mt-1">
              Notes with Calculator and Clock
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className="bg-slate-700 text-slate-200">Javascript</Badge>
            <Badge className="bg-slate-700 text-slate-200">HTML</Badge>
            <Badge className="bg-slate-700 text-slate-200">CSS</Badge>
          </div>

          <div className="pt-2">
            <a
              href="https://github.com/jstncnnn/3-simple-projects"
              className="flex items-center gap-1 text-slate-200 text-sm hover:underline"
            >
              <FaGithub size={16} className="text-slate-950" />
              Code
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
