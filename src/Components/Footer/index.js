import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/IMG_5239.PNG';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="Logo" style={{ maxWidth: '100px' }} />
            <p className="mt-3">Connect with us on social media:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com"><FaFacebook className="mr-3" /></a>
              <a href="https://www.twitter.com"><FaTwitter className="mr-3" /></a>
              <a href="https://www.instagram.com"><FaInstagram /></a>
            </div>
          </div>
          <div className="col-md-8">
            <h5>Contact Us</h5>
            <p>123 Main Street, City</p>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;