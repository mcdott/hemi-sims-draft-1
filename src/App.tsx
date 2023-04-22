import React, { useRef } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SketchList from "./components/SketchList"; // Update the import here
import Footer from "./components/Footer";
import About from "./components/About";
import Draw from "./components/Draw";

function App() {
  const sketchListRef = useRef<HTMLDivElement>(null); // Update the ref name

  const scrollToSketchList = () => {
    // Update the function name
    if (sketchListRef.current) {
      sketchListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar scrollToSketches={scrollToSketchList} />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <div className='relative h-screen'>
                  <Hero scrollToSketches={scrollToSketchList} />
                </div>
                <div ref={sketchListRef}>
                  <SketchList />
                </div>
              </>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/draw' element={<Draw />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
