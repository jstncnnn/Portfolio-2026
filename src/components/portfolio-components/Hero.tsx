import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Highlighter } from "../ui/highlighter";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-slate-900 flex items-center justify-center px-6"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl w-full gap-10">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-5xl md:text-6xl font-medium text-slate-100 w-full md:max-w-140">
            Junior React Developer
          </h1>

          <p className="mt-4 text-slate-200 text-xl md:text-md leading-relaxed">
            Hi, I'm{" "}
            <Highlighter action="underline">
              John Justin R. Cunanan.
            </Highlighter>{" "}
            An aspiring{" "}
            <Highlighter action="highlight" color="#560591">
              React Developer
            </Highlighter>{" "}
            based in the Philippines
            <FaLocationDot
              className="inline text-red-500 relative -top-1.5"
              size={17}
            />
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <a
              href="https://www.facebook.com/ntsjcnnn/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125"
            >
              <FaFacebook size={20} className="text-[#4267B2]" />
            </a>

            <a
              href="https://www.instagram.com/jstncnnn_/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125"
            >
              <FaInstagram size={20} className="text-pink-500" />
            </a>

            <a
              href="https://twitter.com/jstncnnn_"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125"
            >
              <FaGithub size={20} className="text-[#0FBF3E]" />
            </a>
          </div>
        </div>

        <div>
          <img
            src="/myIcon.jpeg"
            alt="my-icon"
            className="h-64 w-64 md:h-80 md:w-80 rounded-[40%_60%_50%_70%] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
