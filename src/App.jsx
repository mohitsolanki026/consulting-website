import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Pricing from "./pages/Pricing"
import Projects from "./pages/Projects"
import Service from "./pages/Service"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
