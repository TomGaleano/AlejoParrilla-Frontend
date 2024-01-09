import './Footer.css';
import logo from '../assets/LOGOO-300x114.png';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import rappi from '../assets/rappi.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="column logo-column">
                <img src={logo} alt="Alejoparrilla's logo" className="footer-logo" />
                <div className="social-icons">
                    <FaInstagram color="white" className="social-icon-tw" />
                    <FaFacebook color="white" className="social-icon-fa" />
                    <img src={rappi} alt="Rappi logo" className="rappi-logo" />
                </div>
            </div>
            <div className="column">
                <div className="contact-info">
                    <a href="https://wa.me/573214607611" className="contact-info" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp color="white" />
                        <span>+57 321-460-7611</span>
                    </a>
                </div>
                <p className="hours">Domingo a Domingo 10:00 a. m. a 9:00 p. m.</p>
                <p>Contacto</p>
                <p>Trabaja con nosotros</p>
            </div>
            <div className="column">
                <h1>DB</h1>
            </div>
        </div>
    );
}

export default Footer;