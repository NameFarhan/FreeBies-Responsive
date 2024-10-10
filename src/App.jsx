import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import Features from './Components/Features'
import ChoosePlan from './Components/ChoosePlan'
import GlobalNetwork from './Components/GlobalNetwork'
import Customers from './Components/Customers'
import Footer from './Components/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Stats/>
    <Features/>
    <ChoosePlan/>
    <GlobalNetwork/>
    <Customers/>
    <Footer/>
    </>
  )
}

export default App