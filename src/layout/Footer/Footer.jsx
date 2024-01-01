import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const social_iconsStyles = { color: "#fff", fontSize: "20px" };
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Career Counseling</a>
                </li>
                <li>
                  <a href="#">Employability Test</a>
                </li>
                <li>
                  <a href="#">Video CV new</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Job Seekers</h4>
              <ul>
                <li>
                  <a href="#">Jobs Panel</a>
                </li>
                <li>
                  <a href="#">List of Features</a>
                </li>
                <li>
                  <a href="#">Create Account</a>
                </li>
                <li>
                  <a href="#">Career Counseling</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a>
                  <FaFacebookF style={social_iconsStyles} />
                </a>
                <a href="#">
                  <FaTwitter style={social_iconsStyles} />
                </a>
                <a href="#">
                  <FaInstagram style={social_iconsStyles} />
                </a>
                <a href="#">
                  <FaLinkedinIn style={social_iconsStyles} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
