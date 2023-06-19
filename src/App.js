import React from "react";
import Navbare from "./componentes/navbare/navbare";
import { Container } from "react-bootstrap";
import Hellow from "./componentes/hellow/hellow";
import Projects from "./componentes/projects/projects";
import Contact from "./componentes/contact/contact";
import Footer from "./componentes/footer/footer";

function App() {
  return (
    <div className="">
      <Navbare />
      <Hellow />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
