import { Link } from 'react-router-dom'
import flashImg from '../assets/images/flash.svg'
import fireImg from '../assets/images/fire.svg'
import '../index.css'
import '../assets/css/fonts.css'
import '../assets/css/service-section.css'
export default function ServiceSection(props) {
    return (
        <div>
            <section className="sec-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2>Choose how, and when you save on your business utilities</h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="business-image bg-energy">
                                <div className="overlay"></div>
                                <div className="content">
                                    <img src={flashImg} alt="" />
                                    <h3>Business Energy</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="business-image bg-gas">
                                <div className="overlay"></div>
                                <div className="content">
                                    <img src={fireImg} alt="" />
                                    <h3>Business Gas</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <Link to='/services' className="main-btn" >read more</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}