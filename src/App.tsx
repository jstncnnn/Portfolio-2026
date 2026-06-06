import LandingPage from "./pages/LandingPage";
import PortfolioMain from "./pages/PortfolioMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioMain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
