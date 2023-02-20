import HeroSection from "../../components/HeroSection"
import ServiceSection from "../../components/ServiceSection"
import AboutSection from "../../components/AboutSection"
import FAQ from "../../components/FAQ"
import aboutUsImg from '../../assets/images/homepage-tp.webp'

export default function HomePage() {
    
    return(
      <div>
        <HeroSection />
        <ServiceSection />
        <AboutSection showLists={true} aboutUsImg={aboutUsImg} secId='aboutUs'/>
        {/* <AboutSection showFeature={true}>this comes after container div</AboutSection> */}
        <FAQ />
      </div>
    )
    
}