
import InnerPageMainSec from "../../components/innerPageMainSection";
import AboutSection from "../../components/AboutSection";
import AboutSection2 from "../../components/AboutSection2";
import serviceBg from '../../assets/images/services-bg.jpg'
import servicesImg from '../../assets/images/business-energy-1.jpg'
import servicesImg2 from '../../assets/images/energy-img.jpg'
import servicesImg3 from '../../assets/images/energy-1.webp'

export default function ServicePage(){
    return(
     <div>
           <InnerPageMainSec heading='services' bgUrl={serviceBg} />
           <AboutSection aboutUsImg={servicesImg} showHeading={true} mainHeading='Business Energy' secId='secEnergy' />
           <AboutSection2 aboutUsImg={servicesImg2}/>
           <AboutSection aboutUsImg={servicesImg3}/>
           <AboutSection aboutUsImg={servicesImg} showHeading={true} mainHeading='Business Gas'secId='secGas'/>
           <AboutSection2 aboutUsImg={servicesImg2}/>
           <AboutSection aboutUsImg={servicesImg3}/>
     </div>
    )
}