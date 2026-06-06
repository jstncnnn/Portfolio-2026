import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { FaGithub } from "react-icons/fa";

export default function ProjectCard() {
  return (
    <div className="max-w-2xl">
      <Card className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 hover:scale-[1.02] transition-all duration-300">
        <div className="h-60 w-full overflow-hidden">
          <img
            src="dashboard.png"
            alt="Simple Dashboard"
            className="h-full w-full object-cover group-hover:scale-110 group-hover:brightness-75 transition duration-300"
          />
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-slate-100 text-xl font-semibold group-hover:text-sky-400 transition">
              Dashboard
            </h3>
            <p className="text-slate-200 text-sm mt-1">
              Responsive Dashboard UI with Login Authentication using Supabase
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className="bg-slate-700 text-slate-200">React</Badge>
            <Badge className="bg-slate-700 text-slate-200">Supabase</Badge>
            <Badge className="bg-slate-700 text-slate-200">Tailwind</Badge>
            <Badge className="bg-slate-700 text-slate-200">Shadcn</Badge>
          </div>

          <div className="pt-2">
            <a
              href="https://github.com/jstncnnn/dashboard-ts"
              target="_blank"
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
