import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Intro from "./components/Intro/Intro";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";

export default function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    setTimeout(() => {
      window.scrollTo(0, 0);
      setShowIntro(false);
    }, 3000);
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {showIntro && <Intro key={"intro"} />}
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="projectdetail/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer key={"footer"} />
      </AnimatePresence>
    </main>
  );
}
