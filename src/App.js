import React from "react";
import "./style.css";


// files
import Header from './components/Header';
import Banner from './components/Banner';
import ServicesExperience from './components/ServicesExperience';
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <Header />      
      <Banner />
      <ServicesExperience />
      <Projects />
    </div>
  );
}
