import '../index.css'
import '../assets/css/fonts.css'
import  '../assets/css/inner-page.css'

export default function InnerPageMainSec({ heading, bgUrl }) {
    return (
        <div>
            <section class="sec-contact-banner bg-service" style={{ backgroundImage: `url(${bgUrl})` }}>
                <div class="banner-opacity">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="content">
                                    <h1>{heading}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}