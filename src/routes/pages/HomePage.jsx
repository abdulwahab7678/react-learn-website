import HeroSection from "../../components/HeroSection"
import ServiceSection from "../../components/ServiceSection"
import AboutSection from "../../components/AboutSection"
import FAQ from "../../components/FAQ"
export default function HomePage() {
    
    
    return(
      <div>
        <HeroSection />
        <ServiceSection />
        <AboutSection showFeature={true}>this comes after container div</AboutSection>
        <FAQ />
      </div>
    )
    
}