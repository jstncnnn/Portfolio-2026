import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-sky-400" />
            <span>jjustincunanan03@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} className="text-sky-400" />
            <span>+63 970 646 5775</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-sky-400" />
            <span>Philippines</span>
          </div>
        </div>

        <p className="text-center text-slate-500 text-xs mt-4">
          © 2026 John Justin R. Cunanan
        </p>
      </div>
    </section>
  );
}
