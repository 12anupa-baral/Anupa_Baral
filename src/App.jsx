import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Card from './Components/Card'

const App = () => {
  return (
    <>
   <div className='px-[5%] sm:px-[15%] bg-gradient-to-b from-black to-gray-800 font-Raleway '>
   <Hero/>
   <About/>
   <Portfolio/>
   <Experience/>
   <Contact/>
   </div>
   <Footer/>
    </>
  )
}

export default App