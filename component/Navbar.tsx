import { Grid } from "@mui/material";
import Image from 'next/image'
import Logo from "../assets/NONICOMS.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky sticky-dark" role="navigation" id="navbar">
            <div className="container">
                
                <a className="navbar-brand logo text-uppercase" href="index.html"><Image src={Logo} alt="logo" width={70} height={70} /></a>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-center" id="navbar-navlist">
                        <li className="nav-item active">
                            <a data-scroll="" href="#home" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a data-scroll="" href="#features" className="nav-link">Features</a>
                        </li>
                        <li className="nav-item">
                            <a data-scroll="" href="#services" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a data-scroll="" href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a data-scroll="" href="#pricing" className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a data-scroll="" href="#blog" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a data-scroll="" href="#contact" className="nav-link">Contact</a>
                        </li>

                    </ul>
                    <div className="nav-button ms-auto">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <button type="button" className="btn btn-primary navbar-btn btn-rounded waves-effect waves-light">Try it
                                    Free</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;




