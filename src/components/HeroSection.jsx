import '../index.css'
import '../assets/css/fonts.css'
import  '../assets/css/hero-sec.css'
 
export default function HeroSection(HeroSectionProps) {
 
    return (
        <div>
            <section className='sec1'>
                <div className="banner-opacity">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 col-sm-12">
                                <div className="content">
                                    <h1>Welcome to Utilities Solution</h1>
                                    <p>Helping your business spend less</p>
                                    <div className="">
                                        <button className="btn main-btn" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                            Choose a product to start
                                        </button>
                                        <div >
                                            <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                                <div className="card card-body">
                                                    <a href="./services.html#secEnergy">Business Energy</a>
                                                    <a href="./services.html#secGas">Business Gas</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}