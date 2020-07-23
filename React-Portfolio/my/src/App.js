import React from 'react';
import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectExtend from "./components/ProjectExtend";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App" media="all">
      <Header />
      <AboutMe />
      <ProjectExtend />
      <Footer />
    </div>
  );
}

export default App;
