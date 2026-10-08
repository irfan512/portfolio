import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import Services from "./Components/Services";
import AppliedAi from "./Components/AppliedAi";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Process from "./Components/Process";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:top-3 focus:left-3 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-accent focus:text-white focus:font-semibold"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <AppliedAi />
        <Experience />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
