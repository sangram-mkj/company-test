import React from "react";
import "./css/footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import footer from "../assets/footer.png";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="f-upper">
          <div className="f-u-box f-u-1">
            <img src={footer} alt="IMG" />
            <div className="f-icon-container">
              <FaInstagram color="#FFFFFF" size={25} style={{ margin: 10 }} />
              <FaFacebookF color="#FFFFFF" size={25} style={{ margin: 10 }} />
              <FaLinkedinIn color="#FFFFFF" size={25} style={{ margin: 10 }} />
            </div>
          </div>
          <div className="f-u-box f-u-2">
            <h3>Expertise</h3>
            <ul>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Specialist Expertise</a>
              </li>
              <li>
                <a href="#">Commercial Advice Traffic & Transport</a>
              </li>
              <li>
                <a href="#">Traffic & Transport</a>
              </li>
            </ul>
          </div>
          <div className="f-u-box f-u-3">
            <h3>Sectors</h3>
            <ul>
              <li>
                <a href="#">Road</a>
              </li>
              <li>
                <a href="#">Tunner</a>
              </li>
              <li>
                <a href="#">Bridge</a>
              </li>
              <li>
                <a href="#">Others +</a>
              </li>
            </ul>
          </div>
          <div className="f-u-box f-u-4">
            <div className="f-u-box-inner">
              <ul>
                <li>
                  <a href="#">Our Business</a>
                </li>
                <li>
                  <a href="#">Work With Us</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Our Capabilities</a>
                </li>
                <li>
                  <a href="#">Engineers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="f-lower">
          <p>&copy; 2021 Case International. All right reserved.</p>
          <div>
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
