// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from 'react'
// import './App.css'
// import Header from './Header'
// import Hero from './Hero'
// import Discover from './Discover'
// import Services from './Services'
// import Works from './Works'
// import Testimonials from './Testimonials'
// import Subsection from './Subsection'
// import About from "./About"; // Adjust the import path as necessary


// function App() {

//   return (
//     <>
//   <Router>
//     <Routes>
//       {/* <Route path="/" element={<Hero />} /> */}
//   <Route path="/about" element={<About />} />
//     </Routes>
//   </Router>
//     <div className="overflow-x-hidden">
//    <div className="bg-black min-h-screen">
//    <Header/>
//    <Hero/>
//    <Discover/>
//    <Services/>
//    <Works/>
//    <Testimonials/>
//    <Subsection/>
//    </div>
//    </div>
//    </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Header'
import Hero from './Hero'
import Discover from './Discover'
import Services from './Services'
import Works from './Works'
import Testimonials from './Testimonials'
import Subsection from './Subsection'
import About from "./pages/Abouts"; // Adjust the import path as necessary

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <div className="bg-black min-h-screen">
           

          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                <Header />
                  <Hero />
                  <Discover />
                  <Services />
                  <Works />
                  <Testimonials />
                  <Subsection />
                </>
              }
            />

            {/* About page */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
