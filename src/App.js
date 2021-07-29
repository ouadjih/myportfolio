import React from "react";
import About from "./components/About"
import About from "./components/Contact"
import About from "./components/Navbar"
import About from "./components/Projects"
import About from "./components/Skills"
import About from "./components/Testimonials"

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}

