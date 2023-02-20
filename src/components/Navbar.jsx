import { Link, Outlet } from 'react-router-dom'
import menuBtn from '../assets/images/bar.svg'
import '../index.css'
import '../assets/css/fonts.css'
import '../assets/css/navbar.css'
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.logo}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><img src={menuBtn} alt="bar-icon" /></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/services' className="nav-link">services</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutUs">about us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us.html">contact us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase pe-0" href="#faq's">faq's</a>
              </li>
            </ul>

          </div>
          <a href="#" className="phone">
            <i className="fa-solid fa-phone"></i>
            <span>0123456789</span>
          </a>
        </div>
      </nav>
      <Outlet />
    </div>

  )
}