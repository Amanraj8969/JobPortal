import React from 'react';

import "./About.css"
import own from "../assets/images/own.png"
import Footer from './footer/Footer';




const About = () => {
  return (
    <div className="about-page">
      <div className="founder-section">
        <div className="founder-info">
          <img
            src={own}// Replace with the path to the founder's photo
            alt="Founder's Photo"
            className="founder-photo"
          />
          <h2 className="founder-name">Ghulam Sarwar</h2>
        </div>
      </div>
      <div className="company-details">
        <h1 className="company-name">Nebula-recruiters.com </h1>
        <p className="company-description">
        Nebula-Recruiters, an integral extension of the illustrious Nebula-Enterprises, stands as a beacon of excellence in the realm of job seeker platforms. With its foundations rooted in the visionary leadership of Director Ghulam Sarwar, headquartered in the vibrant city of New Delhi, Nebula-Recruiters has emerged as a steadfast companion to job seekers navigating the labyrinthine corridors of the corporate world. Committed to unlocking opportunities for every aspiring professional, this platform aspires to open doors previously unexplored.

At the heart of Nebula-Recruiters' mission lies a holistic approach to career growth. Beyond merely presenting a plethora of job opportunities, the platform is resolutely dedicated to fostering an environment of continuous learning and personal development. Through a range of meticulously crafted facilities, Nebula-Recruiters empowers job seekers with the tools to not only secure a position but to thrive within it. Whether through skill enhancement programs, professional workshops, or insightful resources, the platform's commitment to nurturing well-rounded individuals sets it apart.

Nebula-Recruiters not only sets its sights on job placement but elevates its services with an array of premium offerings. The platform's dedicated arm, Nebula-Recruiters, goes beyond the ordinary by providing a suite of specialized services. From expertly crafted resume writing to compelling content creation, from portfolio upgrades to access to premium facilities, Nebula-Recruiters curates an unparalleled experience tailored to the discerning needs of modern professionals.

In essence, Nebula-Recruiters emerges as a guiding star for job seekers, illuminating their path toward success in the corporate realm. Through its visionary leadership, comprehensive learning opportunities, and premium services, Nebula-Recruiters not only opens doors but also empowers individuals to stride confidently through them. As the professional landscape evolves, Nebula-Recruiters remains a steadfast partner, dedicated to transforming aspirations into achievements and shaping the future of countless careers.
        </p>
        <p className="company-address">GSTIN:10CARPM5468B1ZR </p>
        <p className="company-address">Address: Saguna road, khagaul more, danapur patna,801503,India</p>
        <p className="company-contact">Contact:g.sarwar95@gmail.com </p>
      </div>
    <Footer/>
    </div>
  );
};

export default About;

