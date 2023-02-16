import '../index.css'
import '../assets/css/fonts.css'
import '../assets/css/footer.css'
export default function Footer() {
    return (
        <div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="content">
                                <div class="logo-p">
                                    <a href="#">LOGO</a>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eum! Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-12">
                            <div class="content">
                                <h3>services</h3>
                                <ul>
                                    <li><a href="#"> business energy</a></li>
                                    <li><a href="#"> business Gas </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-12">
                            <div class="content">
                                <h3>help</h3>
                                <ul>
                                    <li><a href="#"> FAQ'S</a></li>
                                    <li><a href="#">privacy policy</a></li>
                                    <li><a href="#">cookie policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="content">
                                <h3>contact us</h3>
                                <ul>
                                    <li><i class="fa-solid fa-location-dot"></i> <span> 108b upper tooting road Sw17 7en</span></li>
                                    <li><i class="fa-solid fa-envelope"></i><a href="#">info(@)utilitiessolution.co.uk</a></li>
                                    <li><i class="fa-solid fa-phone"></i> <a href="#"> 020 3813 0254</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div class="btm-footer">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <p>© 2022 All rights reserved</p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <ul class="social-links">
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                <li class="me-0"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}