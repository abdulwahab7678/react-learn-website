
import '../index.css'
import '../assets/css/fonts.css'
import '../assets/css/about-section.css'

export default function AboutSection({secId , showFeature = false , aboutUsImg , children  }) {
    const X = (Props)=>{
        return  <li>{Props.li}</li>
    }
    const lists = ['Delivery', 'Innovation', 'Safety', 'Sustainability']
   
    return (
        <div>
            <section class="sec-3" id={secId}>
                <div class="container">
                    <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="about-us-img">
                                <img class="img-fluid" src={aboutUsImg} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="content">
                                <h2>Why should I compare my utilities with Love Energy Savings</h2>
                                <p>We offer a fully comprehensive service, finding you the best business gas and business electricity
                                    prices. We work with the top UK utility and energy suppliers to offer our customers the best utility
                                    prices.
                                </p>
                                <p>Why choose us – We make a commitment to each and every business that we’ll provide an award winning
                                    service and 5* expertise at every stage of the process. No two businesses are the same – our team of
                                    utility experts are available to help you and provide services based on the specifics of your business. We
                                    successfully work with UK businesses across all sectors and sizes.
                                </p>
                                {showFeature && (
                                   <ul>
                                       {lists.map((list)=> <X li={`Passionate about ${list}`}/>)}

                                    </ul>
                                )}
                            </div>
                            
                        </div>
                      
                    </div>
                </div>
            </section>
        </div>
    )
}