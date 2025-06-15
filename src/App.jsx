import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import DonateSection from "./components/DonateSection"
import Initiatives from "./components/Initiatives"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"


function App() {

  return (
    <div>
      <Header />
      <DonateSection />
      <Initiatives />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
