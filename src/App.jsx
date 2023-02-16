import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import ServiceSection from "./components/ServiceSection"
import AboutSection from "./components/AboutSection"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

function App() {
  return (
 <div>
  <Navbar logo='LOGO'/>
   <HeroSection />
   <ServiceSection />
   <AboutSection />
   <FAQ />
   <Footer />
 </div>
  )
}

export default App
