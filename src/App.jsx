import { useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import Discover from './Discover'
import Services from './Services'
import Cards from './Cards'
import Works from './Works'
import Testimonials from './Testimonials'
import Subsection from './Subsection'

function App() {

  return (
    <div className="overflow-x-hidden">
   <div className="bg-black min-h-screen">
   <Header/>
   <Hero/>
   <Discover/>
   <Services/>
   {/* <Cards/> */}
   <Works/>
   <Testimonials/>
   <Subsection/>
   </div>
   </div>
  )
}

export default App
