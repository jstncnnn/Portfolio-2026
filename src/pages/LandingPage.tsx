import { TypingAnimation } from "../components/ui/typing-animation";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/portfolio");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center text-4xl">
        <TypingAnimation>Justin Cunanan</TypingAnimation>
      </div>
    </>
  );
}

export default LandingPage;
