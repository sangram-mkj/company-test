import React, { useState } from "react";
import "./css/home.css";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import main2 from "../assets/main-2-img.jpeg";
import m21 from "../assets/m2-1.png";
import m22 from "../assets/m2-2.png";
import m23 from "../assets/m2-3.png";
import m3 from "../assets/m3.png";
import m41 from "../assets/m4-1.jpeg";
import m42 from "../assets/m4-2.jpeg";
import m43 from "../assets/m4-3.jpeg";
import m44 from "../assets/m4-4.jpeg";
import m45 from "../assets/m4-5.jpeg";
import m46 from "../assets/m4-6.jpeg";
import m47 from "../assets/m4-7.jpeg";
import m48 from "../assets/m4-8.jpeg";
import m5 from "../assets/m5.png";
import m6 from "../assets/m6.png";
import { SlArrowRightCircle } from "react-icons/sl";
import { FaQuoteLeft } from "react-icons/fa";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

const Home = () => {
  const images = [main2, main2, m23];
  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* main-1 */}
      <div className="main">
        <div className="m-nav-bar">
          <div className="nav-left">
            <ul>
              <li>
                <a href="#">PROJECTS</a>
              </li>
              <li>
                <a href="#">EXPERTISE</a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">PEOPLE</a>
              </li>
            </ul>
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-right">
            <ul>
              <li>
                <a href="#">CAREERS</a>
              </li>
              <li>
                <a href="#">AU</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="m-bottom-left">
          <p>Home / Why work with us</p>
          <h1>Headline #1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="m-left-icon m-rect">
          <SlArrowLeft color="#F36F2B" />
        </div>
        <div className="m-right-icon m-rect">
          <SlArrowRight color="#F36F2B" />
        </div>
        <div className="m-h-line"></div>
      </div>

      {/* main-1   */}
      <div className="main-1">
        <div className="m-1-box">
          <p>01</p>
          <div className="m-1-data">
            <p>We stay connected</p>
            <div className="m-1-icon">
              <SlArrowRight />
            </div>
          </div>
        </div>
        <div className="m-1-box">
          <p>02</p>
          <div className="m-1-data">
            <p>We believe in diversity & inclusion</p>
            <div className="m-1-icon">
              <SlArrowRight />
            </div>
          </div>
        </div>
        <div className="m-1-box">
          <p>03</p>
          <div className="m-1-data">
            <p>We celebrate success</p>
            <div className="m-1-icon">
              <SlArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* main-2  */}
      <div className="main-2">
        <div className="m-2-v"></div>
        <div className="m-2-h"></div>
        <div onClick={nextSlide} className="m-2-rect m-2-left-icon">
          <SlArrowRight color="#F36F2B" />
        </div>
        <div onClick={prevSlide} className="m-2-rect m-2-h-right-icon">
          <SlArrowLeft color="#F36F2B" />
        </div>
        <div className="main-2-box m-2-left">
          <p>
            We <span className="m-2-inner-text">stay connected</span>
          </p>
          <div className="m-2-text-box">
            <div className="m2-image">
              <img src={m21} alt="icon" />
            </div>
            <div className="m-2-text">
              <h3>Quarterly Business Updates</h3>
              <p>
                We strive to stay connected as a team through communication and
                collaboration. This materialises every quarter through our
                Quarterly Business Update events. These gatherings are immersive
                sessions where every team member, regardless of rank or tenure,
                comes together to contribute to our overarching business
                strategy, and stay connected. They are opportunities to learn
                from our seasoned leaders and to also share personal insights
                and achievements that can steer our collective future. In an
                ever-evolving engineering landscape, staying connected isn’t
                just a benefit—it’s essential.
              </p>
            </div>
          </div>
          <div className="m-2-text-box">
            <div className="m2-image">
              <img src={m22} alt="icon" />
            </div>
            <div className="m-2-text">
              <h3>Quarterly Business Updates</h3>
            </div>
          </div>
          <div className="m-2-text-box">
            <div className="m2-image">
              <img src={m23} alt="icon" />
            </div>
            <div className="m-2-text">
              <h3>Quarterly Business Updates</h3>
            </div>
          </div>
        </div>
        <div className="main-2-box m-2-right">
          <img src={images[index]} alt="Main 2" />
        </div>
      </div>

      {/* main-3 */}
      <div className="main-3">
        <div className="m-3-upper">
          <div className="m-3-box m-3-upper-left">
            <p>
              We believe in{" "}
              <span className="m-3-inner-text">diversity & inclusion</span>
            </p>
          </div>
          <div className="m-3-box m-3-upper-right">
            <p>
              At CaSE we do not just accept difference — we celebrate it, we
              support it, and we thrive on it for the benefit of our employees,
              our services, our industry and our community. We are proud to be
              an equal opportunity employer. Guided by our values and beliefs,
              we foster an inclusive workplace culture where employees thrive
              because of their differences, not in spite of them.
            </p>
            <p>
              Our values and beliefs, we foster an inclusive workplace culture
              where employees thrive because of their differences, not in spite
              of them Our Commitment to reinventing the standard. With more than
              20 nationalities represented in our global workforce, we firmly
              believe that our ability to deliver high-quality results is fueled
              by our active efforts to embed diversity and inclusion. We
              recognise, respect, and strive to create an environment where
              employees can excel and feel a true sense of belonging.
            </p>
            <h3>Some of our strategic initiatives include:</h3>
          </div>
        </div>
        <div className="m-3-lower">
          <img src={m3} alt="Graph" />
        </div>
      </div>

      {/* main-4 */}
      <div className="main-4">
        <div className="m-4-pic-album">
          <img src={m41} alt="img" className="m-4-img m4-m41" />
          <img src={m42} alt="img" className="m-4-img m4-m42" />
          <img src={m43} alt="img" className="m-4-img m4-m43" />
          <img src={m44} alt="img" className="m-4-img m4-m44" />
          <img src={m45} alt="img" className="m-4-img m4-m45" />
          <div className="m-4-text">
            <h6>
              We celebrate <span className="m-3-inner-text">success</span>
            </h6>
            <p>
              At CaSE we understand that every achievement, big or small, is a
              result of the hard work and dedication of our team members. We
              take pride in celebrating these moments because they underscore
              the commitment and effort put into each project.
            </p>
            <p>
              Some of our favourite events on the calendar include our coveted
              Melbourne Cup event and our always amazing Christmas Party.
              In-between, our team celebrate together during team cycling
              events, regular team dinners and social morning teas to celebrate
              milestones and special days. Taking the time to celebrate wins is
              our way of showing gratitude and ensuring everyone knows their
              efforts make a difference.
            </p>
          </div>
        </div>
        <div className="m-4-middle-box">
          <div className="m-4-mid-box m-4-mid-box-1">
            <h6>
              Employee{" "}
              <span className="m-3-inner-text">Appreciation Program</span>
            </h6>
            <p>
              Our Employee Appreciation Program is tailored to honor the ongoing
              commitment and efforts of our long-serving team members. Our 5
              Year Club and 10 Year Club are special milestones within this
              program, celebrating employees who have dedicated half a decade or
              a full decade to our company mission. Each year, members of these
              clubs are invited to annual events held at select, memorable
              locations, reflecting our gratitude and recognition of their
              unwavering dedication. It's our way of saying thank you and
              ensuring that every significant chapter in our collective journey
              is celebrated with the grandeur it deserves
            </p>
          </div>
          <div className="m-4-mid-box">
            <img src={m46} alt="image" />
          </div>
        </div>
        <div className="m-4-lower-box">
          <div className="m-4-lower-left">
            <img src={m47} alt="img" />
          </div>
          <div className="m-4-lower-right">
            <img src={m48} alt="img" />
          </div>
        </div>
      </div>

      {/* main-5 */}
      <div className="main-5">
        <div className="m-5-p-left">
          <SlArrowLeft color="#F36F2B" />
        </div>
        <div className="m-5-p-right">
          <SlArrowRight color="#F36F2B" />
        </div>
        <div className="m-5-left">
          <img src={m5} alt="image" />
        </div>
        <div className="m-5-right">
          <FaQuoteLeft size="40" color="#F36F2B" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales
            turpis et lacinia fermentum. Curabitur vestibulum at arcu sed
            blandit. In consequat euismod purus nec imperdiet. <br />
            Title <br />
            Name
          </p>
          <div className="m-5-last-icon">
            <SlArrowRightCircle
              size="25"
              color="#FFFFFF"
              style={{ marginRight: 20 }}
            />{" "}
            Read my story
          </div>
        </div>
      </div>

      {/* main-6 */}
      <div className="main-6">
        <div className="m-6-upper">
          <h2>
            As a <span className="m-3-inner-text">global business,</span> we
            encourage you to contact us no matter where you are located in the
            world.
          </h2>
          <p>Browse our job opportunities across the globe.</p>
          <div className="m-6-u-text">
            OPEN ROLES{" "}
            <SlArrowRightCircle
              size="25"
              color="#F36F2B"
              style={{ marginLeft: 20 }}
            />
          </div>
        </div>
        <div className="m-6-lower">
          <img src={m6} alt="image" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
